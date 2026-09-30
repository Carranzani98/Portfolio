import { Briefcase, GraduationCap } from "lucide-react";
import Section from "./Section";
import type { TimelineItem } from "@/types/portfolio";

export default function Experience({ timeline }: { timeline: TimelineItem[] }) {
  return (
    <Section id="experience" title="Experience & Education">
      <ol className="ml-4 border-l border-zinc-300 dark:border-zinc-700">
        {timeline.map((item) => {
          const Icon = item.type === "work" ? Briefcase : GraduationCap;
          return (
            <li
              key={`${item.organization}-${item.period}`}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm text-zinc-500">{item.period}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {item.organization}
              </p>
              {item.highlights.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
