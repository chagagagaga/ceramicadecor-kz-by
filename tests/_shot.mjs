import { chromium } from 'playwright';
const S='/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/';
const cc = process.argv[2]||'kz', port = cc==='kz'?8101:8102, mobile = process.argv[3]==='m';
const b = await chromium.launch({channel:'chrome'});
const ctx = await b.newContext(mobile?{viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true}:{viewport:{width:1440,height:1000}});
const p = await ctx.newPage();
for (const pg of ['index.html','kaminy.html','bbq.html','izrazcy.html','ready.html','about.html','contacts.html','privacy.html']) {
  const errs=[]; const bad=[];
  const h1=e=>errs.push(e.message), h2=r=>{ if(r.status()>=400) bad.push(r.status()+' '+r.url().replace(`http://localhost:${port}/`,'')); };
  p.on('pageerror',h1); p.on('response',h2);
  await p.goto(`http://localhost:${port}/`+pg, {waitUntil:'networkidle'});
  await p.addStyleTag({content:'main > section{content-visibility:visible!important}'});
  await p.evaluate(async()=>{ for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y); await new Promise(r=>setTimeout(r,150));} window.scrollTo(0,0); });
  await p.waitForTimeout(1000);
  await p.screenshot({path:S+cc+(mobile?'_m_':'_')+pg.replace('.html','')+'.png', fullPage:true});
  const t = await p.evaluate(()=>document.body.innerText);
  const leak = (t.match(/Росси|Москв|Петербург|₽|MAX|Telegram|Телеграм|Яндекс|undefined|NaN|\[object/g)||[]);
  console.log(cc, pg.padEnd(14), 'JS:', errs.length, errs.slice(0,1).join(''), 'HTTP≥400:', bad.length, bad.slice(0,3).join(' | '), 'leak:', leak.join(',')||'-');
  p.off('pageerror',h1); p.off('response',h2);
}
await b.close();
