"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.",
    category: "Development",
    readTime: "8 min read",
    date: "2024-01-15",
    featured: true,
    slug: "building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: "Explore the latest trends in web development, from AI-powered tools to new frameworks and technologies that are shaping the future of the web.",
    category: "Technology",
    readTime: "6 min read",
    date: "2024-01-10",
    featured: true,
    slug: "future-of-web-development-2024",
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques, including practical examples and real-world use cases for Grid and Flexbox.",
    category: "CSS",
    readTime: "10 min read",
    date: "2024-01-05",
    featured: false,
    slug: "mastering-css-grid-flexbox",
  },
  {
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Discover advanced techniques for optimizing performance in Next.js applications, from code splitting to image optimization.",
    category: "Performance",
    readTime: "12 min read",
    date: "2024-01-01",
    featured: false,
    slug: "optimizing-nextjs-performance",
  },
  {
    title: "State Management in Modern React Applications",
    excerpt: "Compare different state management solutions for React applications, from Context API to Redux and Zustand.",
    category: "React",
    readTime: "9 min read",
    date: "2023-12-28",
    featured: false,
    slug: "state-management-react",
  },
  {
    title: "Designing Accessible Web Applications",
    excerpt: "Learn the principles of web accessibility and how to implement them in your applications to reach a wider audience.",
    category: "Accessibility",
    readTime: "7 min read",
    date: "2023-12-25",
    featured: false,
    slug: "designing-accessible-web-apps",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      </div>
      
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
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Blog Image</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.slug}
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
                    <span className="text-muted-foreground text-sm">Blog Image</span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
