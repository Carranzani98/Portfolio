export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  cvUrl: string;
  contactIntro: string; 
}

export type SocialPlatform = "github" | "linkedin" | "email" | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  skills: SkillCategory[];
  timeline: TimelineItem[];
  projects: Project[];
}