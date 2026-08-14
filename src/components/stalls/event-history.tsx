import React from "react";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { eventEditions, eventHistoryNote } from "@/lib/stalls-data";

export function EventHistory() {
  return (
    <section id="history" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="The Archive" title="Event History" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {eventEditions.map((edition) => (
            <article
              key={edition.edition}
              className="bg-white rounded-xl border border-femme-warm-border shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-femme-pink-300 via-femme-pink-400 to-femme-gold/60 flex flex-col items-center justify-center gap-1.5 text-white/90">
                <Camera className="w-6 h-6" aria-hidden="true" />
                <span className="text-xs font-medium">Photos coming soon</span>
              </div>
              <div className="p-5">
                <span className="inline-block bg-femme-pink-100 text-femme-pink text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {edition.edition}
                </span>
                <h3 className="font-display font-semibold text-base text-foreground mb-1">
                  {edition.venue}
                </h3>
                <p className="text-muted-foreground text-xs mb-2">{edition.date}</p>
                <p className="text-muted-foreground text-sm mb-4">{edition.highlight}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="text-muted-foreground text-sm text-center max-w-xl mx-auto mb-10">
          {eventHistoryNote}
        </p>

        <div className="bg-gradient-to-br from-femme-dark via-femme-dark-card to-femme-dark-deep border-2 border-femme-gold rounded-xl p-6 sm:p-8 text-center max-w-md mx-auto">
          <p className="text-femme-gold text-xs font-semibold uppercase tracking-wider mb-2">
            Coming Next
          </p>
          <h3 className="font-display text-2xl font-bold text-white mb-4">FEMME 13</h3>
          <Link
            href="#register"
            className="inline-flex items-center gap-1.5 bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-6 py-2.5 text-sm transition-colors"
          >
            Register
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
