import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column (Columns 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] block">
              About
            </span>
            <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight text-black leading-tight">
              I build systems that scale.
            </h2>
          </div>

          {/* Right Column (Columns 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-[#525252] leading-relaxed">
              I am a software engineer focused on architecting deterministic backend services, low-latency distributed APIs, and reliable frontend applications. I approach engineering through the lens of performance, modular architecture, and human ergonomics.
            </p>
            <p className="text-lg text-[#525252] leading-relaxed">
              Over the past four years, I've designed and deployed production systems across healthcare pharmacology, SaaS financial solvency, real-time audio analytics, and computer vision. I prioritize deterministic engines over unconstrained models, ensuring absolute reliability for mission-critical workflows.
            </p>
            <p className="text-lg text-[#525252] leading-relaxed">
              Whether writing high-throughput FastAPI services in Python, structuring state pipelines in TypeScript and React 19, or tuning database query latencies down to sub-millisecond bounds, my focus is always clarity, speed, and enduring craftsmanship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
