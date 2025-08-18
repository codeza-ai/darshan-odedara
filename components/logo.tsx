'use client'
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function Logo({
    width, height
}:{
    width?: number,
    height?: number
}){
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

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Link href="/">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer"
                >
                    <Image src="/logo-dark.svg" alt="Darshan Odedara - Logo" height={height} width={width} />
                </motion.div>
            </Link>
        );
    }
    return (
        <Link href="/">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer"
            >
                <Image src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"} alt="Darshan Odedara - Logo" height={height} width={width} />
            </motion.div>
        </Link>
    )
}