"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Mail, Download } from "lucide-react";
import Link from "next/link";

const ALL_SKILLS = [
  "JavaScript", "Java Core", "SQL", "React.js", "Redux Toolkit", "Next.js", "HTML5", "CSS3",
  "Bootstrap", "Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "MongoDB", "PostgreSQL",
  "SQL Server", "Redis", "Prisma ORM", "RabbitMQ", "Socket.IO", "Postman", "Razorpay", "GitHub", "Docker", "VPS (Contabo)"
];

const MarqueeRow = ({ items, reverse = false, speed = 20 }: { items: string[], reverse?: boolean, speed?: number }) => (
  <div className="flex w-max">
    <motion.div
      className="flex gap-4 pr-4"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items, ...items].map((tech, i) => (
        <span key={`${tech}-${i}`} className="liquid-glass liquid-glass-pill px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] whitespace-nowrap block shadow-sm">
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null);

  // Parallax setup for photo frame tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-500, 500], [8, -8]);
  const rotateY = useTransform(springX, [-500, 500], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative z-10">

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text Content */}
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          {/* Availability chip */}
          <motion.div variants={itemVars}>
            <span className="liquid-glass liquid-glass-pill px-4 py-1.5 text-sm font-medium text-[var(--chip-text)] inline-block">
              Available for Full-Time Roles · 2026 Grad
            </span>
          </motion.div>

          <motion.h1
            variants={itemVars}
            className="text-5xl md:text-6xl lg:text-[80px] leading-[1.1] font-bold tracking-[-0.02em] text-[var(--text-primary)]"
          >
            Hi, I'm <span className="text-frosted-glass">Vraj Kanani.</span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
            Full-Stack Engineer building scalable, race-condition-safe backend systems with Node.js, PostgreSQL &amp; React.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 mt-2">
            {/* Primary: iOS-style solid button with specular arc */}
            <Link
              href="/resume_vraj_kanani.pdf"
              target="_blank"
              className="relative px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 overflow-hidden select-none"
              style={{
                background: "var(--accent-gradient)",
                boxShadow: "inset 0 1.5px 1px rgba(255,255,255,0.45), 0 4px 20px rgba(10,132,255,0.40), 0 1px 2px rgba(0,0,0,0.12)",
              }}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(0.96)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Specular highlight arc — same as liquid-glass ::before */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-[8%] w-[84%] h-[55%] z-0"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0) 100%)",
                  borderRadius: "50% 50% 100% 100% / 60% 60% 100% 100%",
                  filter: "blur(1.5px)",
                }}
              />
              <Download size={17} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </Link>

            {/* Secondary: liquid glass */}
            <Link
              href="#contact"
              className="liquid-glass liquid-glass-pill px-6 py-3 font-semibold text-[var(--text-primary)] flex items-center gap-2"
            >
              Let's Connect
            </Link>
          </motion.div>

          {/* Social Icons — liquid glass circles */}
          <motion.div variants={itemVars} className="flex items-center gap-3 mt-2">
            <a
              href="https://linkedin.com/in/vrajkanani"
              target="_blank" rel="noreferrer"
              className="liquid-glass liquid-glass-circle w-12 h-12 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-1)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a
              href="https://github.com/vrajkanani"
              target="_blank" rel="noreferrer"
              className="liquid-glass liquid-glass-circle w-12 h-12 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a
              href="mailto:vrajkanani@example.com"
              className="liquid-glass liquid-glass-circle w-12 h-12 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-3)] transition-colors"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Photo & Orbit */}
        <motion.div
          className="relative flex items-center justify-center h-[520px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          {/* Liquid Glass Photo Frame */}
          <motion.div
            className="relative z-10 w-[240px] h-[310px] md:w-[270px] md:h-[350px]"
            style={{ rotateX, rotateY }}
          >
            {/* Outer liquid-glass rim */}
            <div
              className="liquid-glass w-full h-full p-[3px]"
              style={{ borderRadius: "32px" }}
            >
              {/* Inner image */}
              <div className="relative w-full h-full rounded-[29px] overflow-hidden bg-gray-100">
                <Image
                  src="/images/avatars/vraj.jpg"
                  alt="Vraj Kanani"
                  fill
                  sizes="(max-width: 768px) 240px, 270px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Infinite Scrolling Tech Marquees (News Ticker Style) */}
          <div
            className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-6 overflow-hidden -z-10"
            style={{ 
              maskImage: "radial-gradient(circle at center, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 70%)"
            }}
          >
            {/* Tilted to give a dynamic 3D feel, or keep horizontal? Horizontal is cleaner for "news ticker" */}
            <MarqueeRow items={ALL_SKILLS.slice(0, 8)} speed={25} />
            <MarqueeRow items={ALL_SKILLS.slice(8, 16)} reverse speed={30} />
            <MarqueeRow items={ALL_SKILLS.slice(16, 24)} speed={28} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
