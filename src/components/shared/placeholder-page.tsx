import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, HeartHandshake } from "lucide-react";
import { Container } from "./container";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  badge?: string;
  description?: string;
  highlights?: { title: string; desc: string }[];
}

export function PlaceholderPage({
  title,
  subtitle,
  badge = "Coming Soon",
  description = "We are currently preparing full interactive features for this section as part of the Femme Stalls community platform.",
  highlights = [],
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[75vh] bg-[#FDF2F8] py-16 sm:py-24 relative overflow-hidden flex items-center">
      {/* Background Decorative Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFE0EF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFB8D9] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFE0EF] text-[#E91E8B] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#FFB8D9]">
          <Sparkles className="w-3.5 h-3.5 text-[#E91E8B]" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A0A12] tracking-tight mb-4">
          {title}
        </h1>

        {/* Script Tagline */}
        <p className="font-script text-2xl sm:text-3xl text-[#C5A55A] mb-6">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-[#6B445A] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          {description}
        </p>

        {/* Highlights Grid (if any) */}
        {highlights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-left max-w-2xl mx-auto">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-card border border-[#F3D5E5] shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-sm text-[#1A0A12] mb-1 text-[#E91E8B]">
                  {h.title}
                </h4>
                <p className="text-xs text-[#6B445A]">{h.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2.5"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            className="bg-[#E91E8B] hover:bg-[#BE185D] text-white rounded-full px-6 py-2.5 shadow-md"
          >
            <Link href="/contact">
              <HeartHandshake className="w-4 h-4 mr-2" />
              Contact Committee
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
