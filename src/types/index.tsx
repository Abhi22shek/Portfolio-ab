import type { LucideIcon } from 'lucide-react';

export type ProjectType = {
  imgSrc: string;
  hoverImgSrc?: string; // Optional: Real project image shown on hover
  title: string;
  tags: string[];
  projectLink: string;
  githubLink: string;
  description: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: LucideIcon;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};
export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};