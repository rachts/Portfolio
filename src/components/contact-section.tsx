import React, { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tiwari.rachit@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] block">
            Contact
          </span>
          <h2 className="text-[36px] md:text-[42px] font-bold tracking-tight text-black">
            Let's work together
          </h2>
          <p className="text-lg text-[#525252] max-w-[560px] leading-relaxed">
            I am currently open to full-time engineering roles, technical architecture consulting, and high-impact systems projects.
          </p>
        </div>

        {/* Large Email */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] block">
            Email (Click to Copy)
          </span>
          <button
            onClick={copyEmail}
            className="text-[24px] sm:text-[32px] font-bold text-black hover:opacity-75 transition-opacity flex items-center gap-3 cursor-pointer text-left"
          >
            <span>tiwari.rachit@gmail.com</span>
            <span className="text-xs font-medium px-3 py-1 bg-[#F2F2F2] rounded-full text-[#525252]">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] block">
            Profiles & Network
          </span>
          <div className="flex flex-wrap gap-8 text-base font-medium text-black">
            <a
              href="https://github.com/rachts"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              <span>GitHub</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/rachitkrtiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              <span>Twitter / X</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
