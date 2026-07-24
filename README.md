# Gökdoğan Teknoloji — Akıllı Tarım Sitesi

Yapay zekâ destekli akıllı tarım tanıtım sitesi. Orijinal `.dc.html` (DesignContext runtime) tasarımı, birebir görsel sadakatle **Next.js 15 (App Router) + React 19 + Tailwind v4**'e portlandı ve Vercel'e deploy edilebilir hale getirildi.

## Stack

- **Next.js 15.5.21** (App Router, static prerender)
- **React 19**
- **Tailwind v4** (zemin — 21st.dev / shadcn bileşenleri eklenebilir)
- **next/font**: Space Grotesk (display), Manrope (body), IBM Plex Mono (mono) — self-hosted, layout shift yok
- Tasarım sistemi tamamen `app/globals.css` içinde: tek hue (teal ~OKLCH 214) türetimi + turuncu tek vurgu

## Geliştirme

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # prod build
npm start        # prod sunucu
```

## Yapı

```
app/
  layout.tsx          # fontlar, SEO/OG metadata, tema no-flash script
  page.tsx            # bölümleri birleştirir + sabit nokta arka planı
  globals.css         # tüm tasarım sistemi (token, kart, buton, nav, responsive grid, reduced-motion)
  components/
    Nav.tsx           # sticky nav + mobil burger menü (client)
    Hero.tsx          # + SoilCanvas
    SoilCanvas.tsx    # izometrik toprak-tarama rover animasyonu (canvas)
    OrbitCanvas.tsx   # uydu yörünge animasyonu (canvas)
    Products.tsx      # Porsuk / Çiftçi Doğan kartları
    AgentBand.tsx     # AI agent mimarisi
    Porsuk.tsx        # Algıla/Analiz/Öner tab'ları + sensörler + toprak raporu (client)
    CiftciDogan.tsx   # karşılaştırma + Telegram örneği + veri kaynakları
    Neden.tsx         # + CountUp istatistikleri
    Hizmetler.tsx     # 6 hizmet tab'ı (client)
    Hakkimizda.tsx    # zaman çizelgesi
    SSS.tsx           # accordion (client)
    Iletisim.tsx      # form (client)
    Footer.tsx
    Reveal.tsx        # IntersectionObserver reveal wrapper
    CountUp.tsx       # görünürlükte 0→hedef sayaç
    ThemeToggle.tsx   # koyu/aydınlık, localStorage persist
```

## Vercel'e deploy

Bu proje bir monorepo alt klasöründe (`site/`). İki yol var:

**A) Dashboard (önerilen):**

1. Repo'yu GitHub/GitLab'a push et.
2. Vercel → **Add New → Project** → repo'yu import et.
3. **Root Directory** ayarını `site` olarak seç. (Framework otomatik: Next.js.)
4. Deploy. Ekstra ayar/`vercel.json` gerekmez — Next.js zero-config.

**B) CLI:**

```bash
cd site
npx vercel        # ilk kez: proje bağla
npx vercel --prod # production deploy
```

## Orijinale göre iyileştirmeler

- `.dc.html` runtime bağımlılığı kaldırıldı → gerçek, deploy edilebilir statik çıktı.
- dc-runtime'ın taklit ettiği hover'lar **gerçek** `:hover / :focus-visible / :active` state'lerine çevrildi (odak halkaları dahil).
- **Mobil navigasyon menüsü** eklendi (orijinalde linkler mobilde tamamen gizleniyordu, gezinme imkânsızdı).
- `prefers-reduced-motion` desteği (canvas + reveal + sayaç).
- Tüm 2-kolon grid'ler mobilde tek kolona iniyor (orijinalde daralıyordu).
- SEO + OpenGraph + Twitter card metadata, `lang="tr"`, theme-color.
- Tema tercihi `localStorage`'da kalıcı + hidrasyon öncesi no-flash script.

## Notlar

- **İletişim formu** şu an client-side (gönderince başarı ekranı gösteriyor, backend'e bağlı değil). Gerçek gönderim için bir `app/api/contact/route.ts` + e-posta servisi (Resend vb.) eklenebilir.
- **OG görseli**: `metadataBase` şu an `gokdogan-teknoloji.vercel.app`; kendi domainini `app/layout.tsx` içinde `SITE_URL` ile güncelle. Sosyal paylaşım için `app/opengraph-image.png` eklemen önerilir.
- 21st.dev bileşenleri eklemek istersen zemin hazır: `npx shadcn@latest add "https://21st.dev/r/..."`.
```
