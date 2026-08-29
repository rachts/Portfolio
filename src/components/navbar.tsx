import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 backdrop-blur-sm border-b border-[#E5E5E5]`}
      >
        <div className="max-w-7xl h-full mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Name */}
          <a
            href="#"
            className="font-semibold text-base text-black tracking-tight hover:opacity-75 transition-opacity"
          >
            Rachit Kumar Tiwari
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#525252] hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tiwari.rachit@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-xs font-medium px-4 py-2 rounded-xl hover:bg-[#1a1a1a] transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:opacity-75 transition-opacity cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-between pt-28 pb-12 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#737373]">
                Navigation
              </span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-black hover:text-[#525252] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#E5E5E5] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#737373] block">
                Direct Contact
              </span>
              <a
                href="mailto:tiwari.rachit@gmail.com"
                className="text-base font-medium text-black block"
              >
                tiwari.rachit@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
