import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  businessOpportunities,
  businessOpportunitiesNote,
  type BusinessOpportunity,
} from "@/lib/opportunities-data";

const categoryStyles: Record<BusinessOpportunity["category"], { pill: string; border: string }> = {
  Distribution: { pill: "bg-blue-100 text-blue-700", border: "border-t-blue-400" },
  "Joint Venture": { pill: "bg-femme-gold/15 text-femme-gold-dark", border: "border-t-femme-gold" },
  Partnership: { pill: "bg-femme-pink-100 text-femme-pink", border: "border-t-femme-pink" },
  "New Market": { pill: "bg-emerald-100 text-emerald-700", border: "border-t-emerald-400" },
};

export function BusinessOpportunities() {
  return (
    <section id="business" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="Notice Board"
          title="Business Opportunities"
          subtitle="A constantly updated notice board for business leads and openings"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {businessOpportunities.map((opp, i) => {
            const styles = categoryStyles[opp.category];
            return (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-sm border-t-[3px] p-6 ${styles.border}`}
              >
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${styles.pill}`}
                >
                  {opp.category}
                </span>
                <h3 className="font-display font-semibold text-base text-foreground mb-3 leading-snug">
                  {opp.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs">{opp.date}</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm text-center max-w-xl mx-auto">
          {businessOpportunitiesNote}
        </p>
      </Container>
    </section>
  );
}
