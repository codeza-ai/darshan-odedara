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
        <div className="relative w-[700px] h-[500px]">
            <Image
                src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Background Logo"
                width={700}
                height={500}
                className="rounded-lg object-cover w-full h-full"
            />
            <Image
                src="/profile.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full border-none absolute top-[100px] right-[100px]"
            />
        </div>
    );   
}