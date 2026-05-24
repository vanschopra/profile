"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "Microsoft PowerPoint (Advanced)",
  "Microsoft Office Suite",
  "Power BI",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "ECMS",
  "MDT",
  "DiMO",
  "MLE",
  "Campaign Management",
  "Data Analysis",
  "Cross-functional Collaboration",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-12 relative section-underline max-md:text-[1.8rem]">
            Skills &amp; Tools
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill} delay={i * 0.03}>
              <motion.span
                whileHover={{ y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white border border-[#e5e5e5] text-sm font-medium text-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] cursor-default transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
              >
                {skill}
              </motion.span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
