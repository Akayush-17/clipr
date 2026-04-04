/* ── Mastra-inspired dark palette ── */

// Backgrounds (near-black, layered elevation)
export const BG = "#020202";
export const SURFACE = "#0d0d0d";
export const SURFACE_ALT = "#0d0d0d";
export const SURFACE_ELEVATED = "#141414";
export const SURFACE_ELEVATED_SM = "#171717";
export const SURFACE_HOVER = "#262626";

// Text
export const TEXT_PRIMARY = "#f0f0f0";
export const TEXT_SECONDARY = "#939393";
export const TEXT_MUTED = "#424242";

// Legacy aliases (used widely across components)
export const CREAM = TEXT_PRIMARY;
export const MUTED = TEXT_SECONDARY;
export const S2 = SURFACE_ELEVATED;

// Borders
export const BORDER = "#1a1a1a";
export const BORDER_SUBTLE = "#141414";

// Accents
export const ORANGE = "#f97316";
export const GREEN = "#7aff78";
export const PINK = "#ff69cc";
export const PURPLE = "#b588fe";
export const BLUE = "#6ccdfb";
export const RED = "#ff4758";

// Accent (vivid green for banners / highlights)
export const ACCENT_GREEN = "#18fb6f";

export function fmtN(n: number): string {
  if (n >= 10000000) return (n / 10000000).toFixed(1) + "Cr";
  if (n >= 100000) return (n / 100000).toFixed(1) + "L";
  if (n >= 1000) return Math.round(n / 1000) + "k";
  return String(n);
}
