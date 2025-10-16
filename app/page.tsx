import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsOverview } from "@/components/projects-overview";
import { SkillsOverview } from "@/components/skills-overview";
import { BlogOverview } from "@/components/blog-overview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="w-full lg:w-2/3 mx-auto">
        <ProjectsOverview />
      </div>
      <div className="w-full lg:w-2/3 mx-auto">
        <SkillsOverview />
      </div>
      <div className="w-full lg:w-2/3 mx-auto">
        <BlogOverview />
      </div>
      <Footer />
    </main>
  );
}
