// Swim squad management page. Route: /solutions/squads (replaces the existing page at the same URL).
// Self-contained: React + react-router-dom + Tailwind (shadcn theme tokens). No extra packages.
//
// FEATURE STATUS: set each `status` below to "live" or "soon". "soon" shows a "Coming soon" badge.
// Only mark "live" what SwimDesk does today.

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type Status = "live" | "soon";

const URL = "https://greenedesk.com.au/solutions/squads";
const TITLE = "Swim Squad Management Software | Times, Attendance & Dryland | SwimDesk";
const DESC =
  "Squad management for swim schools and aquatic centres: squad groups, attendance, coach rosters, swimmer and parent app, and progress, with pool and dryland training planned together. One record from first lesson to first race.";

const problems = [
  "Training times live on a coach's stopwatch, phone or paper",
  "Nobody can quickly see each swimmer's personal bests",
  "Coaches check by hand who is close to a qualifying time",
  "Squad attendance is marked on paper",
  "Rostering coaches across lanes and squads is a weekly puzzle",
  "Parents keep asking how their child is going",
  "Dryland training is planned separately from the pool program",
];

const features: { title: string; body: string; status: Status }[] = [
  {
    title: "Squad groups and sessions",
    body: "Set up squads by age or ability, schedule sessions by pool and lane, and move swimmers between squads as they progress.",
    status: "live",
  },
  {
    title: "Squad attendance",
    body: "Coaches mark attendance on a tablet or phone and see each swimmer's consistency over the season.",
    status: "live",
  },
  {
    title: "Coach rosters",
    body: "Roster coaches across squads, lanes and sites in one calendar, so every session is covered.",
    status: "live",
  },
  {
    title: "Swimmer and parent app",
    body: "Swimmers and parents see the training schedule, attendance and progress in one app.",
    status: "live",
  },
  {
    title: "From lessons to squads",
    body: "Swimmers move from learn-to-swim into squads with their history intact, so coaches know where each one has come from.",
    status: "live",
  },
  {
    title: "Poolside timing",
    body: "Record times and splits on a tablet at the pool, saved straight to each swimmer.",
    status: "soon",
  },
  {
    title: "Personal bests",
    body: "Every swimmer's best times by stroke and distance, with progress over the season.",
    status: "soon",
  },
  {
    title: "Gap to qualifying times",
    body: "See how far each swimmer is from the qualifying times for the meets they are aiming at.",
    status: "soon",
  },
  {
    title: "Dryland workouts with FitDesk",
    body: "Plan gym and dryland sessions from FitDesk's library of 4,000+ exercises, alongside the pool program, so wet and dry training work together.",
    status: "soon",
  },
];

const pathway = [
  { step: "Learn to swim", body: "Levels, skills and certificates" },
  { step: "School programs", body: "Assessments and reports for schools" },
  { step: "Squads", body: "Attendance, rosters and progress" },
  { step: "Dryland", body: "Gym work planned with FitDesk" },
];

const faqs = [
  {
    q: "What is the best software for managing swim squads?",
    a: "Look for one place to manage squad groups, attendance, coach rosters and swimmer progress, with an app for swimmers and parents. SwimDesk does this and connects squads to your learn-to-swim and school programs, so swimmers keep one record as they progress.",
  },
  {
    q: "Can parents see their child's progress?",
    a: "Yes. Swimmers and parents use the SwimDesk app to see the training schedule, attendance and progress.",
  },
  {
    q: "Does SwimDesk handle meet entries?",
    a: "No. Official meet entries and qualifying-time checks in Australia go through Swimming Australia's Swim Central. SwimDesk manages the training side: squads, attendance, coaches and progress.",
  },
  {
    q: "Can swimmers move from lessons into squads?",
    a: "Yes. Swimmers move from learn-to-swim into squads with their history intact, so coaches know each swimmer's background.",
  },
  {
    q: "Can we roster coaches across several pools?",
    a: "Yes. Coaches are rostered across squads, lanes and sites in one calendar.",
  },
  {
    q: "Where is swimmer data stored?",
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

export default function Squads() {
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
    ld.id = "squads-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", name: TITLE, url: URL, description: DESC },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://greenedesk.com.au/" },
            { "@type": "ListItem", position: 2, name: "SwimDesk", item: "https://greenedesk.com.au/solutions/swimdesk" },
            { "@type": "ListItem", position: 3, name: "Squad management", item: URL },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ],
    });
    document.getElementById("squads-ld")?.remove();
    document.head.appendChild(ld);
    return () => ld.remove();
  }, []);

  const h2 = "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl";
  const lead = "mt-3 max-w-3xl text-lg text-muted-foreground";

  return (
    <Layout>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section>
        <p className="text-sm font-medium text-primary">SwimDesk squad management</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          From first lesson to first race
        </h1>
        <p className={lead}>
          Squad management for swim schools and aquatic centres. Squads, attendance, coach rosters and progress in one
          place, with an app for swimmers and parents, and one record that follows each swimmer from learn-to-swim into
          squads.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/demo" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Book a Demo
          </Link>
          <a href="#features" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-muted">
            See the features
          </a>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className={h2}>Squads still run on stopwatches and spreadsheets</h2>
          <p className="mt-3 text-muted-foreground">
            Most squad coaches juggle a phone stopwatch, a spreadsheet and a group chat. The information parents, coaches
            and swimmers need ends up in three places, or nowhere.
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

      <section id="features" className="mt-16 scroll-mt-24">
        <h2 className={h2}>What SwimDesk gives your squad coaches</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                {f.title}
                {f.status === "soon" && <SoonBadge />}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className={h2}>One record from first lesson to first race</h2>
        <p className={lead}>Swimmers don't start again each time they move up. Neither does their data.</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathway.map((p, i) => (
            <li key={p.step} className="rounded-xl border bg-card p-5">
              <span className="text-sm font-semibold text-primary">Step {i + 1}</span>
              <p className="mt-1 font-semibold text-foreground">{p.step}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/solutions/swimdesk" className="font-medium text-primary hover:underline">Learn to swim</Link>
          <Link to="/solutions/school-programs" className="font-medium text-primary hover:underline">School programs</Link>
          <Link to="/solutions/fitdesk" className="font-medium text-primary hover:underline">FitDesk for dryland</Link>
        </div>
      </section>

      <section className="mt-16 rounded-xl border bg-muted/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Built for training, not meets</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Official meet entries and qualifying-time checks in Australia run through Swimming Australia's Swim Central.
          SwimDesk looks after everything between meets: squads, sessions, coaches, attendance and progress.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className={h2}>Questions about squad management</h2>
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
        <h2 className="text-2xl font-semibold sm:text-3xl">See your squads in SwimDesk</h2>
        <p className="mx-auto mt-2 max-w-2xl opacity-90">A short demo set up with your squads, coaches and pools.</p>
        <Link to="/demo" className="mt-6 inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
          Book a Demo
        </Link>
      </section>
    </div>
    </Layout>
  );
}
