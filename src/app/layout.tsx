import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Vraj Kanani | Full-Stack Engineer",
    template: "%s | Vraj Kanani",
  },
  description:
    "Portfolio of Vraj Kanani — Full-Stack Engineer specializing in scalable Node.js backends, PostgreSQL, React, and real-time systems with Socket.IO and RabbitMQ. Available for full-time roles in 2026.",

  keywords: [
    "Vraj Kanani",
    "Full-Stack Engineer",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "PostgreSQL",
    "RabbitMQ",
    "Socket.IO",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "2026 Graduate",
    "India",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Vraj Kanani Portfolio",
    title: "Vraj Kanani | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable, race-condition-safe backend systems with Node.js, PostgreSQL & React. Available for full-time roles — 2026 Graduate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vraj Kanani — Full-Stack Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vraj Kanani | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable backend systems with Node.js, PostgreSQL & React.",
    images: ["/og-image.png"],
    creator: "@vrajkanani",
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative text-primary">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
