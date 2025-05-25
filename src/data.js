const geoLocation = [
    "Abdukarim",
    "Ahmad Yassaviy",
    "Alaja",
    "Alamli",
    "Altinko'l (Qo'ng'irot tumani)",
    "Andijon",
    "Angor",
    "Angren",
    "Arsif",
    "Asaka",
    "Avval",
    "Babalakota",
    "Baliqchi",
    "Balta",
    "Bardanko'l",
    "Baynalmilal",
    "Bekat",
    "Bekobod",
    "Bekobod (Bog'dod tumani)",
    "Beruni",
    "Beruniy (Qiyichirchiq tumani)",
    "Beshariq",
    "Beshkapa",
    "Beshkent",
    "Beshrabod",
    "Bo'jay",
    "Bo'ka",
    "Bo'rbaliq",
    "Bo'ston",
    "Bo'ston (Oltinsoy tumani)",
    "Bo'ston (Ellikqali tumani)",
    "Bo'ston (Zarbdor tumani)",
    "Bog'iturkon",
    "Bog'ot",
    "Bogdan",
    "Boyovut",
    "Boysun",
    "Buloqboshi",
    "Bulung'ur",
    "Burchmullo",
    "Buvayda",
    "Buxoro",
    "Bоg'dod",
    "Changi",
    "Chelak",
    "Chimboy",
    "Chimyon",
    "Chinabod",
    "Chinoz",
    "Chirchiq",
    "Chiroqchi",
    "Cho'rindi",
    "Chorbog'",
    "Chorraha",
    "Chortoq",
    "Chortoq (Guliston tumani)",
    "Chorvoq",
    "Chulkuvar",
    "Chust",
    "Chuvalachi",
    "Dang'ara",
    "Dangir",
    "Dasht",
    "Dashtobod",
    "Dehoji",
    "Dehqonobod",
    "Denov",
    "Denov (Shafirqon tumani)",
    "Do'rmon",
    "Do'stlik",
    "Do'stlik (Denov tumani)",
    "Do'stobod",
    "Dusimbiy",
    "Egizbuloq",
    "Eshmatoul",
    "Eshonguzor",
    "Fargʻona",
    "Farxod",
    "Fayziobod",
    "Forish",
    "Furqat",
    "G'alaba",
    "G'allaorol",
    "G'azalkent",
    "G'o's",
    "G'oliblar",
    "G'uzor",
    "Gagarin",
    "Galaosiya",
    "Galaquduq",
    "Gijduvon",
    "Gul",
    "Gulbahor",
    "Guliston",
    "Guliston (Yuqorichirchiq tumani)",
    "Gullanbog'",
    "Gulobod",
    "Gulzar",
    "Gulzar (Paxtakor tumani)",
    "Gurlan",
    "Hamzaobod",
    "Hayit",
    "Hisorak",
    "Humson",
    "Ibrat",
    "Iftixor",
    "Ishtixon",
    "Ispanza",
    "Istiqlol",
    "Ittifoq",
    "Jalaquduq",
    "Jambul",
    "Jarqo'rg'on",
    "Jayraxona",
    "Jilva",
    "Jizzax",
    "Jizzaxlik",
    "Jo'ynav",
    "Jomboy",
    "Jondor",
    "Juma",
    "Jumabazar (Bekobod tumani)",
    "Jumabazar (Yuqori Chirchiq tumani)",
    "Jumashuy",
    "Jurek",
    "Juren",
    "Kakaydi",
    "Kalkonota (Navbaxor tumani)",
    "Kangli",
    "Kanimex",
    "Kaptarxona",
    "Karamaz",
    "Karkidan",
    "Karmana",
    "Katta Ramadon",
    "Kattaqo'rg'on",
    "Kegayli",
    "Kelauchi",
    "Keles",
    "Kitob",
    "Ko'hna Kalon",
    "Ko'hna Sho'rcha",
    "Ko'kdala",
    "Ko'ksaroy",
    "Kogon",
    "Kosari",
    "Koson",
    "Kosonsoy",
    "Krasnogorsk",
    "Kulonxona",
    "Kumarik",
    "Kuyganyor",
    "Kuyun",
    "Labiro'd",
    "Lagan",
    "Lagandi",
    "Lalmiqor",
    "Lolazor",
    "Loyish",
    "Madaniyat",
    "Malikrabot",
    "Mang'it",
    "Margʻilon",
    "Marhamat",
    "Marjonbuloq",
    "Markaz",
    "Mashak",
    "Mindon",
    "Misr",
    "Muborak",
    "Mug'lon",
    "Mulkanlik",
    "Mulloyon",
    "Muratali",
    "Mustaqillik",
    "Namangan",
    "Namdanak",
    "Namuna",
    "Nanay",
    "Narpay (Karmana tumani)",
    "Navbahor",
    "Navbahor (Namangan tumai)",
    "Navoiiy",
    "Navoiy",
    "Navro'z",
    "Nazarbek",
    "Niyozbash",
    "Novaboshi",
    "Novkent",
    "Novmetan",
    "Nukus",
    "Nurafshon",
    "Nurobod",
    "Nurobod (Ohangaron tumani)",
    "Nurota",
    "O'rta Oqchi",
    "O'zbekiston",
    "Ohangaron",
    "Olimkent",
    "Olmaliq",
    "Olmazor (Chinoz tumani)",
    "Olot",
    "Oltiariq",
    "Oltinariq",
    "Oltinko'l",
    "Oqmang'it",
    "Oqoltin",
    "Oqqo'rg'on",
    "Oqtosh",
    "Ozod Vatan (Muzrobod tumani)",
    "Parchanxas",
    "Pargos",
    "Parkent",
    "Paxta (Chinoz tumani)",
    "Paxtachi",
    "Paxtakor",
    "Paxtaobod",
    "Paxtaobod (Sardoba tumani)",
    "Paxtazor",
    "Payariq",
    "Payshanba",
    "Pishagar",
    "Piskent",
    "Pitnak",
    "Pop",
    "Povulgon",
    "Poytug'",
    "Pushmon",
    "Qahramon",
    "Qamashi",
    "Qanliko'l",
    "Qaqir",
    "Qaravul",
    "Qarshi",
    "Qashqari",
    "Qatartol",
    "Qibray",
    "Qiziltepa",
    "Qo'g'ali",
    "Qo'ng'irot",
    "Qo'qon",
    "Qo'qonboy",
    "Qo'rg'oncha",
    "Qo'rg'ontepa",
    "Qo'shkupir",
    "Qo'shqo'rg'on",
    "Qo'shrobod",
    "Qo'shtepa",
    "Qora Xitoy",
    "Qoraboy",
    "Qorako'l",
    "Qoranko'l",
    "Qorao'zak",
    "Qoraqo'yli",
    "Qoraqushchi",
    "Qoraqushxona",
    "Qorashina",
    "Qorasuv",
    "Qorasuv (Qo'rg'ontepa tumani)",
    "Qorayantoq",
    "Qorovulbozor",
    "Qosh Yog'och",
    "Quduqcha",
    "Qumariqobod",
    "Qumqo'rg'on",
    "Qurama (Oltinsoy tumani)",
    "Qurbonov",
    "Quva",
    "Quvasoy",
    "Quyaboshi",
    "Rapqon",
    "Rishton",
    "Romitan",
    "Rovot",
    "Sabzikor",
    "Salar",
    "Samarqand",
    "Samarqandquduq",
    "Sanam",
    "Sang",
    "Sarbozor",
    "Sardoba",
    "Sariasiya",
    "Sarik (Qiziriq tumani)",
    "Saritepa",
    "Sasbaka",
    "Sayxun",
    "Shahrisabz",
    "Shahrixon",
    "Shamaton",
    "Shampan",
    "Sherobod",
    "Shirin",
    "Sho'ralisoy",
    "Sho'rchi",
    "Shodlik",
    "Shodlik (Oqoltin tumani)",
    "Shofirkon",
    "Shoyimbek",
    "Shumanay",
    "Shоvоt",
    "Sijjak",
    "Sirdaryo",
    "So'fon",
    "So'lti",
    "Sohibkor",
    "Sohil",
    "Soyliq",
    "Sukok",
    "Sulton Segizboyev",
    "Sutkibuloq",
    "Talkok",
    "Taxiatosh",
    "Taxtako'pir",
    "Teraktagi",
    "Termez",
    "Timiryazev",
    "Tinchlik",
    "To'qboy",
    "To'raqo'rg'on",
    "To'rtko'l",
    "Toshbuloq",
    "Toshkent",
    "Toshloq",
    "Toshloq (Qiyichirchiq tumani)",
    "Toyloq",
    "Turkmen",
    "Tuyabo'g'iz",
    "Uchko'prik",
    "Uchqizil",
    "Uchqo'rg'on",
    "Uchquduq",
    "Uchtepa",
    "Ulug'bek",
    "Umar",
    "Unqo'rg'on",
    "Unxayat",
    "Uramas",
    "Urganch",
    "Urgut",
    "Usmat",
    "Usmon Nosir",
    "Uychi",
    "Uyrat",
    "Uzun",
    "Vobkent",
    "Vodil",
    "Xalkobod",
    "Xalkobod (Yangiyo'l tumani)",
    "Xalkobod (Kegayli tumani)",
    "Xanka",
    "Xaqqulobod",
    "Xazarasp",
    "Xitoyan",
    "Xiva",
    "Xo'ja Yaqshba",
    "Xo'jaobod",
    "Xo'jarabot",
    "Xo'jasoat",
    "Xo'jayli",
    "Xo'jikent (Bo'stonliq tumani)",
    "Xonbandi",
    "Xonobod",
    "Xonziq",
    "Xorkash",
    "Xos",
    "Xovos",
    "Xusnobod",
    "Yakkabog'",
    "Yallama",
    "Yangi Chinoz (Chinoz tumani)",
    "Yangi Marg'ilon",
    "Yangi Mirishkar",
    "Yangi Nishon",
    "YangiHayot (Qiyichirchiq tumani)",
    "Yangiarik",
    "Yangibozor",
    "Yangibozor (Peshku tumani)",
    "Yangibоzоr (Yangibоzоr tumani)",
    "Yangiobod",
    "Yangiobod (Bo'ka tumani)",
    "Yangiovul",
    "Yangiqo'rg'on",
    "Yangirabat",
    "Yangiyer",
    "Yangiyo'l",
    "Yarkin",
    "Yaypan",
    "Yom",
    "Yozyovon",
    "Yuqori Bachqir",
    "Yuqori Valik",
    "Zafar",
    "Zafarobod",
    "Zafarobod (Konimex tumani)",
    "Zangiota",
    "Zarafshon",
    "Zarbdor",
    "Zarkent",
    "Zavrok",
    "Ziyodin",
    "Zomin",
    "Аyvalik"
]

