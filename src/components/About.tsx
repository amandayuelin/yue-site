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
    <section id="about" className="relative py-20 md:py-24">
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
                  amanda.profile — terminal
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
                    Amanda (Yue Lin)
                  </p>
                  <p>
                    <span className="terminal-highlight">Role:</span>{" "}
                    Software Engineer
                  </p>
                  <p>
                    <span className="terminal-highlight">Location:</span>{" "}
                    Seattle Area, WA
                  </p>
                  <p>
                    <span className="terminal-highlight">Focus:</span>{" "}
                    Event-Driven Systems (Kafka), Object Metadata Storage, Ownership Platforms
                  </p>
                </div>
                <div className="mt-4">
                  <span className="terminal-prompt">➜ </span>
                  <span className="terminal-command">cat expertise.json | jq .languages</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-string">
                    [&quot;Java&quot;, &quot;Kotlin&quot;, &quot;Go&quot;, &quot;C++&quot;, &quot;TypeScript&quot;, &quot;Python&quot;, &quot;SQL&quot;]
                  </span>
                </div>
                <div className="mt-4">
                  <span className="terminal-prompt">➜ </span>
                  <span className="terminal-command">echo $PASSION</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-string">
                    &quot;Turning complex distributed workflows into reliable platforms that scale across regions and teams&quot;
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
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                I lead backend platform initiatives where correctness,
                reliability, and scalability are foundational requirements. At
                Oracle Cloud Infrastructure, I drive architecture and delivery
                across event processing, ownership lookup, and object metadata
                systems that support critical cloud operations at global scale.
              </p>
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                My work spans rule-driven Kafka pipelines, distributed API and
                data model design, and lifecycle automation for large
                production datasets. I focus on turning ambiguous, cross-team
                problems into clear technical strategy and executable plans, and
                on driving them end-to-end from design review through
                production hardening.
              </p>
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                Beyond implementation, I invest in operational excellence:
                observability, testing quality, release safety, and long-term
                maintainability. I care about building systems that are not only
                technically strong, but also create leverage for partner teams
                and deliver real customer impact.
              </p>

              {/* Fun stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
                {[
                  { icon: "📨", value: "Billion+", label: "Events / Day" },
                  { icon: "🧩", value: "3", label: "Tier-1 Platforms" },
                  { icon: "🌍", value: "50+", label: "Regions Supported" },
                  { icon: "🛡️", value: "24/7", label: "Reliability Mindset" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-center"
                  >
                    <div className="text-xl leading-none">{stat.icon}</div>
                    <div className="mt-2 text-3xl font-bold leading-none tracking-tight text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="mt-2 min-h-[2.5rem] text-xs leading-5 text-slate-500">
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
