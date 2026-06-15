"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "Master of Commerce",
    institution: "Punjab University",
    location: "Chandigarh, India",
    date: "2020 – 2022",
  },
  {
    degree: "Bachelor of Education",
    institution: "Kurukshetra University",
    location: "Haryana, India",
    date: "2022 – 2024",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-12 relative section-underline max-md:text-[1.8rem]">
            Education
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e5e5e5] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ede9fe] text-[#8b5cf6] flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-sm font-medium text-[#1a1a1a]">{edu.institution}</p>
                <p className="text-sm text-[#6b6b6b]">{edu.location}</p>
                <p className="text-sm text-[#6b6b6b]">{edu.date}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
