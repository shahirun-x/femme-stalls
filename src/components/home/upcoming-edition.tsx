import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Eyebrow } from "./eyebrow";
import { upcomingEdition } from "@/lib/home-data";

/** CSS-only rubber-stamp seal. */
function Stamp() {
  const { top, middle, bottom } = upcomingEdition.stamp;
  return (
    <div className="relative grid size-28 -rotate-[8deg] place-items-center rounded-full border-2 border-dashed border-femme-rose bg-femme-cream text-center text-femme-rose shadow-[0_18px_40px_-16px_rgba(36,17,24,0.55)] md:size-36">
      <span aria-hidden="true" className="absolute inset-2 rounded-full border border-femme-rose/35" />
      <p className="leading-none">
        <span className="block text-[8px] font-bold uppercase tracking-[0.22em] md:text-[10px]">{top}</span>
        <span className="my-1 block font-display text-2xl font-bold italic md:text-[2rem]">{middle}</span>
        <span className="block text-[8px] font-bold uppercase tracking-[0.4em] md:text-[10px]">{bottom}</span>
      </p>
    </div>
  );
}

export function UpcomingEdition() {
  return (
    <section className="grain relative isolate bg-[linear-gradient(125deg,#6E1E3E_0%,#9A3358_34%,#AE5E42_72%,#B5935C_100%)] text-femme-cream">
      {/* Soft darkening behind the type for legibility over the warm end of the gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(36,17,24,0.35),transparent_60%)]"
      />

      {/* Stamp overlaps the top edge of the section */}
      <div className="absolute -top-14 right-4 z-20 sm:right-8 md:-top-[4.5rem] lg:right-[12%]">
        <Stamp />
      </div>

      <Container className="relative z-10 grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-40">
        <Reveal className="lg:col-span-8">
          <Eyebrow tone="cream">{upcomingEdition.eyebrow}</Eyebrow>
          <h2 className="mt-8 font-display leading-[0.88]">
            <span className="sr-only">{upcomingEdition.title}: </span>
            <span className="block text-[clamp(4.5rem,15vw,11rem)] font-bold tracking-[-0.04em] lining-nums">
              {upcomingEdition.days}
            </span>
            <span className="mt-2 block text-[clamp(2rem,5.5vw,4.5rem)] font-normal italic tracking-[-0.01em]">
              {upcomingEdition.monthYear}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-4">
          <p aria-hidden="true" className="font-display text-2xl">
            {upcomingEdition.title}
          </p>
          <div aria-hidden="true" className="mt-5 h-px w-16 bg-femme-gold" />
          <p className="mt-5 max-w-[40ch] leading-[1.7] text-femme-cream/85">{upcomingEdition.description}</p>
          <Link
            href={upcomingEdition.cta.href}
            className="group mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-femme-cream px-7 text-sm font-semibold text-femme-charcoal transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-cream focus-visible:ring-offset-2 focus-visible:ring-offset-femme-rose-deep"
          >
            {upcomingEdition.cta.label}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
