import {
  Braces,
  FlaskConical,
  Languages,
  Layers,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Section from "./Section";
import type { SkillCategory, SkillIcon } from "@/types/portfolio";

const icons: Record<SkillIcon, LucideIcon> = {
  code: Braces,
  layers: Layers,
  test: FlaskConical,
  design: Palette,
  tools: Wrench,
  languages: Languages,
};

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.category}
              className="reveal rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-brand-500/20 bg-brand-50 px-3 py-1 text-sm text-brand-700 dark:bg-brand-950 dark:text-brand-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
