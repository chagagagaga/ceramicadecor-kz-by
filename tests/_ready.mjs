import { chromium } from 'playwright';
const S='/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/';
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); const bad=[]; p.on('response',r=>{ if(r.status()>=400) bad.push(r.url()); });
await p.goto('http://localhost:8101/ready.html', {waitUntil:'networkidle'});
await p.addStyleTag({content:'main > section{content-visibility:visible!important}'});
await p.evaluate(async()=>{ for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y); await new Promise(r=>setTimeout(r,150));} window.scrollTo(0,0); });
await p.waitForTimeout(800);
// калькулятор: выбрать Флору
await p.locator('[data-calc] .opt, [data-calc] label, [data-calc] [role=radio]').filter({hasText:'Флора'}).first().click(); await p.waitForTimeout(400);
console.log('colors for flora:', await p.evaluate(()=>[...document.querySelectorAll('[data-calc] .opt, [data-calc] label')].map(l=>l.innerText.split('\n')[0]).filter(x=>/антик|Олива|Сапфир|шоколад|Бургундия|Лазурный|Муравленый|оттенок/i.test(x))));
console.log('estimate:', await p.evaluate(()=>(document.querySelector('[data-calc] .calc__total, [data-calc] [data-total], [data-calc] .calc__sum')||{}).innerText));
await p.screenshot({path:S+'ready_flora.png'});
await p.evaluate(()=>document.querySelector('#catalog')?.scrollIntoView()); await p.waitForTimeout(800);
await p.screenshot({path:S+'ready_cards.png', fullPage:false});
console.log('JS', errs, 'bad', bad.length, bad.slice(0,3));
await b.close();
