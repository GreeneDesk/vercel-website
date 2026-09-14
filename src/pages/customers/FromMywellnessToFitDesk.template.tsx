/**
 * UNPUBLISHED CUSTOMER STORY TEMPLATE — DO NOT ROUTE UNTIL APPROVED.
 *
 * Proposed URL: /customers/from-mywellness-to-fitdesk
 * Proposed title: "How [Customer] Replaced Mywellness with FitDesk While Keeping PerfectGym"
 *
 * Publishing rules:
 * - Publish only with the named customer's written approval of every claim and quotation.
 * - Never publish invented metrics, anonymous numerical outcomes or placeholder testimonials.
 * - Replace every [BRACKETED] field with approved content, delete anything unapproved,
 *   then add the route in src/App.tsx and the URL to public/sitemap.xml.
 * - Competitor names in plain text only. No competitor logos or branded screenshots.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CompetitorDisclaimer } from "@/components/shared/CompetitorDisclaimer";
import { ArrowRight } from "lucide-react";

const story = {
  customer: "[CUSTOMER NAME]",
  facility: "[FACILITY TYPE AND LOCATION]",
  previousStack: "[PREVIOUS TECHNOLOGY STACK]",
  reasonsForChanging: ["[REASON 1]", "[REASON 2]", "[REASON 3]"],
  migrationScope: "[WHAT WAS MIGRATED AND WHAT WAS NOT]",
  implementation: "[IMPLEMENTATION PROCESS AND TIMELINE AS CONFIRMED BY THE CUSTOMER]",
  staffAdoption: "[STAFF ADOPTION — TRAINING, TOOLS, DAY-TO-DAY USE]",
  memberAdoption: "[MEMBER ADOPTION — APP USE, ENGAGEMENT, FEEDBACK]",
  results: ["[APPROVED, CUSTOMER-VERIFIED RESULT 1]", "[APPROVED RESULT 2]"],
  quote: {
    text: "[APPROVED CUSTOMER QUOTATION]",
    name: "[NAME]",
    role: "[ROLE, ORGANISATION]",
  },
};

const FromMywellnessToFitDesk = () => {
  return (
    <Layout>
      <SEO
        title={`How ${story.customer} Replaced Mywellness with FitDesk While Keeping PerfectGym`}
        description={`${story.customer} moved workout programming, assessments and member engagement to FitDesk while keeping PerfectGym for memberships, billing and access.`}
        canonical="/customers/from-mywellness-to-fitdesk"
      />
      <Breadcrumbs
        items={[
          { label: "Customers", href: "/customers" },
          { label: `${story.customer} customer story` },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide max-w-3xl space-y-10">
          <header>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Customer story
            </p>
            <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl font-bold">
              How {story.customer} replaced Mywellness with FitDesk while keeping PerfectGym
            </h1>
            <p className="mt-4 text-muted-foreground">{story.facility}</p>
          </header>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">The previous setup</h2>
            <p className="text-muted-foreground">{story.previousStack}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Why they changed</h2>
            <ul className="space-y-2 text-muted-foreground">
              {story.reasonsForChanging.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Migration scope</h2>
            <p className="text-muted-foreground">{story.migrationScope}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Implementation</h2>
            <p className="text-muted-foreground">{story.implementation}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Staff and member adoption</h2>
            <p className="text-muted-foreground mb-3">{story.staffAdoption}</p>
            <p className="text-muted-foreground">{story.memberAdoption}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold mb-3">Results</h2>
            <ul className="space-y-2 text-muted-foreground">
              {story.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </section>

          <blockquote className="rounded-2xl border-l-4 border-primary bg-surface-section p-6">
            <p className="text-lg">{story.quote.text}</p>
            <footer className="mt-3 text-sm text-muted-foreground">
              {story.quote.name} — {story.quote.role}
            </footer>
          </blockquote>

          <div className="rounded-2xl bg-surface-section p-8 text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Considering a similar move?
            </h2>
            <Button asChild variant="cta" size="xl">
              <Link to="/demo?source=mywellness-alternative">
                Discuss Your Migration
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CompetitorDisclaimer />
    </Layout>
  );
};

export default FromMywellnessToFitDesk;
