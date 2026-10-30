const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), data = {};
vm.runInNewContext(fs.readFileSync(path.join(root,'src/trial-story.js'),'utf8'), {Y2K:{patch:fn=>fn(data)}});
assert.equal(JSON.stringify(data.chapters.map(c=>c.id)), '["ch0","ch1"]');
assert.equal(Object.keys(data.puzzles).length, 7);
assert.equal(Object.keys(data.boards).join(','), 'c1_final');
assert.equal(Object.keys(data.endings).join(','), 'TRIAL');
assert.equal(data.endings.TRIAL.title, '敬请期待完整版本！');
assert.equal(data.boards.c1_final.onSolve.ending, 'TRIAL');
const records = [...data.chapters,...data.files,...data.dialogues,...data.mails2018,...data.items2018,...data.footage.clips,...Object.values(data.puzzles),...Object.values(data.boards)];
for (const record of records) {
  assert(!/\bch[2-9]\b/.test((record.requires||'')+' '+(record.trigger||'')), 'Future chapter gate: '+record.id);
  for (const key of ['onOpen','onSolve','onProps','onView']) {
    const action=record[key];if(!action)continue;
    for(const id of [].concat(action.note||[]))assert(data.notes[id], 'Missing note '+id);
    if(action.collect)assert(data.collectibles[action.collect], 'Missing collectible '+action.collect);
  }
}
for (const d of data.dialogues) assert(data.contacts2018[d.contact], 'Missing contact '+d.id);
const ids = new Set([...data.files,...data.items2018,...data.mails2018,...data.footage.clips].map(x=>x.id));
for (const source of data.boards.c1_final.srcPool) assert(ids.has(source), 'Missing board source '+source);
for (const p of Object.values(data.puzzles)) if(p.clip) assert(data.footage.clips.some(c=>c.id===p.clip));
const engine=fs.readFileSync(path.join(root,'src/engine.js'),'utf8');
assert(engine.includes("const VER = 'sixth-disk-trial-v1'"));
assert(!/['"]y2k2_(?!trial_)/.test(engine));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.equal(html,fs.readFileSync(path.join(root,'千年虫2试玩.html'),'utf8'));
assert(!html.includes('patch, debug }'));
assert(!html.includes('TRIAL_PHOTO_'));
assert(!html.includes('qiannianchong-stats.chenhao2003.chatgpt.site'));
console.log('通过：仅两章、7道谜题、1张推理板、试玩结束画面、资料引用、独立存档、内嵌照片与离线入口。');
