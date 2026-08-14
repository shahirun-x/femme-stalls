import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTABandProps {
  badge?: string;
  tagline?: string;
  heading: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "pink" | "dark" | "gold";
  className?: string;
}

export function CTABand({
  badge,
  tagline = "Organise the Unorganised",
  heading,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "/members#register",
  secondaryButtonText,
  secondaryButtonHref,
  variant = "pink",
  className,
}: CTABandProps) {
  const variantStyles = {
    pink: "bg-gradient-to-r from-[#E91E8B] via-[#EC4899] to-[#BE185D] text-white",
    dark: "bg-gradient-to-r from-[#1A0A12] via-[#2D1420] to-[#0D0509] text-white border border-[#F3D5E5]/20",
    gold: "bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#A68B3E] text-white",
  };

  return (
    <section className={cn("relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8", variantStyles[variant], className)}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
        {tagline && (
          <span className="font-script text-[#FFD700] text-xl md:text-2xl block">
            {tagline}
          </span>
        )}

        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {heading}
        </h2>

        {description && (
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        )}

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#E91E8B] hover:bg-[#FFF0F7] shadow-lg hover:shadow-xl font-semibold rounded-full px-8 py-3.5 transition-all hover:scale-105"
          >
            <Link href={primaryButtonHref}>
              {primaryButtonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          {secondaryButtonText && secondaryButtonHref && (
            <Button
              asChild
              variant="outlineGold"
              size="lg"
              className="border-white text-white hover:bg-white/15 rounded-full px-8 py-3.5"
            >
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
