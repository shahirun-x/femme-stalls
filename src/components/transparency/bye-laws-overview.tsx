import React from "react";
import { Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { byeLawSections } from "@/lib/transparency-data";

export function ByeLawsOverview() {
  return (
    <section id="bye-laws" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="md">
        <SectionHeader
          badge="The Rules"
          title="Bye-Laws"
          subtitle="The rules and regulations that govern Femme Stalls, ensuring fairness and clarity for all members."
        />

        <Accordion
          type="single"
          collapsible
          className="bg-white rounded-xl border border-femme-warm-border overflow-hidden mb-8"
        >
          {byeLawSections.map((section, i) => (
            <AccordionItem
              key={section.title}
              value={`item-${i}`}
              className="border-l-4 border-l-transparent px-5 sm:px-6 data-[state=open]:border-l-femme-gold data-[state=open]:bg-femme-gold/5 transition-colors"
            >
              <AccordionTrigger className="font-display font-medium text-base sm:text-lg text-foreground hover:text-femme-pink [&>svg]:text-femme-pink">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white border-2 border-femme-pink text-femme-pink font-semibold rounded-full px-6 py-3 text-sm hover:bg-femme-pink-50 transition-colors"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download Full Bye-Laws (PDF)
          </a>
        </div>
      </Container>
    </section>
  );
}
