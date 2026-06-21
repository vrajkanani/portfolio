"use client";
import { motion } from "framer-motion";
import { GraduationCap, Building } from "lucide-react";

export default function Education() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Education</h2>
          <div className="w-16 h-1 bg-[var(--accent-1)] rounded-full mx-auto" />
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* University */}
          <motion.div variants={itemVars} className="flex flex-col">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--chip-bg)] flex items-center justify-center shrink-0 border border-[var(--glass-border)]">
                <GraduationCap className="text-[var(--accent-1)]" size={28} />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Darshan University</h3>
                <h4 className="text-lg font-medium text-gradient">B.Tech in Computer Science and Engineering</h4>
              </div>
            </div>
            
            <div className="pl-[76px]">
              <p className="text-sm font-bold text-[var(--text-primary)] mb-4">CGPA: 8.00 <span className="text-[var(--text-muted)] font-medium">/ 10.0</span></p>
              <span className="liquid-glass-pill px-4 py-1.5 text-xs font-bold text-[var(--accent-1)] bg-[var(--chip-bg)] border border-[var(--glass-border)] inline-block">
                Expected May 2026
              </span>
            </div>
          </motion.div>

          {/* School */}
          <motion.div variants={itemVars} className="flex flex-col">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white/40 flex items-center justify-center shrink-0 border border-[var(--glass-border)]">
                <Building className="text-[var(--text-secondary)]" size={28} />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Shree B.M. Patel Educational Institute</h3>
                <h4 className="text-lg font-medium text-[var(--text-secondary)]">Higher Secondary (HSC) & Secondary School (SSC)</h4>
              </div>
            </div>
            
            <div className="pl-[76px] mt-auto pt-4">
              <span className="liquid-glass-pill px-4 py-1.5 text-xs font-bold text-[var(--text-secondary)] bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] inline-block">
                2020 – 2022
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
