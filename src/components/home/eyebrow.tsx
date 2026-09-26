import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  /** `ink` for light grounds (AA contrast), `gold` / `cream` for dark grounds. */
  tone?: "ink" | "gold" | "cream";
  as?: ElementType;
  className?: string;
}

const tones = {
  ink: "text-femme-gold-ink before:bg-femme-gold",
  gold: "text-femme-gold before:bg-femme-gold/70",
  cream: "text-femme-cream/80 before:bg-femme-cream/50",
};

/** Tracked-out uppercase label with a short leading hairline. */
export function Eyebrow({ children, tone = "ink", as: Tag = "p", className }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] before:h-px before:w-8 before:shrink-0",
        tones[tone],
        className
      )}
    >
      {children}
    </Tag>
  );
}
