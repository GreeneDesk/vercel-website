// Long-form page: /aged-care-retirement-living-fitness
// FitDesk for residential aged care, retirement villages and seniors living fitness facilities.
// Self-contained: React + react-router-dom + Tailwind (shadcn theme tokens). No extra packages.

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const URL = "https://greenedesk.com.au/aged-care-retirement-living-fitness";
const TITLE = "Fitness Software for Aged Care & Retirement Villages | FitDesk by GreeneDesk";
const DESC =
  "FitDesk helps aged care homes, retirement villages and seniors living communities run their gym and exercise programs: digital screening and assessments, workout programming, progress tracking, and reports emailed to families and clinicians.";

const audiences = [
  {
    title: "Residential aged care",
    body: "Run seated, standing and small-group exercise for residents, record every session, and keep a clear history of each resident's function over time.",
  },
  {
    title: "Retirement villages and seniors living",
    body: "Turn the village gym into a program residents actually use, with personal plans, a member app and trainers who can see who has stopped coming.",
  },
  {
    title: "Home care and day programs",
    body: "Deliver structured strength and balance programs for clients living at home, with reassessments and reports for case managers and families.",
  },
  {
    title: "Allied health and lifestyle teams",
    body: "Give exercise physiologists, physios, allied health assistants and lifestyle staff one shared place for programs, notes and results.",
  },
];

const problems = [
  "Screening forms, assessments and session notes live on paper or in spreadsheets, so nobody can see a resident's progress at a glance.",
  "Programs live in one staff member's head. When they leave or go on leave, residents' programs stop.",
  "Families ask how their parent is going, and the answer takes a day of digging.",
  "The gym looks great on the brochure, but you can't show how many residents use it or what difference it makes.",
];

const features = [
  {
    title: "Digital screening and health history",
    body: "Replace paper PARQ and pre-exercise screening forms with digital forms built to match your own process. Every answer lands in the resident's history, ready for the next session.",
  },
  {
    title: "Your assessments, digitised",
    body: "FitDesk doesn't prescribe tests. It records the balance, strength, mobility and wellbeing assessments your clinicians already use, so baseline and follow-up results sit side by side.",
  },
  {
    title: "Workout programming from 4,000+ exercises",
    body: "Build programs from a library of more than 4,000 exercises with instructional videos and GIFs, including seated and low-impact options, and save them as templates for your whole team.",
  },
  {
    title: "Session scheduling",
    body: "Book trainers, sessions and rooms in one calendar, so staff know who they are seeing and when, across one site or many.",
  },
  {
    title: "Trainer and resident apps",
    body: "Trainers record sessions and notes on their app. Residents who use a phone or tablet can follow their program, goals and progress in theirs.",
  },
  {
    title: "Reassessment reminders",
    body: "Set milestones for each program, and FitDesk reminds trainers when a review or reassessment is due, so nobody slips through the gaps.",
  },
  {
    title: "Reports emailed to the people who care",
    body: "Email customised progress reports to families, GPs, physios and care managers. You choose what each report includes.",
  },
  {
    title: "Retention and attendance alerts",
    body: "AI retention alerts flag residents whose attendance drops, so a trainer can check in before a gap becomes a habit.",
  },
  {
    title: "Data hosted where you need it",
    body: "Australian and New Zealand data is hosted on AWS in Sydney. We can also host in your region or on your own servers.",
  },
];

const trainerSteps = [
  {
    title: "Screen the resident",
    body: "The resident, a family member or staff complete your digital pre-exercise screening form. Any answers your process flags for clinical review are visible before the first session.",
  },
  {
    title: "Record a baseline",
    body: "Your exercise physiologist or physio runs the assessments you use and records the results in FitDesk. This becomes the starting point for every future comparison.",
  },
  {
    title: "Set goals with the resident",
    body: "Agree goals in the resident's own words, such as walking to the dining room without a rest or getting up from a chair unaided, and attach them to their profile.",
  },
  {
    title: "Build the workout",
    body: "Search the exercise library, add exercises with the dosage and coaching notes your team uses, or start from one of your saved templates. Each exercise comes with a video or GIF.",
  },
  {
    title: "Deliver and record sessions",
    body: "Trainers and allied health assistants run sessions one-on-one or in small groups and record attendance and notes on the trainer app. Independent residents can follow their program in the resident app.",
  },
  {
    title: "Reassess at each milestone",
    body: "FitDesk reminds the team when a review is due. Record the follow-up results and compare them with the baseline on one screen, then adjust the program.",
  },
  {
    title: "Share progress",
    body: "Email a customised progress report to the family, GP, physio or care manager, so everyone sees the same picture.",
  },
];

