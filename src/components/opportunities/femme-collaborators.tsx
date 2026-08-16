import React from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  Plane,
  Building2,
  GitMerge,
  Truck,
  Copy,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  collaborationTypes,
  collaboratorsIntro,
  type CollaborationType,
} from "@/lib/opportunities-data";

const iconMap: Record<CollaborationType["icon"], LucideIcon> = {
  ArrowLeftRight,
  Plane,
  Building2,
  GitMerge,
  Truck,
  Copy,
};

export function FemmeCollaborators() {
  return (
    <section id="collaborators" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Collaboration Network" title="FEMME Collaborators" subtitle={collaboratorsIntro} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {collaborationTypes.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <div
                key={type.title}
                className="bg-white rounded-xl border-l-[3px] border-femme-pink-200 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-l-femme-pink hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1">
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-femme-pink rounded-xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
            Looking for a Partner?
          </h3>
          <p className="text-white/90 text-sm sm:text-base mb-5">
            Submit your collaboration requirements and we&apos;ll help you find the right match.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-white text-femme-pink font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-femme-pink-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
