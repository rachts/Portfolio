import React from "react";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { AboutSection } from "../components/about-section";
import { SkillsSection } from "../components/skills-section";
import { ExperienceSection } from "../components/experience-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { TechMarquee } from "../components/tech-marquee";
import { BootIntro } from "../components/boot-intro";
import { BarcodeDivider } from "../components/motion-reveal";

export function IndexPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased selection:bg-black selection:text-white flex flex-col relative">
      <BootIntro />
      <a href="#main-content" className="skip-link">Skip to content</a>
      {/* Navigation Header */}
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Systems Architecture & Project Archives (All 13 Projects) */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        <BarcodeDivider className="mx-6 md:mx-12 lg:mx-20" />

        {/* Technologies & Skills */}
        <SkillsSection />

        <TechMarquee />

        <BarcodeDivider className="mx-6 md:mx-12 lg:mx-20" />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Contact Information */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default IndexPage;
