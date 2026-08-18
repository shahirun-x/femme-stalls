import { magalirMattum } from "./magalir-mattum";
import type { StallClient } from "./types";

export const clientRegistry: Record<string, StallClient> = {
  "magalir-mattum": magalirMattum,
};

export function getClient(slug: string): StallClient | undefined {
  return clientRegistry[slug];
}

export function getAllClients(): StallClient[] {
  return Object.values(clientRegistry);
}

export function getActiveClients(): StallClient[] {
  return getAllClients().filter((c) => c.pagesEnabled >= 1);
}

export type { StallClient, Product, Testimonial, ClientColors, StallCategory, OrderMethod } from "./types";
