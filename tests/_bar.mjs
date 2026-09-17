import { chromium } from 'playwright';
const S='/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/';
const b = await chromium.launch({channel:'chrome'});
const ctx = await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
const p = await ctx.newPage();
await p.goto('http://localhost:8101/kaminy.html', {waitUntil:'networkidle'});
await p.screenshot({path:S+'bar_top.png'});
console.log('bar visible at top:', await p.locator('[data-mobilebar]').isVisible(), JSON.stringify(await p.locator('[data-mobilebar]').boundingBox()));
await b.close();
