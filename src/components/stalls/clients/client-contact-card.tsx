import { MessageCircle, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { whatsappLink } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface ClientContactCardProps {
  client: StallClient;
}

export function ClientContactCard({ client }: ClientContactCardProps) {
  const waMessage = `Hi! I saw your page on Femme Stalls. I'd like to know more about your products.`;

  return (
    <div className="rounded-2xl border border-[var(--client-secondary)] bg-white p-5 sm:p-6 space-y-5 shadow-sm">
      <a
        href={whatsappLink(client.whatsapp, waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-lg shadow-md transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        Chat on WhatsApp
      </a>

      <div className="space-y-4 text-base text-[var(--client-text)]">
        {client.phone && (
          <a href={`tel:+91${client.phone}`} className="flex items-center gap-3 hover:text-[var(--client-primary)]">
            <Phone className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
            <span>+91 {client.phone}</span>
          </a>
        )}

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[var(--client-primary)] shrink-0 mt-0.5" />
          <span>{client.address ? `${client.address}, ` : ""}{client.location}</span>
        </div>

        {client.businessHours && (
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[var(--client-primary)] shrink-0 mt-0.5" />
            <span>{client.businessHours}</span>
          </div>
        )}

        {client.instagram && (
          <a
            href={`https://instagram.com/${client.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-[var(--client-primary)]"
          >
            <Instagram className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
            <span>@{client.instagram}</span>
          </a>
        )}
      </div>
    </div>
  );
}
