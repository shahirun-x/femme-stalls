import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  withGoldDivider?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  withGoldDivider = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10 md:mb-14",
        centered ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
            dark
              ? "bg-[#2D1420] text-[#F472B6] border border-[#E91E8B]/30"
              : "bg-[#FFE0EF] text-[#E91E8B] border border-[#FFB8D9]"
          )}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight",
          dark ? "text-white" : "text-[#1A0A12]"
        )}
      >
        {title}
      </h2>

      {withGoldDivider && (
        <div
          className={cn(
            "flex items-center gap-2 py-1",
            centered ? "justify-center" : "justify-start"
          )}
        >
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#C5A55A]" />
          <div className="h-2 w-2 rotate-45 bg-[#C5A55A]" />
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#C5A55A]" />
        </div>
      )}

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg font-light leading-relaxed",
            dark ? "text-white/80" : "text-[#6B445A]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
