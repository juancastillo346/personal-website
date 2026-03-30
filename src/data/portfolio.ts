export type SectionId = 'about' | 'experience' | 'projects';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  link: string;
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

export interface SocialLink {
  href: string;
  label: string;
  kind: 'github' | 'linkedin' | 'resume';
}

export const hero = {
  name: 'Juan Castillo',
  title: 'Aspiring Software Engineer',
  summary:
    'CS student exploring full-stack engineering and the power of machine learning',
};

export const heroHighlights = [
  'Columbia Computer Science',
  'Datadog Intern 2026',
  'Amazon SDE Intern 2025',
];

export const navItems: NavItem[] = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
];

export const aboutParagraphs = [
  "I'm a computer science student at Columbia University passionate about building software that blends thoughtful design with solid engineering. My work spans full-stack development and machine learning, with a focus on performance, finance, and real-world impact.",
  "I've taught computer science to over 150 students as an instructor, redesigned AWS systems at Amazon to achieve 800x performance improvements, and built neural networks and password managers. I enjoy working at the intersection of backend logic and frontend design.",
  "Outside of coding, I'm a proud member of SHPE and ColorStack, and I'm constantly learning, whether it's a new tech stack or a better way to write maintainable code.",
  "When I'm not programming, you'll probably find me solving my Rubik's Cube or playing video games to recharge.",
];

export const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineering Intern',
    company: 'Datadog',
    period: 'Summer 2026',
    description: 'Upcoming internship at Datadog as a Software Engineering Intern.',
    link: 'https://www.datadoghq.com',
    technologies: [],
  },
  {
    title: 'Software Development Engineering Intern',
    company: 'Amazon',
    period: 'Summer 2025',
    description:
      'Redesigned a FHIR export system on AWS (Glue PySpark, Fargate, Step Functions) to boost throughput from 5 GB/hour to 4 TB/hour (800x) across 20+ TB of clinical data while cutting parsing ~95%, reducing compute cost 4x, and raising job success to 99.9% via dual-path workflows with caching, validation, and dynamic routing.',
    link: 'https://aws.amazon.com/health/gen-ai/',
    technologies: ['Data Optimization', 'Cloud Computing', 'AWS', 'Python'],
  },
  {
    title: 'Instructor',
    company: 'University of Houston',
    period: 'SUMMER 2023',
    description:
      'Designed and delivered a dynamic "Introduction to Computer Science" curriculum to 150 students, leveraging a variety of teaching techniques to accommodate diverse learning styles. Collaborated with fellow instructors and the Head of the STEM Department to innovate curriculum development and assessment strategies.',
    link: 'https://compucampuhd.com/',
    technologies: ['Java', 'Python', 'Data Structures', 'Hardware Engineering'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Spending Visualization Dashboard',
    description:
      'Interactive spending dashboard that visualizes banking transactions in a Sankey-style flow, helping users explore where their money goes across categories and accounts.',
    link: 'https://github.com/juancastillo346/Spending-Sankey-Diagram',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Plaid Banking'],
  },
  {
    title: 'Neural Network',
    description:
      'Python-based neural network for handwritten digit recognition, achieving 85% accuracy on the MNIST dataset through implementation of forward and backward propagation algorithms.',
    link: 'https://github.com/juancastillo346/neural-network',
    technologies: ['Python', 'Neural Networks', 'Machine Learning'],
  },
  {
    title: 'Virtual Keyboard with Oscillators & Waveforms',
    description:
      'Browser-based computational sound project that lets users play a virtual keyboard while experimenting with oscillators and waveform generation.',
    link: 'https://juancastillo346.github.io/Computational-Sound/',
    technologies: ['JavaScript', 'HTML'],
  },
  {
    title: 'Stock Web Scraper',
    description:
      'Java application that automates data extraction from financial websites, demonstrating efficient web scraping and data parsing capabilities.',
    link: 'https://github.com/juancastillo346/stock-web-scraper',
    technologies: ['Java', 'Jsoup', 'Web Scraping'],
  },
  {
    title: 'Password Manager',
    description:
      'GUI-based password manager for secure storage and management of encrypted passwords. Developed a user-friendly interface with robust security features and seamless data management capabilities.',
    link: 'https://github.com/juancastillo346/password-manager',
    technologies: ['Java', 'GUI', 'Security'],
  },
  {
    title: 'Weather App',
    description:
      'Responsive web application that retrieves and displays real-time weather statistics, featuring a clean interface and seamless API integration.',
    link: 'https://github.com/juancastillo346/weather-app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Study Timer',
    description:
      'Swift-based productivity timer designed around focused study sessions, inspired by Pomodoro-style time management.',
    link: 'https://github.com/juancastillo346/PomodoroBar',
    technologies: ['Swift'],
  },
  {
    title: 'Messaging App',
    description:
      'Real-time messaging application built for fast, responsive conversation flows with Firebase-backed data and a React-based interface.',
    link: 'https://github.com/juancastillo346/UI-Final-Project-Code',
    technologies: ['React', 'Firebase', 'Next.js'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/juancastillo346',
    label: 'GitHub',
    kind: 'github',
  },
  {
    href: 'https://linkedin.com/in/juan-castillo1',
    label: 'LinkedIn',
    kind: 'linkedin',
  },
  {
    href: '/resume/latex-resume-2025.pdf',
    label: 'Resume',
    kind: 'resume',
  },
];
