/* Контент раздела «Барбекю комплексы» для ceramicadecor.kz. Правится в build.py — вёрстка и логика общие. */
window.LP = {
 "slug": "barbekyu-kompleksy",
 "title": "Барбекю комплексы",
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
 "priceLabel1": "Облицовка",
 "priceNote": "Цена ориентировочная: итоговая зависит от размеров комплекса, набора модулей и объёма кладки. Смету считаем бесплатно за 2–3 дня.",
 "priceFrom": true,
 "catalogStyle": "",
 "quiz": {
  "title": "Рассчитайте свой комплекс",
  "sub": "Соберите конфигурацию — пришлём смету в мессенджер. Без звонков и регистраций.",
  "note": "Пришлём смету и 3D-эскиз в мессенджер или расскажем по телефону — как удобнее.",
  "base": 0,
  "spread": 1.25,
  "turnkeyFactor": 2.0,
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
      "label": "Нужен комплекс с нуля",
      "hint": "Кладка, оборудование, облицовка, монтаж",
      "k": 1
     },
     {
      "id": "facing",
      "label": "Уже есть комплекс, нужна облицовка",
      "hint": "Облицуем вашу печь или комплекс",
      "k": 1,
      "noTurnkey": true
     }
    ]
   },
   {
    "id": "front",
    "type": "range",
    "step": 2,
    "label": "Длина по фронту",
    "min": 2,
    "max": 8,
    "stepSize": 0.5,
    "dec": 1,
    "unit": "м",
    "pricePerUnit": 990000,
    "hint": "Суммарная ширина всех модулей. Если сомневаетесь — 4 метра это стандартный комплекс с мангалом и казаном.",
    "def": 4
   },
   {
    "id": "place",
    "type": "radio",
    "step": 3,
    "label": "Где стоит комплекс",
    "row": true,
    "options": [
     {
      "id": "terrace",
      "label": "Открытая терраса",
      "k": 1
     },
     {
      "id": "pavilion",
      "label": "Беседка с крышей",
      "k": 1.1
     },
     {
      "id": "outdoor",
      "label": "Отдельно на участке",
      "k": 1.2
     }
    ]
   },
   {
    "id": "modules",
    "type": "checks",
    "label": "Модули комплекса",
    "collapsed": true,
    "hidePrices": true,
    "options": [
     {
      "id": "mangal",
      "label": "Мангал",
      "hint": "Основа комплекса",
      "add": 990000
     },
     {
      "id": "kazan",
      "label": "Печь под казан",
      "add": 660000
     },
     {
      "id": "smoker",
      "label": "Коптильня",
      "add": 770000
     },
     {
      "id": "tandoor",
      "label": "Тандыр",
      "add": 1045000
     },
     {
      "id": "sink",
      "label": "Мойка с тумбой",
      "add": 522000
     },
     {
      "id": "top",
      "label": "Каменная столешница",
      "add": 605000
     },
     {
      "id": "wood",
      "label": "Дровница",
      "add": 330000
     }
    ]
   }
  ]
 },
 "catalog": [
  {
   "title": "Барбекю комплекс Версаль",
   "collection": "Версаль",
   "desc": "Барбекю комплекс в изразцовой облицовке Версаль. Лаконичный печной комплекс включает в себя открытый камин и духовку. Облицовка изразцами природного зелёного оттенка превращает зону барбекю в произведение искусства.",
   "p1": 18600000,
   "p2": 37000000,
   "img": "content/barbekyu-kompleksy/img/03.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/03.webp",
    "content/barbekyu-kompleksy/img/03-2.webp",
    "content/barbekyu-kompleksy/img/03-3.webp",
    "content/barbekyu-kompleksy/img/03-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-barbekyu-v-oblitsovke-versal/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-versal"
  },
  {
   "title": "Летняя кухня Версаль, Болотный",
   "collection": "Версаль",
   "desc": "Многофункциональная летняя кухня в облицовке изразцами Версаль. Масштабный проект с полным набором оборудования: мангал, мойка, духовка, тандыр, рабочие поверхности и дровники.",
   "spec": {
    "weight": 382,
    "width": 2141,
    "height": 2079,
    "depth": 1064
   },
   "p1": 23000000,
   "p2": 46000000,
   "img": "content/barbekyu-kompleksy/img/04.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/04.webp",
    "content/barbekyu-kompleksy/img/04-2.webp",
    "content/barbekyu-kompleksy/img/04-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-versal-tsvet-bolotnyj-1311/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "full": "Многофункциональная летняя кухня в облицовке изразцами Версаль. Масштабный проект с полным набором оборудования: мангал, мойка, духовка, тандыр, рабочие поверхности и дровники. Яркие изразцы голубых оттенков создают настроение летней беседки.",
   "id": "letnyaya-kuhnya-versal-bolotnyj"
  },
  {
   "title": "Барбекю комплекс Тюльпан",
   "collection": "Тюльпан",
   "desc": "Белый мангал в облицовке изразцами коллекции Тюльпан. Изящный мангал в белоснежных изразцах с лаконичными формами облицовки. Компактное и стильное решение для открытой зоны барбекю.",
   "spec": {
    "width": 1762,
    "height": 2529,
    "depth": 931
   },
   "p1": 6400000,
   "p2": 15600000,
   "img": "content/barbekyu-kompleksy/img/06.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/06.webp",
    "content/barbekyu-kompleksy/img/06-2.webp",
    "content/barbekyu-kompleksy/img/06-3.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_belyj-mangal-v-oblitsovke-izraztsami-kollektsii-tyulpan-7757/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-tyulpan"
  },
  {
   "title": "Барбекю комплекс Дорф",
   "collection": "Дорф",
   "desc": "Масштабный проект в облицовке изразцами коллекции Дорф. Полный набор необходимого оборудования: большой мангал, мойка, рабочие поверхности, плита, а также встроенная посудомоечная машина, ящики и шкафчики для хранения.",
   "p1": 25000000,
   "p2": 45000000,
   "img": "content/barbekyu-kompleksy/img/07.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/07.webp",
    "content/barbekyu-kompleksy/img/07-2.webp",
    "content/barbekyu-kompleksy/img/07-3.webp",
    "content/barbekyu-kompleksy/img/07-4.webp",
    "content/barbekyu-kompleksy/img/07-5.webp",
    "content/barbekyu-kompleksy/img/07-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_eksklyuzivnaya-kuhnya-s-mangalom-v-izraztsovoj-oblitsovke-5268/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-dorf"
  },
  {
   "title": "Барбекю комплекс Птички",
   "collection": "Птички",
   "desc": "Барбекю комплекс в яркой облицовке «Птички». Жизнерадостный печной комплекс с ярким растительным орнаментом и птичками. Создаёт праздничную атмосферу на открытой террасе.",
   "spec": {
    "weight": 253,
    "width": 3065,
    "height": 2025,
    "depth": 2620
   },
   "p1": 6600000,
   "p2": 16300000,
   "img": "content/barbekyu-kompleksy/img/09.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/09.webp",
    "content/barbekyu-kompleksy/img/09-2.webp",
    "content/barbekyu-kompleksy/img/09-3.webp",
    "content/barbekyu-kompleksy/img/09-4.webp",
    "content/barbekyu-kompleksy/img/09-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_barbekyu-kompleks-v-yarkoj-oblitsovke-ptichki-3548/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-ptichki"
  },
  {
   "title": "Барбекю комплекс Птицы",
   "collection": "Птицы",
   "desc": "Печной комплекс из кирпича в коллекции Птицы. Масштабный барбекю комплекс с ручной росписью. Изразцы с изображением птиц превращают печной комплекс в настоящее произведение искусства.",
   "spec": {
    "weight": 673,
    "width": 3007,
    "height": 2926,
    "depth": 1969
   },
   "p1": 21000000,
   "p2": 37700000,
   "img": "content/barbekyu-kompleksy/img/11.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/11.webp",
    "content/barbekyu-kompleksy/img/11-3.webp",
    "content/barbekyu-kompleksy/img/11-4.webp",
    "content/barbekyu-kompleksy/img/11-5.webp",
    "content/barbekyu-kompleksy/img/11-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_pechnoj-kompleks-iz-kirpicha-v-kollektsii-ptichki-7676/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-pticy"
  },
  {
   "title": "Барбекю комплекс Византия",
   "collection": "Византия",
   "desc": "Облицовка печного комплекса с высоким открытым камином изразцами Византия.",
   "p1": 42000000,
   "p2": 58500000,
   "img": "content/barbekyu-kompleksy/img/12.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/12.webp",
    "content/barbekyu-kompleksy/img/12-2.webp",
    "content/barbekyu-kompleksy/img/12-3.webp",
    "content/barbekyu-kompleksy/img/12-4.webp",
    "content/barbekyu-kompleksy/img/12-5.webp"
   ],
   "url": "https://ceramicadecor.ru/izraztsovye-pechi/cd_letnyaya-kuhnya-v-izraztsovoj-oblitsovke-vizantiya/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "full": "Облицовка печного комплекса с высоким открытым камином изразцами Византия. Грандиозный проект с открытым камином и полным набором кулинарного оборудования: мангал, мини русская печь, мойка, рабочие поверхности и шкафчики для хранения.",
   "id": "barbekyu-kompleks-vizantiya"
  },
  {
   "title": "Печной комплекс Византия",
   "collection": "Византия",
   "desc": "Изразцовая облицовка Византия в палитре росписи Бирюзовая. Масштабный проект беседки включает в себя навес из дерева, а также печной комплекс с мангалом, тандыром, печью под казан и другими необходимыми функциями.",
   "p1": 28500000,
   "p2": 58800000,
   "img": "content/barbekyu-kompleksy/img/14.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/14.webp",
    "content/barbekyu-kompleksy/img/14-2.webp",
    "content/barbekyu-kompleksy/img/14-3.webp",
    "content/barbekyu-kompleksy/img/14-4.webp",
    "content/barbekyu-kompleksy/img/14-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_izraztsovaya-oblitsovka-vizantiya-dlya-pechnogo-kompleksa/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "full": "Изразцовая облицовка Византия в палитре росписи Бирюзовая. Масштабный проект беседки включает в себя навес из дерева, а также печной комплекс с мангалом, тандыром, печью под казан и другими необходимыми функциями. Сложная геометрия и богатый декор создают впечатляющий ансамбль.",
   "id": "pechnoj-kompleks-vizantiya"
  },
  {
   "title": "Барбекю комплекс Азулежу",
   "collection": "Азулежу",
   "desc": "Мангал на кухне в изразцах из коллекции Азулежу. Компактный мангал в стиле португальских азулежу. Сине-белые изразцы с характерным средиземноморским орнаментом создают уютную атмосферу.",
   "spec": {
    "width": 2150,
    "height": 2250,
    "depth": 910
   },
   "p1": 3700000,
   "p2": 9800000,
   "img": "content/barbekyu-kompleksy/img/15.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/15.webp",
    "content/barbekyu-kompleksy/img/15-2.webp",
    "content/barbekyu-kompleksy/img/15-3.webp",
    "content/barbekyu-kompleksy/img/15-4.webp",
    "content/barbekyu-kompleksy/img/15-5.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_mangal-na-kuhne-v-izraztsah-iz-kollektsii-azulezhu-7094/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-azulezhu"
  },
  {
   "title": "Барбекю комплекс Элеганс",
   "collection": "Элеганс",
   "desc": "Облицовка готового печного комплекса с мангалом, печью и плитой. Полнофункциональный барбекю комплекс в изразцовой облицовке Элеганс. Три рабочие зоны: мангал, печь и варочная плита.",
   "spec": {
    "weight": 653,
    "width": 4386,
    "height": 2779,
    "depth": 1171
   },
   "p1": 16300000,
   "p2": 48800000,
   "img": "content/barbekyu-kompleksy/img/16.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/16.webp",
    "content/barbekyu-kompleksy/img/16-2.webp",
    "content/barbekyu-kompleksy/img/16-3.webp",
    "content/barbekyu-kompleksy/img/16-4.webp",
    "content/barbekyu-kompleksy/img/16-5.webp",
    "content/barbekyu-kompleksy/img/16-6.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_oblitsovka-gotovogo-pechnogo-kompleksa-s-mangalom-pechyu-i-plitoj-6514/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-elegans"
  },
  {
   "title": "Летняя кухня Элеганс",
   "collection": "Элеганс",
   "desc": "Летняя кухня в изразцовой облицовке коллекции Элеганс и столешницей из гранита. Яркие бирюзовые изразцы создают стильный акцент беседки. А наполнение комплекса (мангал, тандыр, плита) позволяет воплотить любые кулинарные идеи.",
   "spec": {
    "weight": 211,
    "width": 2250,
    "height": 2678,
    "depth": 1050
   },
   "p1": 4700000,
   "p2": 26000000,
   "img": "content/barbekyu-kompleksy/img/17.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/17.webp",
    "content/barbekyu-kompleksy/img/17-2.webp",
    "content/barbekyu-kompleksy/img/17-3.webp",
    "content/barbekyu-kompleksy/img/17-4.webp"
   ],
   "url": "https://ceramicadecor.ru/nashi-raboti/gotovye-izraztsovye-barbekyu-kompleksy/cd_letnyaya-kuhnya-v-izraztsovoj-oblitsovke-elegans-so-stoleshnitsej-iz-granita-4100/",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "letnyaya-kuhnya-elegans"
  },
  {
   "title": "Барбекю комплекс Альбион с мангалом и казаном",
   "collection": "Альбион",
   "desc": "Зона барбекю с мангалом и казаном в загородном доме коллекции «Альбион». Полноценный печной комплекс с мангалом и печью под казан, облицованный белоснежными изразцами. Функциональность и красота в одном решении.",
   "p1": 7400000,
   "p2": 23000000,
   "img": "content/barbekyu-kompleksy/img/kz-bbq-albion-1.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/kz-bbq-albion-1.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-albion-2.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-albion-3.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-albion-4.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-albion-5.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-albion-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-albion-s-mangalom-i-kazanom"
  },
  {
   "title": "Барбекю комплекс Птички и Элеганс",
   "collection": "Коллекции Элеганс и Птички",
   "desc": "Печной комплекс с мангалом и печью под казан в облицовке изразцами коллекции Элеганс и Птички. Сочетание двух коллекций создаёт многослойный и интересный визуальный образ.",
   "p1": 10400000,
   "p2": 19500000,
   "img": "content/barbekyu-kompleksy/img/kz-bbq-ptichki-elegans-1.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/kz-bbq-ptichki-elegans-1.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-ptichki-elegans-2.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-ptichki-i-elegans"
  },
  {
   "title": "Летняя кухня Византия",
   "collection": "Византия",
   "desc": "Летняя кухня в изразцовой облицовке Византия. Компактный барбекю комплекс с богатым византийским орнаментом. Идеальное сочетание функциональности и декоративного искусства.",
   "p1": 4600000,
   "p2": 15400000,
   "img": "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-1.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-1.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-2.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-3.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-4.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-5.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-6.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "letnyaya-kuhnya-vizantiya"
  },
  {
   "title": "Барбекю комплекс Камея",
   "collection": "Камея",
   "desc": "Барбекю комплекс в изразцовой облицовке с художественной росписью Птицы. Каждый изразец - сценка с изображением птиц, выполненная вручную. Настоящее произведение искусства, которое хочется разглядывать.",
   "p1": 9600000,
   "p2": 26000000,
   "img": "content/barbekyu-kompleksy/img/kz-bbq-scenki-1.webp",
   "photos": [
    "content/barbekyu-kompleksy/img/kz-bbq-scenki-1.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-scenki-2.webp",
    "content/barbekyu-kompleksy/img/kz-bbq-scenki-3.webp"
   ],
   "url": "",
   "size": "",
   "surface": "",
   "kind": "",
   "props": [],
   "id": "barbekyu-kompleks-kameya"
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
     "label": "до 7,4 млн ₸",
     "min": 0,
     "max": 7400000
    },
    {
     "id": "p1",
     "label": "7,4 млн ₸ – 21 млн ₸",
     "min": 7400000,
     "max": 21000000
    },
    {
     "id": "p2",
     "label": "от 21 млн ₸",
     "min": 21000000,
     "max": 1000000000000
    }
   ]
  }
 ],
 "why": {
  "badTitle": "Кирпич и штукатурка",
  "goodTitle": "Керамика Ceramica Decor",
  "bad": [
   "Штукатурка чувствительна к перепадам температур: холодная зима и жар мангала могут привести к трещинам в отделке.",
   "Кирпич довольно сложен в уходе — копоть и жир создают неопрятный вид, и вы устаёте от уборки.",
   "Кирпичные и оштукатуренные комплексы визуально нейтральны: может и неплохо, но среди соседей выделиться не получится.",
   "Осадки и жгучее солнце влияют на внешний вид вашего барбекю комплекса."
  ],
  "good": [
   "Обжиг при температуре свыше 1100 °C делает керамику практически неуязвимой к открытому огню и невзгодам погоды.",
   "Глянцевая поверхность глазури легко очищается от любых видов загрязнений.",
   "Больше двадцати коллекций и десятки цветов глазури — комплекс собирается под характер вашего дома.",
   "Гарантия 50 лет на облицовку — зафиксирована в договоре."
  ],
  "media": "content/barbekyu-kompleksy/img/14.webp",
  "single": false,
  "mediaHi": "assets/img/why/barbekyu-kompleksy.webp 1996w"
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
   "q": "Сколько стоит барбекю-комплекс под ключ?",
   "a": "Облицовка начинается от 3 700 000 ₸, под ключ с основанием и монтажом — от 9 800 000 ₸. Итог зависит от длины комплекса, набора модулей и коллекции: художественная роспись дороже классической глазури примерно вдвое. Точную смету считаем после замера, 3D-проект бесплатный."
  },
  {
   "q": "Керамика переживёт зиму на улице?",
   "a": "Да, для этого её и обжигают при температуре свыше 1100 °C. Мы работаем с морозостойкой керамикой, которая держит цикл от −30 до +400 °C. Штукатурка и обычная плитка в таком режиме отваливаются за пару сезонов, изразец — нет."
  },
  {
   "q": "Что входит в цену «под ключ»?",
   "a": "Фундамент или подготовка основания, кладка ядра комплекса, дымоход, вся керамическая облицовка, монтаж модулей и пусковая топка. Не входит: навес или беседка, подведение воды и электрики, ландшафт вокруг."
  },
  {
   "q": "Сколько времени занимает изготовление?",
   "a": "От заявки до сдачи — 3–4 месяца. Керамика делается вручную: формовка, сушка, обжиг, роспись, повторный обжиг — это основная часть срока. Замер и 3D-проект — первая неделя, монтаж на объекте — 3–10 дней."
  },
  {
   "q": "Можно заказать только облицовку без монтажа?",
   "a": "Да, работаем по всему Казахстану: керамику везём в жёстком каркасе, монтаж выполняет наша команда. Если у вас свой печник — приложим раскладку и инструкцию и проконсультируем его по телефону."
  },
  {
   "q": "Я не знаю, какие модули мне нужны",
   "a": "Это нормально: большинство приходят с запросом «мангал и что-нибудь ещё». В калькуляторе выше можно поиграть с набором и увидеть, как меняется цена. На замере инженер подскажет, что реально используется, а что стоит денег и стоит без дела."
  },
  {
   "q": "Есть ли готовые проекты, чтобы не придумывать с нуля?",
   "a": "Да, выше на странице подборка реализованных комплексов с ценами — можно взять любой за основу и адаптировать под ваш участок. Это быстрее и дешевле, чем проектировать с чистого листа."
  },
  {
   "q": "Как оплачивается работа?",
   "a": "Аванс на запуск производства, затем оплата по этапам: готовность керамики, отгрузка, завершение монтажа. Полная предоплата не требуется."
  }
 ],
 "gallery": [
  "content/barbekyu-kompleksy/img/03.webp",
  "content/barbekyu-kompleksy/img/04.webp",
  "content/barbekyu-kompleksy/img/06.webp",
  "content/barbekyu-kompleksy/img/07.webp",
  "content/barbekyu-kompleksy/img/09.webp",
  "content/barbekyu-kompleksy/img/11.webp",
  "content/barbekyu-kompleksy/img/12.webp",
  "content/barbekyu-kompleksy/img/14.webp",
  "content/barbekyu-kompleksy/img/15.webp",
  "content/barbekyu-kompleksy/img/16.webp",
  "content/barbekyu-kompleksy/img/17.webp",
  "content/barbekyu-kompleksy/img/kz-bbq-albion-1.webp",
  "content/barbekyu-kompleksy/img/kz-bbq-ptichki-elegans-1.webp",
  "content/barbekyu-kompleksy/img/kz-bbq-vizantiya-1.webp",
  "content/barbekyu-kompleksy/img/kz-bbq-scenki-1.webp"
 ]
};
