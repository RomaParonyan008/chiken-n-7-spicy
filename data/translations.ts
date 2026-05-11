export type Language = "en" | "ru" | "hy";

export const languages: {
  code: Language;
  label: string;
  nativeLabel: string;
}[] = [
  { code: "en", label: "English", nativeLabel: "EN" },
  { code: "ru", label: "Russian", nativeLabel: "RU" },
  { code: "hy", label: "Armenian", nativeLabel: "ՀՅ" },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.delivery": "Delivery",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "HOW SPICY",
    "hero.subtitle": "CAN YOU GO?",
    "hero.description":
      "7 levels of heat. Zero compromises on flavor. From Level 0 to the legendary Level 7 — only the brave survive.",
    "hero.orderNow": "Choose Your Level",
    "hero.streetFood": "Street Food Reimagined",
    "hero.spiceLevels": "Spice Levels",
    "hero.menuItems": "Menu Items",
    "hero.challengeTakers": "Challenge Takers",

    // Menu
    "menu.title": "The Menu",
    "menu.subtitle": "EAT WITH FIRE",
    "menu.description":
      "Every item labeled with its spice level. Customize to your heat preference.",
    "menu.all": "All",
    "menu.burgers": "Burgers",
    "menu.chicken": "Chicken",
    "menu.wings": "Wings",
    "menu.fries": "Fries",
    "menu.sides": "Sides",
    "menu.wraps": "Wraps",
    "menu.drinks": "Drinks",
    "menu.kids": "Kids",
    "menu.customize": "Customize",
    "menu.add": "Add",
    "menu.more": "More",

    // Spice Levels
    "spice.title": "7 LEVELS OF FIRE",
    "spice.subtitle": "The Core Experience",
    "spice.description":
      "Choose your destiny. Each level is a journey. Each bite, a challenge.",
    "spice.onlyWorthy": "Only the worthy reach Level 7.",
    "spice.thinkYouCan": "Think you can handle the ultimate test?",
    "spice.takeChallenge": "Take the Level 7 Challenge",
    "spice.level0name": "No Spice",
    "spice.level0desc":
      "Pure flavor, zero heat. Perfect for those who love the taste without the burn.",
    "spice.level1name": "Mild",
    "spice.level1desc":
      "A gentle introduction. A hint of warmth that enhances every bite.",
    "spice.level2name": "Light",
    "spice.level2desc":
      "Growing warmth. You'll feel it, but it won't stop you coming back.",
    "spice.level3name": "Medium",
    "spice.level3desc":
      "The perfect balance. Heat that makes your taste buds dance.",
    "spice.level4name": "Hot",
    "spice.level4desc":
      "Things are heating up. You'll be reaching for your drink.",
    "spice.level5name": "Very Hot",
    "spice.level5desc":
      "Serious heat. Only for those with training. Tears of joy guaranteed.",
    "spice.level6name": "Extreme",
    "spice.level6desc": "Extreme heat territory. You're playing with fire now.",
    "spice.level7name": "DEATH ZONE",
    "spice.level7desc":
      "LEGENDARY. Only 1% can finish. Pain is the flavor here.",

    // About
    "about.title": "Our Story",
    "about.subtitle": "BORN FIERCE",
    "about.description":
      "Chicken N'7 Spicy wasn't born in a boardroom. It was born in a kitchen where someone thought, \"What if we pushed the heat to the limit?\"",
    "about.description2":
      "We source the world's hottest peppers. We developed proprietary blends that balance pain with pleasure.",
    "about.description3":
      "From the streets to viral fame, we've stayed true to one mission: make food that makes you feel alive.",
    "about.value1Title": "Pure Fire",
    "about.value1Desc":
      "No compromise on spice. If you want mild, go somewhere else.",
    "about.value2Title": "Viral Energy",
    "about.value2Desc":
      "We don't just make food — we make moments worth filming.",
    "about.value3Title": "Zero Pretense",
    "about.value3Desc":
      "Street food soul with premium taste. No rules — just fire on a plate.",
    "about.value4Title": "We serve challenges",
    "about.value4Desc": "We don't serve food. We serve challenges.",
    "about.founded": "Founded",
    "about.spiceLevels": "Spice Levels",
    "about.ordersMonth": "Orders/Month",
    "about.rating": "Rating",

    // Challenge
    "challenge.title": "LEVEL 7",
    "challenge.subtitle": "CHALLENGE",
    "challenge.extreme": "Extreme Challenge",
    "challenge.description":
      "Finish our legendary Level 7 feast in under 15 minutes and it's FREE. Pain is the flavor here.",
    "challenge.feast": "THE FEAST",
    "challenge.timeLimit": "TIME LIMIT",
    "challenge.thePrize": "THE PRIZE",
    "challenge.feastItems":
      "Level 7 Wings × 12, Death Zone Burger, Lava Fries, 2L Fire Water",
    "challenge.timeDetails":
      "15 Minutes Total, Must finish everything, No water until done, Camera recording",
    "challenge.prizeItems":
      "Full meal FREE, Wall of Fame, Level 7 T-Shirt, Eternal glory",
    "challenge.medicalWarning": "MEDICAL WARNING",
    "challenge.medicalDesc":
      "Level 7 contains capsaicin concentrations not found in any commercial food product. Consumption may cause temporary burning, crying, and temporary loss of taste. Not recommended for pregnant individuals, people with heart conditions, or those who believe they can't handle the heat. You've been warned.",
    "challenge.dare": "I Dare To Try",
    "challenge.completed": "Only 127 have completed it. Will you be #128?",
    "challenge.wallOfFame": "more on Wall of Fame",

    // Footer
    "footer.quickAccess": "Quick Access",
    "footer.findUs": "Find Us",
    "footer.hours": "Hours",
    "footer.orderNow": "Order Now",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.whereFire":
      "Where fire meets flavor. 7 levels of heat for those who dare.",
    "footer.monThu": "Mon - Thu",
    "footer.friSat": "Fri - Sat",
    "footer.sunday": "Sunday",
    "footer.am": "am",
    "footer.pm": "pm",

    // Delivery
    "delivery.yourOrder": "YOUR ORDER",
    "delivery.cartEmpty": "Your cart is empty",
    "delivery.addItems": "Add some spicy items to get started!",
    "delivery.browseMenu": "Browse Menu",
    "delivery.subtotal": "Subtotal",
    "delivery.deliveryFee": "Delivery Fee",
    "delivery.total": "Total",
    "delivery.continue": "Continue to Delivery Details",
    "delivery.deliveryDetails": "DELIVERY DETAILS",
    "delivery.fullName": "Full Name",
    "delivery.phone": "Phone Number",
    "delivery.streetAddress": "Street Address",
    "delivery.city": "City",
    "delivery.zipCode": "ZIP Code",
    "delivery.instructions": "Special Instructions (Optional)",
    "delivery.back": "Back",
    "delivery.review": "Review Order",
    "delivery.summary": "ORDER SUMMARY",
    "delivery.deliveryTo": "Delivery To:",
    "delivery.items": "Items:",
    "delivery.delivery": "Delivery",
    "delivery.confirm": "Confirm Order",
    "delivery.orderConfirmed": "ORDER CONFIRMED!",
    "delivery.orderNumber": "Your order number is:",
    "delivery.preparing":
      "We're firing up the kitchen! Your spicy feast will be ready soon. Estimated delivery: 30-45 minutes.",
    "delivery.backHome": "Back to Home",
    "delivery.level": "Level",
    "delivery.spice": "Spice",

    // Contact
    "contact.title": "CONTACT US",
    "contact.subtitle": "Get In Touch",
    "contact.description":
      "Have a question, feedback, or want to challenge us? We'd love to hear from you.",
    "contact.visitUs": "Visit Us",
    "contact.location": "Location",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.followUs": "Follow Us",
    "contact.sendMessage": "Send us a Message",
    "contact.yourName": "Your Name",
    "contact.emailAddress": "Email Address",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.messageSent": "Message Sent!",
    "contact.weReply": "We'll get back to you soon.",

    "student.title": "BUY 1",
    "student.subtitle": "GET 1 FREE",
    "student.badge": "Student Exclusive",
    "student.description":
      "Special student offer for spicy lovers. Buy any spicy burger or wrap from levels 1–5 and get another one absolutely free.",
    "student.levelsTitle": "Spicy Levels",
    "student.levelsDesc":
      "Available for spicy levels 1 to 5 on selected menu items.",
    "student.dealTitle": "Student Deal",
    "student.dealDesc":
      "Show your student card and activate the offer instantly.",
    "student.timeTitle": "Limited Time",
    "student.timeDesc": "Promotion available every weekday for students.",
    "student.order": "Order Now",

    "gallery.badge": "Feel The Burn",
    "gallery.title1": "VISUAL",
    "gallery.title2": "FEAST",
    "gallery.description":
      "Every bite is a work of art. Fire and flavor in perfect chaos.",
  },
  ru: {
    // Navbar
    "nav.home": "Главная",
    "nav.menu": "Меню",
    "nav.delivery": "Доставка",
    "nav.about": "О нас",
    "nav.contact": "Контакты",

    "gallery.badge": "Почувствуй Жар",
    "gallery.title1": "ВИЗУАЛЬНЫЙ",
    "gallery.title2": "ПИР",
    "gallery.description":
      "Каждый кусочек — произведение искусства. Огонь и вкус в идеальном хаосе.",
    // Hero
    "hero.title": "НАСК ОЛЬКО",
    "hero.subtitle": "ОСТРЫМ ТЫ МОЖЕШЬ БЫТЬ?",
    "hero.description":
      "7 уровней остроты. Ноль компромиссов во вкусе. От уровня 0 до легендарного 7 — только смелые выживают.",
    "hero.orderNow": "Выбери Свой Уровень",
    "hero.streetFood": "Уличная Еда Переосмыслена",
    "hero.spiceLevels": "Уровней Остроты",
    "hero.menuItems": "Пунктов Меню",
    "hero.challengeTakers": "Любителей Остроты",

    // Menu
    "menu.title": "Меню",
    "menu.subtitle": "ЕШЬ С ОГНЁМ",
    "menu.description":
      "Каждый товар обозначен уровнем остроты. Настройте под свой вкус.",
    "menu.all": "Все",
    "menu.burgers": "Бургеры",
    "menu.chicken": "Курица",
    "menu.wings": "Крылышки",
    "menu.fries": "Картофель",
    "menu.sides": "Гарниры",
    "menu.wraps": "Лаваши",
    "menu.drinks": "Напитки",
    "menu.kids": "Детское",
    "menu.customize": "Настроить",
    "menu.add": "Добавить",
    "menu.more": "Ещё",

    // Spice Levels
    "spice.title": "7 УРОВНЕЙ ОГНЯ",
    "spice.subtitle": "Основной Опыт",
    "spice.description":
      "Выбери свою судьбу. Каждый уровень — это путешествие. Каждый кусочек — испытание.",
    "spice.onlyWorthy": "Только достойные достигают 7 уровня.",
    "spice.thinkYouCan": "Думаешь, сможешь выдержать главное испытание?",
    "spice.takeChallenge": "Принять Испытание 7 Уровня",
    "spice.level0name": "Без Остроты",
    "spice.level0desc":
      "Чистый вкус без остроты. Идеально для тех, кто любит вкус без жжения.",
    "spice.level1name": "Мягкий",
    "spice.level1desc":
      "Мягкое начало. Лёгкое тепло, которое улучшает каждый кусочек.",
    "spice.level2name": "Лёгкий",
    "spice.level2desc":
      "Нарастающее тепло. Ты почувствуешь, но это не остановит тебя.",
    "spice.level3name": "Средний",
    "spice.level3desc":
      "Идеальный баланс. Острота, от которой танцуют вкусовые рецепторы.",
    "spice.level4name": "Острый",
    "spice.level4desc": "Жарко. Ты потянешься за напитком.",
    "spice.level5name": "Очень Острый",
    "spice.level5desc":
      "Серьёзная острота. Только для подготовленных. Слёзы радости гарантированы.",
    "spice.level6name": "Экстрим",
    "spice.level6desc": "Территория экстремальной остроты. Ты играешь с огнём.",
    "spice.level7name": "ЗОНА СМЕРТИ",
    "spice.level7desc":
      "ЛЕГЕНДАРНЫЙ. Только 1% может закончить. Боль — это вкус.",

    // About
    "about.title": "Наша История",
    "about.subtitle": "РОЖДЕНЫ ГОРИТЬ",
    "about.description":
      "Chicken N'7 Spicy родился не в переговорной. Он родился на кухне, где кто-то подумал: «А что если довести остроту до предела?»",
    "about.description2":
      "Мы закупаем самые острые перцы в мире. Мы разработали собственные смеси, которые балансируют боль с удовольствием.",
    "about.description3":
      "От улиц до вирусной славы мы остаёмся верны одной миссии: создавать еду, которая заставляет чувствовать себя живым.",
    "about.value1Title": "Чистый Огонь",
    "about.value1Desc":
      "Никаких компромиссов в остроте. Если хочешь мягкое — иди куда-то ещё.",
    "about.value2Title": "Вирусная Энергия",
    "about.value2Desc":
      "Мы делаем не просто еду — мы создаём моменты, достойные съёмки.",
    "about.value3Title": "Без Притворства",
    "about.value3Desc":
      "Душа уличной еды с премиальным вкусом. Никаких правил — только огонь на тарелке.",
    "about.value4Title": "Мы предлагаем испытания",
    "about.value4Desc": "Мы не подаём еду. Мы подаём испытания.",
    "about.founded": "Основано",
    "about.spiceLevels": "Уровней Остроты",
    "about.ordersMonth": "Заказов/Месяц",
    "about.rating": "Рейтинг",

    // Challenge
    "challenge.title": "УРОВЕНЬ 7",
    "challenge.subtitle": "ИСПЫТАНИЕ",
    "challenge.extreme": "Экстремальное Испытание",
    "challenge.description":
      "Съешь наше легендарное блюдо 7 уровня за 15 минут и оно БЕСПЛАТНО. Боль — это вкус.",
    "challenge.feast": "ПИР",
    "challenge.timeLimit": "ЛИМИТ ВРЕМЕНИ",
    "challenge.thePrize": "ПРИЗ",
    "challenge.feastItems":
      "Крылья 7 ур. × 12, Бургер Зоны Смерти, Лава Фрайз, 2Л Огненная Вода",
    "challenge.timeDetails":
      "15 Минут Всего, Всё должно быть съедено, Без воды до конца, Камера записывает",
    "challenge.prizeItems":
      "Полный обед БЕСПЛАТНО, Стена Славы, Футболка 7 Уровня, Вечная слава",
    "challenge.medicalWarning": "МЕДИЦИНСКОЕ ПРЕДУПРЕЖДЕНИЕ",
    "challenge.medicalDesc":
      "Уровень 7 содержит концентрации капсаицина, не встречающиеся в обычных продуктах. Употребление может вызвать временное жжение, слёзы и временную потерю вкуса. Не рекомендуется для беременных, людей с сердечными заболеваниями или тех, кто не уверен в своей стойкости к острому. Предупрежден.",
    "challenge.dare": "Я Осмелюсь",
    "challenge.completed": "Только 127 человек завершили. Будешь ли ты #128?",
    "challenge.wallOfFame": "на Стене Славы",

    // Footer
    "footer.quickAccess": "Быстрый Доступ",
    "footer.findUs": "Найди Нас",
    "footer.hours": "Часы Работы",
    "footer.orderNow": "Заказать Сейчас",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика Конфиденциальности",
    "footer.terms": "Условия Использования",
    "footer.whereFire":
      "Там, где огонь встречает вкус. 7 уровней остроты для тех, кто осмелится.",
    "footer.monThu": "Пн - Чт",
    "footer.friSat": "Пт - Сб",
    "footer.sunday": "Воскресенье",
    "footer.am": "",
    "footer.pm": "",

    // Delivery
    "delivery.yourOrder": "ТВОЙ ЗАКАЗ",
    "delivery.cartEmpty": "Твоя корзина пуста",
    "delivery.addItems": "Добавь острые блюда чтобы начать!",
    "delivery.browseMenu": "Смотреть Меню",
    "delivery.subtotal": "Подытог",
    "delivery.deliveryFee": "Плата за Доставку",
    "delivery.total": "Итого",
    "delivery.continue": "Продолжить к Деталям Доставки",
    "delivery.deliveryDetails": "ДЕТАЛИ ДОСТАВКИ",
    "delivery.fullName": "Полное Имя",
    "delivery.phone": "Номер Телефона",
    "delivery.streetAddress": "Адрес Улицы",
    "delivery.city": "Город",
    "delivery.zipCode": "Почтовый Код",
    "delivery.instructions": "Особые Пожелания (По Желанию)",
    "delivery.back": "Назад",
    "delivery.review": "Проверить Заказ",
    "delivery.summary": "ИТОГО ЗАКАЗА",
    "delivery.deliveryTo": "Доставка К:",
    "delivery.items": "Позиции:",
    "delivery.delivery": "Доставка",
    "delivery.confirm": "Подтвердить Заказ",
    "delivery.orderConfirmed": "ЗАКАЗ ПОДТВЕРЖДЁН!",
    "delivery.orderNumber": "Номер твоего заказа:",
    "delivery.preparing":
      "Мы зажигаем кухню! Твоя острая трапеза скоро будет готова. Ожидаемое время доставки: 30-45 минут.",
    "delivery.backHome": "На Главную",
    "delivery.level": "Уровень",
    "delivery.spice": "Острота",

    // Contact
    "contact.title": "СВЯЖИТЕСЬ С НАМИ",
    "contact.subtitle": "Свяжитесь",
    "contact.description":
      "Есть вопросы, отзывы или хочешь бросить нам вызов? Мы будем рады услышать тебя.",
    "contact.visitUs": "Посетите Нас",
    "contact.location": "Локация",
    "contact.phone": "Телефон",
    "contact.email": "Почта",
    "contact.followUs": "Подписывайтесь",
    "contact.sendMessage": "Отправьте Нам Сообщение",
    "contact.yourName": "Ваше Имя",
    "contact.emailAddress": "Адрес Почты",
    "contact.message": "Сообщение",
    "contact.send": "Отправить",
    "contact.messageSent": "Сообщение Отправлено!",
    "contact.weReply": "Мы скоро ответим.",

    "student.title": "КУПИ 1",
    "student.subtitle": "ПОЛУЧИ 1 БЕСПЛАТНО",
    "student.badge": "Эксклюзив для студентов",
    "student.description":
      "Специальное предложение для любителей острого. Купи любой острый бургер или ролл уровней 1–5 и получи второй бесплатно.",
    "student.levelsTitle": "Уровни Остроты",
    "student.levelsDesc":
      "Доступно для уровней остроты от 1 до 5 на выбранные позиции меню.",
    "student.dealTitle": "Студенческая Акция",
    "student.dealDesc":
      "Покажи студенческий билет и активируй предложение мгновенно.",
    "student.timeTitle": "Ограниченное Время",
    "student.timeDesc": "Акция действует каждый будний день для студентов.",
    "student.order": "Заказать Сейчас",
  },

  hy: {
    // Navbar
    "nav.home": "Գլխավոր",
    "nav.menu": "Մենյու",
    "nav.delivery": "Առաքում",
    "nav.about": "Մեր մասին",
    "nav.contact": "Կապ",

    "gallery.badge": "Զգա Կրակը",
    "gallery.title1": "ՎԻԶՈՒԱԼ",
    "gallery.title2": "ԽՆՋՈՒՅՔ",
    "gallery.description":
      "Ամեն պատառ արվեստի գործ է։ Կրակ և համ կատարյալ քաոսի մեջ։",
    // Hero
    "hero.title": "ՈՐՔԱՆ ԿԱՐՈ՞Ղ ԵՍ",
    "hero.subtitle": "ԴԻՄԱՆԱԼ ԿԾՈՒԹՅԱՆԸ",
    "hero.description":
      "7 մակարդակ կծություն: Առանց փոխզիջման համի մեջ: 0-ից մինչեւ լեգենդար 7 - միայն քաջերն են հասնում վերջ:",
    "hero.orderNow": "Ընտրիր Քո Մակարդակը",
    "hero.streetFood": "Փողոցային Սնունդ Նոր Մոտեցմամբ",
    "hero.spiceLevels": "Կծության Մակարդակներ",
    "hero.menuItems": "Մենյուի Կետեր",
    "hero.challengeTakers": "Մասնակիցներ",

    // Menu
    "menu.title": "Մենյու",
    "menu.subtitle": "ԿԵՐ ԱՅՐՈՎ",
    "menu.description":
      "Յուրաքանչյուր ուտեստ ունի իր կծության մակարդակը: Կարգավորիր ըստ քո ճաշակի:",
    "menu.all": "Բոլորը",
    "menu.burgers": "Բուրգերներ",
    "menu.chicken": "Հավ",
    "menu.wings": "Թևիկներ",
    "menu.fries": "Ֆրի",
    "menu.sides": "Լրացուցիչներ",
    "menu.wraps": "Ռափեր",
    "menu.drinks": "Խմիչքներ",
    "menu.kids": "Մանկական",
    "menu.customize": "Կարգավորել",
    "menu.add": "Ավելացնել",
    "menu.more": "Ավելին",

    // Spice Levels
    "spice.title": "7 ՄԱԿԱՐԴԱԿ ԿՐԱԿ",
    "spice.subtitle": "Հիմնական Փորձ",
    "spice.description": "Ընտրիր քո ճակատագիրը: Ամեն մակարդակ փորձություն է:",
    "spice.onlyWorthy": "Միայն արժանիներն են հասնում 7-ին",
    "spice.thinkYouCan": "Կարծում ես կհաղթահարե՞ս",
    "spice.takeChallenge": "Փորձիր 7-րդ մակարդակը",
    "spice.level0name": "Առանց կծության",
    "spice.level0desc": "Մաքուր համ, զրոյական կծություն:",
    "spice.level1name": "Թույլ",
    "spice.level1desc": "Թույլ տաքություն, որ բոլոր կտրուկները լավ է դարձնում:",
    "spice.level2name": "Թեթեւ",
    "spice.level2desc": "Աճող տաքություն: Կզգաս, բայց չի կանգնեցնի:",
    "spice.level3name": "Միջին",
    "spice.level3desc":
      "Լավագույն հավասարակշռություն: Կծություն, որ պարիսպներ է դնում:",
    "spice.level4name": "Կծու",
    "spice.level4desc": "Սկսում է տակտիկ լինել:",
    "spice.level5name": "Շատ Կծու",
    "spice.level5desc": "Լուրջ կծություն: Միայն փորձառուների համար:",
    "spice.level6name": "Էքստրեմ",
    "spice.level6desc": "Էքստրեմ տաքություն: Դու կրակի հետ ես խաղում:",
    "spice.level7name": "ՄԱՀԻ Գոտի",
    "spice.level7desc": "ԼԵԳԵՆԴԱՐ: Միայն 1%-ը կարող է վերջացնել:",

    // About
    "about.title": "Մեր Պատմությունը",
    "about.subtitle": "ԾՆՎԱԾ ԿՐԱԿՈՎ",
    "about.description":
      "Chicken N'7 Spicy-ն ծնվել է խոհանոցում, ոչ թե գրասենյակում:",
    "about.description2": "Մենք օգտագործում ենք աշխարհի ամենակծու պղպեղները:",
    "about.description3":
      "Մեր նպատակն է` սնունդ, որը քեզ կենդանի է զգացնել տալիս:",
    "about.value1Title": "Մաքուր Կրակ",
    "about.value1Desc": "Ոչ մի փոխզիջում կծության մեջ:",
    "about.value2Title": "Վիրուսային Էներգիա",
    "about.value2Desc":
      "Մենք ոչ թե սնունդ ենք պատրաստում, այլ պահեր, որոնք արժե նկարել:",
    "about.value3Title": "Զուտ Փողոց",
    "about.value3Desc": "Փողոցի հոգին պրեմիում համով:",
    "about.value4Title": "Մենք մատուցում ենք ստուգումներ",
    "about.value4Desc": "Մենք ոչ թե սնունդ ենք մատուցում, այլ ստուգումներ:",
    "about.founded": "Հիմնադրվել է",
    "about.spiceLevels": "Կծության Մակարդակներ",
    "about.ordersMonth": "Պատվեր/Ամսում",
    "about.rating": "Վարկանիշ",

    // Challenge
    "challenge.title": "7 ՄԱԿԱՐԴԱԿ",
    "challenge.subtitle": "ՄԱՐՏԱՀՐԱՎԵՐ",
    "challenge.extreme": "Էքստրեմ Ստուգում",
    "challenge.description": "Կեր 7-րդ մակարդակը 15 րոպեում և ստացիր ԱՆՎՃԱՐ:",
    "challenge.feast": "ԽՆՋՈՅՔ",
    "challenge.timeLimit": "ԺԱՄԱՆԱԿԻ ՍԱՀՄԱՆ",
    "challenge.thePrize": "ՄՐՑԱՆԱԿ",
    "challenge.feastItems":
      "7-րդ մակ. թևիկ x 12, Մահի Գոտու բուրգ, Կրակի ֆրի, 2լ Ջուր",
    "challenge.timeDetails":
      "15 րոպե, պետք է վերջացնել մի ջուր չխմել մինչ վերջ",
    "challenge.prizeItems": "Անվճար ճաշ, Փառքի Պատ, 7-րդ մակ. Ֆուտբոլկա",
    "challenge.medicalWarning": "ԲԺՇԿԱԿԱՆ ՆԱԽԱՏԵՍՈՒԹՅՈւՆ",
    "challenge.medicalDesc":
      "7-րդ մակ. պարունակում է կապսաիցինի կոնցենտրacia որ չկա ոչ մի առևտրային սննդում: Արգելվում է հղիներին և սրտի հիվանդություն ունեցողներին:",
    "challenge.dare": "Ես Գիտեմ որ կդիմանամ",
    "challenge.completed": "Միայն 127 հոգի են կարող եղել: Դու կլինե՞ս #128:",
    "challenge.wallOfFame": "փառքի պատին",

    // Footer
    "footer.quickAccess": "Արագ Մուտք",
    "footer.findUs": "Գտիր Մեզ",
    "footer.hours": "Ժամեր",
    "footer.orderNow": "Պատվիրել",
    "footer.rights": "Բոլոր իրավունքները պաշտպանված են:",
    "footer.privacy": "Գաղտնիության քաղվածք",
    "footer.terms": "Օգտագործման պայմաններ",
    "footer.whereFire": "Որտեղ կրակը հանդիպում է համին:",
    "footer.monThu": "Երկ - Հինգ",
    "footer.friSat": "Ուրբ - Շաբ",
    "footer.sunday": "Կիրակի",
    "footer.am": "",
    "footer.pm": "",

    // Delivery
    "delivery.yourOrder": "ՔՈ ՊԱՏՎԵՐԸ",
    "delivery.cartEmpty": "Քո զամբյուղը դատարկ է",
    "delivery.addItems": "Ավելացրու կծու ուտեստներ",
    "delivery.browseMenu": "Դիտել Մենյուն",
    "delivery.subtotal": "Ենթագումար",
    "delivery.deliveryFee": "Առաքման վճար",
    "delivery.total": "Ընդհանուր",
    "delivery.continue": "Շարունակել դեպի Առաքման Տվյալներ",
    "delivery.deliveryDetails": "ԱՌԱՔՄԱՆ ՏՎՅԱԼՆԵՐ",
    "delivery.fullName": "Անուն Ազգանուն",
    "delivery.phone": "Հեռախոս",
    "delivery.streetAddress": "Փողոց Հասցե",
    "delivery.city": "Քաղաք",
    "delivery.zipCode": "Փոստային Կոդ",
    "delivery.instructions": "Հատուկ Հրահանգներ",
    "delivery.back": "Հետ",
    "delivery.review": "Դիտել Պատվերը",
    "delivery.summary": "ՊԱՏՎԵՐԻ ԱՄՓՈՓԱԿԸ",
    "delivery.deliveryTo": "Առաքել Դեպի",
    "delivery.items": "Կետեր",
    "delivery.delivery": "Առաքում",
    "delivery.confirm": "Հաստատել Պատվերը",
    "delivery.orderConfirmed": "ՊԱՏՎԵՐԸ ՀԱՍՏԱՏՎԱԾ Է",
    "delivery.orderNumber": "Քո պատվերի համարն է:",
    "delivery.preparing": "Մենք պատրաստում ենք ձեր կծու ճաշը:",
    "delivery.backHome": "Վերադառնալ Գլխավոր",
    "delivery.level": "Մակ.",
    "delivery.spice": "Կծ.",

    // Contact
    "contact.title": "ԿՈՆՏԱԿՏ",
    "contact.subtitle": "ԿԱՊ ՀԱՍՏԱՏԵԼ",
    "contact.description": "Հարցեր կամ կարծիքներ ունե՞ս:",
    "contact.visitUs": "Այցելիր Մեզ",
    "contact.location": "Վայր",
    "contact.phone": "Հեռ.",
    "contact.email": "Email",
    "contact.followUs": "Հետևիր",
    "contact.sendMessage": "ՈՒՂԱՐԿԵԼ ՀԱՂՈՐԴԱԿՈՒԹՅՈւՆ",
    "contact.yourName": "Քո Անունը",
    "contact.emailAddress": "Email",
    "contact.message": "Հաղորդակություն",
    "contact.send": "ՈՒՂԱՐԿԵԼ",
    "contact.messageSent": "ՈՒՂԱՐԿՎԵԼ Է",
    "contact.weReply": "Մենք շուտով կպատասխանենք:",

    "student.title": "ԳՆԻՐ 1",
    "student.subtitle": "ՍՏԱՑԻՐ 1 ԱՆՎՃԱՐ",
    "student.badge": "Հատուկ ուսանողների համար",
    "student.description":
      "Հատուկ առաջարկ կծու սիրողների համար։ Գնիր 1-5 մակարդակի ցանկացած բուրգեր կամ ռափ և ստացիր երկրորդը անվճար։",
    "student.levelsTitle": "Կծության Մակարդակներ",
    "student.levelsDesc":
      "Գործում է ընտրված մենյուի 1-5 մակարդակի ուտեստների համար։",
    "student.dealTitle": "Ուսանողական Ակցիա",
    "student.dealDesc":
      "Ցույց տուր ուսանողական քարտդ և անմիջապես ակտիվացրու առաջարկը։",
    "student.timeTitle": "Սահմանափակ Ժամանակ",
    "student.timeDesc":
      "Ակցիան գործում է ամեն աշխատանքային օր ուսանողների համար։",
    "student.order": "Պատվիրել Հիմա",
  },
};
