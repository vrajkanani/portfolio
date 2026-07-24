import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SiGithub } from "react-icons/si";
import { BASE_URL } from "@/app/layout";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const url = `${BASE_URL}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    keywords: [
      ...project.tech.map((t) => t.name),
      "Vraj Kanani",
      "portfolio",
      "project",
    ],
    authors: [{ name: "Vraj Kanani", url: BASE_URL }],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Vraj Kanani",
      title: `${project.title} | Vraj Kanani`,
      description: project.description,
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} – project by Vraj Kanani`,
          type: "image/png",
        },
      ],
      authors: ["Vraj Kanani"],
      tags: project.tech.map((t) => t.name),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Vraj Kanani`,
      description: project.description,
      images: [{ url: "/og-image.png", alt: `${project.title} – project by Vraj Kanani` }],
    },
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${BASE_URL}/projects/${project.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${projectUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${projectUrl}#article`,
    headline: `${project.title} – Project by Vraj Kanani`,
    description: project.description,
    url: projectUrl,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
    keywords: project.tech.map((t) => t.name).join(", "),
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Vraj Kanani",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Vraj Kanani",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${projectUrl}#software`,
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Vraj Kanani",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(project.hasLiveDemo ? { url: project.liveDemoUrl } : {}),
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <a href="/#projects" className="inline-flex items-center gap-2 text-(--accent-1) text-sm font-bold mb-12 liquid-glass-pill px-6 py-2.5 bg-(--chip-bg) border border-(--glass-border) shadow-sm hover:text-foreground hover:border-(--accent-1)/30 transition-all">
        <span className="leading-none text-base">&larr;</span>
        <span>Back to Portfolio</span>
      </a>

      <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {project.title}
          </h1>
          
          <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed mb-10 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-10">
            {project.tech.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 liquid-glass-pill px-4 py-2 bg-(--chip-bg) border border-white/5 shadow-sm">
                <tech.icon size={18} style={{ color: tech.color }} />
                <span className="text-sm font-semibold text-foreground/90">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-(--accent-1)/10 flex items-center justify-center text-(--accent-1) text-sm border border-(--accent-1)/20">01</span>
                The Problem
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                {project.extendedContent.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-(--accent-1)/10 flex items-center justify-center text-(--accent-1) text-sm border border-(--accent-1)/20">02</span>
                The Solution
              </h2>
              <p className="text-(--text-secondary) leading-relaxed">
                {project.extendedContent.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-(--accent-1)/10 flex items-center justify-center text-(--accent-1) text-sm border border-(--accent-1)/20">03</span>
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.extendedContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-(--text-secondary)">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--accent-1) shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
            {project.hasLiveDemo && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full px-8 py-3 font-bold text-white bg-[#007aff] hover:bg-[#0062cc] transition-colors shadow-md">
                View Live Demo
              </a>
            )}
            
            {project.githubLinks.map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full px-6 py-3 font-bold text-[#0f172a] bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors">
                <SiGithub size={20} />
                <span>{link.label || "Source Code"}</span>
              </a>
            ))}
          </div>
        </div>
    </main>
  );
}
