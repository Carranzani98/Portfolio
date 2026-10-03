import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import SocialIcon from "./SocialIcon";
import type { PersonalInfo, SocialLink } from "@/types/portfolio";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export default function Hero({
  personal,
  socials,
}: {
  personal: PersonalInfo;
  socials: SocialLink[];
}) {
  const avatarSize = "h-40 w-40 sm:h-48 sm:w-48";

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-16 overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {personal.location}
          </p>
          <p className="mb-3 text-sm font-medium text-brand-700 dark:text-brand-400">
            {personal.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">{personal.name}</span>
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            {personal.tagline}
          </p>
          <p className="mt-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
            {personal.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 hover:bg-brand-600"
            >
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
                  {...(s.platform !== "email" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="block rounded-lg border border-zinc-300 p-2.5 hover:border-brand-500 hover:text-brand-700 dark:border-zinc-700 dark:hover:text-brand-400"
                >
                  <SocialIcon platform={s.platform} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 rounded-full bg-gradient-brand p-1">
          {personal.avatarUrl ? (
            <Image
              src={personal.avatarUrl}
              alt={`Portrait of ${personal.name}`}
              width={192}
              height={192}
              priority
              className={`${avatarSize} rounded-full bg-white object-cover dark:bg-zinc-950`}
            />
          ) : (
            <div
              aria-hidden="true"
              className={`${avatarSize} flex items-center justify-center rounded-full bg-white text-5xl font-bold dark:bg-zinc-950`}
            >
              <span className="text-gradient">{initials(personal.name)}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
