#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ФОТО ПОЗИЦИЙ, КОТОРЫХ НЕТ В РОССИЙСКОМ КАТАЛОГЕ
--------------------------------------------------------------------------
В kz-каталоге 41 объект, в российском — те же объекты под другими именами,
но не все: девять позиций пары не нашли. Для них берём фото со старого
сайта ceramicadecor.kz (1200 px — меньше наших 1600, но это их
собственные кадры) и кладём в src/<раздел>/img/kz-<id>-N.webp.
Дальше tools/make_thumbs.py делает им уровни превью как всем.

Запуск:  python3 tools/fetch_country_photos.py
"""
import io, json, os, subprocess, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)
import build as b

SLUG_OF = {'kaminy': 'kaminy', 'bbq': 'barbekyu-kompleksy'}


def main():
    b.set_country('kz')
    kz = json.load(io.open(os.path.join(ROOT, 'kz_catalog.json'), encoding='utf-8'))
    cat = json.load(io.open(os.path.join(ROOT, 'catalog.json'), encoding='utf-8'))
    for slug, kcat in b.KZ_CAT.items():
        # какие kz-позиции получают пару — повторяем логику assign_kz
        items = cat[slug]['items']; cards = []
        skip = b.SKIP_ITEMS.get(slug, set())
        for pos, it in enumerate(items, 1):
            if pos in skip: continue
            raw = b.clean_text(it.get('title'), '')
            title = b.normalize_brand(b.card_title(slug, pos, raw, it.get('collection', '')))
            cards.append({'title': title, '_raw': raw, '_srcdesc': b.clean_text(it.get('desc'), ''), 'desc': ''})
        b.assign_kz(slug, cards)
        have = {c.get('_kz') for c in cards}
        for ki, x in enumerate(kz):
            if x['cat'] != kcat or ki in have:
                continue
            n = 0
            for i, img in enumerate(x['images'][:6], 1):
                dst = os.path.join(ROOT, 'src', slug, 'img', 'kz-%s-%d.webp' % (x['id'], i))
                if os.path.exists(dst):
                    n += 1; continue
                tmp = '/tmp/kzphoto.jpg'
                r = subprocess.run(['curl', '-s', '-o', tmp, '-w', '%{http_code}', '--max-time', '40',
                                    'https://ceramicadecor.kz/images/' + img], capture_output=True, text=True).stdout
                if r != '200':
                    continue
                try:
                    im = Image.open(tmp).convert('RGB'); im.thumbnail((1600, 1600), Image.LANCZOS)
                    im.save(dst, 'WEBP', quality=86, method=6); n += 1
                except Exception as e:
                    print('  !', img, e)
            print('  %-20s %-48s кадров %d' % (slug, x['name'][:46], n))


if __name__ == '__main__':
    main()
