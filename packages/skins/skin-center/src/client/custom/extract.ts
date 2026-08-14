/**
 * Client-side image analysis for the custom-skin card: decode a picked
 * PNG/JPG/WebP with createImageBitmap, rasterize it down to a small sampling
 * grid with a <canvas>, and turn the pixel data into 4 seed colors (accent,
 * secondary, surface, text) plus a light/dark direction guess. Nothing is
 * uploaded to the host — the bitmap lives entirely in the browser memory and
 * the seeds are pure functions over pixel data.
 */
import {
  type Rgb,
  chroma,
  fromOklab,
  luminance,
  okMix,
  toOklab,
} from './color.ts'

/** The four seed colors the token derive() consumes. */
export interface SkinSeeds {
  /** Primary / brand accent (most vibrant, frequent color). */
  accent: Rgb
  /** Secondary accent (a distinct second hue or accent variant). */
  secondary: Rgb
  /** Base surface hue (the page background family). */
  surface: Rgb
  /** Text / ink hue. */
  text: Rgb
  /** True when the image reads dark (seed family flips to the dark variant). */
  dark: boolean
}

/** Sampling grid edge length used by the extractor. */
const SAMPLE_SIZE = 96

/** Chroma threshold (OKLab) separating "colorful" pixels from near-neutrals. */
const COLORFUL_CHROMA = 0.035

/** Pixels below this alpha are treated as transparent (skipped). */
const MIN_ALPHA = 125

/**
 * Decode a picked image file into an ImageBitmap. Rejects non-image or
 * unreadable payloads; the caller surfaces the message to the card.
 */
export async function decodeImage(file: File): Promise<ImageBitmap> {
  const bitmap = await createImageBitmap(file)
  if (bitmap.width === 0 || bitmap.height === 0) {
    bitmap.close()
    throw new Error('empty image')
  }
  return bitmap
}

/**
 * Rasterize a decoded bitmap onto an SAMPLE_SIZE grid and read its pixels.
 * @returns flat RGBA buffer (SAMPLE_SIZE * SAMPLE_SIZE * 4 bytes).
 */
export function samplePixels(bitmap: ImageBitmap): Uint8ClampedArray {
  const canvas = document.createElement('canvas')
  canvas.width = SAMPLE_SIZE
  canvas.height = SAMPLE_SIZE
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (ctx === null) throw new Error('canvas 2d unavailable')
  ctx.drawImage(bitmap, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE)
  const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE)
  bitmap.close()
  return data
}

interface LabRecord {
  l: number
  a: number
  b: number
}

/** Weighted cluster of pixels sharing a lightness bucket. */
interface Bucket {
  sum: Rgb
  count: number
  labSum: LabRecord
}

/**
 * Extract the four seeds from a raw RGBA sample buffer (see samplePixels).
 * The algorithm:
 *  - group pixels into OKLab lightness buckets; a bucket is "neutral" when its
 *    mean chroma stays below a small threshold;
 *  - surface is the highest-count neutral bucket (nudged toward white when the
 *    art is bright and nearly blank);
 *  - text is the extreme-opposite dominant neutral (darkest ink on a light
 *    image, lightest highlight on a dark one);
 *  - accent is the most chroma-weighted colorful voxel; secondary is its most
 *    distant colorful peer, else a hue-rotated accent.
 */