const tracking = [
  {
    title: "Attendance and adherence",
    body: "See who attended, who completed their program and who has missed sessions, for each resident and across the whole site.",
  },
  {
    title: "Assessment history",
    body: "Every assessment is kept in order, so trainers and clinicians can see change over weeks and months rather than relying on memory.",
  },
  {
    title: "Goals and milestones",
    body: "Track each resident's goals and the milestones you set, and celebrate them with residents and families when they are reached.",
  },
  {
    title: "Program use across the site",
    body: "See how many residents are exercising and how often, the numbers boards, managers and prospective residents ask about.",
  },
];

const example = [
  { week: "Week 0", focus: "Screening, baseline assessments and goal setting", record: "Screening form, baseline results, goals" },
  { week: "Weeks 1–4", focus: "Supported sessions to build confidence and routine", record: "Attendance, session notes" },
  { week: "Week 4", focus: "Check-in review and program adjustment", record: "Review notes, updated program" },
  { week: "Weeks 5–11", focus: "Progressed program, more independence", record: "Attendance, app activity, notes" },
  { week: "Week 12", focus: "Follow-up assessments against baseline", record: "Results comparison, report emailed to family and GP" },
];

const roles = [
  { role: "Exercise physiologist or physio", does: "Screens, assesses, designs programs and templates, reviews progress" },
  { role: "Allied health assistant or trainer", does: "Runs sessions, records attendance and notes, flags concerns" },
  { role: "Lifestyle or wellness coordinator", does: "Schedules sessions and groups, follows up residents who drop off" },
  { role: "Resident", does: "Follows their program, sees goals and progress in the app if they use one" },
  { role: "Family, GP and care manager", does: "Receive customised progress reports by email" },
  { role: "Site or village manager", does: "Sees participation across the site" },
];

const faqs = [
  {
    q: "What is the best software for an aged care or retirement village gym?",
    a: "Look for software that handles screening, assessments, programming, session records and reporting in one place, works for staff-led sessions as well as independent residents, and keeps data in Australia. FitDesk was built for this and is used by council leisure centres across Australia and New Zealand.",
  },
  {
    q: "Does FitDesk run falls-risk or fitness tests?",
    a: "No. FitDesk is a platform that digitises the assessments your clinicians already use. It is fully customisable, so you decide which tests, forms and measures to record.",
  },
  {
    q: "Can residents who don't use smartphones still take part?",
    a: "Yes. Trainers and allied health assistants record sessions and notes on the trainer app, so residents don't need a device. Residents who do use one can follow their program in the resident app.",
  },
  {
    q: "Can we send progress updates to families?",
    a: "Yes. FitDesk emails customised progress reports to families, GPs, physios and care managers. You choose what each report includes.",
  },
  {
    q: "Does FitDesk help with aged care quality reporting?",
    a: "FitDesk doesn't submit quality indicator data. It gives you a clear record of residents' exercise, attendance and assessments, which supports the falls, function and quality-of-life work your team reports on.",
  },
  {
    q: "Can we use our own exercise programs?",
    a: "Yes. Build programs from the 4,000+ exercise library or add your own, then save them as templates for your team to reuse across residents and sites.",
  },
  {
    q: "Where is resident data stored?",
    a: "Australian and New Zealand data is hosted on AWS in Sydney. For providers elsewhere, we can host in your region or on your own servers.",
  },
  {
    q: "Does it work across multiple villages or homes?",
    a: "Yes. Programs, templates and reporting can be shared across sites, and managers can see participation at each one.",
  },
];

