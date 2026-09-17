/* Контент раздела «Изразцы» для ceramicadecor.kz. Правится в build.py — вёрстка и логика общие. */
window.LP = {
 "slug": "izraztsy",
 "title": "Изразцы",
 "brand": {
  "phone": "+7 705 248 86 57",
  "worktime": "Ежедневно 10:00–20:00",
  "address": "Астана · ул. Розы Баглановой, 3/1",
  "site": "https://ceramicadecor.kz",
  "host": "ceramicadecor.kz",
  "flag": "🇰🇿",
  "whatsapp": "77052488657",
  "telegram": "",
  "maxUrl": "",
  "waText": "Здравствуйте, меня интересует камин/барбекю в облицовке. Помогите подобрать",
  "endpoint": "send-lead.php",
  "beacon": "",
  "metrikaId": 0,
  "siteKey": "ceramicadecor_kz",
  "email": "info@ceramicadecor.ru",
  "dial": "7"
 },
 "currency": "₸",
 "priceLabel1": "Цена за штуку",
 "priceNote": "Цена за один изразец из этой коллекции. Итог зависит от площади и раскладки — пришлём смету и раскладку за 2–3 дня.",
 "priceFrom": true,
 "catalogStyle": "product",
 "quiz": {
  "title": "Рассчитайте комплект изразцов",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.28,
  "turnkeyFactor": 0,
  "matchBy": null,
  "fields": [
   {
    "id": "area",
    "type": "range",
    "step": 1,
    "label": "Площадь облицовки",
    "min": 1,
    "max": 30,
    "stepSize": 0.5,
    "dec": 1,
    "unit": "м²",
    "pricePerUnit": 539000,
    "hint": "Фартук на кухне — обычно 3–5 м², облицовка камина — 4–8 м², акцентная стена — от 10 м².",
    "def": 6
   },
   {
    "id": "object",
    "type": "radio",
    "step": 2,
    "label": "Что облицовываем",
    "options": [
     {
      "id": "kitchen",
      "label": "Кухонный фартук",
      "k": 1
     },
     {
      "id": "fireplace",
      "label": "Камин или печь",
      "hint": "Нужна жаростойкая румпа",
      "k": 1.15
     },
     {
      "id": "wall",
      "label": "Стена или ниша в интерьере",
      "k": 1
     },
     {
      "id": "facade",
      "label": "Фасад или уличный объект",
      "hint": "Морозостойкая серия",
      "k": 1.2
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Добавить к комплекту",
    "collapsed": true,
    "options": [
     {
      "id": "corner",
      "label": "Угловые элементы",
      "hint": "Для внешних углов и торцов",
      "add": 104000
     },
     {
      "id": "border",
      "label": "Карниз и плинтус",
      "add": 132000
     },
     {
      "id": "panno",
      "label": "Панно на заказ",
      "hint": "Индивидуальный сюжет по вашему эскизу",
      "add": 484000
     },
     {
      "id": "layout",
      "label": "Раскладка и подбор мастера",
      "add": 0
     },
     {
      "id": "delivery",
      "label": "Доставка в регион",
      "hint": "Жёсткий каркас, страховка груза",
      "add": 77000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Изразец с медальоном под сюжетную роспись (кабан)",
   "collection": "",
   "desc": "Изразцы ручной формовки: своя глина, обжиг свыше 1100 °C, роспись в собственной мастерской.",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/001.webp",
   "photos": [
    "izraztsy/img/001.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-dekorativnoj-rospisyu-kaban-kollektsii-kameya-art-77133-52089-11647/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Художественная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом 200х200 Русская Этника",
   "collection": "",
   "desc": "Арт. 77880/50555/",
   "p1": 55620,
   "p2": 0,
   "img": "izraztsy/img/002.webp",
   "photos": [
    "izraztsy/img/002.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-ptitsa-s-krasnym-fonom-20h20-kollektsii-russkaya-etnika-art-77880-50555-11841/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец в окантовке Тюльпан с росписью Прованс",
   "collection": "",
   "desc": "Арт. 77079/51259/",
   "p1": 42770,
   "p2": 0,
   "img": "izraztsy/img/003.webp",
   "photos": [
    "izraztsy/img/003.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-s-rospisyu-provans-v-kvadratnoj-okantovke-s-risunkom-tsvetka-kollektsii-tyulpan-art-77079-51259-11828/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Художественная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71060/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/004.webp",
   "photos": [
    "izraztsy/img/004.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relfom-ptitsy-v-zelenom-tsvete-art71060-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с синей сюжетной росписью (в лес по дрова)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-28",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/005.webp",
   "photos": [
    "izraztsy/img/005.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-les-kollektsii-kameya-art-77133-52136-11737-28/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с рельефными тюльпанами Тюльпан",
   "collection": "",
   "desc": "Арт. 77073/",
   "p1": 18220,
   "p2": 0,
   "img": "izraztsy/img/006.webp",
   "photos": [
    "izraztsy/img/006.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-relefnym-uzorom-v-vide-tyulpanov-kollektsii-tyulpan-art-77073-50565/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с румпой и лепным рельефом 100х100х15 мм",
   "collection": "",
   "desc": "Арт. 75097/53500/11968-1/r",
   "p1": 10440,
   "p2": 0,
   "img": "izraztsy/img/007.webp",
   "photos": [
    "izraztsy/img/007.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-lepnym-relefom-i-rumpoj-v-zelenom-tsvete-i-krasnoj-rospisyu-s-okantovkoj-kollektsii-pechvork-4779-4788-art-75097r-53500-11968-1/",
   "size": "100x100",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "100×100"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с рельефными птичками и ягодами Птички",
   "collection": "",
   "desc": "Арт. 77012/50555/",
   "p1": 37250,
   "p2": 0,
   "img": "izraztsy/img/008.webp",
   "photos": [
    "izraztsy/img/008.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefnymi-ptitsami-v-temno-sinej-rospisi-kollektsii-ptitsy-200h200-art-77012-50555-11831/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец гладкий Универсальный",
   "collection": "",
   "desc": "Арт. 70012/52089/11507-1",
   "p1": 8170,
   "p2": 0,
   "img": "izraztsy/img/009.webp",
   "photos": [
    "izraztsy/img/009.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_belyj-gladkij-izrazets-v-lazurnoj-rospisi-uzor-kollektsii-universal-art-70012-52089-11507-1/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Сувенир",
   "collection": "",
   "desc": "Арт. 78032/52200/",
   "p1": 27220,
   "p2": 0,
   "img": "izraztsy/img/010.webp",
   "photos": [
    "izraztsy/img/010.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-s-lepnoj-ptitsej-zelenogo-tsveta-kollektsii-suvenir-art-78032-52200-12006/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец в окантовке Универсал",
   "collection": "",
   "desc": "Арт. 76117/",
   "p1": 7340,
   "p2": 0,
   "img": "izraztsy/img/011.webp",
   "photos": [
    "izraztsy/img/011.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-gladkij-v-korichnevom-tsvete-s-okantovkoj-kollektsii-universal-art-76117-50485/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Современный изразец коллекции Сохо",
   "collection": "",
   "desc": "Арт. 77150/",
   "p1": 15750,
   "p2": 0,
   "img": "izraztsy/img/012.webp",
   "photos": [
    "izraztsy/img/012.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/soho/izraztsy-soho-v-hvojnom-tsvete/cd_sovremennyj-odnotonnyj-relefnyj-izrazets-soho-v-zelenom-tsvete-kollektsii-soho-art-77150-50567/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71048/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/013.webp",
   "photos": [
    "izraztsy/img/013.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-v-vide-rozetki-v-zelenom-tsvete-art71048-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (деревья на обрыве)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-30/p",
   "p1": 42940,
   "p2": 0,
   "img": "izraztsy/img/014.webp",
   "photos": [
    "izraztsy/img/014.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x30-s-sinej-rospisyu-s-syuzhetom-derevya-kollektsii-pechnye-200h300-art-77404-52089-11823-30/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (летний отдых)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-6",
   "p1": 46180,
   "p2": 0,
   "img": "izraztsy/img/015.webp",
   "photos": [
    "izraztsy/img/015.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-letnij-otdyx-20x20-kollektsii-kameya-art-77002-52089-11823-6/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (дерево на краю)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-29/p",
   "p1": 42940,
   "p2": 0,
   "img": "izraztsy/img/016.webp",
   "photos": [
    "izraztsy/img/016.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-10h30-s-sinej-gollandskoj-rospisyu-s-syuzhetom-derevo-kollektsii-pechnye-200h300-art-77404-52089-11823-29/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71057/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/017.webp",
   "photos": [
    "izraztsy/img/017.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-ptichki-v-zelenom-tsvete-art71057-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с художественной росписью (Свиристель)",
   "collection": "",
   "desc": "Арт. 77133/52150/11817-3",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/018.webp",
   "photos": [
    "izraztsy/img/018.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-sviristel-kollektsii-kameya-art-77133-52150-11817-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец цветной с лепным рельефом",
   "collection": "",
   "desc": "Арт. 71034/50555/",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/019.webp",
   "photos": [
    "izraztsy/img/019.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-zhelto-sinej-rospisi-art71034-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х20 с росписью 1/2 (дорога)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-18/p",
   "p1": 27070,
   "p2": 0,
   "img": "izraztsy/img/020.webp",
   "photos": [
    "izraztsy/img/020.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x20-s-sinej-rospisyu-s-syuzhetom-doroga-kollektsii-pechnye-200h300-art-77404-52089-11823-18/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец для фасада с лепным рельефом 300х300х20",
   "collection": "",
   "desc": "Арт. 77871/50555/",
   "p1": 171200,
   "p2": 0,
   "img": "izraztsy/img/021.webp",
   "photos": [
    "izraztsy/img/021.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-serogo-tsveta-i-sinej-rospisyu-art77871-50555-11924/",
   "size": "300x300",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "300×300"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с лепной лилией Арт Нуво в Лазурной росписи",
   "collection": "",
   "desc": "Арт. 71023/52097/",
   "p1": 23260,
   "p2": 0,
   "img": "izraztsy/img/022.webp",
   "photos": [
    "izraztsy/img/022.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnoj-liliej-v-goluboj-rospisi-kollektsii-art-nuvo-art-71023-52097-11507/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Угол гладкий с 3-х сторонним кантом Тюльпан",
   "collection": "",
   "desc": "Арт. 77064/52151/",
   "p1": 71090,
   "p2": 0,
   "img": "izraztsy/img/023.webp",
   "photos": [
    "izraztsy/img/023.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-gladkij-s-3-h-storonnim-kantom-kollektsii-tyulpan-art-77064-52151-12020/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец Прованс с роспись (На базар)",
   "collection": "",
   "desc": "Изразцы ручной формовки: своя глина, обжиг свыше 1100 °C, роспись в собственной мастерской.",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/024.webp",
   "photos": [
    "izraztsy/img/024.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-goluboj-rospisyu-s-syuzhetom-na-bazar-kollektsii-kameya-art-77133-52089-11736/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "painted",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Художественная роспись"
    ]
   ]
  },
  {
   "title": "Изразец Пэчворк с лепным рельефом",
   "collection": "",
   "desc": "Арт. 71037/50555/",
   "p1": 23220,
   "p2": 0,
   "img": "izraztsy/img/025.webp",
   "photos": [
    "izraztsy/img/025.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_relefnyj-izrazets-s-hudozhestvennoj-rospisyu-s-sinim-fonom-kollektsii-pechvork-art-71037-50555-12145/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец угловой с лепным рельефом Венская",
   "collection": "",
   "desc": "Арт. 77920/",
   "p1": 58070,
   "p2": 0,
   "img": "izraztsy/img/026.webp",
   "photos": [
    "izraztsy/img/026.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-lepnym-relefom-kollektsii-venskaya-art-77920-51261/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец цветной Пэчворк",
   "collection": "",
   "desc": "Арт. 71017/50555/",
   "p1": 23880,
   "p2": 0,
   "img": "izraztsy/img/027.webp",
   "photos": [
    "izraztsy/img/027.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-v-rospisi-zheltogo-tsvete-kollektsii-pechvork-art-71017-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71044/",
   "p1": 7850,
   "p2": 0,
   "img": "izraztsy/img/028.webp",
   "photos": [
    "izraztsy/img/028.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-uzornym-relefom-v-zelenom-tsvete-art71044-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/52089/",
   "p1": 27100,
   "p2": 0,
   "img": "izraztsy/img/029.webp",
   "photos": [
    "izraztsy/img/029.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-sinej-rospisyu-kollektsii-ptitsy-200h200-art-77392-52089-11743/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец цветной Сувенир (грифон). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71146/50555/11940-2",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/030.webp",
   "photos": [
    "izraztsy/img/030.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-s-risunkom-v-zelenom-tsvete-15h15-kollektsii-suvenir-art-71146-50555-11940-2/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Полевые Гвоздики)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-11",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/031.webp",
   "photos": [
    "izraztsy/img/031.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-risunkom-gvozdik-v-okantovke-kollektsii-kameya-art-77133-52150-11828-11/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Угол в окантовке Универсал",
   "collection": "",
   "desc": "Арт. 76150/",
   "p1": 18170,
   "p2": 0,
   "img": "izraztsy/img/032.webp",
   "photos": [
    "izraztsy/img/032.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-v-relefnoj-okantovke-korichnevogo-tsveta-kollektsii-universal-art-76150-50485/",
   "size": "150x150",
   "surface": "smooth",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Гладкая"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с рельефными птичками и ягодами Птички",
   "collection": "",
   "desc": "Арт. 71012/52090/",
   "p1": 23250,
   "p2": 0,
   "img": "izraztsy/img/033.webp",
   "photos": [
    "izraztsy/img/033.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-ptitsa-yarkogo-zheltogo-tsveta-kollektsii-ptichki-150h150-art-71012-52090-11734/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Букет Лаванды)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-3",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/034.webp",
   "photos": [
    "izraztsy/img/034.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-okantovkoj-s-risunkom-buketa-lovandy-kollektsii-kameya-art-77133-52150-11828-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец h300 мм с синей росписью (хорошая погода)",
   "collection": "",
   "desc": "Арт. 77404/52136/12119-7",
   "p1": 69350,
   "p2": 0,
   "img": "izraztsy/img/035.webp",
   "photos": [
    "izraztsy/img/035.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-gladkij-v-syuzhetnoj-gollandskoj-rospisi-sinego-tsveta-kollektsii-pechnye-200h300-art-77404-52136-12119-7/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (водопой)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-5",
   "p1": 46180,
   "p2": 0,
   "img": "izraztsy/img/036.webp",
   "photos": [
    "izraztsy/img/036.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-vodopoj-20x20-kollektsii-kameya-art-77002-52089-11823-5/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Пэчворк",
   "collection": "",
   "desc": "Арт. 71036/52089/",
   "p1": 22130,
   "p2": 0,
   "img": "izraztsy/img/037.webp",
   "photos": [
    "izraztsy/img/037.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefnym-uzorom-golubogo-tsveta-kollektsii-pechvork-art-71036-52089-11443/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Плитка изразцовая рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77641/52136/11976-1",
   "p1": 24570,
   "p2": 0,
   "img": "izraztsy/img/038.webp",
   "photos": [
    "izraztsy/img/038.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-izraztsovaya-relefnaya-azulezhu-200h200h12-mm-77641-52136-11976-1/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77457/",
   "p1": 15400,
   "p2": 0,
   "img": "izraztsy/img/039.webp",
   "photos": [
    "izraztsy/img/039.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-s-dekorativnym-relefom-vizantiya-belogo-tsveta-20x20-kollektsii-vizantiya-art-77457-52111/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец угловой гладкий 20х30 с росписью (охотники с добычей)",
   "collection": "",
   "desc": "Арт. 77405/52089/11823-9",
   "p1": 120980,
   "p2": 0,
   "img": "izraztsy/img/040.webp",
   "photos": [
    "izraztsy/img/040.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-gladkij-v-gollandskom-stile-s-sinej-rospisyu-ohotniki-s-sinej-dobychej-kollektsii-pechnye-200h300-art-77405-52089-11823-9/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Дорф",
   "collection": "",
   "desc": "Изразцы ручной формовки: своя глина, обжиг свыше 1100 °C, роспись в собственной мастерской.",
   "p1": 29950,
   "p2": 0,
   "img": "izraztsy/img/041.webp",
   "photos": [
    "izraztsy/img/041.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_krasnyj-relefnyj-izrazets-kollektsii-dorf-art-77275-50893/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с румпой Арт Нуво",
   "collection": "",
   "desc": "Арт. 71023/52092/11505/r",
   "p1": 23260,
   "p2": 0,
   "img": "izraztsy/img/042.webp",
   "photos": [
    "izraztsy/img/042.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-s-rumpoj-v-zelenoj-rospisi-s-tsvetkom-kollektsii-art-nuvo-art-71023r-52092-11505/",
   "size": "",
   "surface": "",
   "kind": "colored",
   "props": [
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 71033/52089/",
   "p1": 17540,
   "p2": 0,
   "img": "izraztsy/img/043.webp",
   "photos": [
    "izraztsy/img/043.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-krasno-sinej-rospisi-kollektsii-ptichki-150h150-art-71033-52089-11673/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец цветной Сувенир. Палитра: Коричневая",
   "collection": "",
   "desc": "Арт. 71144/50555/",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/044.webp",
   "photos": [
    "izraztsy/img/044.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-relefnyj-s-obemnym-risunkom-korichnevogo-tsveta-kollektsii-suvenir-art-71144-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец цветной Сувенир (двуглавый орел). Палитра: Коричневая",
   "collection": "",
   "desc": "Арт. 71142/50555/",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/045.webp",
   "photos": [
    "izraztsy/img/045.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-korichnevogo-tsveta-relefnyj-s-zheltoj-rospisyu-kollektsii-suvenir-art-71142-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71013/",
   "p1": 12140,
   "p2": 0,
   "img": "izraztsy/img/046.webp",
   "photos": [
    "izraztsy/img/046.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-tsvete-sapfir-kollektsii-elegans-150h150-art-71013-50571/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с медальоном и росписью в коричневой окантовке (воробьи)",
   "collection": "",
   "desc": "Арт. 77133/52136/11953-2",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/047.webp",
   "photos": [
    "izraztsy/img/047.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-provans-s-risunkom-ptits-v-okantovke-kollektsii-kameya-art-77133-52136-11953-2/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (деревенский пёс)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-26/p",
   "p1": 42940,
   "p2": 0,
   "img": "izraztsy/img/048.webp",
   "photos": [
    "izraztsy/img/048.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-10x30-s-sinej-gollandskoj-rospisyu-s-syuzhetom-sobaka-kollektsii-pechnye-200h300-art-77404-52089-11823-26/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Белый изразец с лепным рельефом Русская Этника",
   "collection": "",
   "desc": "Арт. 77881/",
   "p1": 17580,
   "p2": 0,
   "img": "izraztsy/img/049.webp",
   "photos": [
    "izraztsy/img/049.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_drevnerusskij-izrazets-s-hudozhestvennym-dekorom-v-belom-tsvete-kollektsii-russkaya-etnika-art-77881-51200/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец рельефный",
   "collection": "",
   "desc": "Арт. 71054/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/050.webp",
   "photos": [
    "izraztsy/img/050.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-tsvetok-v-zelenom-tsvete-art71054-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с румпой и лепным рельефом 100х100х15 мм",
   "collection": "",
   "desc": "Арт. 75097/53500/11968/r",
   "p1": 10440,
   "p2": 0,
   "img": "izraztsy/img/051.webp",
   "photos": [
    "izraztsy/img/051.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-s-rumpoj/cd_izrazets-s-lepnym-relefom-i-rumpoj-v-zheltom-tsvete-i-korichnevoj-rospisyu-s-okantovkoj-kollektsii-pechvork-4779-4788-art-75097r-53500-11968/",
   "size": "100x100",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "100×100"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Угол изразцовый с лепным рельефом «Ярославская майолика»",
   "collection": "",
   "desc": "Арт. 76014/52089/",
   "p1": 32140,
   "p2": 0,
   "img": "izraztsy/img/052.webp",
   "photos": [
    "izraztsy/img/052.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-dekorotivnym-relefom-v-tsvetnoj-rospisi-kollektsii-albion-art-76014-52089-11816/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразцовый угол с лепным рельефом Альбион",
   "collection": "",
   "desc": "Арт. 76014/",
   "p1": 20910,
   "p2": 0,
   "img": "izraztsy/img/053.webp",
   "photos": [
    "izraztsy/img/053.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-lepnym-relefom-zelenogo-tsveta-kollektsii-albion-art-76014-53050/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с сюжетной росписью Прованс (Птички Чечетки с гнездом)",
   "collection": "",
   "desc": "Арт. 77133/52150/11828-9",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/054.webp",
   "photos": [
    "izraztsy/img/054.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-v-stile-provans-s-risunkom-ptich-v-tsvetnoj-okantovke-kollektsii-kameya-art-77133-52150-11828-9/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом «Ярославская майолика»",
   "collection": "",
   "desc": "Арт. 78024/52089/",
   "p1": 27220,
   "p2": 0,
   "img": "izraztsy/img/055.webp",
   "photos": [
    "izraztsy/img/055.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-relefnyj-s-lepninoj-ptitsej-v-zheltoj-rospisi-kollektsii-suvenir-art-78024-52089-11816/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец рельефный с росписью",
   "collection": "",
   "desc": "Арт. 71029/50555/",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/056.webp",
   "photos": [
    "izraztsy/img/056.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-korichnevo-sinej-rospisi-art71029-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71010/50555/",
   "p1": 23930,
   "p2": 0,
   "img": "izraztsy/img/057.webp",
   "photos": [
    "izraztsy/img/057.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-tsvetok-zheltogo-tsveta-v-korichnevoj-ramke-kollektsii-elegans-150h150-art-71010-50555-11727/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с росписью Прованс (колибри)",
   "collection": "",
   "desc": "Арт. 77133/52089/11829-3",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/058.webp",
   "photos": [
    "izraztsy/img/058.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-s-rospisyu-provans-v-zelenoj-okantovke-s-risunkom-ptichki-kollektsii-kameya-art-77133-52089-11829-3/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с синей сюжетной росписью (посевной день)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-27",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/059.webp",
   "photos": [
    "izraztsy/img/059.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-den-kollektsii-kameya-art-77133-52136-11737-27/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец цветной Сувенир (жарптица). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71139/50555/",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/060.webp",
   "photos": [
    "izraztsy/img/060.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-zelenogo-tsveta-s-zheltoj-rospisyu-relefnyj-kollektsii-suvenir-art-71139-50555-11940/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71051/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/061.webp",
   "photos": [
    "izraztsy/img/061.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-uzor-v-zelenom-tsvete-art71051-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77459/52111/",
   "p1": 19880,
   "p2": 0,
   "img": "izraztsy/img/062.webp",
   "photos": [
    "izraztsy/img/062.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-v-krasnoj-okantovke-s-rospisyu-tsvetok-kollektsii-vizantiya-art-77459-52111-11725/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Плитка изразцовая рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77643/52136/11976-1",
   "p1": 24570,
   "p2": 0,
   "img": "izraztsy/img/063.webp",
   "photos": [
    "izraztsy/img/063.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-izraztsovaya-relefnaya-azulezhu-200h200h12-mm-77643-52136-11976-1/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с синей сюжетной росписью (разговор с конём)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-34",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/064.webp",
   "photos": [
    "izraztsy/img/064.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-razgovor-kollektsii-kameya-art-77133-52136-11737-34/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Плитка рельефная Азулежу 200х200х12 мм",
   "collection": "",
   "desc": "Арт. 77643/52136/",
   "p1": 24570,
   "p2": 0,
   "img": "izraztsy/img/065.webp",
   "photos": [
    "izraztsy/img/065.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/azulezhu/izraztsovaya-plitka-azulezhu-s-relefom/cd_plitka-relefnaya-azulezhu-200h200h12-mm-77643-52136-11976/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71152/",
   "p1": 7690,
   "p2": 0,
   "img": "izraztsy/img/066.webp",
   "photos": [
    "izraztsy/img/066.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-relefom-v-zelenom-tsvete-art71152-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/52046/",
   "p1": 27100,
   "p2": 0,
   "img": "izraztsy/img/067.webp",
   "photos": [
    "izraztsy/img/067.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-oranzhevoj-rospisyu-na-zelenom-fone-kollektsii-ptitsy-200h200-art-77392-52046-12139/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с медальоном под сюжетную роспись Прованс(ветряная мельница)",
   "collection": "",
   "desc": "Арт. 77133/52089/11735-7",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/068.webp",
   "photos": [
    "izraztsy/img/068.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-v-sine-goluboj-rospisi-s-syuzhetom-vetryanaya-melnitsa-kollektsii-kameya-art-77133-52089-11735-7/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Угол левый к плитке в форме треугольника Маджестик",
   "collection": "",
   "desc": "Арт. 77231/",
   "p1": 9890,
   "p2": 0,
   "img": "izraztsy/img/069.webp",
   "photos": [
    "izraztsy/img/069.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-treugolnyj-v-rospisi-zolotom-kollektsii-madzhestik-art-77231-51241/",
   "size": "",
   "surface": "",
   "kind": "plain",
   "props": [
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец цветной Пэчворк",
   "collection": "",
   "desc": "Арт. 71019/50555/",
   "p1": 23880,
   "p2": 0,
   "img": "izraztsy/img/070.webp",
   "photos": [
    "izraztsy/img/070.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-zelenogo-tsveta-kollektsii-pechvork-art-71019-50555-11934/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Дорф",
   "collection": "",
   "desc": "Изразцы ручной формовки: своя глина, обжиг свыше 1100 °C, роспись в собственной мастерской.",
   "p1": 29950,
   "p2": 0,
   "img": "izraztsy/img/071.webp",
   "photos": [
    "izraztsy/img/071.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_korichnevyj-izrazets-s-relefom-kollektsii-dorf-art-77275-50557/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец гладкий с художественной синей росписью (водная тишь)",
   "collection": "",
   "desc": "Арт. 77002/52136/12119-4",
   "p1": 46180,
   "p2": 0,
   "img": "izraztsy/img/072.webp",
   "photos": [
    "izraztsy/img/072.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_izrazets-gladkij-v-ramke-i-sinej-rospisyu-s-syuzhetom-vodnaya-tish-kollektsii-kameya-art-77002-52136-12119-4/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец рельефный 200х250 Неаполь",
   "collection": "",
   "desc": "Арт. 77853/52089/",
   "p1": 39020,
   "p2": 0,
   "img": "izraztsy/img/073.webp",
   "photos": [
    "izraztsy/img/073.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-zheltoj-ramke-kollektsii-neapol-art-77853-52089-11824/",
   "size": "",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с синей сюжетной росписью (русские гулянья)",
   "collection": "",
   "desc": "Арт. 77133/52136/11737-35",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/074.webp",
   "photos": [
    "izraztsy/img/074.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/izraztsy-russkie/cd_russkij-izrazets-s-syuzhetnoj-rospisyu-gulyaniya-kollektsii-kameya-art-77133-52136-11737-35/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Муравленный изразец 20х20 Русская Этника",
   "collection": "",
   "desc": "Арт. 77878/",
   "p1": 20980,
   "p2": 0,
   "img": "izraztsy/img/075.webp",
   "photos": [
    "izraztsy/img/075.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-relefnyj-lepnoj-syuzhetnyj-20h20-kollektsii-russkaya-etnika-art-77878-53050/",
   "size": "200x200",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с росписью Прованс (Лаванда душистая)",
   "collection": "",
   "desc": "Арт. 77133/52150/12005-7",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/076.webp",
   "photos": [
    "izraztsy/img/076.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/provans/cd_izrazets-v-stile-provans-s-risunkom-v-okantovke-lavandy-kollektsii-kameya-art-77133-52150-12005-7/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец цветной с лепным рельефом 200х200 Русская Этника",
   "collection": "",
   "desc": "Арт. 77875/50555/",
   "p1": 56140,
   "p2": 0,
   "img": "izraztsy/img/077.webp",
   "photos": [
    "izraztsy/img/077.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_raznotsvetnyj-izrazets-s-lepnym-relefom-ptitsa-i-krasnym-fonom-kollektsii-russkaya-etnika-art-77875-50555-11841/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец белый с рельефной розеткой Бристоль",
   "collection": "",
   "desc": "Арт. 77181/",
   "p1": 17340,
   "p2": 0,
   "img": "izraztsy/img/078.webp",
   "photos": [
    "izraztsy/img/078.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-belyj-s-relefnoj-rozetkoj-kollektsii-bristol-art-77181-51200/",
   "size": "180x180",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "180×180"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х30 с росписью 1/2 (водяная мельница)",
   "collection": "",
   "desc": "Арт. 77404/52089/11823-28/p",
   "p1": 42940,
   "p2": 0,
   "img": "izraztsy/img/079.webp",
   "photos": [
    "izraztsy/img/079.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-10x30-s-sinej-rospisyu-s-syuzhetom-vodyanaya-melnitsa-kollektsii-pechnye-200h300-art-77404-52089-11823-28/",
   "size": "",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Угол с рельефной косичкой Птички",
   "collection": "",
   "desc": "Арт. 76012/50555/",
   "p1": 26360,
   "p2": 0,
   "img": "izraztsy/img/080.webp",
   "photos": [
    "izraztsy/img/080.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-relefom-kosichka-zelenogo-tsveta-s-krasnoj-rospisyu-kollektsii-ptichki-150h150-art-76012-50555-12141/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Арт Нуво в росписи Фисташковая",
   "collection": "",
   "desc": "Арт. 71014/52091/",
   "p1": 22070,
   "p2": 0,
   "img": "izraztsy/img/081.webp",
   "photos": [
    "izraztsy/img/081.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-v-zelenoj-rospisi-kollektsii-art-nuvo-art-71014-52091-11505/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом «Ярославская майолика»",
   "collection": "",
   "desc": "Арт. 78037/52089/11816-1",
   "p1": 27220,
   "p2": 0,
   "img": "izraztsy/img/082.webp",
   "photos": [
    "izraztsy/img/082.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/yaroslavskie-izraztsy/cd_izrazets-s-lepnoj-ptitsej-sinego-tsveta-kollektsii-suvenir-art-78037-52089-11816-1/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец для фасада 230х230х30 мм с рельефом",
   "collection": "",
   "desc": "Арт. 78278/52144/",
   "p1": 63060,
   "p2": 0,
   "img": "izraztsy/img/083.webp",
   "photos": [
    "izraztsy/img/083.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-tsvetkom-v-zelenom-tsvete-230h230h30-mm-art78278-52144-12010/",
   "size": "",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с современным рельефом",
   "collection": "",
   "desc": "Арт. 74077/",
   "p1": 11130,
   "p2": 0,
   "img": "izraztsy/img/084.webp",
   "photos": [
    "izraztsy/img/084.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-lepnoj-geometriej-v-zelenom-tsvete-art74077-50509/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Нарцысс желтый",
   "collection": "",
   "desc": "Арт. 75088/52105/",
   "p1": 16320,
   "p2": 0,
   "img": "izraztsy/img/085.webp",
   "photos": [
    "izraztsy/img/085.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-nartsiss-art75088-52105-11795/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "100×100"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Лавр",
   "collection": "",
   "desc": "Арт. 75074/52105/",
   "p1": 15160,
   "p2": 0,
   "img": "izraztsy/img/086.webp",
   "photos": [
    "izraztsy/img/086.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-lavr-art75074-52105-11781/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "100×100"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с художественной росписью (Птицы с птенчиками)",
   "collection": "",
   "desc": "Арт. 77133/52150/11817-5",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/087.webp",
   "photos": [
    "izraztsy/img/087.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-ptitsy-v-korichnevom-tsvete-kollektsii-kameya-art-77133-52150-11817-5/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Архив",
   "collection": "",
   "desc": "Арт. 71026/",
   "p1": 8120,
   "p2": 0,
   "img": "izraztsy/img/088.webp",
   "photos": [
    "izraztsy/img/088.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-dekorativnym-uzorom-zelenogo-tsveta-art71026-53537/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77457/52111/",
   "p1": 19940,
   "p2": 0,
   "img": "izraztsy/img/089.webp",
   "photos": [
    "izraztsy/img/089.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-v-sinej-ramke-s-uzorom-rozovogo-tsveta-kollektsii-vizantiya-art-77457-52111-11725/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом Византия",
   "collection": "",
   "desc": "Арт. 77456/56000/",
   "p1": 19280,
   "p2": 0,
   "img": "izraztsy/img/090.webp",
   "photos": [
    "izraztsy/img/090.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-temno-sinej-okantovke-na-rozovom-fone-kollektsii-vizantiya-art-77456-56000-12021/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Русский изразец с рельефным Грифоном",
   "collection": "",
   "desc": "Арт. 78031/53045/",
   "p1": 55060,
   "p2": 0,
   "img": "izraztsy/img/091.webp",
   "photos": [
    "izraztsy/img/091.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-s-risunkom-grifon-kollektsii-suvenir-art-78008-53045-11284/",
   "size": "",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 77392/50496/",
   "p1": 27100,
   "p2": 0,
   "img": "izraztsy/img/092.webp",
   "photos": [
    "izraztsy/img/092.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-relefom-s-tsvetnoj-rospisyu-kollektsii-ptitsy-200h200-art-77392-50496-12132/",
   "size": "200x200",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Усадьба",
   "collection": "",
   "desc": "Арт. 71008/52136/",
   "p1": 20390,
   "p2": 0,
   "img": "izraztsy/img/093.webp",
   "photos": [
    "izraztsy/img/093.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-dekorom-tsvetok-zheltogo-tsveta-na-zelenom-fone-kollektsii-usadba-art-71008-52136-11954/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Элеганс",
   "collection": "",
   "desc": "Арт. 71010/",
   "p1": 12360,
   "p2": 0,
   "img": "izraztsy/img/094.webp",
   "photos": [
    "izraztsy/img/094.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/zelenye-izraztsy/cd_izrazets-s-hudozhestvennym-relefnym-dekorom-zelenogo-tsveta-kollektsii-elegans-150h150-art-71010-50512/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  },
  {
   "title": "Русский изразец с мифологической сценкой",
   "collection": "",
   "desc": "Арт. 78020/53045/",
   "p1": 27620,
   "p2": 0,
   "img": "izraztsy/img/095.webp",
   "photos": [
    "izraztsy/img/095.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_izrazets-v-drevnerusskom-stile-s-hudozhestvennym-uzorom-kollektsii-suvenir-art-78020-53045-11284/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец цветной Сувенир (двуглавый орел). Палитра: Зеленая",
   "collection": "",
   "desc": "Арт. 71142/50555/11940-2",
   "p1": 21400,
   "p2": 0,
   "img": "izraztsy/img/096.webp",
   "photos": [
    "izraztsy/img/096.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/drevnerusskie-izraztsy/cd_drevnerusskij-izrazets-zelenogo-tsveta-s-krasnoj-rospisyu-relefnyj-kollektsii-suvenir-art-71142-50555-11940-2/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец с художественной росписью (Птицы на ветке)",
   "collection": "",
   "desc": "Арт. 77133/52150/",
   "p1": 47000,
   "p2": 0,
   "img": "izraztsy/img/097.webp",
   "photos": [
    "izraztsy/img/097.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-syuzhetnoj-rospisyu-ptitsy-na-vetke-kollektsii-kameya-art-77133-52150-11817/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец гладкий 20х20 с росписью (заброшенный замок)",
   "collection": "",
   "desc": "Арт. 77002/52089/11823-8",
   "p1": 46180,
   "p2": 0,
   "img": "izraztsy/img/098.webp",
   "photos": [
    "izraztsy/img/098.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/gollandiya/cd_gollandskij-izrazets-s-rospisyu-v-sinem-tsvete-zabroshennyj-zamok-20x20-kollektsii-kameya-art-77002-52089-11823-8/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом Птички",
   "collection": "",
   "desc": "Арт. 71033/52090/",
   "p1": 17540,
   "p2": 0,
   "img": "izraztsy/img/099.webp",
   "photos": [
    "izraztsy/img/099.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-relefnyj-v-krasno-zheltoj-rospisi-kollektsii-ptichki-150h150-art-71033-52090-11734/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с декоративным рельефом 10х10 Астры",
   "collection": "",
   "desc": "Арт. 75075/52105/",
   "p1": 15740,
   "p2": 0,
   "img": "izraztsy/img/100.webp",
   "photos": [
    "izraztsy/img/100.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-10x10-s-rospisyu-i-lepnym-relefom-astry-art75075-52105-11782/",
   "size": "100x100",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "100×100"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с лепным рельефом 200х200 мм Русская Этника (Зеленая окантовка)",
   "collection": "",
   "desc": "Арт. 77874/52151/12020-2",
   "p1": 37720,
   "p2": 0,
   "img": "izraztsy/img/101.webp",
   "photos": [
    "izraztsy/img/101.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/tsvetnye-izraztsy/cd_izrazets-s-lepnym-relefom-tsvetok-v-zelenoj-okantovke-kollektsii-russkaya-etnika-art-77874-52151-12020-2/",
   "size": "200x200",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Изразец Охота с сюжетной росписью (медведь)",
   "collection": "",
   "desc": "Арт. 77133/52089/11660-4",
   "p1": 59100,
   "p2": 0,
   "img": "izraztsy/img/102.webp",
   "photos": [
    "izraztsy/img/102.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/raspisnye-izraztsy/cd_izrazets-s-dekorativnoj-sinej-rospisyu-medved-kollektsii-kameya-art-77133-52089-11660-4/",
   "size": "200x200",
   "surface": "smooth",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "200×200"
    ],
    [
     "Поверхность",
     "Гладкая"
    ]
   ]
  },
  {
   "title": "Изразец с насечкой Альбион",
   "collection": "",
   "desc": "Арт. 74036/",
   "p1": 7220,
   "p2": 0,
   "img": "izraztsy/img/103.webp",
   "photos": [
    "izraztsy/img/103.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/odnotonnye-izraztsy/cd_izrazets-s-lepnym-relefom-v-tsvete-baklazhan-kollektsii-albion-art-74036-53517/",
   "size": "150x150",
   "surface": "relief",
   "kind": "",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ]
   ]
  },
  {
   "title": "Угол с насечкой Альбион",
   "collection": "",
   "desc": "Арт. 76069/52123/",
   "p1": 23770,
   "p2": 0,
   "img": "izraztsy/img/104.webp",
   "photos": [
    "izraztsy/img/104.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/uglovye-izraztsy/cd_izrazets-uglovoj-s-nasechkoj-v-belom-tsvete-s-zheltoj-rospisyu-kollektsii-albion-art-76069-52123-11745/",
   "size": "150x150",
   "surface": "relief",
   "kind": "colored",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Цветная роспись"
    ]
   ]
  },
  {
   "title": "Изразец с рельефными полосами и завитками Ар Деко",
   "collection": "",
   "desc": "Арт. 71100/",
   "p1": 7300,
   "p2": 0,
   "img": "izraztsy/img/105.webp",
   "photos": [
    "izraztsy/img/105.webp"
   ],
   "url": "https://ceramicadecor.ru/izrazcy/belye-izraztsy/cd_izrazets-s-dekorativnym-relefom-polosy-v-belom-tsvete-kollektsii-ar-deko-art-71100-51201/",
   "size": "150x150",
   "surface": "relief",
   "kind": "plain",
   "props": [
    [
     "Типоразмер",
     "150×150"
    ],
    [
     "Поверхность",
     "Рельефная"
    ],
    [
     "Роспись",
     "Однотонный"
    ]
   ]
  }
 ],
 "filters": [
  {
   "key": "price",
   "label": "Бюджет",
   "field": "p1",
   "options": [
    {
     "id": "p0",
     "label": "до 21 тыс ₸",
     "min": 0,
     "max": 21400
    },
    {
     "id": "p1",
     "label": "21 тыс ₸ – 43 тыс ₸",
     "min": 21400,
     "max": 42770
    },
    {
     "id": "p2",
     "label": "от 43 тыс ₸",
     "min": 42770,
     "max": 1000000000000
    }
   ]
  },
  {
   "key": "kind",
   "label": "Тип",
   "field": "kind",
   "options": [
    {
     "id": "painted",
     "label": "Художественная роспись"
    },
    {
     "id": "colored",
     "label": "Цветная роспись"
    },
    {
     "id": "plain",
     "label": "Однотонные"
    }
   ]
  },
  {
   "key": "size",
   "label": "Типоразмер",
   "field": "size",
   "options": [
    {
     "id": "100x100",
     "label": "100x100"
    },
    {
     "id": "150x150",
     "label": "150x150"
    },
    {
     "id": "200x200",
     "label": "200x200"
    }
   ]
  },
  {
   "key": "surface",
   "label": "Поверхность",
   "field": "surface",
   "options": [
    {
     "id": "smooth",
     "label": "Гладкие"
    },
    {
     "id": "relief",
     "label": "Рельефные"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Заводская плитка",
  "goodTitle": "Изразцы ручной формовки",
  "bad": [
   "Печатный рисунок повторяется по всей раскладке, и глаз ловит это быстрее, чем кажется.",
   "Плоская поверхность без рельефа: свет по ней не играет, стена выглядит ровным фоном.",
   "Тот же артикул легко встретить у соседей: это каталожный товар, а не штучная работа.",
   "Обычная плитка не рассчитана на постоянный жар печи и камина — нужна специальная."
  ],
  "good": [
   "Каждый изразец формуется и расписывается вручную — двух одинаковых не бывает.",
   "Рельеф и объёмная глазурь дают светотень, стена перестаёт быть плоской.",
   "Коллекцию, цвет и сюжет собираем под ваш интерьер, а не под склад.",
   "Обжиг свыше 1100 °C: изразец штатно работает на камине и печи, гарантия 50 лет."
  ],
  "media": "assets/img/why/izraztsy.webp",
  "single": true,
  "mediaHi": ""
 },
 "steps": [
  {
   "title": "Проектирование и дизайн",
   "img": "01-proekt",
   "text": "Всё начинается с проекта. Мы разрабатываем архитектуру камина, подбираем материалы, создаём 3D-визуализацию для утверждения."
  },
  {
   "title": "Изготовление изразцов",
   "img": "02-izrazcy",
   "text": "Каждый элемент формуется и расписывается вручную. Проходит несколько технологических операций и двукратный обжиг при температуре свыше 1100 °C."
  },
  {
   "title": "Монтаж конструктива",
   "img": "03-konstruktiv",
   "text": "Строительство печи или установка топки и дымохода камина."
  },
  {
   "title": "Монтаж облицовки",
   "img": "04-oblicovka",
   "text": "Финальный этап — облицовка изразцами. Каждый элемент подгоняется вручную, создавая единое полотно."
  }
 ],
 "guarantees": [
  {
   "icon": "shield",
   "b": "",
   "title": "Гарантия 50 лет на облицовку",
   "text": "Обжиг при температуре свыше 1100 °C. Глазурь не выцветает и не трескается от перепадов температуры.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.8 19.2 6v6.2c0 4.2-3 7-7.2 8.9-4.2-1.9-7.2-4.7-7.2-8.9V6z\"/><path d=\"M8.8 12.1l2.3 2.3 4-4.4\"/></svg>"
  },
  {
   "icon": "doc",
   "b": "",
   "title": "Смета фиксируется в договоре",
   "text": "Цена в договоре окончательная. Дополнительные работы — только по вашему письменному согласию.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4.6\" y=\"2.8\" width=\"14.8\" height=\"18.4\" rx=\"1.4\"/><path d=\"M8.4 8h7.2M8.4 12h7.2M8.4 16h4.2\"/></svg>"
  },
  {
   "icon": "cube",
   "b": "",
   "title": "3D-проект до оплаты",
   "text": "Бесплатный 3D-проект за 2–3 дня. Покажем, как камин или комплекс впишется в ваш интерьер, до оплаты.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.6 20.5 7v10L12 21.4 3.5 17V7z\"/><path d=\"M3.5 7 12 11.5 20.5 7M12 11.5V21.4\"/></svg>"
  },
  {
   "icon": "truck",
   "b": "",
   "title": "Доставка и монтаж по Казахстану",
   "text": "Монтаж выполняет наша команда. Керамику везём в любой город Казахстана в жёстком каркасе, груз застрахован.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Сколько стоит изразец?",
   "a": "От 7 830 ₸ за штуку за однотонную глазурь до 59 100 ₸ за изразец с ручной росписью. Итог зависит от типоразмера и декора. В калькуляторе выше можно прикинуть комплект под свою площадь."
  },
  {
   "q": "Сколько изразцов нужно на квадратный метр?",
   "a": "Зависит от типоразмера: 150×150 — около 44 штук, 200×200 — 25 штук, 200×250 — 20 штук, 100×100 — около 100. Точное количество считаем по раскладке с учётом углов и подрезки — раскладку делаем бесплатно."
  },
  {
   "q": "Чем изразец отличается от плитки?",
   "a": "Изразец — это керамика с румпой, коробчатым выступом на тыльной стороне. Румпа заполняется раствором и работает как теплоаккумулятор, поэтому изразцом облицовывают печи и камины. Обычная плитка плоская и от перегрева трескается."
  },
  {
   "q": "Можно ли класть изразцы на кухонный фартук?",
   "a": "Да, это один из самых частых заказов. Для фартука подходит любая коллекция, включая роспись: глазурь моется обычным средством, жир и копоть в неё не въедаются."
  },
  {
   "q": "Как долго изготавливают комплект?",
   "a": "2–3 месяца. Формовка, сушка, первый обжиг, глазурь или роспись, второй обжиг — цикл ручной и его нельзя сжать без потери качества. Небольшие комплекты из складских коллекций отгружаем быстрее."
  },
  {
   "q": "Вы кладёте изразцы или только продаёте?",
   "a": "И то, и другое. Монтируем сами по всей Казахстану. Если у вас свой мастер — отгрузим комплект с раскладкой и инструкцией и проконсультируем его по телефону. Плитку такой цены лучше не отдавать случайной бригаде — попросите нас проверить мастера."
  },
  {
   "q": "Что если что-то разобьётся при монтаже?",
   "a": "Мы всегда закладываем запас в комплект. Если элемента не хватит, доизготовим: формы и рецептура глазури хранятся, партия повторяется без расхождения по цвету."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да, по всей Казахстану. Упаковываем в жёсткий каркас, груз страхуется. Стоимость доставки зависит от объёма и города — назовём при расчёте."
  }
 ],
 "gallery": [
  "barbekyu-kompleksy/img/16-3.webp",
  "kaminy/img/03-5.webp",
  "kaminy/img/16-5.webp",
  "kaminy/img/19-2.webp",
  "barbekyu-kompleksy/img/10-5.webp",
  "kaminy/img/12-6.webp",
  "barbekyu-kompleksy/img/07.webp",
  "barbekyu-kompleksy/img/13-2.webp",
  "pechi-kaminy/img/06.webp",
  "pechi-kaminy/img/05.webp",
  "pechi-kaminy/img/04.webp",
  "pechi-kaminy/img/03.webp"
 ]
};
