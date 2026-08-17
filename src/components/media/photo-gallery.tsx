import React from "react";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { galleryFilters, galleryTileCount } from "@/lib/media-data";

const aspectVariants = ["aspect-square", "aspect-video", "aspect-[3/4]"];
const opacityVariants = ["from-femme-pink-300/80", "from-femme-pink-400/80", "from-femme-gold/60"];

export function PhotoGallery() {
  return (
    <section id="photos" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Snapshots" title="Photo Gallery" />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryFilters.map((filter, i) => (
            <span
              key={filter}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium cursor-default ${
                i === 0
                  ? "bg-femme-pink text-white"
                  : "bg-femme-warm-bg border border-femme-warm-border text-foreground"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(0,1fr)]">
          {Array.from({ length: galleryTileCount }).map((_, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${opacityVariants[i % opacityVariants.length]} to-femme-warm-border/40 ${aspectVariants[i % aspectVariants.length]} ${
                i % 4 === 0 ? "row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-white/80">
                <Camera className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-medium">Photo</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-femme-dark/0 group-hover:bg-femme-dark/40 transition-colors duration-300">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/events#past-events"
            className="inline-flex items-center gap-1.5 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
          >
            More photos from each event are available in the event archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
