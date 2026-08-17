import React from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { videoItems } from "@/lib/media-data";

export function VideoGallery() {
  return (
    <section id="videos" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Watch" title="Videos" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {videoItems.map((video) => (
            <div key={video.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-femme-dark via-femme-dark-card to-femme-dark-deep flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-7 h-7 text-white fill-white ml-1" aria-hidden="true" />
                </span>
                <span className="absolute bottom-3 right-3 bg-femme-dark/80 text-white text-xs font-medium px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display font-medium text-base text-foreground">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm text-center">
          Videos will be added as events are recorded. Subscribe to stay updated.
        </p>
      </Container>
    </section>
  );
}
