// i18n sözlüğü — tüm kullanıcı-görünür metinler. tr referans şemadır;
// en aynı şekle uymak zorundadır (Dict tipi bunu derleme anında zorlar).

export type Lang = "tr" | "en";

const tr = {
  nav: {
    porsuk: "Porsuk",
    ciftcidogan: "Çiftçi Doğan",
    hizmetler: "Hizmetler",
    neden: "Neden Akıllı Tarım",
    hakkimizda: "Hakkımızda",
    cta: "İletişime Geç",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    themeLight: "Aydınlık",
    themeDark: "Koyu",
    themeTitle: "Tema değiştir",
    themeToLight: "Aydınlık temaya geç",
    themeToDark: "Koyu temaya geç",
  },

  hero: {
    eyebrow: "YAPAY ZEKÂ DESTEKLİ AKILLI TARIM",
    h1Pre: "Toprağı ",
    h1Accent: "okuyan",
    h1Post: ", tarımı yeniden tasarlayan teknoloji.",
    pipe1: "Otonom kara aracı",
    pipe2: "Uydu platformu",
    pipe3: "Tek ekosistem",
    pPre: "Yerli ve özgün yapay zekâ sistemlerimizle üretiyoruz. Otonom kara aracımız ",
    pBrand: "Porsuk",
    pPost: ", tarlayı tek başına gezer, toprağı sensörleriyle analiz eder ve neyin ekilebileceğine karar verir.",
    ctaPrimary: "Porsuk'u keşfet →",
    ctaGhost: "İletişime geç",
    stats: [
      { big: "%100", small: "YERLİ & ÖZGÜN" },
      { big: "7/24", small: "OTONOM SAHA" },
      { big: "AI", small: "AGENT MİMARİSİ" },
    ],
  },

  products: {
    eyebrow: "// ÜRÜNLERİMİZ",
    porsukTag: "DONANIM · OTONOM İKA",
    porsukDesc:
      "Tarlayı otonom gezen, toprağı sensörleriyle tarayan ve yapay zekâ ile ekim kararı üreten insansız kara aracı.",
    ciftciTag: "PLATFORM · ÇİFTÇİ ZEKÂSI",
    ciftciDesc:
      "Uydu, hava, toprak ve piyasa verisini parsel bazında birleştirip her gün sade Türkçe teşhis ve somut eylem üreten platform.",
    explore: "İncele →",
  },

  agents: {
    eyebrow: "// YAPAY ZEKÂ MİMARİSİ",
    h2: "Sahadaki her karar, birlikte çalışan yapay zekâ agent'larından geçer.",
    p: "Sensör verisi, görüntü ve konum akışını gerçek zamanlı işleyen agent'lar; algılama, analiz ve karar adımlarını kendi aralarında koordine ederek sahada otonom hareketi ve doğru tarımsal öneriyi mümkün kılar.",
    items: [
      {
        code: "AGT-01",
        num: "I",
        name: "Algı Agent'ı",
        desc: "Çoklu sensör ve kamera verisini birleştirir, gürültüyü temizler, anlamlı sinyale dönüştürür.",
      },
      {
        code: "AGT-02",
        num: "II",
        name: "Analiz Agent'ı",
        desc: "Toprak besin değerleri, nem ve verim modellerini çalıştırarak durum çıkarımı yapar.",
      },
      {
        code: "AGT-03",
        num: "III",
        name: "Karar Agent'ı",
        desc: "Ekim önerisi ve rota planını üretir; aracın bir sonraki hamlesini belirler.",
      },
      {
        code: "AGT-04",
        num: "IV",
        name: "Orkestratör",
        desc: "Agent'lar arası iş akışını yönetir, çelişkileri çözer, güvenli otonomiyi garanti eder.",
      },
    ],
  },

  porsuk: {
    eyebrow: "// KAHRAMAN ÜRÜN",
    intro:
      "Otonom insansız kara aracı. İnsan müdahalesi olmadan tarlayı gezer, toprağı satır satır tarar ve yapay zekâ ile ekim kararını üretir.",
    steps: [
      {
        title: "Algıla",
        tag: "01 · ALGILA",
        heading: "Tarlayı satır satır tarar",
        body: "Porsuk, sahaya girdiği andan itibaren otonom rota planına göre ilerler ve üzerindeki sensör dizisiyle toprağı sürekli ölçer.",
        points: [
          "Çoklu sensör + kamera füzyonu",
          "Uydu bazlı hassas konumlama",
          "Engelden kaçınma ve güvenli otonomi",
        ],
      },
      {
        title: "Analiz et",
        tag: "02 · ANALİZ ET",
        heading: "Yapay zekâ toprağı yorumlar",
        body: "Toplanan ham veri, analiz agent'ında işlenir; toprağın besin değeri, nem ve verim potansiyeli gerçek zamanlı olarak modellenir.",
        points: [
          "pH, nem, besin ve organik madde çıkarımı",
          "Verim ve uygunluk modelleri",
          "Anomali ve risk tespiti",
        ],
      },
      {
        title: "Öner",
        tag: "03 · ÖNER",
        heading: "Ne ekileceğine karar verir",
        body: "Karar agent'ı, analiz sonuçlarını değerlendirerek parsel bazında ekim önerisi ve uygulama planı üretir.",
        points: [
          "Parsel bazlı ürün önerisi",
          "Girdi (gübre/su) optimizasyonu",
          "İndirilebilir rapor ve harita çıktısı",
        ],
      },
    ],
    report: {
      eyebrow: "// ÖRNEK ÇIKTI · TOPRAK RAPORU",
      file: "porsuk_rapor.json — parsel #A14",
      location: "konum",
      ph: "pH",
      phNote: "ideal",
      moisture: "nem",
      moistureVal: "%38",
      moistureNote: "orta",
      nitrogen: "azot (N)",
      phosphorus: "fosfor (P)",
      organic: "organik_madde",
      organicVal: "%2.4",
      aiRec: "ai_öneri",
      recLine1: "→ Buğday (uygunluk %91)",
      recLine2: "→ Alternatif: Arpa (%84)",
      recLine3: "→ Uygulama: 20 kg/da azot takviyesi",
    },
  },

  ciftci: {
    eyebrow: "// ÇİFTÇİ ZEKÂ PLATFORMU",
    introPre:
      "Hassas tarım için bir çiftçi zekâ platformu. Uydu, hava, toprak ve piyasa verisini ",
    introBold: "tek parsel bazında",
    introPost:
      " birleştirip her gün sade Türkçe teşhis ve somut eylem üretir.",
    compareEyebrow: "// HAM İSTATİSTİK DEĞİL, KARAR",
    rivalTitle: "RAKİP PANELLER",
    rivalLines: [
      "vejetasyon 0.45",
      "nem indeksi 0.12",
      "biyokütle 3.8",
      "yüzey sıc. 31°C",
    ],
    rivalNote: "Ham veri. Yorum ve karar çiftçiye kalıyor.",
    brand: "ÇİFTÇİ DOĞAN",
    diagLabel: "TEŞHİS",
    diagText: "Bitki su stresine giriyor; 5 gün yağış görünmüyor.",
    actionLabel: "EYLEM",
    actionText: "48 saat içinde sulama yapın; kuzey uca öncelik verin.",
    botName: "Çiftçi Doğan",
    botTag: "BOT",
    botTime: "bugün · 07:12",
    msgPre: "",
    msgBold1: "At Alanı",
    msgMid: " tarlanızda arpa hasadı tamamlanmış. Radar ölçümleri tarlada hâlâ güçlü bir biyokütle olduğunu doğruluyor — 15–20 Haziran'daki optik veriler büyük olasılıkla güvenilir değil. ",
    msgBold2: "Arpa piyasa fiyatı: 11.514 TRY/ton",
    msgPost: " — hasat zamanlamasını değerlendirin.",
    pdfFile: "At_Alani_hasat_raporu.pdf",
    pdfMeta: "otomatik parsel raporu · 240 KB",
    cards: [
      {
        n: "01",
        title: "Günlük teşhis",
        desc: "Uydu, hava, toprak ve piyasa verisi tek parselde birleşir; her gün otomatik teşhis üretilir.",
      },
      {
        n: "02",
        title: "Karar desteği",
        desc: "Su stresi, hasat zamanlaması, hastalık riski ve münavebe kararlarında çiftçiye yön verir.",
      },
      {
        n: "03",
        title: "Otomatik ulaşım",
        desc: "Sonuçlar Telegram botu ve otomatik PDF raporlarıyla doğrudan çiftçiye ulaşır.",
      },
    ],
    sourcesEyebrow: "// ENTEGRE VERİ KAYNAKLARI",
    orbitHud: "UYDU VERİ AĞI · 7/24 AKIŞ",
    sources: [
      { name: "Optik Uydu", tag: "GÖRÜNTÜ", detail: "Bitki sağlığı ve vejetasyon analizi" },
      { name: "Radar Uydu", tag: "RADAR", detail: "Bulutlu havada bile kesintisiz ölçüm ve çapraz doğrulama" },
      { name: "Hava", tag: "METEOROLOJİ", detail: "Güncel hava ve iklim verisi" },
      { name: "Toprak", tag: "PROFİL", detail: "Parsel bazında toprak profili" },
      { name: "Piyasa", tag: "FİYAT", detail: "Güncel ürün fiyatları" },
    ],
  },

  neden: {
    eyebrow: "// NEDEN",
    h2: "Dünyanın 2050'de daha az kaynakla çok daha fazla üretmesi gerekiyor.",
    p: "Artan nüfusun beslenme sorununu önlemek için tarımsal üretimin ciddi biçimde artması gerekiyor. Biz bu dönüşümü; daha az su, daha az girdi ve daha yüksek verimle mümkün kılan dijital ve otonom sistemlerle sağlıyoruz.",
    stats: [
      { target: 70, prefix: "%", suffix: "", label: "2050'ye kadar gereken tarımsal üretim artışı" },
      { target: 30, prefix: "%", suffix: "", label: "Hassas uygulama ile hedeflenen su tasarrufu" },
      { target: 7, prefix: "", suffix: "/24", label: "Kesintisiz otonom saha operasyonu" },
      { target: 100, prefix: "%", suffix: "", label: "Yerli ve özgün yazılım & yapay zekâ" },
    ],
  },

  hizmetler: {
    eyebrow: "// HİZMETLER",
    h2: "Uçtan uca akıllı tarım çözümleri",
    solutionLabel: "// ÇÖZÜM",
    cta: "Bu çözümü konuşalım →",
    items: [
      {
        code: "01",
        title: "Yapay Zekâ Destekli Ziraat & Mahsul Analizi",
        desc: "Toprak ve bitki verisini agent tabanlı modellerle işleyip her parsel için aksiyona dönüştürür; ham indeks değil, teşhis ve öneri sunar.",
        points: [
          "Parsel bazlı bitki sağlığı takibi",
          "Stres ve hastalık riskinde erken uyarı",
          "Sade Türkçe teşhis + eylem raporu",
        ],
      },
      {
        code: "02",
        title: "Otonom Kara Aracı — Porsuk",
        desc: "Sahayı insansız gezen, toprağı satır satır tarayan ve yapay zekâ ile ekim kararı üreten insansız kara aracımız.",
        points: [
          "Tam otonom saha taraması",
          "Yerinde toprak profili çıkarımı",
          "Parsel bazlı ekim uygunluk kararı",
        ],
      },
      {
        code: "03",
        title: "Rekolte Tahmini",
        desc: "Biyofiziksel modellerle makine öğrenmesini birleştirerek sezon boyunca güncellenen verim öngörüsü üretir.",
        points: [
          "Sezon içi güncellenen tahminler",
          "Parsel ve bölge kırılımı",
          "Hasat ve satış planlamasına doğrudan girdi",
        ],
      },
      {
        code: "04",
        title: "Arazi Etüdü & 2D/3D Haritalama",
        desc: "Parsel bazında detaylı arazi çıkarımı, sınır tespiti ve karar destek için dijital ikiz haritalar.",
        points: [
          "Yüksek çözünürlüklü 2D/3D haritalar",
          "Sınır ve alan çıkarımı",
          "Sulama ve tesviye planlamasına altlık",
        ],
      },
      {
        code: "05",
        title: "Otomatik Dümenleme Sistemi",
        desc: "Tarım makineleri için santimetre hassasiyetinde otonom hat takibi; örtüşme ve atlamayı ortadan kaldırır.",
        points: [
          "Santimetre hassasiyetli hat takibi",
          "Örtüşme ve atlama kaybı yok",
          "Yakıt ve girdi tasarrufu",
        ],
      },
      {
        code: "06",
        title: "Eğitim & Belgelendirme",
        desc: "İHA pilot eğitimi, ruhsatlandırma ve kurumlara özel operasyon programları.",
        points: [
          "Pilot belgesi kursları",
          "Ruhsatlandırma danışmanlığı",
          "Kurumsal eğitim programları",
        ],
      },
    ],
  },

  hakkimizda: {
    eyebrow: "// HAKKIMIZDA",
    h2: "Gökten toprağa: veriden karara köprü kuruyoruz.",
    p1: "Gökdoğan Teknoloji, sahada insansız hava operasyonlarıyla başladığı yolculuğunu bugün yapay zekâ destekli akıllı tarım sistemlerine taşıdı. Ham uydu pikseli ya da sensör istatistiği değil; çiftçinin o gün vereceği kararın kendisini üretiyoruz.",
    p2: "Tüm yazılım ve yapay zekâ modellerimiz Türkiye'de, kendi ekibimizce geliştiriliyor.",
    timeline: [
      {
        n: "01",
        title: "Başlangıç: sahada uçuş",
        desc: "İnsansız hava araçlarıyla tarımsal operasyonlar ve pilot eğitimi — sahayı ve çiftçiyi yakından tanıdık.",
      },
      {
        n: "02",
        title: "Dönüşüm: veriden karara",
        desc: "Uydu, hava ve toprak verisini yapay zekâ agent'larıyla işleyen karar sistemlerine yöneldik.",
      },
      {
        n: "03",
        title: "Bugün: otonom sistemler",
        desc: "Porsuk sahada toprağı okuyor; Çiftçi Doğan her sabah parsel bazlı teşhis ve eylem üretiyor.",
      },
    ],
  },

  sss: {
    eyebrow: "// SIK SORULANLAR",
    h2: "Aklınızda kalanlar",
    items: [
      {
        q: "Porsuk nasıl çalışıyor, sürücü gerekiyor mu?",
        a: "Hayır. Porsuk tamamen otonomdur: rota planını kendisi çıkarır, engelden kaçınır, sensörleriyle toprağı satır satır ölçer ve sonuçları yapay zekâ ile parsel raporuna dönüştürür.",
      },
      {
        q: "Çiftçi Doğan için özel donanım almam gerekir mi?",
        a: "Gerekmez. Çiftçi Doğan uydu tabanlıdır; parselinizi tanımlamanız yeterli. Teşhis ve eylem önerileri Telegram botu ve otomatik PDF raporlarıyla size ulaşır.",
      },
      {
        q: "Teşhisler ne sıklıkla güncelleniyor?",
        a: "Her gün. Optik ve radar uydu geçişleri, güncel hava ve piyasa verisiyle birleştirilir; bulutlu günlerde radar ölçümleri devreye girer.",
      },
      {
        q: "Ham teknik değerleri yorumlamam gerekecek mi?",
        a: "Hayır — farkımız tam burada. Ham teknik verileri arka planda işler, size sade Türkçe bir teşhis ve somut bir eylem sunarız: \"48 saat içinde sulama yapın\" gibi.",
      },
      {
        q: "Nasıl başlarım?",
        a: "İletişim formundan bize ulaşın; parselinizi birlikte tanımlayıp aynı hafta içinde ilk raporunuzu üretelim.",
      },
    ],
    ctaTitle: "Sorunuz mu var?",
    ctaDesc: "Ekibimiz canlı demo ve teknik detaylar için hazır.",
    ctaBtn: "Uzmanla görüşün →",
  },

  iletisim: {
    eyebrow: "// İLETİŞİM",
    h2: "Sahayı birlikte geleceğe taşıyalım.",
    p: "Porsuk ve akıllı tarım çözümlerimiz hakkında bilgi almak, iş birliği ya da demo talebiniz için bize yazın.",
    emailLabel: "E-POSTA",
    hqLabel: "MERKEZ",
    company: "Gökdoğan Teknoloji San. ve Tic. A.Ş.",
    address:
      "Üniversiteler Mah., Şht. J. Astgm. Mustafa Tayyar Can Cd. No: 5, 06800 Çankaya / Ankara",
    mapTitle: "Gökdoğan Teknoloji konumu",
    directions: "▸ YOL TARİFİ AL",
    sentTitle: "Mesajınız alındı",
    sentDesc: "En kısa sürede size geri dönüş yapacağız. İlginiz için teşekkürler.",
    nameLabel: "AD SOYAD",
    namePlaceholder: "Adınız",
    emailFieldLabel: "E-POSTA",
    emailPlaceholder: "ornek@firma.com",
    messageLabel: "MESAJINIZ",
    messagePlaceholder: "Nasıl yardımcı olabiliriz?",
    kvkkPre: "",
    kvkkLink: "KVKK Aydınlatma Metni",
    kvkkPost:
      "ni okudum; kişisel verilerimin iletişim amacıyla işlenmesini onaylıyorum.",
    errorGeneric: "Bir hata oluştu. Lütfen tekrar deneyin.",
    errorConn: "Bağlantı hatası. Lütfen tekrar deneyin.",
    sending: "Gönderiliyor…",
    send: "Gönder →",
  },

  footer: {
    tagline:
      "Yapay zekâ destekli akıllı tarım ve otonom sistemler. Yerli ve özgün geliştirme.",
    colProduct: "ÜRÜN",
    colCompany: "KURUMSAL",
    linkPorsuk: "Porsuk",
    linkHizmetler: "Hizmetler",
    linkNeden: "Neden Akıllı Tarım",
    linkHakkimizda: "Hakkımızda",
    linkIletisim: "İletişim",
    copyright: "© 2026 Gökdoğan Teknoloji. Tüm hakları saklıdır.",
    madeIn: "Türkiye'de tasarlandı ve geliştirildi.",
  },

  // Canvas / SVG sahne etiketleri (kısa teknik metinler)
  canvas: {
    soilMoist: "NEM %",
    soilScanned: "TARANAN %",
    orbitOptik: "OPTİK UYDU",
    orbitRadar: "RADAR UYDU",
    orbitMeteo: "METEO AĞI",
    orbitFusion: "▸ TEK PARSELDE BİRLEŞİR",
  },

  sahne: {
    algilaHud: "LIDAR · MULTİSPEKTRAL · ÇOKLU SENSÖR FÜZYONU",
    pinLidar: "LIDAR",
    pinKamera: "KAMERA",
    pinToprak: "TOPRAK PROBU",
    analizHud: "EDGE AI · SAHADA GERÇEK ZAMANLI ANALİZ",
    analizMoist: "nem",
    onerHud: "öneri hazır · parsel #A14",
    onerLabel: "ÖNERİLEN ÜRÜN",
    onerCrop: "Buğday",
    onerScore: "%91",
    onerAltLabel: "Alternatif · Arpa",
    onerAltScore: "%84",
    onerAction: "20 kg/da azot takviyesi",
  },
};

