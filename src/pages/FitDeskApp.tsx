// FitDesk member app page. Route: /fitdesk-app
// Used as the Marketing URL and Support URL (#help) on the App Store and Google Play.
// Needs src/lib/seo.ts (already in the project from the guides update).

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { usePageMeta, SITE_URL } from "@/lib/seo";

const IOS = "https://apps.apple.com/au/app/fitdesk/id6744887528";
const ANDROID = "https://play.google.com/store/apps/details?id=www.mygreenedesk.com.fitdesk";
const SUPPORT_EMAIL = "support@greenedesk.com"; // use the same email as both store listings
const PATH = "/fitdesk-app";

const TITLE = "FitDesk App: Gym and Seniors Fitness | GreeneDesk";
const DESC =
  "The FitDesk app for members of gyms, leisure centres and seniors programs: your trainer's workout program, exercise videos, workout log, progress charts and trainer chat.";

const features = [
  { title: "Your program, set by your trainer", body: "See the workouts your trainer has set for you, ready when you arrive at the gym." },
  { title: "A video for every exercise", body: "Short videos show each exercise so you know you're doing it right." },
  { title: "Log sets, reps and weight", body: "Record every session in a few taps, including cardio such as walking, cycling or rowing." },
  { title: "Track your progress", body: "Charts for body weight, measurements and strength show how far you've come." },
  { title: "Message your trainer", body: "Ask a question or get a program change without waiting for your next visit." },
  { title: "Reminders", body: "Get reminders for scheduled workouts so you don't miss a session." },
];

const help = [
  {
    q: "How do I sign in to the FitDesk app?",
    a: "Use the sign-in details your gym or leisure centre gave you. FitDesk accounts are created by your centre, so you can't sign up on your own. If you haven't received your details, ask the staff at your centre.",
  },
  {
    q: "I forgot my password. What do I do?",
    a: "Ask the staff at your centre to reset it for you, or email us using the details below.",
  },
  {
    q: "Is the FitDesk app free?",
    a: "Yes. The app is free for members of centres that use FitDesk. Your centre pays for FitDesk.",
  },
  {
    q: "Which gyms use FitDesk?",
    a: "FitDesk is used by council leisure centres, gyms and seniors exercise programs across Australia and New Zealand. Ask your centre whether it uses FitDesk.",
  },
  {
    q: "Is FitDesk suitable for older adults?",
    a: "Yes. Many FitDesk centres run active ageing, strength and balance, and rehab programs. The app keeps things simple so members of any age can follow their program.",
  },
  {
    q: "Does FitDesk connect to my smartwatch or heart rate monitor?",
    a: "Not yet. Cardio sessions are logged manually in the app.",
  },
  {
    q: "Where is my data stored?",
    a: "Australian customer data stays in Australia, hosted on AWS in Sydney. New Zealand centres are also hosted in Sydney. Your centre controls your account.",
  },
  {
    q: "How do I delete my account?",
    a: `Ask your centre, or email ${SUPPORT_EMAIL} from the email address on your account and we'll delete your data.`,
  },
];

export default function FitDeskApp() {
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
          name: "FitDesk",
          alternateName: "FitDesk: Gym & Seniors Fitness",
          description: DESC,
          url: `${SITE_URL}${PATH}`,
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android",
          offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
          downloadUrl: [IOS, ANDROID],
          installUrl: [IOS, ANDROID],
          sameAs: [IOS, ANDROID],
          inLanguage: "en-AU",
          audience: { "@type": "Audience", audienceType: "Members of gyms, leisure centres and seniors exercise programs" },
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
            { "@type": "ListItem", position: 2, name: "FitDesk", item: `${SITE_URL}/solutions/fitdesk` },
            { "@type": "ListItem", position: 3, name: "FitDesk app", item: `${SITE_URL}${PATH}` },
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
        <p className="text-sm font-medium text-primary">FitDesk member app</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          The FitDesk app: your gym program in your pocket
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          For members of gyms, leisure centres and seniors exercise programs that use FitDesk. Follow the program your
          trainer sets, watch exercise videos, log your sessions and see your progress.
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
          Free for members. You'll need sign-in details from your centre.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">What you can do in the app</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 rounded-xl border bg-muted/40 p-6 sm:p-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Simple for every age</h2>
          <p className="mt-2 text-muted-foreground">
            Many FitDesk centres run active ageing, strength and balance, and rehab programs. Members follow the same
            program at home and at the centre, and trainers can see who is keeping up.
          </p>
          <Link to="/active-ageing-rehab-software" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            FitDesk for active ageing and rehab
          </Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Run a gym or leisure centre?</h2>
          <p className="mt-2 text-muted-foreground">
            The app is one part of FitDesk. Centres also get digital health screening, assessments, workout programming,
            trainer scheduling and emailed progress reports, alongside their existing membership system.
          </p>
          <Link to="/solutions/fitdesk" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            See FitDesk for centres
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
          Still stuck? Email <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a>{" "}
          or call 1300 181 665, Monday to Friday 7am to 7pm AEST.
        </p>
      </section>

      <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">Bring the FitDesk app to your members</h2>
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
