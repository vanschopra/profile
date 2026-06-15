"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function SlideShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const handleEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <section id="work-samples" className="px-6 py-24 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[920px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-3 relative section-underline max-md:text-[1.8rem]">
            Work Samples
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-base text-[#6b6b6b] mb-10 max-w-[540px] leading-relaxed">
            A presentation redesign showcase — transforming a plain text slide
            into a structured, visually engaging layout with improved hierarchy
            and brand-aligned aesthetics.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            {/* Comparison container */}
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#e5e5e5] select-none cursor-ew-resize bg-[#f0f0f0]"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              role="slider"
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPos)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 2));
                if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 2));
              }}
            >
              {/* After image (right side / infographic) */}
              <img
                src="/slide-6-after.png"
                alt="Redesigned infographic slide"
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />

              {/* Before image (left side / basic text) — clipped */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/slide-6-before.png"
                  alt="Original basic text slide"
                  className="absolute top-0 left-0 w-full h-full object-contain max-w-none"
                  style={{ width: `${100 / Math.max(sliderPos / 100, 0.01)}%` }}
                  draggable={false}
                />
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)] z-10 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              />

              {/* Slider handle */}
              <motion.div
                className="absolute top-1/2 z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
                animate={{
                  scale: isDragging ? 1.15 : isHovering ? 1.08 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.25)] flex items-center justify-center border-2 border-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 18L6 12l5-6" />
                    <path d="M18 6l5 6-5 6" />
                    <path d="M3 12h18" />
                  </svg>
                </div>
              </motion.div>

              {/* Labels */}
              <div
                className="absolute top-4 left-4 z-10 pointer-events-none transition-opacity duration-300"
                style={{ opacity: sliderPos > 15 ? 1 : 0 }}
              >
                <span className="inline-block px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
                  Before
                </span>
              </div>
              <div
                className="absolute top-4 right-4 z-10 pointer-events-none transition-opacity duration-300"
                style={{ opacity: sliderPos < 85 ? 1 : 0 }}
              >
                <span className="inline-block px-3 py-1.5 rounded-lg bg-[#8b5cf6]/70 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
                  After
                </span>
              </div>
            </div>

            {/* Drag hint */}
            <p className="text-center text-sm text-[#6b6b6b] mt-4 flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 18L6 12l5-6" />
                <path d="M18 6l5 6-5 6" />
              </svg>
              Drag the slider to compare before and after
            </p>
          </div>
        </ScrollReveal>

        {/* Key improvements */}
        <div className="mt-14 grid grid-cols-3 gap-5 max-md:grid-cols-1 max-md:gap-3">
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#f8f7f4] rounded-xl p-5 border border-[#e5e5e5] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#ede9fe] text-[#8b5cf6] flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold mb-1">Visual Design</h4>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Transformed plain text into a structured, visually compelling infographic layout
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#f8f7f4] rounded-xl p-5 border border-[#e5e5e5] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#ede9fe] text-[#8b5cf6] flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold mb-1">Information Hierarchy</h4>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Better content organization with improved readability and visual flow
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#f8f7f4] rounded-xl p-5 border border-[#e5e5e5] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="w-9 h-9 rounded-lg bg-[#ede9fe] text-[#8b5cf6] flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold mb-1">Brand Consistency</h4>
              <p className="text-xs text-[#6b6b6b] leading-relaxed">
                Aligned colors, typography, and elements with brand guidelines
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
