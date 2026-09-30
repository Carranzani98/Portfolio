import { ExternalLink } from "lucide-react";
import Section from "./Section";
import SocialIcon from "./SocialIcon";
import type { Project } from "@/types/portfolio";

const btn =
  "inline-flex items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
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
                    <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live
                    demo
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
