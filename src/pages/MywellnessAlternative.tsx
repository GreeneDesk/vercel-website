import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CompetitorDisclaimer } from "@/components/shared/CompetitorDisclaimer";
import { PageFaqs, type PageFaq } from "@/components/shared/PageFaqs";
import { motion } from "framer-motion";
import { ArrowRight, Check, Info, HelpCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const capabilities = [
  "Australian data hosting on AWS Sydney",
  "AU-based support",
  "Digital PARQ and health consultations",
  "Complete assessment and member history",
  "More than 4,000 exercises with instructional media",
  "Structured programs with sets, repetitions, tempo and rest",
  "Reusable program templates",
  "Trainer and resource scheduling",
  "Member and trainer apps",
  "Member goals, milestones and follow-ups",
  "Support for leisure centres, active ageing and rehabilitation programs",
];

const stages = [
  "Review the existing PerfectGym and Mywellness setup.",
  "Confirm the FitDesk workflow and integration scope.",
  "Plan approved data migration and staff onboarding.",
  "Launch FitDesk for trainers and members.",
];

const assessmentPoints = [
  "Australian data residency requirements",
  "Trainer scheduling requirements",
  "Assessment workflows",
  "Program-building depth",
  "Support arrangements",
  "Migration requirements",
  "PerfectGym integration",
  "Council and leisure-centre reporting needs",
];

const faqs: PageFaq[] = [
  {
    question: "Is FitDesk affiliated with Technogym?",
    answer:
      "No. GreeneDesk and FitDesk are independent of Technogym. References to Technogym and Mywellness are for product identification and comparative information only.",
  },
  {
    question: "Does FitDesk replace Technogym equipment?",
    answer:
      "This page concerns Mywellness software. FitDesk does not replace physical Technogym fitness equipment.",
  },
  {
    question: "Can we keep PerfectGym?",
    answer:
      "Yes. PerfectGym can remain the core membership, billing and access platform while FitDesk supports programming, assessments, trainer workflows and member engagement.",
  },
  {
    question: "Where is FitDesk data hosted?",
    answer: "GreeneDesk customer data is hosted in Australia on AWS Sydney.",
  },
  {
    question: "Can our existing information be migrated?",
    answer:
      "Migration depends on the information available from the existing system and the agreed project scope. GreeneDesk will review this before implementation.",
  },
];

const MywellnessAlternative = () => {
  return (
    <Layout>
      <SEO
        title="Technogym Mywellness Alternative for Leisure Centres | FitDesk"
        description="Explore FitDesk as an Australian-hosted alternative to Technogym Mywellness for workout programming, assessments and member engagement."
        canonical="/technogym-mywellness-alternative"
        faq={faqs}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FitDesk by GreeneDesk",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "FitDesk is an Australian-hosted platform for workout programming, digital assessments, trainer scheduling, progress tracking and member engagement, and can be used as an alternative to Technogym Mywellness software while retaining PerfectGym.",
          provider: { "@type": "Organization", name: "GreeneDesk", url: "https://greenedesk.com.au" },
          areaServed: [
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "New Zealand" },
          ],
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "AUD" },
        }}
      />
      <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: "Mywellness Alternative" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide relative py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-widest text-primary mb-5">
              Mywellness software alternative
            </p>
            <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-5">
              Replace Mywellness.{" "}
              <span className="text-gradient-primary">Keep PerfectGym.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-7">
              FitDesk gives leisure centres an Australian-hosted platform for digital assessments,
              workout programming, trainer scheduling, progress tracking and member
              engagement—while allowing PerfectGym to remain your core management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="cta"
                size="lg"
                className="md:h-14 md:px-8 md:text-base"
                asChild
                onClick={() => trackEvent("mywellness_cta_click", { cta: "discuss-your-move" })}
              >
                <Link to="/demo?source=mywellness-alternative">
                  Discuss your move from Mywellness
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="md:h-14 md:px-8 md:text-base"
                asChild
                onClick={() => trackEvent("mywellness_cta_click", { cta: "explore-fitdesk" })}
              >
                <Link to="/solutions/fitdesk">Explore FitDesk</Link>
              </Button>
            </div>

            <p className="flex items-start gap-3 rounded-xl border-l-4 border-accent bg-surface-section p-5 text-sm font-medium">
              <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
              This page concerns Technogym Mywellness software. FitDesk is not a replacement for
              Technogym fitness equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why facilities consider FitDesk */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            Why facilities consider FitDesk
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Migration */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 text-center">
            Move the member experience without replacing your management system
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Facilities using PerfectGym and Mywellness can evaluate moving their programming,
            assessment and member-engagement workflows to FitDesk while retaining PerfectGym for
            core administration.
          </p>
          <ol className="space-y-5">
            {stages.map((stage, i) => (
              <li key={stage} className="flex items-start gap-4 rounded-xl border border-border p-6">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-muted-foreground pt-1.5">{stage}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted-foreground mt-6">
            Available migration depends on the data supplied and the agreed project scope. GreeneDesk
            does not guarantee that all information held in an existing system can be migrated.
          </p>
        </div>
      </section>

      {/* What to assess */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
            What to assess before you change software
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Rather than publishing claims about another vendor's current features, we suggest
            reviewing these points against both platforms with your own requirements in hand.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {assessmentPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageFaqs heading="Mywellness alternative questions" faqs={faqs} />

      <RelatedPages
        heading="Related pages"
        pages={[
          { title: "FitDesk", description: "Fitness operations and member engagement software", href: "/solutions/fitdesk" },
          { title: "PerfectGym integration", description: "Independent, customer-authorised API connection", href: "/integrations/perfectgym" },
          { title: "Workout programming", description: "Australian-hosted workout programming software", href: "/platform/workout-programming" },
        ]}
      />

      {/* Closing CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Considering a move from Mywellness?
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            See how FitDesk can work alongside PerfectGym at your facility.
          </p>
          <Button
            variant="secondary"
            size="xl"
            asChild
            onClick={() => trackEvent("mywellness_cta_click", { cta: "discuss-your-migration" })}
          >
            <Link to="/demo?source=mywellness-alternative">
              Discuss Your Migration
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CompetitorDisclaimer />
    </Layout>
  );
};

export default MywellnessAlternative;
