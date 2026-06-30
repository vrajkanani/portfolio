"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Medal, ExternalLink } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    image: "/images/certificates/Python for Data Science_page-0001.jpg",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Great Learning",
    image: "/images/certificates/Power BI for Beginners_page-0001.jpg",
  },
  {
    title: "Introduction to Tableau",
    issuer: "Great Learning",
    image: "/images/certificates/Introduction to Tableau_page-0001.jpg",
  },
  {
    title: "Project Management",
    issuer: "Great Learning",
    image: "/images/certificates/certificate of project m_page-0001.jpg",
  },
  {
    title: "jQuery",
    issuer: "Great Learning",
    image: "/images/certificates/certificate of jquery_page-0001.jpg",
  },
  {
    title: "Software Engineering Internship",
    issuer: "Scaloy Technology",
    image: "/images/certificates/Internship_Certificate_Vraj_page-0001.jpg",
  },
];

export default function Certificates() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" as const } 
    },
  };

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">Certifications & Achievements</h2>
          <div className="w-16 h-1 bg-(--accent-1) rounded-full mx-auto" />
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Image Certificates */}
          {CERTIFICATES.map((cert, index) => (
            <motion.a 
              key={cert.title}
              variants={itemVars} 
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex flex-col group cursor-pointer overflow-hidden p-0 border-t border-white/40 rounded-3xl"
              style={{ transform: "translateZ(0)" }} /* Fixes Safari/Chrome rounded corner clipping on transform */
            >
              <div className="relative w-full aspect-[1.4/1] overflow-hidden bg-white/40 border-b border-(--glass-border) rounded-t-3xl">
                <Image 
                  src={cert.image} 
                  alt={cert.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--accent-1)]/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-14 h-14 rounded-full bg-[var(--text-primary)]/90 flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    <ExternalLink className="text-[var(--bg-base)]" size={24} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-1">{cert.title}</h3>
                <h4 className="text-sm font-semibold text-[var(--accent-2)]">{cert.issuer}</h4>
              </div>
            </motion.a>
          ))}

          {/* Sports Achievement */}
          <motion.a 
            variants={itemVars} 
            className="liquid-glass flex flex-col group overflow-hidden p-0 border-t border-white/40 rounded-3xl"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="relative w-full aspect-[1.4/1] bg-linear-to-br from-orange-100 to-orange-50 border-b border-[var(--glass-border)] rounded-t-3xl flex items-center justify-center overflow-hidden">
              {/* Decorative background circle */}
              <div className="absolute w-40 h-40 bg-orange-500/10 rounded-full blur-2xl will-change-transform group-hover:scale-125 transition-transform duration-700 ease-out" />
              
              {/* Massive Medal Icon */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl shadow-orange-500/20 border-4 border-orange-100 flex items-center justify-center group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500">
                <Medal className="text-orange-500" size={48} strokeWidth={2} />
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">State-Level Handball Player</h3>
                <h4 className="text-sm font-semibold text-(--accent-2)">Khelmahakumbh</h4>
              </div>
              
              <div className="mt-4">
                <span className="liquid-glass-pill px-3 py-1 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200">
                  Sports Achievement
                </span>
              </div>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
