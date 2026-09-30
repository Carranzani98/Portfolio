import Section from "./Section";
import type { SkillCategory } from "@/types/portfolio";

export default function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}