"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work-samples", label: "Work Samples" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 30);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f7f4]/80 backdrop-blur-xl border-b border-[#e5e5e5] shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[820px] mx-auto flex items-center justify-between h-16">
        <a href="#hero" className="font-playfair text-xl font-bold gradient-text">
          VC
        </a>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#8b5cf6] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-lg hover:bg-black/5 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#1a1a1a] rounded-full transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[#1a1a1a] rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#1a1a1a] rounded-full transition-colors"
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden"
          >
            <div className="bg-[#f8f7f4]/95 backdrop-blur-xl border-b border-[#e5e5e5] shadow-lg">
              <ul className="flex flex-col py-4 px-4 gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 rounded-xl text-base font-medium text-[#1a1a1a] hover:bg-[#ede9fe] hover:text-[#8b5cf6] transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
