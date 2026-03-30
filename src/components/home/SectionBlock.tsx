import type { ReactNode } from 'react';

import type { SectionId } from '@/data/portfolio';

interface SectionBlockProps {
  id: SectionId;
  eyebrow: string;
  intro?: string;
  index: string;
  children: ReactNode;
}

export default function SectionBlock({
  id,
  eyebrow,
  intro,
  index,
  children,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-ink/10 py-14 first:border-t-0 first:pt-0 md:py-16"
    >
      <div className="grid gap-6 md:grid-cols-[104px_56px_1fr] md:gap-8">
        <div className="text-xs font-medium uppercase tracking-[0.32em] text-muted">
          {index}
        </div>
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/35 via-accent/18 to-transparent" />
        </div>
        <div className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              {eyebrow}
            </p>
            {intro ? (
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
