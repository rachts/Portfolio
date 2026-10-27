import React from "react";
import { certifications } from "../data/certifications";
import { Reveal, RevealGroup } from "./motion-reveal";

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-t border-[#E5E5E5] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <Reveal className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.08em] text-[#737373]">
              Verified credentials
            </span>
            <h2 className="text-[36px] font-medium tracking-tight text-black md:text-[42px]">
              HackerRank certifications
            </h2>
          </div>
          <a
            href="https://www.hackerrank.com/profile/rachts"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-link inline-flex items-center gap-2 text-sm font-medium text-[#525252] hover:text-black"
          >
            View HackerRank profile
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <Reveal key={`${certification.title}-${certification.level ?? certification.category}-${index}`}>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[150px] flex-col justify-between rounded-2xl border border-[#D4D4D4] bg-white p-5 transition-colors hover:border-[#ff5a1f]"
                aria-label={`View HackerRank ${certification.title} ${certification.level ?? "role"} certificate`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#A3A3A3]">
                    {certification.category}
                  </span>
                  <span className="text-[#A3A3A3] transition-colors group-hover:text-[#ff5a1f]" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-black">
                    {certification.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#737373]">
                    {certification.level ? `${certification.level} level` : "Verified role"}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default CertificationsSection;
