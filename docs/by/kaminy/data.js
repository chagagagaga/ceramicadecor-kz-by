/* Контент раздела «Камины» для ceramicadecor.by. Правится в build.py — вёрстка и логика общие. */
window.LP = {
 "slug": "kaminy",
 "title": "Камины",
 "brand": {
  "phone": "+375 33 358 77 33",
  "worktime": "Ежедневно 10:00–20:00",
  "address": "Минске",
  "site": "https://ceramicadecor.by",
  "host": "ceramicadecor.by",
  "flag": "🇧🇾",
  "whatsapp": "375333587733",
  "telegram": "",
  "maxUrl": "",
  "waText": "Здравствуйте, меня интересует камин/барбекю в облицовке. Помогите подобрать",
  "endpoint": "send-lead.php",
  "beacon": "",
  "metrikaId": 0,
  "siteKey": "ceramicadecor_by",
  "email": "info@ceramicadecor.ru",
  "dial": "375"
 },
 "currency": "BYN",
 "priceLabel1": "Облицовка",
 "priceNote": "Цена ориентировочная: итоговая зависит от размеров проёма, топки и объёма работ. Смету считаем бесплатно за 2–3 дня.",
 "priceFrom": true,
 "catalogStyle": "",
 "quiz": {
  "title": "Рассчитайте свой камин",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.22,
  "turnkeyFactor": 1.95,
  "matchBy": {
   "field": "collection",
   "key": "collection"
  },
  "fields": [
   {
    "id": "scope",
    "type": "radio",
    "step": 1,
    "label": "С чего начинаем",
    "row": true,
    "options": [
     {
      "id": "full",
      "label": "Нужен камин с нуля",
      "hint": "Топка, дымоход, облицовка, монтаж",
      "k": 1
     },
     {
      "id": "facing",
      "label": "Уже есть камин, нужна облицовка",
      "hint": "Облицуем ваш камин или топку",
      "k": 1,
      "noTurnkey": true
     }
    ]
   },
   {
    "id": "format",
    "type": "radio",
    "step": 2,
    "label": "Формат камина",
    "options": [
     {
      "id": "stove",
      "label": "Печь-камин",
      "hint": "Самый бюджетный вариант: готовая модель, 16 900 BYN",
      "fixed": 16900,
      "img": "pechi-kaminy/img/b/01.webp",
      "href": "ready.html"
     },
     {
      "id": "shelf",
      "label": "Камин до полки",
      "hint": "Средний по цене: облицовка до каминной полки",
      "k": 0.85,
      "card": 15,
      "def": true
     },
     {
      "id": "ceiling",
      "label": "Камин до потолка",
      "hint": "Самый дорогой и эффектный: облицовка от пола до потолка",
      "k": 1.2,
      "card": 6
     }
    ]
   },
   {
    "id": "width",
    "type": "range",
    "step": 3,
    "label": "Ширина портала",
    "min": 0.9,
    "max": 2.6,
    "stepSize": 0.1,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 8300,
    "hint": "Ширина готовой облицовки по фасаду. Стандартный пристенный камин — около 1,5 метра.",
    "def": 1.5
   },
   {
    "id": "type",
    "type": "radio",
    "step": 4,
    "label": "Тип камина",
    "row": true,
    "options": [
     {
      "id": "wood",
      "label": "Дровяной",
      "hint": "Нужен дымоход",
      "k": 1
     },
     {
      "id": "electric",
      "label": "Электрический",
      "hint": "Без дымохода",
      "k": 0.9
     },
     {
      "id": "bio",
      "label": "Биокамин",
      "hint": "Без дымохода",
      "k": 0.85
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Дополнить камин",
    "collapsed": true,
    "hidePrices": true,
    "options": [
     {
      "id": "wood",
      "label": "Дровница в облицовке",
      "add": 2300
     },
     {
      "id": "panno",
      "label": "Изразцовое панно",
      "hint": "Ручная роспись по вашему сюжету",
      "add": 4600
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Камин Альбион",
   "collection": "Альбион",
   "desc": "Классический белый камин Альбион с топкой LISEO CASTIRON. Изразцовая облицовка ручной работы в белоснежной цветовой гамме создаёт элегантный и утончённый образ.",
   "spec": {
    "weight": 218,
    "width": 1325,
    "height": 2535,
    "depth": 700
   },
   "p1": 23700,
   "p2": 46200,
   "img": "kaminy/img/01.webp",
   "photos": [
    "kaminy/img/01.webp",
    "kaminy/img/01-2.webp",
    "kaminy/img/01-3.webp",
    "kaminy/img/01-4.webp",
    "kaminy/img/01-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_klassicheskij-belyj-kamin-albion-s-topkoj-liseo-castiron/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "full": "Классический белый камин Альбион с топкой LISEO CASTIRON. Изразцовая облицовка ручной работы в белоснежной цветовой гамме создаёт элегантный и утончённый образ. Камин гармонично вписывается в классические и неоклассические интерьеры."
  },
  {
   "title": "Камин Тюльпан",
   "collection": "Тюльпан",
   "desc": "Камин в облицовке Тюльпан с Г-образной топкой Экокамин Альфа 1000 RB. Рельефные изразцы с цветочным орнаментом в зелёных тонах. Г-образная топка позволяет наслаждаться видом огня с двух сторон.",
   "spec": {
    "weight": 243,
    "width": 1377,
    "height": 2499,
    "depth": 789
   },
   "p1": 35500,
   "p2": 65100,
   "img": "kaminy/img/03.webp",
   "photos": [
    "kaminy/img/03.webp",
    "kaminy/img/03-2.webp",
    "kaminy/img/03-3.webp",
    "kaminy/img/03-4.webp",
    "kaminy/img/03-5.webp",
    "kaminy/img/03-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-tyulpan-s-g-obraznoj-topkoj-ekokamin-alfa-1000-rb/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Тюльпан, Арктика",
   "collection": "Тюльпан",
   "desc": "Комплект каминной облицовки Тюльпан в цвете Арктика. Белоснежные изразцы с рельефными тюльпанами создают нежный и воздушный образ камина. Идеально подходит для светлых интерьеров.",
   "p1": 25400,
   "p2": 38500,
   "img": "kaminy/img/04.webp",
   "photos": [
    "kaminy/img/04.webp",
    "kaminy/img/04-2.webp",
    "kaminy/img/04-3.webp",
    "kaminy/img/04-4.webp",
    "kaminy/img/04-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_komplekt-kaminnoj-oblitsovki-tyulpan-tsvet-arktika/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Версаль",
   "collection": "Версаль",
   "desc": "Изразцовый камин Версаль в цвете Арктическая лагуна. Облицовка с детализированным орнаментом в насыщенных лазурных тонах. Вдохновлен интерьерами французских дворцов. Каждый изразец изготовлен вручную.",
   "p1": 32500,
   "p2": 94700,
   "img": "kaminy/img/05.webp",
   "photos": [
    "kaminy/img/05.webp",
    "kaminy/img/05-2.webp",
    "kaminy/img/05-3.webp",
    "kaminy/img/05-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-versal-v-sinem-tsvete/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Бристоль",
   "collection": "Бристоль",
   "desc": "Камин с П-образной топкой в облицовке «Бристоль» в цвете Чёрная ночь. Тёмные изразцы с глубокой глазурью создают драматичный и стильный образ. П-образная топка обеспечивает обзор огня с трёх сторон.",
   "spec": {
    "weight": 236,
    "width": 1260,
    "height": 2745,
    "depth": 800
   },
   "p1": 31400,
   "p2": 76900,
   "img": "kaminy/img/06.webp",
   "photos": [
    "kaminy/img/06.webp",
    "kaminy/img/06-2.webp",
    "kaminy/img/06-3.webp",
    "kaminy/img/06-4.webp",
    "kaminy/img/06-5.webp",
    "kaminy/img/06-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-s-p-obraznoj-topkoj-v-oblitsovke-bristol-v-tsvete-chernaya-noch/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Дорф",
   "collection": "Дорф",
   "desc": "Декоративный камин с очагом Airtone Andalle 1000, облицован изразцами коллекции Дорф. Специально разработанный проект для ресторанного интерьера. Масштабная облицовка от пола до потолка создаёт величественный акцент.",
   "spec": {
    "weight": 432,
    "width": 1680,
    "height": 3691,
    "depth": 740
   },
   "p1": 58000,
   "p2": 96400,
   "img": "kaminy/img/07.webp",
   "photos": [
    "kaminy/img/07.webp",
    "kaminy/img/07-2.webp",
    "kaminy/img/07-3.webp",
    "kaminy/img/07-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_dekorativnyj-kamin-s-ochagom-airtone-andalle-1000-oblitsovan-izraztsami-kollektsii-dorf-spetsialno-dlya-restorana-5013/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Арт Нуво",
   "collection": "Арт Нуво",
   "desc": "Комплект каминной облицовки Арт Нуво в фисташковой декоративной палитре. Изящные линии модерна в сочетании с нежными зелёными тонами. Вдохновлён стилем ар-нуво начала XX века.",
   "p1": 23700,
   "p2": 52100,
   "img": "kaminy/img/09.webp",
   "photos": [
    "kaminy/img/09.webp",
    "kaminy/img/09-2.webp",
    "kaminy/img/09-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-art-nuvo-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Птицы",
   "collection": "Птицы",
   "desc": "Изразцовый камин с топкой Астов П2С в облицовке Птицы. Ручная роспись с изображением птиц в природном окружении. Каждый изразец — это маленькое произведение искусства.",
   "p1": 44400,
   "p2": 82800,
   "img": "kaminy/img/10.webp",
   "photos": [
    "kaminy/img/10.webp",
    "kaminy/img/10-2.webp",
    "kaminy/img/10-3.webp",
    "kaminy/img/10-4.webp",
    "kaminy/img/10-5.webp",
    "kaminy/img/10-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-astov-p2s-v-oblitsovke-ptitsy/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Византия",
   "collection": "Византия",
   "desc": "Изразцовый камин Византия в росписи Олива. Богатый орнамент, вдохновлённый византийским искусством, выполнен в тёплых оливковых тонах. Сложная многослойная роспись с золотистыми акцентами.",
   "p1": 40200,
   "p2": 79900,
   "img": "kaminy/img/11.webp",
   "photos": [
    "kaminy/img/11.webp",
    "kaminy/img/11-2.webp",
    "kaminy/img/11-3.webp",
    "kaminy/img/11-4.webp",
    "kaminy/img/11-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-vizantiya-v-rospisi-oliva/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Луна",
   "collection": "Луна",
   "desc": "Камин в классическом стиле из коллекции Луна с топкой Spartherm Linear 4S Arte. Элегантные изразцы с лунным орнаментом в сочетании с немецкой топкой. Утончённый дизайн для изысканных интерьеров.",
   "spec": {
    "weight": 194,
    "width": 1122,
    "height": 2657,
    "depth": 864
   },
   "p1": 29600,
   "p2": 76900,
   "img": "kaminy/img/12.webp",
   "photos": [
    "kaminy/img/12.webp",
    "kaminy/img/12-2.webp",
    "kaminy/img/12-3.webp",
    "kaminy/img/12-4.webp",
    "kaminy/img/12-5.webp",
    "kaminy/img/12-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-klassicheskom-stile-iz-kollektsii-luna-i-topkoj-spartherm-linear-4s-arte-1672/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Универсал, угловой",
   "collection": "Универсал",
   "desc": "Облицовка углового камина изразцами Универсал. Топка с двумя стёклами обеспечивает широкий обзор огня. Минималистичные изразцы подчеркнуты глазурью благородного зелёного цвета с разнотоном.",
   "spec": {
    "weight": 108,
    "width": 1348,
    "height": 2022,
    "depth": 751
   },
   "p1": 11800,
   "p2": 53300,
   "img": "kaminy/img/14.webp",
   "photos": [
    "kaminy/img/14.webp",
    "kaminy/img/14-2.webp",
    "kaminy/img/14-3.webp",
    "kaminy/img/14-4.webp",
    "kaminy/img/14-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-uglovogo-kamina-izraztsami-universal/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Браво",
   "collection": "Браво",
   "desc": "Камин в облицовке изразцами коллекции Браво с росписью. Яркий и выразительный дизайн с авторской росписью. Каждый камин этой коллекции уникален благодаря ручной работе мастеров.",
   "spec": {
    "weight": 165,
    "width": 1310,
    "height": 1510,
    "depth": 760
   },
   "p1": 27200,
   "p2": 58000,
   "img": "kaminy/img/16.webp",
   "photos": [
    "kaminy/img/16.webp",
    "kaminy/img/16-2.webp",
    "kaminy/img/16-3.webp",
    "kaminy/img/16-4.webp",
    "kaminy/img/16-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kamin-v-oblitsovke-izraztsami-kollektsii-bravo-s-rospisyu/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Сохо",
   "collection": "Сохо",
   "desc": "Облицовка камина до полки с дровниками по бокам в коллекции Сохо. Современный и функциональный дизайн: облицовка доходит до каминной полки, а по бокам расположены дровники. Стильное решение для современных интерьеров.",
   "spec": {
    "weight": 309,
    "width": 2620,
    "height": 1820,
    "depth": 760
   },
   "p1": 50300,
   "p2": 107700,
   "img": "kaminy/img/17.webp",
   "photos": [
    "kaminy/img/17.webp",
    "kaminy/img/17-2.webp",
    "kaminy/img/17-3.webp",
    "kaminy/img/17-4.webp",
    "kaminy/img/17-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_oblitsovka-kamina-do-polki-s-drovnikami-po-bokam-v-kollektsii-soho-6749/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Усадьба",
   "collection": "Усадьба",
   "desc": "Изразцовый камин Усадьба с призматической угловой топкой. Рельефные изразцы ручной формовки в традиционном стиле русской усадьбы. Призматическая топка и практичные полки создают объемную архитектурную композицию камина.",
   "spec": {
    "weight": 172,
    "width": 1390,
    "height": 2370,
    "depth": 336
   },
   "p1": 30200,
   "p2": 53800,
   "img": "kaminy/img/18.webp",
   "photos": [
    "kaminy/img/18.webp",
    "kaminy/img/18-3.webp",
    "kaminy/img/18-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-usadba-s-podiumami-i-prizmatichnoj-uglovoj-topkoj/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Птички",
   "collection": "Птички",
   "desc": "Каминная облицовка Птички в декоративной палитре Лесная. Изразцы с миниатюрными птичками среди растительного орнамента в зелёных лесных тонах. Создаёт атмосферу природной гармонии.",
   "p1": 26000,
   "p2": 53800,
   "img": "kaminy/img/19.webp",
   "photos": [
    "kaminy/img/19.webp",
    "kaminy/img/19-2.webp",
    "kaminy/img/19-3.webp",
    "kaminy/img/19-4.webp",
    "kaminy/img/19-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_kaminnaya-oblitsovka-ptichki-dekorativnaya-palitra-lesnaya/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Элеганс",
   "collection": "Элеганс",
   "desc": "Комплект каминной облицовки Элеганс в цвете Лесной Туман. Изысканные изразцы с мягкими приглушёнными тонами, напоминающими утренний туман в лесу. Идеальный выбор для создания спокойной и расслабляющей атмосферы.",
   "p1": 30200,
   "p2": 66900,
   "img": "kaminy/img/20.webp",
   "photos": [
    "kaminy/img/20.webp",
    "kaminy/img/20-2.webp",
    "kaminy/img/20-3.webp",
    "kaminy/img/20-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/izraztsovye-kaminy-v-interere/cd_izraztsovyj-kamin-elegans-v-glazuri-lesnoj-tuman/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Минималист",
   "collection": "Минималист",
   "desc": "Каминная облицовка в стиле минимализм. Чистые линии и лаконичные формы без лишнего декора. Идеальный выбор для современных интерьеров, где ценится сдержанность и функциональность.",
   "p1": 29600,
   "p2": 42600,
   "img": "kaminy/img/21.webp",
   "photos": [
    "kaminy/img/21.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Венская",
   "collection": "Венская",
   "desc": "Электрокамин белого цвета в изразцах коллекции Венская. Элегантная облицовка в венском стиле для электрокамина. Белоснежные изразцы с утончённым рельефом создают образ без необходимости дымохода.",
   "p1": 26000,
   "p2": 46200,
   "img": "kaminy/img/22.webp",
   "photos": [
    "kaminy/img/22.webp",
    "kaminy/img/22-2.webp",
    "kaminy/img/22-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/portaly-dlya-elektrokamina-v-interere/cd_elektrokamin-belogo-tsveta-v-izraztsah-kollektsii-venskaya-99999/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Биокамин Альбион",
   "collection": "Альбион",
   "desc": "Облицовка биокамина изразцами Альбион в майоликовой глазури. Проект, сочетающий современный биокамин с традиционной изразцовой облицовкой. Майоликовая глазурь придаёт поверхности особый блеск и глубину цвета.",
   "p1": 23700,
   "p2": 46700,
   "img": "kaminy/img/kz-kamin-albion-bio-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-albion-bio-1.webp",
    "kaminy/img/kz-kamin-albion-bio-2.webp",
    "kaminy/img/kz-kamin-albion-bio-3.webp",
    "kaminy/img/kz-kamin-albion-bio-4.webp",
    "kaminy/img/kz-kamin-albion-bio-5.webp",
    "kaminy/img/kz-kamin-albion-bio-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Дорф Муравленый",
   "collection": "Дорф",
   "desc": "Комплект каминной облицовки Дорф в цвете Муравленый. Изразцы с характерной зеленоватой «муравленой» глазурью — традиционной для русского изразцового искусства. Каждый элемент выполнен вручную.",
   "p1": 40200,
   "p2": 81100,
   "img": "kaminy/img/kz-kamin-dorf-murav-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-dorf-murav-1.webp",
    "kaminy/img/kz-kamin-dorf-murav-2.webp",
    "kaminy/img/kz-kamin-dorf-murav-3.webp",
    "kaminy/img/kz-kamin-dorf-murav-4.webp",
    "kaminy/img/kz-kamin-dorf-murav-5.webp",
    "kaminy/img/kz-kamin-dorf-murav-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Роллерс",
   "collection": "Роллерс",
   "desc": "Камин с топкой Астов П2С 8457 в облицовке изразцами коллекции Роллерс. Современный дизайн с геометрическим рельефом в светлых тонах. Идеальное сочетание классического мастерства и современной эстетики.",
   "p1": 47300,
   "p2": 96400,
   "img": "kaminy/img/kz-kamin-rollers-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-rollers-1.webp",
    "kaminy/img/kz-kamin-rollers-2.webp",
    "kaminy/img/kz-kamin-rollers-3.webp",
    "kaminy/img/kz-kamin-rollers-4.webp",
    "kaminy/img/kz-kamin-rollers-5.webp",
    "kaminy/img/kz-kamin-rollers-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Каминный портал Универсал",
   "collection": "Универсал",
   "desc": "Каминный портал Универсал в цвете Арктика. Компактный и элегантный портал, подходящий для различных типов топок. Белоснежная глазурь и лаконичный дизайн делают его универсальным решением.",
   "spec": {
    "width": 1658,
    "height": 1876,
    "depth": 295,
    "weight": 117
   },
   "p1": 11800,
   "p2": 53300,
   "img": "kaminy/img/kz-kamin-universal-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-universal-1.webp",
    "kaminy/img/kz-kamin-universal-2.webp",
    "kaminy/img/kz-kamin-universal-3.webp",
    "kaminy/img/kz-kamin-universal-4.webp",
    "kaminy/img/kz-kamin-universal-5.webp",
    "kaminy/img/kz-kamin-universal-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Камея",
   "collection": "Камея",
   "desc": "Изразцовый камин в коллекции Камея с художественной росписью ручной работы. Классический голландский стиль с характерными сине-белыми медальонами. Широкая полочка и продуманный дровник добавляют функциональности и уюта.",
   "p1": 19500,
   "p2": 46200,
   "img": "kaminy/img/kz-kamin-provans-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-provans-1.webp",
    "kaminy/img/kz-kamin-provans-2.webp",
    "kaminy/img/kz-kamin-provans-3.webp",
    "kaminy/img/kz-kamin-provans-4.webp",
    "kaminy/img/kz-kamin-provans-5.webp",
    "kaminy/img/kz-kamin-provans-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
  },
  {
   "title": "Камин Венская с топкой Brunner",
   "collection": "Венская",
   "desc": "Классический камин в облицовке коллекции Венская с топкой Brunner. Проект: изразцовая облицовка с росписью ручной работы в сочетании с одной из лучших немецких топок. Полностью индивидуальный дизайн по проекту заказчика.",
   "spec": {
    "width": 1618,
    "height": 3566,
    "depth": 708
   },
   "p1": 68000,
   "p2": 115400,
   "img": "kaminy/img/kz-kamin-dorf-brunner-1.webp",
   "photos": [
    "kaminy/img/kz-kamin-dorf-brunner-1.webp",
    "kaminy/img/kz-kamin-dorf-brunner-2.webp",
    "kaminy/img/kz-kamin-dorf-brunner-3.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": []
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
     "label": "до 26 тыс BYN",
     "min": 0,
     "max": 26000
    },
    {
     "id": "p1",
     "label": "26 тыс BYN – 36 тыс BYN",
     "min": 26000,
     "max": 35500
    },
    {
     "id": "p2",
     "label": "от 36 тыс BYN",
     "min": 35500,
     "max": 1000000000000
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Готовая облицовка из магазина",
  "goodTitle": "Изразцы Ceramica Decor",
  "bad": [
   "Мрамор и гипс почти не держат тепло: камин греет, пока горит, а дальше остывает вместе с комнатой.",
   "Типовой портал редко совпадает с проёмом — чаще подгоняют стену под камин, а не наоборот.",
   "Одинаковые облицовки стоят в тысячах квартир: выделиться таким камином не выйдет.",
   "Гипс легко скалывается, и след от скола обычно заметен даже после реставрации."
  ],
  "good": [
   "Изразец — это глиняный аккумулятор: печь отдаёт тепло часами после протопки.",
   "Облицовка делается под ваш проём и вашу топку, а не наоборот.",
   "Коллекция, цвет глазури и сюжет росписи подбираются под интерьер.",
   "Керамика с обжигом свыше 1100 °C, гарантия 50 лет, отдельный изразец заменяется точечно."
  ],
  "media": "kaminy/img/20.webp",
  "single": false,
  "mediaHi": "assets/img/why/kaminy.webp 1596w"
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
   "title": "Доставка и монтаж по Беларуси",
   "text": "Монтаж выполняет наша команда. Керамику везём в любой город Беларуси в жёстком каркасе, груз застрахован.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Сколько стоит изразцовый камин?",
   "a": "Облицовка начинается от 11 800 BYN, комплект под ключ с топкой и монтажом — от 38 500 BYN. Разброс большой, потому что художественная роспись почти вдвое дороже однотонной глазури. Посчитайте свою конфигурацию в калькуляторе выше."
  },
  {
   "q": "Чем изразцовый камин лучше мраморного или гипсового?",
   "a": "Теплотехникой. Изразец — это полая глиняная керамика с румпой, она накапливает тепло и отдаёт его несколько часов после того, как огонь погас. Мрамор и гипс так не умеют: они только декор. Плюс керамика не боится перегрева у топки."
  },
  {
   "q": "Топку вы поставляете или её надо покупать отдельно?",
   "a": "Можем и так, и так. Работаем с Astov, Hoxter, Spartherm — подбираем топку под размер помещения и включаем в смету. Если топка уже куплена, делаем облицовку под неё: пришлите модель, посчитаем размеры."
  },
  {
   "q": "У меня электрокамин или биокамин — облицовка подойдёт?",
   "a": "Да, и это частый запрос в квартирах, где нет дымохода. Электро и био дешевле дровяного: не нужны дымоход, разделка и противопожарные отступы. В калькуляторе выше переключите тип и увидите разницу."
  },
  {
   "q": "Сколько ждать изготовления?",
   "a": "От заявки до сдачи — 3–4 месяца. Каждый изразец формуется вручную, сушится, обжигается, расписывается и обжигается повторно. Монтаж на объекте занимает 3–7 дней."
  },
  {
   "q": "Можно поставить камин в готовый интерьер, не разрушая ремонт?",
   "a": "Обычно да. На замере инженер смотрит перекрытия, дымоход и возможность подвести воздух. Электрический и биокамин ставятся почти в любой готовый интерьер, дровяной требует дымохода и противопожарной разделки."
  },
  {
   "q": "Что с гарантией?",
   "a": "50 лет на керамику: глазурь не выцветает и не трескается. На монтажные работы — гарантия по договору. На топку действует гарантия производителя, мы официальный партнёр."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да, работаем по всей Беларуси: доставка в жёстком каркасе, монтаж выполняет наша команда. Если монтирует ваш печник — консультируем его по телефону на каждом этапе."
  }
 ],
 "gallery": [
  "kaminy/img/01.webp",
  "kaminy/img/03.webp",
  "kaminy/img/04.webp",
  "kaminy/img/05.webp",
  "kaminy/img/06.webp",
  "kaminy/img/07.webp",
  "kaminy/img/09.webp",
  "kaminy/img/10.webp",
  "kaminy/img/11.webp",
  "kaminy/img/12.webp",
  "kaminy/img/14.webp",
  "kaminy/img/16.webp",
  "kaminy/img/17.webp",
  "kaminy/img/18.webp",
  "kaminy/img/19.webp",
  "kaminy/img/20.webp",
  "kaminy/img/21.webp",
  "kaminy/img/22.webp",
  "kaminy/img/kz-kamin-albion-bio-1.webp",
  "kaminy/img/kz-kamin-dorf-murav-1.webp",
  "kaminy/img/kz-kamin-rollers-1.webp",
  "kaminy/img/kz-kamin-universal-1.webp",
  "kaminy/img/kz-kamin-provans-1.webp",
  "kaminy/img/kz-kamin-dorf-brunner-1.webp"
 ]
};
