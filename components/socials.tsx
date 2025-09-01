"use client";

import { MailIcon, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    email: (props: IconProps) => <MailIcon {...props} />,
    instagram: (props: IconProps) => <Instagram {...props} />,
    linkedin: (props: IconProps) => (
        <Linkedin {...props} />
    ),
    x: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>X</title>
            <path
                fill="currentColor"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
        </svg>
    ),
    github: (props: IconProps) => (
        <Github {...props} />
    ),
};

const DATA = {
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/codeza-ai",
                icon: Icons.github,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/darshan-odedara/",
                icon: Icons.linkedin,
            },
            X: {
                name: "X",
                url: "https://x.com/odedara_darshan",
                icon: Icons.x,
            },
            Email: {
                name: "Send Email",
                url: "mailto:darshanodedara.official@gmail.com",
                icon: Icons.email,
            },
            Instagram: {
                name: "Follow IG",
                url: "https://www.instagram.com/darshan.odedara/",
                icon: Icons.instagram,
            },
        },
    },
};

export function Socials() {
    return (
        <TooltipProvider>
            <Dock direction="middle">
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.url}
                                    aria-label={social.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <social.icon className="size-5" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
            </Dock>
        </TooltipProvider>
    );
}
