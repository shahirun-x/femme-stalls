import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { pressItems } from "@/lib/media-data";

export function PressCoverage() {
  return (
    <section id="press" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="In the News"
          title="Press Coverage"
          subtitle="Femme Stalls in newspapers, digital media and interviews."
        />

        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          {pressItems.map((item) => (
            <div
              key={item.headline}
              className="shrink-0 w-64 md:w-auto bg-white rounded-xl border-l-[3px] border-femme-gold p-5"
            >
              <div className="w-16 h-6 rounded bg-femme-warm-border/60 mb-3" aria-hidden="true" />
              <p className="font-display font-medium text-sm text-femme-gold-dark mb-1.5">
                {item.publication}
              </p>
              <h3 className="font-semibold text-sm text-foreground leading-snug mb-3">
                {item.headline}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">{item.date}</span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-femme-pink font-semibold text-xs hover:text-femme-pink-700 transition-colors"
                >
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm text-center">
          For press enquiries and media resources,{" "}
          <Link href="#press-contact" className="text-femme-pink font-semibold hover:text-femme-pink-700">
            contact us
          </Link>
        </p>
      </Container>
    </section>
  );
}
