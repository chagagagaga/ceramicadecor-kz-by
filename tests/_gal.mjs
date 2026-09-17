import { chromium } from 'playwright';
const b = await chromium.launch({channel:'chrome'}); const p = await b.newPage();
for (const pg of ['ready.html','kaminy.html']) { await p.goto('http://localhost:8101/'+pg,{waitUntil:'networkidle'}); console.log(pg, await p.evaluate(()=>({prod: !!document.querySelector('.gallery--product'), imgs: document.querySelectorAll('.gallery img').length, firstSrc: (document.querySelector('.gallery img')||{}).getAttribute?.('src')||(document.querySelector('.gallery img')||{}).dataset?.src}))); }
await b.close();
