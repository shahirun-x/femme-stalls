import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Image as ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EditionLinks } from "@/lib/stalls-data";

interface EditionSocialLinksProps {
  links?: EditionLinks;
  /** Used to build descriptive aria-labels, e.g. "FEMME Stalls 3". */
  label: string;
  className?: string;
}

const ENTRIES: { key: keyof EditionLinks; icon: LucideIcon; title: string }[] = [
  { key: "facebookAlbum", icon: Facebook, title: "Facebook album" },
  { key: "instagramPost", icon: Instagram, title: "Instagram post" },
  { key: "youtubeVideo", icon: Youtube, title: "YouTube video" },
  { key: "photoGallery", icon: ImageIcon, title: "Photo gallery" },
];

/** A "#" placeholder means the client has not supplied that URL yet. */
const isAvailable = (href?: string) => Boolean(href) && href !== "#";

/**
 * Small row of social/media links for an event edition. Renders nothing when
 * no link is available yet, so cards stay clean until real URLs arrive.
 */
export function EditionSocialLinks({ links, label, className }: EditionSocialLinksProps) {
  if (!links) return null;

  const available = ENTRIES.filter((entry) => isAvailable(links[entry.key]));
  if (available.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {available.map(({ key, icon: Icon, title }) => {
        const href = links[key] as string;
        const isInternal = href.startsWith("/") || href.startsWith("#");
        const ariaLabel = `${title} for ${label}`;
        const classes =
          "inline-flex text-muted-foreground transition-colors hover:text-femme-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-pink focus-visible:ring-offset-2 rounded-sm";

        return (
          <li key={key}>
            {isInternal ? (
              <Link href={href} aria-label={ariaLabel} title={title} className={classes}>
                <Icon className="w-4 h-4" aria-hidden="true" />
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={title}
                className={classes}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
