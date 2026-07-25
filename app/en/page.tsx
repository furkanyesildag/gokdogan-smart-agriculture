import type { Metadata } from "next";
import SiteShell from "../components/SiteShell";

const SITE_URL = "https://gokdogan-smart-agriculture.vercel.app";

export const metadata: Metadata = {
  title: "Gökdoğan Teknoloji — AI-Powered Smart Agriculture",
  description:
    "Technology that reads the soil and redesigns agriculture. Homegrown, original smart-agriculture systems built around the autonomous ground vehicle Porsuk and the farmer intelligence platform Çiftçi Doğan.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      tr: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    siteName: "Gökdoğan Teknoloji",
    title: "Gökdoğan Teknoloji — AI-Powered Smart Agriculture",
    description:
      "The autonomous ground vehicle Porsuk scans the soil row by row; Çiftçi Doğan delivers per-parcel diagnoses and actions every day.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Gökdoğan Teknoloji — Smart Agriculture" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gökdoğan Teknoloji — Smart Agriculture",
    description:
      "Technology that reads the soil and redesigns agriculture. Homegrown, original AI systems.",
    images: ["/og.png"],
  },
};

export default function HomeEn() {
  return <SiteShell lang="en" />;
}
