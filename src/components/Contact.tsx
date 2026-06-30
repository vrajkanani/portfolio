"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  const containerVars = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-(--accent-1) uppercase mb-4">What&apos;s Next?</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Get In Touch</h3>
        
        <p className="text-(--text-secondary) text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:vraj.kanani@example.com" 
          className="inline-block text-xl md:text-3xl font-bold text-foreground hover:text-(--accent-1) transition-colors duration-300 mb-12 relative group"
        >
          vraj.kanani@example.com
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-(--accent-1)/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </a>

        <div className="flex justify-center items-center gap-4">
          <a
            href="https://linkedin.com/in/vrajkanani"
            target="_blank" rel="noreferrer"
            className="liquid-glass liquid-glass-circle w-14 h-14 flex items-center justify-center text-(--text-secondary) hover:text-(--accent-1) transition-colors hover:-translate-y-1 duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="https://github.com/vrajkanani"
            target="_blank" rel="noreferrer"
            className="liquid-glass liquid-glass-circle w-14 h-14 flex items-center justify-center text-(--text-secondary) hover:text-foreground transition-colors hover:-translate-y-1 duration-300"
          >
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a
            href="mailto:vraj.kanani@example.com"
            className="liquid-glass liquid-glass-circle w-14 h-14 flex items-center justify-center text-(--text-secondary) hover:text-(--accent-3) transition-colors hover:-translate-y-1 duration-300"
          >
            <span className="sr-only">Email</span>
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

    </section>
  );
}
