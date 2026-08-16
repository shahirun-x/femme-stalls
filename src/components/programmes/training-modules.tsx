import React from "react";
import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { trainingModules, trainingModulesSubtitle, type TrainingModule } from "@/lib/programmes-data";

const statusStyles: Record<TrainingModule["status"], string> = {
  "Coming Soon": "bg-femme-gold/15 text-femme-gold-dark",
  Open: "bg-femme-pink-100 text-femme-pink",
  Completed: "bg-femme-warm-border/60 text-muted-foreground",
};

export function TrainingModules() {
  return (
    <section id="training" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Courses" title="Training Modules" subtitle={trainingModulesSubtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {trainingModules.map((module) => (
            <div
              key={module.title}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col"
            >
              <span
                className={`self-start inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${statusStyles[module.status]}`}
              >
                {module.status}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {module.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {module.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
                  {module.level}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {module.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
              >
                Register Interest
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
