import React from "react";
import {
  UserCircle,
  Briefcase,
  CalendarCheck,
  ContactRound,
  BookOpen,
  Lightbulb,
  FileText,
  Bell,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { memberAreaFeatures, type MemberAreaFeature } from "@/lib/members-data";

const iconMap: Record<MemberAreaFeature["icon"], LucideIcon> = {
  UserCircle,
  Briefcase,
  CalendarCheck,
  ContactRound,
  BookOpen,
  Lightbulb,
  FileText,
  Bell,
  MessageSquare,
};

export function MemberLoginTeaser() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-femme-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <Container size="lg" className="relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
          Member Area — Coming Soon
        </h2>
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-xl mx-auto mb-14">
          A private space for registered members to connect, learn and grow together.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto mb-12">
          {memberAreaFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={feature.label} className="flex flex-col items-center gap-2.5 group">
                <div className="w-14 h-14 rounded-full bg-femme-dark-card border border-white/10 flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(233,30,139,0.35)]">
                  <Icon className="w-6 h-6 text-femme-pink-300" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm text-white/80">{feature.label}</span>
              </div>
            );
          })}
        </div>

        <p className="text-femme-warm-white/60 text-sm">
          Member login will be available soon. Stay connected through WhatsApp for updates.
        </p>
      </Container>
    </section>
  );
}
