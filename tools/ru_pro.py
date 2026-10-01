#!/usr/bin/env python3
"""Общие страницы ceramicadecor.pro из сборки ru (01.10.2026).

python3 build.py ru → docs/ru, затем этот скрипт → dist_ru_pro/ для заливки
в корень ceramicadecor.pro. Разделы на .pro — российские посадочные
(kaminy/, barbekyu-kompleksy/…), их ссылки вшиты в сторис: не трогаем.
Здесь: ссылки разделов → папки посадочных, assets → hub-assets (у посадочных
свой assets/), WhatsApp → MAX, «от» на главной — по ценам посадочных."""
import os, re, json, shutil
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'docs', 'ru')
OUT = os.path.join(ROOT, 'dist_ru_pro')
LAND = os.path.expanduser('~/Projects/ceramicadecor-landings')
PAGES = {'izraztsovye-kaminy.html': 'kaminy/', 'bbq.html': 'barbekyu-kompleksy/', 'ready.html': 'pechi-kaminy/',
         'izrazcy.html': 'izraztsy/', 'catalog.html': 'kaminy/', 'privacy.html': 'policy.html', 'index.html': './'}
SLUG_OF = {'Камины': 'kaminy', 'Барбекю комплексы': 'barbekyu-kompleksy', 'Изразцы': 'izraztsy', 'Печи-камины из наличия': 'pechi-kaminy'}
MAX_SVG = open(os.path.join(LAND, 'assets', 'max.svg'), encoding='utf-8').read().split('?>')[-1].strip()
WA_RE = re.compile(r'<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5.5" fill="#25D366"/>.*?</svg>', re.S)

def mins():
    out = {}
    for slug in SLUG_OF.values():
        s = open(os.path.join(LAND, slug, 'data.js'), encoding='utf-8').read()
        d = json.loads(s[s.index('{'):s.rindex('}') + 1])
        out[slug] = min(c['p1'] for c in d['catalog'] if c.get('p1'))
    return out

def fmt(v): return '{:,}'.format(int(v)).replace(',', ' ')

def fix(html, m):
    for a, b in PAGES.items():
        html = re.sub(r'href="%s(?=[?#"])' % re.escape(a), 'href="' + b, html)
    html = html.replace(' assets/', ' hub-assets/').replace('"assets/', '"hub-assets/').replace("'assets/", "'hub-assets/").replace('(assets/', '(hub-assets/')
    html = re.sub(r'content/([a-z-]+)/img/', r'\1/img/', html)
    html = WA_RE.sub(MAX_SVG, html)
    html = html.replace('WhatsApp', 'MAX').replace('instagram.com/ceramicadecor.ru/', 'instagram.com/ceramicadecor/')
    for name, slug in SLUG_OF.items():
        html = re.sub(r'(dir__name">%s</span>.*?dir__price">от )[^<]*' % re.escape(name), lambda x: x.group(1) + fmt(m[slug]) + ' ₽', html, flags=re.S)
    # Метки из bio (utm_*) — во все переходы на посадочные: источник визита
    # живёт там, где оставляют заявку.
    html = html.replace('</body>', '<script>(function(){var q=location.search;if(!q)return;'
        'document.querySelectorAll(\'a[href^="kaminy/"],a[href^="barbekyu-kompleksy/"],a[href^="izraztsy/"],a[href^="pechi-kaminy/"]\')'
        '.forEach(function(a){var h=a.getAttribute("href");if(h.indexOf("?")<0)a.setAttribute("href",h.replace(/(#|$)/,q+"$1"));});})();</script></body>', 1)
    return html

if __name__ == '__main__':
    m = mins()
    shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)
    for p in ('index.html', 'about.html', 'contacts.html'):
        open(os.path.join(OUT, p), 'w', encoding='utf-8').write(fix(open(os.path.join(SRC, p), encoding='utf-8').read(), m))
    shutil.copytree(os.path.join(SRC, 'assets'), os.path.join(OUT, 'hub-assets'))
    shutil.copytree(os.path.join(SRC, 'js'), os.path.join(OUT, 'js'))
    sd = os.path.join(OUT, 'hub-assets', 'js', 'site-data.js')
    t = open(sd, encoding='utf-8').read()
    for a, b in PAGES.items(): t = t.replace('"' + a, '"' + b)
    t = re.sub(r'"content/([a-z-]+)/img/', r'"\1/img/', t).replace('WhatsApp', 'MAX')
    open(sd, 'w', encoding='utf-8').write(t)
    print('ok', m)
