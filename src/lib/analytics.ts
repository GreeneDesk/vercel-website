/**
 * Lightweight event tracking. Pushes to dataLayer (GTM) and gtag when present,
 * and no-ops safely when no analytics tool is installed.
 */
type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    window.gtag?.("event", event, params);
  } catch {
    // Never let analytics break the page.
  }
}

export const LEAD_SOURCES = {
  perfectgym: "perfectgym-integration",
  mywellness: "mywellness-alternative",
} as const;
