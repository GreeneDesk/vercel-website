// FAQ page. Route: /faq
// Questions come from src/content/faq.ts. Items still containing [FILL] or [CONFIRM] are hidden
// automatically until you complete them, so nothing unfinished goes live.

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { faqGroups } from "@/content/faq";
import { usePageMeta, SITE_URL } from "@/lib/seo";

const TITLE = "FAQ: FitDesk, SwimDesk, Data Hosting & Pricing | GreeneDesk";
const DESC =
  "Answers about GreeneDesk: FitDesk for gyms and seniors programs, SwimDesk, PerfectGym and Mywellness, where data is stored, pricing and getting started.";

const ready = (s: string) => !s.includes("[FILL]") && !s.includes("[CONFIRM]");

export default function FAQ() {
  const groups = faqGroups
    .map((g) => ({ ...g, items: g.items.filter((i) => ready(i.q) && ready(i.a)) }))
    .filter((g) => g.items.length);

  usePageMeta({
    title: TITLE,
    description: DESC,
    path: "/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          url: `${SITE_URL}/faq`,
          mainEntity: groups.flatMap((g) =>
            g.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
          ),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
          ],
        },
      ],
    },
  });

  return (
    <Layout>
    <main className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <p className="text-sm font-medium text-primary">FAQ</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Frequently asked questions</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        About GreeneDesk, FitDesk, SwimDesk, data hosting and getting started.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2">
        {groups.map((g) => (
          <a
            key={g.title}
            href={`#${slugify(g.title)}`}
            className="rounded-full border px-3 py-1 text-sm text-muted-foreground hover:bg-muted"
          >
            {g.title}
          </a>
        ))}
      </nav>

      {groups.map((g) => (
        <section key={g.title} id={slugify(g.title)} className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{g.title}</h2>
          <div className="mt-4 divide-y rounded-xl border">
            {g.items.map((i) => (
              <details key={i.q} className="p-5">
                <summary className="cursor-pointer list-none font-medium text-foreground">{i.q}</summary>
                <p className="mt-2 text-muted-foreground">{i.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground">
        <h2 className="text-2xl font-semibold">Still have a question?</h2>
        <p className="mx-auto mt-2 max-w-xl opacity-90">Call 1300 181 665 or book a demo set up for your centre.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/demo" className="rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
            Book a Demo
          </Link>
          <Link to="/guides" className="rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:opacity-90">
            Free guides
          </Link>
        </div>
      </section>
    </main>
    </Layout>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
