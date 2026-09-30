"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = "text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6" aria-label="Main">
          <a href="#home" className="font-semibold">{name}</a>

          <div className="flex items-center gap-4">
            <ul className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            <button
              type="button"
              className="rounded p-2 md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Sibling of <header>, not a child: backdrop-blur would otherwise trap position:fixed. */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute right-0 top-0 h-full w-64 bg-white p-6 shadow-xl dark:bg-zinc-900"
          >
            <button type="button" className="mb-8 rounded p-2" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <ul className="flex flex-col gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`${linkClass} text-base`} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}