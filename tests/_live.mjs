import { chromium } from 'playwright';
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
for (const cc of ['kz','by']) for (const pg of ['index.html','izraztsovye-kaminy.html','bbq.html','izrazcy.html','ready.html','about.html','contacts.html','privacy.html']) {
  const errs=[], bad=[]; const h1=e=>errs.push(e.message), h2=r=>{ if(r.status()>=400) bad.push(r.status()+' '+r.url().split('/').slice(-2).join('/')); };
  p.on('pageerror',h1); p.on('response',h2);
  await p.goto(`https://chagagagaga.github.io/ceramicadecor-kz-by/${cc}/${pg}`, {waitUntil:'networkidle'});
  await p.evaluate(async()=>{ for(let y=0;y<document.body.scrollHeight;y+=800){window.scrollTo(0,y); await new Promise(r=>setTimeout(r,100));} });
  await p.waitForTimeout(500);
  const n = await p.evaluate(()=>document.querySelectorAll('.card, .pcard').length);
  console.log(cc, pg.padEnd(14), 'JS', errs.length, 'HTTP≥400', bad.length, bad.slice(0,3).join(' '), 'cards', n);
  p.off('pageerror',h1); p.off('response',h2);
}
await b.close();
