import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { stallGuidelines } from "@/lib/stalls-data";

export function StallGuidelines() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="md">
        <SectionHeader badge="Good to Know" title="Stall Guidelines" />

        <Accordion type="single" collapsible className="bg-white rounded-xl border border-femme-warm-border overflow-hidden">
          {stallGuidelines.map((item, i) => (
            <AccordionItem
              key={item.title}
              value={`item-${i}`}
              className="border-l-4 border-l-transparent px-5 sm:px-6 data-[state=open]:border-l-femme-pink data-[state=open]:bg-femme-pink-50/40 transition-colors"
            >
              <AccordionTrigger className="font-display font-medium text-base sm:text-lg text-foreground hover:text-femme-pink [&>svg]:text-femme-pink">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
