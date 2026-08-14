/**
 * Token derivation for the custom (upload-image) skin.
 *
 * From the 4 seeds extracted from an image (accent / secondary / surface /
 * text, plus the light-or-dark direction) we synthesize the full DSH design
 * token surface: every `--dsw-static-*` ramp the GUI reads and a coherent
 * `--dsw-alias-*` remap mapping each semantic alias onto the right ramp (brand
 * primary, states, layers, borders, labels). The derivation is pure — it maps
 * seeds to CSS custom-property declarations as plain strings — and lives in the
 * client bundle, so the custom skin is mounted by injecting a single <style>
 * scoped on body[data-dsh-skin="custom"] (that keeps everything hot-swappable
 * and restorable: removing the attribute + the tag reverts the GUI exactly).
 *
 * Design notes
 *  - Interpolation/mixing happen in OKLab (see color.ts) so ramps stay
 *    perceptually uniform and the surface never collides into the label ramp.
 *  - The neutral-bluish + neutral ramps are built between a light endpoint
 *    (surface-tinted) and a dark endpoint (ink-tinted); the accent seeds drive
 *    the deepseek/blue families. Red / green / amber stay canonical (semantic
 *    safety: warn/success/danger must remain distinguishable even from a
 *    monochrome photo).
 *  - Both themes are always emitted (the light scope and the
 *    [data-ds-dark-theme] scope); the light/dark flip inside the card previews
 *    both reads of the same image, and whichever scope is active drives GUI.
 */
import type { Rgb } from './color.ts'
import { cssRgb, fromOklab, okMix, toOklab } from './color.ts'
import type { SkinSeeds } from './extract.ts'

/** CSS custom-property name -> value map (one theme scope). */
export type TokenMap = Record<string, string>

const WHITE: Rgb = { r: 255, g: 255, b: 255 }
const BLACK: Rgb = { r: 0, g: 0, b: 0 }

/** Neutral ramp stop positions across the bluish ladder (light=0 -> dark=1). */
const NEUTRAL_STOPS: ReadonlyArray<readonly [string, number]> = [
  ['00', 0.0],
  ['50', 0.07],
  ['60', 0.09],
  ['75', 0.115],
  ['100', 0.15],
  ['150', 0.19],
  ['200', 0.24],
  ['250', 0.28],
  ['300', 0.33],
  ['400', 0.43],
  ['500', 0.53],
  ['550', 0.58],
  ['600', 0.63],
  ['700', 0.73],
  ['750', 0.79],
  ['800', 0.84],
  ['850', 0.88],
  ['875', 0.91],
  ['900', 0.94],
  ['950', 0.97],
  ['1000', 1.0],
]

/** Accent ramp steps: 1.0 = the anchor accent; below tints, above shades. */
const ACCENT_STEPS: ReadonlyArray<readonly [string, number]> = [
  ['50', 0.05],
  ['100', 0.16],
  ['200', 0.3],
  ['300', 0.46],
  ['400', 0.68],
  ['450', 0.86],
  ['500', 1.0],
  ['600', 1.22],
  ['700', 1.42],
  ['800', 1.62],
  ['900', 1.8],
]

/** The scoping attribute the custom-skin styles are mounted under. */
export const CUSTOM_BODY_ATTR = 'data-dsh-skin="custom"'

type RgbMap = Record<string, Rgb>

/**
 * Generate the complete token map for one theme from the seeds.
 * @param seeds - extracted seeds.
 * @param darkTheme - true for the [data-ds-dark-theme] scope.
 */
export function deriveTokens(seeds: SkinSeeds, darkTheme: boolean): TokenMap {
  const { accent, secondary, surface, text } = seeds

  // Light theme anchors the surface near white and the ink dark; dark theme
  // anchors the base deep (surface darkened) and the labels light (ink
  // lightened toward white).
  const lightEnd = darkTheme ? okMix(text, WHITE, 0.86) : okMix(WHITE, surface, 0.12)
  const darkEnd = darkTheme ? okMix(surface, BLACK, 0.62) : okMix(okMix(text, BLACK, 0.4), surface, 0.25)

  const neutral = buildRampMap(lightEnd, darkEnd)
  const bluish = buildBluishMap(lightEnd, darkEnd, accent)

  const deepseek = buildAccentSteps(accent, surface)
  const blue = buildBlueSteps(accent, surface)
  const secondarySteps = buildAccentSteps(secondary, surface)

  const m: TokenMap = {}
  writeStatics(m, neutral, bluish, deepseek, blue, secondarySteps)
  writeAliases(m, darkTheme)
  m['--dsh-scrollbar-thumb'] = 'var(--dsw-alias-scrollbar-bg-l2)'
  m['--dsh-scrollbar-thumb-hover'] = 'var(--dsw-alias-scrollbar-hover-l2)'
  return m
}

