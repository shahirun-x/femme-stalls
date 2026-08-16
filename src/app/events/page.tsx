import type { Metadata } from "next";
import { EventsHero, UpcomingEvents, AnnualCalendar, PastEvents, EventsCTA } from "@/components/events";

export const metadata: Metadata = {
  title: "Events — Femme Stalls",
  description:
    "Upcoming events, annual calendar and past event archive. FEMME Stalls editions, training, networking, community activities and more.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <AnnualCalendar />
      <PastEvents />
      <EventsCTA />
    </>
  );
}
