import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Events Calendar — Femme Stalls",
  description: "Browse upcoming and past Femme Stalls events, pop-ups, exhibitions, and annual gatherings in Kilakarai.",
};

export default function EventsPage() {
  return (
    <PlaceholderPage
      title="Events & Exhibitions"
      subtitle="Annual Calendar, Expos & Gatherings"
      badge="Events"
      description="Stay up-to-date with our active schedule of seasonal bazaars, festive pop-ups, networking dinners, and annual awards celebrations."
      highlights={[
        { title: "Upcoming Expos", desc: "Dates, venue details, and stall application timelines for upcoming festivals." },
        { title: "Interactive Calendar", desc: "Sync community dates directly to your phone calendar for easy reminders." },
        { title: "Past Highlights", desc: "Photos, participant numbers, and key milestones from previous editions." },
      ]}
    />
  );
}