function buildRampMap(lightEnd: Rgb, darkEnd: Rgb): RgbMap {
  const out: RgbMap = {}
  for (const [suffix, t] of NEUTRAL_STOPS) out[suffix] = okMix(lightEnd, darkEnd, t)
  return out
}

/** The bluish ramp: the base ramp tilted slightly toward the accent hue so it
 *  reads cooler than the plain neutral one (mirrors neutral-bluish). */
function buildBluishMap(lightEnd: Rgb, darkEnd: Rgb, accent: Rgb): RgbMap {
  const out: RgbMap = {}
  for (const [suffix, t] of NEUTRAL_STOPS) {
    out[suffix] = tiltAccent(okMix(lightEnd, darkEnd, t), accent)
  }
  return out
}

/** Tilt a neutral toward the accent hue enough to read cool without muddying. */
function tiltAccent(c: Rgb, accent: Rgb): Rgb {
  return okMix(c, okMix(accent, WHITE, 0.4), 0.06)
}

/** Build the deepseek-style ramp around an accent (tint -> accent -> shade). */
function buildAccentSteps(accent: Rgb, surface: Rgb): RgbMap {
  const tint = okMix(WHITE, accent, 0.05)
  const shade = okMix(accent, BLACK, 0.34)
  const lastT = ACCENT_STEPS[ACCENT_STEPS.length - 1][1]
  const range = lastT - 1
  const out: RgbMap = {}
  for (const [suffix, t] of ACCENT_STEPS) {
    if (t === 1) {
      out[suffix] = accent
    } else if (t < 1) {
      out[suffix] = okMix(tint, accent, t)
    } else {
      out[suffix] = okMix(accent, shade, (t - 1) / range)
    }
  }
  return out
}

/** Blue-* family mirrors deepseek with a tiny hue rotation so it stays distinct. */
function buildBlueSteps(accent: Rgb, surface: Rgb): RgbMap {
  const base = buildAccentSteps(accent, surface)
  const out: RgbMap = {}
  for (const [suffix, c] of Object.entries(base)) {
    const lab = toOklab(c)
    out[suffix] = fromOklab({ l: lab.l, a: lab.a - 0.01, b: lab.b + 0.02 })
  }
  return out
}

const RED = { '--dsw-static-red-50': 'rgb(254, 242, 242)', '--dsw-static-red-100': 'rgb(254, 226, 226)', '--dsw-static-red-400': 'rgb(242, 90, 90)', '--dsw-static-red-500': 'rgb(239, 68, 68)', '--dsw-static-red-600': 'rgb(236, 19, 19)', '--dsw-static-red-900': 'rgb(87, 12, 12)' }
const GREEN = { '--dsw-static-green-100': 'rgb(230, 250, 237)', '--dsw-static-green-400': 'rgb(78, 209, 126)', '--dsw-static-green-500': 'rgb(34, 197, 94)', '--dsw-static-green-900': 'rgb(35, 60, 44)' }
const AMBER = { '--dsw-static-amber-100': 'rgb(254, 245, 231)', '--dsw-static-amber-400': 'rgb(247, 173, 49)', '--dsw-static-amber-500': 'rgb(245, 158, 11)', '--dsw-static-amber-600': 'rgb(221, 134, 41)', '--dsw-static-amber-900': 'rgb(39, 36, 31)' }

/** Emit the static ramps (RGB literals) that the alias layer then references. */
function writeStatics(
  m: TokenMap,
  neutral: RgbMap,
  bluish: RgbMap,
  deepseek: RgbMap,
  blue: RgbMap,
  secondary: RgbMap,
): void {
  Object.assign(m, RED, GREEN, AMBER)
  for (const [suffix, c] of Object.entries(neutral)) m[`--dsw-static-neutral-${suffix}`] = cssRgb(c)
  for (const [suffix, c] of Object.entries(bluish)) m[`--dsw-static-neutral-bluish-${suffix}`] = cssRgb(c)
  for (const [suffix, c] of Object.entries(deepseek)) {
    m[`--dsw-static-deepseek-${suffix}`] = cssRgb(c)
    m[`--dsw-static-blue-${suffix}`] = cssRgb(blue[suffix])
  }
  m['--dsw-static-deepseek-700-delete'] = cssRgb(deepseek['700'])
  m['--dsw-static-deepseek-50p'] = cssRgb(deepseek['100'])
  m['--dsw-static-blue-950'] = cssRgb(deepseek['900'])
  m['--dsw-static-blue-75'] = cssRgb(deepseek['100'])
  m['--dsw-static-neutral-850'] = cssRgb(neutral['850'])
  for (const [suffix, c] of Object.entries(secondary)) m[`--dsw-static-secondary-${suffix}`] = cssRgb(c)
}

