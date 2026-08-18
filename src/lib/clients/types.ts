export type StallCategory =
  | "clothes"
  | "food"
  | "jewellery"
  | "handicrafts"
  | "tailoring"
  | "beauty"
  | "teaching"
  | "home-products"
  | "other";

export type OrderMethod = "whatsapp" | "phone" | "visit" | "event" | "delivery";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  customerName: string;
  review: string;
  customerImage?: string;
  rating?: number;
}

export interface ClientColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textSecondary: string;
}

export interface StallClient {
  // Identity
  slug: string;
  name: string;
  tagline: string;
  description: string;
  ownerName: string;
  logo: string;
  heroImage?: string;
  category: StallCategory;
  colors: ClientColors;

  // Contact
  whatsapp: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
  address?: string;
  location: string;
  businessHours?: string;
  contactTime?: string;

  // Products (Page 2)
  products: Product[];
  productCategories?: string[];
  acceptsCustomOrders: boolean;
  orderMethods: OrderMethod[];

  // Reviews & Orders (Page 3)
  testimonials: Testimonial[];
  customerPhotos: string[];
  founderStory?: string;
  founderImages?: string[];
  specialOffer?: string;

  // Meta
  pagesEnabled: 1 | 2 | 3;
  joinedDate: string;
}
