'use client'

import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function NotFound() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Get the actual resolved theme (light or dark)
    const resolvedTheme = (() => {
        if (!mounted) return "light"; // Default fallback during SSR

        if (theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return theme;
    })();
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="text-center w-1/3 mx-auto">
        <div className="mb-8 flex w-full">
          <img src={resolvedTheme == "dark" ? "/notfound-dark.png" : "notfound-light.png"} alt="Page Not Found" className="w-full mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="text-primary hover:underline">
          Go back to Home
        </a>
      </div>
    </main>
  );
}