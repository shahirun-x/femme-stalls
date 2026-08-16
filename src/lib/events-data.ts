export const eventsHero = {
  eyebrow: "Events & Calendar",
  title: "Events",
  subtitle:
    "FEMME Stalls editions, training sessions, networking events, community activities and more.",
};

export type EventCategory = "FEMME Stalls" | "Training" | "Networking" | "Community";

export const categoryColors: Record<EventCategory, { bar: string; pill: string }> = {
  "FEMME Stalls": { bar: "bg-femme-pink", pill: "bg-femme-pink-100 text-femme-pink" },
  Training: { bar: "bg-femme-gold", pill: "bg-femme-gold/15 text-femme-gold-dark" },
  Networking: { bar: "bg-purple-400", pill: "bg-purple-100 text-purple-700" },
  Community: { bar: "bg-emerald-400", pill: "bg-emerald-100 text-emerald-700" },
};

export interface UpcomingEventItem {
  title: string;
  category: EventCategory;
  month: string;
  day: string;
  venue: string;
  time: string;
  audience: "All Members" | "Open to Public" | "Members Only";
}

export const upcomingEventsList: UpcomingEventItem[] = [
  {
    title: "FEMME Stalls 13",
    category: "FEMME Stalls",
    month: "TBA",
    day: "—",
    venue: "Kilakarai",
    time: "TBA",
    audience: "Open to Public",
  },
  {
    title: "Digital Marketing Workshop",
    category: "Training",
    month: "TBA",
    day: "—",
    venue: "TBA",
    time: "TBA",
    audience: "Members Only",
  },
  {
    title: "Monthly Networking Meet",
    category: "Networking",
    month: "TBA",
    day: "—",
    venue: "TBA",
    time: "TBA",
    audience: "Members Only",
  },
  {
    title: "Community Sports Day",
    category: "Community",
    month: "TBA",
    day: "—",
    venue: "TBA",
    time: "TBA",
    audience: "Open to Public",
  },
];

export const upcomingEventsNote = "No registration available yet — dates to be announced";

export type CalendarCategory = EventCategory | "Partners";

export const calendarLegend: { label: CalendarCategory; dot: string; emoji: string }[] = [
  { label: "FEMME Stalls", dot: "bg-femme-pink", emoji: "🩷" },
  { label: "Training", dot: "bg-femme-gold", emoji: "🟡" },
  { label: "Networking", dot: "bg-purple-400", emoji: "🟣" },
  { label: "Community", dot: "bg-emerald-400", emoji: "🟢" },
  { label: "Partners", dot: "bg-blue-400", emoji: "🔵" },
];

export interface MonthEntry {
  label: string;
  category: CalendarCategory;
}

export interface MonthCard {
  month: string;
  entries: MonthEntry[];
}

export const annualCalendar: MonthCard[] = [
  { month: "January", entries: [] },
  { month: "February", entries: [{ label: "Community Sports Day", category: "Community" }] },
  {
    month: "March",
    entries: [{ label: "Women's Networking Meet", category: "Networking" }],
  },
  { month: "April", entries: [] },
  { month: "May", entries: [{ label: "Digital Marketing Workshop", category: "Training" }] },
  { month: "June", entries: [{ label: "FEMME Stalls Edition", category: "FEMME Stalls" }] },
  { month: "July", entries: [] },
  { month: "August", entries: [] },
  { month: "September", entries: [{ label: "Financial Literacy Workshop", category: "Training" }] },
  { month: "October", entries: [] },
  { month: "November", entries: [{ label: "FEMME Stalls Edition", category: "FEMME Stalls" }] },
  { month: "December", entries: [] },
];

export const pastEventsIntro = "A growing archive of everything we've done together.";

export interface PastEvent {
  title: string;
  category: EventCategory;
  date: string;
}

export const pastEvents: PastEvent[] = [
  { title: "FEMME Stalls 12", category: "FEMME Stalls", date: "Coming soon" },
  { title: "Financial Literacy Workshop", category: "Training", date: "Coming soon" },
  { title: "Women's Networking Meet — March", category: "Networking", date: "Coming soon" },
  { title: "FEMME Stalls 11", category: "FEMME Stalls", date: "Coming soon" },
  { title: "Community Sports Day — February", category: "Community", date: "Coming soon" },
  { title: "Business Registration Workshop", category: "Training", date: "Coming soon" },
];
