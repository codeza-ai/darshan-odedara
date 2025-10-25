import Image from "next/image";
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function Profile() {
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
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Background Logo"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 450px, 560px"
                className="rounded-lg object-cover"
                priority
            />
        </div>
    );   
}