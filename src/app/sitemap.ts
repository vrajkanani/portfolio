/**
 * app/sitemap.ts — Dynamic XML Sitemap
 *
 * Next.js generates /sitemap.xml at build time from this file.
 * Submit https://portfolio-vraj-kanani.vercel.app/sitemap.xml to:
 *   — Google Search Console → Sitemaps
 *   — Bing Webmaster Tools  → Sitemaps
 *
 * Priority guide:
 *   1.0  Homepage (most important)
 *   0.9  Key standalone pages (About, Projects listing)
 *   0.8  Individual project pages
 *   0.7  Blog / articles
 *   0.5  Supporting pages (Uses, Contact)
 *   0.3  Legal pages (Privacy, Terms)
 *
 * changeFrequency guide:
 *   "daily"   — blog feed, news
 *   "weekly"  — project pages (you might add new projects)
 *   "monthly" — stable content (about, skills)
 *   "yearly"  — rarely-changing pages (privacy policy)
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";
// 🚀 TODO: Update to custom domain once live

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage (single-page portfolio) ──────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Uncomment as you create these pages ───────────────────────────────────

    // {
    //   url: `${BASE_URL}/projects`,
    //   lastModified: now,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },

    // Individual project pages — huge SEO opportunity for long-tail keywords
    // {
    //   url: `${BASE_URL}/projects/realtime-chat`,
    //   lastModified: new Date("2025-03-15"),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${BASE_URL}/projects/payment-gateway`,
    //   lastModified: new Date("2025-04-01"),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },

    // Blog index — if you add a blog
    // {
    //   url: `${BASE_URL}/blog`,
    //   lastModified: now,
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ];
}
