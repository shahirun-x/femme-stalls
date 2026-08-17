import React from "react";
import { FileText, Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { policyDocuments } from "@/lib/transparency-data";

export function PoliciesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="md">
        <SectionHeader badge="Documents" title="Policies" />

        <div className="space-y-3">
          {policyDocuments.map((policy) => (
            <div
              key={policy.title}
              className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-femme-warm-border rounded-xl p-5"
            >
              <span className="shrink-0 w-11 h-11 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-base text-foreground">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground text-sm">{policy.description}</p>
              </div>
              <a
                href="#"
                className="shrink-0 inline-flex items-center gap-1.5 bg-femme-pink-50 text-femme-pink font-semibold rounded-full px-4 py-2 text-xs sm:text-sm hover:bg-femme-pink-100 transition-colors"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
