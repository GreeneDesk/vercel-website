// School swimming programs page. Route: /solutions/school-programs (replaces the existing page at the same URL).
// Self-contained: React + react-router-dom + Tailwind (shadcn theme tokens). No extra packages.
//
// FEATURE STATUS: set each `status` below to "live" or "soon". "soon" shows a "Coming soon" badge.
// Only mark "live" what SwimDesk does today.

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type Status = "live" | "soon";

const URL = "https://greenedesk.com.au/solutions/school-programs";
const TITLE = "School Swimming Program Software for Aquatic Centres | SwimDesk";
const DESC =
  "Run school swimming programs without the paperwork. SwimDesk handles school bookings, class lists, level grouping, poolside assessments, certificates and reports for every school. Australian data stays in Australia.";

const problems = [
  "Schools book with PDF forms and hire agreements emailed back and forth",
  "Class lists arrive as spreadsheets and get retyped",
  "A busload of students has to be sorted into levels on day one",
  "Skills are ticked on paper sheets that get wet, lost or retyped",
  "Certificates are made one by one at the end of the program",
  "Every school wants its own report, typed up by hand",
  "Each site runs the program a little differently",
];

const steps: { title: string; body: string; status: Status }[] = [
  {
    title: "Schools book their program",
    body: "Record each school's booking, dates, lanes and year groups in one place instead of PDF forms and email threads.",
    status: "soon",
  },
  {
    title: "Class lists go in once",
    body: "Import each school's student list instead of retyping it, and reuse it for every session.",
    status: "soon",
  },
  {
    title: "Assess and group on day one",
    body: "Instructors assess students poolside on a tablet and place them into the right level groups, even without wifi.",
    status: "live",
  },
  {
    title: "Attendance and skills every session",
    body: "Mark attendance and tick off skills as students achieve them. Progress builds automatically across the program.",
    status: "live",
  },
  {
    title: "Certificates generated automatically",
    body: "Digital certificates are created from each student's recorded skills, ready to send to the school.",
    status: "live",
  },
  {
    title: "Reports for every school",
    body: "Send each school a report by class or by student, showing attendance, levels and skills achieved.",
    status: "live",
  },
  {
    title: "One view across your sites",
    body: "See every school program across all your pools, with the same process at each site.",
    status: "live",
  },
];

const pathways = [
  {
    title: "Victoria",
    body: "Set up the Victorian Water Safety Certificate skills as a level pathway: water safety knowledge, a continuous 50 metre swim, surface diving, emergency response, non-swimming rescues and the survival sequence. The state expects students to meet these by the end of Year 6.",
  },
  {
    title: "New South Wales",
    body: "Group students the way NSW school programs already do, into beginner, intermediate and advanced, with the skills for each group tracked session by session.",
  },
  {
    title: "New Zealand",
    body: "Run Water Skills for Life programs with the skills recorded for every student, so schools and funders can see who has been reached and what they achieved.",
  },
  {
    title: "Your own curriculum",
    body: "SwimDesk supports AUSTSWIM, Royal Life Saving and YMCA curricula, or the levels and skills you already use.",
  },
];

const whyNow = [
  { figure: "$73.3m", label: "Victorian funding for school swimming and water safety over four years (Budget 2024/25)" },
  { figure: "$7.7m", label: "Extra WA funding for swimming and water safety in the 2026-27 State Budget" },
  { figure: "256,511", label: "NZ children reached by Water Skills for Life from 2018 to 2023" },
];

const quotes = [
  {
    text: "SwimDesk has transformed how we manage our school program. What used to take admin days now takes minutes.",
    who: "Centre Manager, New Zealand council",
  },
  {
    text: "We manage school programs across three sites and GreeneDesk makes it feel like one.",
    who: "Program Director, regional aquatic centre, New Zealand",
  },
];

const faqs = [
  {
    q: "What software do aquatic centres use for school swimming programs?",
    a: "Many still use PDF booking forms, spreadsheets and paper assessment sheets. SwimDesk brings the program into one place: poolside assessments and level grouping, attendance, skills tracking, automatic certificates and reports for each school.",
  },
  {
    q: "Can we send reports to each school?",
    a: "Yes. SwimDesk produces reports by school, class or student, showing attendance, levels and the skills each student achieved.",
  },
  {
    q: "Can SwimDesk track the Victorian Water Safety Certificate?",
    a: "Yes. SwimDesk supports any structured curriculum, so the Victorian Water Safety Certificate skills can be set up as a level pathway and tracked for every student.",
  },
  {
    q: "Do instructors need wifi at the pool?",
    a: "No. Poolside assessments work on a tablet offline and sync when the device reconnects.",
  },
  {
    q: "Does it work across multiple pools?",
    a: "Yes. Councils use SwimDesk to run school programs across several sites with one process and one view.",
  },
  {
    q: "Do we have to replace our booking or membership system?",
    a: "No. SwimDesk works alongside the management system you already use, including PerfectGym and Envibe.",
  },
  {
    q: "Where is student data stored?",
    a: "Australian customer data stays in Australia, hosted on AWS in Sydney. New Zealand customers are also hosted in Sydney.",
  },
];

