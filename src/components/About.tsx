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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label">
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-12 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl"
          >
            Get to know me
          </motion.h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Terminal window */}
            <motion.div variants={itemVariants} className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#febc2e]" />
                <span className="terminal-dot bg-[#28c840]" />
                <span className="ml-4 text-xs text-slate-500">
                  ~/yue-lin — zsh
                </span>
              </div>
              <div className="terminal-body space-y-3 text-sm leading-7">
                <div>
                  <span className="terminal-prompt">➜ </span>
                  <span className="terminal-command">cat about.txt</span>
                </div>
                <div className="terminal-output">
                  <p>
                    <span className="terminal-highlight">Name:</span>{" "}
                    Yue Lin
                  </p>
                  <p>
                    <span className="terminal-highlight">Role:</span>{" "}
                    Software Engineer
                  </p>
                  {/* TODO: Update location */}
                  <p>
                    <span className="terminal-highlight">Location:</span>{" "}
                    San Francisco Bay Area, CA
                  </p>
                  <p>
                    <span className="terminal-highlight">Focus:</span>{" "}
                    Distributed Systems, Cloud Infra
                  </p>
                </div>
                <div className="mt-4">
                  <span className="terminal-prompt">➜ </span>
                  <span className="terminal-command">cat skills.json | jq .languages</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-string">
                    [&quot;Java&quot;, &quot;C++&quot;, &quot;Go&quot;, &quot;Python&quot;, &quot;TypeScript&quot;, &quot;Swift&quot;]
                  </span>
                </div>
                <div className="mt-4">
                  <span className="terminal-prompt">➜ </span>
                  <span className="terminal-command">echo $PASSION</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-string">
                    &quot;Building systems that scale to millions of users&quot;
                  </span>
                </div>
                <div className="mt-2">
                  <span className="terminal-prompt">➜ </span>
                  <span className="cursor-blink text-slate-400">▊</span>
                </div>
              </div>
            </motion.div>

            {/* Text description */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center space-y-5"
            >
              {/* TODO: Customize your personal description below */}
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                Hi there! I&apos;m a software engineer with a passion for building
                robust, high-performance distributed systems. I thrive on
                solving complex engineering challenges at scale — from designing
                metadata services that handle billions of objects to optimizing
                data plane performance at the microsecond level.
              </p>
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                When I&apos;m not deep in systems code, you&apos;ll find me exploring
                the latest in full-stack web development, tinkering with iOS
                apps, or diving into open-source projects. I believe great
                engineering is both an art and a science.
              </p>
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                I&apos;m always excited to collaborate on innovative projects and
                connect with fellow engineers. Let&apos;s build something amazing
                together!
              </p>

              {/* Fun stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                {[
                  { value: "6+", label: "Languages" },
                  { value: "∞", label: "Curiosity" },
                  { value: "☕", label: "Fuel" },
                  { value: "🚀", label: "Goal" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
