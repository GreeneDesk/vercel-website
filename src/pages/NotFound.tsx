// 404 page. Route: path="*" (must be the LAST route in src/App.tsx).
// Replaces Lovable's default NotFound. Sets noindex so search engines stop treating
// unknown URLs as duplicate homepages (the "soft 404" errors in the SEO report).

import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "@/lib/seo";

const links = [
  { label: "FitDesk", to: "/solutions/fitdesk" },
  { label: "Active ageing & rehab", to: "/active-ageing-rehab-software" },
  { label: "Aged care & retirement living", to: "/aged-care-retirement-living-fitness" },
  { label: "SwimDesk", to: "/solutions/swimdesk" },
  { label: "Councils & leisure centres", to: "/solutions/council" },
  { label: "Free guides", to: "/guides" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function NotFound() {
  const { pathname } = useLocation();
  usePageMeta({
    title: "Page not found | GreeneDesk",
    description: "This page doesn't exist. Find FitDesk, SwimDesk, free guides and contact details for GreeneDesk.",
    path: pathname,
    noindex: true,
  });

  return (
    <Layout>
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page <span className="font-mono text-foreground">{pathname}</span> doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Go to the homepage
      </Link>
    </main>
    </Layout>
  );
}
