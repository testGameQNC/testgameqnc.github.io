# 千年虫2试玩

[在线试玩](https://testgameqnc.github.io/)

双击 [千年虫2试玩.html](千年虫2试玩.html) 开始。内容为《未寄出的明天》的序章「六张盘」和第一章「封条」，第一章推理完成后显示“敬请期待完整版本！”。

本包使用独立存档，只包含这两章内可以接触的剧情资料及六张照片素材。保留第一章的资料交接修订、五人胶囊信件、照片原文与精确证据图层。没有打包后续章节、完整结局、攻略或在线统计服务。

2026年11月1日已同步完整版的最新对白、资料交接、自定义名称、聊天日期和触屏输入修复。已有试玩存档可以继续读取，旧消息的异常日期会在读档时修正。

`index.html` 与 `千年虫2试玩.html` 内容相同，都可以独立打开。需要修改试玩时，编辑 `src/`，运行 `node tools/build.cjs`。`src/trial-story.js` 为已经裁剪、合并的剧情资料，重新构建不依赖完整版目录。

试玩存档格式为 `sixth-disk-trial-v1`，浏览器存储前缀为 `y2k2_trial_`。完整版存档不能导入试玩。已完成试玩的存档重新加载后仍会显示结束画面。

网页版与本地文件版各自在当前浏览器保存进度，需要转移时请使用手机菜单中的试玩存档导出、导入。

## 发布

仓库为 `testGameQNC/testgameqnc.github.io`，GitHub Pages 从 `main` 分支根目录发布。修改源码后运行 `node tools/build.cjs` 与 `node tools/validate.cjs`，并提交源码及两个 HTML 入口。浏览器流程检查：`node tools/smoke.cjs`；触屏检查：`node tools/smoke.cjs --webkit --mobile`（需要 Playwright）。
