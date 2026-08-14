# 发布说明（Release Notes）

本仓库：**dsh-web-ui**（[zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) 的二次开发 Fork）

- Fork 所有者：**LiuJ29120**
- 许可：BSD-3-Clause（见 [LICENSE](LICENSE)，原作者 zhu1090093659 + 本 fork 增强者 LiuJ29120）
- 当前提交：`4ec9d24`（基于上游最新 main `696bd50`）

---

## 一、本 fork 新增功能

**皮肤中心「传图生成自定义皮肤」**（仅改动 `packages/skins/skin-center/`）：

1. 皮肤中心新增「自定义（选图）」卡片
2. 选择 PNG / JPG / WebP 图片，浏览器本地解码（不上传服务器）
3. 自动提取 4 个种子色（主色 / 次色 / 底色 / 文字色）并实时预览色卡
4. 从种子色推导整套 DSH `--dsw-*` 配色 token（OKLab 插值，保持对比度与层次感）
5. 图片铺满为背景（面板半透明透出，带可读性遮罩），亮/暗主题自动适配
6. 「背景透明度」滑块实时调节遮罩，值持久化到 localStorage（刷新保留）
7. 应用后自动持久化，刷新页面自动恢复；支持「清除自定义皮肤」还原

## 二、在另一台机器安装

前置条件：DSH（`dsh web`，rc.6）、Node.js >= 22、pnpm。

```sh
git clone https://github.com/LiuJ29120/dsh-web-ui.git
cd dsh-web-ui

# 安装依赖并构建皮肤中心（首次）
pnpm install
pnpm --filter @linxin666/dsh-client-ui-skin-center run build

# 把插件链接进 web profile（皮肤中心需要配套的插件配置分组）
node scripts/link-profile.mjs
dsh plugin --profile web add link:$(pwd)/packages/dsh-web-ui-settings
dsh plugin --profile web add link:$(pwd)/packages/dsh-skins

# 重启 dsh web
dsh web
```

重启后进入 **设置 → 插件配置 → 皮肤中心**，即可看到「自定义（选图）」卡片。

> 说明：本 fork 的新功能尚未发布到 npm，必须走源码链接方式安装（不要用 `@linxin666/*` 的 npm 包，那是原项目旧版）。

## 三、日常使用

- 换肤：设置 → 皮肤中心 → 点任意皮肤「应用」
- 传图生成皮肤：皮肤中心 → 自定义（选图）→ 选图 → 预览色卡 → 应用
- 调节背景遮挡：皮肤中心的「背景透明度」滑块（0 轻 → 100 实），刷新后保留
- 还原默认：皮肤中心 → 「清除自定义皮肤」或官方默认「应用」

## 四、持续开发与同步上游

**本地开发新功能：**

```sh
git add <files>
git commit -m "feat(<scope>): <subject>"   # Conventional Commits，禁 emoji
git push origin main
```

**同步上游更新（原项目有新提交时）：**

```sh
git fetch upstream
git rebase upstream/main
# 解决冲突（如有）后：
git push origin main
```

**remote 约定：**

- `origin` = https://github.com/LiuJ29120/dsh-web-ui.git（本 fork）
- `upstream` = https://github.com/zhu1090093659/dsh-web-ui.git（原项目）

## 五、仓库改名

随时可在 GitHub：Settings → Repository name 修改（例如改为 `dsh-web-ui-enhanced`）。

- 旧地址自动重定向到新地址
- 本地同步：`git remote set-url origin <新地址>`
- 若改名，请同步更新本文件与 README 中的 clone 地址

## 六、许可与署名

- 本 fork 基于 [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) 二次开发
- 原项目作者：zhu1090093659，许可 BSD-3-Clause
- 本 fork 遵循 BSD-3-Clause：再分发必须保留版权声明与本许可文本
- 改动范围仅 `packages/skins/skin-center/`，未修改 DSH 源码、未修改其他插件包
