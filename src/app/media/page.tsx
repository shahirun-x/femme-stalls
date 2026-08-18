import type { Metadata } from "next";
import {
  MediaHero,
  NewsSection,
  PressCoverage,
  PhotoGallery,
  VideoGallery,
  MediaCTA,
} from "@/components/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "News, press coverage, photos and videos from Femme Stalls events and activities. Media resources and press contact.",
};

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <NewsSection />
      <PressCoverage />
      <PhotoGallery />
      <VideoGallery />
      <MediaCTA />
    </>
  );
}
