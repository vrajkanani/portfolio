"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        setScrolled(prev => {
          const next = window.scrollY > 50;
          return prev === next ? prev : next;
        });
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(link => ({ ...link, element: document.getElementById(link.href.slice(1)) }))
      .filter((link): link is (typeof NAV_LINKS)[number] & { element: HTMLElement } => Boolean(link.element));

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          const link = sections.find(section => section.element === entry.target);
          if (!link) continue;

          if (entry.isIntersecting) {
            visibleSections.set(link.name, entry.intersectionRatio);
          } else {
            visibleSections.delete(link.name);
          }
        }

        let nextActive = "";
        let strongestRatio = 0;

        for (const [name, ratio] of visibleSections) {
          if (ratio >= strongestRatio) {
            nextActive = name;
            strongestRatio = ratio;
          }
        }

        if (nextActive) {
          setActiveLink(prev => prev === nextActive ? prev : nextActive);
        }
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(section => observer.observe(section.element));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    e.preventDefault();
    setActiveLink(link.name);
    setMobileMenuOpen(false);
    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', link.href);
  };

  return (
    <>
      {/* ─── MOBILE NAVBAR (always a simple bar at top) ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Logo always visible on mobile */}
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); setActiveLink("Home"); setMobileMenuOpen(false); document.getElementById("top")?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-2xl font-bold tracking-tight text-foreground z-10"
          >
            VK.
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="liquid-glass liquid-glass-circle w-11 h-11 flex items-center justify-center text-foreground"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/15 backdrop-blur-sm z-[-1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mx-4 mt-1 liquid-glass rounded-3xl overflow-hidden shadow-2xl"
              >
                <nav className="flex flex-col p-2">
                  {NAV_LINKS.map((link, i) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-base font-semibold transition-colors duration-150 ${
                        activeLink === link.name
                          ? "text-(--accent-1) bg-(--accent-1)/10"
                          : "text-foreground hover:bg-white/40"
                      }`}
                    >
                      <span className="text-xs font-bold text-(--text-muted) w-5 text-right tabular-nums select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.name}
                    </a>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ─── DESKTOP NAVBAR (pill on scroll) ─── */}
      <div
        className={`motion-layer hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          scrolled ? "translate-y-6" : "translate-y-0"
        }`}
      >
        <motion.nav
          className={`pointer-events-auto flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "liquid-glass liquid-glass-pill px-4 py-2 shadow-2xl gap-1"
              : "w-full max-w-7xl px-6 py-8 bg-transparent justify-between"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo — only when not scrolled */}
          <AnimatePresence mode="popLayout">
            {!scrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="#top"
                  className="text-2xl font-bold tracking-tight text-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink("Home");
                    document.getElementById("top")?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', "#top");
                  }}
                >
                  VK.
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  scrolled && activeLink !== link.name ? "text-(--text-secondary) hover:text-foreground" : ""
                }`}
                style={{
                  color: activeLink === link.name ? "var(--accent-1)" : !scrolled ? "var(--text-secondary)" : undefined,
                }}
              >
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-full"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{
                        background: scrolled ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.35)",
                        backdropFilter: "blur(28px) saturate(220%)",
                        WebkitBackdropFilter: "blur(28px) saturate(220%)",
                        boxShadow: scrolled ? "inset 0 1.5px 1.5px rgba(255,255,255,0.95), 0 4px 16px rgba(31,38,135,0.08)" : "none",
                      }}
                    />
                  )}
                </AnimatePresence>

                {activeLink === link.name && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--accent-1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </>
  );
}
