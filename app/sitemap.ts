import type { MetadataRoute } from "next";

const SITE_URL = "https://gokdogan-smart-agriculture.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gizlilik`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
