"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    href: "mailto:vanshikachopraa17@gmail.com",
    label: "vanshikachopraa17@gmail.com",
    icon: "email",
  },
  {
    href: "tel:+918288068388",
    label: "+91-8288068388",
    icon: "phone",
  },
  {
    href: "https://www.linkedin.com/in/vanshika-chopra-216300198/",
    label: "LinkedIn",
    icon: "linkedin",
    external: true,
  },
];

function ContactIcon({ type }: { type: string }) {
  const className = "w-5 h-5 text-[#8b5cf6] flex-shrink-0";
  switch (type) {
    case "email":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      );
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[820px] mx-auto">
        <ScrollReveal>
          <h2 className="font-playfair text-[2.2rem] mb-4 relative section-underline max-md:text-[1.8rem]">
            Get in Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-base text-[#6b6b6b] mb-8 max-w-[480px]">
            I&apos;m always open to new opportunities and conversations. Feel
            free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-3 max-w-[480px]">
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener" : undefined}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3.5 px-5 py-4 rounded-xl border border-[#e5e5e5] bg-[#f8f7f4] text-sm text-[#1a1a1a] transition-colors duration-300 hover:border-[#8b5cf6] hover:bg-[#ede9fe]"
              >
                <ContactIcon type={contact.icon} />
                <span>{contact.label}</span>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        <footer className="mt-16 pt-6 border-t border-[#e5e5e5] text-center text-sm text-[#6b6b6b]">
          <p>&copy; 2026 Vanshika Chopra. Built with care.</p>
        </footer>
      </div>
    </section>
  );
}
