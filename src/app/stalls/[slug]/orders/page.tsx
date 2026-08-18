import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClient, getAllClients } from "@/lib/clients";
import { ClientThemeProvider, ClientHeader, ClientOrders } from "@/components/stalls/clients";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClients()
    .filter((c) => c.pagesEnabled >= 3)
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `Reviews & Orders — ${client.name}`,
    description: `Customer reviews and how to order from ${client.name} on Femme Stalls.`,
  };
}

export default async function StallOrdersPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client || client.pagesEnabled < 3) return notFound();

  return (
    <ClientThemeProvider colors={client.colors}>
      <ClientHeader client={client} />
      <ClientOrders client={client} />
    </ClientThemeProvider>
  );
}
