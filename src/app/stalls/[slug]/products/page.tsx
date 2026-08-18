import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClient, getAllClients } from "@/lib/clients";
import { ClientThemeProvider, ClientHeader, ClientProducts } from "@/components/stalls/clients";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClients()
    .filter((c) => c.pagesEnabled >= 2)
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `Products — ${client.name}`,
    description: `Browse products from ${client.name} on Femme Stalls. ${client.description}`,
  };
}

export default async function StallProductsPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client || client.pagesEnabled < 2) return notFound();

  return (
    <ClientThemeProvider colors={client.colors}>
      <ClientHeader client={client} />
      <ClientProducts client={client} />
    </ClientThemeProvider>
  );
}
