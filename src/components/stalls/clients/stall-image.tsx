"use client";

import * as React from "react";
import Image from "next/image";
import {
  Shirt,
  UtensilsCrossed,
  Gem,
  Palette,
  Scissors,
  Sparkles,
  GraduationCap,
  Home,
  Package,
  Store,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { PlaceholderIcon } from "@/lib/clients/utils";

const iconMap: Record<PlaceholderIcon, React.ElementType> = {
  shirt: Shirt,
  utensils: UtensilsCrossed,
  gem: Gem,
  palette: Palette,
  scissors: Scissors,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  home: Home,
  package: Package,
  store: Store,
  user: User,
};

interface StallImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  icon?: PlaceholderIcon;
  sizes?: string;
  priority?: boolean;
}

/** next/image wrapper that swaps to a themed icon placeholder if the asset 404s. */
export function StallImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  icon = "package",
  sizes,
  priority,
}: StallImageProps) {
  const [errored, setErrored] = React.useState(false);
  const Icon = iconMap[icon];

  if (errored) {
    return (
      <div
        className={cn("flex items-center justify-center bg-[var(--client-secondary)]", className)}
        role="img"
        aria-label={alt}
      >
        <Icon
          className="w-1/4 h-1/4 min-w-8 min-h-8 text-[var(--client-primary)] opacity-70"
          strokeWidth={1.5}
        />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
