"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode, etc.): theme just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
    >
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}