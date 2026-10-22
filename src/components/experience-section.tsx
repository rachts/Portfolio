import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { experienceData, ExperienceItem } from "../data/experience";
import { Reveal, RevealGroup } from "./motion-reveal";

function renderAchievement(item: string) {
  const repository = "github.com/rachts/vitamend-org";
  const repositoryIndex = item.indexOf(repository);

  if (repositoryIndex === -1) return item;

  return (
    <>
      {item.slice(0, repositoryIndex)}
      <a
        href={`https://${repository}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#ff5a1f] underline decoration-[#ffb08e] underline-offset-4 transition-colors hover:text-[#c43f12]"
      >
        {repository}
      </a>
      {item.slice(repositoryIndex + repository.length)}
    </>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 70%"] });
  return (
    <section ref={sectionRef} id="experience" className="py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <Reveal className="mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#737373] block mb-3">
            Experience
          </span>
          <h2 className="text-[36px] md:text-[42px] font-medium tracking-tight text-black">
            Where I've worked
          </h2>
        </Reveal>

        {/* Timeline */}
        <RevealGroup className="relative pl-6 sm:pl-8 space-y-12 ml-2">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-[#E5E5E5]" aria-hidden="true" />
          <motion.div className="absolute left-0 top-0 w-px origin-top bg-[#ff5a1f]" style={{ height: "100%", scaleY: reduced ? 1 : scrollYProgress }} aria-hidden="true" />
          {experienceData.map((role: ExperienceItem) => (
            <Reveal key={role.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-white" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                {/* Date on Left */}
                <div className="md:col-span-3 text-sm text-[#737373] font-medium">
                  {role.period}
                </div>

                {/* Role + Company + Description on Right */}
                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-xl font-medium text-black tracking-tight">
                    {role.role}
                  </h3>
                  <div className="text-base font-medium text-[#525252]">
                    {role.company} • {role.location}
                  </div>
                  <p className="text-base text-[#525252] leading-relaxed pt-1">
                    {role.description || role.summary}
                  </p>
                  {role.tech.length > 0 && (
                    <p className="text-sm text-[#737373] leading-relaxed pt-1">
                      <span className="font-medium text-[#525252]">Skills:</span> {role.tech.join(", ")}
                    </p>
                  )}
                  {role.achievements && role.achievements.length > 0 && (
                    <ul className="space-y-1 text-sm text-[#737373] list-disc list-inside pt-1">
                      {role.achievements.map((item: string, aIdx: number) => (
                        <li key={aIdx}>{renderAchievement(item)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default ExperienceSection;
