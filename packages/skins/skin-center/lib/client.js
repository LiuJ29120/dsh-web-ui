window.__ModuleLoader__.load({
	id: "@linxin666/dsh-client-ui-skin-center",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/generated/skins.ts
		/** Every skin, ordered by packages/skins/<name>/skin.json `order`. */
		const SKIN_CENTER_ENTRIES = [
			{
				"id": "qq98",
				"name": "QQ2008 怀旧版",
				"nameEn": "QQ2008 Retro",
				"author": "dsh-web-ui",
				"tagline": "水晶蓝桌面 · 玻璃深蓝标题栏 · 戴围巾企鹅",
				"description": "dsh web ui 家族收录的第一个皮肤：QQ2008 水晶蓝年代。深蓝渐变桌面、玻璃质感标题栏、浅蓝状态栏和圆角高光控件，配一只戴围巾的企鹅。",
				"tags": [
					"retro",
					"qq",
					"2008",
					"crystal-blue",
					"nostalgia"
				],
				"accent": "#2b7cd9",
				"bodyAttr": "data-dsh-retro",
				"package": "@linxin666/dsh-client-ui-skin-qq98",
				"order": 1
			},
			{
				"id": "ths",
				"name": "同花顺风格",
				"nameEn": "Tonghuashun Trading",
				"author": "dsh-web-ui",
				"tagline": "品牌红标题栏 · 实时行情状态栏 · 灰蓝数据终端",
				"description": "同花顺风格炒股主题：品牌红标题栏带上证指数行情签，状态栏红涨绿跌，自选股风格的侧边栏和交易终端面板，写代码也像盯盘。",
				"tags": [
					"stock",
					"trading",
					"terminal",
					"red"
				],
				"accent": "#e60012",
				"bodyAttr": "data-dsh-ths",
				"package": "@linxin666/dsh-client-ui-skin-ths",
				"order": 2
			},
			{
				"id": "xp",
				"name": "Windows XP (Luna)",
				"nameEn": "Windows XP Luna",
				"author": "dsh-web-ui",
				"tagline": "Luna 蓝窗口条 · 绿色开始按钮 · Bliss 蓝天桌面",
				"description": "Windows XP (Luna) 复古主题：蓝色渐变窗口条带窗口按钮、米色状态栏（大写/数字/滚动指示灯）、侧边栏任务栏上的绿色「开始」按钮、资源管理器风格树行和 Bliss 蓝天桌面，全局直角。",
				"tags": [
					"retro",
					"xp",
					"luna",
					"windows",
					"start-button"
				],
				"accent": "#316ac5",
				"bodyAttr": "data-dsh-xp",
				"package": "@linxin666/dsh-client-ui-skin-xp",
				"order": 3
			},
			{
				"id": "blue-fantasy",
				"name": "蓝色幻想",
				"nameEn": "Blue Fantasy",
				"author": "powerdog996（DreamSkin 社区）· dsh-web-ui 适配",
				"tagline": "鲸鱼插画背景 · periwinkle 靛蓝调色板 · 半透明面板",
				"description": "DreamSkin「DeepSeek-鲸鱼娘」Codex 桌面主题的 dsh 适配：鲸鱼插画背景垫在半透明面板之下，遮罩随亮/暗主题实时切换，periwinkle 靛蓝色调重映射到全部 dsh token。",
				"tags": [
					"dreamskin",
					"whale",
					"indigo",
					"art",
					"translucent"
				],
				"accent": "#4a5fa8",
				"bodyAttr": "data-dsh-blue-fantasy",
				"package": "@linxin666/dsh-client-ui-skin-blue-fantasy",
				"order": 4
			},
			{
				"id": "dragon-heir",
				"name": "龙的传人",
				"nameEn": "Dragon Heir",
				"author": "dsh-web-ui",
				"tagline": "不屈龙魂 · 万里长城双主题 · 朱砂龙印",
				"description": "龙的传人 — 一面是不屈龙魂（墨龙穿云、朱砂印章、不屈锋芒），一面是万里长城（青黛山色、金晖镀墙、苍茫暮色）。亮暗主题各自配一幅画与一枚龙印 favicon，面板半透明磨砂，让画透出来。",
				"tags": [
					"dragon",
					"loong",
					"chinese",
					"ink-wash",
					"great-wall",
					"dual-theme"
				],
				"accent": "#c3272b",
				"bodyAttr": "data-dsh-dragon-heir",
				"package": "@linxin666/dsh-client-ui-skin-dragon-heir",
				"order": 5
			},
			{
				"id": "minecraft",
				"name": "Minecraft 方块世界",
				"nameEn": "Minecraft Voxel",
				"author": "dsh-web-ui",
				"tagline": "动态全景天空盒 · 方块按钮 · 告示牌输入框",
				"description": "复刻《我的世界》主界面氛围的方块皮肤：程序化绘制的像素全景天空盒（方块山、像素云、方块树、草方块地面）在身后缓慢旋转，界面浮在石板上；按钮还原 MC 菜单按钮（灰石板、悬停变黄、按下下沉），输入框做成带钉子的木告示牌。",
				"tags": [
					"minecraft",
					"voxel",
					"pixel",
					"game",
					"panorama",
					"skybox"
				],
				"accent": "#7cbd4b",
				"bodyAttr": "data-dsh-minecraft",
				"package": "@linxin666/dsh-client-ui-skin-minecraft",
				"order": 6
			},
			{
				"id": "whale-song",
				"name": "鲸吟",
				"nameEn": "Whale Song",
				"author": "dsh-web-ui",
				"tagline": "深海鲸语女神背景 · 冰蓝海洋调色板 · 金色细线点缀",
				"description": "《鲸吟》— 深海鲸语女神主题：无文字纯氛围背景画（蓝发女神与鲸群居左、冰蓝星座网格与金线点缀、右侧大量留白）垫在半透明面板之下，遮罩随亮/暗主题实时切换，冰蓝/浅青/深海军蓝/钴蓝冷色体系重映射到全部 dsh token，暗色变体为深海夜航调。",
				"tags": [
					"whale",
					"ocean",
					"ice-blue",
					"goddess",
					"art",
					"translucent"
				],
				"accent": "#4d8fd4",
				"bodyAttr": "data-dsh-whale-song",
				"package": "@linxin666/dsh-client-ui-skin-whale-song",
				"order": 7
			},
			{
				"id": "trading",
				"name": "交易终端",
				"nameEn": "Trading Terminal",
				"author": "dsh-web-ui",
				"tagline": "实时行情跑马灯 · 长桥港美股行情 · 红涨绿跌交易终端",
				"description": "结合 dsh-fun-ticker 行情跑马灯与 dsh-longbridge 港美股行情的炒股皮肤：顶栏滚动 A股/港股/美股/指数/加密/外汇报价（装 fun-ticker 后跟随你的自选列表），状态栏展示长桥行情快照与 A股/港股/美股交易时段，写代码也像盯盘。",
				"tags": [
					"stock",
					"trading",
					"ticker",
					"live",
					"terminal",
					"longbridge"
				],
				"accent": "#f23645",
				"bodyAttr": "data-dsh-trading",
				"package": "@linxin666/dsh-client-ui-skin-trading",
				"order": 8
			},
			{
				"id": "miku",
				"name": "初音未来 · 电子歌姬",
				"nameEn": "Hatsune Miku",
				"author": "涂山苏苏",
				"tagline": "蓝紫双马尾 · 01 编号 · 音符波形 · 电子歌姬主题",
				"description": "以世界第一的虚拟歌姬初音未来为灵感的主题皮肤：蓝紫洋红渐变贯穿全局，音符与声波曲线点缀在半透明面板之间，标题栏与状态栏带有 01 编号徽标与音乐波形，半透明毛玻璃面板透出背景图——沉浸式电子歌姬氛围。",
				"tags": [
					"miku",
					"vocaloid",
					"blue",
					"music",
					"idol",
					"waveform"
				],
				"accent": "#2e9bff",
				"bodyAttr": "data-dsh-miku",
				"package": "@linxin666/dsh-client-ui-skin-miku",
				"order": 9
			}
		];
		//#endregion
		//#region src/client/try-on.ts
		/**
		* Try-on engine for the in-GUI skin center.
		*
		* A skin's client bundle is executed through the REAL module system, not a
		* shim and not eval: the host route `/api/skin-center/bundle/<id>` serves
		* the skin's prebuilt `lib/client.js` as a same-origin script (mirroring
		* the kernel's own defaultLoadBundle — see dsh-client-modules), and its
		* body calls `window.__ModuleLoader__.load({id, factory})`, which only
		* REGISTERS the factory. `window.__DSH_MODULES__.import(package)` (the
		* kernel's ClientModuleSystem, contract C5/C6) then materializes it — which
		* auto-injects the skin's CSS `<style data-plugin>` tag — and
		* `surface.apply(miniCtx)` mounts the skin exactly as the fiber system
		* would, returning a full disposer. That makes try-on and its teardown the
		* real code paths, with no CSP `unsafe-eval` dependence and no startup
		* cost: the ~700KB of embedded art base64 is only parsed when a skin is
		* actually tried on.
		*
		* Mutual exclusion: the GUI never hosts two skins at once. The currently
		* ACTIVE skin is owned by its own cordis fiber (its disposer is not
		* reachable), so try-on retracts the active skin's visual writes by recipe:
		* remove its body attribute (its stylesheet goes inert), clear the
		* body-level backdrop inline styles (blue-fantasy's whale art), detach only
		* known skin chrome body children (title/status bars marked `data-skin-chrome`
		* or carrying the skin's body attribute, leaving other plugins' portals and
		* toasts in place), and neutralize known global-rule leaks (xp's sidebar
		* taskbar/start). Everything is snapshotted and restored on exit in original
		* order. The active skin's own fiber is never touched, so exiting try-on
		* returns the page to exactly the pre-try-on state.
		*
		* A ghost MutationObserver may survive retraction (blue-fantasy re-writes
		* its backdrop on theme flips), so during try-on a neutralizing observer
		* re-clears the backdrop props whenever `data-ds-dark-theme` changes.
		*/
		/** Body-level backdrop properties skins may write inline (blue-fantasy). */
		const BACKDROP_PROPS = [
			"background-image",
			"background-position",
			"background-size",
			"background-attachment",
			"background-repeat"
		];
		/**
		* Per-skin neutralization CSS: rules that hide visual leaks whose styles
		* are NOT scoped under the skin's body attribute (they live on app elements
		* the skin touches, so detaching chrome cannot remove them). Matched by
		* css-module class substring, which is stable across rebuilds.
		*/
		const NEUTRALIZE_CSS = { xp: [`[data-pane='sidebar'] [class*='xpTaskbar']{background:transparent!important;border-top:none!important;box-shadow:none!important}`, `[data-pane='sidebar'] [class*='xpStart']{display:none!important}`].join("") };
		/** Host base path of the skin bundle route (registered by src/routes.ts). */
		const BUNDLE_ROUTE = "/api/skin-center/bundle";
		/**
		* Execute one skin's client bundle as a real same-origin script, mirroring
		* the kernel's own defaultLoadBundle (dsh-client-modules): the script body
		* calls `window.__ModuleLoader__.load({id, factory})`, which only registers
		* the factory — materialization is the caller's separate `import` step. No
		* eval: try-on works under any CSP that allows same-origin scripts (the
		* shell itself loads plugin bundles this way), and a failed fetch rejects
		* so the caller can restore the active skin instead of leaving it retracted.
		* @param url - same-origin bundle URL.
		* @returns a promise resolving once the script executed.
		*/
		function loadBundleScript(url) {
			return new Promise((resolve, reject) => {
				const el = document.createElement("script");
				el.async = true;
				el.src = url;
				el.addEventListener("load", () => {
					el.remove();
					resolve();
				}, { once: true });
				el.addEventListener("error", () => {
					el.remove();
					reject(/* @__PURE__ */ new Error(`skin-center: bundle script ${url} failed to load`));
				}, { once: true });
				document.head.append(el);
			});
		}
		/** Read the page's composed boot-graph entry ids (only enabled plugins appear). */
		function bootEntryIds() {
			return window.__DSH_BOOT__?.entries?.map((entry) => entry.id) ?? [];
		}
		/** The skin package currently ACTIVE in the boot graph, if it is one of ours. */
		function activeSkinEntry() {
			const ids = new Set(bootEntryIds());
			return SKIN_CENTER_ENTRIES.find((entry) => ids.has(entry.package));
		}
		/**
		* Whether a direct body child is skin chrome owned by `skin`: marked with the
		* `data-skin-chrome` marker (minecraft/dragon-heir) or carrying the skin's
		* scoping body attribute. Everything else — other plugins' portals, toasts and
		* overlays appended to body — is left alone.
		*/
		function isSkinChrome(el, skin) {
			if (el.hasAttribute("data-skin-chrome")) return true;
			return skin !== null && el.hasAttribute(skin.bodyAttr);
		}
		function miniCtx() {
			const disposers = [];
			return {
				effect(callback) {
					disposers.push(callback());
					return () => {};
				},
				get() {},
				__disposeAll() {
					for (const dispose of disposers.reverse()) dispose();
				}
			};
		}
		/**
		* One live try-on session: owns the tried-on skin's disposer plus the
		* captured active-skin visuals, and restores everything on exit.
		*/
		var TryOnController = class {
			session = null;
			/**
			* Generation counter. A newer try-on or exit increments it, so an in-flight
			* `tryOn` (awaiting the real bundle load) can detect it was superseded and
			* drop only what it mounted instead of clobbering the newer session.
			*/
			epoch = 0;
			/**
			* Loads one skin's client bundle so its factory registers on the page's
			* `__ModuleLoader__`. Defaults to a same-origin script tag from the host
			* route `/api/skin-center/bundle/<id>`; tests inject a stub.
			*/
			loadBundle;
			constructor(options = {}) {
				this.loadBundle = options.loadBundle ?? ((entry) => loadBundleScript(`${BUNDLE_ROUTE}/${encodeURIComponent(entry.id)}`));
			}
			/** The skin currently being tried on, if any. */
			get trying() {
				return this.session?.kind === "skin" ? this.session.entry : null;
			}
			/** Whether the official stock look (no skin) is being tried on. */
			get tryingOfficial() {
				return this.session !== null && this.session.kind === "official";
			}
			/** Whether a custom (uploaded-image) skin is being tried on. */
			get tryingCustom() {
				return this.session !== null && this.session.kind === "custom";
			}
			/** Start trying on `entry` (replaces any live session). */
			async tryOn(entry) {
				if (entry.package === activeSkinEntry()?.package) return;
				this.exit();
				const epoch = ++this.epoch;
				const active = this.captureAndRetractActive();
				let dispose;
				try {
					dispose = await this.loadAndApply(entry);
				} catch (error) {
					if (epoch === this.epoch) this.restoreActive(active);
					throw error;
				}
				if (epoch !== this.epoch) {
					this.cleanupModule(entry);
					dispose();
					return;
				}
				this.session = {
					kind: "skin",
					entry,
					dispose,
					active
				};
			}
			/**
			* Try on the official stock look: retract the active skin's visual writes
			* (same recipe as a skin try-on) and mount nothing. Exiting restores the
			* active skin exactly like any other try-on session.
			*/
			tryOnOfficial() {
				if (activeSkinEntry() === null && this.session === null) return;
				this.exit();
				this.epoch += 1;
				const active = this.captureAndRetractActive();
				this.session = {
					kind: "official",
					entry: null,
					dispose: () => {},
					active
				};
			}
			/** Mount a custom (uploaded-image) skin: inject a single <style> tag scoped
			*  on body[data-dsh-skin="custom"] (the stylesheet already carries the token
			*  remap, the body base paints, and the optional backdrop image + scrim — see
			*  buildCustomCss), capture + retract the active skin so the custom look owns
			*  the whole surface. The backdrop lives in the scoped stylesheet, not body
			*  inline style, so the neutralizer that clears inline background props on
			*  theme flips (to counter backdrop skins' ghost observers) never touches it.
			*  On exit the attribute + tag come off and the active skin's visuals are
			*  restored, exactly like any try-on session. */
			tryOnCustom(options) {
				this.exit();
				const epoch = ++this.epoch;
				const active = this.captureAndRetractActive();
				let dispose;
				try {
					dispose = this.mountCustom(options.css);
				} catch (error) {
					if (epoch === this.epoch) this.restoreActive(active);
					throw error;
				}
				if (epoch !== this.epoch) {
					dispose();
					return;
				}
				this.session = {
					kind: "custom",
					entry: null,
					dispose,
					active
				};
			}
			/** Write the custom-skin style tag + the body scoping attribute. */
			mountCustom(css) {
				const body = document.body;
				body.dataset.dshSkin = "custom";
				const styleTag = document.createElement("style");
				styleTag.dataset.dshCustomSkin = "";
				styleTag.textContent = css;
				document.head.append(styleTag);
				return () => {
					delete body.dataset.dshSkin;
					styleTag.remove();
				};
			}
			/** Exit the live session: dispose the tried-on skin, then restore the active skin. */
			exit() {
				const session = this.session;
				if (session === null) return;
				this.epoch += 1;
				this.session = null;
				session.dispose();
				if (session.entry !== null) this.cleanupModule(session.entry);
				this.restoreActive(session.active);
			}
			/** Execute + materialize + mount the target skin through the real loader. */
			async loadAndApply(entry) {
				const modules = window.__DSH_MODULES__;
				if (modules === void 0) throw new Error("skin-center: window.__DSH_MODULES__ missing");
				modules.invalidate(entry.package);
				await this.loadBundle(entry);
				const apply = (await modules.import(entry.package)).apply;
				if (typeof apply !== "function") throw new Error(`skin-center: "${entry.package}" client bundle exports no apply`);
				const ctx = miniCtx();
				try {
					apply(ctx);
				} catch (error) {
					this.cleanupModule(entry);
					document.body.removeAttribute(entry.bodyAttr);
					for (const el of [...document.body.children]) if (isSkinChrome(el, entry)) el.remove();
					throw error;
				}
				return ctx.__disposeAll;
			}
			/** Drop the tried-on module record + its injected style tag. */
			cleanupModule(entry) {
				window.__DSH_MODULES__?.invalidate(entry.package);
				for (const el of document.querySelectorAll(`style[data-plugin=${JSON.stringify(entry.package)}]`)) el.remove();
			}
			/**
			* Snapshot the active skin's visual writes and retract them so the tried-on
			* skin can take over the whole surface.
			*/
			captureAndRetractActive() {
				const skin = activeSkinEntry() ?? null;
				const body = document.body;
				const bodyAttr = skin === null ? null : body.getAttribute(skin.bodyAttr);
				if (skin !== null && bodyAttr !== null) body.removeAttribute(skin.bodyAttr);
				const bodyStyle = body.getAttribute("style");
				for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				const children = [...body.children];
				const chrome = /* @__PURE__ */ new Set();
				for (const el of children) if (el.id !== "root" && isSkinChrome(el, skin)) chrome.add(el);
				const detached = [];
				for (let i = 0; i < children.length; i++) {
					const el = children[i];
					if (!chrome.has(el)) continue;
					let anchor = null;
					for (let j = i + 1; j < children.length; j++) if (!chrome.has(children[j])) {
						anchor = children[j];
						break;
					}
					detached.push({
						el,
						anchor
					});
				}
				for (const { el } of detached) el.remove();
				const clearObserver = new MutationObserver(() => {
					for (const prop of BACKDROP_PROPS) body.style.removeProperty(prop);
				});
				clearObserver.observe(body, {
					attributes: true,
					attributeFilter: ["data-ds-dark-theme"]
				});
				const neutralizeCss = skin === null ? void 0 : NEUTRALIZE_CSS[skin.id];
				return {
					skin,
					bodyAttr,
					bodyStyle,
					detached,
					clearObserver,
					neutralizeStyle: neutralizeCss === void 0 ? null : this.injectStyle(neutralizeCss)
				};
			}
			/** Restore the active skin's captured visual state. */
			restoreActive(active) {
				const body = document.body;
				if (active.skin !== null && active.bodyAttr !== null) body.setAttribute(active.skin.bodyAttr, active.bodyAttr);
				if (active.bodyStyle !== null) body.setAttribute("style", active.bodyStyle);
				else body.removeAttribute("style");
				for (const { el, anchor } of active.detached) body.insertBefore(el, anchor !== null && anchor.parentNode === body ? anchor : null);
				active.clearObserver?.disconnect();
				active.neutralizeStyle?.remove();
			}
			injectStyle(css) {
				const tag = document.createElement("style");
				tag.dataset.skinCenterNeutralize = "";
				tag.textContent = css;
				document.head.append(tag);
				return tag;
			}
		};
		//#endregion
		//#region src/client/custom/color.ts
		function clamp255(n) {
			return Math.round(Math.max(0, Math.min(255, n)));
		}
		/** Basic linearization: sRGB channel 0..255 -> linear 0..1. */
		function toLinear(c) {
			const v = c / 255;
			return v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
		}
		/** Delinearize linear 0..1 -> sRGB channel 0..255. */
		function fromLinear(v) {
			return clamp255((v <= .0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - .055) * 255);
		}
		/** sRGB -> OKLab. */
		function toOklab(c) {
			const r = toLinear(c.r);
			const g = toLinear(c.g);
			const b = toLinear(c.b);
			const l = .4122214708 * r + .5363325363 * g + .0514459929 * b;
			const m = .2119034982 * r + .6806995451 * g + .1073969566 * b;
			const s = .0883024619 * r + .2817188376 * g + .6299787005 * b;
			const l3 = Math.cbrt(l);
			const m3 = Math.cbrt(m);
			const s3 = Math.cbrt(s);
			return {
				l: .2104542553 * l3 + .793617785 * m3 - .0040720468 * s3,
				a: 1.9779984951 * l3 - 2.428592205 * m3 + .4505937099 * s3,
				b: .0259040371 * l3 + .7827717662 * m3 - .808675766 * s3
			};
		}
		/** OKLab -> sRGB. */
		function fromOklab(lab) {
			const l3 = lab.l + .3963377774 * lab.a + .2158037573 * lab.b;
			const m3 = lab.l - .1055613458 * lab.a - .0638541728 * lab.b;
			const s3 = lab.l - .0894841775 * lab.a - 1.291485548 * lab.b;
			const l = l3 * l3 * l3;
			const m = m3 * m3 * m3;
			const s = s3 * s3 * s3;
			const r = 4.0767416621 * l - 3.3077115913 * m + .2309699292 * s;
			const g = -1.2684380046 * l + 2.6097574011 * m - .3413193965 * s;
			const b = -.0041960863 * l - .7034186147 * m + 1.707614701 * s;
			return {
				r: fromLinear(r),
				g: fromLinear(g),
				b: fromLinear(b)
			};
		}
		/** Perceptual chroma of an OKLab color (0 = neutral gray). */
		function chroma(lab) {
			return Math.hypot(lab.a, lab.b);
		}
		/**
		* Perceived lightness used for ordering/contrast decisions. Returns the WCAG
		* relative luminance of the sRGB color, 0 (black) .. 1 (white).
		*/
		function luminance(c) {
			const r = toLinear(c.r);
			const g = toLinear(c.g);
			const b = toLinear(c.b);
			return .2126 * r + .7152 * g + .0722 * b;
		}
		/**
		* Mix two sRGB colors in OKLab by `t` (0 = `from`, 1 = `to`). Perceptually
		* uniform interpolation keeps the middle steps from passing through gray.
		*/
		function okMix(from, to, t) {
			const a = toOklab(from);
			const b = toOklab(to);
			const c = Math.max(0, Math.min(1, t));
			return fromOklab({
				l: a.l + (b.l - a.l) * c,
				a: a.a + (b.a - a.a) * c,
				b: a.b + (b.b - a.b) * c
			});
		}
		/** hex form `#rrggbb`. */
		function hex(c) {
			const to = (n) => n.toString(16).padStart(2, "0");
			return `#${to(c.r)}${to(c.g)}${to(c.b)}`;
		}
		/** CSS `rgb(r, g, b)` string. */
		function cssRgb(c) {
			return `rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`;
		}
		//#endregion
		//#region src/client/custom/extract.ts
		/**
		* Client-side image analysis for the custom-skin card: decode a picked
		* PNG/JPG/WebP with createImageBitmap, rasterize it down to a small sampling
		* grid with a <canvas>, and turn the pixel data into 4 seed colors (accent,
		* secondary, surface, text) plus a light/dark direction guess. Nothing is
		* uploaded to the host — the bitmap lives entirely in the browser memory and
		* the seeds are pure functions over pixel data.
		*/
		/** Sampling grid edge length used by the extractor. */
		const SAMPLE_SIZE = 96;
		/** Chroma threshold (OKLab) separating "colorful" pixels from near-neutrals. */
		const COLORFUL_CHROMA = .035;
		/** Pixels below this alpha are treated as transparent (skipped). */
		const MIN_ALPHA = 125;
		/**
		* Decode a picked image file into an ImageBitmap. Rejects non-image or
		* unreadable payloads; the caller surfaces the message to the card.
		*/
		async function decodeImage(file) {
			const bitmap = await createImageBitmap(file);
			if (bitmap.width === 0 || bitmap.height === 0) {
				bitmap.close();
				throw new Error("empty image");
			}
			return bitmap;
		}
		/**
		* Rasterize a decoded bitmap onto an SAMPLE_SIZE grid and read its pixels.
		* @returns flat RGBA buffer (SAMPLE_SIZE * SAMPLE_SIZE * 4 bytes).
		*/
		function samplePixels(bitmap) {
			const canvas = document.createElement("canvas");
			canvas.width = SAMPLE_SIZE;
			canvas.height = SAMPLE_SIZE;
			const ctx = canvas.getContext("2d", { willReadFrequently: true });
			if (ctx === null) throw new Error("canvas 2d unavailable");
			ctx.drawImage(bitmap, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
			const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
			bitmap.close();
			return data;
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
		function extractSeedsFromPixels(data) {
			const byLight = /* @__PURE__ */ new Map();
			const colorful = [];
			let lumTotal = 0;
			let seen = 0;
			for (let i = 0; i < data.length; i += 4) {
				if (data[i + 3] < MIN_ALPHA) continue;
				const rgb = {
					r: data[i],
					g: data[i + 1],
					b: data[i + 2]
				};
				const lab = toOklab(rgb);
				lumTotal += lab.l;
				seen += 1;
				const lightKey = Math.max(0, Math.min(15, Math.round(lab.l * 16)));
				const bucket = byLight.get(lightKey) ?? {
					sum: {
						r: 0,
						g: 0,
						b: 0
					},
					count: 0,
					labSum: {
						l: 0,
						a: 0,
						b: 0
					}
				};
				bucket.count += 1;
				bucket.sum.r += rgb.r;
				bucket.sum.g += rgb.g;
				bucket.sum.b += rgb.b;
				bucket.labSum.l += lab.l;
				bucket.labSum.a += lab.a;
				bucket.labSum.b += lab.b;
				byLight.set(lightKey, bucket);
				const ch = chroma(lab);
				if (ch >= COLORFUL_CHROMA) colorful.push({
					rgb,
					chroma: ch,
					key: `${lightKey}:${quantHue(lab)}`
				});
			}
			if (seen === 0) return {
				accent: {
					r: 43,
					g: 124,
					b: 217
				},
				secondary: {
					r: 80,
					g: 120,
					b: 200
				},
				surface: {
					r: 244,
					g: 246,
					b: 248
				},
				text: {
					r: 30,
					g: 34,
					b: 48
				},
				dark: false
			};
			const dark = lumTotal / seen < .45;
			const buckets = [...byLight.values()];
			const averageNeutral = (b) => ({
				rgb: {
					r: b.sum.r / b.count,
					g: b.sum.g / b.count,
					b: b.sum.b / b.count
				},
				lab: {
					l: b.labSum.l / b.count,
					a: b.labSum.a / b.count,
					b: b.labSum.b / b.count
				}
			});
			let surface = averageNeutral([...buckets].sort((p, q) => q.count - p.count)[0]).rgb;
			if (!dark && luminance(surface) > .86) surface = okMix(surface, {
				r: 255,
				g: 255,
				b: 255
			}, .45);
			const text = averageNeutral(dark ? [...buckets].sort((p, q) => q.labSum.l / q.count - p.labSum.l / p.count)[0] : [...buckets].sort((p, q) => p.labSum.l / q.count - q.labSum.l / q.count)[0]).rgb;
			const votes = /* @__PURE__ */ new Map();
			for (const c of colorful) {
				const v = votes.get(c.key) ?? {
					rgb: c.rgb,
					chroma: c.chroma,
					count: 0
				};
				v.count += 1;
				if (c.chroma > v.chroma) {
					v.chroma = c.chroma;
					v.rgb = c.rgb;
				}
				votes.set(c.key, v);
			}
			const rank = [...votes.values()].sort((p, q) => q.chroma * Math.pow(q.count, .6) - p.chroma * Math.pow(p.count, .6));
			let accent = rank[0] !== void 0 ? rank[0].rgb : okMix({
				r: 43,
				g: 124,
				b: 217
			}, surface, .25);
			accent = enrichAccent(accent);
			let secondary = accent;
			for (const v of rank) if (chromaDist(toOklab(v.rgb), toOklab(accent)) > .09) {
				secondary = v.rgb;
				break;
			}
			if (secondary === accent) secondary = rotateHue(accent, -30);
			return {
				accent,
				secondary,
				surface,
				text,
				dark
			};
		}
		/** Rotate the accent's OKLab chroma vector by `degrees`. */
		function rotateHue(rgb, degrees) {
			const lab = toOklab(rgb);
			const rad = degrees * Math.PI / 180;
			const cos = Math.cos(rad);
			const sin = Math.sin(rad);
			return fromOklab({
				l: lab.l,
				a: lab.a * cos - lab.b * sin,
				b: lab.a * sin + lab.b * cos
			});
		}
		function chromaDist(p, q) {
			return Math.hypot(p.l - q.l, p.a - q.a, p.b - q.b);
		}
		function quantHue(lab) {
			return Math.floor((Math.atan2(lab.b, lab.a) / (2 * Math.PI) + .5) * 12) % 12;
		}
		/** Pull an accent's lightness into a usable mid band so an extreme art pick
		*  does not become a washed tint or an unreadable near-black. */
		function enrichAccent(c) {
			const lab = toOklab(c);
			const mixed = fromOklab({
				l: Math.max(.42, Math.min(.62, lab.l)),
				a: lab.a,
				b: lab.b
			});
			const labM = toOklab(mixed);
			if (chroma(labM) < .09) return fromOklab({
				l: labM.l,
				a: labM.a * 1.6,
				b: labM.b * 1.6
			});
			return mixed;
		}
		/**
		* Render a decoded bitmap down to (at most) `max` on the long edge and return
		* a WebP data URL for use as the custom-skin backdrop. The bitmap is NOT closed
		* here so the caller can still sample its pixels afterwards.
		*/
		function thumbnailDataUrl(bitmap, max) {
			const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
			const w = Math.max(1, Math.round(bitmap.width * scale));
			const h = Math.max(1, Math.round(bitmap.height * scale));
			const canvas = document.createElement("canvas");
			canvas.width = w;
			canvas.height = h;
			const ctx = canvas.getContext("2d");
			if (ctx === null) return "";
			ctx.drawImage(bitmap, 0, 0, w, h);
			return canvas.toDataURL("image/webp", .7);
		}
		//#endregion
		//#region src/client/custom/derive.ts
		const WHITE = {
			r: 255,
			g: 255,
			b: 255
		};
		const BLACK = {
			r: 0,
			g: 0,
			b: 0
		};
		/** Neutral ramp stop positions across the bluish ladder (light=0 -> dark=1). */
		const NEUTRAL_STOPS = [
			["00", 0],
			["50", .07],
			["60", .09],
			["75", .115],
			["100", .15],
			["150", .19],
			["200", .24],
			["250", .28],
			["300", .33],
			["400", .43],
			["500", .53],
			["550", .58],
			["600", .63],
			["700", .73],
			["750", .79],
			["800", .84],
			["850", .88],
			["875", .91],
			["900", .94],
			["950", .97],
			["1000", 1]
		];
		/** Accent ramp steps: 1.0 = the anchor accent; below tints, above shades. */
		const ACCENT_STEPS = [
			["50", .05],
			["100", .16],
			["200", .3],
			["300", .46],
			["400", .68],
			["450", .86],
			["500", 1],
			["600", 1.22],
			["700", 1.42],
			["800", 1.62],
			["900", 1.8]
		];
		/**
		* Generate the complete token map for one theme from the seeds.
		* @param seeds - extracted seeds.
		* @param darkTheme - true for the [data-ds-dark-theme] scope.
		*/
		function deriveTokens(seeds, darkTheme) {
			const { accent, secondary, surface, text } = seeds;
			const lightEnd = darkTheme ? okMix(text, WHITE, .86) : okMix(WHITE, surface, .12);
			const darkEnd = darkTheme ? okMix(surface, BLACK, .62) : okMix(okMix(text, BLACK, .4), surface, .25);
			const neutral = buildRampMap(lightEnd, darkEnd);
			const bluish = buildBluishMap(lightEnd, darkEnd, accent);
			const deepseek = buildAccentSteps(accent, surface);
			const blue = buildBlueSteps(accent, surface);
			const secondarySteps = buildAccentSteps(secondary, surface);
			const m = {};
			writeStatics(m, neutral, bluish, deepseek, blue, secondarySteps);
			writeAliases(m, darkTheme);
			m["--dsh-scrollbar-thumb"] = "var(--dsw-alias-scrollbar-bg-l2)";
			m["--dsh-scrollbar-thumb-hover"] = "var(--dsw-alias-scrollbar-hover-l2)";
			return m;
		}
		function buildRampMap(lightEnd, darkEnd) {
			const out = {};
			for (const [suffix, t] of NEUTRAL_STOPS) out[suffix] = okMix(lightEnd, darkEnd, t);
			return out;
		}
		/** The bluish ramp: the base ramp tilted slightly toward the accent hue so it
		*  reads cooler than the plain neutral one (mirrors neutral-bluish). */
		function buildBluishMap(lightEnd, darkEnd, accent) {
			const out = {};
			for (const [suffix, t] of NEUTRAL_STOPS) out[suffix] = tiltAccent(okMix(lightEnd, darkEnd, t), accent);
			return out;
		}
		/** Tilt a neutral toward the accent hue enough to read cool without muddying. */
		function tiltAccent(c, accent) {
			return okMix(c, okMix(accent, WHITE, .4), .06);
		}
		/** Build the deepseek-style ramp around an accent (tint -> accent -> shade). */
		function buildAccentSteps(accent, surface) {
			const tint = okMix(WHITE, accent, .05);
			const shade = okMix(accent, BLACK, .34);
			const range = ACCENT_STEPS[ACCENT_STEPS.length - 1][1] - 1;
			const out = {};
			for (const [suffix, t] of ACCENT_STEPS) if (t === 1) out[suffix] = accent;
			else if (t < 1) out[suffix] = okMix(tint, accent, t);
			else out[suffix] = okMix(accent, shade, (t - 1) / range);
			return out;
		}
		/** Blue-* family mirrors deepseek with a tiny hue rotation so it stays distinct. */
		function buildBlueSteps(accent, surface) {
			const base = buildAccentSteps(accent, surface);
			const out = {};
			for (const [suffix, c] of Object.entries(base)) {
				const lab = toOklab(c);
				out[suffix] = fromOklab({
					l: lab.l,
					a: lab.a - .01,
					b: lab.b + .02
				});
			}
			return out;
		}
		const RED = {
			"--dsw-static-red-50": "rgb(254, 242, 242)",
			"--dsw-static-red-100": "rgb(254, 226, 226)",
			"--dsw-static-red-400": "rgb(242, 90, 90)",
			"--dsw-static-red-500": "rgb(239, 68, 68)",
			"--dsw-static-red-600": "rgb(236, 19, 19)",
			"--dsw-static-red-900": "rgb(87, 12, 12)"
		};
		const GREEN = {
			"--dsw-static-green-100": "rgb(230, 250, 237)",
			"--dsw-static-green-400": "rgb(78, 209, 126)",
			"--dsw-static-green-500": "rgb(34, 197, 94)",
			"--dsw-static-green-900": "rgb(35, 60, 44)"
		};
		const AMBER = {
			"--dsw-static-amber-100": "rgb(254, 245, 231)",
			"--dsw-static-amber-400": "rgb(247, 173, 49)",
			"--dsw-static-amber-500": "rgb(245, 158, 11)",
			"--dsw-static-amber-600": "rgb(221, 134, 41)",
			"--dsw-static-amber-900": "rgb(39, 36, 31)"
		};
		/** Emit the static ramps (RGB literals) that the alias layer then references. */
		function writeStatics(m, neutral, bluish, deepseek, blue, secondary) {
			Object.assign(m, RED, GREEN, AMBER);
			for (const [suffix, c] of Object.entries(neutral)) m[`--dsw-static-neutral-${suffix}`] = cssRgb(c);
			for (const [suffix, c] of Object.entries(bluish)) m[`--dsw-static-neutral-bluish-${suffix}`] = cssRgb(c);
			for (const [suffix, c] of Object.entries(deepseek)) {
				m[`--dsw-static-deepseek-${suffix}`] = cssRgb(c);
				m[`--dsw-static-blue-${suffix}`] = cssRgb(blue[suffix]);
			}
			m["--dsw-static-deepseek-700-delete"] = cssRgb(deepseek["700"]);
			m["--dsw-static-deepseek-50p"] = cssRgb(deepseek["100"]);
			m["--dsw-static-blue-950"] = cssRgb(deepseek["900"]);
			m["--dsw-static-blue-75"] = cssRgb(deepseek["100"]);
			m["--dsw-static-neutral-850"] = cssRgb(neutral["850"]);
			for (const [suffix, c] of Object.entries(secondary)) m[`--dsw-static-secondary-${suffix}`] = cssRgb(c);
		}
		const V = {
			n00: "var(--dsw-static-neutral-bluish-00)",
			n75: "var(--dsw-static-neutral-bluish-75)",
			n400: "var(--dsw-static-neutral-bluish-400)",
			n600: "var(--dsw-static-neutral-bluish-600)",
			n700: "var(--dsw-static-neutral-bluish-700)",
			n800: "var(--dsw-static-neutral-bluish-800)",
			n850: "var(--dsw-static-neutral-bluish-850)",
			n900: "var(--dsw-static-neutral-bluish-900)",
			n950: "var(--dsw-static-neutral-bluish-950)",
			n1000: "var(--dsw-static-neutral-bluish-1000)",
			ds100: "var(--dsw-static-deepseek-100)",
			ds200: "var(--dsw-static-deepseek-200)",
			ds300: "var(--dsw-static-deepseek-300)",
			ds400: "var(--dsw-static-deepseek-400)",
			ds500: "var(--dsw-static-deepseek-500)",
			ds600: "var(--dsw-static-deepseek-600)",
			ds800: "var(--dsw-static-deepseek-800)"
		};
		/** Map semantic aliases onto the ramps (brand -> accent, base -> bluish,
		*  labels -> ink), closely mirroring design-platform.css. */
		function writeAliases(m, darkTheme) {
			const borderInk = darkTheme ? "255, 255, 255" : "15, 22, 34";
			m["--dsw-alias-bg-base"] = darkTheme ? "rgba(16, 22, 42, 0.5)" : "rgba(255, 255, 255, 0.45)";
			m["--dsw-alias-bg-layer-1"] = darkTheme ? "rgba(26, 34, 56, 0.55)" : "rgba(243, 245, 250, 0.5)";
			m["--dsw-alias-bg-layer-2"] = darkTheme ? "rgba(32, 42, 68, 0.6)" : "rgba(233, 237, 247, 0.55)";
			m["--dsw-alias-bg-layer-3"] = darkTheme ? "rgba(38, 50, 79, 0.64)" : "rgba(221, 227, 241, 0.58)";
			m["--dsw-alias-bg-module-platform"] = darkTheme ? "rgba(32, 42, 68, 0.6)" : "rgba(233, 237, 247, 0.55)";
			m["--dsw-alias-bg-multi-select"] = darkTheme ? "rgba(44, 55, 101, 0.8)" : "rgba(220, 227, 247, 0.8)";
			m["--dsw-alias-bg-overlay"] = darkTheme ? "rgba(26, 34, 56, 0.92)" : "rgba(238, 241, 249, 0.92)";
			m["--dsw-alias-bg-mask-1"] = darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.24)";
			m["--dsw-alias-bg-mask-2"] = darkTheme ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.12)";
			m["--dsw-alias-bg-mask-3"] = "rgba(0, 0, 0, 0.48)";
			m["--dsw-alias-bg-mask-photo"] = "rgba(0, 0, 0, 0.88)";
			m["--dsw-alias-bg-mask-drop"] = darkTheme ? "rgba(20, 22, 28, 0.7)" : "rgba(255, 255, 255, 0.7)";
			m["--dsw-alias-bg-skeleton"] = darkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)";
			m["--dsw-alias-border-l1"] = `rgba(${borderInk}, 0.06)`;
			m["--dsw-alias-border-l2"] = `rgba(${borderInk}, 0.1)`;
			m["--dsw-alias-border-l2-darkmode-thin"] = `rgba(${borderInk}, 0.06)`;
			m["--dsw-alias-border-l3"] = `rgba(${borderInk}, 0.12)`;
			m["--dsw-alias-border-l4"] = `rgba(${borderInk}, 0.16)`;
			m["--dsw-alias-border-inverted"] = darkTheme ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0)";
			m["--dsw-alias-border-inverted2"] = darkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0)";
			m["--dsw-alias-brand-primary"] = V.ds600;
			m["--dsw-alias-brand-primary-new-colorprimary-new-color"] = V.ds500;
			m["--dsw-alias-brand-text"] = V.ds800;
			m["--dsw-alias-brand-primary-invert"] = V.n00;
			m["--dsw-alias-button-primary-fill"] = V.ds600;
			m["--dsw-alias-button-primary-hover"] = V.ds500;
			m["--dsw-alias-button-primary-dimmed"] = V.ds100;
			m["--dsw-alias-button-info-fill"] = V.ds500;
			m["--dsw-alias-button-info-hover"] = V.ds400;
			m["--dsw-alias-button-contrast-fill"] = V.n700;
			m["--dsw-alias-button-elevated-fill"] = V.n00;
			m["--dsw-alias-button-floating-fill"] = V.n00;
			m["--dsw-alias-button-floating-hover"] = V.n75;
			m["--dsw-alias-button-ghost-active-border"] = V.ds300;
			m["--dsw-alias-button-ghost-active-fill"] = V.ds100;
			m["--dsw-alias-button-ghost-active-hover"] = V.ds200;
			m["--dsw-alias-button-tool-bar-fill"] = darkTheme ? "rgba(160, 175, 205, 0.5)" : "rgba(84, 85, 87, 0.5)";
			m["--dsw-alias-button-tool-bar-fill-invisible"] = darkTheme ? "rgba(160, 175, 205, 0.36)" : "rgba(31, 31, 31, 0.36)";
			m["--dsw-alias-button-tool-bar-hover"] = darkTheme ? "rgba(160, 175, 205, 0.6)" : "rgba(84, 85, 87, 0.6)";
			m["--dsw-alias-interactive-bg-active"] = darkTheme ? "rgba(255, 255, 255, 0.14)" : "rgba(38, 49, 72, 0.1)";
			m["--dsw-alias-interactive-bg-hover"] = darkTheme ? "rgba(255, 255, 255, 0.08)" : "rgba(38, 49, 72, 0.06)";
			m["--dsw-alias-interactive-bg-hover-accent"] = darkTheme ? "rgba(160, 175, 205, 0.24)" : "rgba(38, 49, 72, 0.14)";
			m["--dsw-alias-interactive-bg-hover-danger"] = darkTheme ? "rgba(242, 90, 90, 0.15)" : "rgba(236, 19, 19, 0.05)";
			m["--dsw-alias-interactive-bg-hover-solid"] = V.n75;
			m["--dsw-alias-label-primary"] = V.n1000;
			m["--dsw-alias-label-primary-dimmed"] = V.n950;
			m["--dsw-alias-label-primary-foreground"] = V.n00;
			m["--dsw-alias-label-primary-inverted"] = V.n00;
			m["--dsw-alias-label-primary-bluish"] = V.n900;
			m["--dsw-alias-label-secondary"] = V.n700;
			m["--dsw-alias-label-tertiary"] = V.n600;
			m["--dsw-alias-label-caption"] = V.n400;
			m["--dsw-alias-label-dimmed"] = "var(--dsw-static-neutral-bluish-200)";
			m["--dsw-alias-markdown-citation"] = darkTheme ? "rgba(32, 42, 68, 0.62)" : "rgba(233, 237, 247, 0.6)";
			m["--dsw-alias-markdown-code-block"] = darkTheme ? "rgba(23, 30, 51, 0.66)" : "rgba(243, 245, 250, 0.58)";
			m["--dsw-alias-markdown-code-block-banner"] = darkTheme ? "rgba(23, 30, 51, 0.66)" : "rgba(243, 245, 250, 0.58)";
			m["--dsw-alias-markdown-code-segment-selected"] = darkTheme ? "rgba(38, 50, 79, 0.75)" : "rgba(255, 255, 255, 0.8)";
			m["--dsw-alias-markdown-code-segment-unselected"] = darkTheme ? "rgba(26, 34, 56, 0.6)" : "rgba(238, 241, 249, 0.6)";
			m["--dsw-alias-markdown-inline-code"] = darkTheme ? "rgba(30, 39, 64, 0.62)" : "rgba(231, 236, 245, 0.6)";
			m["--dsw-alias-markdown-placeholder"] = darkTheme ? "rgba(26, 34, 56, 0.6)" : "rgba(243, 245, 250, 0.58)";
			m["--dsw-alias-markdown-tag"] = darkTheme ? "rgba(30, 39, 64, 0.62)" : "rgba(231, 236, 245, 0.6)";
			m["--dsw-alias-scrollbar-bg-l1"] = "var(--dsw-static-neutral-300)";
			m["--dsw-alias-scrollbar-bg-l2"] = "var(--dsw-static-neutral-300)";
			m["--dsw-alias-scrollbar-hover-l1"] = "var(--dsw-static-deepseek-400)";
			m["--dsw-alias-scrollbar-hover-l2"] = "var(--dsw-static-deepseek-400)";
			m["--dsw-alias-state-business-primary"] = V.ds500;
			m["--dsw-alias-state-business-tertiary"] = V.ds100;
			m["--dsw-alias-state-error-primary"] = "var(--dsw-static-red-500)";
			m["--dsw-alias-state-error-secondary"] = "var(--dsw-static-red-400)";
			m["--dsw-alias-state-success-primary"] = "var(--dsw-static-green-500)";
			m["--dsw-alias-state-success-secondary"] = "var(--dsw-static-green-400)";
			m["--dsw-alias-state-success-tertiary"] = "var(--dsw-static-green-100)";
			m["--dsw-alias-state-warn-label"] = "var(--dsw-static-amber-600)";
			m["--dsw-alias-state-warn-primary"] = "var(--dsw-static-amber-500)";
			m["--dsw-alias-state-warn-secondary"] = "var(--dsw-static-amber-400)";
			m["--dsw-alias-state-warn-tertiary"] = "var(--dsw-static-amber-100)";
			m["--dsw-alias-toast-bg"] = V.n800;
			m["--dsw-alias-tooltip-bg"] = V.n850;
			m["--dsw-specific-bubble-highlight"] = V.ds200;
			m["--dsw-specific-bubble"] = V.ds100;
			m["--dsw-specific-input-major"] = darkTheme ? "rgba(26, 34, 56, 0.65)" : "rgba(255, 255, 255, 0.6)";
			m["--dsw-specific-login-input"] = darkTheme ? "rgba(26, 34, 56, 0.65)" : "rgba(255, 255, 255, 0.6)";
			m["--dsw-specific-menu"] = darkTheme ? "rgba(26, 34, 56, 0.94)" : "rgba(243, 245, 250, 0.94)";
			m["--dsw-specific-selector"] = darkTheme ? "rgba(30, 39, 64, 0.85)" : "rgba(228, 234, 247, 0.85)";
			m["--dsw-specific-sidebar-fill"] = darkTheme ? "rgba(29, 37, 57, 0.55)" : "rgba(242, 245, 250, 0.5)";
			m["--dsw-specific-sidebar-nav-item-active-accent"] = V.ds100;
			m["--dsw-specific-sidebar-nav-item-active"] = darkTheme ? "rgba(32, 42, 68, 0.7)" : "rgba(226, 232, 245, 0.7)";
			m["--dsw-specific-sidebar-nav-item-hover"] = darkTheme ? "rgba(26, 34, 56, 0.6)" : "rgba(244, 246, 251, 0.6)";
			m["--dsw-specific-tip"] = darkTheme ? "rgba(26, 34, 56, 0.8)" : "rgba(243, 245, 250, 0.8)";
		}
		/** Render one theme scope as a CSS block scoped under the body attribute. */
		function renderScope(tokens, darkTheme) {
			const scoped = darkTheme ? `body[data-dsh-skin="custom"][data-ds-dark-theme]` : `body[data-dsh-skin="custom"]`;
			const lines = [];
			for (const [key, value] of Object.entries(tokens)) if (value.length > 0) lines.push(`  ${key}: ${value};`);
			return `${scoped} {\n${lines.join("\n")}\n}`;
		}
		const nVar = (suffix) => `var(--dsw-static-neutral-bluish-${suffix})`;
		/** Readability veil over the custom backdrop art, chosen by the current theme
		*  (brightens a light image's busy centre, deepens on the dark theme so panels
		*  stay legible). This is the static base so the picture is always readable;
		*  the skin-center "background occlusion" slider adds an extra, live veil on
		*  top via --dsw-skin-scrim (0..1). Mirrors the blue-fantasy / whale-song
		*  double-layer backdrop approach. */
		const SCRIM_LIGHT = "linear-gradient(rgba(246, 248, 251, 0.16) 0%, rgba(240, 243, 251, 0.28) 60%, rgba(235, 239, 249, 0.4) 100%)";
		const SCRIM_DARK = "linear-gradient(rgba(10, 14, 28, 0.42) 0%, rgba(13, 18, 34, 0.56) 60%, rgba(16, 22, 42, 0.66) 100%)";
		/** Ink the slider-driven occlusion veil fades toward (0..1 from the slider). */
		const SCRIM_INK = "16, 22, 42";
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
		function buildCustomCss(seeds, backdrop) {
			const light = renderScope(deriveTokens(seeds, false), false);
			const dark = renderScope(deriveTokens(seeds, true), true);
			const clean = backdrop !== void 0 ? backdrop.replace(/\s+/g, "") : "";
			return `${light}\n${dark}\n${clean.length === 0 ? `body[data-dsh-skin="custom"] {\n  color: ${nVar("1000")};\n  background-color: ${nVar("00")};\n}\nbody[data-dsh-skin="custom"][data-ds-dark-theme] {\n  color: ${nVar("50")};\n  background-color: ${nVar("1000")};\n}\n` : [
				`body[data-dsh-skin="custom"] {`,
				`  --dsh-custom-scrim: ${SCRIM_LIGHT};`,
				`  background-image:`,
				`    linear-gradient(rgba(${SCRIM_INK}, var(--dsw-skin-scrim, 0)) 0%, rgba(${SCRIM_INK}, var(--dsw-skin-scrim, 0)) 100%),`,
				`    var(--dsh-custom-scrim),`,
				`    url(${clean});`,
				`  background-position: center;`,
				`  background-size: cover;`,
				`  background-attachment: fixed;`,
				`  background-repeat: no-repeat;`,
				`  color: ${nVar("1000")};`,
				`  background-color: ${nVar("00")};`,
				`}`,
				`body[data-dsh-skin="custom"][data-ds-dark-theme] {`,
				`  --dsh-custom-scrim: ${SCRIM_DARK};`,
				`  color: ${nVar("50")};`,
				`  background-color: ${nVar("1000")};`,
				`}`,
				``
			].join("\n")}\n
body[data-dsh-skin="custom"] [id='root'] {
  background: transparent;
}
`;
		}
		//#endregion
		//#region src/client/custom/persist.ts
		/** Namespaced storage key (distinct from any settings-scope field). */
		const STORAGE_KEY = "dsh-skin-center:custom";
		/** Current shape version; bump to invalidate old persisted blobs. */
		const DATA_VERSION = 1;
		/** Upper bound for the persisted image so a data URL never blows the quota.
		*  A cover background past 1280px on the long edge adds little to perceived
		*  quality, and keeping it tight leaves room for the full payload to round-trip
		*  in most browsers' ~5MB localStorage budgets. */
		const BACKDROP_MAX_EDGE = 1280;
		/** Load the persisted custom skin, or null when absent / unreadable. */
		function loadPersistedCustomSkin() {
			try {
				const raw = window.localStorage.getItem(STORAGE_KEY);
				if (raw === null) return null;
				const parsed = JSON.parse(raw);
				if (typeof parsed !== "object" || parsed === null || parsed.version !== DATA_VERSION || typeof parsed.image !== "string" || parsed.image === "" || !isSeeds(parsed.seeds)) {
					window.localStorage.removeItem(STORAGE_KEY);
					return null;
				}
				return {
					version: parsed.version,
					savedAt: typeof parsed.savedAt === "number" ? parsed.savedAt : 0,
					image: parsed.image,
					seeds: parsed.seeds
				};
			} catch {
				return null;
			}
		}
		/** Persist (or refresh) the custom skin record. Returns false if it could not
		*  be stored (e.g. quota) — the live skin still applies, it just won't survive
		*  a reload. */
		function savePersistedCustomSkin(record) {
			try {
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
					version: DATA_VERSION,
					savedAt: Date.now(),
					image: record.image,
					seeds: record.seeds
				}));
				return true;
			} catch {
				return false;
			}
		}
		/** Erase any persisted custom skin. */
		function clearPersistedCustomSkin() {
			try {
				window.localStorage.removeItem(STORAGE_KEY);
			} catch {}
		}
		function isSeeds(value) {
			if (typeof value !== "object" || value === null) return false;
			const seeds = value;
			return seeds.dark === true || seeds.dark === false;
		}
		//#endregion
		//#region src/client/custom/restore.ts
		/** Page-level: the persisted custom skin has already been re-entered this load.
		*  A page reload resets it (fresh module state), so the restore always runs on
		*  load; within the page, remounts/multi-registration skip it. */
		let hydrated = false;
		/** Whether the persisted custom skin was already restored this page load. */
		function customHydratedOnPage() {
			return hydrated;
		}
		/** Record that the persisted custom skin is currently the live session. */
		function markCustomHydrated() {
			hydrated = true;
		}
		/** Clear the flag, e.g. after the user clears the custom skin or applies a
		*  real skin. */
		function resetCustomHydrated() {
			hydrated = false;
		}
		/**
		* Restore the persisted custom skin onto the given controller, exactly once
		* per page load. No-op (returns false) when already restored, when nothing is
		* persisted, or when the mount fails — so repeated calls are safe and clearing
		* storage naturally stops the restore (loadPersistedCustomSkin returns null).
		* @param controller - the shared TryOnController the card and apply() use.
		* @returns true when a persisted custom skin was (re)applied.
		*/
		function restorePersistedCustomSkin(controller) {
			if (hydrated) return false;
			const stored = loadPersistedCustomSkin();
			if (stored === null) return false;
			try {
				controller.tryOnCustom({ css: buildCustomCss(stored.seeds, stored.image) });
			} catch {
				return false;
			}
			hydrated = true;
			return true;
		}
		//#endregion
		//#region \0dsh-css:C:\Project\鲜花网r\dsh-web-ui\packages\skins\skin-center\src\client\skin-center.module.css.mjs
		const css = "body[data-dsh-skin-center] .oCCWRq_pluginCard{border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-2,#fff);border-radius:8px;list-style:none;overflow:hidden}body[data-dsh-skin-center] .oCCWRq_cardHeader{width:100%;color:inherit;font:inherit;text-align:left;cursor:pointer;background:0 0;border:0;align-items:center;padding:11px 14px;transition:background .12s;display:flex}body[data-dsh-skin-center] .oCCWRq_cardHeader:hover{background:var(--dsw-alias-bg-layer-1,#f1f5f9)}body[data-dsh-skin-center] .oCCWRq_cardHeader:active{background:var(--dsw-alias-bg-layer-3,#e6ecf4)}body[data-dsh-skin-center] .oCCWRq_cardHeader:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .oCCWRq_headText{flex-direction:column;flex:1;gap:3px;min-width:0;display:flex}body[data-dsh-skin-center] .oCCWRq_pluginName{color:var(--dsw-alias-label-primary,#172a45);align-items:baseline;gap:8px;font-size:13.5px;font-weight:600;display:flex}body[data-dsh-skin-center] .oCCWRq_cardDescription{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.4}body[data-dsh-skin-center] .oCCWRq_chevron,body[data-dsh-skin-center] .oCCWRq_chevronOpen{color:var(--dsw-alias-label-secondary,#6b7280);flex:none;margin-left:10px;font-size:12px;transition:transform .12s}body[data-dsh-skin-center] .oCCWRq_chevronOpen{transform:rotate(180deg)}body[data-dsh-skin-center] .oCCWRq_cardBody{border-top:1px solid var(--dsw-alias-border-l1,#e2e8f0);flex-direction:column;gap:12px;padding:12px 14px 14px;display:flex}body[data-dsh-skin-center] .oCCWRq_head{flex-direction:column;gap:6px;display:flex}body[data-dsh-skin-center] .oCCWRq_titleBadge{color:var(--dsw-alias-label-secondary,#6b7280);font-size:11px;font-weight:500}body[data-dsh-skin-center] .oCCWRq_intro{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12.5px;line-height:1.55}body[data-dsh-skin-center] .oCCWRq_themeRow{align-items:center;gap:8px;margin-top:2px;display:flex}body[data-dsh-skin-center] .oCCWRq_themeLabel{color:var(--dsw-alias-label-secondary,#6b7280);margin-right:2px;font-size:12px}body[data-dsh-skin-center] .oCCWRq_themeButton{border:1px solid var(--dsw-alias-border-l3,#cbd5e1);background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#172a45);cursor:pointer;border-radius:6px;padding:5px 10px;font-size:12px;line-height:1;transition:background .12s,border-color .12s,color .12s}body[data-dsh-skin-center] .oCCWRq_themeButton:hover{border-color:var(--dsw-alias-border-l4,#94a3b8)}body[data-dsh-skin-center] .oCCWRq_themeButton:active{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_themeButton:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .oCCWRq_themeButtonActive{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_list{flex-direction:column;gap:10px;display:flex}body[data-dsh-skin-center] .oCCWRq_card{border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-2,#fff);border-radius:10px;flex-direction:column;gap:8px;padding:12px 14px;display:flex}body[data-dsh-skin-center] .oCCWRq_cardHead{align-items:center;gap:10px;min-width:0;display:flex}body[data-dsh-skin-center] .oCCWRq_swatch{width:14px;height:14px;box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);border-radius:50%;flex:none}body[data-dsh-skin-center] .oCCWRq_cardName{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:13.5px;font-weight:600;overflow:hidden}body[data-dsh-skin-center] .oCCWRq_cardTagline{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.45}body[data-dsh-skin-center] .oCCWRq_badge{letter-spacing:.02em;border-radius:999px;flex:none;min-width:0;margin-left:auto;padding:2px 8px;font-size:11px;font-weight:600}body[data-dsh-skin-center] .oCCWRq_badgeActive{color:var(--dsw-alias-state-success-primary,#0f6b3a);background:var(--dsw-alias-state-success-tertiary,#dcf3e5)}body[data-dsh-skin-center] .oCCWRq_badgeTrying{color:var(--dsw-alias-brand-primary,#1e63b8);background:var(--dsw-alias-button-primary-dimmed,#e2edfc)}body[data-dsh-skin-center] .oCCWRq_actions{flex-wrap:wrap;align-items:center;gap:8px;display:flex}body[data-dsh-skin-center] .oCCWRq_button{border:1px solid var(--dsw-alias-border-l3,#cbd5e1);background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#172a45);cursor:pointer;border-radius:7px;padding:6px 12px;font-size:12px;line-height:1;transition:background .12s,border-color .12s,color .12s}body[data-dsh-skin-center] .oCCWRq_button:hover:not(:disabled){border-color:var(--dsw-alias-brand-primary,#2b7cd9);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_button:active:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-dimmed,#e8f1fc);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .oCCWRq_buttonPrimary{border-color:var(--dsw-alias-brand-primary,#2b7cd9);background:var(--dsw-alias-button-primary-fill,#2b7cd9);color:var(--dsw-alias-label-primary-foreground,#fff)}body[data-dsh-skin-center] .oCCWRq_buttonPrimary:hover:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-hover,#1e63b8);color:var(--dsw-alias-label-primary-foreground,#fff)}body[data-dsh-skin-center] .oCCWRq_buttonPrimary:active:not(:disabled),body[data-dsh-skin-center] .oCCWRq_buttonPrimary:focus-visible:not(:disabled){border-color:var(--dsw-alias-button-primary-hover,#1e63b8);background:var(--dsw-alias-button-primary-hover,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_buttonGhost{background:0 0;border-color:#0000}body[data-dsh-skin-center] .oCCWRq_button:disabled{opacity:.55;cursor:default}body[data-dsh-skin-center] .oCCWRq_error{color:var(--dsw-alias-state-error-primary,#b42318);font-size:12px}body[data-dsh-skin-center] .oCCWRq_backgroundRow{flex-direction:column;gap:6px;padding:8px 0;display:flex}body[data-dsh-skin-center] .oCCWRq_backgroundHead{align-items:center;gap:8px;display:flex}body[data-dsh-skin-center] .oCCWRq_backgroundLabel{color:var(--dsw-alias-label-primary,#172a45);font-size:12.5px;font-weight:600}body[data-dsh-skin-center] .oCCWRq_backgroundValue{font-variant-numeric:tabular-nums;color:var(--dsw-alias-brand-primary,#2b7cd9);flex:none;margin-left:auto;font-size:12px}body[data-dsh-skin-center] .oCCWRq_backgroundRange{background:var(--dsw-alias-bg-layer-3,#e2e8f0);-webkit-appearance:none;appearance:none;cursor:pointer;border-radius:999px;width:100%;height:4px;margin:0}body[data-dsh-skin-center] .oCCWRq_backgroundRange::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:2px solid var(--dsw-alias-label-primary-foreground,#fff);background:var(--dsw-alias-brand-primary,#2b7cd9);width:14px;height:14px;box-shadow:0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);cursor:pointer;border-radius:50%}body[data-dsh-skin-center] .oCCWRq_backgroundRange::-moz-range-thumb{border:2px solid var(--dsw-alias-label-primary-foreground,#fff);background:var(--dsw-alias-brand-primary,#2b7cd9);width:12px;height:12px;box-shadow:0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);cursor:pointer;border-radius:50%}body[data-dsh-skin-center] .oCCWRq_backgroundRange:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .oCCWRq_backgroundHint{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.5}body[data-dsh-skin-center] .oCCWRq_backgroundHintMuted{color:var(--dsw-alias-label-tertiary,#9aa4b5);font-size:12px;line-height:1.5}body[data-dsh-skin-center] .oCCWRq_customBody{flex-direction:column;gap:10px;display:flex}body[data-dsh-skin-center] .oCCWRq_customHint{color:var(--dsw-alias-label-secondary,#6b7280);font-size:12px;line-height:1.5}body[data-dsh-skin-center] .oCCWRq_customPicker{flex-direction:column;gap:8px;display:flex}body[data-dsh-skin-center] .oCCWRq_fileButton{border:1px solid var(--dsw-alias-border-l3,#cbd5e1);background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,#172a45);cursor:pointer;border-radius:7px;padding:8px 14px;font-size:12.5px;line-height:1;transition:border-color .12s,color .12s}body[data-dsh-skin-center] .oCCWRq_fileInput{clip:rect(0, 0, 0, 0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}body[data-dsh-skin-center] .oCCWRq_fileButton:disabled{opacity:.55;cursor:default}body[data-dsh-skin-center] .oCCWRq_fileButton:hover{border-color:var(--dsw-alias-brand-primary,#2b7cd9);color:var(--dsw-alias-brand-primary,#1e63b8)}body[data-dsh-skin-center] .oCCWRq_fileButton:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#2b7cd9);outline-offset:2px}body[data-dsh-skin-center] .oCCWRq_seedsHead{justify-content:space-between;align-items:baseline;gap:8px;display:flex}body[data-dsh-skin-center] .oCCWRq_seedsTitle{color:var(--dsw-alias-label-primary,#172a45);font-size:12.5px;font-weight:600}body[data-dsh-skin-center] .oCCWRq_seedsDirection{color:var(--dsw-alias-state-success-primary,#0f6b3a);background:var(--dsw-alias-state-success-tertiary,#dcf3e5);border-radius:999px;flex:none;padding:2px 8px;font-size:11px;font-weight:600}body[data-dsh-skin-center] .oCCWRq_swatchRow{grid-template-columns:repeat(4,1fr);gap:8px;display:grid}body[data-dsh-skin-center] .oCCWRq_swatchCell{flex-direction:column;align-items:stretch;gap:5px;display:flex}body[data-dsh-skin-center] .oCCWRq_swatchBlock{height:34px;box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l4,#0f172a1f);border-radius:6px}body[data-dsh-skin-center] .oCCWRq_swatchLabel{color:var(--dsw-alias-label-tertiary,#9aa4b5);font-size:11px}body[data-dsh-skin-center] .oCCWRq_swatchHex{font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary,#172a45);font-size:11px}body[data-dsh-skin-center] .oCCWRq_customActions{flex-wrap:wrap;align-items:center;gap:8px;display:flex}body[data-dsh-skin-center] .oCCWRq_customThumb{object-fit:cover;border:1px solid var(--dsw-alias-border-l1,#e2e8f0);background:var(--dsw-alias-bg-layer-2,#fff);border-radius:8px;width:100%;max-height:130px;display:block}@media (prefers-reduced-motion:reduce){body[data-dsh-skin-center] .oCCWRq_cardHeader,body[data-dsh-skin-center] .oCCWRq_themeButton,body[data-dsh-skin-center] .oCCWRq_button,body[data-dsh-skin-center] .oCCWRq_chevron,body[data-dsh-skin-center] .oCCWRq_chevronOpen{transition:none}}";
		const tagId = "@linxin666/dsh-client-ui-skin-center/skin-center.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@linxin666/dsh-client-ui-skin-center";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var skin_center_module_css_default = {
			"actions": "oCCWRq_actions",
			"backgroundHead": "oCCWRq_backgroundHead",
			"backgroundHint": "oCCWRq_backgroundHint",
			"backgroundHintMuted": "oCCWRq_backgroundHintMuted",
			"backgroundLabel": "oCCWRq_backgroundLabel",
			"backgroundRange": "oCCWRq_backgroundRange",
			"backgroundRow": "oCCWRq_backgroundRow",
			"backgroundValue": "oCCWRq_backgroundValue",
			"badge": "oCCWRq_badge",
			"badgeActive": "oCCWRq_badgeActive",
			"badgeTrying": "oCCWRq_badgeTrying",
			"button": "oCCWRq_button",
			"buttonGhost": "oCCWRq_buttonGhost",
			"buttonPrimary": "oCCWRq_buttonPrimary",
			"card": "oCCWRq_card",
			"cardBody": "oCCWRq_cardBody",
			"cardDescription": "oCCWRq_cardDescription",
			"cardHead": "oCCWRq_cardHead",
			"cardHeader": "oCCWRq_cardHeader",
			"cardName": "oCCWRq_cardName",
			"cardTagline": "oCCWRq_cardTagline",
			"chevron": "oCCWRq_chevron",
			"chevronOpen": "oCCWRq_chevronOpen",
			"customActions": "oCCWRq_customActions",
			"customBody": "oCCWRq_customBody",
			"customHint": "oCCWRq_customHint",
			"customPicker": "oCCWRq_customPicker",
			"customThumb": "oCCWRq_customThumb",
			"error": "oCCWRq_error",
			"fileButton": "oCCWRq_fileButton",
			"fileInput": "oCCWRq_fileInput",
			"head": "oCCWRq_head",
			"headText": "oCCWRq_headText",
			"intro": "oCCWRq_intro",
			"list": "oCCWRq_list",
			"pluginCard": "oCCWRq_pluginCard",
			"pluginName": "oCCWRq_pluginName",
			"seedsDirection": "oCCWRq_seedsDirection",
			"seedsHead": "oCCWRq_seedsHead",
			"seedsTitle": "oCCWRq_seedsTitle",
			"swatch": "oCCWRq_swatch",
			"swatchBlock": "oCCWRq_swatchBlock",
			"swatchCell": "oCCWRq_swatchCell",
			"swatchHex": "oCCWRq_swatchHex",
			"swatchLabel": "oCCWRq_swatchLabel",
			"swatchRow": "oCCWRq_swatchRow",
			"themeButton": "oCCWRq_themeButton",
			"themeButtonActive": "oCCWRq_themeButtonActive",
			"themeLabel": "oCCWRq_themeLabel",
			"themeRow": "oCCWRq_themeRow",
			"titleBadge": "oCCWRq_titleBadge"
		};
		//#endregion
		//#region src/client/SkinCenter.tsx
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
		/** The apply target of the official stock-look card. */
		const OFFICIAL = "official";
		/** Skin ids that read the background-scrim variable and paint a backdrop. */
		const BACKDROP_SKIN_IDS = /* @__PURE__ */ new Set(["blue-fantasy", "whale-song"]);
		/**
		* Render the skin-center card: a disclosure header naming the plugin, with
		* the skin list (official default + every installed skin; try-on / theme
		* preview / one-click apply) inside its body.
		* @param props - card props.
		* @returns the plugin card.
		*/
		function SkinCenter({ t, controller, theme, background }) {
			const snapshot = (0, react.useSyncExternalStore)(theme.subscribe, theme.getTheme);
			const opacity = (0, react.useSyncExternalStore)(background.subscribe, background.opacity);
			const activePackage = activeSkinEntry()?.package;
			const activeId = activeSkinEntry()?.id;
			const backdropActive = activeId !== void 0 && BACKDROP_SKIN_IDS.has(activeId);
			const [open, setOpen] = (0, react.useState)(false);
			const [tryingId, setTryingId] = (0, react.useState)(null);
			const [tryingOfficial, setTryingOfficial] = (0, react.useState)(false);
			const [applying, setApplying] = (0, react.useState)(null);
			const [error, setError] = (0, react.useState)(null);
			const fileInputRef = (0, react.useRef)(null);
			const [customSeeds, setCustomSeeds] = (0, react.useState)(null);
			const [customBackdrop, setCustomBackdrop] = (0, react.useState)(null);
			const [decoding, setDecoding] = (0, react.useState)(false);
			const [customActive, setCustomActive] = (0, react.useState)(false);
			const hydratedRef = (0, react.useRef)(null);
			const tryOn = (entry) => {
				setError(null);
				setCustomActive(false);
				controller.tryOn(entry).then(() => {
					setTryingId(entry.id);
					setTryingOfficial(false);
				}).catch(() => {
					setError(t("tryOnError"));
					setTryingId(null);
					setTryingOfficial(false);
				});
			};
			const tryOnOfficial = () => {
				setError(null);
				setCustomActive(false);
				try {
					controller.tryOnOfficial();
				} catch {
					setError(t("tryOnError"));
					setTryingOfficial(false);
					return;
				}
				setTryingId(null);
				setTryingOfficial(true);
			};
			const exitTryOn = () => {
				controller.exit();
				setTryingId(null);
				setTryingOfficial(false);
			};
			/**
			* Decode a picked image in-browser and derive the seed palette + backdrop
			* thumbnail. Fails degrade to a message on the error seat.
			* @param file - the image picked (or dropped) by the user.
			*/
			const loadCustomImage = (file) => {
				setError(null);
				if (!/^image\//.test(file.type)) {
					setError(t("decodeFailed"));
					return;
				}
				setDecoding(true);
				(async () => {
					try {
						const bitmap = await decodeImage(file);
						const backdrop = thumbnailDataUrl(bitmap, BACKDROP_MAX_EDGE);
						const seeds = extractSeedsFromPixels(samplePixels(bitmap));
						setCustomSeeds(seeds);
						setCustomBackdrop(backdrop);
					} catch {
						setError(t("decodeFailed"));
					} finally {
						setDecoding(false);
					}
				})();
			};
			/**
			* Apply the derived custom skin: mount it in-session and persist the seeds +
			* cover image so it survives a reload (the "current theme").
			* @param seeds - palette to derive tokens from.
			* @param backdrop - cover image data URL painted behind the layers.
			*/
			const commitCustom = (seeds, backdrop) => {
				setError(null);
				try {
					controller.tryOnCustom({ css: buildCustomCss(seeds, backdrop) });
					savePersistedCustomSkin({
						image: backdrop,
						seeds
					});
					setCustomSeeds(seeds);
					setCustomBackdrop(backdrop);
					setTryingId(null);
					setTryingOfficial(false);
					setCustomActive(true);
					hydratedRef.current = Date.now();
					markCustomHydrated();
				} catch {
					setError(t("tryOnError"));
				}
			};
			/** Apply + persist the freshly derived/picked custom skin. */
			const applyCustom = () => {
				if (customSeeds === null || customBackdrop === null) return;
				commitCustom(customSeeds, customBackdrop);
			};
			/** Remove the persisted custom skin and return to whatever preceded it
			*  (official look when no boot skin), also clearing storage so a reload does
			*  not bring it back. */
			const clearCustom = () => {
				clearPersistedCustomSkin();
				hydratedRef.current = null;
				resetCustomHydrated();
				controller.exit();
				setCustomActive(false);
				setCustomSeeds(null);
				setCustomBackdrop(null);
				setTryingId(null);
				setTryingOfficial(false);
				setError(null);
			};
			(0, react.useEffect)(() => {
				const stored = loadPersistedCustomSkin();
				if (stored === null) return;
				if (controller.tryingCustom) {
					setCustomSeeds(stored.seeds);
					setCustomBackdrop(stored.image);
					setCustomActive(true);
					return;
				}
				if (customHydratedOnPage()) return;
				if (hydratedRef.current === stored.savedAt) return;
				hydratedRef.current = stored.savedAt;
				try {
					controller.tryOnCustom({ css: buildCustomCss(stored.seeds, stored.image) });
					markCustomHydrated();
					setCustomSeeds(stored.seeds);
					setCustomBackdrop(stored.image);
					setCustomActive(true);
					setTryingId(null);
					setTryingOfficial(false);
				} catch {
					hydratedRef.current = null;
					clearPersistedCustomSkin();
				}
			}, [controller]);
			/**
			* Poll the host state until the config watcher reports the target active
			* (the patch write lands before the watcher re-applies it), or time out.
			* @param target - skin id, or `official` for the stock look.
			* @returns whether the target became active within the poll budget.
			*/
			const confirmActive = (target) => new Promise((resolve) => {
				const expected = target === OFFICIAL ? "none" : target;
				let tries = 0;
				const tick = () => {
					tries += 1;
					fetch("/api/skin-center/state").then(async (response) => {
						const payload = await response.json().catch(() => null);
						if (response.ok && payload?.ok === true && payload.active === expected) {
							resolve(true);
							return;
						}
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					}).catch(() => {
						if (tries >= 20) resolve(false);
						else window.setTimeout(tick, 250);
					});
				};
				tick();
			});
			/**
			* One-click apply: the host half runs `dsh-skin use <target>` (or
			* `use official`), the config watcher hot-reloads the patch within
			* seconds, then this page reloads to pick up the new boot graph.
			* @param target - skin id, or `official` for the stock look.
			*/
			const applySkin = (target) => {
				setError(null);
				clearPersistedCustomSkin();
				hydratedRef.current = null;
				resetCustomHydrated();
				setApplying(target);
				fetch("/api/skin-center/apply", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(target === OFFICIAL ? { official: true } : { skin: target })
				}).then(async (response) => {
					const payload = await response.json().catch(() => null);
					if (!response.ok || payload?.ok !== true) throw new Error(payload?.error ?? `HTTP ${response.status}`);
					setApplying(null);
					confirmActive(target).then((confirmed) => {
						if (confirmed) window.location.reload();
						else {
							const command = target === OFFICIAL ? "dsh-skin use official" : `dsh-skin use ${target}`;
							setError(`${t("appliedUnconfirmed")} — ${command}`);
						}
					});
				}).catch((cause) => {
					setApplying(null);
					const detail = cause instanceof Error ? cause.message : String(cause);
					const command = target === OFFICIAL ? "dsh-skin use official" : `dsh-skin use ${target}`;
					setError(`${t("applyFailed")} (${detail}) — ${command}`);
				});
			};
			const dark = snapshot.active.colorScheme === "dark";
			/** One row: try-on control + apply button. Shared by the official card and every skin card. */
			const actionButtons = (opts) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: skin_center_module_css_default.actions,
				children: [opts.isActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonGhost}`,
					disabled: true,
					children: t("tryOn")
				}) : opts.isTrying ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
					onClick: exitTryOn,
					children: t("exitTryOn")
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
					onClick: opts.onTryOn,
					children: t("tryOn")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: skin_center_module_css_default.button,
					disabled: applying !== null,
					onClick: () => {
						applySkin(opts.key);
					},
					children: applying === opts.key ? t("applying") : opts.applyLabel
				})]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
				className: skin_center_module_css_default.pluginCard,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: skin_center_module_css_default.cardHeader,
					"aria-expanded": open,
					"aria-label": `${t(open ? "collapse" : "expand")}: ${t("title")}`,
					onClick: () => {
						setOpen((current) => !current);
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: skin_center_module_css_default.headText,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: skin_center_module_css_default.pluginName,
							children: [t("title"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: skin_center_module_css_default.titleBadge,
								children: String(SKIN_CENTER_ENTRIES.length)
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: skin_center_module_css_default.cardDescription,
							title: t("cardDescription"),
							children: t("cardDescription")
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: open ? skin_center_module_css_default.chevronOpen : skin_center_module_css_default.chevron,
						children: "▾"
					})]
				}), open ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: skin_center_module_css_default.cardBody,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.head,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: skin_center_module_css_default.intro,
								title: t("intro"),
								children: t("intro")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: skin_center_module_css_default.themeRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: skin_center_module_css_default.themeLabel,
										children: t("theme")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${skin_center_module_css_default.themeButton} ${dark ? "" : skin_center_module_css_default.themeButtonActive}`,
										onClick: () => {
											theme.setTheme("light");
										},
										children: t("themeLight")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: `${skin_center_module_css_default.themeButton} ${dark ? skin_center_module_css_default.themeButtonActive : ""}`,
										onClick: () => {
											theme.setTheme("dark");
										},
										children: t("themeDark")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.backgroundRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: skin_center_module_css_default.backgroundHead,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: skin_center_module_css_default.backgroundLabel,
										children: t("backgroundOpacity")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: skin_center_module_css_default.backgroundValue,
										"aria-hidden": "true",
										children: [opacity, "%"]
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									id: "skin-center-background-opacity",
									className: skin_center_module_css_default.backgroundRange,
									type: "range",
									min: "0",
									max: "100",
									step: "5",
									value: opacity,
									"aria-valuetext": `${opacity}%`,
									"aria-label": t("backgroundOpacity"),
									onChange: (event) => {
										background.set(Number(event.target.value));
									}
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: backdropActive ? skin_center_module_css_default.backgroundHint : skin_center_module_css_default.backgroundHintMuted,
									children: backdropActive ? t("backgroundHint") : t("backgroundHintInert")
								})
							]
						}),
						error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: skin_center_module_css_default.error,
							children: error
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: skin_center_module_css_default.list,
							children: [
								(() => {
									const isActive = activePackage === void 0;
									const isTrying = tryingOfficial;
									const badge = isActive ? t("active") : isTrying ? t("tryingOn") : null;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: skin_center_module_css_default.card,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: skin_center_module_css_default.cardHead,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.swatch,
														style: { background: "#98a1ab" },
														"aria-hidden": "true"
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.cardName,
														title: t("official"),
														children: t("official")
													}),
													badge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: `${skin_center_module_css_default.badge} ${isActive ? skin_center_module_css_default.badgeActive : skin_center_module_css_default.badgeTrying}`,
														children: badge
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: skin_center_module_css_default.cardTagline,
												title: t("officialTagline"),
												children: t("officialTagline")
											}),
											actionButtons({
												key: OFFICIAL,
												isActive,
												isTrying,
												onTryOn: tryOnOfficial,
												applyLabel: t("restore")
											})
										]
									}, OFFICIAL);
								})(),
								(() => {
									const isActive = customActive;
									const badge = isActive ? t("currentTheme") : null;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: skin_center_module_css_default.card,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: skin_center_module_css_default.cardHead,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.swatch,
														style: { background: customSeeds !== null ? hex(customSeeds.accent) : "repeating-conic-gradient(#e2e8f0 0% 25%, #ffffff 0% 50%)" },
														"aria-hidden": "true"
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.cardName,
														title: t("custom"),
														children: t("custom")
													}),
													badge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: `${skin_center_module_css_default.badge} ${skin_center_module_css_default.badgeActive}`,
														children: badge
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: skin_center_module_css_default.cardTagline,
												title: t("customTagline"),
												children: t("customTagline")
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: skin_center_module_css_default.customBody,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
														className: skin_center_module_css_default.customHint,
														children: t("imageHint")
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
														className: skin_center_module_css_default.customPicker,
														children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
															ref: fileInputRef,
															type: "file",
															className: skin_center_module_css_default.fileInput,
															accept: "image/png,image/jpeg,image/webp",
															"aria-label": t("pickImage"),
															onChange: (event) => {
																const file = event.target.files?.[0];
																if (file !== void 0) loadCustomImage(file);
																event.target.value = "";
															}
														}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
															type: "button",
															className: skin_center_module_css_default.fileButton,
															disabled: decoding,
															onClick: () => {
																fileInputRef.current?.click();
															},
															children: decoding ? t("tryOn") : t("browseImage")
														})]
													}),
													customSeeds !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
														/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
															className: skin_center_module_css_default.seedsHead,
															children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																className: skin_center_module_css_default.seedsTitle,
																children: t("seedsTitle")
															}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																className: skin_center_module_css_default.seedsDirection,
																children: customSeeds.dark ? t("darkImage") : t("lightImage")
															})]
														}),
														customBackdrop !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
															className: skin_center_module_css_default.customThumb,
															src: customBackdrop,
															alt: t("custom"),
															loading: "lazy"
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
															className: skin_center_module_css_default.swatchRow,
															children: (() => [
																[t("seedAccent"), customSeeds.accent],
																[t("seedSecondary"), customSeeds.secondary],
																[t("seedSurface"), customSeeds.surface],
																[t("seedText"), customSeeds.text]
															])().map(([label, color]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
																className: skin_center_module_css_default.swatchCell,
																children: [
																	/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																		className: skin_center_module_css_default.swatchBlock,
																		style: { background: hex(color) },
																		"aria-hidden": "true"
																	}),
																	/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																		className: skin_center_module_css_default.swatchLabel,
																		children: label
																	}),
																	/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
																		className: skin_center_module_css_default.swatchHex,
																		children: hex(color)
																	})
																]
															}, label))
														}),
														/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
															className: skin_center_module_css_default.customActions,
															children: isActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																type: "button",
																className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
																onClick: clearCustom,
																children: t("clearCustom")
															}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
																type: "button",
																className: `${skin_center_module_css_default.button} ${skin_center_module_css_default.buttonPrimary}`,
																onClick: applyCustom,
																children: t("applyCustom")
															})
														})
													] })
												]
											})
										]
									}, "custom");
								})(),
								SKIN_CENTER_ENTRIES.map((entry) => {
									const isActive = entry.package === activePackage;
									const isTrying = entry.id === tryingId;
									const badge = isActive ? t("active") : isTrying ? t("tryingOn") : null;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: skin_center_module_css_default.card,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: skin_center_module_css_default.cardHead,
												children: [
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.swatch,
														style: { background: entry.accent },
														"aria-hidden": "true"
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: skin_center_module_css_default.cardName,
														title: entry.nameEn,
														children: entry.nameEn
													}),
													badge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: `${skin_center_module_css_default.badge} ${isActive ? skin_center_module_css_default.badgeActive : skin_center_module_css_default.badgeTrying}`,
														children: badge
													})
												]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: skin_center_module_css_default.cardTagline,
												title: entry.tagline,
												children: entry.tagline
											}),
											actionButtons({
												key: entry.id,
												isActive,
												isTrying,
												onTryOn: () => {
													tryOn(entry);
												},
												applyLabel: t("apply")
											})
										]
									}, entry.id);
								})
							]
						})
					]
				}) : null]
			});
		}
		//#endregion
		//#region src/client/background.ts
		/** The namespace string the Host registers (mirrors src/index.ts). */
		const SKIN_BACKGROUND_NS = "skin-background";
		/** CSS custom property written to document.body and read by backdrop skins. */
		const SCRIM_VAR = "--dsw-skin-scrim";
		/** localStorage key that persists the occlusion across reloads. */
		const BACKGROUND_STORAGE_KEY = "dsh-skin-center:backgroundOpacity";
		/**
		* Own the background occlusion: restore it from localStorage (with a first-read
		* fallback to the settings scope so any previously stored value migrates),
		* apply it to the body CSS variable instantly, and persist changes to
		* localStorage. The public handle surface is unchanged.
		*/
		var BackgroundController = class {
			value = 0;
			listeners = /* @__PURE__ */ new Set();
			scope;
			/**
			* @param scope - the bound settings scope (accepted for compatibility and as
			* a first-read fallback; localStorage is now the source of truth).
			*/
			constructor(scope) {
				this.scope = scope;
				this.value = this.read();
				this.apply();
				scope.subscribe(() => {
					if (this.readFromStorage() === null) {
						this.value = this.readFromScope();
						this.apply();
						this.publish();
					}
				});
			}
			opacity() {
				return this.value;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			set(opacity) {
				const clamped = Math.max(0, Math.min(100, Math.round(opacity)));
				this.value = clamped;
				this.apply();
				this.publish();
				this.writeToStorage(clamped);
			}
			/** Effective value: stored localStorage, else the settings scope, else 0. */
			read() {
				const stored = this.readFromStorage();
				if (stored !== null) return stored;
				return this.readFromScope();
			}
			readFromStorage() {
				try {
					const raw = window.localStorage.getItem(BACKGROUND_STORAGE_KEY);
					if (raw === null) return null;
					const n = Number(raw);
					if (!Number.isFinite(n)) {
						window.localStorage.removeItem(BACKGROUND_STORAGE_KEY);
						return null;
					}
					return Math.max(0, Math.min(100, Math.round(n)));
				} catch {
					return null;
				}
			}
			readFromScope() {
				const raw = this.scope.getSnapshot().value?.backgroundOpacity;
				if (typeof raw !== "number" || !Number.isFinite(raw)) return 0;
				return Math.max(0, Math.min(100, raw));
			}
			writeToStorage(opacity) {
				try {
					window.localStorage.setItem(BACKGROUND_STORAGE_KEY, String(opacity));
				} catch {}
			}
			/** Write the current occlusion onto the body CSS variable (0..1 alpha). */
			apply() {
				document.body.style.setProperty(SCRIM_VAR, String(this.value / 100));
			}
			publish() {
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region src/client/locales.ts
		const en = {
			title: "Skin Center",
			cardDescription: "Try on any installed skin live in the GUI — exit restores instantly, applying persists in one click.",
			expand: "Expand",
			collapse: "Collapse",
			intro: "Try on any skin live — it takes effect instantly, exit restores the current look. Apply persists it across restarts.",
			official: "Official default",
			officialTagline: "The stock DSH look with no skin applied.",
			active: "Active",
			tryingOn: "Trying on",
			tryOn: "Try on",
			exitTryOn: "Exit try-on",
			apply: "Apply",
			applying: "Applying…",
			restore: "Restore",
			applyFailed: "Apply failed",
			appliedUnconfirmed: "Applied, but the change has not been confirmed — refresh the page if the skin did not switch",
			theme: "Theme preview",
			themeLight: "Light",
			themeDark: "Dark",
			tryOnError: "Try-on failed — see console",
			backgroundOpacity: "Background occlusion",
			backgroundHint: "Instantly veils the backdrop behind the panels — higher values obscure the art to help you focus.",
			backgroundHintInert: "Only applies to skins that paint a backdrop (Blue Fantasy / Whale Song). Applies to the official default automatically once such a skin is active.",
			custom: "Custom (pick an image)",
			customTagline: "Upload a photo and generate a bespoke skin palette on the fly.",
			pickImage: "Choose a PNG / JPG / WebP image",
			customize: "Customize your own look",
			browseImage: "Browse image",
			dropHint: "Colors and a light/dark direction are read from the selected picture — everything happens locally in this browser, nothing is uploaded.",
			imageHint: "Pick a picture to preview its palette before applying.",
			seedsTitle: "Derived palette",
			seedAccent: "Accent",
			seedSecondary: "Secondary",
			seedSurface: "Surface",
			seedText: "Text",
			darkImage: "Dark image",
			lightImage: "Light image",
			applyCustom: "Apply",
			appliedCustom: "Applied — exit restores instantly",
			exitCustom: "Exit custom look",
			clearCustom: "Clear custom skin",
			currentTheme: "Current theme",
			decodeFailed: "Could not read that image — try a PNG, JPG or WebP."
		};
		const zh = {
			title: "皮肤中心",
			cardDescription: "在 GUI 内即时试穿任意皮肤，退出即完全还原；应用一键完成并自动刷新。",
			expand: "展开",
			collapse: "收起",
			intro: "任意皮肤可即时试穿，退出即完全还原；「应用」一键持久化，页面自动刷新生效。",
			official: "官方默认",
			officialTagline: "还原 DSH 官方默认外观，不应用任何皮肤。",
			active: "当前激活",
			tryingOn: "试穿中",
			tryOn: "试穿",
			exitTryOn: "退出试穿",
			apply: "应用",
			applying: "应用中…",
			restore: "恢复默认",
			applyFailed: "应用失败",
			appliedUnconfirmed: "已写入配置但尚未确认生效——若皮肤未切换请手动刷新页面",
			theme: "主题预览",
			themeLight: "亮色",
			themeDark: "暗色",
			tryOnError: "试穿失败，详见控制台",
			backgroundOpacity: "背景遮挡",
			backgroundHint: "即时为面板背后的背景加遮罩——数值越高越能弱化插画，帮你集中注意力。",
			backgroundHintInert: "仅对带背景图插画的皮肤（蓝色幻想 / 鲸吟）生效；官方默认无背景图，该滑块对这些皮肤自动生效。",
			custom: "自定义（上传图片）",
			customTagline: "上传一张图片，即时生成专属配色皮肤。",
			pickImage: "选择 PNG / JPG / WebP 图片",
			customize: "定制你的专属外观",
			browseImage: "选择图片",
			dropHint: "从图片中提取主色、次色、底色与文字色，并判断明暗方向——全程在本浏览器本地完成，不会上传到服务器。",
			imageHint: "选择一张图片先预览配色，再一键应用。",
			seedsTitle: "提取配色",
			seedAccent: "主色",
			seedSecondary: "次色",
			seedSurface: "底色",
			seedText: "文字色",
			darkImage: "偏暗图片",
			lightImage: "偏亮图片",
			applyCustom: "应用",
			appliedCustom: "已应用——退出即完全还原",
			exitCustom: "退出自定义外观",
			clearCustom: "清除自定义皮肤",
			currentTheme: "当前主题",
			decodeFailed: "无法读取该图片，请换用 PNG / JPG / WebP 格式。"
		};
		//#endregion
		//#region src/client/index.ts
		/** Locale namespace owned by this plugin. */
		const NS = "skinCenter";
		/** Required services: slots + locale (plugin card), theme (preview toggle), and settingsScope + its transport (background scrim). */
		const inject = [
			"slots",
			"locale",
			"theme",
			"settingsScope",
			"connection",
			"remote"
		];
		/**
		* Register the skin-center dictionaries, the body scope attribute, and the
		* Skins plugin card inside the Web UI plugin group.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-skin-center: dictionaries");
			ctx.effect(() => {
				document.body.dataset.dshSkinCenter = "";
				return () => {
					delete document.body.dataset.dshSkinCenter;
				};
			}, "ui-skin-center: body scope");
			const theme = ctx.get("theme");
			const controller = new TryOnController();
			ctx.effect(() => {
				restorePersistedCustomSkin(controller);
				return () => {};
			}, "ui-skin-center: restore persisted custom skin");
			const background = new BackgroundController((ctx.get("webUiSettings") ?? ctx.settingsScope).bind({ namespace: SKIN_BACKGROUND_NS }));
			const injected = () => ({
				controller,
				theme: {
					getTheme: () => theme.getTheme(),
					subscribe: (listener) => ctx.on("theme/change", listener),
					setTheme: (id) => theme.setTheme(id)
				},
				background: {
					opacity: () => background.opacity(),
					subscribe: (listener) => background.subscribe(listener),
					set: (opacity) => background.set(opacity)
				}
			});
			ctx.slots.inject("web-ui.plugin.item", () => ctx.slots.register({
				name: "web-ui.plugin.item",
				id: "skins",
				order: 110,
				locale: NS,
				inject: injected
			}, SkinCenter));
		}
		//#endregion
		exports.NS = NS;
		exports.TryOnController = TryOnController;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map