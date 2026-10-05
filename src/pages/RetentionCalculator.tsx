// Retention calculator page: /retention-calculator  (also /retention-calculator?type=fitness)
// Self-contained: React + react-router-dom + Tailwind (shadcn theme tokens). No extra packages.
// Paste this file in the Lovable code editor, then add the route (see the change pack).

import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

type Mode = "swim" | "fitness";

const aud = (n: number) =>
  n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
const whole = (n: number) => Math.round(n).toLocaleString("en-AU");
const oneDp = (n: number) => (Math.round(n * 10) / 10).toLocaleString("en-AU");

const PAGE_TITLE = "Swim School & Gym Retention Calculator | GreeneDesk";
const PAGE_DESC =
  "Free retention calculator for swim schools, leisure centres and gyms. See how many students or members you lose each year, what it costs, and what a small lift in retention is worth.";
const CANONICAL = "https://greenedesk.com.au/retention-calculator";

const faqs = [
  {
    q: "What is a good re-enrolment rate for a swim school?",
    a: "It varies with age group, term length and location, so the best benchmark is your own rate last year. Track it term by term and work on the reasons families leave between terms: missed lessons, slow progress between levels and poor communication.",
  },
  {
    q: "How is member churn calculated?",
    a: "Monthly churn is the number of members who cancelled during the month divided by the number of active members at the start of that month. For swim schools, use 100% minus your term-to-term re-enrolment rate.",
  },
  {
    q: "How does this calculator estimate revenue kept?",
    a: "It multiplies the extra members kept each year by your fee and by half the billing periods in a year, assuming saves happen evenly through the year so each kept member pays for about half a year more. It is an estimate, not a forecast.",
  },
  {
    q: "How can software improve retention?",
    a: "By spotting members at risk early. GreeneDesk's AI retention alerts flag students and members whose attendance drops or whose progress stalls, so your team can contact them before they leave.",
  },
];

