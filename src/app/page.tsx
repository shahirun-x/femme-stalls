import {
  HeroSection,
  CategoryMarquee,
  OfferBento,
  NumbersSection,
  UpcomingEdition,
  DiscoverGallery,
  JourneyPath,
  VoicesTestimonials,
  ClosingCta,
} from "@/components/home";

// Rhythm: contained split → full-bleed band → contained bento → full-bleed dark
// → full-bleed feature → bleeding scroller → narrow path → centred quote → full-bleed close.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryMarquee />
      <OfferBento />
      <NumbersSection />
      <UpcomingEdition />
      <DiscoverGallery />
      <JourneyPath />
      <VoicesTestimonials />
      <ClosingCta />
    </>
  );
}
