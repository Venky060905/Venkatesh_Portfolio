import { Footer } from "@/components/layout/Footer";
import { Dock } from "@/components/layout/Dock";
import { MenuBar } from "@/components/layout/MenuBar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { profile, siteUrl } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <MenuBar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <Highlights />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Dock />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