function NumberField(props: {
  id: string;
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  const { id, label, hint, value, onChange, min = 0, max, step = 1, prefix, suffix } = props;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
        {prefix && <span className="pl-3 text-sm text-muted-foreground">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className="w-full bg-transparent px-3 py-2 text-base outline-none"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (Number.isNaN(v)) return onChange(0);
            onChange(Math.min(max ?? v, Math.max(min, v)));
          }}
        />
        {suffix && <span className="pr-3 text-sm text-muted-foreground">{suffix}</span>}
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Stat({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg border p-4 ${highlight ? "border-primary bg-primary/5" : "bg-card"}`}>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={`mt-1 text-2xl font-semibold ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

export default function RetentionCalculator() {
  const [params, setParams] = useSearchParams();
  const mode: Mode = params.get("type") === "fitness" ? "fitness" : "swim";
  const setMode = (m: Mode) => setParams(m === "fitness" ? { type: "fitness" } : {}, { replace: true });

  // Swim school inputs (example values; replace with your own)
  const [students, setStudents] = useState(600);
  const [termFee, setTermFee] = useState(240);
  const [terms, setTerms] = useState(4);
  const [reenrol, setReenrol] = useState(75);
  const [swimLift, setSwimLift] = useState(5);

  // Fitness / active ageing inputs (example values; replace with your own)
  const [members, setMembers] = useState(1200);
  const [monthlyFee, setMonthlyFee] = useState(70);
  const [churn, setChurn] = useState(4);
  const [fitLift, setFitLift] = useState(0.5);

  const r = useMemo(() => {
    const isSwim = mode === "swim";
    const base = isSwim ? students : members;
    const fee = isSwim ? termFee : monthlyFee;
    const periods = isSwim ? terms : 12;
    const lossRate = isSwim ? Math.max(0, 100 - reenrol) / 100 : churn / 100;
    const lift = Math.min((isSwim ? swimLift : fitLift) / 100, lossRate);
    const newLossRate = Math.max(lossRate - lift, 0.0001);

    const lostPerYear = base * lossRate * periods;
    const keptPerYear = base * lift * periods;
    const revenueKept = keptPerYear * fee * (periods / 2);
    const lifetimeNow = lossRate > 0 ? 1 / lossRate : 0; // periods
    const lifetimeNew = 1 / newLossRate;
    const ltvNow = lifetimeNow * fee;
    const ltvNew = lifetimeNew * fee;
    return { isSwim, lostPerYear, keptPerYear, revenueKept, lifetimeNow, lifetimeNew, ltvNow, ltvNew, periods, fee };
  }, [mode, students, termFee, terms, reenrol, swimLift, members, monthlyFee, churn, fitLift]);

  useEffect(() => {
    document.title = PAGE_TITLE;
    const setMeta = (sel: string, attr: string, key: string, content: string) => {
      let el = document.head.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', "name", "description", PAGE_DESC);
    setMeta('meta[property="og:title"]', "property", "og:title", PAGE_TITLE);
    setMeta('meta[property="og:description"]', "property", "og:description", PAGE_DESC);
    setMeta('meta[property="og:url"]', "property", "og:url", CANONICAL);

    let canon = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = CANONICAL;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "retention-calculator-ld";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          name: "Swim School & Gym Retention Calculator",
          url: CANONICAL,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
          publisher: { "@type": "Organization", name: "GreeneDesk", url: "https://greenedesk.com.au" },
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    });
    document.getElementById("retention-calculator-ld")?.remove();
    document.head.appendChild(ld);
    return () => ld.remove();
  }, []);

  const unit = r.isSwim ? "students" : "members";
  const period = r.isSwim ? "terms" : "months";

  return (
    <Layout>
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <p className="text-sm font-medium text-primary">Free tool</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Swim school and gym retention calculator
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        See how many {unit} you lose each year, what it costs, and what a small lift in retention is worth to your
        centre.
      </p>

      <div className="mt-8 inline-flex rounded-lg border bg-muted p-1" role="tablist" aria-label="Centre type">
        {(
          [
            ["swim", "Swim school"],
            ["fitness", "Gym, active ageing or rehab"],
          ] as [Mode, string][]
        ).map(([m, label]) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              mode === m ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <section aria-label="Your numbers" className="space-y-4 rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold">Your numbers</h2>
          {r.isSwim ? (
            <>
              <NumberField id="students" label="Students enrolled" value={students} onChange={setStudents} step={10} />
              <NumberField id="termFee" label="Average fee per term" prefix="$" value={termFee} onChange={setTermFee} step={5} />
              <NumberField id="terms" label="Terms per year" value={terms} onChange={setTerms} min={1} max={12} />
              <NumberField
                id="reenrol"
                label="Term-to-term re-enrolment rate"
                suffix="%"
                value={reenrol}
                onChange={setReenrol}
                max={100}
                hint="Share of students who come back next term."
              />
              <NumberField
                id="swimLift"
                label="Improvement in re-enrolment"
                suffix="pts"
                value={swimLift}
                onChange={setSwimLift}
                step={0.5}
                max={50}
                hint="For example, 75% to 80% is 5 points."
              />
            </>
          ) : (
            <>
              <NumberField id="members" label="Active members or participants" value={members} onChange={setMembers} step={10} />
              <NumberField id="monthlyFee" label="Average fee per month" prefix="$" value={monthlyFee} onChange={setMonthlyFee} step={5} />
              <NumberField
                id="churn"
                label="Monthly churn"
                suffix="%"
                value={churn}
                onChange={setChurn}
                step={0.1}
                max={100}
                hint="Members who cancel each month, as a share of active members."
              />
              <NumberField
                id="fitLift"
                label="Reduction in monthly churn"
                suffix="pts"
                value={fitLift}
                onChange={setFitLift}
                step={0.1}
                max={50}
                hint="For example, 4% to 3.5% is 0.5 points."
              />
            </>
          )}
          <p className="text-xs text-muted-foreground">Starting values are examples. Replace them with your own.</p>
        </section>

        <section aria-label="Results" aria-live="polite" className="space-y-4">
          <Stat
            highlight
            label="Revenue kept in the first year"
            value={aud(r.revenueKept)}
            sub={`From ${whole(r.keptPerYear)} more ${unit} kept each year`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat label={`${r.isSwim ? "Students" : "Members"} lost per year today`} value={whole(r.lostPerYear)} />
            <Stat label={`${r.isSwim ? "Students" : "Members"} kept with better retention`} value={whole(r.keptPerYear)} />
            <Stat
              label="Average stay today"
              value={`${oneDp(r.lifetimeNow)} ${period}`}
              sub={`Worth ${aud(r.ltvNow)} per ${r.isSwim ? "student" : "member"}`}
            />
            <Stat
              label="Average stay with better retention"
              value={`${oneDp(r.lifetimeNew)} ${period}`}
              sub={`Worth ${aud(r.ltvNew)} per ${r.isSwim ? "student" : "member"}`}
            />
          </div>
          <div className="rounded-xl border bg-muted/40 p-5">
            <p className="font-medium text-foreground">Catch the ones about to leave</p>
            <p className="mt-1 text-sm text-muted-foreground">
              GreeneDesk's AI retention alerts flag {unit} whose attendance drops or progress stalls, so your team can
              reach out before they cancel.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Book a Demo
              </Link>
              <Link
                to={r.isSwim ? "/solutions/swimdesk" : "/active-ageing-rehab-software"}
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                {r.isSwim ? "See SwimDesk" : "See FitDesk for active ageing"}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-14 max-w-3xl space-y-3">
        <h2 className="text-2xl font-semibold">How the calculator works</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            <strong className="text-foreground">Lost per year</strong> = {unit} × loss rate per {r.isSwim ? "term" : "month"} ×{" "}
            {period} per year. For swim schools the loss rate is 100% minus your re-enrolment rate.
          </li>
          <li>
            <strong className="text-foreground">Kept per year</strong> = {unit} × your improvement × {period} per year.
          </li>
          <li>
            <strong className="text-foreground">Revenue kept in the first year</strong> = kept per year × fee × half the{" "}
            {period} in a year, assuming saves happen evenly through the year.
          </li>
          <li>
            <strong className="text-foreground">Average stay</strong> = 1 ÷ loss rate, in {period}. Lifetime value = average
            stay × fee.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          This is an estimate to help you size the opportunity, not a forecast. Fees are in AUD.
        </p>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">Retention questions</h2>
        <div className="mt-4 divide-y rounded-xl border">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-foreground">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
    </Layout>
  );
}
