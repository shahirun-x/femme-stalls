import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { annualCalendar, calendarLegend } from "@/lib/events-data";

export function AnnualCalendar() {
  return (
    <section id="calendar" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="Plan Ahead"
          title="Annual Calendar"
          subtitle="A year-round view of planned events and activities."
        />

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10">
          {calendarLegend.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
              <span aria-hidden="true">{item.emoji}</span>
              {item.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {annualCalendar.map((month) => (
            <div
              key={month.month}
              className="bg-white rounded-xl border border-femme-warm-border p-5"
            >
              <h3 className="font-display font-semibold text-base text-foreground mb-3">
                {month.month}
              </h3>
              {month.entries.length === 0 ? (
                <p className="text-muted-foreground text-xs italic">No events scheduled yet</p>
              ) : (
                <ul className="space-y-2">
                  {month.entries.map((entry) => {
                    const dot = calendarLegend.find((l) => l.label === entry.category)?.dot;
                    return (
                      <li key={entry.label} className="flex items-center gap-2 text-sm">
                        <span aria-hidden="true" className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                        <span className="text-foreground truncate">{entry.label}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
