import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Section from "./Section";
import SocialIcon from "./SocialIcon";
import type { Project } from "@/types/portfolio";

const btn =
  "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:border-brand-500 hover:text-brand-700 dark:border-zinc-700 dark:hover:text-brand-400";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal flex flex-col overflow-hidden rounded-xl border border-zinc-200 transition motion-safe:hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg dark:border-zinc-800"
          >
            {p.image ? (
              <Image
                src={p.image.src}
                alt={p.image.alt}
                width={800}
                height={450}
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-1.5 w-full bg-gradient-brand"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(p.repoUrl || p.demoUrl) && (
                <div className="mt-5 flex gap-3">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btn}
                    >
                      <SocialIcon platform="github" className="h-4 w-4" /> Code
                    </a>
                  )}
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btn}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />{" "}
                      Live demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
