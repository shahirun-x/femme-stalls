import React from "react";
import { Wallet, Receipt, FileCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  incomeSources,
  expenditureAreas,
  reportingNotes,
  financialClosingNote,
} from "@/lib/transparency-data";

export function FinancialTransparency() {
  return (
    <section id="financial" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="Open Books"
          title="Financial Transparency"
          subtitle="We believe in keeping our finances open. Here's a summary of how funds are managed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-t-4 border-femme-gold rounded-xl shadow-sm p-6 sm:p-8">
            <div className="w-11 h-11 rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">
              Income Sources
            </h3>
            <ul className="space-y-2.5">
              {incomeSources.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-femme-pink shrink-0" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-t-4 border-femme-gold rounded-xl shadow-sm p-6 sm:p-8">
            <div className="w-11 h-11 rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-4">
              <Receipt className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-4">
              Expenditure Areas
            </h3>
            <ul className="space-y-2.5">
              {expenditureAreas.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-femme-pink shrink-0" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border-t-4 border-femme-gold rounded-xl shadow-sm p-6 sm:p-8 mb-6">
          <div className="w-11 h-11 rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-4">
            <FileCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">Reporting</h3>
          <ul className="space-y-2.5">
            {reportingNotes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-femme-pink shrink-0 mt-2" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground text-sm text-center">{financialClosingNote}</p>
      </Container>
    </section>
  );
}
