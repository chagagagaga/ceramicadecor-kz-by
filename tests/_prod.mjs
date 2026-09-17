import { chromium } from 'playwright';
const host = process.argv[2];
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
for (const pg of ['index.html','izraztsovye-kaminy.html','bbq.html','izrazcy.html','ready.html','about.html','contacts.html','kaminy.html','kaminy','catalog.html?cat=kaminy','catalog.html?cat=bbq']) {
  const errs=[], bad=[]; const h1=e=>errs.push(e.message), h2=r=>{ const u=r.url(); if(r.status()>=400 && u.includes(host.replace('https://',''))) bad.push(r.status()+' '+u.split('/').slice(3).join('/')); };
  p.on('pageerror',h1); p.on('response',h2);
  try {
    await p.goto(`${host}/${pg}`, {waitUntil:'load', timeout:40000});
    await p.waitForTimeout(1500);
    await p.evaluate(async()=>{ for(let y=0;y<document.body.scrollHeight;y+=900){window.scrollTo(0,y); await new Promise(r=>setTimeout(r,120));} });
    await p.waitForTimeout(1200);
    const info = await p.evaluate(()=>({url: location.pathname+location.search, title: document.title.slice(0,30), cards: document.querySelectorAll('.card,.pcard').length, imgsLoaded: [...document.querySelectorAll('.card img,.pcard img,.gallery img')].filter(i=>i.complete&&i.naturalWidth>0).length, fbq: typeof fbq, cd: !!window.CDAttribution, phone: (document.querySelector('.header__phone a')||{}).textContent}));
    console.log(pg.padEnd(24), 'JS', errs.length, 'HTTP≥400', bad.length, bad.slice(0,2).join(' | '), JSON.stringify(info));
  } catch (e) { console.log(pg.padEnd(24), 'FAIL', e.message.slice(0,80)); }
  p.off('pageerror',h1); p.off('response',h2);
}
await b.close();
