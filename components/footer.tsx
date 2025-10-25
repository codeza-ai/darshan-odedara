"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUp } from "lucide-react";
import { Socials } from "@/components/socials";
import Link from "next/link";
import Logo from "./logo";
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-muted/20 border-t border-border/50">
      <div className="md:w-2/3 w-full mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo
              width={140}
              height={100}
            />
            <br />
            <p className="text-white-foreground text-md leading-relaxed font-bold">
              Creating exceptional arts in binary.
            </p>
            <div className="text-white-foreground text-md leading-relaxed font-bold">
              <p>/'''''\ _ _ _ /'''''\ _ _ _ </p>
            </div>
            <div className="flex space-x-4">
              <Socials/>
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
                Want to cook something together? Drop me a line!
              </p>
              <div className="flex items-center gap-2 font-bold text-white-foreground">
                <Mail className="h-4 w-4" />
                <span>darshanodedara.official@gmail.com</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="group"
              asChild
            >
              <a href="mailto:darshanodedara.official@gmail.com">
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
            © 2025 Darshan Odedara. All rights reserved.
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
