import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { institutionGroups, institutionsIntro } from "@/lib/partners-data";

export function InstitutionsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <SectionHeader badge="Institutional Support" title="Institutions" subtitle={institutionsIntro} />

        <div className="max-w-3xl mx-auto space-y-5">
          {institutionGroups.map((group) => (
            <div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white rounded-xl border border-femme-warm-border p-5"
            >
              <h3 className="font-display font-medium text-sm text-foreground sm:w-40 shrink-0">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="text-xs sm:text-sm text-muted-foreground bg-femme-warm-bg rounded-full px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