export default function AgedCareFitness() {
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
    ld.id = "aged-care-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: TITLE,
          url: URL,
          description: DESC,
          about: { "@type": "SoftwareApplication", name: "FitDesk", applicationCategory: "BusinessApplication" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://greenedesk.com.au/" },
            { "@type": "ListItem", position: 2, name: "FitDesk", item: "https://greenedesk.com.au/solutions/fitdesk" },
            { "@type": "ListItem", position: 3, name: "Aged care and retirement living", item: URL },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ],
    });
    document.getElementById("aged-care-ld")?.remove();
    document.head.appendChild(ld);
    return () => ld.remove();
  }, []);

  const h2 = "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl";
  const lead = "mt-3 max-w-3xl text-lg text-muted-foreground";

  return (
    <Layout>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Hero */}
      <section>
        <p className="text-sm font-medium text-primary">FitDesk for aged care and retirement living</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Exercise and gym software for aged care homes and retirement villages
        </h1>
        <p className={lead}>
          FitDesk gives your trainers and allied health team one place to screen residents, build workouts, record every
          session and show progress to families and clinicians. Fully configurable to the way your team already works,
          and hosted in Sydney.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/demo" className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Book a Demo
          </Link>
          <a href="#how-trainers-work" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-muted">
            See how trainers use it
          </a>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mt-16">
        <h2 className={h2}>Built for seniors fitness, wherever it happens</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why now */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className={h2}>Why exercise records matter more than ever</h2>
          <p className="mt-3 text-muted-foreground">
            Since July 2019, every residential aged care home in Australia has reported quality indicators to the
            Department of Health each quarter. They include falls and major injury, decline in activities of daily living,
            and residents' quality of life. The strengthened Aged Care Quality Standards took effect on 1 November 2025.
          </p>
          <p className="mt-3 text-muted-foreground">
            Exercise is one of the most direct ways to support strength, balance and independence. Good records show what
            your team does, for whom and with what result.
          </p>
          <p className="mt-3 text-muted-foreground">
            In retirement villages, the gym is part of the sales story. People over 65 are now the second-largest group of
            gym users, and villages with a staffed, well-run wellness program see far more residents take part.
          </p>
        </div>
        <div className="rounded-xl border bg-muted/40 p-6">
          <h3 className="font-semibold text-foreground">Sound familiar?</h3>
          <ul className="mt-3 space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                <span aria-hidden className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What FitDesk offers */}
      <section className="mt-16">
        <h2 className={h2}>What FitDesk gives your team</h2>
        <p className={lead}>Everything from the first screening form to the twelve-week review, in one platform.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How trainers create workouts */}
      <section id="how-trainers-work" className="mt-16 scroll-mt-24">
        <h2 className={h2}>How trainers create workouts and track progress</h2>
        <p className={lead}>A typical resident's journey in FitDesk, from first conversation to shared results.</p>
        <ol className="mt-8 space-y-6">
          {trainerSteps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 max-w-3xl text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Tracking */}
      <section className="mt-16">
        <h2 className={h2}>Keep track of every resident's progress</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tracking.map((t) => (
            <div key={t.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example program */}
      <section className="mt-16">
        <h2 className={h2}>Example: a 12-week strength and balance block</h2>
        <p className={lead}>
          How one program might be set up in FitDesk. Your clinical team sets the exercises, assessments and timing.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-muted/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">When</th>
                <th className="px-4 py-3 font-semibold">Focus</th>
                <th className="px-4 py-3 font-semibold">Recorded in FitDesk</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {example.map((e) => (
                <tr key={e.week}>
                  <td className="px-4 py-3 font-medium text-foreground">{e.week}</td>
                  <td className="px-4 py-3 text-muted-foreground">{e.focus}</td>
                  <td className="px-4 py-3 text-muted-foreground">{e.record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roles */}
      <section className="mt-16">
        <h2 className={h2}>Who does what</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-muted/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Uses FitDesk to</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {roles.map((r) => (
                <tr key={r.role}>
                  <td className="px-4 py-3 font-medium text-foreground">{r.role}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.does}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Proof */}
      <section className="mt-16 rounded-xl border bg-muted/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-foreground">Trusted by community fitness providers across Australia and New Zealand</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          50+ centres, including council leisure centres and a university, use GreeneDesk products. Australian-built,
          supported from Australia on 1300 181 665, Monday to Friday 7am–7pm AEST.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/active-ageing-rehab-software" className="font-medium text-primary hover:underline">
            Active ageing and rehab programs
          </Link>
          <Link to="/data-residency" className="font-medium text-primary hover:underline">
            Data residency
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 max-w-3xl">
        <h2 className={h2}>Questions from aged care and retirement living teams</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {faqs.map((f) => (
            <details key={f.q} className="p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">See FitDesk set up for your residents</h2>
        <p className="mx-auto mt-2 max-w-2xl opacity-90">
          A short demo built around your gym, your team and the programs you run today.
        </p>
        <Link to="/demo" className="mt-6 inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
          Book a Demo
        </Link>
      </section>
    </div>
    </Layout>
  );
}
