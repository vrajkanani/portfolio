"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, 
  SiPrisma, SiRabbitmq, SiSocketdotio, SiPostman, SiGithub, SiHtml5, SiCss, 
  SiBootstrap, SiExpress, SiRedux, SiJsonwebtokens, SiRazorpay, SiDocker, SiRedis, SiGooglemaps
} from "react-icons/si";
import { FaJava, FaDatabase, FaShieldAlt, FaServer } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java Core", icon: FaJava, color: "#007396" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "REST APIs", icon: TbApi, color: "#005571" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
      { name: "RBAC", icon: FaShieldAlt, color: "#4CAF50" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQL Server", icon: FaDatabase, color: "#CC292B" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Razorpay", icon: SiRazorpay, color: "#02042B" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "VPS (Contabo)", icon: FaServer, color: "#000000" },
      { name: "Google Maps API", icon: SiGooglemaps, color: "#4285F4" },
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-[var(--accent-1)] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="liquid-glass liquid-glass-static p-8"
              style={{ transitionDelay: `${idx * 0.1}s`, overflow: 'visible' }}
            >
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVars}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/50 border border-[var(--glass-border)] shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                      <skill.icon size={28} style={{ color: skill.color }} className="drop-shadow-sm" />
                    </div>
                    
                    {/* Premium Tooltip */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.8, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: 10, scale: 0.8, filter: "blur(4px)" }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
                          className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-[var(--text-primary)]/90 backdrop-blur-xl border border-white/10 text-[var(--bg-base)] text-sm font-bold rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] z-50 pointer-events-none"
                          style={{ transform: 'translateX(-50%)' }}
                        >
                          {skill.name}
                          {/* Elegant tiny triangle */}
                          <svg className="absolute text-[var(--text-primary)]/90 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
