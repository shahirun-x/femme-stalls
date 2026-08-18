import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClient, getAllClients } from "@/lib/clients";
import { ClientThemeProvider, ClientHeader, ClientIntro } from "@/components/stalls/clients";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllClients()
    .filter((c) => c.pagesEnabled >= 1)
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `${client.name} — ${client.tagline}`,
    description: client.description,
    openGraph: {
      title: `${client.name} — ${client.tagline}`,
      description: client.description,
      images: [{ url: client.logo }],
    },
  };
}

export default async function StallIntroPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client || client.pagesEnabled < 1) return notFound();

  return (
    <ClientThemeProvider colors={client.colors}>
      <ClientHeader client={client} />
      <ClientIntro client={client} />
    </ClientThemeProvider>
  );
}
