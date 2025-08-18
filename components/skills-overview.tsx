"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
];

export function SkillsOverview() {
  return (
    <section id="skills" className="relative py-10 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group"
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon />
                  </motion.div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Skills Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/skills"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            View Detailed Skills
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
