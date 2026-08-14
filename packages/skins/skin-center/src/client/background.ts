/**
 * Background-scrim handle for the skin center: owns the occlusion value and
 * applies it to the page's backdrop.
 *
 * Application is a CSS variable on `document.body`
 * (--dsw-skin-scrim), which backdrop-painting skins (blue-fantasy /
 * whale-song) and the custom (upload-image) skin read inside their backdrop so
 * the veil stays in sync across theme flips and try-on restores. The official
 * stock look paints no backdrop, so the variable is inert there — the value
 * still persists so it is ready for the next backdrop skin.
 *
 * Values are 0-100 (0 = no extra veil, 100 = fully obscured); they are written
 * through as a 0..1 alpha for the CSS variable. Dragging the control applies
 * instantly (live) and persists to localStorage.
 *
 * Persistence: the value is stored in localStorage (key
 * dsh-skin-center:backgroundOpacity) rather than the settings scope. The
 * settings-scope write is a client RPC that was observed never reaching the
 * host's settings.yaml (the section never registered), so persistence there
 * silently failed and the value reset to 0 on reload. localStorage is the same
 * single-machine mechanism already used by the custom skin record and is
 * reliable. The bound settings scope is still accepted (for construction-site
 * compatibility and a first-read fallback) but is no longer the source of truth.
 */
import type { SettingsScope, SettingsScopeSnapshot } from '@deepseek-ai/dsh-client-runtime/client'

/** The namespace string the Host registers (mirrors src/index.ts). */
export const SKIN_BACKGROUND_NS = 'skin-background'

/** Field of the background value inside the namespace section. */
export const OPACITY_FIELD = 'backgroundOpacity'

/** CSS custom property written to document.body and read by backdrop skins. */
export const SCRIM_VAR = '--dsw-skin-scrim'

/** localStorage key that persists the occlusion across reloads. */
export const BACKGROUND_STORAGE_KEY = 'dsh-skin-center:backgroundOpacity'

/** Default occlusion (0 = no extra veil) when nothing is stored. */
export const DEFAULT_OPACITY = 0

/** The face the skin-center card injects for the background control. */
export interface SkinBackgroundHandle {
  /** Current occlusion 0-100 (also the getSnapshot seat for useSyncExternalStore). */
  opacity(): number
  /** Observe a change in the applied value. */
  subscribe(listener: () => void): () => void
  /** Apply + persist a new occlusion. */
  set(opacity: number): void
}

/**
 * Own the background occlusion: restore it from localStorage (with a first-read
 * fallback to the settings scope so any previously stored value migrates),
 * apply it to the body CSS variable instantly, and persist changes to
 * localStorage. The public handle surface is unchanged.
 */
export class BackgroundController implements SkinBackgroundHandle {
  private value = DEFAULT_OPACITY
  private readonly listeners = new Set<() => void>()
  private readonly scope: SettingsScope<{ backgroundOpacity?: number }>

  /**
   * @param scope - the bound settings scope (accepted for compatibility and as
   * a first-read fallback; localStorage is now the source of truth).
   */
  constructor(scope: SettingsScope<{ backgroundOpacity?: number }>) {
    this.scope = scope
    this.value = this.read()
    this.apply()
    // If the settings scope happens to change (e.g. another source wrote it),
    // reflect that too — localStorage still wins on the next explicit set.
    scope.subscribe(() => {
      if (this.readFromStorage() === null) {
        this.value = this.readFromScope()
        this.apply()
        this.publish()
      }
    })
  }

  opacity(): number { return this.value }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  set(opacity: number): void {
    const clamped = Math.max(0, Math.min(100, Math.round(opacity)))
    this.value = clamped
    this.apply()
    this.publish()
    // Persist to localStorage; a quota/storage failure is silent — the live
    // value is already applied, it just won't survive a reload.
    this.writeToStorage(clamped)
  }

  /** Effective value: stored localStorage, else the settings scope, else 0. */
  private read(): number {
    const stored = this.readFromStorage()
    if (stored !== null) return stored
    return this.readFromScope()
  }

  private readFromStorage(): number | null {
    try {
      const raw = window.localStorage.getItem(BACKGROUND_STORAGE_KEY)
      if (raw === null) return null
      const n = Number(raw)
      if (!Number.isFinite(n)) {
        window.localStorage.removeItem(BACKGROUND_STORAGE_KEY)
        return null
      }
      return Math.max(0, Math.min(100, Math.round(n)))
    } catch {
      return null
    }
  }

  private readFromScope(): number {
    const snapshot: SettingsScopeSnapshot<{ backgroundOpacity?: number }> = this.scope.getSnapshot()
    const raw = snapshot.value?.backgroundOpacity
    if (typeof raw !== 'number' || !Number.isFinite(raw)) return DEFAULT_OPACITY
    return Math.max(0, Math.min(100, raw))
  }

  private writeToStorage(opacity: number): void {
    try {
      window.localStorage.setItem(BACKGROUND_STORAGE_KEY, String(opacity))
    } catch {
      // ignore quota / disabled-storage errors
    }
  }

  /** Write the current occlusion onto the body CSS variable (0..1 alpha). */
  private apply(): void {
    document.body.style.setProperty(SCRIM_VAR, String(this.value / 100))
  }

  private publish(): void {
    for (const listener of this.listeners) listener()
  }
}
