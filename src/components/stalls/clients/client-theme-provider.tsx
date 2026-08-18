import * as React from "react";
import type { ClientColors } from "@/lib/clients/types";

interface ClientThemeProviderProps {
  colors: ClientColors;
  children: React.ReactNode;
}

/** Exposes a client's brand palette as CSS custom properties for all descendant template components. */
export function ClientThemeProvider({ colors, children }: ClientThemeProviderProps) {
  const themeStyle = {
    "--client-primary": colors.primary,
    "--client-secondary": colors.secondary,
    "--client-accent": colors.accent,
    "--client-bg": colors.background,
    "--client-text": colors.text,
    "--client-text-secondary": colors.textSecondary,
  } as React.CSSProperties;

  return (
    <div style={themeStyle} className="min-h-screen bg-[var(--client-bg)]">
      {children}
    </div>
  );
}
