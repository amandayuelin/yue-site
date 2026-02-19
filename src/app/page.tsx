import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="noise-overlay relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />

      {/* Divider glow */}
      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <About />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <Skills />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Experience />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <Projects />

      <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Contact />
    </div>
  );
}
