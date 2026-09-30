import { Download } from "lucide-react";
import SocialIcon from "./SocialIcon";
import type { PersonalInfo, SocialLink } from "@/types/portfolio";

export default function Hero({ personal, socials }: { personal: PersonalInfo; socials: SocialLink[] }) {
  return (
    <section id="home" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">{personal.title}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{personal.name}</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">{personal.tagline}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">{personal.bio}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
            View Projects
          </a>
          <a
            href={personal.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </div>

        <ul className="mt-8 flex gap-4">
          {socials.map((s) => (
            <li key={s.platform}>
              <a
                href={s.url}
                aria-label={s.label}
                {...(s.platform !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                className="block rounded-lg border border-zinc-300 p-2.5 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                <SocialIcon platform={s.platform} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}