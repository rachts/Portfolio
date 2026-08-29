import React from "react";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { AboutSection } from "../components/about-section";
import { SkillsSection } from "../components/skills-section";
import { ExperienceSection } from "../components/experience-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export function IndexPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased selection:bg-black selection:text-white flex flex-col relative">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Systems Architecture & Project Archives (All 13 Projects) */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        {/* Technologies & Skills */}
        <SkillsSection />

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
