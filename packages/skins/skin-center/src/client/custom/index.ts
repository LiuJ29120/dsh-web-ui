/**
 * Barrel for the custom (upload-image) skin feature: the pure color pipeline
 * (decode -> sample -> extract seeds -> derive tokens) plus the helpers the
 * card and the try-on controller consume. Everything here is client/browser
 * only and ships inside the skin-center client bundle.
 */
export {
  type SkinSeeds,
  decodeImage,
  extractSeedsFromPixels,
  sampleDataUrl,
  samplePixels,
  thumbnailDataUrl,
} from './extract.ts'
export {
  buildCustomCss,
  CUSTOM_BODY_ATTR,
  deriveTokens,
  type TokenMap,
} from './derive.ts'
export {
  BACKDROP_MAX_EDGE,
  type CustomSkinRecord,
  clearPersistedCustomSkin,
  loadPersistedCustomSkin,
  savePersistedCustomSkin,
} from './persist.ts'
export {
  customHydratedOnPage,
  markCustomHydrated,
  resetCustomHydrated,
  restorePersistedCustomSkin,
} from './restore.ts'
export { hex, parseHex } from './color.ts'
