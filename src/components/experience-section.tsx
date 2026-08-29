import React from "react";
import { experienceData, ExperienceItem } from "../data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] block mb-3">
            Experience
          </span>
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight text-black">
            Where I've worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#E5E5E5] pl-6 sm:pl-8 space-y-12 ml-2">
          {experienceData.map((role: ExperienceItem) => (
            <div key={role.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-white" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                {/* Date on Left */}
                <div className="md:col-span-3 text-sm text-[#737373] font-medium">
                  {role.period}
                </div>

                {/* Role + Company + Description on Right */}
                <div className="md:col-span-9 space-y-2">
                  <h3 className="text-xl font-bold text-black tracking-tight">
                    {role.role}
                  </h3>
                  <div className="text-base font-medium text-[#525252]">
                    {role.company} • {role.location}
                  </div>
                  <p className="text-base text-[#525252] leading-relaxed pt-1">
                    {role.description || role.summary}
                  </p>
                  {role.achievements && role.achievements.length > 0 && (
                    <ul className="space-y-1 text-sm text-[#737373] list-disc list-inside pt-1">
                      {role.achievements.map((item: string, aIdx: number) => (
                        <li key={aIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
