export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  logo: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
