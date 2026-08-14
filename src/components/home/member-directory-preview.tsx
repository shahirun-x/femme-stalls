import React from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { directoryCategories } from "@/lib/home-data";

export function MemberDirectoryPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="md">
        <SectionHeader badge="Directory" title="Find a Member or Business" />

        <div
          className="flex items-center gap-3 rounded-full border-2 border-femme-warm-border bg-white px-5 py-3.5 max-w-xl mx-auto mb-8 shadow-sm"
          role="search"
          aria-label="Member directory search (coming soon)"
        >
          <Search className="w-5 h-5 text-femme-pink shrink-0" aria-hidden="true" />
          <span className="text-muted-foreground text-sm sm:text-base truncate">
            Search by name, business, or category...
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
          {directoryCategories.map((category) => (
            <span
              key={category.label}
              className="rounded-full border border-femme-warm-border bg-femme-warm-bg px-4 py-2 text-xs sm:text-sm font-medium text-foreground transition-colors hover:bg-femme-pink-100 hover:border-femme-pink-200 cursor-default"
            >
              {category.label}
            </span>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/members#directory"
            className="inline-flex items-center gap-1.5 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
          >
            Browse Full Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
