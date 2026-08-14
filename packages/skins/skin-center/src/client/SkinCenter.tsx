/**
 * The skin-center plugin card: one disclosure card inside the Web UI plugin
 * group (插件配置 → Web UI 插件), listing every installed skin plus the
 * official stock look and a "custom (upload image)" card. Live try-on executes
 * the real bundle inside the GUI (light/dark preview, full restore on exit);
 * Apply is one click — the host half runs `dsh-skin use` through
 * /api/skin-center/apply, the config watcher hot-reloads the patch, and the
 * page reloads into the new skin. The custom card derives a palette from an
 * image entirely in-browser and mounts it as an in-session skin (no upload, no
 * new package) — Instant apply + exit restore ride the same TryOnController.
 * Copy rides the standard `t` seat; the theme preview control drives the
 * official theme service (persisted, same as the Appearance row).
 */
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { ThemeSnapshot } from '@deepseek-ai/dsh-client-ui-theme/client'
import { SKIN_CENTER_ENTRIES, type SkinCenterEntry } from './generated/skins.ts'
import type { SkinBackgroundHandle } from './background.ts'
import { activeSkinEntry, TryOnController } from './try-on.ts'
import {
  BACKDROP_MAX_EDGE,
  buildCustomCss,
  clearPersistedCustomSkin,
  customHydratedOnPage,
  decodeImage,
  extractSeedsFromPixels,
  hex,
  loadPersistedCustomSkin,
  markCustomHydrated,
  resetCustomHydrated,
  samplePixels,
  savePersistedCustomSkin,
  thumbnailDataUrl,
  type SkinSeeds,
} from './custom/index.ts'
import css from './skin-center.module.css'

/** Business face the skin-center apply() injects into the card. */
export interface SkinCenterInjected {
  controller: TryOnController
  theme: {
    getTheme(): ThemeSnapshot
    subscribe(listener: () => void): () => void
    setTheme(id: 'light' | 'dark'): void
  }
  /** Background occluder over the shared skin-background namespace. */
  background: SkinBackgroundHandle
}

/** Plugin-card component props: group-item runtime share + locale seat + injected face. */
export type SkinCenterComponentProps =
  PropsRuntime<'web-ui.plugin.item'> & PropsLocale<'skinCenter'> & SkinCenterInjected

/** The apply target of the official stock-look card. */
const OFFICIAL = 'official'

/** Skin ids that read the background-scrim variable and paint a backdrop. */
const BACKDROP_SKIN_IDS = new Set(['blue-fantasy', 'whale-song'])

/**
 * Render the skin-center card: a disclosure header naming the plugin, with
 * the skin list (official default + every installed skin; try-on / theme
 * preview / one-click apply) inside its body.
 * @param props - card props.
 * @returns the plugin card.
 */
