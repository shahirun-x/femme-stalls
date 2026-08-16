import React from "react";
import { Info } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { financeCategories, financeIntro, financeDisclaimer } from "@/lib/opportunities-data";

export function FinanceInfo() {
  return (
    <section id="finance" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="md">
        <SectionHeader badge="Funding Leads" title="Finance Information" subtitle={financeIntro} />

        <Accordion
          type="single"
          collapsible
          className="bg-white rounded-xl border border-femme-warm-border overflow-hidden mb-10"
        >
          {financeCategories.map((category, i) => (
            <AccordionItem
              key={category.title}
              value={`item-${i}`}
              className="border-l-4 border-l-transparent px-5 sm:px-6 data-[state=open]:border-l-femme-pink data-[state=open]:bg-femme-pink-50/40 transition-colors"
            >
              <AccordionTrigger className="font-display font-medium text-base sm:text-lg text-foreground hover:text-femme-pink [&>svg]:text-femme-pink">
                {category.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {category.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex items-start gap-3 bg-white border-l-4 border-femme-gold rounded-xl p-5 sm:p-6 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-femme-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-foreground text-sm leading-relaxed">{financeDisclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
