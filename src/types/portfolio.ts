export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  cvUrl: string;
  contactIntro: string;
  avatarUrl?: string;
}

export type SocialPlatform = "github" | "linkedin" | "email" | "website";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export type SkillIcon =
  "code" | "layers" | "test" | "design" | "tools" | "languages";
export interface SkillCategory {
  category: string;
  icon: SkillIcon;
  skills: string[];
}

export interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: { src: string; alt: string };
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  skills: SkillCategory[];
  timeline: TimelineItem[];
  projects: Project[];
}
