"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  type: "industry" | "personal";
  link?: string;
  emoji: string;
}

/* TODO: Update projects with your actual details */
const projects: Project[] = [
  {
    title: "Cloud Object Storage — Metadata Service",
    description:
      "Designed and implemented a distributed metadata service handling billions of objects across global regions. Built with Java and gRPC, featuring sharded storage, cross-region replication, and sub-millisecond lookup latency.",
    tags: ["Java", "gRPC", "Distributed Systems", "Protobuf"],
    type: "industry",
    emoji: "☁️",
  },
  {
    title: "High-Performance Storage Data Plane",
    description:
      "Developed critical data plane components in C++ and Go for cloud object storage, optimizing I/O paths, memory management, and concurrent request processing to achieve high throughput at scale.",
    tags: ["C++", "Go", "Performance", "Systems Programming"],
    type: "industry",
    emoji: "⚡",
  },
  {
    title: "Infrastructure Automation Platform",
    description:
      "Built Terraform-based infrastructure-as-code for multi-region cloud deployments, enabling automated provisioning, configuration management, and zero-downtime rollouts across hundreds of hosts.",
    tags: ["Terraform", "CI/CD", "Cloud Infra", "Automation"],
    type: "industry",
    emoji: "🏗️",
  },
  {
    title: "Storage Lifecycle & Garbage Collection",
    description:
      "Designed lifecycle management engines and garbage collection systems for cloud storage, ensuring data integrity and efficient resource reclamation across petabyte-scale environments.",
    tags: ["Java", "Distributed Systems", "Data Integrity"],
    type: "industry",
    emoji: "♻️",
  },
  {
    title: "MysteryEgg — iOS App",
    description:
      "A delightful iOS application built with SwiftUI featuring engaging animations, intuitive UX patterns, and modern iOS design principles. A fun personal project exploring Apple's latest frameworks.",
    tags: ["Swift", "SwiftUI", "iOS", "Mobile"],
    type: "personal",
    link: "https://github.com/amandayuelin/MysteryEgg",
    emoji: "🥚",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This very site! A modern, animated portfolio built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion. Features particle animations, scroll reveals, and a dark engineer aesthetic.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "personal",
    link: "https://github.com/amandayuelin/amandayuelin.github.io",
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

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            className="mb-16 max-w-2xl text-base text-slate-500 md:text-lg"
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
                  <div className="flex items-center gap-2">
                    <span
                      className={`project-tag ${
                        project.type === "industry"
                          ? "project-tag-industry"
                          : "project-tag-personal"
                      }`}
                    >
                      {project.type === "industry" ? "Industry" : "Personal"}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-800 hover:text-cyan-400"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        {project.link.includes("github") ? (
                          <GitHubSmallIcon />
                        ) : (
                          <ExternalLinkIcon />
                        )}
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

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

          {/* GitHub CTA */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/amandayuelin"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <GitHubSmallIcon />
              See more on GitHub
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
    </section>
  );
}
