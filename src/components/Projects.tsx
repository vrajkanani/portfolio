"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiGithub, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss, 
  SiJavascript, SiPython, SiStreamlit, SiDotnet
} from "react-icons/si";
import { Mail, Terminal, Code2, Database } from "lucide-react";

const PROJECTS = [
  {
    title: "Club Laminate",
    description: "A comprehensive web application featuring a rich interactive user interface. Built with a full-stack MERN architecture and integrated with MailJS for seamless communication.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MailJS", icon: Mail, color: "#F4B400" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    featured: true,
    hasLiveDemo: true,
    githubLinks: [{ label: "", url: "https://github.com/vrajkanani/Club-Laminate-EComm" }],
    codeSnippet: `const clubLaminate = {
  stack: ["MongoDB", "Express", "React", "Node.js"],
  features: ["Interactive UI", "MailJS Integration"],
  status: "Deployed successfully",
  launch: () => console.log("Welcome to Club Laminate!")
};

clubLaminate.launch();`,
    snippetLang: "javascript"
  },
  {
    title: "Iris Flower Prediction",
    description: "A machine learning dashboard that predicts Iris flower species based on sepal and petal measurements using an interactive Streamlit interface.",
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
    featured: false,
    hasLiveDemo: true,
    githubLinks: [{ label: "", url: "https://github.com/vrajkanani/Iris_Deployment" }],
    codeSnippet: `import streamlit as st
from sklearn import datasets

# Load Iris dataset
iris = datasets.load_iris()
X = iris.data
y = iris.target

st.write("Iris Flower Prediction Model")`,
    snippetLang: "python"
  },
  {
    title: "Task Management System",
    description: "A robust To-Do list and task management application built with ASP.NET MVC, featuring full CRUD operations and a clean HTML/CSS frontend.",
    tech: [
      { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    featured: false,
    hasLiveDemo: false,
    githubLinks: [
      { label: "Frontend Code", url: "https://github.com/vrajkanani/Task_Management" },
      { label: "Backend API", url: "https://github.com/vrajkanani/TODOAPI" }
    ],
    codeSnippet: `public class TaskController : Controller
{
    private readonly AppDbContext _context;

    public async Task<IActionResult> Index()
    {
        return View(await _context.Tasks.ToListAsync());
    }
}`,
    snippetLang: "csharp"
  },
];

export default function Projects() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-[var(--accent-1)] rounded-full mx-auto" />
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.title}
              variants={itemVars} 
              className={`liquid-glass flex flex-col group overflow-hidden p-0 border-t border-white/40 rounded-[24px] relative ${
                project.featured ? "md:col-span-2 md:flex-row" : "md:col-span-1"
              }`}
              style={{ transform: "translateZ(0)" }}
            >
              {/* Subtle Glowing Background Blob */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--accent-1)] opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />

              {/* Top/Right Code Snippet Visualizer Pane */}
              <div className={`relative bg-[#0d1117] flex flex-col z-20 ${
                project.featured ? "order-2 md:w-1/2 border-l border-[var(--glass-border)]" : "order-1 w-full border-b border-[var(--glass-border)] h-56"
              }`}>
                {/* MacOS Window Controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-xs font-mono text-white/40">{project.snippetLang}</span>
                </div>
                
                {/* Code Body */}
                <div className="p-4 md:p-6 overflow-hidden text-xs md:text-sm font-mono leading-loose relative flex-1 flex items-start">
                  <pre className="text-white/80">
                    <code>
                      {project.codeSnippet.split('\n').map((line, i) => (
                        <div key={i} className="hover:bg-white/5 px-2 rounded transition-colors duration-200">
                          <span className="text-white/30 mr-4 select-none">{i + 1}</span>
                          <span dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/</g, "&lt;")
                              .replace(/>/g, "&gt;")
                              // Use temporary markers to prevent regex overlapping with HTML attributes
                              .replace(/\b(const|let|var|import|from|class|public|private|readonly|async|await|return|def|function)\b/g, '___KW___$1___ENDKW___')
                              .replace(/\b(console\.log|st\.write|View|st|console)\b/g, '___FN___$1___ENDFN___')
                              .replace(/(["'].*?["'])/g, '___STR___$1___ENDSTR___')
                              .replace(/(=&gt;|=>|\{|\}|\[|\]|\(|\))/g, '___PUNC___$1___ENDPUNC___')
                              // Swap markers for actual styled spans
                              .replace(/___KW___(.*?)___ENDKW___/g, '<span class="text-blue-400 font-semibold">$1</span>')
                              .replace(/___FN___(.*?)___ENDFN___/g, '<span class="text-yellow-300">$1</span>')
                              .replace(/___STR___(.*?)___ENDSTR___/g, '<span class="text-green-400">$1</span>')
                              .replace(/___PUNC___(.*?)___ENDPUNC___/g, '<span class="text-pink-400">$1</span>')
                          }} />
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-8 flex flex-col justify-between flex-1 z-10 ${
                project.featured ? "order-1 md:w-1/2 md:p-10" : "order-2"
              }`}>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Icon Tooltips */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.tech.map(tech => (
                      <div 
                        key={`${project.title}-${tech.name}`} 
                        className="relative group/tech cursor-pointer"
                        onMouseEnter={() => setHoveredTech(`${project.title}-${tech.name}`)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div className="w-10 h-10 rounded-xl bg-[var(--chip-bg)] border border-[var(--glass-border)] flex items-center justify-center transition-transform duration-300 group-hover/tech:-translate-y-1 shadow-sm">
                          <tech.icon size={20} style={{ color: tech.color }} />
                        </div>

                        {/* Premium Tooltip */}
                        <AnimatePresence>
                          {hoveredTech === `${project.title}-${tech.name}` && (
                            <motion.div
                              initial={{ opacity: 0, y: 15, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
                              className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-[var(--text-primary)]/90 backdrop-blur-xl border border-white/10 text-[var(--bg-base)] text-xs font-bold rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
                            >
                              {tech.name}
                              <svg className="absolute text-[var(--text-primary)]/90 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6 border-t border-[var(--glass-border)]">
                  {project.hasLiveDemo ? (
                    <>
                      <a href="#" className="flex-1 liquid-glass-pill py-2.5 text-center text-sm font-bold text-[var(--accent-1)] bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/30 hover:bg-[var(--accent-1)]/20 hover:border-[var(--accent-1)]/50 transition-all shadow-lg shadow-[var(--accent-1)]/10">
                        Live Demo
                      </a>
                      <a href={project.githubLinks[0].url} target="_blank" rel="noopener noreferrer" title="View Source" className="w-10 h-10 liquid-glass-circle flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent-1)] transition-colors bg-[var(--chip-bg)]">
                        <SiGithub size={20} />
                      </a>
                    </>
                  ) : (
                    <>
                      {project.githubLinks.map(link => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 liquid-glass-pill px-4 py-2.5 text-center text-sm font-bold text-[var(--text-primary)] bg-[var(--chip-bg)] border border-[var(--glass-border)] hover:text-[var(--accent-1)] hover:border-[var(--accent-1)]/30 transition-all shadow-sm">
                          <SiGithub size={18} className="shrink-0" />
                          <span className="whitespace-nowrap">{link.label}</span>
                        </a>
                      ))}
                    </>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
