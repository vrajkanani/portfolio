"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">Experience</h2>
          <div className="w-16 h-1 bg-(--accent-1) rounded-full" />
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-(--glass-border) ml-4 md:ml-0"
        >
          {/* Timeline Item */}
          <motion.div variants={itemVars} className="mb-12 ml-8 relative">
            <div className="absolute -left-[41px] top-6 w-5 h-5 rounded-full bg-(--accent-1) ring-4 ring-(--bg-base) shadow-lg" />
            
            <div className="liquid-glass liquid-glass-static p-8 relative overflow-visible">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Full-Stack Software Engineer</h3>
                  <h4 className="text-lg font-medium text-(--accent-2) mt-1">Scaloy Technology</h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm font-medium text-(--text-secondary)">
                      <span className="text-foreground">Full-Time:</span> May 2026 - Present<br/>
                      <span className="text-foreground">Internship:</span> Oct 2025 - Apr 2026
                    </p>
                    <a 
                      href="/images/certificates/Internship_Certificate_Vraj.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent-1) hover:text-(--accent-2) transition-colors"
                    >
                      <ExternalLink size={13} strokeWidth={2.5} />
                      View Internship Certificate
                    </a>
                  </div>
                </div>
                <span className="mt-4 md:mt-0 liquid-glass-pill px-4 py-1.5 text-sm font-medium text-(--accent-1) inline-block shrink-0 bg-(--chip-bg)">
                  Present
                </span>
              </div>
              
              {/* Project 1 */}
              <div className="mb-6">
                <h5 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-(--accent-1)" />
                  Inventory & Order Management System (MERN + Next.js)
                </h5>
                <ul className="list-none space-y-2 text-(--text-secondary) ml-4">
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Built <strong>3-tier RBAC</strong> (Master Admin → Admin → Staff) with permission propagation and dependency validation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Implemented <strong>ACID transactions</strong> with immutable invoice snapshots for audit compliance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Integrated <strong>Socket.IO</strong> and <strong>Axios interceptors</strong> with <strong>JWT auto-attach</strong> and centralized error handling.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Developed SEO-optimized landing pages using <strong>Next.js</strong> with <strong>JSON-LD</strong>, dynamic metadata, and Core Web Vitals improvements.</span>
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <h5 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-(--accent-2)" />
                  Cab Sharing Platform (Backend)
                </h5>
                <ul className="list-none space-y-2 text-(--text-secondary) ml-4">
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Engineered a <strong>high-concurrency booking system</strong> using <strong>Node.js</strong> and <strong>PostgreSQL</strong> for reliable seat reservations.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Prevented race conditions and double-booking using <strong>RabbitMQ</strong>, <strong>Prisma transactions</strong>, and <strong>database-level locking</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-(--text-muted) mt-1 text-sm">▹</span>
                    <span>Integrated <strong>Razorpay payments</strong> with secure webhook validation for safe transaction processing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
