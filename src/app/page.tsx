'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Section = 'about' | 'experience' | 'projects';

interface NavLinkProps {
  section: Section;
  label: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  useEffect(() => {
    // Scroll to top on page refresh with a slight delay to ensure it works after all content is loaded
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 0);
    }

    // Handle initial hash in URL
    const hash = window.location.hash.slice(1) as Section;
    if (hash && ['about', 'experience', 'projects'].includes(hash)) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      element?.scrollIntoView();
    }

    const observers: Record<Section, IntersectionObserver | undefined> = {
      about: undefined,
      experience: undefined,
      projects: undefined
    };
    
    const sections: Section[] = ['about', 'experience', 'projects'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
              // Update URL hash without scrolling
              history.replaceState(null, '', `#${section}`);
            }
          },
          { 
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.5
          }
        );
        observers[section]?.observe(element);
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.group').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      sections.forEach(section => {
        observers[section]?.disconnect();
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const NavLink = ({ section, label }: NavLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActiveSection(section);
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="flex items-center group">
        <motion.div 
          className="h-[1px] bg-accent origin-left"
          initial={{ width: '40px', opacity: 0.3 }}
          animate={{ 
            width: activeSection === section ? '120px' : '40px',
            opacity: activeSection === section ? 1 : 0.3
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ x: 0, opacity: 0.5 }}
          animate={{
            x: activeSection === section ? 16 : 0,
            opacity: activeSection === section ? 1 : 0.5
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <a 
            href={`#${section}`} 
            onClick={handleClick}
            className={`${
              activeSection === section ? 'text-accent' : 'text-slate'
            } transition-colors duration-300 hover:text-accent uppercase tracking-widest text-sm ml-6`}
          >
            {label}
          </a>
        </motion.div>
      </div>
    );
  };

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Datadog",
      period: "Summer 2026",
      description: "Upcoming internship at Datadog as a Software Engineering Intern.",
      link: "https://www.datadoghq.com",
      technologies: []
    },
    {
      title: "Software Development Engineering Intern",
      company: "Amazon",
      period: "Summer 2025",
      description: "Redesigned a FHIR export system on AWS (Glue PySpark, Fargate, Step Functions) to boost throughput from 5 GB/hour to 4 TB/hour (800x) across 20+ TB of clinical data while cutting parsing ~95%, reducing compute cost 4x, and raising job success to 99.9% via dual-path workflows with caching, validation, and dynamic routing.",
      link: "https://aws.amazon.com/health/gen-ai/",
      technologies: ["Data Optimization", "Cloud Computing", "AWS", "Python"]
    },
    {
      title: "Course Instructor",
      company: "University of Houston",
      period: "SUMMER 2023",
      description: "Designed and delivered a dynamic \"Introduction to Computer Science\" curriculum to 150 students, leveraging a variety of teaching techniques to accommodate diverse learning styles. Collaborated with fellow instructors and the Head of the STEM Department to innovate curriculum development and assessment strategies.",
      link: "https://compucampuhd.com/",
      technologies: ["Java", "Python", "Data Structures", "Hardware Engineering"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue via-[#0f1f3d] to-[#162a4a] text-slate-light p-6 md:p-12 lg:p-16">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-[400px_1fr] gap-24">
        {/* Left Side */}
        <div className="fixed w-[400px] pt-20 h-screen flex flex-col">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-7xl font-bold mb-6 hover:text-slate-lightest transition-all duration-300 hover:text-shadow-glow tracking-tight"
            >
              Juan Castillo
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl text-accent mb-5 hover:text-white transition-all duration-300 hover:text-shadow-glow"
            >
              Aspiring Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate mb-16 font-light hover:text-slate-light transition-all duration-300 hover:text-shadow-glow"
            >
              CS student exploring full-stack engineering and the power of machine learning
            </motion.p>

            <nav className="space-y-6">
              <NavLink section="about" label="ABOUT" />
              <NavLink section="experience" label="EXPERIENCE" />
              <NavLink section="projects" label="PROJECTS" />
            </nav>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="fixed bottom-0 mb-8 flex items-center space-x-5"
          >
            <a 
              href="https://github.com/juancastillo346" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate hover:text-accent transition-all duration-300 hover:text-shadow-glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/juan-castillo1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate hover:text-accent transition-all duration-300 hover:text-shadow-glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="/resume/latex-resume-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-all duration-300 hover:text-shadow-glow flex items-center gap-2"
            >
              <span className="text-sm tracking-widest uppercase">Résumé</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="col-start-2 pl-20 pt-20">
          <section id="about" className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-8 w-1 h-full bg-accent/20 rounded-full" />
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate relative hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                  I'm a computer science student at <span className="text-accent">Columbia University</span> passionate about building software that blends thoughtful design with solid engineering. My work spans <span className="text-accent">full-stack development</span> and <span className="text-accent">machine learning</span>, with a focus on performance, finance, and real-world impact.
                </p>

                <p className="text-lg leading-relaxed text-slate relative hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                  I've <span className="text-accent">taught</span> computer science to over <span className="text-accent">150 students</span> as a course instructor, redesigned AWS systems at <span className="text-accent">Amazon</span> to achieve 800× performance improvements, and built neural networks and password managers. I enjoy working at the intersection of backend logic and frontend design.
                </p>

                <p className="text-lg leading-relaxed text-slate relative hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                  Outside of coding, I'm a proud member of <span className="text-accent">SHPE</span> and <span className="text-accent">ColorStack</span>, and I'm constantly learning—whether it's a new tech stack or a better way to write maintainable code.
                </p>

                <p className="text-lg leading-relaxed text-slate relative hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                  When I'm not programming, you'll probably find me solving my Rubik's Cube or playing video games to recharge!
                </p>
              </div>
            </motion.div>
          </section>

          <section id="experience" className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-8 w-1 h-full bg-accent/20 rounded-full" />
              <div className="space-y-8 max-w-xl py-4">
                {experiences.map((experience, index) => (
                  <div key={index} className="group relative">
                    <div className="text-slate text-sm tracking-widest uppercase mb-2 opacity-70">
                      {experience.period}
                    </div>
                    <a 
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="relative p-4 -mx-4 transition-all duration-300 bg-blue-light/50 hover:bg-blue-light rounded-xl border border-accent/10 block"
                    >
                      <div className="absolute inset-0 rounded-xl transition-opacity opacity-50 group-hover:opacity-100" style={{
                        background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                      }} />
                      <div className="relative">
                        <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                          {experience.title} · {experience.company}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </h3>
                        <p className="text-slate mt-2 mb-4 hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-slate-light text-sm border border-accent rounded-full px-3 py-1 hover:bg-accent/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="projects" className="mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-8 w-1 h-full bg-accent/20 rounded-full" />
              <div className="space-y-8 max-w-xl py-4">
                <a 
                  href="https://github.com/juancastillo346/password-manager"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative p-4 -mx-4 transition-all duration-300 bg-blue-light/50 hover:bg-blue-light rounded-xl border border-accent/10 block"
                >
                  <div className="absolute inset-0 rounded-xl transition-opacity opacity-50 group-hover:opacity-100" style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                  }} />
                  <div className="flex-1 relative">
                    <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                      Password Manager
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    <p className="text-slate mt-2 mb-4 hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                      GUI-based password manager for secure storage and management of encrypted passwords. Developed a user-friendly interface with robust security features and seamless data management capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Java', 'GUI', 'Security'].map((tech) => (
                        <span
                          key={tech}
                          className="text-slate-light text-sm border border-accent rounded-full px-3 py-1 hover:bg-accent/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/juancastillo346/neural-network"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative p-4 -mx-4 transition-all duration-300 bg-blue-light/50 hover:bg-blue-light rounded-xl border border-accent/10 block"
                >
                  <div className="absolute inset-0 rounded-xl transition-opacity opacity-50 group-hover:opacity-100" style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                  }} />
                  <div className="flex-1 relative">
                    <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                      Neural Network
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    <p className="text-slate mt-2 mb-4 hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                      Python-based neural network for handwritten digit recognition, achieving 85% accuracy on the MNIST dataset through implementation of forward and backward propagation algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Python', 'Neural Networks', 'Machine Learning'].map((tech) => (
                        <span
                          key={tech}
                          className="text-slate-light text-sm border border-accent rounded-full px-3 py-1 hover:bg-accent/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/juancastillo346/weather-app"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative p-4 -mx-4 transition-all duration-300 bg-blue-light/50 hover:bg-blue-light rounded-xl border border-accent/10 block"
                >
                  <div className="absolute inset-0 rounded-xl transition-opacity opacity-50 group-hover:opacity-100" style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                  }} />
                  <div className="flex-1 relative">
                    <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                      Weather App
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    <p className="text-slate mt-2 mb-4 hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                      Responsive web application that retrieves and displays real-time weather statistics, featuring a clean interface and seamless API integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                        <span
                          key={tech}
                          className="text-slate-light text-sm border border-accent rounded-full px-3 py-1 hover:bg-accent/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/juancastillo346/stock-web-scraper"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative p-4 -mx-4 transition-all duration-300 bg-blue-light/50 hover:bg-blue-light rounded-xl border border-accent/10 block"
                >
                  <div className="absolute inset-0 rounded-xl transition-opacity opacity-50 group-hover:opacity-100" style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)'
                  }} />
                  <div className="flex-1 relative">
                    <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors mb-2 flex items-center gap-2">
                      Stock Web Scraper
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    <p className="text-slate mt-2 mb-4 hover:text-slate-light transition-all duration-300 hover:text-shadow-glow">
                      Java application that automates data extraction from financial websites, demonstrating efficient web scraping and data parsing capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Java', 'Jsoup', 'Web Scraping'].map((tech) => (
                        <span
                          key={tech}
                          className="text-slate-light text-sm border border-accent rounded-full px-3 py-1 hover:bg-accent/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
} 