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
import { PROJECTS } from "@/data/projects";

const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeRoute = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1.0,
  };

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [homeRoute, ...projectRoutes];
}

