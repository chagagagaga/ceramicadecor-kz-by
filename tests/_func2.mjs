import { chromium } from 'playwright';
import fs from 'fs'; import path from 'path';
const cc = process.argv[2]||'kz', host = cc==='kz'?'ceramicadecor.kz':'ceramicadecor.by', DIST = path.resolve('docs/'+cc);
const MIME = {html:'text/html',js:'application/javascript',css:'text/css',webp:'image/webp',jpg:'image/jpeg',png:'image/png',woff2:'font/woff2',json:'application/json',svg:'image/svg+xml',gif:'image/gif'};
const b = await chromium.launch({channel:'chrome'});
const p = await b.newPage({viewport:{width:1440,height:1000}});
const posts = [];
await p.route('**/*', async route => {
  const u = new URL(route.request().url());
  if (u.hostname === host) {
    if (u.pathname.endsWith('send-lead.php')) { posts.push(JSON.parse(route.request().postData()).text); return route.fulfill({status:200, contentType:'application/json', body:'{"ok":true}'}); }
    let f = path.join(DIST, u.pathname === '/' ? 'index.html' : u.pathname);
    if (!fs.existsSync(f)) return route.fulfill({status:404, body:'nf'});
    return route.fulfill({status:200, contentType: MIME[f.split('.').pop()]||'application/octet-stream', body: fs.readFileSync(f)});
  }
  if (u.hostname === 'ceramicadecor.ru') { posts.push('LSO '+u.pathname+' '+decodeURIComponent(route.request().postData()||'').replace(/\+/g,' ').split('&').filter(x=>/^(subject|comment|phone)=/.test(x)).join(' | ')); return route.fulfill({status:200, contentType:'application/json', body:'{"result":true}'}); }
  if (/facebook|clarity/.test(u.hostname)) return route.fulfill({status:200, contentType:'application/javascript', body:''});
  return route.abort();
});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
for (const pg of ['kaminy.html','bbq.html','izrazcy.html','ready.html','index.html','contacts.html']) {
  posts.length=0;
  await p.goto(`http://${host}/${pg}`, {waitUntil:'networkidle'});
  // 1) калькулятор / квиз: кнопка «Прислать расчёт» → модалка
  const calcBtn = p.locator('[data-calc] button, [data-calc] [type="submit"]').filter({hasText:/Прислать|Получить|Рассчитать/}).first();
  if (await calcBtn.count()) {
    await calcBtn.click(); await p.waitForTimeout(400);
    const modal = p.locator('.modal.is-open, [data-modal].is-open, .modal:visible').first();
    console.log(pg, 'modal open:', await modal.isVisible().catch(()=>false));
    const f = modal.locator('form');
    await f.locator('input[name="name"]').fill('Калк Тест'); await f.locator('input[type="tel"]').type(cc==='by'?'291112233':'7011112233');
    await f.locator('[type="submit"]').click(); await p.waitForTimeout(900);
    console.log('  →', JSON.stringify(posts));
    posts.length=0; await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  }
  // 2) карточка «Рассчитать такой же»
  const cardBtn = p.locator('.card [data-lead], .pcard [data-lead], .card button, .pcard button').filter({hasText:/Рассчитать|Заказать|Купить|Хочу/}).first();
  if (await cardBtn.count()) {
    await cardBtn.scrollIntoViewIfNeeded(); await cardBtn.click(); await p.waitForTimeout(400);
    const modal = p.locator('.modal.is-open, [data-modal].is-open, .modal:visible').first();
    console.log(pg, 'card modal:', await modal.isVisible().catch(()=>false), (await modal.locator('h3, .modal__title').first().textContent().catch(()=>'')).trim().slice(0,60));
    const f = modal.locator('form');
    await f.locator('input[name="name"]').fill('Карта Тест'); await f.locator('input[type="tel"]').type(cc==='by'?'291112244':'7011112244');
    await f.locator('[type="submit"]').click(); await p.waitForTimeout(900);
    console.log('  →', JSON.stringify(posts));
    await p.keyboard.press('Escape');
  }
}
console.log('JS errors:', errs);
await b.close();
