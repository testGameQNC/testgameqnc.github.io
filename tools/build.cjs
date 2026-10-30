// Rebuild the self-contained trial without needing any full-game source files.
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n?/g, '\n');
const manifest = JSON.parse(read('src/photo-manifest.json'));
let story = read('src/trial-story.js');
for (const [id, asset] of Object.entries(manifest.assets)) {
  const image = 'data:image/webp;base64,' + fs.readFileSync(path.join(root, asset.file)).toString('base64');
  story = story.replaceAll('TRIAL_PHOTO_' + id + '_END', image);
}
assert(!/TRIAL_PHOTO_[a-z0-9-]+_END/.test(story), 'Missing photo');
const engine = read('src/engine.js').replace('return { add, boot, lang, patch, debug };', 'return { add, boot, lang, patch };');
assert(!engine.includes('patch, debug }'), 'Debug export was not stripped');
const css = ['style.css', 'win98.css', 'title.css', 'trial.css'].map(f => read('src/' + f)).join('\n');
const script = (`window.Y2K_LANGS=['zh'];\n${engine}\n${story}\nY2K.boot();`).replace(/<\/script/gi, '<\\/script');
const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><meta name="theme-color" content="#121316"><meta name="description" content="千年虫2试玩：未寄出的明天。包含序章六张盘和第一章封条。"><title>千年虫2试玩</title><style>${css}</style></head><body><noscript>请启用 JavaScript 以运行游戏。</noscript><script>${script}</script></body></html>`;
for (const file of ['index.html', '千年虫2试玩.html']) fs.writeFileSync(path.join(root, file), html);
console.log('已生成千年虫2试玩.html及index.html：' + Math.round(Buffer.byteLength(html) / 1024) + ' KB');
