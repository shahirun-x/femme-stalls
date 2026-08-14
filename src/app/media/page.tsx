import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Media & Press — Femme Stalls",
  description: "Browse photo galleries, press coverage, event videos, and news articles featuring Femme Stalls.",
};

export default function MediaPage() {
  return (
    <PlaceholderPage
      title="Media & Press Gallery"
      subtitle="Stories, Photo Archives & Video Coverage"
      badge="Media"
      description="Relive memorable moments from our past stall fairs, awards ceremonies, entrepreneur spotlights, and community celebrations."
      highlights={[
        { title: "Photo Galleries", desc: "High-resolution photo collections capturing the energy, color, and spirit of our expos." },
        { title: "Press & News", desc: "Feature articles, newspaper coverage, and interviews highlighting our members." },
        { title: "Video Highlights", desc: "Short documentaries, stall walkthroughs, and entrepreneur testimonial videos." },
      ]}
    />
  );
}