const V = {
  n00: 'var(--dsw-static-neutral-bluish-00)',
  n75: 'var(--dsw-static-neutral-bluish-75)',
  n400: 'var(--dsw-static-neutral-bluish-400)',
  n600: 'var(--dsw-static-neutral-bluish-600)',
  n700: 'var(--dsw-static-neutral-bluish-700)',
  n800: 'var(--dsw-static-neutral-bluish-800)',
  n850: 'var(--dsw-static-neutral-bluish-850)',
  n900: 'var(--dsw-static-neutral-bluish-900)',
  n950: 'var(--dsw-static-neutral-bluish-950)',
  n1000: 'var(--dsw-static-neutral-bluish-1000)',
  ds100: 'var(--dsw-static-deepseek-100)',
  ds200: 'var(--dsw-static-deepseek-200)',
  ds300: 'var(--dsw-static-deepseek-300)',
  ds400: 'var(--dsw-static-deepseek-400)',
  ds500: 'var(--dsw-static-deepseek-500)',
  ds600: 'var(--dsw-static-deepseek-600)',
  ds800: 'var(--dsw-static-deepseek-800)',
}

/** Map semantic aliases onto the ramps (brand -> accent, base -> bluish,
 *  labels -> ink), closely mirroring design-platform.css. */
function writeAliases(
  m: TokenMap,
  darkTheme: boolean,
): void {
  const borderInk = darkTheme ? '255, 255, 255' : '15, 22, 34'

  // Panel / background-fill tokens are intentionally translucent so the
  // custom backdrop image behind the CSS panels shows through (same approach
  // as blue-fantasy / whale-song). Light uses a near-white veil, dark a deep
  // navy veil; alphas track the blue-fantasy magnitudes so text stays readable
  // while the art glows through.
  m['--dsw-alias-bg-base'] = darkTheme ? 'rgba(16, 22, 42, 0.5)' : 'rgba(255, 255, 255, 0.45)'
  m['--dsw-alias-bg-layer-1'] = darkTheme ? 'rgba(26, 34, 56, 0.55)' : 'rgba(243, 245, 250, 0.5)'
  m['--dsw-alias-bg-layer-2'] = darkTheme ? 'rgba(32, 42, 68, 0.6)' : 'rgba(233, 237, 247, 0.55)'
  m['--dsw-alias-bg-layer-3'] = darkTheme ? 'rgba(38, 50, 79, 0.64)' : 'rgba(221, 227, 241, 0.58)'
  m['--dsw-alias-bg-module-platform'] = darkTheme ? 'rgba(32, 42, 68, 0.6)' : 'rgba(233, 237, 247, 0.55)'
  m['--dsw-alias-bg-multi-select'] = darkTheme ? 'rgba(44, 55, 101, 0.8)' : 'rgba(220, 227, 247, 0.8)'
  // Overlay (behind modals) stays near-solid so interactive surfaces read, but
  // still lets a hint of the art through.
  m['--dsw-alias-bg-overlay'] = darkTheme ? 'rgba(26, 34, 56, 0.92)' : 'rgba(238, 241, 249, 0.92)'
  m['--dsw-alias-bg-mask-1'] = darkTheme ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.24)'
  m['--dsw-alias-bg-mask-2'] = darkTheme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.12)'
  m['--dsw-alias-bg-mask-3'] = 'rgba(0, 0, 0, 0.48)'
  m['--dsw-alias-bg-mask-photo'] = 'rgba(0, 0, 0, 0.88)'
  m['--dsw-alias-bg-mask-drop'] = darkTheme ? 'rgba(20, 22, 28, 0.7)' : 'rgba(255, 255, 255, 0.7)'
  m['--dsw-alias-bg-skeleton'] = darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'

  m['--dsw-alias-border-l1'] = `rgba(${borderInk}, 0.06)`
  m['--dsw-alias-border-l2'] = `rgba(${borderInk}, 0.1)`
  m['--dsw-alias-border-l2-darkmode-thin'] = `rgba(${borderInk}, 0.06)`
  m['--dsw-alias-border-l3'] = `rgba(${borderInk}, 0.12)`
  m['--dsw-alias-border-l4'] = `rgba(${borderInk}, 0.16)`
  m['--dsw-alias-border-inverted'] = darkTheme ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0)'
  m['--dsw-alias-border-inverted2'] = darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0)'

  m['--dsw-alias-brand-primary'] = V.ds600
  m['--dsw-alias-brand-primary-new-colorprimary-new-color'] = V.ds500
  m['--dsw-alias-brand-text'] = V.ds800
  m['--dsw-alias-brand-primary-invert'] = V.n00

  m['--dsw-alias-button-primary-fill'] = V.ds600
  m['--dsw-alias-button-primary-hover'] = V.ds500
  m['--dsw-alias-button-primary-dimmed'] = V.ds100
  m['--dsw-alias-button-info-fill'] = V.ds500
  m['--dsw-alias-button-info-hover'] = V.ds400
  m['--dsw-alias-button-contrast-fill'] = V.n700
  m['--dsw-alias-button-elevated-fill'] = V.n00
  m['--dsw-alias-button-floating-fill'] = V.n00
  m['--dsw-alias-button-floating-hover'] = V.n75
  m['--dsw-alias-button-ghost-active-border'] = V.ds300
  m['--dsw-alias-button-ghost-active-fill'] = V.ds100
  m['--dsw-alias-button-ghost-active-hover'] = V.ds200
  m['--dsw-alias-button-tool-bar-fill'] = darkTheme ? 'rgba(160, 175, 205, 0.5)' : 'rgba(84, 85, 87, 0.5)'
  m['--dsw-alias-button-tool-bar-fill-invisible'] = darkTheme ? 'rgba(160, 175, 205, 0.36)' : 'rgba(31, 31, 31, 0.36)'
  m['--dsw-alias-button-tool-bar-hover'] = darkTheme ? 'rgba(160, 175, 205, 0.6)' : 'rgba(84, 85, 87, 0.6)'

  m['--dsw-alias-interactive-bg-active'] = darkTheme ? 'rgba(255, 255, 255, 0.14)' : 'rgba(38, 49, 72, 0.1)'
  m['--dsw-alias-interactive-bg-hover'] = darkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(38, 49, 72, 0.06)'
  m['--dsw-alias-interactive-bg-hover-accent'] = darkTheme ? 'rgba(160, 175, 205, 0.24)' : 'rgba(38, 49, 72, 0.14)'
  m['--dsw-alias-interactive-bg-hover-danger'] = darkTheme ? 'rgba(242, 90, 90, 0.15)' : 'rgba(236, 19, 19, 0.05)'
  m['--dsw-alias-interactive-bg-hover-solid'] = V.n75

  m['--dsw-alias-label-primary'] = V.n1000
  m['--dsw-alias-label-primary-dimmed'] = V.n950
  m['--dsw-alias-label-primary-foreground'] = V.n00
  m['--dsw-alias-label-primary-inverted'] = V.n00
  m['--dsw-alias-label-primary-bluish'] = V.n900
  m['--dsw-alias-label-secondary'] = V.n700
  m['--dsw-alias-label-tertiary'] = V.n600
  m['--dsw-alias-label-caption'] = V.n400
  m['--dsw-alias-label-dimmed'] = 'var(--dsw-static-neutral-bluish-200)'

  // Markdown surfaces translucent so code blocks / citations let the art glow
  // through (blue-fantasy magnitudes).
  m['--dsw-alias-markdown-citation'] = darkTheme ? 'rgba(32, 42, 68, 0.62)' : 'rgba(233, 237, 247, 0.6)'
  m['--dsw-alias-markdown-code-block'] = darkTheme ? 'rgba(23, 30, 51, 0.66)' : 'rgba(243, 245, 250, 0.58)'
  m['--dsw-alias-markdown-code-block-banner'] = darkTheme ? 'rgba(23, 30, 51, 0.66)' : 'rgba(243, 245, 250, 0.58)'
  m['--dsw-alias-markdown-code-segment-selected'] = darkTheme ? 'rgba(38, 50, 79, 0.75)' : 'rgba(255, 255, 255, 0.8)'
  m['--dsw-alias-markdown-code-segment-unselected'] = darkTheme ? 'rgba(26, 34, 56, 0.6)' : 'rgba(238, 241, 249, 0.6)'
  m['--dsw-alias-markdown-inline-code'] = darkTheme ? 'rgba(30, 39, 64, 0.62)' : 'rgba(231, 236, 245, 0.6)'
  m['--dsw-alias-markdown-placeholder'] = darkTheme ? 'rgba(26, 34, 56, 0.6)' : 'rgba(243, 245, 250, 0.58)'
  m['--dsw-alias-markdown-tag'] = darkTheme ? 'rgba(30, 39, 64, 0.62)' : 'rgba(231, 236, 245, 0.6)'

  m['--dsw-alias-scrollbar-bg-l1'] = 'var(--dsw-static-neutral-300)'
  m['--dsw-alias-scrollbar-bg-l2'] = 'var(--dsw-static-neutral-300)'
  m['--dsw-alias-scrollbar-hover-l1'] = 'var(--dsw-static-deepseek-400)'
  m['--dsw-alias-scrollbar-hover-l2'] = 'var(--dsw-static-deepseek-400)'

  m['--dsw-alias-state-business-primary'] = V.ds500
  m['--dsw-alias-state-business-tertiary'] = V.ds100
  m['--dsw-alias-state-error-primary'] = 'var(--dsw-static-red-500)'
  m['--dsw-alias-state-error-secondary'] = 'var(--dsw-static-red-400)'
  m['--dsw-alias-state-success-primary'] = 'var(--dsw-static-green-500)'
  m['--dsw-alias-state-success-secondary'] = 'var(--dsw-static-green-400)'
  m['--dsw-alias-state-success-tertiary'] = 'var(--dsw-static-green-100)'
  m['--dsw-alias-state-warn-label'] = 'var(--dsw-static-amber-600)'
  m['--dsw-alias-state-warn-primary'] = 'var(--dsw-static-amber-500)'
  m['--dsw-alias-state-warn-secondary'] = 'var(--dsw-static-amber-400)'
  m['--dsw-alias-state-warn-tertiary'] = 'var(--dsw-static-amber-100)'

  m['--dsw-alias-toast-bg'] = V.n800
  m['--dsw-alias-tooltip-bg'] = V.n850

  // Specific surfaces: translucent so the sidebar, menus and inputs sit over
  // the art instead of covering it (blue-fantasy magnitudes). Menus/selector
  // stay near-solid enough to read, but no longer opaque.
  m['--dsw-specific-bubble-highlight'] = V.ds200
  m['--dsw-specific-bubble'] = V.ds100
  m['--dsw-specific-input-major'] = darkTheme ? 'rgba(26, 34, 56, 0.65)' : 'rgba(255, 255, 255, 0.6)'
  m['--dsw-specific-login-input'] = darkTheme ? 'rgba(26, 34, 56, 0.65)' : 'rgba(255, 255, 255, 0.6)'
  m['--dsw-specific-menu'] = darkTheme ? 'rgba(26, 34, 56, 0.94)' : 'rgba(243, 245, 250, 0.94)'
  m['--dsw-specific-selector'] = darkTheme ? 'rgba(30, 39, 64, 0.85)' : 'rgba(228, 234, 247, 0.85)'
  m['--dsw-specific-sidebar-fill'] = darkTheme ? 'rgba(29, 37, 57, 0.55)' : 'rgba(242, 245, 250, 0.5)'
  m['--dsw-specific-sidebar-nav-item-active-accent'] = V.ds100
  m['--dsw-specific-sidebar-nav-item-active'] = darkTheme ? 'rgba(32, 42, 68, 0.7)' : 'rgba(226, 232, 245, 0.7)'
  m['--dsw-specific-sidebar-nav-item-hover'] = darkTheme ? 'rgba(26, 34, 56, 0.6)' : 'rgba(244, 246, 251, 0.6)'
  m['--dsw-specific-tip'] = darkTheme ? 'rgba(26, 34, 56, 0.8)' : 'rgba(243, 245, 250, 0.8)'
}