export type Dict = typeof tr;

const en: Dict = {
  nav: {
    porsuk: "Porsuk",
    ciftcidogan: "Çiftçi Doğan",
    hizmetler: "Services",
    neden: "Why Smart Agriculture",
    hakkimizda: "About Us",
    cta: "Get in Touch",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    themeLight: "Light",
    themeDark: "Dark",
    themeTitle: "Toggle theme",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },

  hero: {
    eyebrow: "AI-POWERED SMART AGRICULTURE",
    h1Pre: "Technology that ",
    h1Accent: "reads",
    h1Post: " the soil and redesigns agriculture.",
    pipe1: "Autonomous ground vehicle",
    pipe2: "Satellite platform",
    pipe3: "One ecosystem",
    pPre: "We build everything with our own homegrown AI systems. Our autonomous ground vehicle ",
    pBrand: "Porsuk",
    pPost: " roams the field on its own, analyzes the soil with its sensors, and decides what can be planted.",
    ctaPrimary: "Explore Porsuk →",
    ctaGhost: "Get in touch",
    stats: [
      { big: "100%", small: "HOMEGROWN & ORIGINAL" },
      { big: "24/7", small: "AUTONOMOUS FIELD" },
      { big: "AI", small: "AGENT ARCHITECTURE" },
    ],
  },

  products: {
    eyebrow: "// OUR PRODUCTS",
    porsukTag: "HARDWARE · AUTONOMOUS UGV",
    porsukDesc:
      "An unmanned ground vehicle that roams the field autonomously, scans the soil with its sensors, and produces planting decisions with AI.",
    ciftciTag: "PLATFORM · FARMER INTELLIGENCE",
    ciftciDesc:
      "A platform that merges satellite, weather, soil, and market data per parcel, producing plain-language diagnoses and concrete actions every day.",
    explore: "Explore →",
  },

  agents: {
    eyebrow: "// AI ARCHITECTURE",
    h2: "Every decision in the field passes through AI agents working in concert.",
    p: "Agents that process sensor data, imagery, and positioning streams in real time coordinate the perception, analysis, and decision steps among themselves — enabling autonomous movement in the field and accurate agronomic recommendations.",
    items: [
      {
        code: "AGT-01",
        num: "I",
        name: "Perception Agent",
        desc: "Fuses multi-sensor and camera data, filters out noise, and turns it into meaningful signal.",
      },
      {
        code: "AGT-02",
        num: "II",
        name: "Analysis Agent",
        desc: "Runs soil nutrient, moisture, and yield models to infer the current state.",
      },
      {
        code: "AGT-03",
        num: "III",
        name: "Decision Agent",
        desc: "Generates planting recommendations and route plans; determines the vehicle's next move.",
      },
      {
        code: "AGT-04",
        num: "IV",
        name: "Orchestrator",
        desc: "Manages the workflow between agents, resolves conflicts, and guarantees safe autonomy.",
      },
    ],
  },

  porsuk: {
    eyebrow: "// HERO PRODUCT",
    intro:
      "An autonomous unmanned ground vehicle. It roams the field without human intervention, scans the soil row by row, and produces planting decisions with AI.",
    steps: [
      {
        title: "Sense",
        tag: "01 · SENSE",
        heading: "Scans the field row by row",
        body: "From the moment it enters the field, Porsuk follows an autonomous route plan and continuously measures the soil with its onboard sensor array.",
        points: [
          "Multi-sensor + camera fusion",
          "Satellite-based precision positioning",
          "Obstacle avoidance and safe autonomy",
        ],
      },
      {
        title: "Analyze",
        tag: "02 · ANALYZE",
        heading: "AI interprets the soil",
        body: "The raw data collected is processed in the analysis agent; the soil's nutrient value, moisture, and yield potential are modeled in real time.",
        points: [
          "pH, moisture, nutrient, and organic matter inference",
          "Yield and suitability models",
          "Anomaly and risk detection",
        ],
      },
      {
        title: "Recommend",
        tag: "03 · RECOMMEND",
        heading: "Decides what to plant",
        body: "The decision agent evaluates the analysis results to produce a per-parcel planting recommendation and application plan.",
        points: [
          "Per-parcel crop recommendation",
          "Input (fertilizer/water) optimization",
          "Downloadable report and map output",
        ],
      },
    ],
    report: {
      eyebrow: "// SAMPLE OUTPUT · SOIL REPORT",
      file: "porsuk_report.json — parcel #A14",
      location: "location",
      ph: "pH",
      phNote: "ideal",
      moisture: "moisture",
      moistureVal: "38%",
      moistureNote: "medium",
      nitrogen: "nitrogen (N)",
      phosphorus: "phosphorus (P)",
      organic: "organic_matter",
      organicVal: "2.4%",
      aiRec: "ai_recommendation",
      recLine1: "→ Wheat (suitability 91%)",
      recLine2: "→ Alternative: Barley (84%)",
      recLine3: "→ Application: 20 kg/da nitrogen supplement",
    },
  },

  ciftci: {
    eyebrow: "// FARMER INTELLIGENCE PLATFORM",
    introPre:
      "A farmer intelligence platform for precision agriculture. It merges satellite, weather, soil, and market data ",
    introBold: "at the single-parcel level",
    introPost:
      ", producing plain-language diagnoses and concrete actions every day.",
    compareEyebrow: "// NOT RAW STATISTICS — DECISIONS",
    rivalTitle: "COMPETING DASHBOARDS",
    rivalLines: [
      "vegetation 0.45",
      "moisture index 0.12",
      "biomass 3.8",
      "surface temp. 31°C",
    ],
    rivalNote: "Raw data. Interpretation and decisions are left to the farmer.",
    brand: "ÇİFTÇİ DOĞAN",
    diagLabel: "DIAGNOSIS",
    diagText: "The crop is entering water stress; no rainfall expected for 5 days.",
    actionLabel: "ACTION",
    actionText: "Irrigate within 48 hours; prioritize the northern end.",
    botName: "Çiftçi Doğan",
    botTag: "BOT",
    botTime: "today · 07:12",
    msgPre: "The barley harvest on your ",
    msgBold1: "At Alanı",
    msgMid: " field is complete. Radar measurements confirm there is still strong biomass in the field — the optical data from 15–20 June is likely unreliable. ",
    msgBold2: "Barley market price: 11,514 TRY/ton",
    msgPost: " — reconsider your harvest timing.",
    pdfFile: "At_Alani_harvest_report.pdf",
    pdfMeta: "automatic parcel report · 240 KB",
    cards: [
      {
        n: "01",
        title: "Daily diagnosis",
        desc: "Satellite, weather, soil, and market data merge into a single parcel; an automatic diagnosis is produced every day.",
      },
      {
        n: "02",
        title: "Decision support",
        desc: "Guides the farmer on water stress, harvest timing, disease risk, and crop rotation decisions.",
      },
      {
        n: "03",
        title: "Automatic delivery",
        desc: "Results reach the farmer directly via a Telegram bot and automatic PDF reports.",
      },
    ],
    sourcesEyebrow: "// INTEGRATED DATA SOURCES",
    orbitHud: "SATELLITE DATA NETWORK · 24/7 STREAM",
    sources: [
      { name: "Optical Satellite", tag: "IMAGERY", detail: "Crop health and vegetation analysis" },
      { name: "Radar Satellite", tag: "RADAR", detail: "Uninterrupted measurement even under cloud cover, with cross-validation" },
      { name: "Weather", tag: "METEOROLOGY", detail: "Current weather and climate data" },
      { name: "Soil", tag: "PROFILE", detail: "Per-parcel soil profile" },
      { name: "Market", tag: "PRICE", detail: "Current crop prices" },
    ],
  },

  neden: {
    eyebrow: "// WHY",
    h2: "By 2050, the world must produce far more with far fewer resources.",
    p: "To prevent a food crisis for a growing population, agricultural output must rise significantly. We make this transformation possible with digital and autonomous systems that deliver higher yields using less water and fewer inputs.",
    stats: [
      { target: 70, prefix: "", suffix: "%", label: "Increase in agricultural output needed by 2050" },
      { target: 30, prefix: "", suffix: "%", label: "Targeted water savings through precision application" },
      { target: 24, prefix: "", suffix: "/7", label: "Uninterrupted autonomous field operation" },
      { target: 100, prefix: "", suffix: "%", label: "Homegrown, original software & AI" },
    ],
  },

  hizmetler: {
    eyebrow: "// SERVICES",
    h2: "End-to-end smart agriculture solutions",
    solutionLabel: "// SOLUTION",
    cta: "Let's talk about this solution →",
    items: [
      {
        code: "01",
        title: "AI-Powered Agronomy & Crop Analysis",
        desc: "Processes soil and plant data with agent-based models and turns it into action for every parcel; it delivers diagnoses and recommendations, not raw indices.",
        points: [
          "Per-parcel crop health monitoring",
          "Early warning for stress and disease risk",
          "Plain-language diagnosis + action report",
        ],
      },
      {
        code: "02",
        title: "Autonomous Ground Vehicle — Porsuk",
        desc: "Our unmanned ground vehicle that roams the field autonomously, scans the soil row by row, and produces planting decisions with AI.",
        points: [
          "Fully autonomous field scanning",
          "On-site soil profiling",
          "Per-parcel planting suitability decisions",
        ],
      },
      {
        code: "03",
        title: "Yield Prediction",
        desc: "Combines biophysical models with machine learning to produce yield forecasts that update throughout the season.",
        points: [
          "In-season updated forecasts",
          "Parcel- and region-level breakdown",
          "Direct input for harvest and sales planning",
        ],
      },
      {
        code: "04",
        title: "Land Survey & 2D/3D Mapping",
        desc: "Detailed per-parcel terrain extraction, boundary detection, and digital-twin maps for decision support.",
        points: [
          "High-resolution 2D/3D maps",
          "Boundary and area extraction",
          "A base layer for irrigation and land-leveling planning",
        ],
      },
      {
        code: "05",
        title: "Automatic Steering System",
        desc: "Centimeter-accurate autonomous line tracking for farm machinery; eliminates overlap and skips.",
        points: [
          "Centimeter-accurate line tracking",
          "No overlap or skip losses",
          "Fuel and input savings",
        ],
      },
      {
        code: "06",
        title: "Training & Certification",
        desc: "UAV pilot training, licensing, and operation programs tailored for organizations.",
        points: [
          "Pilot certification courses",
          "Licensing consultancy",
          "Corporate training programs",
        ],
      },
    ],
  },

  hakkimizda: {
    eyebrow: "// ABOUT US",
    h2: "From sky to soil: we bridge data to decisions.",
    p1: "Gökdoğan Teknoloji began its journey with unmanned aerial operations in the field and has now carried it into AI-powered smart agriculture systems. We don't produce raw satellite pixels or sensor statistics — we produce the very decision a farmer needs to make that day.",
    p2: "All of our software and AI models are developed in Turkey, by our own team.",
    timeline: [
      {
        n: "01",
        title: "The start: flying the field",
        desc: "Agricultural operations and pilot training with unmanned aerial vehicles — we got to know the field and the farmer up close.",
      },
      {
        n: "02",
        title: "The shift: from data to decisions",
        desc: "We turned toward decision systems that process satellite, weather, and soil data with AI agents.",
      },
      {
        n: "03",
        title: "Today: autonomous systems",
        desc: "Porsuk reads the soil in the field; Çiftçi Doğan produces per-parcel diagnoses and actions every morning.",
      },
    ],
  },

  sss: {
    eyebrow: "// FAQ",
    h2: "What's on your mind",
    items: [
      {
        q: "How does Porsuk work — does it need a driver?",
        a: "No. Porsuk is fully autonomous: it plans its own route, avoids obstacles, measures the soil row by row with its sensors, and turns the results into a parcel report using AI.",
      },
      {
        q: "Do I need to buy special hardware for Çiftçi Doğan?",
        a: "No. Çiftçi Doğan is satellite-based; you just define your parcel. Diagnoses and action recommendations reach you via a Telegram bot and automatic PDF reports.",
      },
      {
        q: "How often are the diagnoses updated?",
        a: "Every day. Optical and radar satellite passes are combined with current weather and market data; on cloudy days, radar measurements take over.",
      },
      {
        q: "Will I have to interpret raw technical values?",
        a: "No — this is exactly what sets us apart. We process the raw technical data in the background and give you a plain-language diagnosis and a concrete action, such as \"Irrigate within 48 hours.\"",
      },
      {
        q: "How do I get started?",
        a: "Reach out through the contact form; we'll define your parcel together and produce your first report within the same week.",
      },
    ],
    ctaTitle: "Have a question?",
    ctaDesc: "Our team is ready for a live demo and technical details.",
    ctaBtn: "Talk to an expert →",
  },

  iletisim: {
    eyebrow: "// CONTACT",
    h2: "Let's carry the field into the future together.",
    p: "Write to us for information about Porsuk and our smart agriculture solutions, partnerships, or a demo request.",
    emailLabel: "EMAIL",
    hqLabel: "HEADQUARTERS",
    company: "Gökdoğan Teknoloji San. ve Tic. A.Ş.",
    address:
      "Üniversiteler Mah., Şht. J. Astgm. Mustafa Tayyar Can Cd. No: 5, 06800 Çankaya / Ankara",
    mapTitle: "Gökdoğan Teknoloji location",
    directions: "▸ GET DIRECTIONS",
    sentTitle: "Your message has been received",
    sentDesc: "We'll get back to you as soon as possible. Thank you for your interest.",
    nameLabel: "FULL NAME",
    namePlaceholder: "Your name",
    emailFieldLabel: "EMAIL",
    emailPlaceholder: "you@company.com",
    messageLabel: "YOUR MESSAGE",
    messagePlaceholder: "How can we help?",
    kvkkPre: "I have read the ",
    kvkkLink: "Privacy Notice",
    kvkkPost:
      " and consent to the processing of my personal data.",
    errorGeneric: "Something went wrong. Please try again.",
    errorConn: "Connection error. Please try again.",
    sending: "Sending…",
    send: "Send →",
  },

  footer: {
    tagline:
      "AI-powered smart agriculture and autonomous systems. Homegrown, original development.",
    colProduct: "PRODUCT",
    colCompany: "COMPANY",
    linkPorsuk: "Porsuk",
    linkHizmetler: "Services",
    linkNeden: "Why Smart Agriculture",
    linkHakkimizda: "About Us",
    linkIletisim: "Contact",
    copyright: "© 2026 Gökdoğan Teknoloji. All rights reserved.",
    madeIn: "Designed and developed in Turkey.",
  },

  canvas: {
    soilMoist: "MOIST %",
    soilScanned: "SCANNED %",
    orbitOptik: "OPTICAL SAT",
    orbitRadar: "RADAR SAT",
    orbitMeteo: "WEATHER NET",
    orbitFusion: "▸ MERGED INTO ONE PARCEL",
  },

  sahne: {
    algilaHud: "LIDAR · MULTISPECTRAL · MULTI-SENSOR FUSION",
    pinLidar: "LIDAR",
    pinKamera: "CAMERA",
    pinToprak: "SOIL PROBE",
    analizHud: "EDGE AI · REAL-TIME IN-FIELD ANALYSIS",
    analizMoist: "moist",
    onerHud: "recommendation ready · parcel #A14",
    onerLabel: "RECOMMENDED CROP",
    onerCrop: "Wheat",
    onerScore: "91%",
    onerAltLabel: "Alternative · Barley",
    onerAltScore: "84%",
    onerAction: "20 kg/da nitrogen supplement",
  },
};

export const dict: Record<Lang, Dict> = { tr, en };
