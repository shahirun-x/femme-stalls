import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CategoryScroller } from "./category-scroller";
import { Eyebrow } from "./eyebrow";
import { discoverCategories, discoverIntro } from "@/lib/home-data";

export function DiscoverGallery() {
  return (
    <section className="bg-femme-blush py-24 text-femme-charcoal md:py-32">
      <CategoryScroller categories={discoverCategories} href={discoverIntro.cta.href}>
        <Eyebrow>{discoverIntro.eyebrow}</Eyebrow>
        <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
          {discoverIntro.titleLead} <em className="font-medium text-femme-rose">{discoverIntro.titleEmphasis}</em>
        </h2>
        <p className="mt-5 max-w-[48ch] leading-[1.7] text-femme-charcoal/70">{discoverIntro.body}</p>
      </CategoryScroller>

      <Container className="mt-10">
        <Link
          href={discoverIntro.cta.href}
          className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-femme-charcoal transition-colors hover:text-femme-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-blush"
        >
          {discoverIntro.cta.label}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
