/**
 * app/manifest.ts — Web App Manifest
 *
 * Next.js generates /manifest.json from this file at build time.
 * Benefits:
 *  — Enables "Add to Home Screen" on mobile
 *  — Signals app-quality to Google (minor ranking signal)
 *  — Required for Lighthouse PWA score improvements
 *  — Referenced in layout.tsx via metadata.manifest
 *
 *          Required sizes: 192×192 (maskable) and 512×512 (any purpose)
 */

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vraj Kanani — Full-Stack Engineer Portfolio",
    short_name: "Vraj Kanani",
    description:
      "Portfolio of Vraj Kanani — Full-Stack Engineer specializing in scalable Node.js backends, React, and real-time systems.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",

    // Colors match the actual design system (globals.css)
    background_color: "#F4F6FB", // --bg-base
    theme_color: "#0A84FF", // --accent-1

    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // Adaptive icon for Android
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any", // Standard icon
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],

    // App metadata
    categories: ["developer", "portfolio", "technology"],
    lang: "en-US",
    dir: "ltr",

    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Vraj Kanani Portfolio — Desktop View",
      },
      {
        src: "/screenshots/mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "Vraj Kanani Portfolio — Mobile View",
      },
    ],
  };
}
