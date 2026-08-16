import React from "react";
import Link from "next/link";
import { Search, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { directoryEntries, directoryNote } from "@/lib/members-data";
import { stallCategories } from "@/lib/stalls-data";

export function MemberDirectory() {
  return (
    <section id="directory" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="Directory"
          title="Member Directory"
          subtitle="Find members, businesses and skills within the Femme Stalls network."
        />

        <div
          className="flex items-center gap-3 rounded-full border-2 border-femme-warm-border bg-femme-warm-bg px-5 py-3.5 max-w-xl mx-auto mb-6 shadow-sm"
          role="search"
          aria-label="Member directory search (coming soon)"
        >
          <Search className="w-5 h-5 text-femme-pink shrink-0" aria-hidden="true" />
          <span className="text-muted-foreground text-sm sm:text-base truncate">
            Search by name, business, or category...
          </span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {stallCategories.map((category) => (
            <span
              key={category.label}
              className="shrink-0 rounded-full border border-femme-warm-border bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:bg-femme-pink-100 hover:border-femme-pink-200 transition-colors cursor-default"
            >
              {category.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {directoryEntries.map((entry, i) => (
            <div
              key={`${entry.initials}-${i}`}
              className="flex items-center gap-4 bg-white border border-femme-warm-border rounded-xl p-5"
            >
              <span className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-femme-pink-300 to-femme-pink-600 text-white flex items-center justify-center font-display font-bold text-lg">
                {entry.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground text-sm">{entry.name}</p>
                <p className="font-display font-medium text-foreground text-base truncate">
                  {entry.business}
                </p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span className="inline-block bg-femme-pink-100 text-femme-pink text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {entry.category}
                  </span>
                  <span className="text-muted-foreground text-xs">{entry.location}</span>
                </div>
              </div>
              <MessageCircle
                className="shrink-0 w-5 h-5 text-femme-gold-dark"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mx-auto">
            {directoryNote}
          </p>
          <Link
            href="#register"
            className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
          >
            Log in for full access
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
