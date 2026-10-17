// Free guides hub. Route: /guides
// Content comes from src/content/guides.ts. No AI prompt needed.

import { Link } from "react-router-dom";
import { guides } from "@/content/guides";
import { usePageMeta, SITE_URL } from "@/lib/seo";
import { Layout } from "@/components/layout/Layout";
import { GuideSignup } from "@/components/sections/GuideSignup";

const TITLE = "Free Guides & Checklists for Leisure Centres | GreeneDesk";
const DESC =
  "Free PDF guides and checklists for council leisure centres, gyms, swim schools, retirement villages and aged care: falls prevention, screening and child safety.";

const groups = ["Seniors and falls prevention", "Gyms and fitness floors", "Swim and children's programs"] as const;

export default function Guides() {
  usePageMeta({
    title: TITLE,
    description: DESC,
    path: "/guides",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: TITLE,
          url: `${SITE_URL}/guides`,
          description: DESC,
          hasPart: guides.map((g) => ({
            "@type": "DigitalDocument",
            name: g.title,
            url: `${SITE_URL}/guides/${g.slug}`,
            encodingFormat: "application/pdf",
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Free guides", item: `${SITE_URL}/guides` },
          ],
        },
      ],
    },
  });

  return (
    <Layout>
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section>
        <p className="text-sm font-medium text-primary">Free guides and checklists</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Practical guides for leisure, fitness, aquatic and seniors programs
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Short, sourced PDF checklists for council leisure centres, YMCAs, gyms, swim schools, retirement villages and
          aged care in Australia and New Zealand. Free to download, no sign-up needed.
        </p>
      </section>

      {groups.map((grp) => {
        const list = guides.filter((g) => g.audience === grp);
        if (!list.length) return null;
        return (
          <section key={grp} className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{grp}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {list.map((g) => (
                <article key={g.slug} className="flex flex-col rounded-xl border bg-card p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {g.type} · PDF · {g.pages} pages
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    <Link to={`/guides/${g.slug}`} className="hover:underline">
                      {g.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{g.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      to={`/guides/${g.slug}`}
                      className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
                    >
                      What's inside
                    </Link>
                    <a
                      href={g.file}
                      download
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                    >
                      Download PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <GuideSignup />

      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Want these checklists running in your centre?</h2>
        <p className="mx-auto mt-2 max-w-2xl opacity-90">
          GreeneDesk digitises your own screening, assessments and program records, with Australian customer data
          kept in Australia.
        </p>
        <Link
          to="/demo"
          className="mt-6 inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90"
        >
          Book a Demo
        </Link>
      </section>
    </main>
    </Layout>
  );
}
