"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { testimonials, voicesHeading } from "@/lib/home-data";

export function VoicesTestimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-femme-blush py-24 text-femme-charcoal md:py-36">
      <Container size="md" className="text-center">
        <Eyebrow as="h2" className="justify-center before:hidden">
          {voicesHeading}
        </Eyebrow>

        <figure className="relative mx-auto mt-24 max-w-4xl md:mt-28" aria-live="polite">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-[0.52em] left-1/2 -translate-x-1/2 select-none font-display text-[clamp(10rem,24vw,18rem)] leading-none text-femme-gold/20"
          >
            &ldquo;
          </span>
          <blockquote key={active} className="animate-fade-in-up relative">
            <p className="mx-auto max-w-[40ch] font-display text-[clamp(1.5rem,3vw,2.5rem)] italic leading-[1.3] text-femme-charcoal">
              {current.quote}
            </p>
          </blockquote>
          <figcaption key={`cap-${active}`} className="animate-fade-in-up relative mt-10">
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-femme-rose">{current.name}</span>
            <span className="mt-2 block text-sm italic text-femme-charcoal/60">{current.business}</span>
          </figcaption>
        </figure>

        <div className="mt-12 flex justify-center gap-1" role="group" aria-label="Choose a testimonial">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
              aria-pressed={i === active}
              className="group grid size-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose"
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-all duration-300",
                  i === active ? "w-8 bg-femme-rose" : "w-2 bg-femme-charcoal/25 group-hover:bg-femme-charcoal/50"
                )}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
