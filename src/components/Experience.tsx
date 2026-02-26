"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

/* TODO: Update with your actual experience */
const experiences: ExperienceItem[] = [
  {
    company: "Oracle Cloud Infrastructure",
    role: "Software Engineer",
    period: "2021 — Present",
    description: [
      "On the Object Storage metadata service team, built and maintained backend APIs and workflows across business-logic and dataplane layers.",
      "Implemented and hardened critical flows including load shedding behavior, object rename lifecycle handling, and internal pagination for large-object retrieval paths.",
      "Drove integration-test quality for metadata APIs, including end-to-end validation for API behavior, error handling, and configuration-sensitive scenarios.",
      "Implemented resilient event platform capabilities such as retry queues, backoff handling, dynamic SSL/certificate reload, and production monitoring for high-throughput pipelines.",
      "Owned and evolved a Tier-1 ownership lookup platform, building APIs and multi-source ownership resolution workflows used by security and operations tooling.",
      "Led a major inventory database optimization effort by implementing scheduled cleanup and lifecycle controls, reducing PDB space by about 90% and cutting I/O throughput by about 95% (from ~5 GB/s to ~250 MB/s).",
    ],
    tags: [
      "Java",
      "Kotlin",
      "Go",
      "C++",
      "Dropwizard",
      "Guice",
      "Spring Boot",
      "Kafka",
      "Oracle SQL",
      "Maven",
      "JUnit",
      "TestNG",
      "Terraform",
      "gRPC",
      "Distributed Systems",
      "CI/CD",
    ],
  },
  {
    company: "Goldman Sachs",
    role: "Software Engineer Intern",
    period: "Summer 2020",
    description: [
      "Built front-end web features using React, Redux, JavaScript, and Sass for internal workflow applications.",
      "Designed database schema and implemented RESTful backend services using Dropwizard and Java collections tooling.",
      "Developed unit and integration tests and contributed to workflow automation efforts in an agile engineering environment.",
    ],
    tags: ["Java", "React", "Redux", "Dropwizard", "REST APIs", "Testing"],
  },
  /* TODO: Add more experiences as needed */
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-label">
            Experience
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl"
          >
            Where I&apos;ve worked
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-16 max-w-2xl text-base text-slate-500 md:text-lg"
          >
            A timeline of my professional journey, building systems at scale.
          </motion.p>

          {/* Timeline */}
          <div className="relative pl-12 md:pl-16">
            {/* Vertical line */}
            <div className="timeline-line" />

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot" style={{ top: "6px" }} />

                  {/* Content card */}
                  <div className="glow-card rounded-2xl p-6 md:p-8">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {exp.company}
                        </h3>
                        <p className="text-base font-medium text-cyan-400">
                          {exp.role}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 font-mono text-xs text-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mb-5 space-y-2">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
