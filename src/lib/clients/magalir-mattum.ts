import { StallClient } from "./types";

export const magalirMattum: StallClient = {
  slug: "magalir-mattum",
  name: "Magalir Mattum",
  tagline: "Women's Clothes — Our Own Brand",
  description:
    "We are a group of talented women from Kilakarai who design and stitch beautiful clothes for women. Every piece is handmade with love. From everyday cotton kurtis to elegant party wear sarees — we make clothes that make you feel special.",
  ownerName: "Fathima Begum",
  logo: "/stalls/magalir-mattum/logo.png",
  heroImage: "/stalls/magalir-mattum/hero.jpg",
  category: "clothes",
  colors: {
    primary: "#C4956A",
    secondary: "#FAEAE4",
    accent: "#C9917E",
    background: "#FFF8F5",
    text: "#2D2524",
    textSecondary: "#8A7E7C",
  },

  // Contact
  whatsapp: "919876543210",
  phone: "9876543210",
  instagram: "magalirmattum",
  location: "Kilakarai, Ramanathapuram",
  businessHours: "10:00 AM – 7:00 PM, Monday to Saturday",
  contactTime: "Any time",

  // Products
  products: [
    {
      id: "p1",
      name: "Handloom Cotton Saree",
      price: 1200,
      originalPrice: 1500,
      description: "Soft handloom cotton saree with traditional border. Perfect for daily wear. Available in 8 colors.",
      image: "/stalls/magalir-mattum/products/saree-1.jpg",
      category: "Sarees",
      isBestSeller: true,
    },
    {
      id: "p2",
      name: "Embroidered Kurta Set",
      price: 850,
      description: "Beautiful chikankari-style embroidered kurta with matching dupatta. Comfortable and elegant.",
      image: "/stalls/magalir-mattum/products/kurta-1.jpg",
      category: "Kurtis & Kurtas",
      isNew: true,
    },
    {
      id: "p3",
      name: "Silk Party Wear Saree",
      price: 2500,
      originalPrice: 3000,
      description: "Premium silk saree with gold zari border. Ideal for weddings and special occasions.",
      image: "/stalls/magalir-mattum/products/saree-2.jpg",
      category: "Sarees",
    },
    {
      id: "p4",
      name: "Printed Cotton Kurta",
      price: 450,
      description: "Everyday cotton kurta with block print design. Light and breezy for summer.",
      image: "/stalls/magalir-mattum/products/kurta-2.jpg",
      category: "Kurtis & Kurtas",
      isBestSeller: true,
    },
    {
      id: "p5",
      name: "Designer Blouse",
      price: 600,
      originalPrice: 800,
      description: "Ready-made designer blouse with mirror work. Available in sizes S to XXL.",
      image: "/stalls/magalir-mattum/products/blouse-1.jpg",
      category: "Blouses",
    },
    {
      id: "p6",
      name: "Palazzo Pants Set",
      price: 950,
      description: "Trendy palazzo pants with short kurta top. Indo-western style for young women.",
      image: "/stalls/magalir-mattum/products/palazzo-1.jpg",
      category: "Western Wear",
      isNew: true,
    },
  ],
  productCategories: ["Sarees", "Kurtis & Kurtas", "Blouses", "Western Wear"],
  acceptsCustomOrders: true,
  orderMethods: ["whatsapp", "phone", "visit", "event"],

  // Reviews
  testimonials: [
    {
      id: "t1",
      customerName: "Amina",
      review:
        "I bought 3 sarees for my daughter's wedding. The quality is amazing and the price is very reasonable. Everyone asked where I got them!",
      rating: 5,
    },
    {
      id: "t2",
      customerName: "Lakshmi",
      review:
        "Best kurtis in Kilakarai! I have been buying from Fathima akka for 2 years. Always fresh designs and very good stitching.",
      rating: 5,
    },
    {
      id: "t3",
      customerName: "Zainab",
      review: "Ordered a custom blouse for my sister. Perfect fitting, beautiful mirror work. Delivered in just 3 days!",
      rating: 4,
    },
    {
      id: "t4",
      customerName: "Priya",
      review: "The palazzo set I bought is so comfortable. I wear it every week. Very modern design at affordable price.",
      rating: 5,
    },
  ],
  customerPhotos: [
    "/stalls/magalir-mattum/customers/customer-1.jpg",
    "/stalls/magalir-mattum/customers/customer-2.jpg",
  ],
  founderStory:
    'My name is Fathima Begum. I started stitching clothes when I was 16 years old, learning from my mother. In 2018, with the support of Femme Stalls, I started my own brand "Magalir Mattum" which means "Women Only" in Tamil. Today, 5 women work with me and we make all types of women\'s clothing. My dream is to provide beautiful, affordable clothes to every woman in our community. When you buy from us, you support local women artisans.',
  specialOffer: "Buy any 2 sarees and get 10% off! WhatsApp us to order.",

  // Meta
  pagesEnabled: 3,
  joinedDate: "2024-06-15",
};
