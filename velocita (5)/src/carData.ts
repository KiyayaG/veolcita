import { Car, SearchItem } from "./types";

export const featuredVehicles: Car[] = [
  {
    id: "nissan-silvia-s15",
    brand: "Nissan",
    model: "Silvia S15 Spec-R",
    year: 2002,
    price: "₺3,800,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/3940718416295600/",
    specs: {
      power: "250 HP",
      acceleration: "5.2 sn",
      topSpeed: "250 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "JDM dünyasının en ikonik drift efsanelerinden Silvia S15. Agresif ön tasarımı, mükemmel 50:50 ağırlık dengesi ve efsanevi SR20DET motoruyla gerçek bir sürüş şaheseri.",
    features: ["Helical LSD", "SR20DET Turbo", "6 İleri Manuel", "Agresif Aerodinamik"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/3940718416295600/"],
    deliveryTime: "Özel Garaj Teslimi"
  },
  {
    id: "nissan-silvia-s13",
    brand: "Nissan",
    model: "Silvia S13 K's",
    year: 1993,
    price: "₺2,900,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/17029304834371366/",
    specs: {
      power: "205 HP",
      acceleration: "6.0 sn",
      topSpeed: "235 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Drift kültürünün doğumunda başrol oynayan safkan JDM klasiği S13. Şık çizgileri, hafif şasisi ve keskin direksiyon hassasiyetiyle koleksiyon değeri çok yüksek bir efsane.",
    features: ["SR20DET Turbo Motor", "Hafif Şasi", "Arkadan İtiş", "Kilitli Diferansiyel"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/17029304834371366/"],
    deliveryTime: "Koleksiyon Teslimat"
  },
  {
    id: "nissan-silvia-s14",
    brand: "Nissan",
    model: "Silvia S14 Kouki",
    year: 1998,
    price: "₺3,200,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/11329436558568258/",
    specs: {
      power: "220 HP",
      acceleration: "5.6 sn",
      topSpeed: "245 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Geniş çamurluk yapısı ve agresif 'Kouki' ön tasarımıyla pistlerin fırtınası S14. Dayanıklı motor bloğu ve akıcı drift kontrolüyle modifiye dünyasının en gözde klasiklerinden biri.",
    features: ["Kouki Aero Paket", "SR20DET Turbo", "Geniş Şasi", "5 İleri Manuel"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/11329436558568258/"],
    deliveryTime: "Özel Teslimat"
  },
  {
    id: "nissan-180sx",
    brand: "Nissan",
    model: "180SX Type X",
    year: 1996,
    price: "₺3,100,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/547539267218190041/",
    specs: {
      power: "205 HP",
      acceleration: "6.2 sn",
      topSpeed: "235 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Açılır-kapanır pop-up farları ve fastback tavan çizgisiyle tarihe geçen Nissan 180SX. Type X bodykit'i ve efsanevi performansı ile 90'lar JDM ruhunu iliklerinize kadar hissettirir.",
    features: ["Pop-Up Farlar", "Type X Aero Kit", "SR20DET Turbo", "Fastback Gövde"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/547539267218190041/"],
    deliveryTime: "Hemen Teslim"
  },
  {
    id: "porsche-911-gt3",
    brand: "Porsche",
    model: "911 GT3",
    year: 2023,
    price: "€284,500",
    category: "Süper Spor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDk7jSPnQfT1spBs3TmL-ucQfB63wm3PAVIktNNN_GasSa0mGIwCrnp7KuXXGYS7KvmgXBZ3EkY5vT6indIrDLIhg5xJ7PF4bsRiCWcAOjj3FTSpWqYWjgBs7Gv9QCWQMAAKPdmPaGbOgRyda32jblabAB2LEu85D24XEtU7KOi0BgT77TM3KAHg_SoRq0p_rvI8XTtdKjkrf-eCrA305Jdzwv-aSrn3kGil2ZMnPYM257J1xZTnlQMIHsPnP7LoEDlOzDOEAws6Q",
    specs: {
      power: "510 HP",
      acceleration: "3.4 sn",
      topSpeed: "318 km/s",
      engine: "6 Boxer"
    },
    description: "Yeni Porsche 911 GT3, motor sporları genlerini günlük kullanıma taşıyor. Gelişmiş aerodinamik yapısı, 'Kuğu Boynu' arka kanadı ve safkan 4.0 litrelik atmosferik motoruyla benzersiz bir sürüş deneyimi sunuyor. Nürburgring pistinde test edilen bu mühendislik harikası, her virajda maksimum hassasiyet için tasarlandı.",
    features: ["PDK Şanzıman", "Karbon Seramik Fren", "Arka Aks Yönlendirme", "Hafifletilmiş Gövde"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUI1vMNP_4ANz1gItibdcRFVdHYjbzRmshmOkI8h1S_osSe39EHlp2yC2AXYnifaRKRwvZV_r_U823WfB7cuGF1nhPNTCUXPVpaGuYTWHfves8mVhZjwhkLgpuztTOA6JgEhI7fA8afD80Ban0OeWMKy2N-MW0dnBtjpAJQDA-winQr8kmkx_tsJrH3QZA7wyoHA7StZ-3QoHVa5u-ySTbnZ1WtU2Hvn6nGcmwixdE4FH4XAm_RSCJhVFUu2M78lQXtvR1Ywr_j0Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApKxRSPmNppz3QaPEEqMZ8RcmzV6YfcF6AJLH1fNhl6G9eFQI_sK4XgNcjd0crvMluqhJacRT9KkYQ5pHuuyJMTF-Hry85jjXHsc1rxMYSJt4qER6mX1PcNpobfbwRlvsXrFot1ktxuKN044OchStb0Km2F8J771TDM3bAB0rEL-U0WmczV02FltpySvzHvjMs9HRXIWCnMqQPAPLF8Vr_eUa_dG-LCwsMtBZYE-HlePo3gSjFzGINo1j8spXTYgB5fz7of7WsnB4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChd0wSWxU3lnalWGKJHqn0xMUVf0jLf_mNS0BxepFH7xIoCC_NLU2uSdSExl0ZcFI7FnM9-09BLfCv1xhpnSrjW3wbSDqPm2a_MzpAfCDxDYAR3hzmeVzf0aoBi5JWmIIvZwN0dBto8ViYjVPI7sqc_5fntwbZV9celF1dgfYETXWidLitLmsdEWF21Mak38OKmX3J3kx4-Vx_PNvuj6cBbksnjoPVIxPIE6h5nCTyVJOG8WD-kqHjdGN9qi8RBk2c9ANWcDbS0xw"
    ],
    deliveryTime: "~4-6 Hafta"
  },
  {
    id: "mercedes-eqe",
    brand: "Mercedes-Benz",
    model: "EQE 350+",
    year: 2024,
    price: "₺3,840,000",
    category: "Elektrikli",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "292 HP",
      acceleration: "6.4 sn",
      topSpeed: "210 km/s",
      engine: "Elektro Motor"
    },
    description: "Tamamen elektrikli lüks sedan segmentinde yeni standart. Aerodinamik tek yay (One Bow) tasarımıyla rüzgara meydan okurken, fütüristik iç mekanı ve üstün menzili ile seyahatlerinizi sessiz ve dinlendirici birer terapiye dönüştürüyor.",
    features: ["Airmatic Süspansiyon", "Hyperscreen Kokpit", "4-Tekerlek Yönlendirme", "Ultra Hızlı Şarj"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  {
    id: "bmw-i8",
    brand: "BMW",
    model: "i8 Coupe",
    year: 2020,
    price: "₺4,950,000",
    category: "Hybrid",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "362 HP",
      acceleration: "4.4 sn",
      topSpeed: "250 km/s",
      engine: "1.5L + Elek."
    },
    description: "Karbon fiber gövdesi ve yukarı açılan kelebek kapıları ile spor otomobil tasarımına yepyeni bir soluk. Akıllı hibrit sürüş sistemi sayesinde mükemmel ağırlık dağılımı ve şaşırtıcı bir verimlilik sunuyor; geleceğin heyecanını bugünden yaşatıyor.",
    features: ["Kelebek Kapılar", "Lazer Farlar", "Lifedrive Mimarisi", "Dinamik Amortisörler"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  {
    id: "porsche-911",
    brand: "Porsche",
    model: "911 Carrera S",
    year: 2024,
    price: "₺12,400,000",
    category: "V6 Motor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkPEkga5ZcitsNJDMsXH2hp80YC4lj4fsbj7b4j_CzWzwqT1d6EPwi2O4cAyDhV1BJAPmV4sVQm9ZmaclfVx2CdjPHoA2wUQ4rlYFdxWvGpe5aHKd22hqSoUlx2RpfAnBqxxd73SVKqQYpGEzh71wiva7CGn1iTyDoK8HyXWMkmAmbnBkjRHBRPpV9dds01PuNa-91vuxAYdscyZhtQ3nWxL3Ms0EYSgM2nTdmS4YU3qdA8hnbG_03ogBVNm-i8_aM2zpa1uRF2P4",
    specs: {
      power: "450 HP",
      acceleration: "3.7 sn",
      topSpeed: "308 km/s",
      engine: "3.0L Boxer V6"
    },
    description: "Yarım asrı aşkın süredir değişmeyen ikonik siluet, modern mühendislik zirvesiyle buluşuyor. Geride konumlandırılmış Boxer motoru ve eşsiz direksiyon geri bildirimiyle saf sürüş mekaniğini, en modern dijital imkanlarla harmanlıyor.",
    features: ["PDK Şanzıman", "Spor Egzoz Sistemi", "Porsche Active Suspen.", "Islak Zemin Modu"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUI1vMNP_4ANz1gItibdcRFVdHYjbzRmshmOkI8h1S_osSe39EHlp2yC2AXYnifaRKRwvZV_r_U823WfB7cuGF1nhPNTCUXPVpaGuYTWHfves8mVhZjwhkLgpuztTOA6JgEhI7fA8afD80Ban0OeWMKy2N-MW0dnBtjpAJQDA-winQr8kmkx_tsJrH3QZA7wyoHA7StZ-3QoHVa5u-ySTbnZ1WtU2Hvn6nGcmwixdE4FH4XAm_RSCJhVFUu2M78lQXtvR1Ywr_j0Q"
    ],
    deliveryTime: "~8-10 Hafta"
  }
];

export const recentSearches: SearchItem[] = [
  {
    id: "search-1",
    brand: "Audi",
    model: "RS6 Avant",
    timestamp: "2026-05-20T16:54:12Z",
    timeAgo: "2 saat önce tarandı",
    carData: {
      id: "audi-rs6-avant",
      brand: "Audi",
      model: "RS6 Avant",
      year: 2023,
      price: "₺14,800,000",
      category: "Performans Wagon",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK1YV78LUCkYyrbjSqIwyiglvTmp9cAf4Z7B-ASbxH-_TmiJHYLAVFME_UVRMWEZcuLxDjOPmFk6U08amKAFllR56VNlrgP51T7tenqvaQj7jhxF1UqUmcCxtHvuYghISBrCOxe3TfzB-IKxHJE-DegVI8NxJVQsRkGtFQUnxsKlfZ_ALnA0bZYGkJQoRlNgVwpMmcbL88Wqrn0VRw_BJr0HUNHRmTe0COM4Sj9vCirW0x5ASuE0HCoI_Vompxgvp2HTrYrSC6N-w",
      specs: {
        power: "600 HP",
        acceleration: "3.6 sn",
        topSpeed: "305 km/s",
        engine: "4.0L Twin-Turbo V8"
      },
      description: "Audi RS6 Avant, bir aile vagonunun pratikliğini süper spor bir otomobilin nefes kesici performansıyla birleştiriyor. Geniş çamurlukları, agresif petek ızgarası ve Quattro dört tekerlekten çekiş gücü ve çift turbolu canavar V8 motoruyla eşsiz bir şaheserdir.",
      features: ["Quattro Çekiş", "Seramik Frenler", "RS Adaptif Havalı Süsp.", "Dinamik Direksiyon"],
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2fUpRfkaNXmSmJdTAVVqjcgRDBA6SPTFwn9jydis-vCabxz5TvfOlP0w2YqZE0OqdyJ1AOrHaQHmxLLAdnKXyOzNSx4UimGzE00mQfnjvop3ZPEb_4H3tU36pns0qpobiYWB7-4TTxGdm10qMNbJ-WFUOtZ8IzrkDPKIhA_PKBbfSeMQLKq4hjpR_gzVOH6-MZmJ3--ULPgLH7TeraQO4Al0OuF_uZA6PrqfYjHEVfUFPlr2boIrUxY4YP52xQircNJcgTMp54w"
      ],
      deliveryTime: "~10-12 Hafta"
    }
  },
  {
    id: "search-2",
    brand: "Tesla",
    model: "Model S Plaid",
    timestamp: "2026-05-19T18:54:12Z",
    timeAgo: "Dün tarandı",
    carData: {
      id: "tesla-model-s-plaid",
      brand: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      price: "₺5,200,000",
      category: "Tam Elektrikli",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF8rHDQbDGuTp-ugaKwrhmfIlw0ehrSUfrd1Z3Y3Coy_0IrhmtSlj5Xbq5ZIolA_XoMt15a53eBxX5nyq3PdJIdz9JEWWsdbq7oHT9RVvxHWt4972XqhlUTTtZ57BkOkBp_g1CZvnhCpPQk_lvATtUwwU_azbRQOEfdxTEpqSSuTEx8uQGAkH_v0mo_H42qrhg-LjVa2B8eJ_HqnKS0YD1b_ZPPhzNJuFdgkOLGS1YD4aUGfZ54lXqcg4Bff1t9LQYsK_rAFSDIBk",
      specs: {
        power: "1020 HP",
        acceleration: "2.1 sn",
        topSpeed: "322 km/s",
        engine: "3 x Elektro Motor"
      },
      description: "Üç adet elektrik motoruyla 1000 beygiri aşan, dünya üzerinde üretilmiş en hızlı hızlanan sedanlardan biri. Minimalist iç mekanı, fütüristik direksiyon simidi ve otonom sürüş yetenekleriyle bütünüyle geleceği tasvir ediyor.",
      features: ["Tri-Motor Plaid Sürücü", "Yoke Direksiyon", "Gelişmiş Otopilot", "17 inç Sinematik Ekran"],
      gallery: [],
      deliveryTime: "~6-8 Hafta"
    }
  }
];

// Specific high fidelity fallback info corresponding to the 12 mock gallery cards
export const galleryVehicles: Record<number, Car> = {
  0: {
    id: "lamborghini-aventador",
    brand: "Lamborghini",
    model: "Aventador LP700-4",
    year: 2022,
    price: "€430,000",
    category: "Süper Spor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4HHd300CLSagXb-Kn6KV-Rlgr0Y7yGn3stwg_RNm6E5woc2LtnNQx-whP8Bi4kjGvU1w_6P9N29UoVt0XhCnL6iEVnyjnup36nn4oid581ILEFKLjgG4QSdnkzqiocSDKyJDGR-ODMbAQ_TAcrTK8nWnHNAJN61QfmQ6rO5qmHTewV12SzDqQe4AvlEE-chK1wUCoyDpZLvswPG9XWFFOM0856X_N-20QexGWW20hrlCoYfEG3ar8fNG3j8SIcADa3l0Owo9JY-Y",
    specs: {
      power: "700 HP",
      acceleration: "2.9 sn",
      topSpeed: "350 km/s",
      engine: "6.5L V12"
    },
    description: "Hücrelerinizdeki adrenalini patlatacak efsanevi V12 motorunun hırıltısı. Karbon fiber monokok şasesi, aktif aerodinamiği ve saldırgan hatları ile İtalyan boğasının gücünü asfalta yırtıcı bir şekilde bırakan bir hırçınlık anıtı.",
    features: ["ISR Şanzıman", "Monokok Karbon Şasi", "Pushrod Süspansiyon", "Aktif Arka Kanat"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfMR5sahI-PNZveTpga_rCQh3rruaD3PdOnM5a7vHpbd2k8M-xKB5-t_RWJjftZMGIvVxBQMP4eo0bKkGBI_eO-C7Ck4VycYy4F4FhJJSHFeiWxEk-cXTSWNRsviTIHI_7ARZZdqD-qVsqB8nHW7F51PVuKms1INniACBD1iBLeLTmplPQeTXr5MPDu6auLdziGcrHQHF0sy7OQTX3-J_vrIDmQMYcGLzlDPwEzF5pPO6QcLTZOWCnw6eeGWsFVmmbwanJQGUPo54"
    ],
    deliveryTime: "~12-16 Hafta"
  },
  1: {
    id: "bmw-m5",
    brand: "BMW",
    model: "M5 Competition",
    year: 2023,
    price: "€185,000",
    category: "Lüks Performans",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7GOKd9O3EWjQA2-TuHfnY8oQ0Pqlql_omuLe_w_2SiLRJGDnQ5YMHYXwocuZ0xCweFyXJjvKZCFLxxXtn_PuCP5FhUmGzbwrJu9k1Ei29lgxZxECIlHQTepmRWHciU2YIfvq7V5Af2OwRATFdwQyjMKJWhttgOGCZH95GAIdB_zMwQKneZWJz-S-OnVfm-CgTsrwjTmQxe1kjqAHWQ5mVtUIzQ6yT8-qhu0LsqV69pNkzr-PD_HPA4eStk6SzIp1zhj4tBhIZgos",
    specs: {
      power: "625 HP",
      acceleration: "3.3 sn",
      topSpeed: "305 km/s",
      engine: "4.4L TwinPower V8"
    },
    description: "M5 Competition, konforlu bir iş seyahati sedası ile pist canavarı arasındaki sınır çizgilerini yok ediyor. xDrive dört çeker sistemi, tamamen arkadan itiş moduna geçerek heyecan verici drift deneyimleri yaşatırken, modern kabiniyle de prestij saçıyor.",
    features: ["M xDrive Çekiş", "Aktif M Diferansiyel", "Karbon Tavan", "M Dinamik Amortisörler"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGs59oibAVmYMHfc7Qvpoz_4REirAssvXx-diD_u_1NMjzSMEvhU0xdwmBIycB3XxPNAStgKY7cYyqQ-c22Lo0QZ75H6vqLqXQYHzOUwpyKgzwd45BtL7dyXny5s6Tz2RrPBGWjbRSk9CQWkKv1zbNE_H4_iba58AlmBQ8Q90r4wv6dQj3t2DX9WOypfj-5rju06ACdElaNe7Y-Wuz5DAVsoL2f61Oihvy5XTgSxLBiEJDsquO4vYcIPo8KXuJHkRiExk8lrNJMJU"
    ],
    deliveryTime: "~4-6 Hafta"
  },
  2: {
    id: "porsche-rim-art",
    brand: "Porsche",
    model: "911 GT3 RS Rim Centerlock",
    year: 2023,
    price: "€14,200",
    category: "Aksesuar & Mühendislik",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfMR5sahI-PNZveTpga_rCQh3rruaD3PdOnM5a7vHpbd2k8M-xKB5-t_RWJjftZMGIvVxBQMP4eo0bKkGBI_eO-C7Ck4VycYy4F4FhJJSHFeiWxEk-cXTSWNRsviTIHI_7ARZZdqD-qVsqB8nHW7F51PVuKms1INniACBD1iBLeLTmplPQeTXr5MPDu6auLdziGcrHQHF0sy7OQTX3-J_vrIDmQMYcGLzlDPwEzF5pPO6QcLTZOWCnw6eeGWsFVmmbwanJQGUPo54",
    specs: {
      power: "Hafif Alaşım Mag.",
      acceleration: "Tek Bijon",
      topSpeed: "20 / 21 inç",
      engine: "Dövme Magnezyum"
    },
    description: "Nürburgring pistlerinde saniyelerin onda birini avlamak için özel olarak tasarlanmış Magnezyum Centerlock (Tek bijon kilitlemeli) jant. Porsche Motorsporları departmanının şaheseri; dövme metal dokusu ve sıfır esnemeyle maksimum aerodinamik kararlılık.",
    features: ["Center-Lock Kilit", "Ultra Hafif Magnezyum", "Karbon Ceramik Uyumlu", "Motorsporları Testi"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUI1vMNP_4ANz1gItibdcRFVdHYjbzRmshmOkI8h1S_osSe39EHlp2yC2AXYnifaRKRwvZV_r_U823WfB7cuGF1nhPNTCUXPVpaGuYTWHfves8mVhZjwhkLgpuztTOA6JgEhI7fA8afD80Ban0OeWMKy2N-MW0dnBtjpAJQDA-winQr8kmkx_tsJrH3QZA7wyoHA7StZ-3QoHVa5u-ySTbnZ1WtU2Hvn6nGcmwixdE4FH4XAm_RSCJhVFUu2M78lQXtvR1Ywr_j0Q"
    ],
    deliveryTime: "Stokta Var (Anında Teslimat)"
  },
  3: {
    id: "volvo-s90",
    brand: "Volvo",
    model: "S90 T8 Recharge",
    year: 2024,
    price: "₺4,250,000",
    category: "Premium Sedan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6bsB_7w__LvaHdTAm4G4kKvw_Xkod5J76PEom0ouJr6n3B1ajMFT7f0dQNDBY0RnVm1c4ZfVtOrjpnJGuanwYlAKNpFDIH1nIGLRemVzwyn5ZWRZgw7WV_Tipc6tr86gBeXfan57qYAFXNg65ioMAKrsoqKm1oZpNhA7Y98-HFHgUSiuudibt07hwVz8YH_rgztX1J1RFPpB4NscS_sjp561ZvXWZRqvr_CwlQP6fnD_s0_Q94GfYFAmVDZv3IKxoFF53-rdmYDo",
    specs: {
      power: "455 HP",
      acceleration: "4.8 sn",
      topSpeed: "180 km/s",
      engine: "2.0L Plug-in Hybrid"
    },
    description: "İskandinav zarafetinin asfalttaki yansıması. Güçlü hibrit motoruyla adeta sıfır emisyonlu sakin bir sürüş vaat ederken, lüks deri kaplamaları, Orrefors kristal vites topuzu ve Bowers & Wilkins ses sistemi ile benzersiz bir İsveç salonu konforu sunuyor.",
    features: ["Bowers & Wilkins Ses", "Kristal Vites Topuzu", "Pilot Assist", "Hava Süspansiyonu"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGs59oibAVmYMHfc7Qvpoz_4REirAssvXx-diD_u_1NMjzSMEvhU0xdwmBIycB3XxPNAStgKY7cYyqQ-c22Lo0QZ75H6vqLqXQYHzOUwpyKgzwd45BtL7dyXny5s6Tz2RrPBGWjbRSk9CQWkKv1zbNE_H4_iba58AlmBQ8Q90r4wv6dQj3t2DX9WOypfj-5rju06ACdElaNe7Y-Wuz5DAVsoL2f61Oihvy5XTgSxLBiEJDsquO4vYcIPo8KXuJHkRiExk8lrNJMJU"
    ],
    deliveryTime: "~2-3 Hafta"
  },
  4: {
    id: "audi-rs5",
    brand: "Audi",
    model: "RS5 Coupe",
    year: 2023,
    price: "€135,000",
    category: "Spor Coupe",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF5FZOXo8s-S0GstinsVPiNPECZnaGhIcp1Z5CMhL0PTOpuv2Ybt6E2WWCtWQqBZyd0rgSJ7ls41svkKB7KbxvoarKVxMdZWd10RMHFcoBAbFlApQzfdZfXTPe8CExMXFJyLNOUtP3ALTZIiDukoN6yLGC8cSUspmWRHEmU7UHx5pLIaL3gBk0H7b-KhgikTkSv8EsrDN3PcMvY0KomcinhNKWGDR-V7bQneWnsjGJZTJRFUdwlh5XZB8QUen4iNvdWy26Rqxl-Y4",
    specs: {
      power: "450 HP",
      acceleration: "3.9 sn",
      topSpeed: "280 km/s",
      engine: "2.9L Twin-Turbo V6"
    },
    description: "Keskin ve kaslı gövde detaylarıyla saf ateş gücü. Çift turbolu muhteşem 2.9 litrelik V6 motoru, Audi'nin yenilmez Quattro çekiş teknolojisiyle birleşerek her hava koşulunda sarsılmaz bir yol tutuş ve nefes kesen bir ivmelenme sunar.",
    features: ["Quattro Çekiş Sistemi", "RS Spor Egzoz", "Dinamik Ride Control", "Matrix LED Farlar"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2fUpRfkaNXmSmJdTAVVqjcgRDBA6SPTFwn9jydis-vCabxz5TvfOlP0w2YqZE0OqdyJ1AOrHaQHmxLLAdnKXyOzNSx4UimGzE00mQfnjvop3ZPEb_4H3tU36pns0qpobiYWB7-4TTxGdm10qMNbJ-WFUOtZ8IzrkDPKIhA_PKBbfSeMQLKq4hjpR_gzVOH6-MZmJ3--ULPgLH7TeraQO4Al0OuF_uZA6PrqfYjHEVfUFPlr2boIrUxY4YP52xQircNJcgTMp54w"
    ],
    deliveryTime: "~4-6 Hafta"
  },
  5: {
    id: "mercedes-hyperscreen",
    brand: "Mercedes-Benz",
    model: "Hyperscreen Kokpit",
    year: 2024,
    price: "€21,500",
    category: "Teknoloji & Yapay Zeka",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGs59oibAVmYMHfc7Qvpoz_4REirAssvXx-diD_u_1NMjzSMEvhU0xdwmBIycB3XxPNAStgKY7cYyqQ-c22Lo0QZ75H6vqLqXQYHzOUwpyKgzwd45BtL7dyXny5s6Tz2RrPBGWjbRSk9CQWkKv1zbNE_H4_iba58AlmBQ8Q90r4wv6dQj3t2DX9WOypfj-5rju06ACdElaNe7Y-Wuz5DAVsoL2f61Oihvy5XTgSxLBiEJDsquO4vYcIPo8KXuJHkRiExk8lrNJMJU",
    specs: {
      power: "8-Core CPU",
      acceleration: "24GB RAM",
      topSpeed: "56 inç Genişlik",
      engine: "Curved OLED Glass"
    },
    description: "Sürücü ve yolcu ön panelini boydan boya kaplayan 141 santimetrelik kavisli cam panel. Arkasındaki 8 çekirdekli işlemci ve yapay zeka temelli MBUX yazılımı ile kabini adeta yaşayan bir dijital kokpite ve lüks bir deneyim alanına dönüştürür.",
    features: ["Sıfır Katman Arayüzü", "Dokunsal Geri Bildirim", "Co-Pilot OLED Ekranı", "Göz Takip Güvenliği"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDF8rHDQbDGuTp-ugaKwrhmfIlw0ehrSUfrd1Z3Y3Coy_0IrhmtSlj5Xbq5ZIolA_XoMt15a53eBxX5nyq3PdJIdz9JEWWsdbq7oHT9RVvxHWt4972XqhlUTTtZ57BkOkBp_g1CZvnhCpPQk_lvATtUwwU_azbRQOEfdxTEpqSSuTEx8uQGAkH_v0mo_H42qrhg-LjVa2B8eJ_HqnKS0YD1b_ZPPhzNJuFdgkOLGS1YD4aUGfZ54lXqcg4Bff1t9LQYsK_rAFSDIBk"
    ],
    deliveryTime: "Ön Sipariş (Mevcut Opsiyon)"
  },
  6: {
    id: "ferrari-250gt",
    brand: "Ferrari",
    model: "250 GT Berlinetta Lusso",
    year: 1963,
    price: "€14,500,000",
    category: "Klasik Koleksiyon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcXeuuHYmPatmo2cU2UhkbM0FE6OetSSqoB6SU9xcOBqIj7ADgrN8rKbx8h6NTMwrjeB4zIvmigo1gbKpLN0TLIM5xlcu0PK2U7ClxQruoBIYT-kV6sC6NaulvxiOfUlpbP4CVLrVvszioyvt5fYkQfVSz7kcgETzEKhFmLZ_78t3-Q89WX3gh6GoNuzMGbgbI9nyZW957hg8TrByrxX-m_gGYJMtfMPEELl0NEBxl7Tq7DxGIxq1TgecOGyYXQHWhioN_yEegnd0",
    specs: {
      power: "240 HP",
      acceleration: "7.9 sn",
      topSpeed: "240 km/s",
      engine: "3.0L Colombo V12"
    },
    description: "Pininfarina imzalı şaşırtıcı zarafetteki İtalyan hatları, Gioacchino Colombo tasarımı saf kan V12 motoruyla öpüşüyor. Steve McQueen gibi ikonların gözdesi olan bu eşsiz klasik, tüm zamanların en güzel ve en değerli otomobillerinden biridir.",
    features: ["Borrani Tel Jantlar", "Yedek Colombo Blok", "Ferrari Classiche Belg.", "El Yapımı Alüm. Gövde"],
    gallery: [],
    deliveryTime: "Özel Müzayede (Hemen Teslim)"
  },
  7: {
    id: "lambo-huracan",
    brand: "Lamborghini",
    model: "Huracan EVO",
    year: 2023,
    price: "€310,000",
    category: "Süper Spor",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbueXZKC5kepjnuLaQwDG3hsaowuAs8TRFNypJj5j7fmN2PnY9YrUj_W66j_H4akCi0U-92PV9O3J8UMNgXMoVGsCrCCljPgI3ULegY00Ib8VdBrupUs81dtRWvV-CZCrWWo292b7n-Q91P0kuVahCC6kBRlcsR7VA-Uuvy6TCROZlCInyUc0Lghbi1C9EC9FyLJkYDagMThqbQRppR8XqpP7dvbf51QTC8D-wFj6_gVNUxzfPM1Bsy4c_nyJG_eT18ZDrzk0SY3o",
    specs: {
      power: "640 HP",
      acceleration: "2.9 sn",
      topSpeed: "325 km/s",
      engine: "5.2L Atmosferik V10"
    },
    description: "Gittikçe azalan atmosferik saf motorların son şövalyesi. 10 silindirin yırtıcı kükremesi, LDVI yapay zekalı beyin kontrol ünitesi ve tüy kadar hafif kompozit gövdesiyle asfaltta eşsiz ve dramatik sürüş dinamikleri oluşturur.",
    features: ["Magneto Reolojik Süsp.", "LDF Çift Kavrama", "Lamborghini Dinamik Yön.", "Karbon Seramik Diskler"],
    gallery: [],
    deliveryTime: "~12-14 Hafta"
  },
  8: {
    id: "aston-vantage",
    brand: "Aston Martin",
    model: "Vantage Coupe",
    year: 2024,
    price: "€225,000",
    category: "İngiliz Elit",
    image: "https://tr.pinterest.com/pin/740631101240649489/",
    specs: {
      power: "510 HP",
      acceleration: "3.6 sn",
      topSpeed: "314 km/s",
      engine: "4.0L Bi-Turbo V8"
    },
    description: "Aristokrat duruşun arkasında avcı bir ruh. Aston Martin Vantage, kılıfsız gücü ve hırçın tıkırtılı V8 motorunu ultra hassas ZF 8-ileri şanzıman ile harmanlıyor. İngiliz asalet sınıfının en heyecan verici ve en hırslı vahşi üyesidir.",
    features: ["Elektronik Arka Difer.", "3 Kademe Adaptif Sönüm.", "Alüminyum Şasi", "El İşçiliği Deri Kabin"],
    gallery: [],
    deliveryTime: "~14-16 Hafta"
  },
  9: {
    id: "audi-r8-mirror",
    brand: "Audi",
    model: "R8 V10 performance Carbon Mirror",
    year: 2023,
    price: "€4,200",
    category: "Karbon Parça & Aksesuar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJFAAPJmImU2iB3OFt8SAg86oLLxw4MEdKZbmgBzqbJnWDhZ7MWUH8BqxylL34zNUtAmXRMk15JaJl79cXwbddJzDTc6RExCc7t4J84PsE_R1l3mpAeak7XvGzlFJasJZj3DirrsJUeBH6UPcfoQjgKKnw6c9jlPbqBK1abspJ_REJy8D2uelBsYzS5MeCV3YCzX7p9HRvG2PSqYeF1uO-s65OasEanuJudJOzbfr2HSWIJqITlAzeR9Cl1BCCbWr02o4CpC5eh40",
    specs: {
      power: "Karbon Fiber Kom.",
      acceleration: "Eşsiz Hafiflik",
      topSpeed: "Isıtmalı / Karartmalı",
      engine: "R8 Aerodynamics"
    },
    description: "Otoklavda pişirilmiş yüksek teknoloji ürünü ultra hafif karbon ayna kapağı. Audi Sport departmanı tarafından özel tasarlanan ayna, rüzgar türbülansını en aza indirerek yüksek hızlarda stabilite ve göz kamaştırıcı estetik asalet sağlar.",
    features: ["Gerçek Karbon Doku", "Otoklav İmalatı", "Mükemmel Aerodinami", "Isıtmalı Buz Çözücü"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChd0wSWxU3lnalWGKJHqn0xMUVf0jLf_mNS0BxepFH7xIoCC_NLU2uSdSExl0ZcFI7FnM9-09BLfCv1xhpnSrjW3wbSDqPm2a_MzpAfCDxDYAR3hzmeVzf0aoBi5JWmIIvZwN0dBto8ViYjVPI7sqc_5fntwbZV9celF1dgfYETXWidLitLmsdEWF21Mak38OKmX3J3kx4-Vx_PNvuj6cBbksnjoPVIxPIE6h5nCTyVJOG8WD-kqHjdGN9qi8RBk2c9ANWcDbS0xw"
    ],
    deliveryTime: "Stokta Var (Hemen Kargo)"
  },
  10: {
    id: "w16-engine",
    brand: "Bugatti",
    model: "Chiron W16 Quad-Turbo Engine",
    year: 2022,
    price: "€180,000",
    category: "Mühendislik Sanatı",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo2fUpRfkaNXmSmJdTAVVqjcgRDBA6SPTFwn9jydis-vCabxz5TvfOlP0w2YqZE0OqdyJ1AOrHaQHmxLLAdnKXyOzNSx4UimGzE00mQfnjvop3ZPEb_4H3tU36pns0qpobiYWB7-4TTxGdm10qMNbJ-WFUOtZ8IzrkDPKIhA_PKBbfSeMQLKq4hjpR_gzVOH6-MZmJ3--ULPgLH7TeraQO4Al0OuF_uZA6PrqfYjHEVfUFPlr2boIrUxY4YP52xQircNJcgTMp54w",
    specs: {
      power: "1500 HP",
      acceleration: "0-400: 32.6 sn",
      topSpeed: "490 km/s Lim.",
      engine: "8.0L W16 Quad V"
    },
    description: "Karşınızda otomotiv mühendisliğinin ulaştığı absolut zirve. 8.0 litrelik Bugatti W16 silindir bloğu ve ardışık çalışan 4 devasa turboşarjı ile adeta bir havacılık başyapıtı. 1500 beygir güç ve 1600 Nm akıllara zarar tork üreten bir canavar.",
    features: ["Quad-Turbo Ardışık", "Titanyum Egzoz Sistemi", "Özel Kuru Karter", "10 Farklı Radyatör"],
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUI1vMNP_4ANz1gItibdcRFVdHYjbzRmshmOkI8h1S_osSe39EHlp2yC2AXYnifaRKRwvZV_r_U823WfB7cuGF1nhPNTCUXPVpaGuYTWHfves8mVhZjwhkLgpuztTOA6JgEhI7fA8afD80Ban0OeWMKy2N-MW0dnBtjpAJQDA-winQr8kmkx_tsJrH3QZA7wyoHA7StZ-3QoHVa5u-ySTbnZ1WtU2Hvn6nGcmwixdE4FH4XAm_RSCJhVFUu2M78lQXtvR1Ywr_j0Q"
    ],
    deliveryTime: "Özel Siparişle Üretim"
  },
  11: {
    id: "audi-etron-gt",
    brand: "Audi",
    model: "e-tron GT RS",
    year: 2024,
    price: "₺6,850,000",
    category: "Tam Elektrikli",
    image: "https://tr.pinterest.com/pin/779685754238329185/",
    specs: {
      power: "646 HP",
      acceleration: "3.3 sn",
      topSpeed: "250 km/s",
      engine: "Çift Elektro Motor"
    },
    description: "Geleceğin sportif lüks seyahat Gran Turismo vizyonu. Kusursuz rüzgar dirençli silueti, 800V yüksek gerilimli batarya mimarisi ile 270 kW hızda şarj hızı sunarken, elektrikli Quattro performans gücüyle asfaltta pürüzsüz hızlanmanın tadını çıkarır.",
    features: ["e-tron Sport Sesi", "800V Batarya Teknolojisi", "Adaptif Havalı Süsp.", "Karbon Fiber Panel"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  12: {
    id: "ferrari-sf90",
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    price: "€690,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/690880399073341327/",
    specs: {
      power: "1000 HP",
      acceleration: "2.5 sn",
      topSpeed: "340 km/s",
      engine: "4.0L V8 Plug-in Hybrid"
    },
    description: "Maranello'nun ilk seri üretim plug-in hibrit süper spor otomobili. Üç elektrik motoru ve çift turbolu V8 motorunun muazzam sinerjisi, toplamda tam 1000 beygir gücü doğrudan dört tekerleğe aktarım sağlayarak fizik kurallarını yeniden tanımlıyor.",
    features: ["eManettino Sürüş Modları", "Assetto Fiorano Paketi", "Matrix LED Farlar", "Gelişmiş Tork Vektörleme"],
    gallery: [],
    deliveryTime: "~12-14 Hafta"
  },
  13: {
    id: "lambo-urus",
    brand: "Lamborghini",
    model: "Urus Performante",
    year: 2024,
    price: "₺24,500,000",
    category: "Süper SUV",
    image: "https://tr.pinterest.com/pin/1034913189392281502/",
    specs: {
      power: "666 HP",
      acceleration: "3.3 sn",
      topSpeed: "306 km/s",
      engine: "4.0L Twin-Turbo V8"
    },
    description: "Süper spor otomobil ruhunu bir SUV pratikliği ve heybetiyle birleştiren asalet anıtı. Karbon fiber kaputu, genişletilmiş çamurlukları ve Akrapovič titanyum egzoz sistemiyle hem pistte hem de arazide vahşi bir İtalyan boğası.",
    features: ["Akrapovič Titanyum Egzoz", "Rally Sürüş Modu", "Karbon Fiber Gövde Parçaları", "Pirelli Trofeo R Lastikler"],
    gallery: [],
    deliveryTime: "~6-8 Hafta"
  },
  14: {
    id: "bugatti-chiron",
    brand: "Bugatti",
    model: "Chiron Super Sport",
    year: 2023,
    price: "€3,800,000",
    category: "Hiper Spor",
    image: "https://tr.pinterest.com/pin/664351382568843432/",
    specs: {
      power: "1600 HP",
      acceleration: "2.2 sn",
      topSpeed: "440 km/s",
      engine: "8.0L Quad-Turbo W16"
    },
    description: "Sınırların bittiği yerde Chiron başlar. Saatte 440 kilometre hıza çıkabilen bu mühendislik zirvesi, quad-turboşarjlı 16 silindirli motoruyla uzay çağı teknolojisini asfalta taşıyor; tamamen kişiye özel el işçiliği lüks detayı barındırır.",
    features: ["Aktif Hava Freni", "Titanyum 3D Baskı Egzoz", "Karbon Monokok Gövde", "Hız Anahtarı (Speed Key)"],
    gallery: [],
    deliveryTime: "~20-24 Hafta"
  },
  15: {
    id: "aston-db11",
    brand: "Aston Martin",
    model: "DB11 V8",
    year: 2023,
    price: "₺18,200,000",
    category: "İngiliz Elit",
    image: "https://tr.pinterest.com/pin/289637819791331201/",
    specs: {
      power: "510 HP",
      acceleration: "4.0 sn",
      topSpeed: "300 km/s",
      engine: "4.0L Twin-Turbo V8"
    },
    description: "Soylu bir İngiliz beyefendisinin vahşi gücü. İkonik ızgarası, göz alıcı oranları ve muazzam konforuyla en lüks kıtalararası yolculukları (Gran Turismo) adeta bir rüyaya dönüştüren zarafet şaheseri.",
    features: ["Bang & Olufsen BeoSound", "Deri Brogue İşlemeli Koltuklar", "360 Derece Çevre Görüş", "Adaptif Amortisörler"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  16: {
    id: "mclaren-720s",
    brand: "McLaren",
    model: "720S Coupe",
    year: 2023,
    price: "€345,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/624241198872982529/",
    specs: {
      power: "720 HP",
      acceleration: "2.9 sn",
      topSpeed: "341 km/s",
      engine: "4.0L Twin-Turbo V8"
    },
    description: "Rüzgar tünelinde şekillendirilmiş fütüristik bir aerodinamik heykel. Monocage II karbon fiber şasisi ve Proactive Chassis Control II süspansiyon sistemiyle pist performansı odaklı saf sürüş adrenalini.",
    features: ["Kelebek Kapılar", "Katlanabilir Sürücü Ekranı", "Karbon Monokok Şasi", "Pist Verisi Kaydedici"],
    gallery: [],
    deliveryTime: "~8-10 Hafta"
  },
  17: {
    id: "tesla-cybertruck",
    brand: "Tesla",
    model: "Cybertruck Cyberbeast",
    year: 2024,
    price: "₺7,900,000",
    category: "Elektrikli",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "845 HP",
      acceleration: "2.6 sn",
      topSpeed: "209 km/s",
      engine: "Üç Elektro Motor"
    },
    description: "Paslanmaz çelik dış iskeleti ve kırılmaz zırhlı camları ile bilim kurgu filmlerinden fırlamış bir post-apokaliptik savaşçı. Cyberbeast modeli, devasa cüssesine rağmen bir spor otomobili kıskandıracak ivmelenmeye sahip.",
    features: ["Zırhlı Paslanmaz Çelik Gövde", "Kırılmaz Armor Cam", "Dört Tekerden Yönlendirme", "Devasa Dokunmatik Ekran"],
    gallery: [],
    deliveryTime: "~16-20 Hafta"
  },
  18: {
    id: "rolls-phantom",
    brand: "Rolls-Royce",
    model: "Phantom VIII",
    year: 2024,
    price: "€1,250,500",
    category: "Ultra Lüks",
    image: "https://tr.pinterest.com/pin/544513411167148199/",
    specs: {
      power: "563 HP",
      acceleration: "5.3 sn",
      topSpeed: "250 km/s",
      engine: "6.75L Twin-Turbo V12"
    },
    description: "Yolculuk etmenin en üst seviyesi, lüksün dünyadaki en görkemli kalesi. Sessizliğin kutsal tapınağı niteliğindeki kabini, yıldızlı gökyüzü tavan döşemesi, el yapımı masif ahşap kaplamaları ve kusursuz havalı süspansiyon konforu ile benzersiz.",
    features: ["Starlight Yıldızlı Tavan", "Whisper Dinamik Sessizlik", "Şampanya Soğutucu", "El Yapımı Ahşap Sanatı"],
    gallery: [],
    deliveryTime: "~24-30 Hafta"
  },
  19: {
    id: "nissan-gtr",
    brand: "Nissan",
    model: "GT-R Nismo (R35)",
    year: 2024,
    price: "€295,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/1078049229529671489/",
    specs: {
      power: "600 HP",
      acceleration: "2.8 sn",
      topSpeed: "315 km/s",
      engine: "3.8L Twin-Turbo V6 (VR38DETT)"
    },
    description: "Otomotiv dünyasının efsanevi 'Godzilla' lakaplı pist avcısı. Nismo departmanınca optimize edilen karbon aerodinamik gövdesi ve efsanevi el yapımı motoruyla her virajda mutlak hakimiyet vaat ediyor.",
    features: ["Nismo Yarış Süspansiyonu", "Titanyum Spor Egzoz", "Karbon Fiber Karoser", "ATTESA E-TS Dört Çeker"],
    gallery: [],
    deliveryTime: "~10-12 Hafta"
  },
  20: {
    id: "toyota-supra",
    brand: "Toyota",
    model: "Supra MK4 (JZA80)",
    year: 1998,
    price: "₺4,800,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/3799980931483068/",
    specs: {
      power: "330 HP",
      acceleration: "4.9 sn",
      topSpeed: "250 km/s",
      engine: "3.0L Twin-Turbo I6 (2JZ-GTE)"
    },
    description: "JDM kültürünün kutsal kasesi, efsanevi 2JZ motorunun hayat verdiği modifikasyon ikonu. Orijinal kondisyondaki bu Supra MK4, otomotiv tarihinin en dayanıklı ve en çok arzulanan klasik spor otomobillerinden biridir.",
    features: ["Efsanevi 2JZ-GTE Blok", "Aktif Ön Rüzgarlık", "Orijinal Turbo Manuel", "Koleksiyon Belgesi"],
    gallery: [],
    deliveryTime: "Özel Koleksiyon (Hemen Teslim)"
  },
  21: {
    id: "tofas-murat131",
    brand: "Tofaş",
    model: "Murat 131 Kartal",
    year: 1984,
    price: "₺180,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/417216352949927499/",
    specs: {
      power: "75 HP",
      acceleration: "15.2 sn",
      topSpeed: "150 km/s",
      engine: "1.6L Karbüratörlü SOHC"
    },
    description: "Türkiye'nin yollarında bir dönemin efsanevi aile sembolü ve yük taşıyıcısı olan Murat 131 altyapılı Kartal. Klasik hatları ve nostaljik kokusuyla her Türk gencinin ve otomobil severin hafızasında unutulmaz bir yere sahip.",
    features: ["Klasik Karbüratörlü Motor", "Geniş Aile Bagajı", "Nostaljik Deri Döşeme", "Orijinal Tofaş Amblemi"],
    gallery: [],
    deliveryTime: "Anında Teslim"
  },
  22: {
    id: "tofas-sahin",
    brand: "Tofaş",
    model: "Şahin 1.6 ie",
    year: 2001,
    price: "₺290,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/879116790257074634/",
    specs: {
      power: "80 HP",
      acceleration: "13.1 sn",
      topSpeed: "168 km/s",
      engine: "1.6L Tek Nokta Enjeksiyonlu"
    },
    description: "Türk sokak kültürünün ve modifikasyon dünyasının taçsız kralı. Enjeksiyonlu Tempra motoru ile donatılmış son jenerasyon efsane Şahin, yanlama sevdalılarının ve nostalgik sürüş tutkunlarının ortak mirası.",
    features: ["Tempra Enjeksiyonlu Blok", "CMS 40 Çelik Jant Opsiyonu", "Arka İtiş Karakteri", "Özel Nostaljik İç Mekan"],
    gallery: [],
    deliveryTime: "Anında Teslim"
  },
  23: {
    id: "anadol-stc16",
    brand: "Anadol",
    model: "STC-16 (Süper Türk Canavarı)",
    year: 1974,
    price: "₺1,450,050",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/801429696180432324/",
    specs: {
      power: "120 HP",
      acceleration: "9.5 sn",
      topSpeed: "174 km/s",
      engine: "1.6L Ford Kent"
    },
    description: "Türk mühendisliğinin tasarladığı ilk spor otomobil, efsane STC-16. Klasik ralli arenalarını sarsan hafif fiberglas gövde yapısı ve İtalyan spor otomobillerini andıran çarpıcı aerodinamik tasarımıyla milli otomotiv gururumuz.",
    features: ["Milli Spor Tasarım Tescili", "Hafif Fiberglas Karoser", "Ford Kent Güç Ünitesi", "Orijinal Ralli Kadranı"],
    gallery: [],
    deliveryTime: "Özel Klasik Pazar (Hemen Teslim)"
  },
  24: {
    id: "audi-rs7",
    brand: "Audi",
    model: "RS7 Sportback",
    year: 2024,
    price: "₺17,900,000",
    category: "Lüks Performans",
    image: "https://tr.pinterest.com/pin/979603356445351329/",
    specs: {
      power: "630 HP",
      acceleration: "3.4 sn",
      topSpeed: "305 km/s",
      engine: "4.0L Twin-Turbo V8"
    },
    description: "Zarif bir fastback silueti ile bir canavarın kükremesinin kusursuz birlikteliği. RS7, çift turbolu canavar V8 motoru ve gelişmiş Quattro altyapısıyla her türlü hava koşulunda lüks bir jet hızı sunar.",
    features: ["Quattro Launch Control", "Dinamik Tüm Tekerleklerden Yönlendirme", "RS HD Matrix Lazer Farlar", "Seramik Hava Süspansiyonu"],
    gallery: [],
    deliveryTime: "~8-10 Hafta"
  },
  25: {
    id: "g63-amg",
    brand: "Mercedes-Benz",
    model: "Mercedes-AMG G63",
    year: 2024,
    price: "₺22,400,000",
    category: "Süper SUV",
    image: "https://tr.pinterest.com/pin/976858975398311843/",
    specs: {
      power: "585 HP",
      acceleration: "4.5 sn",
      topSpeed: "220 km/s",
      engine: "4.0L Bi-Turbo V8"
    },
    description: "Askeri mirasa sadık kalarak inşa edilmiş modern bir lüks tankı. AMG imzalı çift turbolu canavar V8 motoru, ikonik köşeli tasarımı ve egzozun hırçın gürlemesiyle yolların ve arazinin tartışmasız lideri.",
    features: ["AMG Egzoz Yan Çıkışları", "3 Diferansiyel Kilidi %100", "Widescreen Cockpit", "AMG Ride Control"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  26: {
    id: "porsche-taycan",
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2024,
    price: "₺10,800,000",
    category: "Elektrikli",
    image: "https://tr.pinterest.com/pin/596867756884318388/",
    specs: {
      power: "761 HP",
      acceleration: "2.8 sn",
      topSpeed: "260 km/s",
      engine: "Çift Elektro Motor"
    },
    description: "Porsche genlerine sadık kalınarak tasarlanmış, tamamen elektrikli en dinamik ve en yırtıcı süper spor sedan. Overboost fonksiyonuyla anında 761 Hp güç sağlayarak baş döndürücü hızlanma hissini ulaştırıyor.",
    features: ["800-Volt Şarj Mimarisi", "Porsche Elektrikli Spor Sesi", "Karbon Seramik Frenler (PCCB)", "Arka Aks Yönlendirme"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  27: {
    id: "bmw-m4",
    brand: "BMW",
    model: "M4 Competition xDrive",
    year: 2024,
    price: "₺9,400,000",
    category: "Spor Coupe",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "510 HP",
      acceleration: "3.5 sn",
      topSpeed: "290 km/s",
      engine: "3.0L TwinPower Twin-Turbo I6"
    },
    description: "Agresif dikey böbrek ızgarası ve dinamik karbon tavanı ile pist canavarı bir spor coupe. Sıralı 6 silindirli TwinPower motorun kışkırtıcı çığlığı ve xDrive çekişiyle asfalt üzerinde tam bir viraj canavarı.",
    features: ["M xDrive Sürüş Modları", "Karbon Bucket Yarış Koltukları", "M Drift Analizörü", "Adaptif M Süspansiyonu"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  28: {
    id: "dodge-charger",
    brand: "Dodge",
    model: "Charger R/T 1970",
    year: 1970,
    price: "₺5,200,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1034561345631483598/",
    specs: {
      power: "425 HP",
      acceleration: "5.5 sn",
      topSpeed: "230 km/s",
      engine: "7.2L HEMI V8 Big Block"
    },
    description: "Amerikan kas güç felsefesinin (Muscle Car) en hırçın, en yırtıcı ve en efsanevi temsilcisi. 7.2 litrelik HEMI 'Big Block' canavarının homurtusu ve yukarı açılan gizli farları ile Amerikan sanayi tarihinin unutulmaz başyapıtı.",
    features: ["Hemi Big Block Gücü", "Gizlenebilir Ön Farlar", "Krom Detaylı Klasik Gövde", "Koleksiyon Garanti Belgesi"],
    gallery: [],
    deliveryTime: "Özel Klasik Koleksiyon (Hemen Teslim)"
  },
  29: {
    id: "ford-mustang",
    brand: "Ford",
    model: "Mustang Mach 1 GT",
    year: 2023,
    price: "₺6,400,000",
    category: "Spor Coupe",
    image: "https://tr.pinterest.com/pin/6896205673057433/",
    specs: {
      power: "480 HP",
      acceleration: "4.3 sn",
      topSpeed: "267 km/s",
      engine: "5.0L Coyote V8"
    },
    description: "Safkan atmosferik performansın son kalesi, ünlü Coyote V8 motorlu Mach 1. Vahşi homurtusu, aerodinamik ekleri ve pist tescilli soğutucu kanalları ile Amerikan vahşiliğinin asfalttaki yankısı.",
    features: ["Coyote V8 Atmosferik Motor", "Active Valve Egzoz Ses Ayarı", "MagneRide Sönümleme", "Brembo Fren Kaliperleri"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  30: {
    id: "mazda-rx7",
    brand: "Mazda",
    model: "RX-7 Spirit R FD",
    year: 2002,
    price: "₺3,950,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1121255638451688408/",
    specs: {
      power: "280 HP",
      acceleration: "4.8 sn",
      topSpeed: "255 km/s",
      engine: "1.3L Twin-Turbo Rotary (13B-REW)"
    },
    description: "Sıra dışı döner gövdeli (Rotary) çift turbolu motor mimarisiyle otomotiv mühendisliği aykırılığı. Muhteşem 50:50 kusursuz gövde dengesi ve pop-up (açılır kapanır) ön farlarıyla efsanevi Japon şaheseri.",
    features: ["13B-REW Rotary Çift Motor", "Pop-up Açılır Farlar", "RE Amemiya Karbon Filtreler", "BBS Özel Spirit R Jantlar"],
    gallery: [],
    deliveryTime: "Özel İthalat (Hemen Teslim)"
  },
  31: {
    id: "lada-niva",
    brand: "Lada",
    model: "Niva Urban 4x4",
    year: 2023,
    price: "₺850,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/591941944802628952/",
    specs: {
      power: "83 HP",
      acceleration: "17.0 sn",
      topSpeed: "142 km/s",
      engine: "1.7L Tek Nokta Enjeksiyonlu"
    },
    description: "Sibirya soğuklarına ve en ağır arazi şartlarına kırılmadan meydan okumak üzere tasarlanmış mekanik çelik kalesi. Hiçbir elektronik karmaşıklığa sahip olmayan saf mekanik arazi canavarı.",
    features: ["Sürekli Dört Tekekerden Çekiş (AWD)", "Arazi Şanzımanı / Takviyeli", "Yüksek Darbe Emici Çelik Karter", "Minimalist Sibirya Isıtıcısı"],
    gallery: [],
    deliveryTime: "Stokta Var (Anında)"
  },
  32: {
    id: "corvette-c8",
    brand: "Chevrolet",
    model: "Corvette Stingray C8",
    year: 2024,
    price: "€210,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/900157044295763885/",
    specs: {
      power: "495 HP",
      acceleration: "2.9 sn",
      topSpeed: "312 km/s",
      engine: "6.2L LT2 V8 (Mid-Engine)"
    },
    description: "Corvette tarihinde ilk kez ortadan motorlu (Mid-engine) devrimsel yerleşim kararı. Amerikan spor otomobil geleneğiyle süper şasenin inanılmaz birleşimi sonucunda ortaya çıkan üstün performans makinesi.",
    features: ["Ortadan Motorlu Düzen", "Z51 Performans Paketi", "Sökülebilir Tavan (Targa)", "Performans Veri Kaydedici"],
    gallery: [],
    deliveryTime: "~6-8 Hafta"
  },
  33: {
    id: "subaru-wrx",
    brand: "Subaru",
    model: "Impreza WRX STI",
    year: 2011,
    price: "₺1,900,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/871587334106339577/",
    specs: {
      power: "305 HP",
      acceleration: "5.2 sn",
      topSpeed: "250 km/s",
      engine: "2.5L Turboşarjlı Boxer 4"
    },
    description: "WRC ralli parkurlarından fırlayan simetrik sürekli çekiş efsanesi. Ünlü Boxer motor gürlemesi, devasa ralli spoyleri ve efsanevi altın sarısı ralli jantlarıyla bir dönemin asfalttaki ve çamurdaki en asi canavarı.",
    features: ["Symmetrical AWD Çekiş", "SI-Drive Akıllı Gaz Kelebeği", "Multi-mode DCCD Diferansiyel", "Hafif Brembo Frenler"],
    gallery: [],
    deliveryTime: "Özel Ralli Koleksiyon"
  },
  34: {
    id: "renault-toros",
    brand: "Renault",
    model: "12 Toros",
    year: 1997,
    price: "₺195,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/331225747594158914/",
    specs: {
      power: "72 HP",
      acceleration: "16.5 sn",
      topSpeed: "145 km/s",
      engine: "1.4L Atmosferik Sıralı 4"
    },
    description: "Anadolu'nun her dik yokuşunu ve dağ yolunu aşmasıyla bilinen, dayanıklılığıyla nesilden nesile aktarılarak efsaneleşen dev çınar Renault 12 Toros. Kolay bakımı ve yüksek yerden mesafesi ile sarsılmaz bir halk dostu.",
    features: ["Yüksek Zemin Boşluğu", "Dayanıklı Klasik Süspansiyon", "Anadolu Dağ Dişlisi", "Orijinal Toros Aynaları"],
    gallery: [],
    deliveryTime: "Anında Teslim"
  },
  35: {
    id: "golf-r",
    brand: "Volkswagen",
    model: "Golf 8 R",
    year: 2024,
    price: "₺3,850,000",
    category: "Lüks Performans",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "320 HP",
      acceleration: "4.7 sn",
      topSpeed: "270 km/s",
      engine: "2.0L TSI EA888 Gen4"
    },
    description: "Günlük pratiklik ile üst seviye sıcak hatchback (Hot-hatch) performansının doruk noktası. R-Performance tork yönlendirmeli 4Motion dört tekerden çekiş altyapısı ve heyecan verici drift moduyla tam bir dinamizm canavarı.",
    features: ["4Motion Tork Vektörleme", "Drift Sürüş Modu", "Akrapovič Titanyum Arka Egzoz", "DCC Adaptif Şasi Kontrolü"],
    gallery: [],
    deliveryTime: "~4-6 Hafta"
  },
  36: {
    id: "fiat-egea",
    brand: "Fiat",
    model: "Egea Sedan 1.6 Multijet II",
    year: 2024,
    price: "₺1,250,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/122089839876815377/",
    specs: {
      power: "130 HP",
      acceleration: "9.6 sn",
      topSpeed: "209 km/s",
      engine: "1.6L DCT Multijet Dizel"
    },
    description: "Türkiye'nin en çok tercih edilen, ezber bozan sedanı. 130 beygirlik tork canavarı çift kavramalı Multijet motoru, üstün yakıt tasarrufu ve geniş bagaj hacmi ile tam bir Türk ailesi ve uzun yol dostu.",
    features: ["7 İleri DCT Otomatik Şanzıman", "10 inç Tablet Ekran", "Geniş 520L Bagaj", "Eco Sürüş Modu"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  37: {
    id: "renault-clio",
    brand: "Renault",
    model: "Clio 1.0 TCe",
    year: 2024,
    price: "₺980,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/630785491598601302/",
    specs: {
      power: "90 HP",
      acceleration: "12.2 sn",
      topSpeed: "175 km/s",
      engine: "1.0L Turbo Benzin"
    },
    description: "Şehir içi sürüşün pratik ve şık tescilli lideri. Yenilenen agresif LED far imzası, akıllı kokpiti ve düşük yakıt tüketimiyle günlük hayatta her caddede ve sokakta görebileceğiniz dinamik bir şehir hatchback'i.",
    features: ["Full LED Pure Vision Farlar", "X-Tronic Şanzıman", "Multi-Sens Sürüş Modları", "Kablosuz Carplay"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  38: {
    id: "toyota-corolla",
    brand: "Toyota",
    model: "Corolla 1.8 Hybrid",
    year: 2024,
    price: "₺1,680,000",
    category: "Günlük Kullanım",
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "140 HP",
      acceleration: "9.3 sn",
      topSpeed: "180 km/s",
      engine: "1.8L Kendi Kendini Şarj Eden Hibrit"
    },
    description: "Dünya otomotiv tarihinin en çok satan ve en dayanıklı unvanına sahip efsanesi Corolla. 5. jenerasyon hibrit teknolojisiyle mükemmel bir şehir içi pürüzsüz sessizlik ve adeta koklayan yakıt tüketimi sunar.",
    features: ["Toyota Safety Sense 3.0", "Evrensel E-CVT Şanzıman", "Sessiz EV Sürüş Seçeneği", "Kablosuz Şarj Alanı"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  39: {
    id: "peugeot-3008",
    brand: "Peugeot",
    model: "3008 1.2 Hybrid",
    year: 2024,
    price: "₺2,150,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/1107463364597783689/",
    specs: {
      power: "136 HP",
      acceleration: "10.0 sn",
      topSpeed: "201 km/s",
      engine: "1.2L e-DCS6 Mild-Hybrid"
    },
    description: "Göz alıcı fütüristik tasarımı ve ödüllü i-Cockpit kabini ile Türkiye yollarının en favori aile SUV'larından biri. Şerit konumlandırma asistanı ve panaromik cam tavanı ile modern bir şölen sunar.",
    features: ["Aslan Pençesi LED Farlar", "3D i-Cockpit Gösterge Paneli", "Panoramic Cam Tavan", "Grip Control Arazi Destek"],
    gallery: [],
    deliveryTime: "~3-4 Hafta"
  },
  40: {
    id: "honda-civic",
    brand: "Honda",
    model: "Civic 1.5 VTEC Turbo",
    year: 2024,
    price: "₺1,750,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/21181060744127600/",
    specs: {
      power: "182 HP",
      acceleration: "8.1 sn",
      topSpeed: "220 km/s",
      engine: "1.5L VTEC Turbo Benzin"
    },
    description: "Hırçın sürüş karakterini konforla birleştiren Japon mühendislik ikonu. CVT şanzıman ile pürüzsüz hızlanan 182 beygirlik güçlü VTEC motoru ve meşhur kusursuz yol tutuşuyla günlük hayatın en keyifli sedanlarından biridir.",
    features: ["Honda SENSING Güvenlik", "Petek Tasarımlı Klima Menfezleri", "Deri Isıtmalı Koltuklar", "Kırmızı Kadran Modu"],
    gallery: [],
    deliveryTime: "~1-3 Hafta"
  },
  41: {
    id: "nissan-qashqai",
    brand: "Nissan",
    model: "Qashqai 1.3 DIG-T MHEV",
    year: 2024,
    price: "₺1,890,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/800022321307692219/",
    specs: {
      power: "158 HP",
      acceleration: "9.2 sn",
      topSpeed: "198 km/s",
      engine: "1.3L Hafif Hibrit Turbo"
    },
    description: "SUV segmentinin mucidi ve ailelerin en çok rağbet gösterdiği pratik şehir crossover'ı. Kaliteli yumuşak malzemelerle bezenmiş kabini, ProPILOT sürüş asistanı ve konfor odaklı süspansiyonu ile hayat kolaylaştırır.",
    features: ["ProPILOT Sürüş Asistanı", "12.3 inç Navigasyon Ekranı", "Akıllı Çevre Görüş Kamerası", "Ayaklar Serbest Bagaj Kapısı"],
    gallery: [],
    deliveryTime: "~2-4 Hafta"
  },
  42: {
    id: "dacia-duster",
    brand: "Dacia",
    model: "Duster 1.5 dCi Extreme 4x4",
    year: 2023,
    price: "₺1,320,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/12384967701426928/",
    specs: {
      power: "115 HP",
      acceleration: "10.4 sn",
      topSpeed: "175 km/s",
      engine: "1.5L dCi Dayanıklı Dizel"
    },
    description: "Anadolu'da ve şantiyelerde adeta bir efsane olan, kırılmaz arazi keçisi Duster. Sürekli 4x4 kilit modu ve ekonomik dizel ünitesi sayesinde hem şehirde hem de her türlü zorlu dağ ve çamur yollarında sarsılmaz.",
    features: ["4x4 Arazi Kilidi", "Yokuş İniş Destek Sistemi", "Extreme Bakır İç Tasarım", "360 Derece Kamera Sistemi"],
    gallery: [],
    deliveryTime: "Stokta Var (Hemen)"
  },
  43: {
    id: "skoda-octavia",
    brand: "Skoda",
    model: "Octavia 1.5 TSI e-Tec",
    year: 2024,
    price: "₺1,820,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/1152851204632646109/",
    specs: {
      power: "150 HP",
      acceleration: "8.5 sn",
      topSpeed: "230 km/s",
      engine: "1.5L Mild-Hybrid DSG TSI"
    },
    description: "Liftback gövde tipinin sunduğu devasa 600 litrelik sınıf lideri yükleme hacmiyle tam bir aile dostu. DSG şanzımanın pürüzsüz vites geçişleri, Simply Clever akılcı detayları ve üst düzey arka bacak mesafesi ile rakipsiz konfor.",
    features: ["Simply Clever Akılcı Çözümler", "Kanyon Genişliği 600L Bagaj", "Shift-by-wire Vites Teknolojisi", "Sezgisel Adaptif Hız Sınır"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  44: {
    id: "hyundai-i20",
    brand: "Hyundai",
    model: "i20 1.4 MPI",
    year: 2024,
    price: "₺920,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/186266134585700563/",
    specs: {
      power: "100 HP",
      acceleration: "12.9 sn",
      topSpeed: "176 km/s",
      engine: "1.4L Otomatik Atmosferik"
    },
    description: "Arıza yapmayan efsanevi mekanik altyapısı ve tork konvertörlü tam otomatik şanzımanıyla şehir içi kullanımın sorunsuz şampiyonu. Yeni nesil keskin sportif gövdesi ve zengin donanımı ile her bütçeye uygun.",
    features: ["Sorunsuz Tam Otomatik Şanzıman", "Geri Görüş Kamerası & Sensör", "Sportif LED Gündüz Farları", "Sınıfının En Geniş Yaşam Alanı"],
    gallery: [],
    deliveryTime: "Anında Teslim"
  },
  45: {
    id: "ford-focus",
    brand: "Ford",
    model: "Focus 1.5 EcoBlue",
    year: 2024,
    price: "₺1,790,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/728668414749385800/",
    specs: {
      power: "115 HP",
      acceleration: "10.1 sn",
      topSpeed: "195 km/s",
      engine: "1.5L EcoBlue Dizel"
    },
    description: "Yol tutuş dendiğinde sınıfta ilk akla gelen rakipsiz dinamik Focus. Virajlardaki üstün hassasiyeti, efsanevi süspansiyon geometrisi ve 8 ileri gerçek tork konvertörlü şanzımanı ile tam bir sürüş aşkı sedanı.",
    features: ["8 İleri Profesyonel Şanzıman", "Bağımsız Arka Süspansiyon", "13.2 inç Dev İletişim Ekranı", "Seçilebilir Sürüş Modları"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  46: {
    id: "tesla-modely",
    brand: "Tesla",
    model: "Model Y Long Range",
    year: 2024,
    price: "₺3,100,000",
    category: "Elektrikli",
    image: "https://tr.pinterest.com/pin/742460688608735058/",
    specs: {
      power: "514 HP",
      acceleration: "5.0 sn",
      topSpeed: "217 km/s",
      engine: "Çift Motor AWD (Elektrikli)"
    },
    description: "Otomotiv pazarında son yılların küresel satış şampiyonu, devrim niteliğindeki tam elektrikli aile SUV'u. Muazzam iç mekan hacmi, cam tavan konferansı, otopilot yazılımı ve sarsıcı tork ivmelenmesiyle geleceğin günlük aile aracı.",
    features: ["Premium Cam Tavan", "Gelişmiş Fütüristik Otopilot", "Kayıpsız Isı Pompası Sistemi", "2100+ Litre Toplam Bagaj Hacmi"],
    gallery: [],
    deliveryTime: "~1 Hafta"
  },
  47: {
    id: "bmw-320i",
    brand: "BMW",
    model: "320i Sedan M Sport",
    year: 2024,
    price: "₺3,450,000",
    category: "Günlük Kullanım",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "170 HP",
      acceleration: "8.1 sn",
      topSpeed: "230 km/s",
      engine: "1.6L TwinPower Turbo 4"
    },
    description: "Yönetici sınıfının en karizmatik ve arkadan itişli safkan temsilcisi 3 Serisi. Yenilenen kavisli çift ekran yerleşimi, üst düzey premium yalıtımı ve M Sport paketiyle prestiji her kilometreye taşır.",
    features: ["BMW Live Cockpit Professional", "M Sport Süspansiyon", "Harman Kardon Ses Sistemi", "Arkadan İtiş Sürüş karakteri"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  48: {
    id: "mercedes-300sl",
    brand: "Mercedes-Benz",
    model: "300 SL Gullwing W198",
    year: 1954,
    price: "€3,400,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/866450415819253539/",
    specs: {
      power: "215 HP",
      acceleration: "8.8 sn",
      topSpeed: "260 km/s",
      engine: "3.0L Mekanik Enjeksiyonlu Sıralı 6"
    },
    description: "Yukarı doğru açılan efsanevi 'Martı Kanat' (Gullwing) kapılarıyla otomotiv mühendisliği tarihinin en büyük efsanesi. Dünyanın ilk doğrudan benzin enjeksiyonlu otomobili olan bu şaheser, çağları aşan bir sanat tasarımıdır.",
    features: ["İkonik Gullwing Martı Kapılar", "Mekanik Direkt Enjeksiyon", "Hafif Boru Tipi Çelik Kafes", "Dönemlik Orijinal Seyahat Bavulu"],
    gallery: [],
    deliveryTime: "Özel Antika Müzayedesi"
  },
  49: {
    id: "jaguar-etype",
    brand: "Jaguar",
    model: "E-Type Roadster Gen 1",
    year: 1961,
    price: "€295,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/841399142870055065/",
    specs: {
      power: "265 HP",
      acceleration: "6.9 sn",
      topSpeed: "241 km/s",
      engine: "3.8L XK Sıralı 6"
    },
    description: "Enzo Ferrari'nin kendi ağzıyla 'gelmiş geçmiş en güzel otomobil' olarak tanımladığı efsanevi İngiliz aristokratı. Upuzun motor kaputu, tel jantları ve eşsiz klasik sesiyle sokakların en büyük zarafet sembolü.",
    features: ["Krom Tel Jantlar", "Ahşap Direksiyon Simidi", "Üçlü Karbüratör Sistemi", "Smiths Klasik Göstergeler"],
    gallery: [],
    deliveryTime: "Özel İthalat"
  },
  50: {
    id: "volkswagen-beetle",
    brand: "Volkswagen",
    model: "Beetle 1303s (Vosvos)",
    year: 1974,
    price: "₺450,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/668151294749488027/",
    specs: {
      power: "50 HP",
      acceleration: "21.0 sn",
      topSpeed: "135 km/s",
      engine: "1.6L Hava Soğutmalı Boxer 4"
    },
    description: "Bütün dünyanın 'Vosvos' veya 'Bug' olarak adlandırdığı, nesilleri büyütmüş sevgi yumağı. Arkada konumlu efsane pırpırlı hava soğutmalı motoru, bombeli ön camıyla her yaştan insanın yüzünde tebessüm uyandırır.",
    features: ["Hava Soğutmalı Pırpır Motor", "Bombeli Klasik Ön Cam", "Orijinal Çelik Jant Kapakları", "Deri Kaplı Efsane Kokpit"],
    gallery: [],
    deliveryTime: "Hemen Teslim"
  },
  51: {
    id: "chevrolet-belair",
    brand: "Chevrolet",
    model: "Bel Air Coupe 1957",
    year: 1957,
    price: "₺3,800,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1036109458047787792/",
    specs: {
      power: "283 HP",
      acceleration: "8.2 sn",
      topSpeed: "190 km/s",
      engine: "4.6L Super Turbo Fire V8"
    },
    description: "Kuyruk yüzgeçleri, inanılmaz krom detayları ve 1950'ler Amerikan rüyasının asfalttaki mutlak zirvesi Bel Air. V8 motorunun pürüzsüz güçlü çalışması ve canlı iki tonlu rengiyle adeta bir dönem makinesi.",
    features: ["Krom Kuyruk Fin Detayları", "İki Tonlu Canlı Boya Kaplama", "Whitewall Beyaz Yanak Lastikler", "Orijinal Hidrolik Sürüş"],
    gallery: [],
    deliveryTime: "Koleksiyondan Hemen Satılık"
  },
  52: {
    id: "shelby-cobra",
    brand: "Shelby",
    model: "Cobra 427 S/C",
    year: 1965,
    price: "€1,200,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1090082284786171638/",
    specs: {
      power: "485 HP",
      acceleration: "4.2 sn",
      topSpeed: "265 km/s",
      engine: "7.0L Ford Cobra V8"
    },
    description: "Carroll Shelby'nin hafif İngiliz şasisini hırçın Amerikan V8 Ford canavarıyla birleştirerek yarattığı ölümcül yarış makinesi. Tüy kadar hafif gövdesi ve rüzgardan nefes kesen üstü açık sürüşüyle vahşi spor otomobil simgesi.",
    features: ["Yan Çıkışlı Çıplak Egzoz", "Krom Emniyet Barı", "Hafif Alüminyum Şasi Karoser", "Yarış Şerit Çizgileri"],
    gallery: [],
    deliveryTime: "Uluslararası Antika Sevkiyatı"
  },
  53: {
    id: "bmw-e30m3",
    brand: "BMW",
    model: "M3 E30 Coupe",
    year: 1989,
    price: "₺4,500,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/834925218457495032/",
    specs: {
      power: "215 HP",
      acceleration: "6.7 sn",
      topSpeed: "240 km/s",
      engine: "2.3L S14 Yarış Motoru"
    },
    description: "Geniş çamurlukları, agresif spoyleri ve efsanevi S14 DOHC motoruyla DTM yarış pistlerini kasıp kavuran orijinal M3. Homologasyon kuralları sayesinde yollara çıkan gerçek ve en köklü M ruhu efsanesi.",
    features: ["Genişletilmiş Kutu Çamurluklar", "Dog-leg Geri Vites Şanzıman", "M Klasik Yarış Koltukları", "BBS Özel Dönem Telleri"],
    gallery: [],
    deliveryTime: "Müze Kondisyonu Teslimi"
  },
  54: {
    id: "lancia-delta-evo",
    brand: "Lancia",
    model: "Delta HF Integrale Evo II",
    year: 1993,
    price: "₺3,200,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/347832771225873717/",
    specs: {
      power: "215 HP",
      acceleration: "5.7 sn",
      topSpeed: "220 km/s",
      engine: "2.0L Turbo 16V"
    },
    description: "Dünya Ralli Şampiyonası'nda (WRC) üst üste 6 kez şampiyon olarak kırılması imkansız bir rekora imza atan İtalyan ralli canavarı Integrale. Kaslı şişkin çamurlukları ve mükemmel dört çeker tutuşuyla efsanevi bir canavar.",
    features: ["6x WRC Şampiyonluk Logoları", "Sürekli Dört Tekerlekten Çekiş", "Alcantara Recaro Koltuklar", "Ayarlanabilir Arka Kanat"],
    gallery: [],
    deliveryTime: "Özel İtalyan Garajından"
  },
  55: {
    id: "ferrari-f40",
    brand: "Ferrari",
    model: "F40",
    year: 1987,
    price: "€2,900,000",
    category: "Süper Spor",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "478 HP",
      acceleration: "4.1 sn",
      topSpeed: "324 km/s",
      engine: "2.9L İkiz-Turbo V8"
    },
    description: "Enzo Ferrari'nin vefatından önce onayladığı son efsanevi süper otomobil. Hiçbir konfor donanımı, hidrolik yardımı, ABS sistemi barındırmayan saf karbon fiberden üretilmiş çıplak yarış şampiyonu; saf sürüşün zirvesi.",
    features: ["Çıplak Karbon Detaylar", "Katalizörsüz Saf Egzoz Sesi", "Yükseklik Ayarlı Süspansiyon", "Pininfarina Rüzgar Tüneli Dizayn"],
    gallery: [],
    deliveryTime: "Sertifikalı Ferrari Classiche"
  },
  56: {
    id: "nissan-skyline-r34",
    brand: "Nissan",
    model: "Skyline GT-R R34 V-Spec II",
    year: 2002,
    price: "₺7,855,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1042513013740675715/",
    specs: {
      power: "280 HP",
      acceleration: "4.9 sn",
      topSpeed: "250 km/s",
      engine: "2.6L Twin-Turbo I6 (RB26DETT)"
    },
    description: "Japon modifiye kültürünün ve yarış oyunlarının taçsız kralı Godzilla R34. Yenilmez çift turbolu döküm demir RB26 motoru ve ATTESA aktif akıllı çekiş sistemi ile her otomobil severin rüyalarını süsleyen nihai makine.",
    features: ["RB26DETT Efsanevi Motor", "ATTESA E-TS Pro 4WD", "Mesafe Ölçer Dijital Panel", "Brembo Fabrika Frenleri"],
    gallery: [],
    deliveryTime: "Japonya Özel Gümrüklü Teslimat"
  },
  57: {
    id: "astonmartin-db5",
    brand: "Aston Martin",
    model: "DB5 James Bond style",
    year: 1964,
    price: "€1,100,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/914862417314771/",
    specs: {
      power: "282 HP",
      acceleration: "8.0 sn",
      topSpeed: "230 km/s",
      engine: "4.0L Doğal Emişli Sıralı 6"
    },
    description: "James Bond filmleriyle sinema tarihinin en ünlü ve en karizmatik otomobiline dönüşen gümüş asalet anıtı DB5. İngiliz el işçiliği deri koltukları, ahşap detayları ve kusursuz duruşuyla muazzam bir zarafet sembolü.",
    features: ["Gümüş Huş (Silver Birch) Boya", "El Yapımı Tel Jantlar", "Dönemlik Ahşap Kokpit", "Koleksiyon James Bond Kiti"],
    gallery: [],
    deliveryTime: "Londra Butik Klasik Garajı"
  },
  58: {
    id: "lexus-lfa",
    brand: "Lexus",
    model: "LFA V10",
    year: 2012,
    price: "€980,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/1147643917681556775/",
    specs: {
      power: "560 HP",
      acceleration: "3.7 sn",
      topSpeed: "325 km/s",
      engine: "4.8L Doğal Emişli V10 (1LR-GUE)"
    },
    description: "Lexus'un 10 yılda el yapımı karbon fiberden inşa ettiği, Yamaha akustik departmanı tarafından bir F1 aracı gibi cıyaklayacak tonda sesi ayarlanan muazzam mühendislik zirvesi. Dünyanın en iyi ses veren motoruna sahiptir.",
    features: ["Yamaha Akustik Ses Odası", "Kompozit Karbon Fiber Gövde", "Dijital Devir Kadranı", "Üçlü Üçgen Arka Egzoz"],
    gallery: [],
    deliveryTime: "Sınırlı Üretim (Özel İthalat)"
  },
  59: {
    id: "citroen-ds",
    brand: "Citroën",
    model: "DS 21 Pallas",
    year: 1970,
    price: "₺1,400,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/1900024834985226/",
    specs: {
      power: "109 HP",
      acceleration: "12.5 sn",
      topSpeed: "178 km/s",
      engine: "2.1L Karbüratörlü Sıralı 4"
    },
    description: "Yollara çıktığı gün otomotiv dünyasını şok eden, fütüristik 'Tanrıça' lakaplı Fransız DS. Gelişmiş hidro-pnömatik süspansiyonu sayesinde yoldaki hiçbir tümseği hissettirmeyen, adeta uçan halı yumuşaklığına sahip tasarım anıtı.",
    features: ["Hidro-Pnömatik Süspansiyon", "Dönen Viraj Farları", "Tek Kollu Direksiyon Simidi", "Pallas Lüks Kadife Döşeme"],
    gallery: [],
    deliveryTime: "Hemen Teslim (Klasik Belgeli)"
  },
  60: {
    id: "opel-corsa",
    brand: "Opel",
    model: "Corsa 1.2 Turbo GS",
    year: 2024,
    price: "₺1,080,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/455496949816967722/",
    specs: {
      power: "130 HP",
      acceleration: "8.7 sn",
      topSpeed: "208 km/s",
      engine: "1.2L Direct Injection Turbo"
    },
    description: "Alman mühendisliğinin keskin tasarım diliyle donatılmış dinamik şehir hatchback'i. GS donanımının getirdiği sportif detaylar, siyah kontrast tavanı ve canlı sürüş karakteri ile günlük hayatta son derece popüler bir sürüş sunar.",
    features: ["GS Spor Gövde Kit", "Siyah Çift Renk Tavan", "IntelliLux LED Matrix Farlar", "F1 Vites Kulakçıkları"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  61: {
    id: "mini-cooper",
    brand: "Mini",
    model: "Cooper S Mark I",
    year: 1967,
    price: "₺950,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/862228291138478493/",
    specs: {
      power: "76 HP",
      acceleration: "10.9 sn",
      topSpeed: "156 km/s",
      engine: "1.3L BMC A-Serisi Sıralı 4"
    },
    description: "Go-kart gibi inanılmaz yol tutuşuyla dev spor otomobilleri virajlarda dize getiren, Monte Carlo ralli şampiyonu orijinal efsane Mini Cooper S. Ufacık boyutlarının ardında yatan devasa tarih her sokakta merak uyandırır.",
    features: ["Go-Kart Tipi Viraj Süspansiyonu", "Krom Sürgülü Pencereler", "Merkezi İkili Krom Egzoz", "Dönemlik Ralli Sis Farları"],
    gallery: [],
    deliveryTime: "Restorasyonlu Kondisyon (Hemen)"
  },
  62: {
    id: "volvo-xc90",
    brand: "Volvo",
    model: "XC90 B5 AWD",
    year: 2024,
    price: "₺4,950,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/3307399713108196/",
    specs: {
      power: "250 HP",
      acceleration: "7.7 sn",
      topSpeed: "180 km/s",
      engine: "2.0L Mild-Hybrid Dizel AWD"
    },
    description: "Dünyanın en güvenli aile SUV'u olarak kabul edilen İsveç kalesi XC90. 7 kişilik oturma kapasitesi, İskandinav minimalist tasarım esintileri ve üst sınıf deri döşeme kalitesiyle günlük lüks aile yolculukları için tasarlanmıştır.",
    features: ["7 Kişilik Geniş Kabin", "City Safety Çarpışma Engelleyici", "Bowers & Wilkins Ses Sürümü", "Dört Köşe Havalı Süspansiyon"],
    gallery: [],
    deliveryTime: "~2-3 Hafta"
  },
  63: {
    id: "volkswagen-golf-tsi",
    brand: "Volkswagen",
    model: "Golf 1.5 eTSI R-Line",
    year: 2024,
    price: "₺1,750,000",
    category: "Günlük Kullanım",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "150 HP",
      acceleration: "8.4 sn",
      topSpeed: "224 km/s",
      engine: "1.5L TSI Mild-Hybrid DSG"
    },
    description: "Sınıfının kurallarını belirleyen hatchback segmenti lideri Golf. 48V hafif hibrit eTSI motoru ile süzülme modunda yakıt harcamazken, R-Line tasarım paketiyle sportif ve karizmatik bir günlük sürüş kalitesi sunar.",
    features: ["IQ.Light Matrix LED Farlar", "Panoramik Açılır Cam Tavan", "Harman Kardon Premium Ses", "Süzülme Modu Verimliliği"],
    gallery: [],
    deliveryTime: "~1 Hafta"
  },
  64: {
    id: "seat-leon",
    brand: "Seat",
    model: "Leon 1.5 eTSI FR",
    year: 2024,
    price: "₺1,490,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/182677328632694280/",
    specs: {
      power: "150 HP",
      acceleration: "8.5 sn",
      topSpeed: "217 km/s",
      engine: "1.5L eTSI Mild-Hybrid DSG"
    },
    description: "İspanyol mizaçlı dinamik ve keskin tasarım çizgileri. FR paketinin sportif süspansiyonu, kablo ucuyla boydan boya uzanan karizmatik LED arka stop imzasıyla gençlerin ve dinamik günlük kullanıcıların gözdesi.",
    features: ["Boydan Boya LED Stoplar", "FR Spor Süspansiyon", "3 Bölgeli Otomatik Klima", "Kör Nokta Tespit Sistemi"],
    gallery: [],
    deliveryTime: "~1-2 Hafta"
  },
  65: {
    id: "suzuki-jimny",
    brand: "Suzuki",
    model: "Jimny 1.5 GLX AllGrip",
    year: 2024,
    price: "₺1,620,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/796081671623132970/",
    specs: {
      power: "102 HP",
      acceleration: "13.5 sn",
      topSpeed: "145 km/s",
      engine: "1.5L Atmosferik Benzin"
    },
    description: "Küçük, sevimli ama ağır arazi koşullarında dev SUV'ları utandıran retro kutu tasarım harikası Jimny. Hem şehir içi dar park yerlerine sığacak kadar pratik hem de hafta sonu çamurlu doğa kamplarının vazgeçilmezi.",
    features: ["AllGrip Pro Takviyeli 4S Şanzıman", "Retro Kutu Tasarım Çizgileri", "Far Yıkama Sistemi", "Darbe Emici Merdiven Şasi"],
    gallery: [],
    deliveryTime: "~1 Hafta"
  },
  66: {
    id: "pagani-zonda",
    brand: "Pagani",
    model: "Zonda Cinque Roadster",
    year: 2010,
    price: "€8,500,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/719027896743755270/",
    specs: {
      power: "678 HP",
      acceleration: "3.4 sn",
      topSpeed: "350 km/s",
      engine: "7.3L AMG El Yapımı V12"
    },
    description: "Sadece 5 adet üretilmiş karbon-titanyum mühendislik heykeli Pagani Zonda Cinque. Sanat ile hızın el yapımı kusursuz evliliği. Yırtıcı AMG V12 motorunun çığlıkları kulak zarlarınızı titreten bir şölen sunar.",
    features: ["Karbotanyum Şasi", "Titanyum-Seramik Egzoz", "El Yapımı İtalyan Deri Detay", "Özel Üretim No Plakası"],
    gallery: [],
    deliveryTime: "Milyarder Koleksiyon İthalat"
  },
  67: {
    id: "mclaren-f1",
    brand: "McLaren",
    model: "F1 Legend",
    year: 1995,
    price: "€18,500,000",
    category: "Süper Spor",
    image: "https://tr.pinterest.com/pin/965670345088747891/",
    specs: {
      power: "627 HP",
      acceleration: "3.2 sn",
      topSpeed: "386 km/s",
      engine: "6.1L BMW M S70/2 V12"
    },
    description: "Tüm zamanların en iyi mühendislik ürünü kabul edilen, ortada tek sürücü koltuğuna sahip, motor kaput içi ısı yalıtımı için gerçek altınla kaplanmış mutlak hiper otomobil kralı. Atmosferik hız rekoru halen onun elindedir.",
    features: ["Merkezi Sürücü Oturma Pozisyonu", "24-Karat Altın Isı Yansıtıcı Varaklar", "Karbon Fiber Monokok Yapı", "Manuel Şanzıman & Sıfır Asistan"],
    gallery: [],
    deliveryTime: "Özel Londra Müzayede Teslimi"
  },
  68: {
    id: "dacia-sandero",
    brand: "Dacia",
    model: "Sandero Stepway 1.0",
    year: 2024,
    price: "₺995,000",
    category: "Günlük Kullanım",
    image: "https://tr.pinterest.com/pin/429179039507244279/",
    specs: {
      power: "90 HP",
      acceleration: "11.7 sn",
      topSpeed: "173 km/s",
      engine: "1.0L Turbo Benzin"
    },
    description: "Yerden yüksek SUV görünümlü yapısı, tavan barları ve uygun fiyatıyla günlük hayatın bütçe dostu pratik modeli. Geniş iç alan ve verimli yakıt tüketimiyle bir şehir dostu.",
    features: ["Modüler Tavan Barları", "Yerden Yüksek Stepway Gövde", "Kablosuz Akıllı Telefon Eşleme", "Yokuş Kalkış Destek Sistemi"],
    gallery: [],
    deliveryTime: "Anında Teslim"
  },
  69: {
    id: "porsche-356",
    brand: "Porsche",
    model: "356 Speedster Classic",
    year: 1956,
    price: "€320,000",
    category: "Klasik Koleksiyon",
    image: "https://tr.pinterest.com/pin/140737557092551924/",
    specs: {
      power: "75 HP",
      acceleration: "13.9 sn",
      topSpeed: "160 km/s",
      engine: "1.6L Hava Soğutmalı Flat-4"
    },
    description: "Porsche adını taşıyan ilk seri üretim modelin, rüzgarı hissettiren en nadide Speedster versiyonu. Alçak ön camı, yuvarlak hatları ve tüy gibi hafif gövdesiyle klasik otomobil seçkinlerinin bir numaralı zarafet abidesi.",
    features: ["Alçak Kesimli Klasik Cam", "Hava Soğutmalı Boxer Ses", "Orijinal Krem Rengi Deri Koltuk", "Klasik Porsche Amblemleri"],
    gallery: [],
    deliveryTime: "Özel Antika Teslimi"
  },
  70: {
    id: "toyota-rav4",
    brand: "Toyota",
    model: "RAV4 2.5 Hybrid AWD",
    year: 2024,
    price: "₺2,950,000",
    category: "Günlük Kullanım",
    image: "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80&w=800",
    specs: {
      power: "222 HP",
      acceleration: "8.1 sn",
      topSpeed: "180 km/s",
      engine: "2.5L Hibrit Petrol AWD-i"
    },
    description: "Dünyanın en çok satan SUV'u unvanına sahip, heybetli, konforlu ve kırılmaz RAV4. Çift elektrikli motoru ve akıllı AWD-i dört çeker sistemi ile karlı kış günlerinden çamurlu piknik yollarına kadar tam güven sağlar.",
    features: ["AWD-i Akıllı Dört Çeker", "Toyota Safety Sense Sürüş Güvenliği", "Kablosuz Şarj & Isıtmalı Direksiyon", "Geniş Koltuk Yaşam Alanı"],
    gallery: [],
    deliveryTime: "~2 Hafta"
  },
  71: {
    id: "mercedes-190e-evo",
    brand: "Mercedes-Benz",
    model: "190E 2.5-16 Evolution II",
    year: 1990,
    price: "₺12,500,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/297096906651884600/",
    specs: {
      power: "235 HP",
      acceleration: "7.1 sn",
      topSpeed: "250 km/s",
      engine: "2.5L Cosworth I4"
    },
    description: "DTM pistlerinin efsanesi. Geniş gövde kiti ve devasa spoyleri ile 90'ların en ikonik homologasyon özel üretimlerinden biri.",
    features: ["Cosworth Motor", "Ayarlanabilir Süspansiyon", "Recaro Spor Koltuklar", "EVO II Gövde Kiti"],
    gallery: [],
    deliveryTime: "Koleksiyon Garajı Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/297096906651884600/"
  },
  72: {
    id: "nissan-skyline-r32",
    brand: "Nissan",
    model: "Skyline GT-R (R32)",
    year: 1989,
    price: "₺6,800,000",
    category: "JDM Efsanesi",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/1006765691678423214/",
    specs: {
      power: "276 HP",
      acceleration: "5.6 sn",
      topSpeed: "250 km/s",
      engine: "2.6L Twin-Turbo RB26"
    },
    description: "Godzilla lakabıyla tanınan, modern dört çeker teknolojisinin öncüsü olan efsanevi Japon spor otomobili.",
    features: ["ATTESA E-TS 4WD", "Super Hicas Yönlendirme", "RB26 Motor", "Dijital Göstergeler"],
    gallery: [],
    deliveryTime: "İthalat Sonrası Teslimat",
    pinterestUrl: "https://tr.pinterest.com/pin/1006765691678423214/"
  },
  73: {
    id: "ferrari-f40",
    brand: "Ferrari",
    model: "F40",
    year: 1987,
    price: "₺180,000,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/1040613057635480090/",
    specs: {
      power: "471 HP",
      acceleration: "4.1 sn",
      topSpeed: "324 km/s",
      engine: "2.9L V8 Twin-Turbo"
    },
    description: "Enzo Ferrari'nin onayladığı son otomobil. Safkan yarış teknolojisi ve ağırlıktan kaçınan minimalist iç mekan.",
    features: ["Karbon Kevlar Gövde", "Pop-up Farlar", "Manuel Şanzıman", "Safkan Yarış Ruhu"],
    gallery: [],
    deliveryTime: "Özel Müzayede Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/1040613057635480090/"
  },
  74: {
    id: "porsche-959",
    brand: "Porsche",
    model: "959 Komfort",
    year: 1986,
    price: "₺45,000,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/1123014857088246782/",
    specs: {
      power: "444 HP",
      acceleration: "3.7 sn",
      topSpeed: "317 km/s",
      engine: "2.8L Twin-Turbo Flat-6"
    },
    description: "Döneminin en gelişmiş otomobili. Ralli pistlerinden doğan dört çeker teknolojisinin zirvesi.",
    features: ["Aktif Dört Çeker", "Hava Soğutmalı Motor", "Geniş Gövde", "Koltuk Isıtma"],
    gallery: [],
    deliveryTime: "Klasik Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/1123014857088246782/"
  },
  75: {
    id: "lamborghini-countach",
    brand: "Lamborghini",
    model: "Countach 25th Anniversary",
    year: 1989,
    price: "₺28,000,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/493496071682249051/",
    specs: {
      power: "449 HP",
      acceleration: "4.7 sn",
      topSpeed: "295 km/s",
      engine: "5.2L V12"
    },
    description: "80'lerin duvar posterlerinin vazgeçilmez yıldızı. Makas kapıların yaratıcısı.",
    features: ["Makas Kapılar", "Karbüratörlü V12 Ses", "Fütüristik Tasarım", "H-Vites"],
    gallery: [],
    deliveryTime: "Özel Ekspertiz",
    pinterestUrl: "https://tr.pinterest.com/pin/493496071682249051/"
  },
  76: {
    id: "honda-crx",
    brand: "Honda",
    model: "CRX Si",
    year: 1988,
    price: "₺1,100,000",
    category: "Günlük Kullanım",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/909093874788882494/",
    specs: {
      power: "105 HP",
      acceleration: "8.5 sn",
      topSpeed: "190 km/s",
      engine: "1.6L SOHC"
    },
    description: "Hafiflik ve pratikliğin en şık buluşması.",
    features: ["Cam Tavan", "Ekonomik Motor", "Hızlı Direksiyon", "Retro Kadranlar"],
    gallery: [],
    deliveryTime: "Hemen Teslim",
    pinterestUrl: "https://tr.pinterest.com/pin/909093874788882494/"
  },
  77: {
    id: "peugeot-205-gti",
    brand: "Peugeot",
    model: "205 GTI 1.9",
    year: 1991,
    price: "₺1,400,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/785596728720567087/",
    specs: {
      power: "130 HP",
      acceleration: "7.8 sn",
      topSpeed: "205 km/s",
      engine: "1.9L I4"
    },
    description: "Hot-hatch dünyasının altın çocuğu. Virajların efendisi.",
    features: ["Hafif Kasa", "Kırmızı Şerit Detaylar", "Sportif Süspansiyon", "Klasik Direksiyon"],
    gallery: [],
    deliveryTime: "Klasik Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/785596728720567087/"
  },
  78: {
    id: "toyota-mr2",
    brand: "Toyota",
    model: "MR2 (AW11)",
    year: 1987,
    price: "₺1,800,000",
    category: "Spor Klasik",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/529806343688827989/",
    specs: {
      power: "115 HP",
      acceleration: "8.0 sn",
      topSpeed: "195 km/s",
      engine: "1.6L 4A-GE"
    },
    description: "Ortadan motorlu Japon sürüş makinesi.",
    features: ["Ortadan Motor", "Pop-up Farlar", "RWD", "Hafif Şasi"],
    gallery: [],
    deliveryTime: "Özel Ekspertiz",
    pinterestUrl: "https://tr.pinterest.com/pin/529806343688827989/"
  },
  79: {
    id: "volvo-240-wagon",
    brand: "Volvo",
    model: "240 Estate",
    year: 1990,
    price: "₺950,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/309200330670871540/",
    specs: {
      power: "115 HP",
      acceleration: "12.0 sn",
      topSpeed: "170 km/s",
      engine: "2.3L I4"
    },
    description: "Kutudan daha kutu, dünyanın en dayanıklı otomobili.",
    features: ["Geniş Bagaj", "Sağlam Şasi", "Kare Tasarım", "Gelişmiş Güvenlik"],
    gallery: [],
    deliveryTime: "Anında Teslimat",
    pinterestUrl: "https://tr.pinterest.com/pin/309200330670871540/"
  },
  80: {
    id: "audi-quattro",
    brand: "Audi",
    model: "Quattro",
    year: 1984,
    price: "₺6,500,000",
    category: "Rally İkonu",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/452048881362492839/",
    specs: {
      power: "200 HP",
      acceleration: "7.1 sn",
      topSpeed: "220 km/s",
      engine: "2.1L Turbo I5"
    },
    description: "Ralli dünyasında dört çeker devrimini başlatan efsane.",
    features: ["Quattro AWD", "I5 Motor Sesi", "Geniş Çamurluklar", "Yarış Mirası"],
    gallery: [],
    deliveryTime: "Klasik Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/452048881362492839/"
  },
  81: {
    id: "bmw-e30-cabrio",
    brand: "BMW",
    model: "325i Convertible",
    year: 1991,
    price: "₺3,200,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/796081671642460197/",
    specs: {
      power: "170 HP",
      acceleration: "7.5 sn",
      topSpeed: "215 km/s",
      engine: "2.5L I6"
    },
    description: "Yaz akşamlarının vazgeçilmezi, klasik BMW şıklığı.",
    features: ["Açılır Tavan", "L6 Motor", "Deri Koltuklar", "Orijinal BBS Jantlar"],
    gallery: [],
    deliveryTime: "Müze Kondisyonu",
    pinterestUrl: "https://tr.pinterest.com/pin/796081671642460197/"
  },
  82: {
    id: "mazda-rx7",
    brand: "Mazda",
    model: "RX-7 (FC)",
    year: 1988,
    price: "₺2,500,000",
    category: "Spor Klasik",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/1121255638451688408/",
    specs: {
      power: "160 HP",
      acceleration: "7.0 sn",
      topSpeed: "220 km/s",
      engine: "1.3L Rotary"
    },
    description: "Wankel motorunun çığlığı, safkan Japon sporcu.",
    features: ["Rotary Motor", "Pop-up Farlar", "Dinamik Sürüş", "Dijital Göstergeler"],
    gallery: [],
    deliveryTime: "Özel Ekspertiz",
    pinterestUrl: "https://tr.pinterest.com/pin/1121255638451688408/"
  },
  83: {
    id: "mitsubishi-starion",
    brand: "Mitsubishi",
    model: "Starion ESI-R",
    year: 1989,
    price: "₺1,700,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/533746993352288172/",
    specs: {
      power: "188 HP",
      acceleration: "7.2 sn",
      topSpeed: "225 km/s",
      engine: "2.6L Turbo"
    },
    description: "80'lerin köşeli tasarım anlayışının en şık örneklerinden biri.",
    features: ["Geniş Gövde", "Turbo Gücü", "Retro İç Mekan", "Sportif Koltuklar"],
    gallery: [],
    deliveryTime: "Hemen Teslim",
    pinterestUrl: "https://tr.pinterest.com/pin/533746993352288172/"
  },
  84: {
    id: "porsche-944",
    brand: "Porsche",
    model: "944 Turbo",
    year: 1986,
    price: "₺2,900,000",
    category: "Klasik Koleksiyon",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/810507264231487991/",
    specs: {
      power: "220 HP",
      acceleration: "6.3 sn",
      topSpeed: "245 km/s",
      engine: "2.5L Turbo I4"
    },
    description: "Mükemmel ağırlık dengesine sahip Porsche efsanesi.",
    features: ["Pop-up Farlar", "Turbo", "Dengeli Şasi", "Klasik Porsche"],
    gallery: [],
    deliveryTime: "Özel Ekspertiz",
    pinterestUrl: "https://tr.pinterest.com/pin/810507264231487991/"
  },
  85: {
    id: "lotus-esprit",
    brand: "Lotus",
    model: "Esprit Turbo",
    year: 1987,
    price: "₺4,200,000",
    category: "Spor Klasik",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/568509152956571948/",
    specs: {
      power: "215 HP",
      acceleration: "5.5 sn",
      topSpeed: "245 km/s",
      engine: "2.2L Turbo I4"
    },
    description: "Keskin çizgileriyle yolların en egzotik İngiliz otomobili.",
    features: ["Fiberglas Gövde", "Ortadan Motor", "Keskin Tasarım", "Hız"],
    gallery: [],
    deliveryTime: "Müze Kondisyonu",
    pinterestUrl: "https://tr.pinterest.com/pin/568509152956571948/"
  },
  86: {
    id: "ford-sierra-cosworth",
    brand: "Ford",
    model: "Sierra RS Cosworth",
    year: 1987,
    price: "₺5,500,000",
    category: "Rally İkonu",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/347832771230585947/",
    specs: {
      power: "204 HP",
      acceleration: "6.5 sn",
      topSpeed: "240 km/s",
      engine: "2.0L Turbo Cosworth"
    },
    description: "Cosworth imzalı motoruyla yolların korkulu rüyası.",
    features: ["Devasa Kanat", "Turbo", "Cosworth Motor", "Yarış Mirası"],
    gallery: [],
    deliveryTime: "Klasik Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/347832771230585947/"
  },
  87: {
    id: "subaru-svx",
    brand: "Subaru",
    model: "SVX",
    year: 1992,
    price: "₺1,500,000",
    category: "Spor Klasik",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/6685099442353069/",
    specs: {
      power: "230 HP",
      acceleration: "7.3 sn",
      topSpeed: "230 km/s",
      engine: "3.3L Flat-6"
    },
    description: "Uçak kabini tasarımlı camları ve fütüristik çizgilerle Subaru.",
    features: ["Cam Tasarımı", "Boxer Motor", "AWD", "Lüks İç Mekan"],
    gallery: [],
    deliveryTime: "Hemen Teslim",
    pinterestUrl: "https://tr.pinterest.com/pin/6685099442353069/"
  },
  88: {
    id: "isuzu-vehicross",
    brand: "Isuzu",
    model: "VehiCROSS",
    year: 1999,
    price: "₺1,900,000",
    category: "SUV",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/309200330658691626/",
    specs: {
      power: "215 HP",
      acceleration: "8.5 sn",
      topSpeed: "170 km/s",
      engine: "3.5L V6"
    },
    description: "Gelecekten gelmiş gibi görünen off-road makinesi.",
    features: ["Off-road Yeteneği", "Fütüristik Tasarım", "V6 Motor", "4WD"],
    gallery: [],
    deliveryTime: "Özel Teslimat",
    pinterestUrl: "https://tr.pinterest.com/pin/309200330658691626/"
  },
  89: {
    id: "cadillac-allante",
    brand: "Cadillac",
    model: "Allanté",
    year: 1990,
    price: "₺2,200,000",
    category: "Lüks",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/347832771228701598/",
    specs: {
      power: "200 HP",
      acceleration: "8.2 sn",
      topSpeed: "200 km/s",
      engine: "4.5L V8"
    },
    description: "İtalyan tasarımı ve Amerikan gücünün birleşimi.",
    features: ["Pininfarina Tasarım", "V8 Motor", "Deri Koltuklar", "Dijital Panel"],
    gallery: [],
    deliveryTime: "Klasik Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/347832771228701598/"
  },
  90: {
    id: "chrysler-crossfire",
    brand: "Chrysler",
    model: "Crossfire",
    year: 2004,
    price: "₺1,300,000",
    category: "Spor Klasik",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/560768591122084010/",
    specs: {
      power: "215 HP",
      acceleration: "6.5 sn",
      topSpeed: "250 km/s",
      engine: "3.2L V6"
    },
    description: "Mercedes teknolojisi ve Amerikan tasarımı.",
    features: ["V6", "Aktif Spoiler", "Mercedes Şanzıman", "Spor Tasarım"],
    gallery: [],
    deliveryTime: "Hemen Teslim",
    pinterestUrl: "https://tr.pinterest.com/pin/560768591122084010/"
  },
  91: {
    id: "nissan-silvia-s15",
    brand: "Nissan",
    model: "Silvia S15 Spec-R",
    year: 2002,
    price: "₺3,800,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/3940718416295600/",
    specs: {
      power: "250 HP",
      acceleration: "5.2 sn",
      topSpeed: "250 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "JDM dünyasının en ikonik drift efsanelerinden Silvia S15. Agresif ön tasarımı, mükemmel 50:50 ağırlık dengesi ve efsanevi SR20DET motoruyla gerçek bir sürüş şaheseri.",
    features: ["Helical LSD", "SR20DET Turbo", "6 İleri Manuel", "Agresif Aerodinamik"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/3940718416295600/"],
    deliveryTime: "Özel Garaj Teslimi",
    pinterestUrl: "https://tr.pinterest.com/pin/3940718416295600/"
  },
  92: {
    id: "nissan-silvia-s13",
    brand: "Nissan",
    model: "Silvia S13 K's",
    year: 1993,
    price: "₺2,900,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/17029304834371366/",
    specs: {
      power: "205 HP",
      acceleration: "6.0 sn",
      topSpeed: "235 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Drift kültürünün doğumunda başrol oynayan safkan JDM klasiği S13. Şık çizgileri, hafif şasisi ve keskin direksiyon hassasiyetiyle koleksiyon değeri çok yüksek bir efsane.",
    features: ["SR20DET Turbo Motor", "Hafif Şasi", "Arkadan İtiş", "Kilitli Diferansiyel"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/17029304834371366/"],
    deliveryTime: "Koleksiyon Teslimat",
    pinterestUrl: "https://tr.pinterest.com/pin/17029304834371366/"
  },
  93: {
    id: "nissan-silvia-s14",
    brand: "Nissan",
    model: "Silvia S14 Kouki",
    year: 1998,
    price: "₺3,200,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/11329436558568258/",
    specs: {
      power: "220 HP",
      acceleration: "5.6 sn",
      topSpeed: "245 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Geniş çamurluk yapısı ve agresif 'Kouki' ön tasarımıyla pistlerin fırtınası S14. Dayanıklı motor bloğu ve akıcı drift kontrolüyle modifiye dünyasının en gözde klasiklerinden biri.",
    features: ["Kouki Aero Paket", "SR20DET Turbo", "Geniş Şasi", "5 İleri Manuel"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/11329436558568258/"],
    deliveryTime: "Özel Teslimat",
    pinterestUrl: "https://tr.pinterest.com/pin/11329436558568258/"
  },
  94: {
    id: "nissan-180sx",
    brand: "Nissan",
    model: "180SX Type X",
    year: 1996,
    price: "₺3,100,000",
    category: "JDM Legend",
    image: "/api/pinterest-image?url=https://tr.pinterest.com/pin/547539267218190041/",
    specs: {
      power: "205 HP",
      acceleration: "6.2 sn",
      topSpeed: "235 km/s",
      engine: "2.0L SR20DET Turbo"
    },
    description: "Açılır-kapanır pop-up farları ve fastback tavan çizgisiyle tarihe geçen Nissan 180SX. Type X bodykit'i ve efsanevi performansı ile 90'lar JDM ruhunu iliklerinize kadar hissettirir.",
    features: ["Pop-Up Farlar", "Type X Aero Kit", "SR20DET Turbo", "Fastback Gövde"],
    gallery: ["/api/pinterest-image?url=https://tr.pinterest.com/pin/547539267218190041/"],
    deliveryTime: "Hemen Teslim",
    pinterestUrl: "https://tr.pinterest.com/pin/547539267218190041/"
  }
};
