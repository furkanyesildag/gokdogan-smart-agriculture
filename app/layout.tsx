import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Vercel deploy sonrası gerçek domain ile güncelle (varsayılan proje domaini)
const SITE_URL = "https://gokdogan-smart-agriculture.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gökdoğan Teknoloji — Yapay Zekâ Destekli Akıllı Tarım",
    template: "%s · Gökdoğan Teknoloji",
  },
  description:
    "Toprağı okuyan, tarımı yeniden tasarlayan teknoloji. Otonom kara aracı Porsuk ve çiftçi zekâ platformu Çiftçi Doğan ile yerli ve özgün akıllı tarım sistemleri.",
  keywords: [
    "akıllı tarım",
    "yapay zeka tarım",
    "otonom kara aracı",
    "Porsuk",
    "Çiftçi Doğan",
    "hassas tarım",
    "uydu tarım",
    "Gökdoğan Teknoloji",
  ],
  authors: [{ name: "Gökdoğan Teknoloji" }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      tr: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Gökdoğan Teknoloji",
    title: "Gökdoğan Teknoloji — Yapay Zekâ Destekli Akıllı Tarım",
    description:
      "Otonom kara aracı Porsuk toprağı satır satır tarar; Çiftçi Doğan her gün parsel bazlı teşhis ve eylem üretir.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Gökdoğan Teknoloji — Akıllı Tarım" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gökdoğan Teknoloji — Akıllı Tarım",
    description:
      "Toprağı okuyan, tarımı yeniden tasarlayan teknoloji. Yerli ve özgün AI sistemleri.",
    images: ["/og.png"],
  },
  // favicon/apple-icon: app/icon.png · app/apple-icon.png · app/favicon.ico
  // (Next.js App Router convention — gerçek Gökdoğan logosundan üretildi)
};

// Organization structured data — Google'da adres/logo/ürün görünürlüğü
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gökdoğan Teknoloji San. ve Tic. A.Ş.",
  alternateName: "Gökdoğan Teknoloji",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: "info@gokdoganlar.com",
  description:
    "Yapay zekâ destekli akıllı tarım ve otonom sistemler. Otonom kara aracı Porsuk ve çiftçi zekâ platformu Çiftçi Doğan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Üniversiteler Mah., Şht. J. Astgm. Mustafa Tayyar Can Cd. No: 5",
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06800",
    addressCountry: "TR",
  },
  areaServed: "TR",
  knowsAbout: ["akıllı tarım", "otonom kara aracı", "uydu tarım", "hassas tarım"],
};

export const viewport: Viewport = {
  themeColor: "#090c0f",
  width: "device-width",
  initialScale: 1,
};

/* Hidrasyon öncesi temayı ayarla — FOUC yok. Varsayılan koyu. */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('gd-theme');
    if (!t) t = 'dark';
    document.documentElement.dataset.theme = t;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      data-theme="dark"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
