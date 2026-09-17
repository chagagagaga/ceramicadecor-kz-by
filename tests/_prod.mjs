import { chromium } from 'playwright';
const host = process.argv[2] || 'https://ceramicadecor.kz';
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
for (const pg of ['index.html','izraztsovye-kaminy.html','bbq.html','izrazcy.html','ready.html','about.html','contacts.html']) {
  const errs=[], bad=[]; const h1=e=>errs.push(e.message), h2=r=>{ const u=r.url(); if(r.status()>=400 && u.startsWith(host)) bad.push(r.status()+' '+u.replace(host,'')); };
  p.on('pageerror',h1); p.on('response',h2);
  await p.goto(`${host}/${pg}`, {waitUntil:'load'});
  await p.evaluate(async()=>{ for(let y=0;y<document.body.scrollHeight;y+=800){window.scrollTo(0,y); await new Promise(r=>setTimeout(r,120));} });
  await p.waitForTimeout(600);
  const info = await p.evaluate(()=>({cards: document.querySelectorAll('.card,.pcard').length, fbq: typeof fbq, cd: !!window.CDAttribution, phone: (document.querySelector('.header__phone a')||{}).textContent, wa: (document.querySelector('a[href*="wa.me"]')||{}).href}));
  console.log(pg.padEnd(14), 'JS', errs.length, errs.slice(0,1).join('').slice(0,80), 'HTTP≥400', bad.length, bad.slice(0,3).join(' | '), JSON.stringify(info));
  p.off('pageerror',h1); p.off('response',h2);
}
await b.close();
