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
import { ImpactDashboard } from '../components/sections/ImpactDashboard';
import { ContactSection } from '../components/sections/ContactSection';
import { ShaderBackground } from '../components/ui/ShaderBackground';
import CurvedLoop from '../components/reactbits/CurvedLoop';
import { PhotoPause } from '../components/ui/PhotoPause';
import FlowingMenu from '../components/reactbits/FlowingMenu';

export function IndexPage() {
  const flowingMenuItems = [
    { link: 'https://optra-fi.vercel.app/', text: 'Optrafi', image: '/project1.png' },
    { link: 'https://doceasy.vercel.app/', text: 'DocEasy', image: '/project6.png' },
    { link: 'https://kred-ai.vercel.app/', text: 'Kred.ai', image: '/project5.png' },
    { link: 'https://vitamend-org.vercel.app', text: 'Vitamend', image: '/project4.png' }
  ];
  return (
    <div className="min-h-screen bg-background text-on-surface font-body antialiased selection:bg-primary/20 selection:text-primary flex flex-col relative overflow-hidden">
      <ShaderBackground />
      
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <HeroSection />
        
        <PhotoPause 
          src="IMG_20260524_101641.jpg" 
          alt="Atmosphere" 
          containerClass="w-full aspect-video md:aspect-[21/9]" 
          imageClass="object-cover object-[center_70%]"
        />
        
        <div className="my-16 flex justify-center">
          <CurvedLoop 
            marqueeText="BUILD • DESIGN • SHIP • REPEAT • " 
            speed={1} 
            className="text-on-surface uppercase font-display font-bold tracking-widest"
          />
        </div>
        
        <FlagshipSystems />
        
        {/* Systems Thinking Section Wrapper */}
        <section className="max-w-7xl mx-auto w-full px-6 py-24">
          <EngineeringPrinciples />
          <ArchitectureShowcase />
        </section>

        <ProjectExplorer />
        <TimelineSection />
        
        <BeyondEngineeringSection />
        
        <div className="max-w-7xl mx-auto w-full px-6">
          <ImpactDashboard />
        </div>

        <ContactSection />
        
        <section className="h-[400px] w-full mt-12 bg-surface border-t border-outline-variant/30 pt-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-hero-primary tracking-tight mb-8 text-center">Where to Next?</h2>
          <FlowingMenu items={flowingMenuItems} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