export function extractSeedsFromPixels(data: Uint8ClampedArray): SkinSeeds {
  const byLight = new Map<number, Bucket>()
  const colorful: Array<{ rgb: Rgb; chroma: number; key: string }> = []
  let lumTotal = 0
  let seen = 0

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < MIN_ALPHA) continue
    const rgb = { r: data[i], g: data[i + 1], b: data[i + 2] }
    const lab = toOklab(rgb)
    lumTotal += lab.l
    seen += 1

    const lightKey = Math.max(0, Math.min(15, Math.round(lab.l * 16)))
    const bucket = byLight.get(lightKey) ?? { sum: { r: 0, g: 0, b: 0 }, count: 0, labSum: { l: 0, a: 0, b: 0 } }
    bucket.count += 1
    bucket.sum.r += rgb.r
    bucket.sum.g += rgb.g
    bucket.sum.b += rgb.b
    bucket.labSum.l += lab.l
    bucket.labSum.a += lab.a
    bucket.labSum.b += lab.b
    byLight.set(lightKey, bucket)

    const ch = chroma(lab)
    if (ch >= COLORFUL_CHROMA) {
      colorful.push({ rgb, chroma: ch, key: `${lightKey}:${quantHue(lab)}` })
    }
  }

  if (seen === 0) {
    return {
      accent: { r: 43, g: 124, b: 217 },
      secondary: { r: 80, g: 120, b: 200 },
      surface: { r: 244, g: 246, b: 248 },
      text: { r: 30, g: 34, b: 48 },
      dark: false,
    }
  }

  const meanLum = lumTotal / seen
  const dark = meanLum < 0.45

  const buckets = [...byLight.values()]

  const averageNeutral = (b: Bucket): { rgb: Rgb; lab: LabRecord } => ({
    rgb: { r: b.sum.r / b.count, g: b.sum.g / b.count, b: b.sum.b / b.count },
    lab: { l: b.labSum.l / b.count, a: b.labSum.a / b.count, b: b.labSum.b / b.count },
  })

  // Lead neutral bucket (highest count) is the surface.
  const neutralSort = [...buckets].sort((p, q) => q.count - p.count)
  let surface = averageNeutral(neutralSort[0]).rgb
  if (!dark && luminance(surface) > 0.86) {
    surface = okMix(surface, { r: 255, g: 255, b: 255 }, 0.45)
  }

  // Text picks the dominant bucket at the opposite light end.
  const inkBucket = dark
    ? [...buckets].sort((p, q) => q.labSum.l / q.count - p.labSum.l / p.count)[0]
    : [...buckets].sort((p, q) => p.labSum.l / q.count - q.labSum.l / q.count)[0]
  const text = averageNeutral(inkBucket).rgb

  // Accent: favorite colorful voxel by chroma * count weight.
  const votes = new Map<string, { rgb: Rgb; chroma: number; count: number }>()
  for (const c of colorful) {
    const v = votes.get(c.key) ?? { rgb: c.rgb, chroma: c.chroma, count: 0 }
    v.count += 1
    if (c.chroma > v.chroma) {
      v.chroma = c.chroma
      v.rgb = c.rgb
    }
    votes.set(c.key, v)
  }
  const rank = [...votes.values()].sort(
    (p, q) => q.chroma * Math.pow(q.count, 0.6) - p.chroma * Math.pow(p.count, 0.6),
  )
  let accent = rank[0] !== undefined ? rank[0].rgb : okMix({ r: 43, g: 124, b: 217 }, surface, 0.25)
  accent = enrichAccent(accent)

  // Secondary: the strongest colorful voxel far from the accent.
  let secondary = accent
  for (const v of rank) {
    if (chromaDist(toOklab(v.rgb), toOklab(accent)) > 0.09) {
      secondary = v.rgb
      break
    }
  }
  if (secondary === accent) secondary = rotateHue(accent, -30)

  return { accent, secondary, surface, text, dark }
}

/** Rotate the accent's OKLab chroma vector by `degrees`. */
function rotateHue(rgb: Rgb, degrees: number): Rgb {
  const lab = toOklab(rgb)
  const rad = (degrees * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  return fromOklab({ l: lab.l, a: lab.a * cos - lab.b * sin, b: lab.a * sin + lab.b * cos })
}

function chromaDist(p: LabRecord, q: LabRecord): number {
  return Math.hypot(p.l - q.l, p.a - q.a, p.b - q.b)
}

function quantHue(lab: LabRecord): number {
  return Math.floor((Math.atan2(lab.b, lab.a) / (2 * Math.PI) + 0.5) * 12) % 12
}

/** Pull an accent's lightness into a usable mid band so an extreme art pick
 *  does not become a washed tint or an unreadable near-black. */
function enrichAccent(c: Rgb): Rgb {
  const lab = toOklab(c)
  const targetLight = Math.max(0.42, Math.min(0.62, lab.l))
  const mixed = fromOklab({ l: targetLight, a: lab.a, b: lab.b })
  const labM = toOklab(mixed)
  if (chroma(labM) < 0.09) {
    return fromOklab({ l: labM.l, a: labM.a * 1.6, b: labM.b * 1.6 })
  }
  return mixed
}

/** Build a thumbnail data URL of the sampled pixels for the backdrop fallback. */
export function sampleDataUrl(data: Uint8ClampedArray): string {
  const canvas = document.createElement('canvas')
  canvas.width = SAMPLE_SIZE
  canvas.height = SAMPLE_SIZE
  const ctx = canvas.getContext('2d')
  if (ctx === null) return ''
  const image = new ImageData(data, SAMPLE_SIZE, SAMPLE_SIZE)
  ctx.putImageData(image, 0, 0)
  return canvas.toDataURL('image/webp', 0.7)
}

/**
 * Render a decoded bitmap down to (at most) `max` on the long edge and return
 * a WebP data URL for use as the custom-skin backdrop. The bitmap is NOT closed
 * here so the caller can still sample its pixels afterwards.
 */
export function thumbnailDataUrl(bitmap: ImageBitmap, max: number): string {
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height))
  const w = Math.max(1, Math.round(bitmap.width * scale))
  const h = Math.max(1, Math.round(bitmap.height * scale))
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (ctx === null) return ''
  ctx.drawImage(bitmap, 0, 0, w, h)
  // 0.7 WebP keeps the record small enough to survive localStorage quota.
  return canvas.toDataURL('image/webp', 0.7)
}
