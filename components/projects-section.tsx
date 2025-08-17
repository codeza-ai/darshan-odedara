"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard application that displays current weather conditions and forecasts for multiple locations.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Recipe Finder",
    description: "A recipe discovery application that helps users find recipes based on available ingredients and dietary preferences.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Spoonacular API"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard for scheduling posts and analyzing engagement metrics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <GridPattern
        className="absolute inset-0 opacity-5"
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
        ]}
      />
      
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
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
