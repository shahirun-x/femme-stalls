export const mediaHero = {
  eyebrow: "News & Media",
  title: "Media",
  subtitle: "News, press coverage, photos and videos from our events and activities.",
};

export interface NewsArticle {
  title: string;
  category: "News" | "Event" | "Announcement";
  date: string;
  excerpt: string;
}

export const newsArticles: NewsArticle[] = [
  {
    title: "FEMME Stalls 12 — A Record-Breaking Edition",
    category: "Event",
    date: "June 2025",
    excerpt:
      "Our largest gathering yet brought together hundreds of women entrepreneurs from across the region, showcasing everything from handmade crafts to home-cooked delicacies.",
  },
  {
    title: "New Training Programme: Digital Marketing for Home Businesses",
    category: "Announcement",
    date: "May 2025",
    excerpt:
      "A hands-on workshop series helping members promote their products online and on social media, covering WhatsApp Business, Instagram and Facebook.",
  },
  {
    title: "Femme Stalls Partners with Chennai Business Network",
    category: "News",
    date: "April 2025",
    excerpt:
      "A new collaboration opens doors for Kilakarai entrepreneurs to reach wider markets and connect with Chennai-based mentors and buyers.",
  },
  {
    title: "Women Entrepreneurs Shine at Kilakarai Trade Fair",
    category: "Event",
    date: "March 2025",
    excerpt:
      "The annual trade fair once again highlighted the growing presence of women-led stalls, with record footfall and community participation.",
  },
  {
    title: "Financial Literacy Workshop Reaches 50 Participants",
    category: "Event",
    date: "February 2025",
    excerpt:
      "Members learned to track income and expenses, set sustainable prices and understand basic banking and digital payments.",
  },
  {
    title: "FEMME Circle Launches Official Website",
    category: "Announcement",
    date: "January 2025",
    excerpt:
      "A new digital home for the community — connecting members, sharing opportunities and telling the Femme Stalls story to a wider audience.",
  },
];

export interface PressItem {
  publication: string;
  headline: string;
  date: string;
}

export const pressItems: PressItem[] = [
  {
    publication: "Local Daily",
    headline: "Kilakarai Women Lead the Way in Community Enterprise",
    date: "2025",
  },
  {
    publication: "Tamil Business Weekly",
    headline: "From Home Kitchen to Market Stall: FEMME Stalls Story",
    date: "2025",
  },
  {
    publication: "District News",
    headline: "Trade Fair Inspires Women-Led Development Model",
    date: "2025",
  },
  {
    publication: "Online Portal",
    headline: "How One Tamil Nadu Town is Organising Women Entrepreneurs",
    date: "2025",
  },
];

export const galleryFilters: string[] = ["All", "FEMME Stalls", "Training", "Events", "Community"];

export const galleryTileCount = 12;

export interface VideoItem {
  title: string;
  duration: string;
}

export const videoItems: VideoItem[] = [
  { title: "FEMME Stalls 12 — Event Highlights", duration: "3:45" },
  { title: "Member Story: Building a Home Business", duration: "5:12" },
  { title: "Digital Marketing Training — Recap", duration: "2:30" },
  { title: "The Femme Stalls Journey", duration: "4:18" },
];

export const pressContact = {
  role: "Media Coordinator",
  email: "media@femmestalls.com",
  whatsapp: "+91 (0) 98765 43210",
};
