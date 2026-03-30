import { MetadataRoute } from "next";

const BASE_URL = "https://tinyhouse.investments";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2026-03-28",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projekte`,
      lastModified: "2026-03-28",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/so-funktioniert-es`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/renditemodell`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/steuervorteil`,
      lastModified: "2026-03-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/galerie`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/partner`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: "2026-03-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: "2026-03-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/agb`,
      lastModified: "2026-03-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/wissen`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wissen/kapitalanlage`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wissen/afa-abschreibung`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wissen/direktinvestment`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wissen/tiny-house-als-rendite`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wissen/steuerberater-finden`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/wissen/host-werden`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/hosts`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
