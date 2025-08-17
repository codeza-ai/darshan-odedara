import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darshan Odedara | Portfolio",
  description: "A modern portfolio showcasing my work, skills, and experience in full stack development and system design. I am an aspiring software engineer with a passion for building scalable and efficient systems.",
  keywords: ["Darshan Odedara", "Darshan VIT Chennai","Darshan Odedara VIT Chennai", "Darshan VIT","portfolio", "Full Stack Developer", "Web Developer", "Web Designer" , "Full Stack Developer", "Full Stack Web Developer", "Full Stack Web Designer", "Full Stack Web Developer and Designer", "Full Stack Web Developer and Designer", "Full Stack Web Developer and Designer", "Nextjs developer","Nodejs Developer", "MERN Stack Developer","MERN Stack Web Developer and Designer"],
  authors: [{ name: "Darshan Odedara" }],
  creator: "Darshan Odedar",
  openGraph: {
    title: "Darshan Odedara | Portfolio",
    description: "A modern portfolio showcasing my work, skills, and experience in full stack development and system design. I am an aspiring software engineer with a passion for building scalable and efficient systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Head>
          <meta property="og:title" content="Darshan | Portfolio" />
          <meta property="og:description" content="A modern portfolio showcasing my work, skills, and experience in full stack development and system design. I am an aspiring software engineer with a passion for building scalable and efficient systems." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://darshanodedara.vercel.app" />
          {/* <meta property="og:image" content="https://darshanodedara.vercel.app/profile.png" /> */}
        </Head>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
