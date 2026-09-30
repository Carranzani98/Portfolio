import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { personal, socials, skills, timeline, projects } = portfolioData;

  return (
    <>
      <Navbar name={personal.name} />
      <main>
        <Hero personal={personal} socials={socials} />
        <Skills skills={skills} />
        <Experience timeline={timeline} />
        <Projects projects={projects} />
        <Contact personal={personal} socials={socials} />
      </main>
      <Footer name={personal.name} />
    </>
  );
}