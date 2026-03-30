'use client';

import { useEffect, useState } from 'react';

import ContentSections from '@/components/home/ContentSections';
import Sidebar from '@/components/home/Sidebar';
import { navItems, type SectionId } from '@/data/portfolio';

const sectionIds = navItems.map((item) => item.id);

function isSectionId(value: string): value is SectionId {
  return sectionIds.includes(value as SectionId);
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.3;
      let currentSection: SectionId = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (!element) {
          return;
        }

        const top = element.getBoundingClientRect().top;

        if (top <= offset) {
          currentSection = sectionId;
        }
      });

      setActiveSection((previousSection) => {
        if (previousSection !== currentSection) {
          history.replaceState(null, '', `#${currentSection}`);
        }

        return currentSection;
      });
    };

    const hash = window.location.hash.slice(1);

    if (isSectionId(hash)) {
      setActiveSection(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView();
      });
    }
    requestAnimationFrame(updateActiveSection);

    const handleMouseMove = (event: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('[data-spotlight-card]').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleSectionSelect = (section: SectionId) => {
    setActiveSection(section);
    history.replaceState(null, '', `#${section}`);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-5 py-6 text-ink sm:px-8 md:px-10 md:py-10 lg:px-14">
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] xl:gap-16">
        <Sidebar activeSection={activeSection} onSectionSelect={handleSectionSelect} />
        <ContentSections />
      </div>
    </div>
  );
}
