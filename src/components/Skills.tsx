"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  label: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Microsoft Suite",
    items: ["Microsoft PowerPoint (Advanced)", "Microsoft Office Suite", "Power BI"],
  },
  {
    label: "Design & Creative",
    items: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    label: "Platforms & Tools",
    items: ["ECMS", "MDT", "DiMO", "MLE"],
  },
  {
    label: "Core Competencies",
    items: ["Campaign Management", "Data Analysis", "Cross-functional Collaboration"],
  },
];

function SkillPill({ skill, index }: { skill: string; index: number }) {
  return (
    <ScrollReveal delay={index * 0.03}>
      <motion.span
        whileHover={{ y: -3, scale: 1.03 }}
        className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-[#e5e5e5] text-xs sm:text-sm font-medium text-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] cursor-default transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)] select-none"
      >
        {skill}
      </motion.span>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-12 relative section-underline max-md:text-[1.8rem]">
            Skills &amp; Tools
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <ScrollReveal>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b8b8b] mb-4">
                  {category.label}
                </h3>
              </ScrollReveal>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill, i) => (
                  <SkillPill key={skill} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