export function SkinCenter({ t, controller, theme, background }: SkinCenterComponentProps) {
  const snapshot = useSyncExternalStore(theme.subscribe, theme.getTheme)
  const opacity = useSyncExternalStore(background.subscribe, background.opacity)
  const activePackage = activeSkinEntry()?.package
  const activeId = activeSkinEntry()?.id
  const backdropActive = activeId !== undefined && BACKDROP_SKIN_IDS.has(activeId)
  const [open, setOpen] = useState(false)
  const [tryingId, setTryingId] = useState<string | null>(null)
  const [tryingOfficial, setTryingOfficial] = useState(false)
  const [applying, setApplying] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  // Custom (upload-image) state: the selected file ref, the derived seeds, the
  // backdrop thumbnail data URL, and whether a decode is in flight.
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [customSeeds, setCustomSeeds] = useState<SkinSeeds | null>(null)
  const [customBackdrop, setCustomBackdrop] = useState<string | null>(null)
  const [decoding, setDecoding] = useState(false)
  // Mirror of controller.tryingCustom so the card re-renders as the live
  // custom session starts/stops (the controller is not reactive itself).
  const [customActive, setCustomActive] = useState(false)
  // Guard against re-applying the persisted custom skin on every re-render:
  // once hydrated for a given savedAt we do not re-enter it.
  const hydratedRef = useRef<number | null>(null)

  const tryOn = (entry: SkinCenterEntry): void => {
    setError(null)
    setCustomActive(false)
    void controller.tryOn(entry)
      .then(() => {
        setTryingId(entry.id)
        setTryingOfficial(false)
      })
      .catch(() => {
        // The controller may have torn down a previous session before the
        // load failed; reset both flags so no stale "trying on" lingers.
        setError(t('tryOnError'))
        setTryingId(null)
        setTryingOfficial(false)
      })
  }

  const tryOnOfficial = (): void => {
    setError(null)
    setCustomActive(false)
    try {
      controller.tryOnOfficial()
    } catch {
      setError(t('tryOnError'))
      setTryingOfficial(false)
      return
    }
    setTryingId(null)
    setTryingOfficial(true)
  }

  const exitTryOn = (): void => {
    controller.exit()
    setTryingId(null)
    setTryingOfficial(false)
  }

  /**
   * Decode a picked image in-browser and derive the seed palette + backdrop
   * thumbnail. Fails degrade to a message on the error seat.
   * @param file - the image picked (or dropped) by the user.
   */
  const loadCustomImage = (file: File): void => {
    setError(null)
    if (!/^image\//.test(file.type)) {
      setError(t('decodeFailed'))
      return
    }
    setDecoding(true)
    void (async () => {
      try {
        const bitmap = await decodeImage(file)
        // A cover background gains little past BACKDROP_MAX_EDGE on the long
        // edge, and keeping the data URL small keeps it storable in web storage.
        const backdrop = thumbnailDataUrl(bitmap, BACKDROP_MAX_EDGE)
        const pixels = samplePixels(bitmap)
        const seeds = extractSeedsFromPixels(pixels)
        setCustomSeeds(seeds)
        setCustomBackdrop(backdrop)
      } catch {
        setError(t('decodeFailed'))
      } finally {
        setDecoding(false)
      }
    })()
  }

  /**
   * Apply the derived custom skin: mount it in-session and persist the seeds +
   * cover image so it survives a reload (the "current theme").
   * @param seeds - palette to derive tokens from.
   * @param backdrop - cover image data URL painted behind the layers.
   */
  const commitCustom = (seeds: SkinSeeds, backdrop: string): void => {
    setError(null)
    try {
      controller.tryOnCustom({ css: buildCustomCss(seeds, backdrop) })
      savePersistedCustomSkin({ image: backdrop, seeds })
      setCustomSeeds(seeds)
      setCustomBackdrop(backdrop)
      setTryingId(null)
      setTryingOfficial(false)
      setCustomActive(true)
      hydratedRef.current = Date.now()
      markCustomHydrated()
    } catch {
      setError(t('tryOnError'))
    }
  }

  /** Apply + persist the freshly derived/picked custom skin. */
  const applyCustom = (): void => {
    if (customSeeds === null || customBackdrop === null) return
    commitCustom(customSeeds, customBackdrop)
  }

  /** Remove the persisted custom skin and return to whatever preceded it
   *  (official look when no boot skin), also clearing storage so a reload does
   *  not bring it back. */
  const clearCustom = (): void => {
    clearPersistedCustomSkin()
    hydratedRef.current = null
    resetCustomHydrated()
    controller.exit()
    setCustomActive(false)
    setCustomSeeds(null)
    setCustomBackdrop(null)
    setTryingId(null)
    setTryingOfficial(false)
    setError(null)
  }

  // Surface the persisted custom skin as the card's "current theme". The actual
  // re-entry happens once at plugin load in apply() (so the skin is present
  // before the panel opens); this effect just makes sure the card reflects it.
  // If the custom session is already live (apply() restored it), mirror its
  // state; otherwise mount it defensively (guarded by the savedAt ref and the
  // shared hydrated flag so it never double-enters).
  useEffect(() => {
    const stored = loadPersistedCustomSkin()
    if (stored === null) return
    if (controller.tryingCustom) {
      setCustomSeeds(stored.seeds)
      setCustomBackdrop(stored.image)
      setCustomActive(true)
      return
    }
    if (customHydratedOnPage()) return
    if (hydratedRef.current === stored.savedAt) return
    hydratedRef.current = stored.savedAt
    try {
      controller.tryOnCustom({ css: buildCustomCss(stored.seeds, stored.image) })
      markCustomHydrated()
      setCustomSeeds(stored.seeds)
      setCustomBackdrop(stored.image)
      setCustomActive(true)
      setTryingId(null)
      setTryingOfficial(false)
    } catch {
      hydratedRef.current = null
      clearPersistedCustomSkin()
    }
  }, [controller])

  /**
   * Poll the host state until the config watcher reports the target active
   * (the patch write lands before the watcher re-applies it), or time out.
   * @param target - skin id, or `official` for the stock look.
   * @returns whether the target became active within the poll budget.
   */
  const confirmActive = (target: string): Promise<boolean> =>
    new Promise(resolve => {
      const expected = target === OFFICIAL ? 'none' : target
      let tries = 0
      const tick = (): void => {
        tries += 1
        void fetch('/api/skin-center/state')
          .then(async response => {
            const payload = await response.json().catch(() => null) as { ok?: boolean; active?: string } | null
            if (response.ok && payload?.ok === true && payload.active === expected) {
              resolve(true)
              return
            }
            if (tries >= 20) resolve(false)
            else window.setTimeout(tick, 250)
          })
          .catch(() => {
            if (tries >= 20) resolve(false)
            else window.setTimeout(tick, 250)
          })
      }
      tick()
    })

  /**
   * One-click apply: the host half runs `dsh-skin use <target>` (or
   * `use official`), the config watcher hot-reloads the patch within
   * seconds, then this page reloads to pick up the new boot graph.
   * @param target - skin id, or `official` for the stock look.
   */
  const applySkin = (target: string): void => {
    setError(null)
    // A permanent real-skin switch supersedes any persisted custom "current
    // theme"; drop it so a reload does not re-apply the custom over the new
    // skin (and so the restore-to-official path clears it too).
    clearPersistedCustomSkin()
    hydratedRef.current = null
    resetCustomHydrated()
    setApplying(target)
    const body = target === OFFICIAL ? { official: true } : { skin: target }
    void fetch('/api/skin-center/apply', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(async response => {
        const payload = await response.json().catch(() => null) as { ok?: boolean; error?: string } | null
        if (!response.ok || payload?.ok !== true) {
          throw new Error(payload?.error ?? `HTTP ${response.status}`)
        }
        setApplying(null)
        // Patch written; reload only once the watcher reports the target
        // active, so the page never boots into the old skin.
        void confirmActive(target).then(confirmed => {
          if (confirmed) {
            window.location.reload()
          } else {
            const command = target === OFFICIAL ? 'dsh-skin use official' : `dsh-skin use ${target}`
            setError(`${t('appliedUnconfirmed')} — ${command}`)
          }
        })
      })
      .catch((cause: unknown) => {
        setApplying(null)
        const detail = cause instanceof Error ? cause.message : String(cause)
        const command = target === OFFICIAL ? 'dsh-skin use official' : `dsh-skin use ${target}`
        setError(`${t('applyFailed')} (${detail}) — ${command}`)
      })
  }

  const dark = snapshot.active.colorScheme === 'dark'

  /** One row: try-on control + apply button. Shared by the official card and every skin card. */
  const actionButtons = (opts: {
    key: string
    isActive: boolean
    isTrying: boolean
    onTryOn: () => void
    applyLabel: string
  }): ReactNode => (
    <div className={css.actions}>
      {opts.isActive ? (
        <button type="button" className={`${css.button} ${css.buttonGhost}`} disabled>
          {t('tryOn')}
        </button>
      ) : opts.isTrying ? (
        <button type="button" className={`${css.button} ${css.buttonPrimary}`} onClick={exitTryOn}>
          {t('exitTryOn')}
        </button>
      ) : (
        <button type="button" className={`${css.button} ${css.buttonPrimary}`} onClick={opts.onTryOn}>
          {t('tryOn')}
        </button>
      )}
      <button
        type="button"
        className={css.button}
        disabled={applying !== null}
        onClick={() => { applySkin(opts.key) }}
      >
        {applying === opts.key ? t('applying') : opts.applyLabel}
      </button>
    </div>
  )

  return (
    <li className={css.pluginCard}>
      <button
        type="button"
        className={css.cardHeader}
        aria-expanded={open}
        aria-label={`${t(open ? 'collapse' : 'expand')}: ${t('title')}`}
        onClick={() => { setOpen(current => !current) }}
      >
        <span className={css.headText}>
          <span className={css.pluginName}>
            {t('title')}
            <span className={css.titleBadge}>{String(SKIN_CENTER_ENTRIES.length)}</span>
          </span>
          <span className={css.cardDescription} title={t('cardDescription')}>{t('cardDescription')}</span>
        </span>
        <span className={open ? css.chevronOpen : css.chevron}>▾</span>
      </button>

      {open
        ? (
          <div className={css.cardBody}>
            <div className={css.head}>
              <div className={css.intro} title={t('intro')}>{t('intro')}</div>
              <div className={css.themeRow}>
                <span className={css.themeLabel}>{t('theme')}</span>
                <button
                  type="button"
                  className={`${css.themeButton} ${dark ? '' : css.themeButtonActive}`}
                  onClick={() => { theme.setTheme('light') }}
                >
                  {t('themeLight')}
                </button>
                <button
                  type="button"
                  className={`${css.themeButton} ${dark ? css.themeButtonActive : ''}`}
                  onClick={() => { theme.setTheme('dark') }}
                >
                  {t('themeDark')}
                </button>
              </div>
            </div>

            <div className={css.backgroundRow}>
              <div className={css.backgroundHead}>
                <span className={css.backgroundLabel}>{t('backgroundOpacity')}</span>
                <span className={css.backgroundValue} aria-hidden="true">{opacity}%</span>
              </div>
              <input
                id="skin-center-background-opacity"
                className={css.backgroundRange}
                type="range"
                min="0"
                max="100"
                step="5"
                value={opacity}
                aria-valuetext={`${opacity}%`}
                aria-label={t('backgroundOpacity')}
                onChange={(event) => { background.set(Number(event.target.value)) }}
              />
              <p className={backdropActive ? css.backgroundHint : css.backgroundHintMuted}>
                {backdropActive ? t('backgroundHint') : t('backgroundHintInert')}
              </p>
            </div>

            {error !== null && <div className={css.error}>{error}</div>}

            <div className={css.list}>
              {(() => {
                const isActive = activePackage === undefined
                const isTrying = tryingOfficial
                const badge = isActive ? t('active') : isTrying ? t('tryingOn') : null
                return (
                  <div className={css.card} key={OFFICIAL}>
                    <div className={css.cardHead}>
                      <span className={css.swatch} style={{ background: '#98a1ab' }} aria-hidden="true" />
                      <span className={css.cardName} title={t('official')}>{t('official')}</span>
                      {badge !== null && (
                        <span className={`${css.badge} ${isActive ? css.badgeActive : css.badgeTrying}`}>
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className={css.cardTagline} title={t('officialTagline')}>{t('officialTagline')}</div>
                    {actionButtons({
                      key: OFFICIAL,
                      isActive,
                      isTrying,
                      onTryOn: tryOnOfficial,
                      applyLabel: t('restore'),
                    })}
                  </div>
                )
              })()}

              {(() => {
                const isActive = customActive
                const badge = isActive ? t('currentTheme') : null
                return (
                  <div className={css.card} key="custom">
                    <div className={css.cardHead}>
                      <span
                        className={css.swatch}
                        style={{ background: customSeeds !== null ? hex(customSeeds.accent) : 'repeating-conic-gradient(#e2e8f0 0% 25%, #ffffff 0% 50%)' }}
                        aria-hidden="true"
                      />
                      <span className={css.cardName} title={t('custom')}>{t('custom')}</span>
                      {badge !== null && (
                        <span className={`${css.badge} ${css.badgeActive}`}>{badge}</span>
                      )}
                    </div>
                    <div className={css.cardTagline} title={t('customTagline')}>{t('customTagline')}</div>

                    <div className={css.customBody}>
                      <p className={css.customHint}>{t('imageHint')}</p>

                      <div className={css.customPicker}>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className={css.fileInput}
                          accept="image/png,image/jpeg,image/webp"
                          aria-label={t('pickImage')}
                          onChange={(event) => {
                            const file = event.target.files?.[0]
                            if (file !== undefined) loadCustomImage(file)
                            // Allow re-selecting the same file later.
                            event.target.value = ''
                          }}
                        />
                        <button
                          type="button"
                          className={css.fileButton}
                          disabled={decoding}
                          onClick={() => { fileInputRef.current?.click() }}
                        >
                          {decoding ? t('tryOn') : t('browseImage')}
                        </button>
                      </div>

                      {customSeeds !== null && (
                        <>
                          <div className={css.seedsHead}>
                            <span className={css.seedsTitle}>{t('seedsTitle')}</span>
                            <span className={css.seedsDirection}>
                              {customSeeds.dark ? t('darkImage') : t('lightImage')}
                            </span>
                          </div>

                          {customBackdrop !== null && (
                            <img
                              className={css.customThumb}
                              src={customBackdrop}
                              alt={t('custom')}
                              loading="lazy"
                            />
                          )}

                          <div className={css.swatchRow}>
                            {((): Array<[string, { r: number; g: number; b: number }]> => [
                              [t('seedAccent'), customSeeds.accent],
                              [t('seedSecondary'), customSeeds.secondary],
                              [t('seedSurface'), customSeeds.surface],
                              [t('seedText'), customSeeds.text],
                            ])().map(([label, color]) => (
                              <div className={css.swatchCell} key={label}>
                                <span
                                  className={css.swatchBlock}
                                  style={{ background: hex(color) }}
                                  aria-hidden="true"
                                />
                                <span className={css.swatchLabel}>{label}</span>
                                <span className={css.swatchHex}>{hex(color)}</span>
                              </div>
                            ))}
                          </div>

                          <div className={css.customActions}>
                            {isActive ? (
                              <button type="button" className={`${css.button} ${css.buttonPrimary}`} onClick={clearCustom}>
                                {t('clearCustom')}
                              </button>
                            ) : (
                              <button type="button" className={`${css.button} ${css.buttonPrimary}`} onClick={applyCustom}>
                                {t('applyCustom')}
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })()}

              {SKIN_CENTER_ENTRIES.map(entry => {
                const isActive = entry.package === activePackage
                const isTrying = entry.id === tryingId
                const badge = isActive ? t('active') : isTrying ? t('tryingOn') : null
                return (
                  <div className={css.card} key={entry.id}>
                    <div className={css.cardHead}>
                      <span className={css.swatch} style={{ background: entry.accent }} aria-hidden="true" />
                      <span className={css.cardName} title={entry.nameEn}>{entry.nameEn}</span>
                      {badge !== null && (
                        <span className={`${css.badge} ${isActive ? css.badgeActive : css.badgeTrying}`}>
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className={css.cardTagline} title={entry.tagline}>{entry.tagline}</div>
                    {actionButtons({
                      key: entry.id,
                      isActive,
                      isTrying,
                      onTryOn: () => { tryOn(entry) },
                      applyLabel: t('apply'),
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        )
        : null}
    </li>
  )
}
