// Isolated browser walkthrough of every trial puzzle and the actual final board.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const {chromium,webkit}=require('playwright');
const root=path.resolve(__dirname,'..'),shots=path.join(root,'test-results');
const release=fs.readFileSync(path.join(root,'千年虫2试玩.html'),'utf8');
const html=release.replace('const debug = {','const debug = { loadState, writeSave, showTitle, askPuzzle, busy: () => Object.values(running).some(Boolean),').replace('return { add, boot, lang, patch };','return { add, boot, lang, patch, debug };');
const kind=process.argv.includes('--webkit')?'webkit':'edge',mobile=process.argv.includes('--mobile');
(async()=>{
 const browser=await(kind==='webkit'?webkit.launch({headless:true}):chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'}));
 try{
  const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1440,height:950},hasTouch:mobile,isMobile:mobile});
  const errors=[],external=[];
  await context.route('**/*',r=>{if(r.request().url()==='http://trial.test/')return r.fulfill({contentType:'text/html',body:html});if(r.request().url().startsWith('file:'))return r.continue();external.push(r.request().url());return r.abort();});
  const p=await context.newPage();p.setDefaultTimeout(15000);p.on('pageerror',e=>errors.push(e.message));
  const press=control=>mobile?control.tap():control.click();
  await p.goto('http://trial.test/');
  await p.evaluate(()=>{localStorage.setItem('y2k2_auto','FULL_GAME_SAVE_UNCHANGED');localStorage.setItem('y2k2_meta','FULL_GAME_META_UNCHANGED');});
  assert.equal(await p.getByRole('button',{name:'排行榜',exact:true}).count(),0);
  await p.screenshot({path:path.join(shots,`${kind}-${mobile?'phone':'desktop'}-title.png`)});
  await p.getByRole('button',{name:'新的调查',exact:true}).click();await p.evaluate(()=>Y2K.debug.fast(true));
  await p.getByRole('button',{name:'开始',exact:true}).click();
  const flag=f=>p.evaluate(f=>!!Y2K.debug.state.flags[f],f);
  const card=async()=>{await p.waitForTimeout(100);while(await p.locator('.card').count()){await p.locator('.card').click();await p.waitForTimeout(100);}};
  const talk=()=>p.evaluate(async()=>{const d=Y2K.debug;for(let i=0;i<180;i++){const list=Object.entries(d.state.wait).filter(([,w])=>w&&['reply','choice'].includes(w.type));if(!list.length){await new Promise(r=>setTimeout(r,120));if(!Object.values(d.state.wait).some(w=>w&&['reply','choice'].includes(w.type))&&!d.busy())return;}for(const[c]of list){d.ui.tab='msg';d.ui.chat=c;d.renderPhone();document.querySelector('#phFoot button')?.click();}await new Promise(r=>setTimeout(r,50));}throw Error('Conversation failed to settle');});
  const phone=async()=>{if(mobile&&!await p.locator('#phone').evaluate(el=>el.classList.contains('open')))await p.locator('#phoneFab').tap();};
  const open=async(tab,key,id)=>{await phone();await p.evaluate(([tab,key,id])=>{const d=Y2K.debug;d.ui.tab=tab;d.ui[key]=id;d.renderPhone();},[tab,key,id]);};
  const file=id=>p.evaluate(id=>Y2K.debug.openFile(id),id);
  const solve=async(id,wrong=false)=>{
    const q=await p.evaluate(id=>{const d=Y2K.debug,q=d.D.puzzles[id];if(!d.test(q.requires))throw Error('Not ready: '+id);d.askPuzzle(id,null,true);return q;},id);
    if(q.kind==='choice')await p.getByRole('radio',{name:q.answer,exact:true}).check();
    else {await p.locator('#pz_'+id).fill(wrong?'999':q.answers[0]);}
    await press(p.locator('#modal').getByRole('button',{name:'确定',exact:true}));
    if(wrong){assert(!await flag('solved_'+id));await p.locator('#pz_'+id).fill(q.answers[0]);await press(p.locator('#modal').getByRole('button',{name:'确定',exact:true}));}
    await p.waitForFunction(id=>!!Y2K.debug.state.flags['solved_'+id],id);await p.waitForFunction(()=>!document.querySelector('#modal').children.length);
  };
  await card();await talk();assert(await flag('c0_box'));
  await open('items','item','c0_list');await open('items','item','c0_photo');
  assert(await p.locator('#phBody svg[data-photo="unboxing"] image').evaluate(el=>el.getAttribute('href').startsWith('data:image/webp;base64,')));
  await p.locator('#phBody .evidence-photo').click();await p.locator('.viewer').waitFor();await p.keyboard.press('Escape');
  if(mobile)await p.getByRole('button',{name:'收起',exact:true}).tap();
  await p.locator('#screen .power').click();await p.waitForFunction(()=>Y2K.debug.state.stage==='win'&&document.querySelector('#desktop'));await card();
  await solve('c0_count',true);await file('f_d6_dir');await solve('c0_odd');await talk();await card();await talk();
  assert(await flag('ch1'));assert(await flag('p2_seal_received'),'footage delivered through conversation');
  await open('clips','clip','v1999_01');
  const pick=async t=>{await phone();await p.evaluate(()=>{const d=Y2K.debug;d.ui.tab='clips';d.ui.clip='v1999_01';d.ui.framePuzzle='c1_frame';d.renderPhone();});await press(p.locator('#phBody .frame').filter({hasText:t}));await press(p.getByRole('button',{name:'提交：'+t,exact:true}));};
  await pick('23:33:40');assert(!await flag('solved_c1_frame'));await pick('23:35:12');assert(await flag('solved_c1_frame'));await talk();
  await open('items','item','c1_seal_now');await solve('c1_diff');
  await file('f_serial_help');await solve('c1_serial');await talk();
  await open('items','item','c1_label');await open('items','item','c1_news2003');await solve('c1_year');await solve('c1_who');await talk();
  assert(await flag('dlg_c1_jiang'),'chapter-one closing conversation retained');
  // Resume an in-chapter save before finishing the trial.
  await p.evaluate(()=>Y2K.debug.writeSave('auto'));await p.reload();await p.evaluate(()=>Y2K.debug.fast(true));
  await p.getByRole('button',{name:'继续调查',exact:true}).click();assert(await flag('solved_c1_who'));
  await p.evaluate(()=>{Y2K.debug.closeAllWins();Y2K.debug.openBoard('c1_final');});
  await press(p.getByRole('button',{name:'检查',exact:true}));assert(!await flag('ending_TRIAL'),'unfinished board cannot end trial');
  const fills=await p.evaluate(()=>Object.entries(Y2K.debug.D.boards.c1_final.slots).map(([slot,word])=>({slot,word})));
  for(const {slot,word}of fills){await press(p.locator('.slot[data-s="'+slot+'"]'));
    // Read the drag payload to identify the original-evidence chip without changing board state.
    const index=await p.locator('.chip').evaluateAll((chips,word)=>chips.findIndex(chip=>{let id;chip.ondragstart({dataTransfer:{setData:(_,v)=>id=v}});return id===word;}),word);
    assert(index>=0,'Missing selectable chip '+word);await press(p.locator('.chip').nth(index));
  }
  await press(p.getByRole('button',{name:'检查',exact:true}));await p.locator('.ending h1').waitFor();
  assert.equal(await p.locator('.ending h1').textContent(),'敬请期待完整版本！');assert(!await flag('ch2'));
  assert.equal(await p.locator('#toast').innerText(),'','trial ending stays free of story notifications');
  assert.deepEqual(await p.evaluate(()=>Y2K.debug.D.chapters.map(c=>c.id)),['ch0','ch1']);
  const finished=await p.evaluate(()=>JSON.parse(localStorage.getItem('y2k2_trial_auto')));assert.equal(finished.v,'sixth-disk-trial-v1');
  await p.locator('.ending').evaluate(el=>Promise.all(el.getAnimations().map(a=>a.finished)));
  await p.screenshot({path:path.join(shots,`${kind}-${mobile?'phone':'desktop'}-ending.png`)});
  await p.getByRole('button',{name:'回看第一章',exact:true}).click();assert(!await flag('ending_TRIAL'));assert(!await flag('ch2'));
  await p.evaluate(s=>Y2K.debug.loadState(s),finished);await p.getByRole('button',{name:'返回标题画面',exact:true}).click();
  await p.reload();await p.getByRole('button',{name:'继续调查',exact:true}).click();assert.equal(await p.locator('.ending h1').textContent(),'敬请期待完整版本！');
  await p.evaluate(()=>{try{Y2K.debug.loadState({...Y2K.debug.state,v:3,chapter:'ch7'});throw Error('accepted full save');}catch(e){if(e.message==='accepted full save')throw e;}});
  assert.equal(await p.evaluate(()=>localStorage.getItem('y2k2_auto')),'FULL_GAME_SAVE_UNCHANGED');
  assert.equal(await p.evaluate(()=>localStorage.getItem('y2k2_meta')),'FULL_GAME_META_UNCHANGED');
  // The actual standalone file opens without network access or the debug API.
  const offline=await context.newPage();offline.on('pageerror',e=>errors.push(e.message));await offline.goto(pathToFileURL(path.join(root,'千年虫2试玩.html')).href);
  assert.equal(await offline.evaluate(()=>typeof Y2K.debug),'undefined');await offline.getByRole('button',{name:'新的调查',exact:true}).click();await offline.getByRole('button',{name:'开始',exact:true}).click();await offline.locator('.card').waitFor();
  assert.deepEqual(errors,[]);assert.deepEqual(external,[]);await context.close();
  console.log(`PASS ${kind} ${mobile?'touch':'desktop'}: all 7 puzzles, real board, photos, delivery, save reload, trial end/revisit, full-save isolation and offline file`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