const mahsulotKategoriya = [

    "Elektronika",
    "Maishiy texnika",
    "Kiyimlar",
    "Oyoq kiyimlari",
    "Aksessuarlar",
    "Go'zallik va g'amxo'rlik",
    "Salomatlik",
    "Uy-ro'zg'or buyumlari",
];

const catalogKategoriya = [
    {
        id: 2,
        img: "/icons/uzum.uz-elektronika.svg",
        title: "Elektronika",
        content: [
            {
                title: "Smartfonlar va telefonlar"
            }
        ]
    },
    {
        id: 3,
        img: "/icons/uzumuzum.uz-maishey-texnika.svg",
        title: "Maishiy texnika",
        content: ""
    },
    {
        id: 4,
        img: "/icons/maishiy_texnika.svg",
        title: "Kiyim",
        content: ""
    },
    {
        id: 5,
        img: "/icons/elektronika.svg",
        title: "Poyabzallar",
        content: ""
    }
    , {
        id: 6,
        img: "/icons/uzum.uz-elektronika.svg.svg",
        title: "Aksessuarlar",
        content: ""
    },
    {
        id: 7,
        img: "/icons/guzallik.svg",
        title: "Go'zallik va parvarish",
        content: ""
    },
    {
        id: 8,
        img: "/icons/salomatlik.svg",
        title: "Salomatlik",
        content: [
            {},
        ]
    },
    {
        id: 9,
        img: "/icons/uy-qurilish.svg",
        title: "uy-ro'zg'or buyumlari",
        content: ""
    },
    {
        id: 10,
        img: "/icons/qurilish-va-tamirlash.svg",
        title: "Qurilish va ta'mirlash",
        content: ""
    },
    {
        id: 11,
        img: "/icons/autotavar.svg",
        title: "Avtotovarlar",
        content: ""
    },
    {
        id: 12,
        img: "/icons/bolalartovarlari.svg",
        title: "Bolalar tovarlari",
        content: []
    },
    {
        id: 13,
        img: "/icons/hobbi.svg",
        title: "Xobbi va ijod",
        content: []
    },
    {
        id: 21,
        img: "/icons/sport.svg",
        title: "Sport va hordiq",
        content: []
    },
    {
        id: 14,
        img: "/icons/oziq-ovqat.svg",
        title: "Oziq-ovqat mahsulotlari",
        content: []
    },
    {
        id: 15,
        img: "/icons/kimyoviy.svg",
        title: "Maishiy kimyoviy moddalar",
        content: []
    },
    {
        id: 16,
        img: "/icons/kanselyara.svg",
        title: "Kanselyariya tovarlari",
        content: []
    },
    {
        id: 17,
        img: "/icons/hayvonlar.svg",
        title: "Hayvonlar uchun tovarlar",
        content: []
    },
    {
        id: 18,
        img: "/icons/kitoblar.svg",
        title: "Kitoblar",
        content: []
    },
    {
        id: 19,
        img: "/icons/bog.svg",
        title: "Dacha, Bog' va tomarqa",
        content: []
    },
    {
        id: 20,
        img: "/icons/salomatlik.svg",
        title: "Reabilitatsiya uchun subsidiyalangan mahsulotlar"
    }
]

const sliderImages = [
    "https://images.uzum.uz/d0dkfd0n274j5sclnom0/main_page_banner.jpg",
    "https://images.uzum.uz/d049tutpb7f46s8834ug/main_page_banner.jpg",
    "https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg",
    "https://images.uzum.uz/d0ddtc0n274j5scll7v0/main_page_banner.jpg",
    "https://images.uzum.uz/d07o9rdpb7f46s88qkdg/main_page_banner.jpg",
    "https://images.uzum.uz/d03ipami4n37npapm39g/main_page_banner.jpg",
    "https://images.uzum.uz/d0cp5bojsv1iusmhnu90/main_page_banner.jpg",
    "https://images.uzum.uz/d0cs05dpb7f9p3nfg2bg/main_page_banner.jpg",
    "https://images.uzum.uz/cv4o265pb7f9qcng1frg/main_page_banner.jpg",
    "https://images.uzum.uz/d03ipsdpb7f46s87tj2g/main_page_banner.jpg",
    "https://images.uzum.uz/cvqaspmi4n37npankdg0/main_page_banner.jpg",
    "https://images.uzum.uz/cvc2fjbvgbkm5ehkfu70/main_page_banner.jpg",
    "https://images.uzum.uz/d0cp33gjsv1iusmhntt0/main_page_banner.jpg",
    "https://images.uzum.uz/d03iqdk7fd1idpht5ne0/main_page_banner.jpg",
    "https://images.uzum.uz/d08dgjtpb7f46s88vir0/main_page_banner.jpg",
    "https://images.uzum.uz/d07nnrmf4hvqhbr3vr2g/main_page_banner.jpg",
    "https://images.uzum.uz/d0cr9b0jsv1iusmhoj5g/main_page_banner.jpg",
    "https://images.uzum.uz/d0ctaii7s4fo7mq81ckg/main_page_banner.jpg",
    "https://images.uzum.uz/d0e5a6on274j5sclr0g0/main_page_banner.jpg",
    "https://images.uzum.uz/d07mq6lpb7f46s88q100/main_page_banner.jpg",
    "https://images.uzum.uz/cvqbgqs7fd1p445rop40/main_page_banner.jpg",
    "https://images.uzum.uz/d0cpqcdpb7f9p3nffbdg/main_page_banner.jpg",
    "https://images.uzum.uz/d0d610r3uvph509t1g40/main_page_banner.jpg",
    "https://images.uzum.uz/d0dir633uvph509t3nn0/main_page_banner.jpg",
];

const fourtProduct = [
    {
        id: 1,
        url: "https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b",
        title: "Onalar va bolalar uchun",
    },
    {
        id: 2,
        url: "https://static.uzum.uz/static/promo_images/65832182-a412-4676-994d-4d0ff4083253",
        title: "Arzon narxlar kafolati",
    },
    {
        id: 3,
        url: "https://static.uzum.uz/static/promo_images/bd2c8d3a-7488-4b12-84f8-0a816bc4a359",
        title: "Zamonaviy bozor",
    },
    {
        id: 4,
        url: "https://static.uzum.uz/static/promo_images/a98e3eef-162f-47b1-b8d8-f6253393bd95",
        title: "Hafta tovarlari",
    },
];

