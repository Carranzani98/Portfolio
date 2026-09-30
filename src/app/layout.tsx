import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const { name, title, tagline } = portfolioData.personal;

export const metadata: Metadata = {
  title: `${name} | ${title}`,
  description: tagline,
};

// Static string, no user input. Runs before paint to avoid a theme flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}