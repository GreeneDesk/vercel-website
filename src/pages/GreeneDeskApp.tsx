// GreeneDesk staff and parent app page. Route: /greenedesk-app
// Used as the Marketing URL and Support URL (#help) on the App Store and Google Play.
// Needs src/lib/seo.ts (already in the project).

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta, SITE_URL } from "@/lib/seo";

const IOS = "https://apps.apple.com/au/app/greenedesk/id6447428480";
const ANDROID = "https://play.google.com/store/apps/details?id=www.mygreenedesk.com.greenedesk";
const SUPPORT_EMAIL = "support@greenedesk.com"; // use the same email as both store listings
const PATH = "/greenedesk-app";

const TITLE = "GreeneDesk App for Staff, Coaches and Parents";
const DESC =
  "The GreeneDesk app for swim schools, leisure centres and gyms: parents see swim progress and book make-ups, instructors mark attendance, trainers run assessments.";

const roles = [
  {
    who: "Parents",
    items: [
      "See your child's swim lesson progress and skills",
      "Book classes and make-up lessons",
      "Get notified when a class is cancelled",
      "Hear from your child's instructor",
    ],
  },
  {
    who: "Swim instructors and coaches",
    items: ["Mark attendance poolside", "Record skills and progress for every student", "Notify and message parents"],
  },
  {
    who: "Swim managers",
    items: [
      "See classes, instructors, attendance and progress across your programs",
      "Keep learn-to-swim, school programs and squads in one place",
    ],
  },
  {
    who: "Trainers",
    items: [
      "Build workouts from a library of exercise videos",
      "Run health assessments and track client progress",
      "Manage appointments and follow-ups",
    ],
  },
  {
    who: "Fitness directors",
    items: ["See trainer activity, appointments and member progress across the fitness floor"],
  },
  {
    who: "Front desk staff",
    items: ["Look up members, families, classes and bookings quickly"],
  },
];

const help = [
  {
    q: "How do I sign in to the GreeneDesk app?",
    a: "Use the sign-in details your swim school, leisure centre or gym gave you. Accounts are created by your centre, so you can't sign up on your own. If you haven't received your details, ask your centre.",
  },
  {
    q: "I'm a parent. Which app do I need?",
    a: "The GreeneDesk app. Use it to see your child's swim progress, book classes and make-up lessons, and get class cancellation notices.",
  },
  {
    q: "I'm a gym member. Which app do I need?",
    a: "The FitDesk app. It has your workout program, exercise videos, workout log and progress charts.",
  },
  {
    q: "I forgot my password. What do I do?",
    a: "Ask your centre to reset it for you, or email us using the details below.",
  },
  {
    q: "Is the app free?",
    a: "Yes. The app is free for staff and families at centres that use GreeneDesk. Your centre pays for GreeneDesk.",
  },
  {
    q: "Where is my data stored?",
    a: "Australian customer data stays in Australia, hosted on AWS in Sydney. New Zealand centres are also hosted in Sydney. Your centre controls your account and your child's records.",
  },
  {
    q: "How do I delete my account?",
    a: `Ask your centre, or email ${SUPPORT_EMAIL} from the email address on your account and we'll delete your data.`,
  },
];

export default function GreeneDeskApp() {
  usePageMeta({
    title: TITLE,
    description: DESC,
    path: PATH,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MobileApplication",
          "@id": `${SITE_URL}${PATH}#app`,
          name: "GreeneDesk",
          alternateName: "GreeneDesk: Swim & Fitness",
          description: DESC,
          url: `${SITE_URL}${PATH}`,
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android",
          offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
          downloadUrl: [IOS, ANDROID],
          installUrl: [IOS, ANDROID],
          sameAs: [IOS, ANDROID],
          inLanguage: "en-AU",
          audience: {
            "@type": "Audience",
            audienceType: "Staff and parents at swim schools, leisure centres and gyms",
          },
          publisher: { "@type": "Organization", "@id": "https://greenedesk.com.au/#org", name: "GreeneDesk", url: SITE_URL },
        },
        {
          "@type": "FAQPage",
          mainEntity: help.map((h) => ({ "@type": "Question", name: h.q, acceptedAnswer: { "@type": "Answer", text: h.a } })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "GreeneDesk app", item: `${SITE_URL}${PATH}` },
          ],
        },
      ],
    },
  });

  const btn = "inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium";

  return (
    <Layout>
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <section>
        <p className="text-sm font-medium text-primary">GreeneDesk app</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          One app for your centre's team and families
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          For swim schools, leisure centres and gyms that use GreeneDesk. Parents follow swim progress and book make-up
          lessons, instructors mark attendance poolside, and trainers run assessments and build workouts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={IOS} className={`${btn} bg-primary text-primary-foreground hover:opacity-90`} rel="noopener">
            Get it on the App Store
          </a>
          <a href={ANDROID} className={`${btn} bg-primary text-primary-foreground hover:opacity-90`} rel="noopener">
            Get it on Google Play
          </a>
          <a href="#help" className={`${btn} border hover:bg-muted`}>
            Sign-in help
          </a>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Free for staff and families. Gym members use the{" "}
          <Link to="/fitdesk-app" className="text-primary hover:underline">
            FitDesk app
          </Link>
          .
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">What each person can do</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.who} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{r.who}</h3>
              <ul className="mt-3 space-y-2">
                {r.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-xl border bg-muted/40 p-6 sm:p-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground">For swim schools and aquatic centres</h2>
          <p className="mt-2 text-muted-foreground">
            The app is part of SwimDesk, which runs learn-to-swim, school swimming programs and squads, with AI retention
            alerts.
          </p>
          <Link to="/solutions/swimdesk" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            See SwimDesk
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">For gyms and seniors programs</h2>
          <p className="mt-2 text-muted-foreground">
            Trainers and fitness directors use the app with FitDesk for screening, assessments, workout programming and
            progress reports.
          </p>
          <Link to="/solutions/fitdesk" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            See FitDesk
          </Link>
        </div>
      </section>

      <section id="help" className="mt-16 max-w-3xl scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Help and questions</h2>
        <div className="mt-6 divide-y rounded-xl border">
          {help.map((h) => (
            <details key={h.q} className="p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{h.q}</summary>
              <p className="mt-2 text-muted-foreground">{h.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Still stuck? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>{" "}
          or call 1300 181 665, Monday to Friday 7am to 7pm AEST.
        </p>
      </section>

      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Give your team and families one app</h2>
        <p className="mx-auto mt-2 max-w-2xl opacity-90">
          GreeneDesk is an Australian company working with leisure centres since 2013. Australian customer data stays in Australia.
        </p>
        <Link to="/demo" className="mt-6 inline-flex items-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
          Book a Demo
        </Link>
      </section>
    </main>
    </Layout>
  );
}
