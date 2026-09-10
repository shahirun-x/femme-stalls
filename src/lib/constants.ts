/**
 * Site-wide constants — single source of truth.
 *
 * Contact details and social profiles are referenced from here everywhere.
 * Changing a number, address or handle should only ever be a one-line edit
 * in this file.
 */

export const CONTACT = {
  /** Display format, used in visible copy. */
  phone: "+91 95008 50116",
  /** Digits only, country code first — for tel: and wa.me links. */
  phoneRaw: "919500850116",
  email: "femmestalls@gmail.com",
  whatsappBase: "https://wa.me/919500850116",
  /** Build a wa.me link, optionally with a prefilled message. */
  whatsappLink: (message?: string) =>
    message
      ? `https://wa.me/919500850116?text=${encodeURIComponent(message)}`
      : "https://wa.me/919500850116",
  /** mailto: link, optionally with a prefilled subject. */
  mailtoLink: (subject?: string) =>
    subject
      ? `mailto:femmestalls@gmail.com?subject=${encodeURIComponent(subject)}`
      : "mailto:femmestalls@gmail.com",
  telLink: "tel:+919500850116",
  address: "Kilakarai, Ramanathapuram District, Tamil Nadu, India",
} as const;

/**
 * Prefilled WhatsApp messages for context-specific CTAs, so the coordinator
 * knows what the enquiry is about before replying.
 */
export const WHATSAPP_MESSAGES = {
  general: "Hi, I'd like to know more about Femme Stalls",
  membership: "Hi, I'd like to know more about becoming a member",
  stallRegistration: "Hi, I'd like to know more about registering a stall",
  sponsorship: "Hi, I'd like to know more about sponsorship opportunities",
  press: "Hi, I'd like to know more about press and media enquiries",
} as const;

/**
 * NOTE: These are placeholder handles — the client still needs to confirm the
 * actual profile URLs. Update here once the real handles are supplied.
 */
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/femmestalls",
  instagram: "https://instagram.com/femmestalls",
  youtube: "https://youtube.com/@femmestalls",
  whatsapp: "https://wa.me/919500850116",
} as const;
