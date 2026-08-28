import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Facebook,
  Globe,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Package,
  Share2,
  ShoppingBag,
  TrendingUp,
  UserPlus,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  ArrowRight,
  BookOpen,
  Briefcase,
  Facebook,
  Globe,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Package,
  Share2,
  ShoppingBag,
  TrendingUp,
  UserPlus,
  Users,
  Youtube,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/** Resolves a Lucide icon by name for data-driven lists. Falls back to a dot. */
export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Cmp = ICONS[name] ?? Globe;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
