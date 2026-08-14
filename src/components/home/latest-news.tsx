import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { newsItems } from "@/lib/home-data";

export function LatestNews() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <SectionHeader badge="News" title="Latest News" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl border border-femme-warm-border shadow-sm overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="aspect-video bg-gradient-to-br from-femme-pink-300 via-femme-pink-400 to-femme-gold/60"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <p className="text-femme-gold-dark text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.date}
                </p>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {item.excerpt}
                </p>
                <Link
                  href="/media"
                  className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
