/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  BookOpen,
  Briefcase,

  FileText,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  Rocket,
  Server,
  Settings,

  Twitter,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/Abhi22shek',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    link: 'www.linkedin.com/in/abhishekb2202',

  },
  {
    icon: Twitter,
    label: 'Twitter',
    link: 'https://x.com/Abhishe22437482',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    hoverImgSrc: '/images/project-1-real.jpg',
    title: 'Full Stack Music App',
    tags: ['MERN', 'Real-time'],
    projectLink: 'https://musify-5al0.onrender.com/',
    githubLink: ''
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    hoverImgSrc: '/images/project-2-real.jpg',
    title: 'E-Commerce Platform',
    tags: ['React', 'Node.js'],
    projectLink: '#',
    githubLink: ''
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    hoverImgSrc: '/images/project-3-real.jpg',
    title: 'Task Management App',
    tags: ['Next.js', 'MongoDB'],
    projectLink: '#',
    githubLink: ''
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    hoverImgSrc: '/images/project-4-real.jpg',
    title: 'Social Media Dashboard',
    tags: ['React', 'Express'],
    projectLink: '#',
    githubLink: ''
  },
  // Additional projects (hidden initially)
  {
    imgSrc: '/images/project-ph-1.jpeg',
    hoverImgSrc: '/images/project-5-real.jpg',
    title: 'Weather Forecast App',
    tags: ['React', 'API'],
    projectLink: '#',
    githubLink: ''
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    hoverImgSrc: '/images/project-6-real.jpg',
    title: 'Portfolio Website',
    tags: ['Next.js', 'Tailwind'],
    projectLink: '#',
    githubLink: ''

  },
];

const education: ExperienceType[] = [
  {
    year: '2018 – 2020',
    title: 'Bachelor of Computer Science',
    institute: 'National University of Technology',
    desc: 'Focused on front-end development, UI design, and web application architecture.',
  },
  {
    year: '2021 – 2022',
    title: 'Frontend Development Bootcamp',
    institute: 'Udemy / Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2023',
    title: 'Advanced UI/UX Design Course',
    institute: 'Design+Code',
    desc: 'Explored advanced design systems, motion design, and accessibility best practices.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2021 – 2022',
    title: 'Frontend Developer Intern',
    institute: 'PixelForge Studio',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
  {
    year: '2022 – Present',
    title: 'UI Engineer',
    institute: 'Freelance / Remote Work',
    desc: 'Designed and developed web interfaces for SaaS startups using React, Tailwind, and Figma.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Next.js',
    imgSrc: 'https://logo.svgcdn.com/devicon/nextjs-original.png',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Web Development',
    desc: 'I build responsive and high-performance web applications using the MERN stack — React, Node.js, Express, and MongoDB. My focus is on clean design, functionality, and smooth user experience.',
    projects: '3+ Projects',
    icon: Globe,
  },
  {
    title: 'Frontend Development',
    desc: 'Designing modern, user-friendly interfaces with React and Tailwind CSS. I focus on responsive layouts, reusable components, and interactive UI features.',
    projects: '4+ Projects',
    icon: Layers,
  },
  {
    title: 'Backend Development',
    desc: 'Developing secure and efficient REST APIs using Node.js and Express, handling authentication, and integrating MongoDB databases for smooth data management.',
    projects: '2+ Projects',
    icon: Server, // (or Database / Code icon)
  },
  {
    title: 'Full Stack Integration',
    desc: 'Combining frontend and backend seamlessly to deliver complete web solutions. I handle everything from API creation to deployment on Vercel or Render.',
    projects: '2+ Projects',
    icon: Rocket,
  },
  {
    title: 'Learning & Exploration',
    desc: 'Constantly exploring new technologies like Next.js and improving deployment workflows. Focused on writing clean, maintainable code and learning through real-world projects.',
    projects: 'Ongoing',
    icon: BookOpen, // or Lightbulb / Code icon
  },
];


const statsData: StatsType[] = [
  {
    number: '10+',
    label: 'Projects Completed',
  },
  {
    number: '02+',
    label: 'Years Learning',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
  },
];


export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,

};