"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_20%_40%,rgba(139,92,246,0.08),transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_500px_300px_at_80%_60%,rgba(245,158,11,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_300px_300px_at_50%_20%,rgba(139,92,246,0.04),transparent_70%)]" />
      </div>

      <div className="max-w-[820px] w-full flex items-center gap-16 relative z-10 max-md:flex-col-reverse max-md:text-center max-md:gap-8">
        {/* Text content */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-[#8b5cf6] uppercase tracking-[3px] mb-2"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-[3.5rem] leading-[1.15] mb-2 gradient-text-dark max-md:text-[2.5rem] max-sm:text-[2rem]"
          >
            Vanshika Chopra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-medium text-[#6b6b6b] mb-4"
          >
            Business Analyst at American Express
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-[#6b6b6b] max-w-[540px] leading-relaxed mb-7 max-md:mx-auto"
          >
            Strategic thinker with a passion for data-driven insights, campaign
            execution, and cross-functional collaboration across APAC, EMEA, and
            LACC markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3 mb-7 max-md:justify-center max-sm:flex-col max-sm:items-center"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-[#1a1a1a] text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-transparent text-[#1a1a1a] border-2 border-[#e5e5e5] hover:border-[#1a1a1a] hover:bg-black/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-2 flex-wrap text-sm text-[#6b6b6b] max-md:justify-center max-sm:flex-col max-sm:gap-1"
          >
            <a
              href="mailto:vanshikachopraa17@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[#8b5cf6] transition-colors"
            >
              <EmailIcon />
              vanshikachopraa17@gmail.com
            </a>
            <span className="text-[#e5e5e5] max-sm:hidden">|</span>
            <span className="inline-flex items-center gap-1.5">
              <PhoneIcon />
              +91-8288068388
            </span>
            <span className="text-[#e5e5e5] max-sm:hidden">|</span>
            <a
              href="https://linkedin.com/in/vanshika-chopra"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 hover:text-[#8b5cf6] transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Visual - Initials Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative animate-float">
            <div className="w-[200px] h-[200px] max-md:w-[140px] max-md:h-[140px] rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd] flex items-center justify-center font-playfair text-6xl max-md:text-4xl font-bold text-white shadow-[0_20px_60px_rgba(139,92,246,0.3)]">
              <span>VC</span>
            </div>
            <div className="absolute -inset-1.5 rounded-full border-2 border-[rgba(139,92,246,0.15)] animate-pulse-ring" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b6b] text-xs tracking-widest uppercase"
      >
        <div className="w-6 h-[38px] border-2 border-[#e5e5e5] rounded-full relative">
          <div className="w-1 h-2 bg-[#6b6b6b] rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-dot" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
