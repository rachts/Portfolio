
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TimelineSection } from '../components/sections/TimelineSection';
import { StatsSection } from '../components/sections/StatsSection';
import { FAQSection } from '../components/sections/FAQSection';

export function IndexPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <TimelineSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