/** Render one theme scope as a CSS block scoped under the body attribute. */
export function renderScope(tokens: TokenMap, darkTheme: boolean): string {
  const scoped = darkTheme
    ? `body[data-dsh-skin="custom"][data-ds-dark-theme]`
    : `body[data-dsh-skin="custom"]`
  const lines: string[] = []
  for (const [key, value] of Object.entries(tokens)) {
    if (value.length > 0) lines.push(`  ${key}: ${value};`)
  }
  return `${scoped} {\n${lines.join('\n')}\n}`
}

const nVar = (suffix: string): string => `var(--dsw-static-neutral-bluish-${suffix})`

/** Readability veil over the custom backdrop art, chosen by the current theme
 *  (brightens a light image's busy centre, deepens on the dark theme so panels
 *  stay legible). This is the static base so the picture is always readable;
 *  the skin-center "background occlusion" slider adds an extra, live veil on
 *  top via --dsw-skin-scrim (0..1). Mirrors the blue-fantasy / whale-song
 *  double-layer backdrop approach. */
const SCRIM_LIGHT = 'linear-gradient(rgba(246, 248, 251, 0.16) 0%, rgba(240, 243, 251, 0.28) 60%, rgba(235, 239, 249, 0.4) 100%)'
const SCRIM_DARK = 'linear-gradient(rgba(10, 14, 28, 0.42) 0%, rgba(13, 18, 34, 0.56) 60%, rgba(16, 22, 42, 0.66) 100%)'

