import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { newsArticles, type NewsArticle } from "@/lib/media-data";

const categoryStyles: Record<NewsArticle["category"], string> = {
  News: "bg-blue-100 text-blue-700",
  Event: "bg-femme-pink-100 text-femme-pink",
  Announcement: "bg-femme-gold/15 text-femme-gold-dark",
};

export function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Latest" title="Latest News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {newsArticles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="aspect-video bg-gradient-to-br from-femme-pink-300 via-femme-pink-400 to-femme-gold/60"
              />
              <div className="p-5">
                <span
                  className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2 ${categoryStyles[article.category]}`}
                >
                  {article.category}
                </span>
                <p className="text-xs text-femme-gold mb-1.5">{article.date}</p>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href="#"
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
