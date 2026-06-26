import dynamic from "next/dynamic";
import Background from "@/components/Background";
import LoadingAnimation from "@/components/LoadingAnimation";
import Hero from "@/components/Hero";

// Lazy-load everything below the fold — reduces initial JS bundle & TBT dramatically
const About        = dynamic(() => import("@/components/About"));
const Experience   = dynamic(() => import("@/components/Experience"));
const Education    = dynamic(() => import("@/components/Education"));
const Skills       = dynamic(() => import("@/components/Skills"));
const Certificates = dynamic(() => import("@/components/Certificates"));
const Projects     = dynamic(() => import("@/components/Projects"));
const Contact      = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <Background />
      <LoadingAnimation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </main>
  );
}
