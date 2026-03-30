'use client';

import { motion } from 'framer-motion';

import { hero, socialLinks, navItems, type SectionId } from '@/data/portfolio';

interface SidebarProps {
  activeSection: SectionId;
  onSectionSelect: (section: SectionId) => void;
}

function MobileSectionNavLink({
  activeSection,
  section,
  label,
  onSectionSelect,
}: {
  activeSection: SectionId;
  section: SectionId;
  label: string;
  onSectionSelect: (section: SectionId) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSectionSelect(section)}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full border px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
        activeSection === section
          ? 'border-accent bg-accent text-white'
          : 'border-ink/10 bg-white/55 text-muted hover:border-ink/30 hover:text-ink'
      }`}
    >
      {label}
    </motion.button>
  );
}

function DesktopSectionNavLink({
  activeSection,
  section,
  label,
  onSectionSelect,
}: {
  activeSection: SectionId;
  section: SectionId;
  label: string;
  onSectionSelect: (section: SectionId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSectionSelect(section)}
      className="group flex items-center"
    >
      <motion.div
        className="h-px origin-left bg-accent/20"
        initial={{ width: '40px', opacity: 0.3 }}
        animate={{
          width: activeSection === section ? '120px' : '40px',
          opacity: activeSection === section ? 1 : 0.3,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      />
      <motion.span
        className={`ml-6 text-sm uppercase tracking-[0.28em] transition-colors duration-300 ${
          activeSection === section ? 'text-accent' : 'text-muted'
        }`}
        initial={{ x: 0, opacity: 0.5 }}
        animate={{
          x: activeSection === section ? 16 : 0,
          opacity: activeSection === section ? 1 : 0.6,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        {label}
      </motion.span>
    </button>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({ kind }: { kind: 'github' | 'linkedin' | 'resume' }) {
  if (kind === 'github') {
    return <GitHubIcon />;
  }

  if (kind === 'linkedin') {
    return <LinkedInIcon />;
  }

  return <ResumeIcon />;
}

function SocialLink({
  href,
  label,
  kind,
}: {
  href: string;
  label: string;
  kind: 'github' | 'linkedin' | 'resume';
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:text-accent"
    >
      <SocialIcon kind={kind} />
      <span>{label}</span>
    </a>
  );
}

export default function Sidebar({ activeSection, onSectionSelect }: SidebarProps) {
  return (
    <div className="lg:h-screen lg:w-[320px] xl:w-[360px]">
      <div className="flex h-full flex-col justify-between gap-12 rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-paper backdrop-blur-sm md:p-8 lg:fixed lg:top-10 lg:h-[calc(100vh-5rem)] lg:w-[320px] lg:gap-16 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none xl:w-[360px]">
        <div className="space-y-10 lg:space-y-12 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-5 lg:space-y-6"
          >
            <h1 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {hero.name}
            </h1>
            <p className="max-w-md text-base leading-8 text-muted sm:text-lg">
              {hero.summary}
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            aria-label="Section navigation"
            className="flex flex-wrap gap-3 lg:hidden"
          >
            {navItems.map((item) => (
              <MobileSectionNavLink
                key={item.id}
                activeSection={activeSection}
                section={item.id}
                label={item.label}
                onSectionSelect={onSectionSelect}
              />
            ))}
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            aria-label="Section navigation"
            className="hidden lg:flex lg:flex-col lg:gap-8"
          >
            {navItems.map((item) => (
              <DesktopSectionNavLink
                key={item.id}
                activeSection={activeSection}
                section={item.id}
                label={item.label}
                onSectionSelect={onSectionSelect}
              />
            ))}
          </motion.nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-auto space-y-5"
        >
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                label={link.label}
                kind={link.kind}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
