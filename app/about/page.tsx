import { AboutSection } from "@/components/about-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="w-full m:w-2/3 mx-auto">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
