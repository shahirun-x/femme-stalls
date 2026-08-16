import React from "react";
import Link from "next/link";
import {
  Store,
  Calculator,
  FileStack,
  ClipboardCheck,
  Landmark,
  ShoppingBag,
  ArrowRight,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import {
  getOrganisedStages,
  getOrganisedDescription,
  type GetOrganisedStage,
} from "@/lib/programmes-data";

const iconMap: Record<GetOrganisedStage["icon"], LucideIcon> = {
  Store,
  Calculator,
  FileStack,
  ClipboardCheck,
  Landmark,
  ShoppingBag,
};

export function GetOrganised() {
  const lastIndex = getOrganisedStages.length - 1;

  return (
    <section id="get-organised" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Get Organised Programme
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Step-by-step guidance to make your business ready for growth
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-0 mb-14">
          {getOrganisedStages.map((stage, i) => {
            const Icon = iconMap[stage.icon];
            const isLast = i === lastIndex;
            return (
              <React.Fragment key={stage.title}>
                <div className="flex flex-col items-center text-center w-full md:flex-1 shrink-0">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-femme-pink-50 border border-femme-pink-200 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-femme-pink" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-femme-gold text-white text-[10px] font-bold flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground mt-4 mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[10rem]">
                    {stage.description}
                  </p>
                </div>
                {!isLast && (
                  <>
                    <ArrowRight
                      className="hidden md:block w-5 h-5 text-femme-gold shrink-0 mt-5"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="md:hidden w-5 h-5 text-femme-gold shrink-0 my-2"
                      aria-hidden="true"
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-4">{getOrganisedDescription}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
          >
            Talk to a Coordinator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
