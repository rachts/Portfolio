import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { FlagshipSystems } from '../components/sections/FlagshipSystems';
import { EngineeringPrinciples } from '../components/sections/EngineeringPrinciples';
import { ArchitectureShowcase } from '../components/sections/ArchitectureShowcase';
import { ProjectExplorer } from '../components/sections/ProjectExplorer';
import { TimelineSection } from '../components/sections/TimelineSection';
import { BeyondEngineeringSection } from '../components/sections/BeyondEngineeringSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ShaderBackground } from '../components/ui/ShaderBackground';

export function IndexPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body antialiased selection:bg-primary/20 selection:text-primary flex flex-col relative overflow-hidden">
      {/* Background Shader Component (Removed for flat light design) */}
      
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <HeroSection />
        
        {/* Separator / Spacer */}
        <div className="h-24"></div>
        
        <FlagshipSystems />
        
        {/* Systems Thinking Section Wrapper */}
        <section className="max-w-7xl mx-auto w-full px-6 py-24">
          <EngineeringPrinciples />
          <ArchitectureShowcase />
        </section>

        <ProjectExplorer />
        <TimelineSection />
        <BeyondEngineeringSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
