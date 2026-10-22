import React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E5E5E5] py-16 bg-[#F5F5F7] text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-base font-medium tracking-tight">
             © Rachit Tiwari · Rachit Kumar Tiwari
          </p>
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js 15 & React 19.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A3A3A3]">
            Motion budget · transform / opacity first
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#525252]">
          <a
             href="https://drive.google.com/file/d/1VZ8CnQdSzF9B3DEpfSfJLlMGEvfP-CiC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Resume
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            CV
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-black transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
