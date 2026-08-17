import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { governanceLevels } from "@/lib/transparency-data";

export function GovernanceSection() {
  return (
    <section id="governance" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="md">
        <SectionHeader badge="Structure" title="Governance Structure" />

        <div className="flex flex-col items-center max-w-md mx-auto mb-10">
          {governanceLevels.map((level, i) => (
            <React.Fragment key={level.name}>
              {i > 0 && (
                <div className="flex flex-col items-center py-2">
                  <ArrowDown className="w-5 h-5 text-femme-gold" aria-hidden="true" />
                  {level.connectorLabel && (
                    <span className="text-[10px] uppercase tracking-wide text-femme-gold-dark font-medium mt-1">
                      {level.connectorLabel}
                    </span>
                  )}
                </div>
              )}
              <div className="w-full bg-white border border-femme-warm-border rounded-xl p-5 sm:p-6 text-center shadow-sm">
                <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                  {level.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{level.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            The Executive Committee is elected by members and serves a defined term.
          </p>
          <Link
            href="/about#committee"
            className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
          >
            View Executive Committee
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
