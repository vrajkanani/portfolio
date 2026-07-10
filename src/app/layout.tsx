/**
 * app/layout.tsx — Production SEO-Optimized Root Layout
 *
 * Key fixes vs original:
 *  1. Playwrite NZ moved from manual <link> tags → next/font/google (font optimization)
 *  2. CSS variable renamed --font-inter → --font-figtree (accuracy)
 *  3. viewport exported separately (Next.js 14+ requirement)
 *  4. themeColor added via viewport (not metadata)
 *  5. OG type: "website" → "profile" (more semantically correct for a portfolio)
 *  6. Multiple icon sizes declared
 *  7. Twitter image now includes alt text
 *  8. manifest.json referenced
 *  9. applicationName added
 * 10. Canonical uses "/" (metadataBase resolves it to full URL)
 * 11. JsonLd component injects all structured data schemas
 * 12. Google verification preserved from original manual <meta> tag
 */

import type { Metadata, Viewport } from "next";
import { Figtree, Playwrite_NZ } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

// ── Fonts ──────────────────────────────────────────────────────────────────────

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true, // Body font — always preload
});

const playwriteNZ = Playwrite_NZ({
  // Moved from manual <link> tags → now next/font optimised & self-hosted by Vercel
  variable: "--font-playwrite-nz",
  display: "swap",
  // preload not supported for this font — next/font handles it automatically
});

// ── Constants ─────────────────────────────────────────────────────────────────

export const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";

// ── Viewport (separate from metadata — Next.js 14+ requirement) ───────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
};

// ── Root Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Vraj Kanani Portfolio",

  title: {
    // Includes key tech keywords while staying readable
    default: "Vraj Kanani | Full-Stack Engineer — Node.js, React & PostgreSQL",
    template: "%s | Vraj Kanani",
  },

  description:
    "Portfolio of Vraj Kanani — Full-Stack Engineer specializing in scalable Node.js backends, PostgreSQL, Redis, RabbitMQ, Socket.IO, and React. 2026 graduate available for full-time roles.",

  // Note: Google ignores <meta name="keywords"> for ranking.
  // Keep for completeness; it costs nothing and some minor engines still read it.
  keywords: [
    "Vraj Kanani",
    "Full-Stack Engineer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "PostgreSQL Developer",
    "Backend Developer India",
    "Software Engineer India",
    "RabbitMQ Developer",
    "Socket.IO Developer",
    "Real-time Systems Developer",
    "Distributed Systems Engineer",
    "Payment Gateway Developer Node.js",
    "Full Stack Developer India 2026",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Vraj Kanani", url: BASE_URL }],
  creator: "Vraj Kanani",
  publisher: "Vraj Kanani",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ──────────────────────────────────────────────────────────────
  // "profile" type is more semantically correct than "website" for a person portfolio
  openGraph: {
    type: "profile",
    firstName: "Vraj",
    lastName: "Kanani",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Vraj Kanani Portfolio",
    title: "Vraj Kanani | Full-Stack Engineer — Node.js, React & PostgreSQL",
    description:
      "Full-Stack Engineer building scalable, production-grade backend systems with Node.js, PostgreSQL & React. 2026 graduate actively seeking full-time roles.",
    images: [
      {
        url: "/og-image.png", // Must be 1200×630 px, < 8 MB
        width: 1200,
        height: 630,
        alt: "Vraj Kanani — Full-Stack Engineer Portfolio",
        type: "image/png",
      },
    ],
  },

  // ── Canonical ────────────────────────────────────────────────────────────────
  // "/" is combined with metadataBase → full canonical URL automatically
  alternates: {
    canonical: "/",
  },

  // ── Icons ────────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png",          sizes: "any",   type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
  category: "technology",

  // ── Search Console Verification ──────────────────────────────────────────────
  // Preserved from original layout.tsx <meta name="google-site-verification">
  verification: {
    google: "UcMHjAkStQ-8qnq6lL3L4rHmFvTkxcyHEV8cMOpKqXA",
    // other: {
    //   "msvalidate.01": ["YOUR_BING_VERIFICATION_CODE"],
    // },
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${playwriteNZ.variable} antialiased scroll-smooth`}
    >
      {/*
        No manual <link> font tags needed:
        next/font handles preconnect, preload, and self-hosting automatically.
      */}
      <body className="min-h-full flex flex-col relative text-primary">
        {/* JSON-LD structured data — rendered server-side, invisible to users */}
        <JsonLd />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
