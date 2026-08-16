import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { groupActivities, groupActivitiesIntro, groupActivitiesNote } from "@/lib/programmes-data";

const sizeVariants = [
  "text-sm px-5 py-3",
  "text-base px-6 py-3.5",
  "text-sm px-5 py-3",
];

export function GroupActivities() {
  return (
    <section id="activities" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="md">
        <SectionHeader badge="Community Life" title="Group Activities" subtitle={groupActivitiesIntro} />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {groupActivities.map((activity, i) => (
            <span
              key={activity.label}
              className={`inline-flex items-center gap-2 rounded-full bg-white border border-femme-pink-200 text-foreground font-medium transition-colors duration-300 hover:bg-femme-pink hover:text-white hover:border-femme-pink cursor-default ${sizeVariants[i % sizeVariants.length]}`}
            >
              <span aria-hidden="true">{activity.emoji}</span>
              {activity.label}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto">
          {groupActivitiesNote}
        </p>
      </Container>
    </section>
  );
}
