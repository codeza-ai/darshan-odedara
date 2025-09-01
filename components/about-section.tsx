"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Download, Github, Linkedin} from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency XYZ",
    period: "2020 - 2022",
    description: "Built responsive websites and web applications for various clients using modern frontend technologies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Junior Developer",
    company: "Startup ABC",
    period: "2019 - 2020",
    description: "Contributed to the development of a SaaS platform and learned modern web development practices.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering and web development.",
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "2019",
    description: "Intensive program covering modern web development technologies.",
  },
];

const interests = [
  "Open Source Contribution", "UI/UX Design", "Machine Learning", 
  "Cloud Computing", "DevOps", "Mobile Development", "Blockchain", "AI/ML"
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <Ripple
        className="absolute inset-0 opacity-5"
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
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences and solving complex problems through innovative web development.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Image
                src={"/profile.png"}
                alt="Profile Picture"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"/>
                <CardTitle className="text-2xl">Your Name</CardTitle>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Bharuch, Gujarat</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Available for opportunities</span>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1">
                    <Link href="/resume.pdf" target="_blank" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <motion.a
                    href="https://github.com/codeza-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/darshan-odedara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating modern web applications. 
                  I specialize in React, Next.js, and Node.js, and I'm always eager to learn new technologies and best practices.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, which led me to pursue 
                  a degree in Computer Science. Since then, I've worked on various projects ranging from small business 
                  websites to large-scale enterprise applications.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. 
                  When I'm not coding, you can find me contributing to open-source projects, reading about new technologies, 
                  or exploring the latest trends in web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-2 border-primary/20"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-muted/50 hover:bg-muted transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
