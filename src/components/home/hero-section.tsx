import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "./eyebrow";
import { hero } from "@/lib/home-data";

/** Hand-drawn brush swash: a filled, tapering shape with an uneven edge. */
function Swash({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 46"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 30.5C38 21 86 14.5 139 13.2c47-1.2 83 3.8 121 8.4 43 5.2 92 5.6 154-7.1 2.4-.5 3.9 1.9 1.8 3.2-54 21.6-111 25.1-160 19.7-40-4.4-75-10.4-117-9.7-40 .6-81 6.4-130 13.6-3.7.6-6.9-4.7-4.8-6.8z"
        fill="currentColor"
      />
      <path
        d="M64 39.5c48-5.4 97-7.2 150-2.6 22 1.9 41 1.4 58-.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity=".5"
      />
    </svg>
  );
}

// Organic blob — 8-value border-radius (desktop), simplified on mobile.
const BLOB = "rounded-[56%_44%_48%_52%/42%_46%_54%_58%] lg:rounded-[60%_40%_45%_55%/50%_55%_45%_50%]";

export function HeroSection() {
  return (
    // overflow-x-clip contains the image's intentional bleed past the viewport edge.
    <section className="relative overflow-x-clip bg-femme-cream text-femme-charcoal">
      <Container className="grid grid-cols-1 items-center gap-y-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-x-8 lg:pb-28 lg:pt-20">
        {/* Copy — columns 1–6 */}
        <div className="relative z-10 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:py-12 lg:pr-[calc((100%_+_2rem)_/_6)]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="relative isolate mt-7 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.025em]">
            <span className="font-normal">{hero.titleLead}</span>{" "}
            <span className="relative inline-block font-bold italic text-femme-rose">
              {hero.titleEmphasis}
              <Swash className="absolute -bottom-[0.14em] -left-[4%] -z-10 h-[0.3em] w-[112%] text-femme-pink/80" />
            </span>
          </h1>

          <p className="mt-9 max-w-[24ch] font-display text-[clamp(1.35rem,2.4vw,1.9rem)] font-normal italic leading-snug text-femme-charcoal/85">
            {hero.subheadline}
          </p>

          <p className="mt-6 max-w-[50ch] text-base leading-[1.7] text-femme-charcoal/70">
            {hero.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[3.25rem] items-center rounded-full bg-femme-rose px-8 text-sm font-semibold tracking-wide text-femme-cream shadow-[inset_0_-3px_0_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_-14px_rgba(181,34,91,0.7)] transition-colors hover:bg-femme-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-cream"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-femme-charcoal transition-colors hover:text-femme-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-cream rounded-sm"
            >
              {hero.secondaryCta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Image — starts at column 6 and bleeds past the right edge of the viewport */}
        <div className="relative -mr-16 sm:-mr-24 lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:-mb-16 lg:-mt-6 lg:mr-[calc(-1_*_max(2rem,_(100vw_-_80rem)_/_2_+_2rem)_-_10vw)]">
          {/* Offset hairline echo of the blob */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 -translate-x-3 translate-y-4 border border-femme-gold/60 lg:-translate-x-5 lg:translate-y-6 ${BLOB}`}
          />
          <div
            className={`grain relative isolate h-[52vh] min-h-[20rem] max-h-[34rem] overflow-hidden bg-femme-terracotta-soft lg:h-[clamp(36rem,80vh,50rem)] lg:max-h-none ${BLOB}`}
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Floating badge overlapping the image edge */}
          <div className="absolute bottom-8 left-3 z-20 grid size-24 -rotate-12 place-items-center rounded-full border-2 border-femme-gold bg-femme-cream text-center shadow-[0_18px_40px_-18px_rgba(36,17,24,0.45)] sm:left-6 lg:bottom-4 lg:left-[4%] lg:size-32">
            <span aria-hidden="true" className="absolute inset-1.5 rounded-full border border-dashed border-femme-gold/60" />
            <span className="leading-none">
              <span className="block font-display text-xl italic text-femme-rose lg:text-2xl">{hero.badge.lead}</span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-femme-gold-ink lg:text-[10px]">
                {hero.badge.place}
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
