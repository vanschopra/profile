"use client";

import ScrollReveal from "./ScrollReveal";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-14 relative section-underline max-md:text-[1.8rem]">
            About
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-base text-[#6b6b6b] mb-14 max-w-[600px] leading-relaxed">
            Strategic Business Analyst at American Express with expertise in
            multi-channel campaign execution, cross-functional collaboration, and
            process optimization across APAC, EMEA, and LACC markets.
          </p>
        </ScrollReveal>

        <div className="mb-16">
          <Education />
        </div>

        <div className="mb-16">
          <Experience />
        </div>

        <div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
