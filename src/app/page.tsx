import Background from "@/components/Background";
import LoadingAnimation from "@/components/LoadingAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
