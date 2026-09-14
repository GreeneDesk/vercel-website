import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CompetitorDisclaimer } from "@/components/shared/CompetitorDisclaimer";
import { PageFaqs, type PageFaq } from "@/components/shared/PageFaqs";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, KeyRound, MapPin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const trustPoints = [
  { icon: ShieldCheck, text: "No management-system replacement" },
  { icon: KeyRound, text: "Customer-authorised API connection" },
  { icon: MapPin, text: "Customer data hosted on AWS Sydney" },
];

const perfectGymScope = [
  "Membership and contract management",
  "Billing and payments",
  "Access control and check-ins",
  "Core member administration",
  "Front-desk workflows",
];

const fitDeskScope = [
  "Digital health consultations and assessments",
  "Workout programming",
  "Exercise video library",
  "Trainer and resource scheduling",
  "Member progress and goals",
  "Milestone and engagement workflows",
  "Member and trainer apps",
];

const steps = [
  "Your facility authorises the connection.",
  "Your facility securely supplies the required PerfectGym API credentials.",
  "GreeneDesk configures FitDesk for your facility's approved integration scope.",
  "Your team continues using PerfectGym for core management and FitDesk for program delivery and engagement.",
];

const reasons = [
  "Give trainers tools designed for the gym floor",
  "Replace paper assessments and disconnected records",
  "Build and assign structured workout programs",
  "Give members mobile access to programs and progress",
  "Schedule trainers, appointments and resources",
  "Trigger consistent milestone and engagement workflows",
  "Keep customer data hosted in Australia",
];

const faqs: PageFaq[] = [
  {
    question: "Is FitDesk an official PerfectGym partner?",
    answer:
      "No. FitDesk is an independent software platform that connects through PerfectGym's available API when authorised by the facility. No sponsorship, certification or affiliation is implied.",
  },
  {
    question: "Do we need to replace PerfectGym?",
    answer:
      "No. PerfectGym can remain responsible for memberships, billing, access and core member administration.",
  },
  {
    question: "How is FitDesk connected?",
    answer:
      "The facility authorises the integration and securely supplies the required API credentials. GreeneDesk configures the connection according to the agreed implementation scope.",
  },
  {
    question: "What information is synchronised?",
    answer:
      "The available scope depends on the facility's PerfectGym environment, API access and implementation requirements. GreeneDesk confirms the exact data scope during onboarding.",
  },
  {
    question: "Where is GreeneDesk customer data hosted?",
    answer: "GreeneDesk customer data is hosted in Australia on AWS Sydney.",
  },
];

const PerfectGymIntegration = () => {
  return (
    <Layout>
      <SEO
        title="PerfectGym Add-On for Programming & Engagement | FitDesk"
        description="Keep PerfectGym for memberships, billing and access. Add FitDesk for assessments, workout programming, trainer scheduling and member engagement."
        canonical="/integrations/perfectgym"
        faq={faqs}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FitDesk by GreeneDesk",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "FitDesk adds digital assessments, workout programming, trainer scheduling, progress tracking and member engagement alongside PerfectGym through an independent, customer-authorised API connection.",
          provider: { "@type": "Organization", name: "GreeneDesk", url: "https://greenedesk.com.au" },
          areaServed: [
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "New Zealand" },
          ],
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "AUD" },
        }}
      />
      <Breadcrumbs
        items={[{ label: "Integrations", href: "/integrations" }, { label: "PerfectGym Integration" }]}
      />

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
              Independent API integration
            </p>
            <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-5">
              Complete your PerfectGym setup with{" "}
              <span className="text-gradient-primary">FitDesk</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-7">
              Keep PerfectGym at the centre of membership, billing and access. FitDesk independently
              connects through the PerfectGym API to add deeper tools for trainers, programs and
              member engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="cta"
                size="lg"
                className="md:h-14 md:px-8 md:text-base"
                asChild
                onClick={() => trackEvent("perfectgym_cta_click", { cta: "see-fitdesk-with-perfectgym" })}
              >
                <Link to="/demo?source=perfectgym-integration">
                  See FitDesk with PerfectGym
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="md:h-14 md:px-8 md:text-base"
                asChild
                onClick={() => trackEvent("perfectgym_cta_click", { cta: "discuss-your-integration" })}
              >
                <Link to="/contact">Discuss your integration</Link>
              </Button>
            </div>
          </motion.div>

          <ul className="grid sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
            {trustPoints.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4"
              >
                <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What each system does */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            What each system does
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-background p-8">
              <h3 className="font-display text-xl font-bold mb-5">PerfectGym</h3>
              <ul className="space-y-3">
                {perfectGymScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-background p-8">
              <h3 className="font-display text-xl font-bold mb-5">FitDesk</h3>
              <ul className="space-y-3">
                {fitDeskScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-8">
            Your existing PerfectGym setup remains in place. FitDesk adds operational capabilities
            around program delivery, trainers and the member experience.
          </p>
        </div>
      </section>

      {/* How the integration works */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            How the integration works
          </h2>
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 rounded-xl border border-border p-6">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-muted-foreground pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why add FitDesk */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            Why add FitDesk?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageFaqs heading="PerfectGym integration questions" faqs={faqs} />

      <RelatedPages
        heading="Related pages"
        pages={[
          { title: "FitDesk", description: "Fitness operations and member engagement software", href: "/solutions/fitdesk" },
          { title: "Mywellness alternative", description: "Replace Mywellness while keeping PerfectGym", href: "/technogym-mywellness-alternative" },
          { title: "Australian data residency", description: "Customer data stored in Australia using AWS infrastructure", href: "/data-residency" },
        ]}
      />

      {/* Closing CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Complete your PerfectGym setup
          </h2>
          <Button
            variant="secondary"
            size="xl"
            asChild
            onClick={() => trackEvent("perfectgym_cta_click", { cta: "book-a-fitdesk-demo" })}
          >
            <Link to="/demo?source=perfectgym-integration">
              Book a FitDesk Demo
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CompetitorDisclaimer />
    </Layout>
  );
};

export default PerfectGymIntegration;
