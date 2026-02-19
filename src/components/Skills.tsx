"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  colorClass: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    colorClass: "",
    skills: ["Java", "C++", "Go", "Python", "TypeScript", "Swift", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    colorClass: "skill-badge-purple",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "gRPC",
      "Protocol Buffers",
      "SwiftUI",
      "Node.js",
    ],
  },
  {
    title: "Infrastructure & Tools",
    colorClass: "skill-badge-green",
    skills: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Linux",
      "Makefile",
    ],
  },
  {
    title: "Domains",
    colorClass: "skill-badge-pink",
    skills: [
      "Distributed Systems",
      "Cloud Computing",
      "Object Storage",
      "Metadata Services",
      "Microservices",
      "System Design",
      "Performance Optimization",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/3 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={categoryVariants} className="section-label">
            Skills & Technologies
          </motion.div>

          <motion.h2
            variants={categoryVariants}
            className="mb-4 text-3xl font-bold tracking-tight text-slate-100 md:text-4xl"
          >
            My tech stack
          </motion.h2>

          <motion.p
            variants={categoryVariants}
            className="mb-16 max-w-2xl text-base text-slate-500 md:text-lg"
          >
            Technologies and tools I work with on a daily basis, spanning
            systems programming to modern web development.
          </motion.p>

          <div className="space-y-12">
            {skillCategories.map((cat) => (
              <motion.div key={cat.title} variants={categoryVariants}>
                <h3 className="mb-5 font-mono text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  {cat.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`skill-badge ${cat.colorClass}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
