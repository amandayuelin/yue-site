"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amanda-yuelin/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:text-blue-400 hover:border-blue-400/50",
  },
  {
    label: "Email",
    href: "mailto:amandabugfree@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "hover:text-emerald-400 hover:border-emerald-400/50",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 md:py-16">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="section-label justify-center"
          >
            Contact
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-slate-100 md:text-5xl"
          >
            Let&apos;s{" "}
            <span className="gradient-text">connect</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg"
          >
            Have a project idea, want to collaborate, or just want to say hi?
            I&apos;d love to hear from you. Feel free to reach out through any
            of the channels below.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="mb-16 flex items-center justify-center gap-5"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-slate-500 transition-all ${social.color} hover:bg-slate-800/50 hover:shadow-lg`}
                aria-label={social.label}
              >
                {social.icon}
                <span className="text-xs font-medium tracking-wider uppercase">
                  {social.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Direct email CTA */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:amandabugfree@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:brightness-110"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Get in Touch
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-24 border-t border-slate-800/50 pt-8"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-sm text-slate-600">
              <span className="text-cyan-400/60">&lt;</span>
              Built with Next.js, Tailwind CSS & Framer Motion
              <span className="text-cyan-400/60">/&gt;</span>
            </p>
            <p className="font-mono text-sm text-slate-600">
              &copy; {new Date().getFullYear()} Amanda Lin. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
