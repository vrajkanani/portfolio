"use client";
import { motion } from "framer-motion";

export default function About() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Bio Side */}
          <div className="flex-1 space-y-6">
            <motion.h2 variants={itemVars} className="font-heading text-4xl font-bold tracking-tight text-foreground">
              About Me
            </motion.h2>
            <motion.div variants={itemVars} className="w-16 h-1 bg-(--accent-1) rounded-full" />
            <motion.p variants={itemVars} className="text-lg text-(--text-secondary) leading-relaxed">
              I am a passionate Full-Stack Engineer who loves crafting beautiful, high-performance web applications. 
              My expertise lies in building scalable backends with Node.js and PostgreSQL, while creating 
              fluid, glassmorphic interfaces on the frontend with React and Next.js.
            </motion.p>
            <motion.p variants={itemVars} className="text-lg text-(--text-secondary) leading-relaxed">
              When I&apos;m not coding, I&apos;m analyzing system architectures to prevent race conditions or exploring 
              new design languages to create the most premium user experiences possible.
            </motion.p>
          </div>

          {/* Stats Side */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <motion.div variants={itemVars} className="liquid-glass liquid-glass-static p-6 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold text-gradient block mb-2">1+</span>
              <span className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">Years Experience</span>
            </motion.div>
            
            <motion.div variants={itemVars} className="liquid-glass liquid-glass-static p-6 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold text-gradient block mb-2">5+</span>
              <span className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">Projects Built</span>
            </motion.div>
            
            <motion.div variants={itemVars} className="liquid-glass liquid-glass-static p-6 flex flex-col justify-center items-center text-center sm:col-span-2">
              <span className="text-4xl font-bold text-gradient block mb-2">100%</span>
              <span className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">Dedication to Quality</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
