import type { ReactNode } from 'react';

interface SpotlightCardProps {
  href: string;
  title: string;
  description?: ReactNode;
  technologies: string[];
  meta?: string;
  showTechnologies?: boolean;
  children?: ReactNode;
}

export default function SpotlightCard({
  href,
  title,
  description,
  technologies,
  meta,
  showTechnologies = true,
  children,
}: SpotlightCardProps) {
  return (
    <div className="group relative h-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-spotlight-card
        className="relative block h-full overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-paper transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:bg-white md:p-8"
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(67, 110, 214, 0.16), transparent 42%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="relative flex h-full flex-col space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
              {title}
            </h3>
            {meta ? (
              <span className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                {meta}
              </span>
            ) : null}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-accent/30 via-ink/10 to-transparent" />
          {description ? (
            <p className="max-w-2xl text-base leading-7 text-muted transition-colors duration-300 group-hover:text-ink/80">
              {description}
            </p>
          ) : null}
          {showTechnologies && technologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-sm text-ink/80 transition-colors duration-300 group-hover:border-accent/20 group-hover:text-ink"
                >
                  {technology}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-auto flex items-center gap-2 pt-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {children}
        </div>
      </a>
    </div>
  );
}
