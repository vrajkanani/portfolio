/**
 * components/JsonLd.tsx — Structured Data Schemas (JSON-LD)
 *
 * Implements three schemas critical for Google Knowledge Panel,
 * AI-powered search (Perplexity, SGE, ChatGPT), and rich results:
 *
 *  1. Person          — Identifies you as an entity with skills, links, location
 *  2. WebSite         — Describes the site itself; enables Sitelinks Search Box
 *  3. ProfilePage     — Signals this page IS your professional profile
 *
 * This is a React Server Component (no "use client") — safe to render in layout.
 */

const BASE_URL = "https://portfolio-vraj-kanani.vercel.app";

// ── Schema Definitions ────────────────────────────────────────────────────────

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,

  // Core identity
  name: "Vraj Kanani",
  givenName: "Vraj",
  familyName: "Kanani",
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#person-image`,
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    caption: "Vraj Kanani — Full-Stack Engineer",
  },

  // Professional info
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in scalable Node.js backends, PostgreSQL, Redis, RabbitMQ, Socket.IO, and React. Building production-grade distributed systems and real-time applications.",

  // What I know — helps AI search engines surface you for skill-based queries
  knowsAbout: [
    "Node.js",
    "Express.js",
    "Next.js",
    "React",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Socket.IO",
    "Docker",
    "PM2",
    "Nginx",
    "VPS Deployment",
    "REST API Design",
    "Authentication & Authorization",
    "Real-time Systems",
    "Distributed Systems",
    "Payment Gateway Integration",
    "Scalable Backend Architecture",
    "Full-Stack Development",
  ],

  // Education
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Darshan University",
    url: "https://darshan.ac.in/",
  },

  // Location
  nationality: {
    "@type": "Country",
    name: "India",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat",
  },

  // Current work status — signals availability to recruiters
  worksFor: {
    "@type": "Organization",
    name: "Open to Full-Time Opportunities",
  },
  seeks: {
    "@type": "Demand",
    name: "Full-Time Software Engineering Role",
    description:
      "Seeking full-time full-stack or backend engineering roles. Available from 2026.",
  },

  // Cross-platform identity — helps AI engines link your profiles
  sameAs: [
    "https://github.com/vrajkanani",
    "https://linkedin.com/in/kanani-vraj",
  ],
};

// ────────────────────────────────────────────────────────────────────────────────

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Vraj Kanani",
  alternateName: ["Vraj Kanani Portfolio", "Vraj Kanani - Full Stack Engineer"],
  url: BASE_URL,
  description:
    "Portfolio of Vraj Kanani — Full-Stack Engineer specializing in scalable Node.js backends and modern web development.",
  inLanguage: "en-US",
  author: {
    "@id": `${BASE_URL}/#person`,
  },
  publisher: {
    "@id": `${BASE_URL}/#person`,
  },
  copyrightYear: new Date().getFullYear(),
  // Uncomment if you add a site-wide search feature in the future:
  // potentialAction: {
  //   "@type": "SearchAction",
  //   target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
  //   "query-input": "required name=search_term_string",
  // },
};

// ────────────────────────────────────────────────────────────────────────────────

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${BASE_URL}/#profilepage`,
  url: BASE_URL,
  name: "Vraj Kanani — Full-Stack Engineer Portfolio",
  description:
    "Professional portfolio of Vraj Kanani, a Full-Stack Engineer specializing in scalable Node.js backends, real-time systems, and modern web technologies.",
  inLanguage: "en-US",
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  // The page is ABOUT this person
  about: {
    "@id": `${BASE_URL}/#person`,
  },
  // The MAIN entity on this page is the person
  mainEntity: {
    "@id": `${BASE_URL}/#person`,
  },
  // portfolio's actual launch date
  dateCreated: "2025-01-01T00:00:00+00:00",
  dateModified: new Date().toISOString(), // Auto-updates at build time, full ISO 8601 datetime
  author: {
    "@id": `${BASE_URL}/#person`,
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

function SchemaScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD can safely live in <body> — Google supports it.
      // No XSS risk: JSON.stringify escapes all user-controlled characters.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <SchemaScript schema={personSchema as Record<string, unknown>} />
      <SchemaScript schema={websiteSchema as Record<string, unknown>} />
      <SchemaScript schema={profilePageSchema as Record<string, unknown>} />
    </>
  );
}
