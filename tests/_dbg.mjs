import { chromium } from 'playwright';
const S='/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/';
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('http://localhost:8101/index.html', {waitUntil:'networkidle'});
await p.locator('#calc').scrollIntoViewIfNeeded(); await p.waitForTimeout(900);
await p.screenshot({path:S+'kz_calc.png'});
console.log(await p.evaluate(()=>{const r=document.querySelector('#calc').getBoundingClientRect(); const c=document.querySelector('[data-calc]').getBoundingClientRect(); return {section:[Math.round(r.height)], calc:[Math.round(c.width),Math.round(c.height)], vis:getComputedStyle(document.querySelector('[data-calc]')).visibility, op:getComputedStyle(document.querySelector('[data-calc]')).opacity};}));
await b.close();
