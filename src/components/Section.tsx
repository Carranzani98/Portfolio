import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}