/** Ink the slider-driven occlusion veil fades toward (0..1 from the slider). */
const SCRIM_INK = '16, 22, 42'

/**
 * Build the full custom-skin stylesheet text from the seeds plus an optional
 * backdrop image (a data URL) painted onto body[data-dsh-skin="custom"] through
 * the stylesheet itself — NOT body inline style, so the try-on backdrop
 * neutralizer (which clears inline background props on theme flips) never
 * touches it. The image appears in an unquoted url() (base64 data URLs hold no
 * quotes/whitespace, so that form is immune to CSS string-escape breakage). The
 * background stack is: live slider veil (alpha = var(--dsw-skin-scrim,0), the
 * variable the occlusion control writes) on top, the theme scrim below it, then
 * the image — so the slider dims the whole backdrop 0..1 and 100 reads as
 * basically solid. The theme veil rides a CSS custom property the dark scope
 * overrides; both theme token scopes are always emitted.
 * @param seeds - the 4 seed colors + light/dark direction.
 * @param backdrop - optional data URL painted cover-fixed behind the layers.
 */
export function buildCustomCss(seeds: SkinSeeds, backdrop?: string): string {
  const light = renderScope(deriveTokens(seeds, false), false)
  const dark = renderScope(deriveTokens(seeds, true), true)

  // Trim any errant whitespace a data URL might carry so the unquoted url() is
  // always well-formed; base64 has none, this is a defensive guarantee.
  const clean = backdrop !== undefined ? backdrop.replace(/\s+/g, '') : ''

  const bgBlock = clean.length === 0
    ? `body[data-dsh-skin="custom"] {\n  color: ${nVar('1000')};\n  background-color: ${nVar('00')};\n}\nbody[data-dsh-skin="custom"][data-ds-dark-theme] {\n  color: ${nVar('50')};\n  background-color: ${nVar('1000')};\n}\n`
    : [
        `body[data-dsh-skin="custom"] {`,
        `  --dsh-custom-scrim: ${SCRIM_LIGHT};`,
        // Order matters: the slider veil is the top layer, then the theme
        // scrim, then the image. --dsw-skin-scrim is written 0..1 by the
        // skin-center occlusion control (background.ts).
        `  background-image:`,
        `    linear-gradient(rgba(${SCRIM_INK}, var(--dsw-skin-scrim, 0)) 0%, rgba(${SCRIM_INK}, var(--dsw-skin-scrim, 0)) 100%),`,
        `    var(--dsh-custom-scrim),`,
        `    url(${clean});`,
        `  background-position: center;`,
        `  background-size: cover;`,
        `  background-attachment: fixed;`,
        `  background-repeat: no-repeat;`,
        `  color: ${nVar('1000')};`,
        `  background-color: ${nVar('00')};`,
        `}`,
        `body[data-dsh-skin="custom"][data-ds-dark-theme] {`,
        `  --dsh-custom-scrim: ${SCRIM_DARK};`,
        `  color: ${nVar('50')};`,
        `  background-color: ${nVar('1000')};`,
        `}`,
        ``,
      ].join('\n')

  const chrome = `
body[data-dsh-skin="custom"] [id='root'] {
  background: transparent;
}
`
  return `${light}\n${dark}\n${bgBlock}\n${chrome}`
}
