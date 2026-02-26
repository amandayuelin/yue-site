"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  type: "industry" | "personal";
  emoji: string;
}

/* TODO: Update projects with your actual details */
const projects: Project[] = [
  {
    title: "Resource Ownership Lookup Platform",
    summary:
      "Tier-1 ownership resolution service used by security and operations workflows.",
    highlights: [
      "Designed layered resolution flow across direct mappings, tenancy inference, claimed data, and controlled overrides.",
      "Integrated identity and team-directory dependencies with periodic replication checks for multi-region consistency.",
      "Improved lookup coverage and observability through source-level metrics and error classification.",
    ],
    tags: [
      "Java",
      "Dropwizard",
      "Data Pipelines",
      "Service Integration",
      "Reliability",
      "Observability",
      "API Design",
    ],
    type: "industry",
    emoji: "🧭",
  },
  {
    title: "Cloud Events Platform (Control, Ingestion, Routing, Actions)",
    summary:
      "Distributed event platform for rule management, ingestion, routing, and action delivery.",
    highlights: [
      "Implemented rule lifecycle APIs and rule-cache synchronization across control and ingestion paths.",
      "Built and tuned Kafka-driven pipelines that convert incoming events into downstream actions.",
      "Hardened reliability with retry streams, backoff policies, health checks, and production telemetry.",
    ],
    tags: [
      "Java",
      "Dropwizard",
      "Guice",
      "Kafka",
      "Rule Engine",
      "Event-Driven Architecture",
      "Observability",
      "Reliability",
    ],
    type: "industry",
    emoji: "📡",
  },
  {
    title: "Large-Scale Inventory Database Optimization",
    summary:
      "Performance and lifecycle optimization for a large multi-tenant Oracle inventory database.",
    highlights: [
      "Diagnosed merge/query bottlenecks and delivered retention-based cleanup procedures for large source/report tables.",
      "Coordinated rollout across Kotlin/Spring workers (collectors, ingestors, and reporting jobs).",
      "Reduced allocated PDB space by about 90% and dropped I/O from ~5 GB/s to ~250 MB/s (~95%).",
    ],
    tags: [
      "SQL",
      "PL/SQL",
      "Kotlin",
      "Spring Boot",
      "Oracle Database",
      "Flyway",
      "Performance Tuning",
      "Data Lifecycle",
      "Automation",
    ],
    type: "industry",
    emoji: "🗄️",
  },
  {
    title: "Object Storage Metadata & Dataplane Reliability",
    summary:
      "Backend reliability and API delivery across object metadata and dataplane workflows.",
    highlights: [
      "Built and validated features across rename lifecycle, internal pagination, and load-shedding/error paths.",
      "Expanded integration-test coverage to improve release confidence for critical API flows.",
      "Contributed to storage lifecycle cleanup reliability and safer multi-region rollout automation.",
    ],
    tags: [
      "Java",
      "Go",
      "C++",
      "gRPC",
      "Distributed Systems",
      "Integration Testing",
      "Reliability",
      "Terraform",
    ],
    type: "industry",
    emoji: "☁️",
  },
  {
    title: "MysteryEgg — iOS App",
    summary:
      "SwiftUI iOS app focused on delightful interactions and polished product feel.",
    highlights: [
      "Built modern SwiftUI interfaces with smooth animation and interaction patterns.",
      "Iterated on user flows to improve clarity, responsiveness, and visual consistency.",
      "Used the project to deepen mobile product sense and end-to-end app craftsmanship.",
    ],
    tags: ["Swift", "SwiftUI", "iOS", "Mobile"],
    type: "personal",
    emoji: "🥚",
  },
  {
    title: "Personal Portfolio Website",
    summary:
      "Responsive personal site to present platform engineering experience and technical depth.",
    highlights: [
      "Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.",
      "Designed reusable sections for experience, projects, and skills with clear resume-style flow.",
      "Focused on performance, readability, and cohesive visual polish across devices.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "personal",
    emoji: "🌐",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 md:py-16">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-violet-500/3 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants} className="section-label">
            Projects
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="mb-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl"
          >
            Things I&apos;ve built
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mb-10 max-w-2xl text-base text-slate-500 md:text-lg"
          >
            A mix of large-scale industry systems and personal passion projects.
            Industry projects show brief descriptions only due to proprietary nature.
          </motion.p>

          {/* Project grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glow-card group flex flex-col rounded-2xl border border-slate-800/50 bg-surface p-6"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-3xl">{project.emoji}</span>
                  <span
                    className={`project-tag ${
                      project.type === "industry"
                        ? "project-tag-industry"
                        : "project-tag-personal"
                    }`}
                  >
                    {project.type === "industry" ? "Industry" : "Personal"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Summary + highlights */}
                <p className="mb-3 text-sm leading-relaxed text-slate-400">
                  {project.summary}
                </p>
                <ul className="mb-5 flex-1 space-y-1.5 text-sm leading-relaxed text-slate-400">
                  {project.highlights.map((item, idx) => (
                    <li
                      key={`${project.title}-highlight-${idx}`}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800/80 px-2 py-1 text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
