import type { ComponentType } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Globe, Mail } from "lucide-react";
import type { SocialPlatform } from "@/types/portfolio";

type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const icons: Record<SocialPlatform, IconComponent> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
  website: Globe,
};

export default function SocialIcon({ platform, className }: { platform: SocialPlatform; className?: string }) {
  const Icon = icons[platform];
  return <Icon className={className} aria-hidden />;
}