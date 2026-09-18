# ceramicadecor.kz и ceramicadecor.by

Два единых сайта на базе РФ-посадочных: Камины · Барбекю · Изразцы · Печи-камины из наличия · О компании · Контакты.
Без MAX, Telegram и Яндекса. Готово к Meta-рекламе (пиксели: KZ 5387903231434965, BY 887024874416559; события как на старых сайтах).

## Сборка

```
python3 build.py        # → docs/kz/ и docs/by/
npm run shot            # скриншоты всех страниц + проверка на «Росси/₽/MAX/Telegram»
npm run func            # формы → send-lead.php и ЛСО (моки), пиксель, WhatsApp-попап, маска телефона
```

Превью (GitHub Pages): `https://chagagagaga.github.io/ceramicadecor-kz-by/kz/` и `/by/`.
На превью формы работают в демо-режиме — никуда не отправляют.

## Выкладка на хостинг

Загрузить содержимое `docs/kz/` в корень ceramicadecor.kz, `docs/by/` — в корень ceramicadecor.by (domain.by, файловый менеджер), с заменой файлов.

**Не удалять на сервере:** `send-lead.php` (отправка в Telegram-группу страны, в репозитории его нет — там токен бота)
и старые файлы вроде `terms.html` — на них могут вести ссылки.
`js/cd-attribution.js` в сборке тот же, что на сервере (скрипт Никиты, ЛСО); при обновлении на сервере пересборка не нужна.

## Заявки

Каждая форма шлёт два запроса, как на старых сайтах:
1. `send-lead.php` — JSON `{text, website}` (текст начинается с «🇰🇿/🇧🇾 Новая заявка с сайта …») → Telegram;
2. `window.CDAttribution.submitLead(...)` → `https://ceramicadecor.ru/feedback/external_lead` (ЛСО, site_key по домену).

## Что где

- `build.py` — сборщик (страна: телефоны, валюта и курс, шоурум, пиксель). `COUNTRIES`, `STOCK`, `SITE_NAV` — вверху файла.
- `src/assets/js/engine.js`, `src/assets/css/landing.css` — движок и стили (общие для двух стран).
- `src/<slug>/img/` — фото с превью (`s/`, `m/`, `g/`, `b/`), `tools/make_thumbs.py` их пересобирает.
- `kz_catalog.json`, `by_catalog.json` — цены со старых сайтов; `kz_descriptions.json` — описания.
- `build_ru_reference.py` — копия РФ-сборщика для сверки, в сборке не участвует.