function SoonBadge() {
  return (
    <span className="ml-2 inline-flex items-center rounded-full border border-primary/40 px-2 py-0.5 align-middle text-xs font-medium text-primary">
      Coming soon
    </span>
  );
}

export default function SchoolPrograms() {
  useEffect(() => {
    document.title = TITLE;
    const setMeta = (sel: string, attr: string, key: string, content: string) => {
      let el = document.head.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', "name", "description", DESC);
    setMeta('meta[property="og:title"]', "property", "og:title", TITLE);
    setMeta('meta[property="og:description"]', "property", "og:description", DESC);
    setMeta('meta[property="og:url"]', "property", "og:url", URL);
    let canon = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = URL;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "school-programs-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", name: TITLE, url: URL, description: DESC },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://greenedesk.com.au/" },
            { "@type": "ListItem", position: 2, name: "SwimDesk", item: "https://greenedesk.com.au/solutions/swimdesk" },
            { "@type": "ListItem", position: 3, name: "School swimming programs", item: URL },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ],
    });
    document.getElementById("school-programs-ld")?.remove();
    document.head.appendChild(ld);
    return () => ld.remove();
  }, []);

  const h2 = "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl";
  const lead = "mt-3 max-w-3xl text-lg text-muted-foreground";

  return (
    <Layout>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section>
        <p className="text-sm font-medium text-primary">SwimDesk for school swimming programs</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          School swimming programs without the paperwork
        </h1>
        <p className={lead}>
          Schools send students by the busload. SwimDesk helps council and aquatic centres group them into the right
          levels, track every skill poolside, generate certificates and send each school its report, all in one place.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/demo" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Book a Demo
          </Link>
          <a href="#how-it-works" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-muted">
            See how it works
          </a>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className={h2}>Still running school programs on paper?</h2>
          <p className="mt-3 text-muted-foreground">
            Most council pools still publish school booking forms as PDFs. The admin behind a single term of school
            swimming can take days, and it is repeated at every site.
          </p>
        </div>
        <ul className="space-y-3 rounded-xl border bg-muted/40 p-6">
          {problems.map((p) => (
            <li key={p} className="flex gap-3 text-sm text-muted-foreground">
              <span aria-hidden className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="mt-16 scroll-mt-24">
        <h2 className={h2}>How a school program runs in SwimDesk</h2>
        <ol className="mt-8 space-y-6">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">
                  {s.title}
                  {s.status === "soon" && <SoonBadge />}
                </h3>
                <p className="mt-1 max-w-3xl text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className={h2}>Built around the programs schools already run</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {pathways.map((p) => (
            <div key={p.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className={h2}>School swimming is growing</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {whyNow.map((w) => (
            <div key={w.figure} className="rounded-xl border bg-card p-5">
              <p className="text-3xl font-bold text-primary">{w.figure}</p>
              <p className="mt-2 text-sm text-muted-foreground">{w.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {quotes.map((q) => (
          <figure key={q.text} className="rounded-xl border bg-muted/40 p-6">
            <blockquote className="text-lg text-foreground">&ldquo;{q.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">{q.who}</figcaption>
          </figure>
        ))}
      </section>

      <section className="mt-16 rounded-xl border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">From school program to squad</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          The students you meet through school programs can carry their record into learn-to-swim lessons and squads,
          so nobody starts from scratch.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/solutions/swimdesk" className="font-medium text-primary hover:underline">Learn to swim with SwimDesk</Link>
          <Link to="/solutions/squads" className="font-medium text-primary hover:underline">Squad management</Link>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className={h2}>Questions about school swimming programs</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {faqs.map((f) => (
            <details key={f.q} className="p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">See your next school program in SwimDesk</h2>
        <p className="mx-auto mt-2 max-w-2xl opacity-90">A short demo set up with your levels, your sites and your schools.</p>
        <Link to="/demo" className="mt-6 inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
          Book a Demo
        </Link>
      </section>
    </div>
    </Layout>
  );
}
