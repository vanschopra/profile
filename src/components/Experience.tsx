"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Business Analyst",
    company: "American Express",
    location: "Gurugram, India",
    period: "Jan 2025 – Present",
    bullets: [
      "Own execution of 500+ multi-channel campaign deliverables across 12+ APAC, EMEA, and LACC markets, maintaining 100% on-time launch performance across regional marketing operations.",
      "Reduced quality errors by 30% and cut analyst onboarding time from 3 weeks to 5 days by developing 12+ SOPs, 8 quick-reference guides, and structured QA checkpoints.",
      "Improved urgent EMEA campaign turnaround by 70%, reducing delivery timelines from 5–7 days to 1–2 days while managing 15–20 priority requests per month.",
      "Increased cross-regional execution efficiency by 25% and reduced campaign rework by 20% by streamlining CMS processes and leading 25+ working sessions with product managers, regional marketers, and operations stakeholders.",
      "Owned a 50+ page CMS Campaign Operations Playbook covering 15+ targeting types, adopted by 18 analysts as the central reference for regional campaign execution.",
      "Delivered 6-month rolling campaign volume forecasts for APAC and EMEA and prepared 15+ leadership updates for onshore partners, supporting capacity planning, workload prioritization, and executive communication.",
    ],
    icon: "briefcase",
  },
  {
    role: "Business Presentation Executive",
    company: "Slidetech Systems",
    location: "Chandigarh, India",
    period: "Jan 2023 – Dec 2024",
    bullets: [
      "Delivered 250+ brand-compliant campaign and business communication deliverables for 10+ enterprise clients, achieving 99% on-time delivery across high-volume, deadline-driven accounts.",
      "Managed end-to-end execution of campaign deliverables including pitch materials, business reviews, dashboards, campaign updates, sales enablement content, and leadership communication assets.",
      "Served as a brand and quality gatekeeper, ensuring 100% compliance with client brand guidelines, messaging standards, formatting rules, and data accuracy requirements.",
      "Partnered with sales, marketing, and client-service teams to translate raw business inputs, campaign requirements, and stakeholder feedback into polished client-ready deliverables.",
      "Led 30+ high-priority campaign deliverables with 24–72 hour turnaround times, coordinating timelines, priorities, feedback, and stakeholder expectations across teams.",
      "Improved team output by 25% by leading work allocation, mentoring 5–8 associates, and strengthening quality review processes across client deliverables.",
      "Supported internal engagement and communication initiatives with 40+ participants, achieving 85% positive feedback.",
    ],
    icon: "presentation",
  },
];

const internships = [
  {
    role: "Finance Intern",
    company: "Dawar and Co, United Kingdom",
    location: "Remote",
    period: "Aug 2022 – Dec 2022",
    bullets: [
      "Maintained customer and supplier ledgers, performed journal postings and bank reconciliations.",
      "Managed payroll filing deadlines and liaised with HMRC and banking providers for compliance.",
    ],
    icon: "finance",
  },
  {
    role: "Finance Intern",
    company: "Holiday Inn Hotel, IHG Hotels",
    location: "Panchkula",
    period: "Jun 2019 – Jul 2019",
    bullets: [
      "Supported daily finance operations of a 5-star hotel, assisting with revenue tracking and expense monitoring.",
      "Utilized Excel and hotel management software for data entry, reconciliation, and financial reporting.",
    ],
    icon: "hotel",
  },
];

function Icon({ type }: { type: string }) {
  const className = "w-5 h-5";
  switch (type) {
    case "briefcase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      );
    case "presentation":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="13" x2="14" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
        </svg>
      );
    case "finance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="8" r="5" />
          <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
        </svg>
      );
    case "hotel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
}

function ExperienceCard({
  exp,
  compact,
}: {
  exp: (typeof experiences)[number] | (typeof internships)[number];
  compact?: boolean;
}) {
  return (
    <ScrollReveal>
      <motion.div
        whileHover={{ y: -3 }}
        className={`bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e5e5e5] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] ${
          compact ? "p-6" : "p-8"
        }`}
      >
        <div className="flex gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#ede9fe] text-[#8b5cf6] flex items-center justify-center flex-shrink-0">
            <Icon type={exp.icon} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="text-sm font-medium text-[#8b5cf6]">{exp.company}</p>
            <p className="text-sm text-[#6b6b6b]">
              {exp.location} | {exp.period}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-[#6b6b6b] pl-5 relative leading-relaxed bullet-dot"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-12 relative section-underline max-md:text-[1.8rem]">
            Experience
          </h2>
        </ScrollReveal>

        {experiences.map((exp) => (
          <div key={exp.company} className="mb-5 last:mb-0">
            <ExperienceCard exp={exp} />
          </div>
        ))}

        <ScrollReveal>
          <h3 className="text-xl font-semibold mt-12 mb-5 text-[#6b6b6b]">
            Internships
          </h3>
        </ScrollReveal>

        {internships.map((intern) => (
          <div key={intern.company} className="mb-5 last:mb-0">
            <ExperienceCard exp={intern} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
