/**
 * One-shot page-load restore of the persisted custom skin.
 *
 * apply() in index.ts runs at plugin load (page boots), so this is where the
 * persisted custom skin must be re-entered — the card component only mounts
 * when the settings panel opens, which is too late for the skin to be the
 * "current theme" on load. This module owns the page-level idempotency flag so
 * both apply() (index.ts) and the card (SkinCenter.tsx) agree on whether the
 * restore already happened this page load.
 */
import type { TryOnController } from '../try-on.ts'
import { buildCustomCss } from './derive.ts'
import { loadPersistedCustomSkin } from './persist.ts'

/** Page-level: the persisted custom skin has already been re-entered this load.
 *  A page reload resets it (fresh module state), so the restore always runs on
 *  load; within the page, remounts/multi-registration skip it. */
let hydrated = false

/** Whether the persisted custom skin was already restored this page load. */
export function customHydratedOnPage(): boolean {
  return hydrated
}

/** Record that the persisted custom skin is currently the live session. */
export function markCustomHydrated(): void {
  hydrated = true
}

/** Clear the flag, e.g. after the user clears the custom skin or applies a
 *  real skin. */
export function resetCustomHydrated(): void {
  hydrated = false
}

/**
 * Restore the persisted custom skin onto the given controller, exactly once
 * per page load. No-op (returns false) when already restored, when nothing is
 * persisted, or when the mount fails — so repeated calls are safe and clearing
 * storage naturally stops the restore (loadPersistedCustomSkin returns null).
 * @param controller - the shared TryOnController the card and apply() use.
 * @returns true when a persisted custom skin was (re)applied.
 */
export function restorePersistedCustomSkin(controller: TryOnController): boolean {
  if (hydrated) return false
  const stored = loadPersistedCustomSkin()
  if (stored === null) return false
  try {
    controller.tryOnCustom({ css: buildCustomCss(stored.seeds, stored.image) })
  } catch {
    return false
  }
  hydrated = true
  return true
}
