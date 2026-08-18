import type { Metadata } from "next";
import { getActiveClients } from "@/lib/clients";
import { StallDirectoryCard } from "@/components/stalls/clients";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "Our Stalls",
  description:
    "Discover amazing products and services from women-led businesses in the Femme Stalls community of Kilakarai, Tamil Nadu.",
};

export default function StallsDirectoryPage() {
  const clients = getActiveClients();

  return (
    <section className="bg-[#FFFBFE] px-4 py-16 md:py-20 lg:py-24">
      <Container size="lg">
        <SectionHeader
          badge="The Community Marketplace"
          title="Meet Our Entrepreneurs"
          subtitle="Discover amazing products and services from women-led businesses in our community."
        />

        {clients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <StallDirectoryCard key={client.slug} client={client} />
            ))}
          </div>
        ) : (
          <p className="text-center text-base text-[#6B445A]">
            New stalls are joining soon — check back shortly!
          </p>
        )}
      </Container>
    </section>
  );
}
