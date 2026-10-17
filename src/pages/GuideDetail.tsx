// One landing page per guide. Route: /guides/:slug
// Content comes from src/content/guides.ts. Unknown slugs show the 404 page.

import { Link, useParams } from "react-router-dom";
import { getGuide } from "@/content/guides";
import { usePageMeta, SITE_URL } from "@/lib/seo";
import NotFound from "./NotFound";

export default function GuideDetail() {
  const { slug } = useParams();
  const g = getGuide(slug);
  if (!g) return <NotFound />;
  return <GuideView slug={g.slug} />;
}

function GuideView({ slug }: { slug: string }) {
  const g = getGuide(slug)!;
  const url = `${SITE_URL}/guides/${g.slug}`;

  usePageMeta({
    title: `${g.seoTitle} | GreeneDesk`,
    description: g.description,
    path: `/guides/${g.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DigitalDocument",
          name: g.title,
          description: g.description,
          url,
          encodingFormat: "application/pdf",
          contentUrl: `${SITE_URL}${g.file}`,
          inLanguage: "en-AU",
          isAccessibleForFree: true,
          publisher: { "@type": "Organization", name: "GreeneDesk", url: SITE_URL },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Free guides", item: `${SITE_URL}/guides` },
            { "@type": "ListItem", position: 3, name: g.title, item: url },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: g.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    },
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <nav className="text-sm text-muted-foreground">
        <Link to="/guides" className="hover:underline">
          Free guides
        </Link>{" "}
        / {g.type}
      </nav>

      <section className="mt-4 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="text-sm font-medium text-primary">
            Free {g.type.toLowerCase()} · PDF · {g.pages} pages
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{g.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{g.summary}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Who it's for: </span>
            {g.who}
          </p>
        </div>
        <aside className="h-fit rounded-xl border bg-muted/40 p-6">
          <p className="font-semibold text-foreground">Download the {g.type.toLowerCase()}</p>
          <p className="mt-1 text-sm text-muted-foreground">Free, no sign-up. Print it or share it with your team.</p>
          <a
            href={g.file}
            download
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Download PDF
          </a>
        </aside>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">What's inside</h2>
        <ul className="mt-4 space-y-3">
          {g.inside.map((i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span aria-hidden className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Questions</h2>
        <div className="mt-4 divide-y rounded-xl border">
          {g.faqs.map((f) => (
            <details key={f.q} className="p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Related</h2>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          {g.related.map((r) => (
            <Link key={r.to} to={r.to} className="font-medium text-primary hover:underline">
              {r.label}
            </Link>
          ))}
          <Link to="/guides" className="font-medium text-primary hover:underline">
            All free guides
          </Link>
        </div>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">
        General information only, not legal or medical advice. Sources are listed in the PDF.
      </p>
    </main>
  );
}
