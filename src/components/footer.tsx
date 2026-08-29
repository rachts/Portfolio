import React from "react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E5E5E5] py-16 bg-[#F5F5F7] text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-base font-bold tracking-tight">
            Rachit Kumar Tiwari
          </p>
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js 15 & React 19.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-[#525252]">
          <a
            href="/resume.pdf"
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
