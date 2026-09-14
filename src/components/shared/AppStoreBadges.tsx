import { trackEvent } from "@/lib/analytics";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .78-3.27.82-1.31.04-2.3-1.32-3.14-2.53-1.71-2.52-3-7.14-1.25-10.25 1.03-1.79 2.88-2.93 4.88-2.96 1.17-.02 2.27.79 2.99.79.72 0 2.05-.98 3.45-.84.59.03 2.24.24 3.3 1.82-.09.06-1.97 1.15-1.95 3.43.02 2.74 2.39 3.66 2.42 3.67-.03.1-.38 1.31-1.12 2.59zm-3.27-15.1c.73-.89 1.22-2.12 1.08-3.35-1.05.04-2.32.7-3.08 1.6-.67.8-1.26 2.08-1.1 3.35 1.17.09 2.37-.66 3.1-1.6z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 2.5a1 1 0 0 1 1.55-.84l15 8.5a1 1 0 0 1 0 1.72l-15 8.5a1 1 0 0 1-1.55-.84v-17.04z" />
    </svg>
  );
}

export interface AppStoreBadgesProps {
  appName: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

export function AppStoreBadges({ appName, appStoreUrl, playStoreUrl }: AppStoreBadgesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Download ${appName} on the App Store`}
        onClick={() => trackEvent("app_store_click", { app: appName, platform: "ios" })}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <AppleIcon className="h-6 w-6" />
        <div className="flex flex-col leading-none text-left">
          <span className="text-[10px] opacity-90">Download on the</span>
          <span className="text-sm font-display font-semibold">App Store</span>
        </div>
      </a>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get ${appName} on Google Play`}
        onClick={() => trackEvent("play_store_click", { app: appName, platform: "android" })}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <GooglePlayIcon className="h-6 w-6" />
        <div className="flex flex-col leading-none text-left">
          <span className="text-[10px] opacity-90">GET IT ON</span>
          <span className="text-sm font-display font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
}
