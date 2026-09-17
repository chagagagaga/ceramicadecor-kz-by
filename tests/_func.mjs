import { chromium } from 'playwright';
import fs from 'fs'; import path from 'path';
const cc = process.argv[2]||'by', host = cc==='kz'?'ceramicadecor.kz':'ceramicadecor.by', DIST = path.resolve('docs/'+cc);
const MIME = {html:'text/html',js:'application/javascript',css:'text/css',webp:'image/webp',jpg:'image/jpeg',png:'image/png',woff2:'font/woff2',json:'application/json',svg:'image/svg+xml',gif:'image/gif'};
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
const posts = [];
await p.route('**/*', async route => {
  const u = new URL(route.request().url());
  if (u.hostname === host) {
    if (u.pathname.endsWith('send-lead.php')) { posts.push({to:'tg', body: route.request().postData()}); return route.fulfill({status:200, contentType:'application/json', body:'{"ok":true}'}); }
    let f = path.join(DIST, u.pathname === '/' ? 'index.html' : u.pathname);
    if (!fs.existsSync(f)) return route.fulfill({status:404, body:'nf'});
    return route.fulfill({status:200, contentType: MIME[f.split('.').pop()]||'application/octet-stream', body: fs.readFileSync(f)});
  }
  if (u.hostname === 'ceramicadecor.ru') { if (u.pathname.includes('beacon')) { posts.push({to:'lso', url:u.pathname, body: route.request().postData()}); return route.fulfill({status:200, body:''}); } posts.push({to:'lso', url:u.pathname, body: route.request().postData()}); return route.fulfill({status:200, contentType:'application/json', body:'{"result":true}'}); }
  if (/wa\.me|whatsapp/.test(u.hostname)) return route.fulfill({status:200, contentType:'text/html', body:'<html>wa</html>'});
  if (/facebook|clarity/.test(u.hostname)) return route.fulfill({status:200, contentType:'application/javascript', body:'/* stub */'});
  return route.abort();
});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(`http://${host}/izraztsovye-kaminy.html`, {waitUntil:'networkidle'});
// маска телефона
const tel = p.locator('form input[type="tel"]').first();
await tel.click(); await tel.type(cc==='by'?'291234567':'7788639911');
console.log('mask:', await tel.inputValue());
await p.locator('form input[name="name"]').first().fill('Тест Тестов');
await p.locator('form [type="submit"]').first().click();
await p.waitForTimeout(1200);
console.log('posts:', JSON.stringify(posts, null, 1).slice(0, 1800));
await p.screenshot({path:'/private/tmp/claude-501/-Users-alex/7b318732-29a6-4a8e-b2aa-2cabee36b183/scratchpad/kzby/'+cc+'_after_submit.png'});
console.log('status:', (await p.locator('.form__status, [data-status]').first().textContent().catch(()=>'')).trim());
// пиксель
const q = await p.evaluate(()=> (window.fbq && window.fbq.queue || []).map(a=>[].slice.call(a)));
console.log('fbq:', JSON.stringify(q));
// WhatsApp попап
await p.locator('a[href*="wa.me"]:visible').first().click();
await p.waitForTimeout(400);
console.log('fbq after wa click:', JSON.stringify(await p.evaluate(()=> (window.fbq.queue||[]).map(a=>[].slice.call(a)).slice(-1))));
console.log('popup visible:', await p.locator('.wa-system-popup').isVisible().catch(()=>false));
const popupHtml = await p.locator('.wa-system-popup').innerText().catch(()=>'');
console.log('popup text:', popupHtml.replace(/\s+/g,' ').slice(0,120));
const navP = p.waitForRequest(r=>/wa\.me/.test(r.url()), {timeout:3000}).catch(()=>null); await p.locator('[data-wa-confirm]').click(); const nav = await navP; console.log('wa url:', nav ? decodeURIComponent(nav.url()).slice(0,200) : '(none)'); console.log('beacons:', JSON.stringify(posts.filter(x=>x.url&&x.url.includes('beacon')).map(x=>x.body&&x.body.slice(0,120))));
const q2 = await p.evaluate(()=> (window.fbq && window.fbq.queue || []).map(a=>[].slice.call(a)).slice(-3));
console.log('fbq tail:', JSON.stringify(q2));
// catalog redirect
await p.goto(`http://${host}/catalog.html?cat=bbq&utm_source=fb`, {waitUntil:'networkidle'});
console.log('catalog redirect →', p.url());
console.log('JS errors:', errs);
await b.close();
