import React from "react";
import { Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { testimonials } from "@/lib/home-data";

export function SuccessStories() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Member Voices" title="Success Stories" />
        <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          {testimonials.map((story) => (
            <figure
              key={story.name + story.quote.slice(0, 10)}
              className="shrink-0 w-80 md:w-auto snap-start rounded-xl bg-white border-l-4 border-femme-pink shadow-sm p-6 sm:p-8 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-femme-pink-200 mb-3"
                aria-hidden="true"
                fill="currentColor"
              />
              <blockquote className="font-display italic text-base sm:text-lg text-foreground leading-relaxed flex-1">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-foreground text-sm">— {story.name}</p>
                <p className="text-muted-foreground text-xs">{story.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
