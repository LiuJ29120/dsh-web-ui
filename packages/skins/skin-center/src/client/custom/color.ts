/**
 * Pure color math for the skin-center "upload image -> custom skin" feature.
 * Everything here is a plain function over sRGB triples; no DOM, no globals, so
 * it is unit-testable and bundles cleanly into the client artifact.
 *
 * Interpolation / scaling happen in OKLab perceptually-uniform space instead of
 * naively in RGB, so blending a light surface toward an ink preserves hue and
 * keeps contrast gradients from banding into a muddy mix. The DSH design tokens
 * (design-platform.css) are reproduced as ramps anchored on the 4 seed colors.
 */

/** An sRGB color, channels each 0..255. */
export interface Rgb {
  r: number
  g: number
  b: number
}

/** OKLab in floats: l in 0..~1, a and b are signed. */
interface Lab {
  l: number
  a: number
  b: number
}

function clamp255(n: number): number {
  return Math.round(Math.max(0, Math.min(255, n)))
}

/** Parse `#rrggbb` into {r,g,b}. Returns null for malformed input. */
export function parseHex(hex: string): Rgb {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (m === null) return { r: 128, g: 128, b: 128 }
  const v = parseInt(m[1], 16)
  return { r: (v >> 16) & 0xff, g: (v >> 8) & 0xff, b: v & 0xff }
}

/** Basic linearization: sRGB channel 0..255 -> linear 0..1. */
function toLinear(c: number): number {
  const v = c / 255
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
}

/** Delinearize linear 0..1 -> sRGB channel 0..255. */
function fromLinear(v: number): number {
  const s = v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055
  return clamp255(s * 255)
}

/** sRGB -> OKLab. */
export function toOklab(c: Rgb): Lab {
  const r = toLinear(c.r)
  const g = toLinear(c.g)
  const b = toLinear(c.b)
  // Linear sRGB -> LMS (the OKLab forward matrix).
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
  const l3 = Math.cbrt(l)
  const m3 = Math.cbrt(m)
  const s3 = Math.cbrt(s)
  return {
    l: 0.2104542553 * l3 + 0.793617785 * m3 - 0.0040720468 * s3,
    a: 1.9779984951 * l3 - 2.428592205 * m3 + 0.4505937099 * s3,
    b: 0.0259040371 * l3 + 0.7827717662 * m3 - 0.808675766 * s3,
  }
}

/** OKLab -> sRGB. */
export function fromOklab(lab: Lab): Rgb {
  const l3 = lab.l + 0.3963377774 * lab.a + 0.2158037573 * lab.b
  const m3 = lab.l - 0.1055613458 * lab.a - 0.0638541728 * lab.b
  const s3 = lab.l - 0.0894841775 * lab.a - 1.291485548 * lab.b
  const l = l3 * l3 * l3
  const m = m3 * m3 * m3
  const s = s3 * s3 * s3
  const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
  const b = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
  return { r: fromLinear(r), g: fromLinear(g), b: fromLinear(b) }
}

/** Perceptual chroma of an OKLab color (0 = neutral gray). */
export function chroma(lab: Lab): number {
  return Math.hypot(lab.a, lab.b)
}

/**
 * Perceived lightness used for ordering/contrast decisions. Returns the WCAG
 * relative luminance of the sRGB color, 0 (black) .. 1 (white).
 */
export function luminance(c: Rgb): number {
  const r = toLinear(c.r)
  const g = toLinear(c.g)
  const b = toLinear(c.b)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Mix two sRGB colors in OKLab by `t` (0 = `from`, 1 = `to`). Perceptually
 * uniform interpolation keeps the middle steps from passing through gray.
 */
export function okMix(from: Rgb, to: Rgb, t: number): Rgb {
  const a = toOklab(from)
  const b = toOklab(to)
  const c = Math.max(0, Math.min(1, t))
  return fromOklab({
    l: a.l + (b.l - a.l) * c,
    a: a.a + (b.a - a.a) * c,
    b: a.b + (b.b - a.b) * c,
  })
}

/**
 * Shift hue (rotate the a-b chroma vector) by `degrees` in OKLab while keeping
 * lightness and chroma magnitude. A tiny shift is used to make the bluish
 * neutral ramp read cooler than the plain neutral one.
 */
export function rotateHue(rgb: Rgb, degrees: number): Rgb {
  const lab = toOklab(rgb)
  const rad = (degrees * Math.PI) / 180
  const cos = Math.cos(rad)
  const sin = Math.sin(rad)
  return fromOklab({
    l: lab.l,
    a: lab.a * cos - lab.b * sin,
    b: lab.a * sin + lab.b * cos,
  })
}

/** Proportional blend that guarantees at least `min` fraction of `target`. */
function pulledMix(base: Rgb, target: Rgb, over: number, min: number): Rgb {
  const t = Math.max(min, Math.min(1, over))
  return okMix(base, target, t)
}

/** hex form `#rrggbb`. */
export function hex(c: Rgb): string {
  const to = (n: number) => n.toString(16).padStart(2, '0')
  return `#${to(c.r)}${to(c.g)}${to(c.b)}`
}

/** CSS `rgb(r, g, b)` string. */
export function cssRgb(c: Rgb): string {
  return `rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`
}

/** CSS `rgba(r, g, b, a)` string. */
export function cssRgba(c: Rgb, alpha: number): string {
  const a = Math.max(0, Math.min(1, alpha))
  return `rgba(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)}, ${a.toFixed(3).replace(/0+$/, '').replace(/\.$/, '.0')})`
}
