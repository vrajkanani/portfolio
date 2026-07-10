/**
 * app/robots.ts — Robots Configuration
 *
 * Next.js generates /robots.txt from this file at build time.
 *
 * Strategy for a portfolio:
 *  - Allow all crawlers to index all public content
 *  - Block internal Next.js build artifacts (/_next/)
 *  - Block API routes from indexing (optional but recommended)
 *  - Point all crawlers to the sitemap
 *
 * Verify at: https://portfolio-vraj-kanani.vercel.app/robots.txt
 * Test with: Google Search Console → URL Inspection → Test Live URL
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";
// 🚀 TODO: Update to custom domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Default: allow all crawlers ────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",    // Block API routes from being indexed
          "/_next/",  // Block Next.js internal build files
          "/admin/",  // Block any admin areas (add if applicable)
        ],
      },

      // ── Googlebot: explicit allowance + crawl hints ────────────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ── Bingbot: explicit allowance ────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // ── GPTBot (OpenAI / ChatGPT search) ──────────────────────────────────
      // Allowing GPTBot helps your content appear in ChatGPT search & Bing AI.
      {
        userAgent: "GPTBot",
        allow: "/",
      },

      // ── PerplexityBot ──────────────────────────────────────────────────────
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // ── ClaudeBot (Anthropic) ──────────────────────────────────────────────
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
    ],

    // Sitemap location — submitted to Search Console separately but
    // including it here lets crawlers discover it automatically.
    sitemap: `${BASE_URL}/sitemap.xml`,

    // Canonical host declaration
    host: BASE_URL,
  };
}