const products = [
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.5,
        "reviews": 5410,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.6,
        "reviews": 7703,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 23012
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 2047,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 20242
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.5,
        "reviews": 2210,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 5343,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 5262,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 15990,
        "monthlyPrice": 1332,
        "rating": 4.7,
        "reviews": 1204,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 5.0,
        "reviews": 6429,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 19708
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.7,
        "reviews": 1442,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 29387
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.6,
        "reviews": 6513,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.9,
        "reviews": 829,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 32948
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.5,
        "reviews": 737,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 25112
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.7,
        "reviews": 2147,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 41098
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.9,
        "reviews": 7693,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 34025
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18900,
        "monthlyPrice": 1890,
        "rating": 4.7,
        "reviews": 669,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29738
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 5.0,
        "reviews": 670,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 33647
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.9,
        "reviews": 3120,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 33519
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 22990,
        "monthlyPrice": 2299,
        "rating": 4.5,
        "reviews": 6247,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 33705
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.9,
        "reviews": 3689,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 29883
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.7,
        "reviews": 6222,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.8,
        "reviews": 1637,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 2287,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.5,
        "reviews": 1960,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 31754
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 1687,
        "rating": 4.7,
        "reviews": 6683,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 36676
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.8,
        "reviews": 462,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.9,
        "reviews": 4875,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 28703
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.6,
        "reviews": 232,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.9,
        "reviews": 5838,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 34112
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 4752,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 4.9,
        "reviews": 4029,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 1516,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 5.0,
        "reviews": 2530,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.8,
        "reviews": 1977,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 25109
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.9,
        "reviews": 1675,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.9,
        "reviews": 2070,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 5.0,
        "reviews": 5719,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 27037
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.5,
        "reviews": 2082,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 39752
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.5,
        "reviews": 4001,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 34192
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.6,
        "reviews": 1736,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 26255
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 5.0,
        "reviews": 1652,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 30509
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.6,
        "reviews": 6673,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 21536
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 31990,
        "monthlyPrice": 3199,
        "rating": 4.8,
        "reviews": 4819,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 41415
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.6,
        "reviews": 7553,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 5.0,
        "reviews": 7974,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 29248
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.9,
        "reviews": 7701,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 28951
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.9,
        "reviews": 5530,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.6,
        "reviews": 4562,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.9,
        "reviews": 2074,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 29658
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.9,
        "reviews": 6555,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 31546
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.6,
        "reviews": 355,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 35041
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.9,
        "reviews": 6654,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 37291
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.7,
        "reviews": 3287,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 41815
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.6,
        "reviews": 1292,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.7,
        "reviews": 834,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.9,
        "reviews": 1475,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17900,
        "monthlyPrice": 1279,
        "rating": 4.7,
        "reviews": 4888,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 21990,
        "monthlyPrice": 1571,
        "rating": 4.7,
        "reviews": 7663,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 2332,
        "rating": 4.9,
        "reviews": 761,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.7,
        "reviews": 5545,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 29463
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.8,
        "reviews": 6299,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 16887
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 5323,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 33782
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.9,
        "reviews": 2559,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 32939
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.6,
        "reviews": 2576,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 4.9,
        "reviews": 1063,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 15244
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.9,
        "reviews": 5045,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 1733,
        "rating": 4.7,
        "reviews": 5517,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 6422,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 17075
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 4.7,
        "reviews": 7405,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 32585
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 4.5,
        "reviews": 5815,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 5.0,
        "reviews": 2226,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 4903,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 5.0,
        "reviews": 4217,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 25851
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 27990,
        "monthlyPrice": 1866,
        "rating": 4.9,
        "reviews": 6888,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 36495
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 5.0,
        "reviews": 7518,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 5.0,
        "reviews": 6301,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.7,
        "reviews": 342,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.8,
        "reviews": 6417,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 29640
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 1799,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 1824,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 35062
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1642,
        "rating": 4.5,
        "reviews": 7458,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 29920
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.9,
        "reviews": 3093,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 30804
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.8,
        "reviews": 6698,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.8,
        "reviews": 3044,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.6,
        "reviews": 4756,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 21487
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 1138,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 2363,
        "rating": 5.0,
        "reviews": 5335,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 890,
        "rating": 4.8,
        "reviews": 4921,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 1699,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 5551,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.9,
        "reviews": 5132,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 31775
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.9,
        "reviews": 2417,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 22431
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.8,
        "reviews": 7463,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 28626
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.9,
        "reviews": 6828,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 37481
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 5.0,
        "reviews": 2047,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 27112
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 25990,
        "monthlyPrice": 2363,
        "rating": 4.7,
        "reviews": 3983,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 31139
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.8,
        "reviews": 6425,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 5.0,
        "reviews": 3764,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.9,
        "reviews": 7438,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 30309
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.9,
        "reviews": 1033,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 40664
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.7,
        "reviews": 6734,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 23829
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.6,
        "reviews": 2636,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 33848
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.9,
        "reviews": 3045,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.6,
        "reviews": 215,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 35854
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.9,
        "reviews": 1380,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.5,
        "reviews": 5391,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29450
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.9,
        "reviews": 4608,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.8,
        "reviews": 2171,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 32475
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.8,
        "reviews": 7684,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.8,
        "reviews": 7333,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 32522
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 5.0,
        "reviews": 6719,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 27835
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 5.0,
        "reviews": 411,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.5,
        "reviews": 1161,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.7,
        "reviews": 656,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.5,
        "reviews": 4381,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 24037
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.9,
        "reviews": 4856,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.6,
        "reviews": 2999,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 15600
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.9,
        "reviews": 6361,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 30190
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.5,
        "reviews": 4969,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.7,
        "reviews": 3558,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 28809
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.5,
        "reviews": 6778,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 27790
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.7,
        "reviews": 1982,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.8,
        "reviews": 5312,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 4.8,
        "reviews": 1353,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 32532
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.7,
        "reviews": 3476,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.8,
        "reviews": 1737,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 45258
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.7,
        "reviews": 6843,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.7,
        "reviews": 4254,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 45463
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.9,
        "reviews": 1712,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 46824
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.6,
        "reviews": 7788,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 31508
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.8,
        "reviews": 1598,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 41342
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.8,
        "reviews": 4548,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 22990,
        "monthlyPrice": 2299,
        "rating": 4.8,
        "reviews": 7143,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 32980
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.8,
        "reviews": 475,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 1925,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 27448
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.9,
        "reviews": 2960,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 25364
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 20990,
        "monthlyPrice": 2099,
        "rating": 4.9,
        "reviews": 4695,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 5840,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 3079,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.7,
        "reviews": 3830,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 31854
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.5,
        "reviews": 4205,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 30958
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.8,
        "reviews": 3799,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1279,
        "rating": 4.6,
        "reviews": 7986,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 27237
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.7,
        "reviews": 2524,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 856,
        "rating": 4.8,
        "reviews": 2038,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 32990,
        "monthlyPrice": 2199,
        "rating": 4.5,
        "reviews": 7894,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.8,
        "reviews": 1125,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 39576
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1916,
        "rating": 4.8,
        "reviews": 678,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 36458
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.6,
        "reviews": 6753,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 25301
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.7,
        "reviews": 3336,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 28065
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.7,
        "reviews": 5868,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.7,
        "reviews": 2855,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 38369
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.6,
        "reviews": 3649,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.9,
        "reviews": 1176,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.5,
        "reviews": 1661,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 18048
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 3581,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29745
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.9,
        "reviews": 6065,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 37246
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 4374,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 30498
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.8,
        "reviews": 546,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.9,
        "reviews": 1356,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.8,
        "reviews": 3280,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 18542
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 3700,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.8,
        "reviews": 5857,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 31995
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.5,
        "reviews": 5370,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 825,
        "rating": 4.9,
        "reviews": 1648,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 5.0,
        "reviews": 6394,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 30517
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 14990,
        "monthlyPrice": 1363,
        "rating": 4.6,
        "reviews": 6988,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 28224
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 4.7,
        "reviews": 6456,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.6,
        "reviews": 1166,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 16432
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.9,
        "reviews": 3527,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 23594
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.7,
        "reviews": 6456,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 25496
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 5.0,
        "reviews": 1321,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 27156
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.8,
        "reviews": 332,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38484
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.8,
        "reviews": 791,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 35176
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.5,
        "reviews": 494,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 37661
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.7,
        "reviews": 3199,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29241
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 890,
        "rating": 4.8,
        "reviews": 3741,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.9,
        "reviews": 2866,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 5.0,
        "reviews": 1683,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 36090
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 4.8,
        "reviews": 2933,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 3167,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 32182
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 7409,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.5,
        "reviews": 162,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.7,
        "reviews": 5521,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 35245
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.9,
        "reviews": 4326,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 33108
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.6,
        "reviews": 867,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 39736
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.5,
        "reviews": 7342,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.7,
        "reviews": 6553,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 22414
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.8,
        "reviews": 7350,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 33432
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.6,
        "reviews": 3412,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 41461
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.6,
        "reviews": 4265,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.9,
        "reviews": 4636,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.8,
        "reviews": 7459,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.7,
        "reviews": 6222,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.6,
        "reviews": 2158,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.7,
        "reviews": 6293,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.6,
        "reviews": 7919,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 18188
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.5,
        "reviews": 842,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 30507
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.9,
        "reviews": 2226,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.7,
        "reviews": 1462,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 38522
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.6,
        "reviews": 5106,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 9900,
        "monthlyPrice": 660,
        "rating": 4.6,
        "reviews": 4783,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.9,
        "reviews": 5703,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 7251,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 31306
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 5.0,
        "reviews": 7199,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.9,
        "reviews": 4567,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 32810
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 14990,
        "monthlyPrice": 1363,
        "rating": 4.5,
        "reviews": 5075,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 23344
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.6,
        "reviews": 5373,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 34130
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.6,
        "reviews": 4319,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 33612
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.5,
        "reviews": 5349,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 28125
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 4.8,
        "reviews": 468,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.6,
        "reviews": 3158,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.6,
        "reviews": 7206,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 30869
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 1352,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 30621
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 2199,
        "rating": 4.8,
        "reviews": 3067,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 42486
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 744,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 37394
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 1733,
        "rating": 5.0,
        "reviews": 5250,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 35394
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 19990,
        "monthlyPrice": 1428,
        "rating": 4.6,
        "reviews": 2931,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.5,
        "reviews": 5269,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.5,
        "reviews": 1020,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 6941,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 29714
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.7,
        "reviews": 4190,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 5.0,
        "reviews": 6574,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 22899
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 2312,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 5705,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.8,
        "reviews": 756,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 32918
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.9,
        "reviews": 1727,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.8,
        "reviews": 1015,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 26246
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.5,
        "reviews": 6332,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 38247
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.9,
        "reviews": 948,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 33137
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 5.0,
        "reviews": 5430,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.7,
        "reviews": 5371,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 34163
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.8,
        "reviews": 7055,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 32478
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 4.9,
        "reviews": 3235,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.6,
        "reviews": 6310,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.6,
        "reviews": 1597,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 28648
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 5.0,
        "reviews": 6233,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 35166
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.9,
        "reviews": 342,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.8,
        "reviews": 5006,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.6,
        "reviews": 3288,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 33200
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 2696,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 26094
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1999,
        "rating": 4.6,
        "reviews": 4109,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 31965
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.6,
        "reviews": 4003,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 5.0,
        "reviews": 1091,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 4324,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 29055
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.5,
        "reviews": 5669,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29243
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.6,
        "reviews": 4749,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.9,
        "reviews": 3958,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.8,
        "reviews": 4022,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 31840
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.5,
        "reviews": 6045,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 33608
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.9,
        "reviews": 5182,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 40879
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.9,
        "reviews": 4216,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.8,
        "reviews": 907,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.9,
        "reviews": 2889,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 5.0,
        "reviews": 2656,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.7,
        "reviews": 2262,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.6,
        "reviews": 3390,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 5.0,
        "reviews": 747,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.6,
        "reviews": 972,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 31222
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.6,
        "reviews": 4778,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 29319
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 5.0,
        "reviews": 501,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 29701
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.7,
        "reviews": 1637,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 31704
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 5.0,
        "reviews": 5143,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.6,
        "reviews": 4192,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 4.7,
        "reviews": 7553,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 23769
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.7,
        "reviews": 4957,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 35561
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 4.8,
        "reviews": 3510,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 29919
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.6,
        "reviews": 3912,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 32238
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.6,
        "reviews": 4824,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 45198
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.6,
        "reviews": 4866,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 36685
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.9,
        "reviews": 2346,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.8,
        "reviews": 7108,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 24990,
        "monthlyPrice": 2499,
        "rating": 4.8,
        "reviews": 3631,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 33209
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.9,
        "reviews": 7312,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 31642
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 25990,
        "monthlyPrice": 2363,
        "rating": 5.0,
        "reviews": 7621,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 38669
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 25990,
        "monthlyPrice": 1733,
        "rating": 4.5,
        "reviews": 2323,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 36276
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 2699,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 30251
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.8,
        "reviews": 5674,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.8,
        "reviews": 376,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.9,
        "reviews": 1085,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 32369
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17900,
        "monthlyPrice": 1279,
        "rating": 5.0,
        "reviews": 543,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2908,
        "rating": 4.6,
        "reviews": 6700,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 40479
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 31990,
        "monthlyPrice": 3199,
        "rating": 4.9,
        "reviews": 5675,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 5.0,
        "reviews": 5082,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 39988
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 25990,
        "monthlyPrice": 2363,
        "rating": 4.9,
        "reviews": 227,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.6,
        "reviews": 6103,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 31702
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 2065,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 38306
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.7,
        "reviews": 6536,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.5,
        "reviews": 3753,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 4.6,
        "reviews": 5943,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1642,
        "rating": 4.8,
        "reviews": 1613,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 1495,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 31303
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.9,
        "reviews": 5518,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.7,
        "reviews": 1278,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.8,
        "reviews": 7286,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.8,
        "reviews": 5648,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 35595
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.9,
        "reviews": 7988,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.8,
        "reviews": 1053,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.7,
        "reviews": 394,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 33528
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 4.7,
        "reviews": 3061,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 24955
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.9,
        "reviews": 2601,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 1454,
        "rating": 4.6,
        "reviews": 3335,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 26232
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.6,
        "reviews": 7152,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38509
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.9,
        "reviews": 7369,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 16792
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.8,
        "reviews": 4438,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 18993
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.8,
        "reviews": 4701,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 25772
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.6,
        "reviews": 6844,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.6,
        "reviews": 3900,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.7,
        "reviews": 4085,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 35094
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 5.0,
        "reviews": 7912,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.6,
        "reviews": 5570,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 368,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 5.0,
        "reviews": 3867,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.7,
        "reviews": 5360,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 22829
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 5.0,
        "reviews": 3843,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 21737
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.6,
        "reviews": 3352,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 16301
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.7,
        "reviews": 6680,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.6,
        "reviews": 4686,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 26578
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.9,
        "reviews": 3578,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 21552
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.8,
        "reviews": 2405,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 5.0,
        "reviews": 2498,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 47987
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 27990,
        "monthlyPrice": 2332,
        "rating": 4.9,
        "reviews": 180,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.6,
        "reviews": 5413,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.7,
        "reviews": 4637,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 20561
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 4982,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 24382
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.9,
        "reviews": 213,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 28376
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 2908,
        "rating": 4.5,
        "reviews": 7947,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1124,
        "rating": 4.7,
        "reviews": 3053,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.9,
        "reviews": 7852,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1666,
        "rating": 4.8,
        "reviews": 655,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 31370
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.7,
        "reviews": 7689,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 5.0,
        "reviews": 4796,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 5.0,
        "reviews": 1019,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38964
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 20990,
        "monthlyPrice": 2099,
        "rating": 4.8,
        "reviews": 4679,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 34168
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.6,
        "reviews": 5759,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 26990,
        "monthlyPrice": 1687,
        "rating": 4.9,
        "reviews": 5194,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 36959
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.9,
        "reviews": 2275,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 27690
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.6,
        "reviews": 1013,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 33878
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.5,
        "reviews": 4746,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 37238
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 2493,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.6,
        "reviews": 3889,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 5.0,
        "reviews": 640,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 29844
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 5.0,
        "reviews": 1042,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.7,
        "reviews": 632,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 46396
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 5.0,
        "reviews": 4261,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.5,
        "reviews": 7970,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 28421
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.9,
        "reviews": 1161,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 43438
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 5.0,
        "reviews": 2342,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 35357
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.5,
        "reviews": 257,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 18539
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 4525,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 24276
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.6,
        "reviews": 5204,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 27918
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.6,
        "reviews": 4249,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 24849
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.8,
        "reviews": 4766,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.9,
        "reviews": 6294,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 39706
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 407,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 40174
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 4.6,
        "reviews": 6377,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 25070
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.7,
        "reviews": 6837,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 27457
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.6,
        "reviews": 4372,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 2499,
        "rating": 4.7,
        "reviews": 5111,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 38634
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 5.0,
        "reviews": 1896,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 43352
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.6,
        "reviews": 3329,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 33255
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.9,
        "reviews": 746,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 22517
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.9,
        "reviews": 4956,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.6,
        "reviews": 380,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 31990,
        "monthlyPrice": 1999,
        "rating": 5.0,
        "reviews": 2221,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.7,
        "reviews": 7363,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 35407
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.9,
        "reviews": 4253,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.7,
        "reviews": 535,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 28527
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.9,
        "reviews": 6917,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 2332,
        "rating": 4.9,
        "reviews": 4847,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 41912
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 5.0,
        "reviews": 2885,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.5,
        "reviews": 5884,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 32501
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.8,
        "reviews": 5520,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 30866
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.8,
        "reviews": 2102,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 22990,
        "monthlyPrice": 1642,
        "rating": 4.6,
        "reviews": 3334,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1635,
        "rating": 4.7,
        "reviews": 1523,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.8,
        "reviews": 7219,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 39789
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.8,
        "reviews": 7017,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.6,
        "reviews": 2867,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 19956
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.7,
        "reviews": 1088,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 33263
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.9,
        "reviews": 6421,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 23912
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.5,
        "reviews": 4271,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 1218,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 37058
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 20990,
        "monthlyPrice": 1615,
        "rating": 4.9,
        "reviews": 5394,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.7,
        "reviews": 4725,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 39105
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.9,
        "reviews": 5810,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 20990,
        "monthlyPrice": 2099,
        "rating": 5.0,
        "reviews": 4476,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.9,
        "reviews": 3619,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 27923
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 9900,
        "monthlyPrice": 825,
        "rating": 4.8,
        "reviews": 4820,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.7,
        "reviews": 1050,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 32488
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.6,
        "reviews": 6973,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 38209
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.8,
        "reviews": 7279,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.6,
        "reviews": 7986,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 24023
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 1158,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 30124
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.8,
        "reviews": 2187,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 39248
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 24990,
        "monthlyPrice": 2499,
        "rating": 4.7,
        "reviews": 6338,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 5.0,
        "reviews": 6917,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 30518
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.8,
        "reviews": 3538,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 28524
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 5.0,
        "reviews": 6431,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.6,
        "reviews": 1722,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 30873
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.7,
        "reviews": 2642,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 23309
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.6,
        "reviews": 4119,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 31091
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 25990,
        "monthlyPrice": 1733,
        "rating": 4.9,
        "reviews": 7383,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.7,
        "reviews": 2907,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 31067
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.6,
        "reviews": 4412,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 19990,
        "monthlyPrice": 1666,
        "rating": 4.7,
        "reviews": 6327,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.7,
        "reviews": 6897,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.6,
        "reviews": 5852,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 23816
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.6,
        "reviews": 1380,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 38831
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.9,
        "reviews": 5333,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 32990,
        "monthlyPrice": 2749,
        "rating": 4.7,
        "reviews": 6588,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 47390
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 5.0,
        "reviews": 6849,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 24385
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 4.7,
        "reviews": 3018,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.5,
        "reviews": 4246,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.8,
        "reviews": 6761,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 28573
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 4928,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 3833,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 5005,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.6,
        "reviews": 5423,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 40730
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 32990,
        "monthlyPrice": 2538,
        "rating": 4.9,
        "reviews": 3321,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.6,
        "reviews": 4269,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 33664
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 5.0,
        "reviews": 7741,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.6,
        "reviews": 7133,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.7,
        "reviews": 5815,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 24417
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 4.5,
        "reviews": 7014,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 36800
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18990,
        "monthlyPrice": 1356,
        "rating": 4.6,
        "reviews": 6690,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.8,
        "reviews": 4329,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 35764
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.8,
        "reviews": 4233,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 39229
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.9,
        "reviews": 3856,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.7,
        "reviews": 6719,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.8,
        "reviews": 920,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 26990,
        "monthlyPrice": 1687,
        "rating": 4.9,
        "reviews": 4861,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 33771
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 4.7,
        "reviews": 4664,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 27370
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 4.8,
        "reviews": 6462,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 37987
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.7,
        "reviews": 1254,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 17956
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 6873,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 40963
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.9,
        "reviews": 5426,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 30220
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.5,
        "reviews": 1989,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 28257
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.9,
        "reviews": 7513,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 30210
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.7,
        "reviews": 7916,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.9,
        "reviews": 3269,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 4.5,
        "reviews": 6455,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 33073
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1332,
        "rating": 4.9,
        "reviews": 4166,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 29017
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.5,
        "reviews": 2484,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1332,
        "rating": 5.0,
        "reviews": 5890,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 4.8,
        "reviews": 5764,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 19847
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.8,
        "reviews": 5283,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 17082
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.7,
        "reviews": 3708,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 17867
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.7,
        "reviews": 2879,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.9,
        "reviews": 5340,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 29630
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1642,
        "rating": 4.8,
        "reviews": 1579,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 29752
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 856,
        "rating": 4.6,
        "reviews": 1817,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.7,
        "reviews": 980,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 23931
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.9,
        "reviews": 5699,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.5,
        "reviews": 4493,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 31507
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.8,
        "reviews": 1350,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 3199,
        "rating": 4.6,
        "reviews": 4004,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.8,
        "reviews": 4737,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 5.0,
        "reviews": 7338,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 28954
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 4.9,
        "reviews": 279,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 31913
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17990,
        "monthlyPrice": 1124,
        "rating": 4.6,
        "reviews": 301,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 30908
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.7,
        "reviews": 1332,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 32933
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.7,
        "reviews": 5273,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.5,
        "reviews": 3862,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.6,
        "reviews": 7846,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.7,
        "reviews": 2266,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.6,
        "reviews": 6822,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 29075
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.6,
        "reviews": 6971,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 17034
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.9,
        "reviews": 2859,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 37252
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.5,
        "reviews": 6986,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 38541
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 6966,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 26413
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.9,
        "reviews": 6391,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 42428
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 19990,
        "monthlyPrice": 1428,
        "rating": 4.9,
        "reviews": 1966,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 29819
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.7,
        "reviews": 5893,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 19167
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.8,
        "reviews": 7904,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 21389
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.7,
        "reviews": 2970,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 19353
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.9,
        "reviews": 2149,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 31152
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.7,
        "reviews": 2774,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 34327
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 4.7,
        "reviews": 7653,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 36756
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.8,
        "reviews": 4720,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 22025
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.8,
        "reviews": 5880,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 30309
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 5651,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 21547
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.6,
        "reviews": 7123,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38075
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.7,
        "reviews": 6314,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.8,
        "reviews": 6012,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 43932
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.7,
        "reviews": 1863,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 15249
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.8,
        "reviews": 3685,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 22410
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 890,
        "rating": 4.7,
        "reviews": 7779,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.9,
        "reviews": 7601,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 36069
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.7,
        "reviews": 663,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 27918
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 14990,
        "monthlyPrice": 1363,
        "rating": 4.8,
        "reviews": 337,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.6,
        "reviews": 4956,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 40283
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 5.0,
        "reviews": 2694,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 3765,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 5687,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.8,
        "reviews": 3423,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 37116
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.6,
        "reviews": 7703,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 32507
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1866,
        "rating": 4.8,
        "reviews": 2285,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 39996
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18900,
        "monthlyPrice": 1181,
        "rating": 4.5,
        "reviews": 1364,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 27629
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.6,
        "reviews": 7746,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 34744
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.7,
        "reviews": 6043,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 34699
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.6,
        "reviews": 3753,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 4.7,
        "reviews": 1823,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.7,
        "reviews": 6183,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 23963
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.6,
        "reviews": 4748,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.5,
        "reviews": 441,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 21590
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 4.9,
        "reviews": 290,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 26445
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.9,
        "reviews": 5574,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 33449
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 4.5,
        "reviews": 1701,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 23734
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.8,
        "reviews": 3714,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.6,
        "reviews": 4359,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.5,
        "reviews": 5862,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.7,
        "reviews": 7415,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 20183
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.8,
        "reviews": 1408,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.8,
        "reviews": 2076,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 5.0,
        "reviews": 573,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 33099
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.8,
        "reviews": 3021,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.9,
        "reviews": 2208,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 34846
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 19990,
        "monthlyPrice": 1666,
        "rating": 5.0,
        "reviews": 4985,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.5,
        "reviews": 5161,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.8,
        "reviews": 959,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.6,
        "reviews": 7162,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 20937
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.7,
        "reviews": 1045,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 29188
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.8,
        "reviews": 7801,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 36318
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 5.0,
        "reviews": 4991,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 26194
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 22990,
        "monthlyPrice": 1768,
        "rating": 4.6,
        "reviews": 6723,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.6,
        "reviews": 6221,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 34443
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.6,
        "reviews": 3011,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.5,
        "reviews": 6423,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.7,
        "reviews": 775,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 4.8,
        "reviews": 2646,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 25634
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.6,
        "reviews": 4284,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.8,
        "reviews": 3789,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.7,
        "reviews": 3402,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 33288
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.9,
        "reviews": 6443,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 24178
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.5,
        "reviews": 1183,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.7,
        "reviews": 3917,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.7,
        "reviews": 5384,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 45411
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.7,
        "reviews": 6747,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.8,
        "reviews": 4732,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 20526
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 20990,
        "monthlyPrice": 2099,
        "rating": 4.6,
        "reviews": 3353,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 26565
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.7,
        "reviews": 3909,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 43246
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.9,
        "reviews": 7749,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18900,
        "monthlyPrice": 1890,
        "rating": 4.5,
        "reviews": 4765,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17990,
        "monthlyPrice": 1124,
        "rating": 4.8,
        "reviews": 3310,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 23429
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1279,
        "rating": 5.0,
        "reviews": 188,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 24143
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.7,
        "reviews": 5090,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 385,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 34648
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.9,
        "reviews": 3485,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 32536
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 27990,
        "monthlyPrice": 2332,
        "rating": 4.7,
        "reviews": 7247,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 5.0,
        "reviews": 6110,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.7,
        "reviews": 3513,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 45862
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 22990,
        "monthlyPrice": 1768,
        "rating": 4.6,
        "reviews": 1584,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.8,
        "reviews": 3606,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18900,
        "monthlyPrice": 1890,
        "rating": 5.0,
        "reviews": 4493,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 23920
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.7,
        "reviews": 417,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.8,
        "reviews": 6514,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 38884
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 19990,
        "monthlyPrice": 1817,
        "rating": 4.7,
        "reviews": 1381,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.7,
        "reviews": 4637,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.8,
        "reviews": 1428,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 37127
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 856,
        "rating": 4.6,
        "reviews": 174,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.5,
        "reviews": 4825,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.9,
        "reviews": 2101,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 34172
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.8,
        "reviews": 5909,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 4.8,
        "reviews": 3231,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 37491
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.7,
        "reviews": 2414,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.9,
        "reviews": 4811,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.8,
        "reviews": 2884,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.5,
        "reviews": 4150,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.7,
        "reviews": 6372,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 660,
        "rating": 4.9,
        "reviews": 4582,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.8,
        "reviews": 4564,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 4.7,
        "reviews": 7015,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 26984
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 3579,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.6,
        "reviews": 298,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.8,
        "reviews": 1906,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 22171
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 3757,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1866,
        "rating": 4.5,
        "reviews": 587,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 42814
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 11990,
        "monthlyPrice": 922,
        "rating": 4.6,
        "reviews": 564,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.5,
        "reviews": 1709,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.6,
        "reviews": 2018,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 37424
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 9900,
        "monthlyPrice": 825,
        "rating": 4.9,
        "reviews": 3548,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 7440,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 26094
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.6,
        "reviews": 2156,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.8,
        "reviews": 5382,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 38101
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 2912,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 37045
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 32990,
        "monthlyPrice": 2749,
        "rating": 5.0,
        "reviews": 3371,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 38505
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 4.7,
        "reviews": 6943,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 1581,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 42669
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 7533,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.6,
        "reviews": 5194,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.9,
        "reviews": 4213,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.6,
        "reviews": 3979,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.6,
        "reviews": 1348,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 22990,
        "monthlyPrice": 2299,
        "rating": 4.8,
        "reviews": 1610,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.8,
        "reviews": 2194,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.7,
        "reviews": 1433,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 20293
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.7,
        "reviews": 6436,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.8,
        "reviews": 951,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 5.0,
        "reviews": 1221,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 31702
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 4.8,
        "reviews": 2236,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 25112
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.8,
        "reviews": 6899,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 37522
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 999,
        "rating": 4.9,
        "reviews": 315,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 22129
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 5.0,
        "reviews": 2118,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.9,
        "reviews": 4676,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.8,
        "reviews": 7183,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 39399
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 1204,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 34996
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.8,
        "reviews": 7331,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.9,
        "reviews": 2206,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.6,
        "reviews": 1875,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 17298
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.7,
        "reviews": 1664,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 29577
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 856,
        "rating": 5.0,
        "reviews": 426,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.8,
        "reviews": 1611,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.8,
        "reviews": 3847,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 4.5,
        "reviews": 5331,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.9,
        "reviews": 948,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 23812
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 5.0,
        "reviews": 7990,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.6,
        "reviews": 6269,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.9,
        "reviews": 5028,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.9,
        "reviews": 3277,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 24883
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1454,
        "rating": 5.0,
        "reviews": 6890,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 26367
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.6,
        "reviews": 2970,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 5.0,
        "reviews": 6771,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 2916,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 31590
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.8,
        "reviews": 3297,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.6,
        "reviews": 6852,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 15191
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.6,
        "reviews": 478,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 31327
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 5349,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.6,
        "reviews": 1412,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.8,
        "reviews": 5030,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.7,
        "reviews": 5399,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 32134
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 1090,
        "rating": 4.9,
        "reviews": 3398,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.8,
        "reviews": 820,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 29372
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 5.0,
        "reviews": 6213,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 31383
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 5.0,
        "reviews": 5202,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 15572
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.8,
        "reviews": 3543,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 20990,
        "monthlyPrice": 2099,
        "rating": 4.6,
        "reviews": 1612,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 5.0,
        "reviews": 4683,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 36995
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.8,
        "reviews": 7308,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 31293
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.8,
        "reviews": 833,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 29830
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.7,
        "reviews": 1333,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.6,
        "reviews": 800,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.5,
        "reviews": 7877,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 1687,
        "rating": 4.7,
        "reviews": 4986,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.6,
        "reviews": 3193,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 29139
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.6,
        "reviews": 1781,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 29596
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 19990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 6866,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 26315
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.8,
        "reviews": 5261,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 38142
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.8,
        "reviews": 6582,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 21859
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 5.0,
        "reviews": 7273,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 25549
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.7,
        "reviews": 3778,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.8,
        "reviews": 6072,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 4.9,
        "reviews": 6530,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.7,
        "reviews": 3324,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 2749,
        "rating": 4.6,
        "reviews": 1863,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.8,
        "reviews": 1923,
        "label": "",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.5,
        "reviews": 4498,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.7,
        "reviews": 922,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 34516
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.6,
        "reviews": 1796,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 35620
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.9,
        "reviews": 922,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 23857
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.7,
        "reviews": 1456,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 29354
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 5.0,
        "reviews": 3772,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.6,
        "reviews": 1664,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 31372
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.8,
        "reviews": 3602,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.5,
        "reviews": 1002,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.7,
        "reviews": 2830,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 41508
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.5,
        "reviews": 6804,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 36206
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.8,
        "reviews": 3461,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.6,
        "reviews": 739,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 4.6,
        "reviews": 7539,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.8,
        "reviews": 6055,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 21994
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.8,
        "reviews": 3661,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 22457
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 4857,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 5.0,
        "reviews": 1529,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 4.9,
        "reviews": 4642,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 35144
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 31990,
        "monthlyPrice": 2908,
        "rating": 4.5,
        "reviews": 3969,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 39053
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 1999,
        "rating": 4.5,
        "reviews": 2550,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17900,
        "monthlyPrice": 1627,
        "rating": 4.6,
        "reviews": 7851,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 32356
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 3596,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18900,
        "monthlyPrice": 1181,
        "rating": 4.6,
        "reviews": 7148,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 30591
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.8,
        "reviews": 6916,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2908,
        "rating": 4.6,
        "reviews": 2861,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 42705
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 622,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.7,
        "reviews": 986,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 41213
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 5.0,
        "reviews": 7504,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 25865
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.8,
        "reviews": 5399,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 1866,
        "rating": 4.9,
        "reviews": 7446,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 33703
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.6,
        "reviews": 4062,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 32733
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.7,
        "reviews": 4265,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1817,
        "rating": 4.9,
        "reviews": 2007,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 28178
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.6,
        "reviews": 1494,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 5.0,
        "reviews": 1934,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 4.7,
        "reviews": 1780,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.7,
        "reviews": 2350,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 26769
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 799,
        "rating": 5.0,
        "reviews": 4029,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 4.6,
        "reviews": 2326,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 4.6,
        "reviews": 6954,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 44419
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.7,
        "reviews": 6308,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 39548
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.5,
        "reviews": 5921,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 26990,
        "monthlyPrice": 2454,
        "rating": 5.0,
        "reviews": 2830,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 33044
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 2199,
        "rating": 4.7,
        "reviews": 1849,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 32084
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17990,
        "monthlyPrice": 1635,
        "rating": 4.9,
        "reviews": 2114,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 29105
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.9,
        "reviews": 2920,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 27208
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.9,
        "reviews": 1223,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 19654
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.7,
        "reviews": 1672,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 27311
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.8,
        "reviews": 5701,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 28842
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.5,
        "reviews": 4841,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.7,
        "reviews": 5851,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 31558
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.7,
        "reviews": 754,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 31767
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.7,
        "reviews": 595,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.5,
        "reviews": 5758,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 32990,
        "monthlyPrice": 2999,
        "rating": 4.7,
        "reviews": 4542,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 5.0,
        "reviews": 2031,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.6,
        "reviews": 4636,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 20990,
        "monthlyPrice": 1615,
        "rating": 4.8,
        "reviews": 392,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 883,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 32493
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.9,
        "reviews": 1299,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 42225
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.6,
        "reviews": 744,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 19990,
        "monthlyPrice": 1666,
        "rating": 4.8,
        "reviews": 4963,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.6,
        "reviews": 2144,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 38955
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.6,
        "reviews": 3257,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 3604,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.6,
        "reviews": 4303,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 11990,
        "monthlyPrice": 999,
        "rating": 4.8,
        "reviews": 5752,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 23058
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.9,
        "reviews": 4807,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.6,
        "reviews": 3521,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 32990,
        "monthlyPrice": 2749,
        "rating": 4.6,
        "reviews": 7415,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.5,
        "reviews": 5368,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1615,
        "rating": 4.8,
        "reviews": 2782,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.7,
        "reviews": 5207,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.6,
        "reviews": 1133,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 29697
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.6,
        "reviews": 578,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.8,
        "reviews": 4205,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 28702
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.9,
        "reviews": 1938,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.6,
        "reviews": 3469,
        "label": "Super narx",
        "image": "/images/floresan.jpg",
        "oldPrice": 23333
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.8,
        "reviews": 7757,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.7,
        "reviews": 4549,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 36704
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.8,
        "reviews": 7324,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.9,
        "reviews": 3590,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 34692
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 15990,
        "monthlyPrice": 1454,
        "rating": 4.8,
        "reviews": 1121,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 14990,
        "monthlyPrice": 1363,
        "rating": 4.7,
        "reviews": 2514,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 25990,
        "monthlyPrice": 1624,
        "rating": 4.6,
        "reviews": 5263,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 5.0,
        "reviews": 6408,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 27502
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.6,
        "reviews": 2633,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 291,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 37642
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 18900,
        "monthlyPrice": 1890,
        "rating": 4.7,
        "reviews": 4326,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 30010
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.8,
        "reviews": 3424,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 28427
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.7,
        "reviews": 4228,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 18386
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 22990,
        "monthlyPrice": 1916,
        "rating": 4.5,
        "reviews": 350,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.5,
        "reviews": 756,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 29579
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.6,
        "reviews": 5037,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18900,
        "monthlyPrice": 1454,
        "rating": 4.9,
        "reviews": 2467,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 4.7,
        "reviews": 4396,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.5,
        "reviews": 5842,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 32795
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 797,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 25257
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.7,
        "reviews": 6479,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 26662
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.5,
        "reviews": 369,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 4.8,
        "reviews": 2092,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 18277
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.5,
        "reviews": 6005,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 30746
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 4.6,
        "reviews": 3398,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 18775
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.5,
        "reviews": 577,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.9,
        "reviews": 3480,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18900,
        "monthlyPrice": 1181,
        "rating": 4.7,
        "reviews": 5568,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 25990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 1681,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 35858
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 21990,
        "monthlyPrice": 1571,
        "rating": 4.6,
        "reviews": 4927,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 31194
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.8,
        "reviews": 6148,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 32990,
        "monthlyPrice": 2538,
        "rating": 4.7,
        "reviews": 4901,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.6,
        "reviews": 2659,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 32018
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.8,
        "reviews": 4347,
        "label": "Original",
        "image": "/images/always.jpg",
        "oldPrice": 25881
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1428,
        "rating": 4.7,
        "reviews": 2053,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 34142
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 2332,
        "rating": 4.7,
        "reviews": 1816,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17990,
        "monthlyPrice": 1124,
        "rating": 4.6,
        "reviews": 6598,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 32891
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.6,
        "reviews": 7984,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.5,
        "reviews": 7233,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 21193
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.9,
        "reviews": 2994,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 30064
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.5,
        "reviews": 2140,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 26749
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 22990,
        "monthlyPrice": 1916,
        "rating": 4.8,
        "reviews": 3792,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1916,
        "rating": 4.7,
        "reviews": 6264,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 36183
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 32990,
        "monthlyPrice": 2749,
        "rating": 4.6,
        "reviews": 2341,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 42355
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.8,
        "reviews": 816,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 19990,
        "monthlyPrice": 1538,
        "rating": 4.5,
        "reviews": 6391,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.9,
        "reviews": 3680,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 27260
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1454,
        "rating": 4.6,
        "reviews": 2292,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.9,
        "reviews": 6861,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 30435
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 2538,
        "rating": 4.8,
        "reviews": 2524,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 42037
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.6,
        "reviews": 1591,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 636,
        "rating": 5.0,
        "reviews": 5939,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 26990,
        "monthlyPrice": 1687,
        "rating": 4.6,
        "reviews": 3285,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 36713
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.9,
        "reviews": 3098,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.9,
        "reviews": 1277,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 4.8,
        "reviews": 1336,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 33194
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 6719,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 38530
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.7,
        "reviews": 4155,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 26683
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 4.6,
        "reviews": 3809,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 25132
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.5,
        "reviews": 2842,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.7,
        "reviews": 4095,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 24982
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.8,
        "reviews": 5297,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 36131
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.7,
        "reviews": 7030,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 33981
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.6,
        "reviews": 6465,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2133,
        "rating": 4.6,
        "reviews": 164,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.5,
        "reviews": 6092,
        "label": "Super narx",
        "image": "/images/rexona.jpg",
        "oldPrice": 26782
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 4475,
        "label": "",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 30596
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.5,
        "reviews": 6270,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 31294
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.5,
        "reviews": 3376,
        "label": "Super narx",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 15990,
        "monthlyPrice": 1142,
        "rating": 4.7,
        "reviews": 6574,
        "label": "",
        "image": "/images/floresan.jpg",
        "oldPrice": 21047
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.9,
        "reviews": 4549,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 16761
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 890,
        "rating": 4.9,
        "reviews": 3675,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 31990,
        "monthlyPrice": 3199,
        "rating": 5.0,
        "reviews": 5525,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 37016
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 4.6,
        "reviews": 3672,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 38118
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 4.9,
        "reviews": 7351,
        "label": "Super narx",
        "image": "/images/loreal.jpg",
        "oldPrice": 26392
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.9,
        "reviews": 3341,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17990,
        "monthlyPrice": 1635,
        "rating": 4.9,
        "reviews": 7004,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 30046
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 4.6,
        "reviews": 648,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 5.0,
        "reviews": 2221,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.7,
        "reviews": 4213,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.6,
        "reviews": 459,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 33527
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 21990,
        "monthlyPrice": 1466,
        "rating": 4.7,
        "reviews": 872,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 5.0,
        "reviews": 7654,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 26643
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 4.6,
        "reviews": 3709,
        "label": "",
        "image": "/images/always.jpg",
        "oldPrice": 27765
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 4.9,
        "reviews": 3469,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 23353
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17900,
        "monthlyPrice": 1492,
        "rating": 4.7,
        "reviews": 5756,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 25072
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.9,
        "reviews": 3517,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 19990,
        "monthlyPrice": 1999,
        "rating": 4.6,
        "reviews": 5419,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 32303
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18900,
        "monthlyPrice": 1181,
        "rating": 4.6,
        "reviews": 1389,
        "label": "",
        "image": "/images/olivia.jpg",
        "oldPrice": 25623
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.6,
        "reviews": 2456,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.6,
        "reviews": 7812,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 20089
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 5.0,
        "reviews": 1426,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.6,
        "reviews": 894,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2076,
        "rating": 4.9,
        "reviews": 3862,
        "label": "Katta savdo",
        "image": "/images/always.jpg",
        "oldPrice": 38325
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 5.0,
        "reviews": 2869,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 30771
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 5.0,
        "reviews": 2960,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.7,
        "reviews": 4486,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.8,
        "reviews": 7493,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38560
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.9,
        "reviews": 2490,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 30839
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 32990,
        "monthlyPrice": 2356,
        "rating": 4.8,
        "reviews": 1542,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2799,
        "rating": 4.7,
        "reviews": 7879,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 33824
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17900,
        "monthlyPrice": 1279,
        "rating": 4.6,
        "reviews": 7753,
        "label": "",
        "image": "/images/dove.jpg",
        "oldPrice": 27780
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 5.0,
        "reviews": 3897,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg",
        "oldPrice": 35066
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 4.9,
        "reviews": 7123,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1499,
        "rating": 4.7,
        "reviews": 4780,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18900,
        "monthlyPrice": 1181,
        "rating": 4.9,
        "reviews": 6489,
        "label": "",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.7,
        "reviews": 5500,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 30141
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.8,
        "reviews": 6543,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.5,
        "reviews": 6480,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.5,
        "reviews": 463,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.7,
        "reviews": 4091,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.8,
        "reviews": 2782,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.8,
        "reviews": 840,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.7,
        "reviews": 5651,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 17900,
        "monthlyPrice": 1377,
        "rating": 4.5,
        "reviews": 3589,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 31990,
        "monthlyPrice": 2666,
        "rating": 5.0,
        "reviews": 1035,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 27990,
        "monthlyPrice": 1866,
        "rating": 4.6,
        "reviews": 6327,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 40829
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 24990,
        "monthlyPrice": 1562,
        "rating": 4.7,
        "reviews": 4340,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 36367
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 5.0,
        "reviews": 2099,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 30272
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18900,
        "monthlyPrice": 1350,
        "rating": 4.8,
        "reviews": 7666,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 6967,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 23990,
        "monthlyPrice": 2399,
        "rating": 4.7,
        "reviews": 4558,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.7,
        "reviews": 4100,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 26672
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.6,
        "reviews": 5228,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 1499,
        "rating": 4.9,
        "reviews": 406,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 38960
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 5.0,
        "reviews": 7804,
        "label": "Super narx",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2908,
        "rating": 5.0,
        "reviews": 5543,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 32990,
        "monthlyPrice": 2538,
        "rating": 4.5,
        "reviews": 7132,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 38022
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.9,
        "reviews": 7280,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 15997
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.5,
        "reviews": 2967,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 31990,
        "monthlyPrice": 1999,
        "rating": 5.0,
        "reviews": 7538,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.7,
        "reviews": 6280,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 5.0,
        "reviews": 3808,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 19858
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2699,
        "rating": 4.8,
        "reviews": 7520,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 25990,
        "monthlyPrice": 2599,
        "rating": 4.6,
        "reviews": 2590,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.7,
        "reviews": 1482,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 1785,
        "rating": 4.9,
        "reviews": 5446,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 33222
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 14990,
        "monthlyPrice": 999,
        "rating": 4.7,
        "reviews": 5774,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.7,
        "reviews": 5328,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 26498
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 4.8,
        "reviews": 4794,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.9,
        "reviews": 3216,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.7,
        "reviews": 2381,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 5974,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 22990,
        "monthlyPrice": 2299,
        "rating": 4.8,
        "reviews": 2255,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 31990,
        "monthlyPrice": 2285,
        "rating": 4.8,
        "reviews": 4586,
        "label": "",
        "image": "/images/loreal.jpg",
        "oldPrice": 44116
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17900,
        "monthlyPrice": 1790,
        "rating": 4.8,
        "reviews": 6251,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 23107
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 5074,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.9,
        "reviews": 919,
        "label": "Super narx",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 29876
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1384,
        "rating": 4.5,
        "reviews": 5912,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 30941
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 14990,
        "monthlyPrice": 1249,
        "rating": 4.9,
        "reviews": 414,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.9,
        "reviews": 7335,
        "label": "Original",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 25990,
        "monthlyPrice": 1856,
        "rating": 5.0,
        "reviews": 5324,
        "label": "Katta savdo",
        "image": "/images/dove.jpg",
        "oldPrice": 40583
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 5.0,
        "reviews": 6370,
        "label": "Original",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 639,
        "label": "",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1399,
        "rating": 4.6,
        "reviews": 5764,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 33530
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.5,
        "reviews": 2642,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.7,
        "reviews": 5465,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 25333
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 22990,
        "monthlyPrice": 1437,
        "rating": 4.9,
        "reviews": 2793,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.5,
        "reviews": 5094,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 28177
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 21990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 4101,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 33295
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17900,
        "monthlyPrice": 1193,
        "rating": 4.9,
        "reviews": 185,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 30623
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.6,
        "reviews": 4294,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 14990,
        "monthlyPrice": 1071,
        "rating": 4.7,
        "reviews": 921,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 20915
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 4907,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 36723
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 25990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 6961,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.7,
        "reviews": 2553,
        "label": "Original",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 21990,
        "monthlyPrice": 1832,
        "rating": 4.7,
        "reviews": 3690,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 20990,
        "monthlyPrice": 1312,
        "rating": 5.0,
        "reviews": 4957,
        "label": "",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 4277,
        "label": "Original",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 900,
        "rating": 4.6,
        "reviews": 5021,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.7,
        "reviews": 1465,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 4.9,
        "reviews": 3675,
        "label": "Super narx",
        "image": "/images/dove.jpg",
        "oldPrice": 26243
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 8900,
        "monthlyPrice": 556,
        "rating": 4.7,
        "reviews": 651,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.9,
        "reviews": 3207,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.9,
        "reviews": 6297,
        "label": "Original",
        "image": "/images/loreal.jpg",
        "oldPrice": 25774
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.9,
        "reviews": 7372,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.6,
        "reviews": 4275,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 36470
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 21990,
        "monthlyPrice": 1692,
        "rating": 4.9,
        "reviews": 2238,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 36106
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.9,
        "reviews": 3457,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 27300
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.7,
        "reviews": 5765,
        "label": "Super narx",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 31990,
        "monthlyPrice": 3199,
        "rating": 4.9,
        "reviews": 7676,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 37815
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 32990,
        "monthlyPrice": 2538,
        "rating": 4.8,
        "reviews": 7046,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 22990,
        "monthlyPrice": 1768,
        "rating": 4.6,
        "reviews": 2985,
        "label": "Original",
        "image": "/images/colgate.jpg",
        "oldPrice": 36997
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 26990,
        "monthlyPrice": 2249,
        "rating": 4.9,
        "reviews": 1039,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 33418
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 5.0,
        "reviews": 987,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.8,
        "reviews": 6279,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg",
        "oldPrice": 42377
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 24990,
        "monthlyPrice": 1922,
        "rating": 4.9,
        "reviews": 3729,
        "label": "",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.5,
        "reviews": 7081,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.7,
        "reviews": 2850,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 32013
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 23990,
        "monthlyPrice": 1845,
        "rating": 4.6,
        "reviews": 5224,
        "label": "",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.5,
        "reviews": 6899,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18900,
        "monthlyPrice": 1575,
        "rating": 4.8,
        "reviews": 1127,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 23990,
        "monthlyPrice": 1599,
        "rating": 4.6,
        "reviews": 3028,
        "label": "",
        "image": "/images/colgate.jpg",
        "oldPrice": 35685
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.8,
        "reviews": 4283,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 22990,
        "monthlyPrice": 2299,
        "rating": 4.6,
        "reviews": 1423,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 24990,
        "monthlyPrice": 2082,
        "rating": 4.5,
        "reviews": 7221,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 27990,
        "monthlyPrice": 1749,
        "rating": 4.6,
        "reviews": 4862,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 18990,
        "monthlyPrice": 1726,
        "rating": 4.6,
        "reviews": 4568,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 33777
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 14990,
        "monthlyPrice": 1153,
        "rating": 4.6,
        "reviews": 7169,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 11990,
        "monthlyPrice": 749,
        "rating": 4.9,
        "reviews": 5948,
        "label": "Original",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 19990,
        "monthlyPrice": 1249,
        "rating": 4.7,
        "reviews": 4499,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18990,
        "monthlyPrice": 1266,
        "rating": 4.7,
        "reviews": 1522,
        "label": "Original",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.7,
        "reviews": 3083,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 15990,
        "monthlyPrice": 1454,
        "rating": 4.5,
        "reviews": 1307,
        "label": "Super narx",
        "image": "/images/always.jpg",
        "oldPrice": 25358
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 23990,
        "monthlyPrice": 2181,
        "rating": 4.6,
        "reviews": 2114,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 28998
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.6,
        "reviews": 5894,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 24420
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 20990,
        "monthlyPrice": 1908,
        "rating": 4.9,
        "reviews": 884,
        "label": "Original",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 32230
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 9900,
        "monthlyPrice": 660,
        "rating": 5.0,
        "reviews": 4696,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 22990,
        "monthlyPrice": 1533,
        "rating": 4.8,
        "reviews": 3151,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 29805
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 21990,
        "monthlyPrice": 1374,
        "rating": 4.9,
        "reviews": 346,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 28721
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 23990,
        "monthlyPrice": 1999,
        "rating": 4.6,
        "reviews": 4335,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 34789
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.6,
        "reviews": 7591,
        "label": "Super narx",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 23990,
        "monthlyPrice": 1714,
        "rating": 4.9,
        "reviews": 2575,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 15990,
        "monthlyPrice": 1332,
        "rating": 4.9,
        "reviews": 5510,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18900,
        "monthlyPrice": 1260,
        "rating": 4.8,
        "reviews": 2558,
        "label": "Super narx",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 17990,
        "monthlyPrice": 1499,
        "rating": 4.8,
        "reviews": 4337,
        "label": "Original",
        "image": "/images/rexona.jpg",
        "oldPrice": 25327
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.8,
        "reviews": 2353,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 9900,
        "monthlyPrice": 990,
        "rating": 4.5,
        "reviews": 2539,
        "label": "Katta savdo",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 19990,
        "monthlyPrice": 1333,
        "rating": 4.9,
        "reviews": 6863,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg",
        "oldPrice": 27647
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18990,
        "monthlyPrice": 1582,
        "rating": 4.6,
        "reviews": 766,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg",
        "oldPrice": 28006
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 17990,
        "monthlyPrice": 1799,
        "rating": 5.0,
        "reviews": 5509,
        "label": "",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 30958
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.6,
        "reviews": 4636,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 18900,
        "monthlyPrice": 1718,
        "rating": 4.7,
        "reviews": 5682,
        "label": "",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 31990,
        "monthlyPrice": 1999,
        "rating": 4.6,
        "reviews": 1882,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 4.6,
        "reviews": 598,
        "label": "Original",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 11990,
        "monthlyPrice": 1199,
        "rating": 4.8,
        "reviews": 5698,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 14990,
        "monthlyPrice": 937,
        "rating": 4.9,
        "reviews": 6475,
        "label": "Original",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.7,
        "reviews": 4504,
        "label": "Original",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 21928
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 25990,
        "monthlyPrice": 2166,
        "rating": 4.6,
        "reviews": 2349,
        "label": "Katta savdo",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 8900,
        "monthlyPrice": 742,
        "rating": 4.7,
        "reviews": 7517,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 23344
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 8900,
        "monthlyPrice": 809,
        "rating": 4.6,
        "reviews": 7700,
        "label": "Super narx",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 4.7,
        "reviews": 3062,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 28813
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 15990,
        "monthlyPrice": 1599,
        "rating": 4.8,
        "reviews": 3464,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 30877
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 9900,
        "monthlyPrice": 619,
        "rating": 5.0,
        "reviews": 4928,
        "label": "Super narx",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.8,
        "reviews": 1348,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 8900,
        "monthlyPrice": 593,
        "rating": 4.9,
        "reviews": 807,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 15990,
        "monthlyPrice": 1066,
        "rating": 4.8,
        "reviews": 2042,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 17990,
        "monthlyPrice": 1285,
        "rating": 4.6,
        "reviews": 2888,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 26880
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 8900,
        "monthlyPrice": 685,
        "rating": 4.9,
        "reviews": 692,
        "label": "Super narx",
        "image": "/images/olivia.jpg",
        "oldPrice": 19320
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.8,
        "reviews": 7964,
        "label": "Original",
        "image": "/images/floresan.jpg",
        "oldPrice": 22818
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 22990,
        "monthlyPrice": 1916,
        "rating": 5.0,
        "reviews": 366,
        "label": "Original",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 32954
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 8900,
        "monthlyPrice": 890,
        "rating": 5.0,
        "reviews": 3353,
        "label": "Katta savdo",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 24990,
        "monthlyPrice": 2272,
        "rating": 4.7,
        "reviews": 5936,
        "label": "Katta savdo",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 24990,
        "monthlyPrice": 1666,
        "rating": 4.6,
        "reviews": 6979,
        "label": "Original",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 26990,
        "monthlyPrice": 1928,
        "rating": 4.6,
        "reviews": 6190,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 40391
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 26990,
        "monthlyPrice": 1799,
        "rating": 4.5,
        "reviews": 6082,
        "label": "",
        "image": "/images/rexona.jpg",
        "oldPrice": 39386
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.8,
        "reviews": 5757,
        "label": "Katta savdo",
        "image": "/images/ya-samaya.jpg"
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 9900,
        "monthlyPrice": 707,
        "rating": 4.7,
        "reviews": 3121,
        "label": "",
        "image": "/images/head-shoulders.jpg",
        "oldPrice": 19401
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 17900,
        "monthlyPrice": 1119,
        "rating": 4.8,
        "reviews": 4823,
        "label": "",
        "image": "/images/olivia.jpg"
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 18990,
        "monthlyPrice": 1187,
        "rating": 4.8,
        "reviews": 2142,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.6,
        "reviews": 7120,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg",
        "oldPrice": 15633
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 18990,
        "monthlyPrice": 1899,
        "rating": 4.7,
        "reviews": 1886,
        "label": "",
        "image": "/images/dove.jpg"
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 17990,
        "monthlyPrice": 1199,
        "rating": 4.5,
        "reviews": 1919,
        "label": "Super narx",
        "image": "/images/colgate.jpg"
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 27990,
        "monthlyPrice": 2153,
        "rating": 5.0,
        "reviews": 6839,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 18900,
        "monthlyPrice": 1890,
        "rating": 4.8,
        "reviews": 2450,
        "label": "Katta savdo",
        "image": "/images/loreal.jpg",
        "oldPrice": 28499
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 32990,
        "monthlyPrice": 3299,
        "rating": 4.6,
        "reviews": 761,
        "label": "Katta savdo",
        "image": "/images/rexona.jpg"
    },
    {
        "title": "Paxta yostiqchalari zig'irli \"Ya Samaya\", 180 dona",
        "price": 27990,
        "monthlyPrice": 2545,
        "rating": 4.8,
        "reviews": 7219,
        "label": "Super narx",
        "image": "/images/ya-samaya.jpg",
        "oldPrice": 36335
    },
    {
        "title": "Head&Shoulders, qasqoqqa qarshi shampun, 400 ml",
        "price": 15990,
        "monthlyPrice": 1230,
        "rating": 4.5,
        "reviews": 4846,
        "label": "Original",
        "image": "/images/head-shoulders.jpg"
    },
    {
        "title": "Xushbo'y sovun Olivia Milk’ N White Peach Beach, 275 g",
        "price": 18990,
        "monthlyPrice": 1461,
        "rating": 4.8,
        "reviews": 1061,
        "label": "Original",
        "image": "/images/olivia.jpg",
        "oldPrice": 24753
    },
    {
        "title": "Krem Floresan F-100 quyoshdan himoya qiluvchi SPF 35, 125 ml",
        "price": 31990,
        "monthlyPrice": 2461,
        "rating": 4.8,
        "reviews": 1943,
        "label": "Katta savdo",
        "image": "/images/floresan.jpg"
    },
    {
        "title": "NIVEA MEN erkaklar uchun dezodorant sprey, qora va oq, 150 ml",
        "price": 9900,
        "monthlyPrice": 762,
        "rating": 4.8,
        "reviews": 1992,
        "label": "Katta savdo",
        "image": "/images/nivea-men.jpg"
    },
    {
        "title": "Dove sovun, go'zallik va parvarish, 100 g",
        "price": 17990,
        "monthlyPrice": 1124,
        "rating": 4.6,
        "reviews": 1233,
        "label": "Original",
        "image": "/images/dove.jpg",
        "oldPrice": 25973
    },
    {
        "title": "Colgate tish pastasi Total 12, 75 ml",
        "price": 27990,
        "monthlyPrice": 1999,
        "rating": 4.9,
        "reviews": 7177,
        "label": "Super narx",
        "image": "/images/colgate.jpg",
        "oldPrice": 41907
    },
    {
        "title": "Always gigiyenik prokladkalar, 10 dona",
        "price": 20990,
        "monthlyPrice": 1749,
        "rating": 4.6,
        "reviews": 6388,
        "label": "Katta savdo",
        "image": "/images/always.jpg"
    },
    {
        "title": "L'Oreal yuz kremi, kun uchun, 50 ml",
        "price": 20990,
        "monthlyPrice": 1615,
        "rating": 4.7,
        "reviews": 5081,
        "label": "",
        "image": "/images/loreal.jpg"
    },
    {
        "title": "Rexona ayollar uchun antiperspirant, 150 ml",
        "price": 22990,
        "monthlyPrice": 2090,
        "rating": 4.8,
        "reviews": 6032,
        "label": "",
        "image": "/images/rexona.jpg"
    }
]


const data = {
    geoLocation,
    mahsulotKategoriya,
    sliderImages,
    fourtProduct,
    catalogKategoriya,
    products
};

export default data;
