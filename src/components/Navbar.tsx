"use client";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const targetHash = NAV_LINKS.find(l => l.name === activeLink)?.href;
    if (targetHash && window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [activeLink]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const screenCenter = window.innerHeight / 2;
      let current = "";
      let minDistance = Infinity;

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href.replace('#', ''));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= screenCenter && rect.bottom >= screenCenter) { current = link.name; break; }
          const d = Math.abs(rect.top + rect.height / 2 - screenCenter);
          if (d < minDistance) { minDistance = d; current = link.name; }
        }
      }
      if (current) setActiveLink(prev => prev !== current ? current : prev);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
            className="text-2xl font-bold tracking-tight text-[var(--text-primary)] z-10"
          >
            VK.
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="liquid-glass liquid-glass-circle w-11 h-11 flex items-center justify-center text-[var(--text-primary)]"
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
                          ? "text-[var(--accent-1)] bg-[var(--accent-1)]/10"
                          : "text-[var(--text-primary)] hover:bg-white/40"
                      }`}
                    >
                      <span className="text-xs font-bold text-[var(--text-muted)] w-5 text-right tabular-nums select-none">
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
        className={`hidden md:flex fixed left-0 right-0 z-50 justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          scrolled ? "top-6" : "top-0"
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
                  className="text-2xl font-bold tracking-tight text-[var(--text-primary)]"
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
                  scrolled && activeLink !== link.name ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]" : ""
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
