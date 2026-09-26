import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileCheck2,
  Globe,
  Handshake,
  HeartHandshake,
  Package,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { offerCards, offerCta, offerIntro, type OfferCard, type OfferIcon } from "@/lib/home-data";

const icons: Record<OfferIcon, LucideIcon> = {
  Globe,
  BookOpen,
  Handshake,
  Package,
  HeartHandshake,
  FileCheck2,
};

/*
 * Bento tiling (7 tiles incl. the CTA):
 *   base  1 col   — stacked, feature first
 *   sm    2 cols  — feature full width, then pairs
 *   lg    4 cols  — feature 2×2 | mediums stacked 2×1 | 3 smalls + CTA row
 *   xl    6 cols  — feature 2×2 | mediums side by side | 3 smalls + CTA
 */
const sizeClasses: Record<OfferCard["size"], string> = {
  feature: "sm:col-span-2 lg:row-span-2",
  medium: "lg:col-span-2",
  small: "",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-cream";

function FeatureCard({ card }: { card: OfferCard }) {
  const Icon = icons[card.icon];
  return (
    <Link
      href={card.href}
      className={cn(
        "group grain relative isolate flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[2rem] border border-transparent bg-[linear-gradient(155deg,#B5225B_0%,#9C2A55_48%,#C4643C_100%)] p-8 text-femme-cream transition duration-500 hover:-translate-y-1 hover:border-femme-gold/80 hover:shadow-[0_30px_60px_-30px_rgba(142,26,71,0.8)] md:p-10",
        focusRing
      )}
    >
      <span className="relative z-10 grid size-14 place-items-center rounded-full border border-femme-cream/40 transition-transform duration-500 group-hover:-rotate-12">
        <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <div className="relative z-10 mt-auto pt-16">
        <h3 className="max-w-[12ch] font-display text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.02]">
          {card.title}
        </h3>
        <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.7] text-femme-cream/85">{card.body}</p>
        {card.points && (
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-femme-cream/90">
            {card.points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[0.55rem] text-femme-gold">
                  ◆
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ArrowUpRight
        className="absolute right-8 top-8 z-10 size-6 opacity-60 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

function OfferTile({ card, index }: { card: OfferCard; index: number }) {
  const Icon = icons[card.icon];
  const isMedium = card.size === "medium";
  return (
    <Link
      href={card.href}
      className={cn(
        "group relative flex h-full flex-col rounded-[1.75rem] border border-transparent p-7 transition duration-500 hover:-translate-y-1 hover:border-femme-gold/70 hover:shadow-[0_24px_48px_-30px_rgba(36,17,24,0.4)]",
        index % 2 === 0 ? "bg-femme-blush" : "bg-femme-cream-deep",
        isMedium ? "min-h-[15rem] md:p-8" : "min-h-[14rem]",
        focusRing
      )}
    >
      <span className="grid size-11 place-items-center rounded-full border border-femme-rose/25 text-femme-rose transition-transform duration-500 group-hover:-rotate-12">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <div className="mt-auto pt-8">
        <h3 className={cn("font-display leading-tight text-femme-charcoal", isMedium ? "text-[1.75rem]" : "text-xl")}>
          {card.title}
        </h3>
        <p className={cn("mt-2 leading-[1.65] text-femme-charcoal/70", isMedium ? "max-w-[36ch] text-[15px]" : "text-sm")}>
          {card.body}
        </p>
      </div>
      <ArrowUpRight
        className="absolute right-6 top-6 size-5 text-femme-rose opacity-0 transition duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

export function OfferBento() {
  return (
    <section className="bg-femme-cream py-24 text-femme-charcoal md:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{offerIntro.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
              {offerIntro.titleLead}{" "}
              <em className="font-medium text-femme-rose">{offerIntro.titleEmphasis}</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-[45ch] text-base leading-[1.7] text-femme-charcoal/70">{offerIntro.body}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-5 xl:grid-cols-6">
          {offerCards.map((card, i) => (
            <li key={card.title} className={cn("flex", sizeClasses[card.size])}>
              <Reveal delay={i * 70} className="flex w-full">
                {card.size === "feature" ? <FeatureCard card={card} /> : <OfferTile card={card} index={i} />}
              </Reveal>
            </li>
          ))}
          <li className="flex">
            <Reveal delay={offerCards.length * 70} className="flex w-full">
              <Link
                href={offerCta.href}
                className={cn(
                  "group flex min-h-[14rem] w-full flex-col justify-between rounded-[1.75rem] bg-femme-charcoal p-7 text-femme-cream transition duration-500 hover:-translate-y-1 hover:bg-femme-rose-deep",
                  focusRing
                )}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-femme-gold">
                  {offerCta.eyebrow}
                </span>
                <span className="flex items-end justify-between gap-4">
                  <span className="font-display text-2xl italic leading-tight">{offerCta.title}</span>
                  <ArrowUpRight
                    className="size-6 shrink-0 text-femme-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>
      </Container>
    </section>
  );
}
