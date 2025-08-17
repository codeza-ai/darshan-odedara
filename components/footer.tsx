"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-muted/20 border-t border-border/50">
      <div className="w-2/3 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating exceptional digital experiences through innovative web development and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Ready to start a project or just want to chat?
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@example.com</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="group"
              asChild
            >
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Send Message
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
