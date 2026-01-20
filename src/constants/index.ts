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
    imgSrc: '/images/project1.png',
    title: 'Github Analyzer',
    tags: ['React','github API' ,'Chart.js','tailwindcss'],
    projectLink: 'https://github-analytic-dashboard.vercel.app/',
    githubLink: 'https://github.com/Abhi22shek/github_analytic_dashboard',
    description: 'A web application that analyzes Github user data and visulalizes it using charts and compares with other users.'
  },
  {
    imgSrc: '/images/poject3.png',
    title: 'VibeTalk real-time chat app',
    tags: ['MERN', 'Socket.io','DaisyUI'],
    projectLink: 'https://fullstack-chat-app-ayqr.onrender.com/login',
    githubLink: 'https://github.com/Abhi22shek/fullStack_Chat-App',
    description: 'A full-stack real-time chat application built with the MERN stack and Socket.io, featuring user authentication, private messaging,  with 30+ themes using DaisyUI.'
  },
  {
    imgSrc: '/images/project2.png',
    title: 'Employee Management App',
    tags: ['MERN', 'TailwindCSS'],
    projectLink: 'https://employee-data-management-assesement.vercel.app/',
    githubLink: 'https://github.com/Abhi22shek/Employee-data-management-assesement-',
    description: 'An employee management application built with the MERN stack, allowing CRUD operations on employee records with a responsive UI using TailwindCSS.'
  },
  {
    imgSrc: '/images/project4.png',
    title: 'React Planner App',
    tags: ['React', 'TailwindCSS'],
    projectLink: 'https://react-planner-delta.vercel.app/',
    githubLink: 'https://github.com/Abhi22shek/React-planner',
    description: 'A React-based planner application that helps users organize tasks and events with a clean UI built using TailwindCSS.'
  },
  // Additional projects (hidden initially)
  {
    imgSrc: '/images/project-ph-1.jpeg',
    hoverImgSrc: '/images/project-5-real.jpg',
    title: 'Weather Forecast App',
    tags: ['React', 'API'],
    projectLink: '#',
    githubLink: '',
    description: 'A full-stack music application built with the MERN stack, featuring real-time music streaming, user authentication, and personalized playlists.'
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    hoverImgSrc: '/images/project-6-real.jpg',
    title: 'Portfolio Website',
    tags: ['Next.js', 'Tailwind'],
    projectLink: '#',
    githubLink: '',
    description: 'A comprehensive e-commerce platform developed using React for the frontend and Node.js for the backend, offering seamless shopping experiences with secure payment integration.'

  },
];

const education: ExperienceType[] = [
  {
    year: '2021 – 2025',
    title: 'Bachelor of Technology in Computer Science',
    institute: 'RGPV University, India',
    desc: 'Focused on software development, data structures, algorithms, and web technologies. Graduated with honors.',
  },
  {
    year: '2023 – 2024',
    title: 'Frontend Development Bootcamp',
    institute: 'Coursera / Online Course',
    desc: 'Learned modern JavaScript, React, and responsive UI patterns through real-world projects.',
  },
  {
    year: '2024 – 2025',
    title: 'MERN Stack Development',
    institute: '100xdevs / Online Course',
    desc: 'Comprehensive MERN stack course covering MongoDB, Express, React, and Node.js with hands-on projects.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024 – 2025',
    title: 'Frontend Developer Intern',
    institute: 'Safe your web',
    desc: 'In 3-months of internship i Developed responsive web pages and components using React and Tailwind CSS, collaborating with the design team to enhance user experience.',
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
    number: '01+',
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