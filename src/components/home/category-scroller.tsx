"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { DiscoverCategory } from "@/lib/home-data";

interface CategoryScrollerProps {
  categories: DiscoverCategory[];
  href: string;
  /** Section heading block, rendered beside the arrow controls. */
  children: ReactNode;
}

const arrowButton =
  "grid size-12 place-items-center rounded-full border border-femme-charcoal/15 text-femme-charcoal transition hover:border-femme-rose hover:bg-femme-rose hover:text-femme-cream disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-blush";

/**
 * Horizontal, snap-scrolling gallery of tall category cards on every
 * breakpoint. Native scrolling (touch, trackpad, keyboard) is the primary
 * interaction; the arrow buttons are a desktop convenience.
 */
export function CategoryScroller({ categories, href, children }: CategoryScrollerProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <>
      <Container className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>{children}</div>
        <div className="hidden shrink-0 gap-3 md:flex">
          <button type="button" onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous categories" className={arrowButton}>
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="More categories" className={arrowButton}>
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <ul
        ref={trackRef}
        aria-label="Business categories"
        className={cn(
          "bleed-scroller scrollbar-none mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 sm:gap-6 md:mt-16",
          // Fade on the trailing edge hints at more content — removed once the end is reached.
          !atEnd && "[mask-image:linear-gradient(to_right,#000_calc(100%-5rem),transparent)]"
        )}
      >
        {categories.map((category, i) => (
          <li key={category.name} className="w-[72vw] max-w-[19rem] shrink-0 snap-start sm:w-[18rem] sm:max-w-none lg:w-[20rem]">
            <Link
              href={href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-femme-terracotta-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2 focus-visible:ring-offset-femme-blush"
            >
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 72vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-femme-charcoal/85 via-femme-charcoal/15 to-transparent" />
              <span aria-hidden="true" className="absolute left-6 top-6 text-[11px] font-semibold tracking-[0.3em] text-femme-cream/85">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute inset-x-6 bottom-6">
                <span className="block font-display text-[1.75rem] leading-tight text-femme-cream">{category.name}</span>
                <span className="mt-1.5 block text-[13px] leading-snug text-femme-cream/80">{category.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
