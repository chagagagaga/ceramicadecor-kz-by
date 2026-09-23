/* Контент раздела «Типовые печи-камины» для ceramicadecor.by. Правится в build.py — вёрстка и логика общие. */
window.LP = {
 "slug": "pechi-kaminy",
 "title": "Типовые печи-камины",
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
  "turnstileKey": "0x4AAAAAAFBDbpGRIVVN3OED",
  "dial": "375"
 },
 "currency": "BYN",
 "priceLabel1": "Цена",
 "priceNote": "Цена за комплект со склада: облицовка и топка. Дымоход, монтаж и доставка считаются отдельно — в калькуляторе выше.",
 "priceFrom": false,
 "catalogStyle": "",
 "quiz": {
  "title": "Соберите свою печь-камин",
  "sub": "Готовая модель — цена сразу, без замера и проектирования.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.1,
  "turnkeyFactor": 0,
  "matchBy": null,
  "fields": [
   {
    "id": "model",
    "type": "radio",
    "step": 1,
    "label": "Модель",
    "options": [
     {
      "id": "dorf",
      "label": "Дорф",
      "hint": "Классика с рельефом, 16 900 BYN",
      "add": 16900,
      "card": 0
     },
     {
      "id": "ritm",
      "label": "Ритм",
      "hint": "Современный минимализм, 17 500 BYN",
      "add": 17500,
      "card": 3
     },
     {
      "id": "flora",
      "label": "Флора",
      "hint": "Большое стекло 4:3, до 200 м³, 24 300 BYN",
      "add": 24300,
      "card": 6
     }
    ]
   },
   {
    "id": "color",
    "type": "radio",
    "step": 2,
    "label": "Цвет глазури",
    "options": [
     {
      "id": "antik",
      "label": "Белый антик",
      "k": 1,
      "cards": {
       "dorf": 0,
       "ritm": 3,
       "flora": 6
      }
     },
     {
      "id": "choco",
      "label": "Горький шоколад",
      "k": 1,
      "card": 1,
      "showIf": {
       "model": "dorf"
      }
     },
     {
      "id": "murav",
      "label": "Муравленый",
      "hint": "Глубокий зелёный",
      "k": 1.04,
      "card": 2,
      "showIf": {
       "model": "dorf"
      }
     },
     {
      "id": "burg",
      "label": "Вишнёвый",
      "k": 1,
      "card": 4,
      "showIf": {
       "model": "ritm"
      }
     },
     {
      "id": "lazur",
      "label": "Лазурный",
      "k": 1,
      "card": 5,
      "showIf": {
       "model": "ritm"
      }
     },
     {
      "id": "oliva",
      "label": "Олива",
      "k": 1,
      "card": 7,
      "showIf": {
       "model": "flora"
      }
     },
     {
      "id": "sapfir",
      "label": "Сапфир",
      "hint": "Глубокий синий",
      "k": 1,
      "card": 8,
      "showIf": {
       "model": "flora"
      }
     },
     {
      "id": "palette",
      "label": "Другой оттенок",
      "hint": "Любой из 150 цветов палитры, +1 900 BYN",
      "add": 1900
     }
    ]
   },
   {
    "id": "extra",
    "type": "checks",
    "label": "Доставка и монтаж под ключ",
    "collapsed": true,
    "hidePrices": true,
    "options": [
     {
      "id": "delivery",
      "label": "Доставка до дверей",
      "add": 500
     },
     {
      "id": "mount",
      "label": "Установка печи-камина",
      "add": 1300
     },
     {
      "id": "chimney",
      "label": "Монтаж дымохода",
      "hint": "Верхнее подключение или заднее — в стену",
      "add": 2200
     },
     {
      "id": "wall",
      "label": "Изоляция стены",
      "hint": "Если стена из горючего материала (дерево)",
      "add": 800
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Печь-камин Дорф, Белый Антик",
   "collection": "Дорф",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Дорф в цвете белый антик. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 730,
    "height": 1100,
    "depth": 575,
    "weight": 290
   },
   "p1": 16900,
   "p2": 0,
   "img": "content/pechi-kaminy/img/01.webp",
   "photos": [
    "content/pechi-kaminy/img/01.webp",
    "content/pechi-kaminy/img/01-2.webp",
    "content/pechi-kaminy/img/01-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-dorf-belyj-antik"
  },
  {
   "title": "Печь-камин Дорф, Горький Шоколад",
   "collection": "Дорф",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Дорф в цвете горький шоколад. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 730,
    "height": 1100,
    "depth": 575,
    "weight": 290
   },
   "p1": 16900,
   "p2": 0,
   "img": "content/pechi-kaminy/img/02.webp",
   "photos": [
    "content/pechi-kaminy/img/02.webp",
    "content/pechi-kaminy/img/02-2.webp",
    "content/pechi-kaminy/img/02-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik-2/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-dorf-gorkij-shokolad"
  },
  {
   "title": "Печь-камин Дорф, Муравленый",
   "collection": "Дорф",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Дорф в цвете муравленый. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 730,
    "height": 1100,
    "depth": 575,
    "weight": 290
   },
   "p1": 16900,
   "p2": 0,
   "img": "content/pechi-kaminy/img/03.webp",
   "photos": [
    "content/pechi-kaminy/img/03.webp",
    "content/pechi-kaminy/img/03-2.webp",
    "content/pechi-kaminy/img/03-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-dorf-muravlenyj"
  },
  {
   "title": "Печь-камин Ритм, Белый Антик",
   "collection": "Ритм",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Ритм в цвете белый антик. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 727,
    "height": 1248,
    "depth": 571,
    "weight": 290
   },
   "p1": 17500,
   "p2": 0,
   "img": "content/pechi-kaminy/img/04.webp",
   "photos": [
    "content/pechi-kaminy/img/04.webp",
    "content/pechi-kaminy/img/04-2.webp",
    "content/pechi-kaminy/img/04-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik-2-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-ritm-belyj-antik"
  },
  {
   "title": "Печь-камин Ритм, Вишнёвый",
   "collection": "Ритм",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Ритм в цвете вишнёвый. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 727,
    "height": 1248,
    "depth": 571,
    "weight": 290
   },
   "p1": 17500,
   "p2": 0,
   "img": "content/pechi-kaminy/img/05.webp",
   "photos": [
    "content/pechi-kaminy/img/05.webp",
    "content/pechi-kaminy/img/05-2.webp",
    "content/pechi-kaminy/img/05-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik-2-1-1-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-ritm-vishnevyj"
  },
  {
   "title": "Печь-камин Ритм, Лазурный",
   "collection": "Ритм",
   "desc": "Заводская модель на топке Астов 4162, дымоход 150 мм. Облицовка изразцами Ритм в цвете лазурный. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 727,
    "height": 1248,
    "depth": 571,
    "weight": 290
   },
   "p1": 17500,
   "p2": 0,
   "img": "content/pechi-kaminy/img/06.webp",
   "photos": [
    "content/pechi-kaminy/img/06.webp",
    "content/pechi-kaminy/img/06-2.webp",
    "content/pechi-kaminy/img/06-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-dorf-v-tsvete-belyj-antik-2-1-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-ritm-lazurnyj"
  },
  {
   "title": "Печь-камин Флора, Белый Антик",
   "collection": "Флора",
   "desc": "Заводская модель на топке Астов ПС 700, 8 кВт, дымоход 200 мм. Облицовка изразцами Флора в цвете белый антик. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 1060,
    "height": 1442,
    "depth": 600,
    "weight": 360
   },
   "p1": 24300,
   "p2": 0,
   "img": "content/pechi-kaminy/img/07.webp",
   "photos": [
    "content/pechi-kaminy/img/07.webp",
    "content/pechi-kaminy/img/07-2.webp",
    "content/pechi-kaminy/img/07-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-flora-v-tsvete-belyj-antik/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-flora-belyj-antik"
  },
  {
   "title": "Печь-камин Флора, Олива",
   "collection": "Флора",
   "desc": "Заводская модель на топке Астов ПС 700, 8 кВт, дымоход 200 мм. Облицовка изразцами Флора в цвете олива. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 1060,
    "height": 1442,
    "depth": 600,
    "weight": 360
   },
   "p1": 24300,
   "p2": 0,
   "img": "content/pechi-kaminy/img/08.webp",
   "photos": [
    "content/pechi-kaminy/img/08.webp",
    "content/pechi-kaminy/img/08-2.webp",
    "content/pechi-kaminy/img/08-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-flora-v-tsvete-belyj-antik-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-flora-oliva"
  },
  {
   "title": "Печь-камин Флора, Сапфир",
   "collection": "Флора",
   "desc": "Заводская модель на топке Астов ПС 700, 8 кВт, дымоход 200 мм. Облицовка изразцами Флора в цвете сапфир. Комплект со склада, цена окончательная.",
   "spec": {
    "width": 1060,
    "height": 1442,
    "depth": 600,
    "weight": 360
   },
   "p1": 24300,
   "p2": 0,
   "img": "content/pechi-kaminy/img/09.webp",
   "photos": [
    "content/pechi-kaminy/img/09.webp",
    "content/pechi-kaminy/img/09-2.webp",
    "content/pechi-kaminy/img/09-3.webp"
   ],
   "url": "https://ceramicadecor.ru/tipovye-kaminy-i-pechi-v-nalichii/cd_pech-kamin-tipovaya-keramikadekor-flora-v-tsvete-belyj-antik-1-1/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "pech-kamin-flora-sapfir"
  }
 ],
 "filters": [
  {
   "key": "collection",
   "label": "Коллекция",
   "field": "collection",
   "options": [
    {
     "id": "Дорф",
     "label": "Дорф"
    },
    {
     "id": "Ритм",
     "label": "Ритм"
    },
    {
     "id": "Флора",
     "label": "Флора"
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Индивидуальный проект",
  "goodTitle": "Типовая модель",
  "bad": [
   "Проектирование и согласование обычно занимает несколько недель.",
   "Пока проект не согласован, точная цена не известна.",
   "Изготовление занимает 2–3 месяца, монтаж — ещё 1–2 недели.",
   "Индивидуальный большой камин до потолка заметно дороже готовой печи-камина."
  ],
  "good": [
   "Модель уже готова: выбираете цвет, цена и сроки известны сразу.",
   "Цена известна заранее: 16 900 BYN за Дорф, 17 500 BYN за Ритм, 24 300 BYN за Флору.",
   "Срок поставки от 2 недель, монтаж 1–2 дня.",
   "Тоже премиальная изразцовая облицовка и тоже гарантия 50 лет на керамику, но за существенно меньшую цену."
  ],
  "media": "assets/img/why/pechi-kaminy.webp?v=3",
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
   "title": "Доставка и монтаж по Беларуси",
   "text": "Монтаж выполняет наша команда. Керамику везём в любой город Беларуси в жёстком каркасе, груз застрахован.",
   "svg": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.8 6.4h10.4v9.2H2.8zM13.2 9.6h4l3 3.2v2.8h-7z\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17.4\" cy=\"18\" r=\"2\"/></svg>"
  }
 ],
 "faq": [
  {
   "q": "Чем типовая печь-камин отличается от индивидуального проекта?",
   "a": "Только тем, что геометрия и раскладка изразцов уже разработаны и отлиты в формах. Материал, обжиг и ручная работа те же самые. Вы экономите 2–3 недели на проектировании и получаете фиксированную цену вместо плавающей сметы."
  },
  {
   "q": "Сколько стоит с монтажом?",
   "a": "Печь-камин Дорф — 16 900 BYN, Ритм — 17 500 BYN, Флора — 24 300 BYN. Другой оттенок глазури из палитры — плюс 1 900 BYN. Дымоход, монтаж и доставку считаем отдельно под ваш адрес — пришлём точную смету."
  },
  {
   "q": "Какая площадь отапливается?",
   "a": "Дорф и Ритм рассчитаны на 60–90 м² при нормальном утеплении, Флора с топкой 8 кВт — до 200 м³, то есть около 70–80 м². Если дом больше или потолки выше трёх метров — лучше индивидуальный проект, подберём на замере."
  },
  {
   "q": "Нужен ли фундамент?",
   "a": "Печь весит около 300 кг — как четыре взрослых человека в одной точке, поэтому ставить можно почти куда угодно. Основание инженер дополнительно проверит при выезде на замер."
  },
  {
   "q": "За сколько привезёте?",
   "a": "Модели в стандартных цветах — от 2 недель. Нестандартные оттенки — от 4 недель, глазурь готовится под партию. Монтаж с учётом дымохода занимает один-два дня."
  },
  {
   "q": "Можно ли поменять цвет глазури?",
   "a": "Да, три стандартных цвета в калькуляторе — самые популярные. Всего в палитре больше 150 оттенков: если нужен другой, сделаем под заказ, срок вырастет на 2 недели."
  },
  {
   "q": "Что с гарантией?",
   "a": "50 лет на керамику, гарантия по договору на монтаж, гарантия производителя на топку. Выдаём паспорт изделия."
  },
  {
   "q": "Отправляете в регионы?",
   "a": "Да. Печь едет в жёстком каркасе, монтаж выполняет ваш печник по нашей инструкции. Мы консультируем его на каждом этапе, гарантия на керамику сохраняется."
  }
 ],
 "gallery": [
  "content/pechi-kaminy/img/01.webp",
  "content/pechi-kaminy/img/02.webp",
  "content/pechi-kaminy/img/03.webp",
  "content/pechi-kaminy/img/04.webp",
  "content/pechi-kaminy/img/05.webp",
  "content/pechi-kaminy/img/06.webp",
  "content/pechi-kaminy/img/07.webp",
  "content/pechi-kaminy/img/08.webp",
  "content/pechi-kaminy/img/09.webp"
 ]
};
