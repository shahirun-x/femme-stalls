import type { StallCategory } from "./types";

export function whatsappLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function discountPercent(price: number, originalPrice: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export const categoryLabels: Record<StallCategory, string> = {
  clothes: "Clothing & Apparel",
  food: "Food & Snacks",
  jewellery: "Jewellery & Accessories",
  handicrafts: "Handicrafts & Art",
  tailoring: "Tailoring & Stitching",
  beauty: "Beauty & Wellness",
  teaching: "Teaching & Classes",
  "home-products": "Home Products",
  other: "Other",
};

export type PlaceholderIcon =
  | "shirt"
  | "utensils"
  | "gem"
  | "palette"
  | "scissors"
  | "sparkles"
  | "graduation-cap"
  | "home"
  | "package"
  | "store"
  | "user";

export const categoryIcon: Record<StallCategory, PlaceholderIcon> = {
  clothes: "shirt",
  food: "utensils",
  jewellery: "gem",
  handicrafts: "palette",
  tailoring: "scissors",
  beauty: "sparkles",
  teaching: "graduation-cap",
  "home-products": "home",
  other: "package",
};

export const orderMethodLabels: Record<string, string> = {
  whatsapp: "Order on WhatsApp",
  phone: "Call to order",
  visit: "Visit us in person",
  event: "Find us at community stalls",
  delivery: "Home delivery available",
};
