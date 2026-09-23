import { chromium } from 'playwright';
import fs from 'fs'; import path from 'path';
const cc = process.argv[2]||'kz', host = cc==='kz'?'ceramicadecor.kz':'ceramicadecor.by', DIST = path.resolve('docs/'+cc);
const MIME = {html:'text/html',js:'application/javascript',css:'text/css',webp:'image/webp',jpg:'image/jpeg',png:'image/png',woff2:'font/woff2',json:'application/json',svg:'image/svg+xml',gif:'image/gif'};
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
const posts=[]; const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{ if(/turnstile|challenge/i.test(m.text())) console.log('console:',m.text().slice(0,160)); }); p.on('response',r=>{ if(/challenges\.cloudflare/.test(r.url())) console.log('cf:',r.status(),r.url().slice(0,90)); });
await p.route('**/*', async route => {
  const u = new URL(route.request().url());
  if (u.hostname === host) {
    if (u.pathname.endsWith('send-lead.php')) { posts.push(JSON.parse(route.request().postData())); return route.fulfill({status:200, contentType:'application/json', body:'{"ok":true}'}); }
    let f = path.join(DIST, u.pathname === '/' ? 'index.html' : u.pathname);
    if (!fs.existsSync(f)) return route.fulfill({status:404, body:'nf'});
    return route.fulfill({status:200, contentType: MIME[f.split('.').pop()]||'application/octet-stream', body: fs.readFileSync(f)});
  }
  if (u.hostname === 'ceramicadecor.ru') { posts.push({lso:true}); return route.fulfill({status:200, contentType:'application/json', body:'{"result":true}'}); }
  if (/facebook|clarity/.test(u.hostname)) return route.fulfill({status:200, contentType:'application/javascript', body:''});
  return route.continue();   // Cloudflare — по-настоящему
});
if (process.argv[3]==='testkey') await p.addInitScript(()=>{ const d=Object.getOwnPropertyDescriptor(window,'LP'); let v; Object.defineProperty(window,'LP',{configurable:true,get(){return v},set(x){ if(x&&x.brand) x.brand.turnstileKey='1x00000000000000000000AA'; v=x; }}); });
await p.goto(`https://${host}/contacts.html`, {waitUntil:'networkidle'});
const f = p.locator('form[data-lead-source=contacts]');
await f.locator('input[name=name]').click();            // focusin → виджет
await p.waitForTimeout(4000);
console.log('box html:', (await f.locator('.form-captcha').innerHTML()).slice(0,200));
console.log('turnstile loaded:', await p.evaluate(()=>typeof window.turnstile), '| widget iframe:', await f.locator('.form-captcha iframe').count(), '| token before submit:', (await f.getAttribute('data-cf-token')||'').slice(0,12)+'…');
const t0=Date.now();
await f.locator('input[name=name]').fill('Тест капчи'); await f.locator('input[type=tel]').type(cc==='by'?'291112233':'7011112233');
await f.locator('[type=submit]').click();
await p.waitForFunction(()=>document.querySelector('form[data-lead-source=contacts] .form-status')?.textContent?.trim(), null, {timeout:15000}).catch(()=>0);
console.log('submit took', Date.now()-t0, 'ms | status:', (await f.locator('.form-status').first().textContent().catch(()=>'')).trim());
const tg = posts.find(x=>x.text); console.log('send-lead.php got cf_token:', tg ? (tg.cf_token||'').length+' chars, state='+tg.cf_state : 'NO POST', '| LSO posts:', posts.filter(x=>x.lso).length, '| TG text warn:', tg && /Капча не пройдена/.test(tg.text));
await p.screenshot({path:'/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/captcha.png'});
console.log('errs', errs);
await b.close();
