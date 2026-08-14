/**
 * localStorage persistence for the custom (upload-image) skin.
 *
 * The GUI is a single-machine client, so the web storage API is the right,
 * dependency-free home for the "current custom theme": it survives reload and
 * closing the panel, it can store a data URL directly, and the settings-scope
 * route (which would need host awareness + a wire protocol for the image blob)
 * is unnecessary complexity here. Every read/write is fault-tolerant: a quota
 * error, a corrupted JSON blob or a TypeError from a disabled web storage just
 * degrades to "no custom skin" rather than crashing the card.
 */
import type { SkinSeeds } from './extract.ts'

/** Namespaced storage key (distinct from any settings-scope field). */
const STORAGE_KEY = 'dsh-skin-center:custom'

/** Current shape version; bump to invalidate old persisted blobs. */
const DATA_VERSION = 1

/** Upper bound for the persisted image so a data URL never blows the quota.
 *  A cover background past 1280px on the long edge adds little to perceived
 *  quality, and keeping it tight leaves room for the full payload to round-trip
 *  in most browsers' ~5MB localStorage budgets. */
export const BACKDROP_MAX_EDGE = 1280

/** The persisted shape: the seeds needed to re-derive tokens + the cover image. */
export interface CustomSkinRecord {
  /** Shape version. */
  version: number
  /** Monotonic timestamp, used to tell a newly saved theme from an older one. */
  savedAt: number
  /** The backdrop cover image as a WebP data URL (long edge <= BACKDROP_MAX_EDGE). */
  image: string
  /** Extracted palette + light/dark direction used to regenerate the tokens. */
  seeds: SkinSeeds
}

/** Load the persisted custom skin, or null when absent / unreadable. */
export function loadPersistedCustomSkin(): CustomSkinRecord | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return null
    const parsed = JSON.parse(raw) as Partial<CustomSkinRecord>
    if (
      typeof parsed !== 'object' || parsed === null ||
      parsed.version !== DATA_VERSION ||
      typeof parsed.image !== 'string' || parsed.image === '' ||
      !isSeeds(parsed.seeds)
    ) {
      // Malformed or a stale version: drop it so a future read does not repeat
      // the surprise.
      window.localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return {
      version: parsed.version,
      savedAt: typeof parsed.savedAt === 'number' ? parsed.savedAt : 0,
      image: parsed.image,
      seeds: parsed.seeds,
    }
  } catch {
    return null
  }
}

/** Persist (or refresh) the custom skin record. Returns false if it could not
 *  be stored (e.g. quota) — the live skin still applies, it just won't survive
 *  a reload. */
export function savePersistedCustomSkin(record: Omit<CustomSkinRecord, 'version' | 'savedAt'>): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: DATA_VERSION,
      savedAt: Date.now(),
      image: record.image,
      seeds: record.seeds,
    } satisfies CustomSkinRecord))
    return true
  } catch {
    return false
  }
}

/** Erase any persisted custom skin. */
export function clearPersistedCustomSkin(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

function isSeeds(value: unknown): value is SkinSeeds {
  if (typeof value !== 'object' || value === null) return false
  const seeds = value as Partial<SkinSeeds>
  return seeds.dark === true || seeds.dark === false
}
