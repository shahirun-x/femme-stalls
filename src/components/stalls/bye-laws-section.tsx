import React from "react";
import {
  UserCheck,
  MapPin,
  Wallet,
  Tags,
  ShieldCheck,
  RotateCcw,
  Megaphone,
  Scale,
  Download,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { byeLawCategories, byeLawsNote, type ByeLawCategory } from "@/lib/stalls-data";

const iconMap: Record<ByeLawCategory["icon"], LucideIcon> = {
  UserCheck,
  MapPin,
  Wallet,
  Tags,
  ShieldCheck,
  RotateCcw,
  Megaphone,
  Scale,
};

export function ByeLawsSection() {
  return (
    <section id="bye-laws" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="Fair Play"
          title="Stall Bye-Laws & Policies"
          subtitle="All stall holders are expected to follow the FEMME Stalls bye-laws. These are designed to ensure fairness, safety and a positive experience for everyone."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {byeLawCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.label}
                className="flex items-center gap-3 bg-white border border-femme-warm-border rounded-xl p-4"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="font-medium text-sm text-foreground">{category.label}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-femme-pink text-femme-pink font-semibold rounded-full px-6 py-3 text-sm hover:bg-femme-pink-50 transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download Full Bye-Laws (PDF)
          </a>
          <p className="text-muted-foreground text-xs mt-4">{byeLawsNote}</p>
        </div>
      </Container>
    </section>
  );
}
