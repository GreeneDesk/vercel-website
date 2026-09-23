import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Camera,
  Check,
  ExternalLink,
  EyeOff,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

const pageTitle = "SooperVision | AI Childcare Supervision Alerts | Delivered by GreeneDesk";
const pageDescription =
  "SooperVision: AI supervision risk alerts for Australian childcare centres on existing CCTV. Delivered and supported in Australia by GreeneDesk.";
const pageUrl = "https://greenedesk.com.au/solutions/soopervision";

const services = [
  "Childcare centres",
  "OSHC providers",
  "Councils or leisure operators that run childcare or OSHC services",
];

const detections = [
  "Unattended children",
  "Gates left open",
  "Fence-line risks",
  "Climbable objects near fences",
  "Room headcounts",
  "Child-to-educator ratio breaches",
];

const reasons = [
  "Australian company supporting centres since 2010",
  "Local deployment and support",
  "Pilot at one centre before wider rollout",
  "Pricing quoted per centre",
];

const faqs = [
  {
    question: "Does it use facial recognition?",
    answer: "No. SooperVision does not use facial recognition.",
  },
  {
    question: "Is video stored in the cloud?",
    answer: "No. Video is processed locally, with no cloud video storage.",
  },
  {
    question: "Can we pilot at one centre?",
    answer: "Yes. GreeneDesk can support a pilot at one centre before wider rollout.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SooperVision AI Childcare Supervision Alerts",
    description: pageDescription,
    provider: {
      "@type": "Organization",
      name: "GreeneDesk Pty Ltd",
      url: "https://greenedesk.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "AI childcare supervision risk alerts",
    url: pageUrl,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

const SooperVision = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en-AU" }}>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="GreeneDesk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {jsonLd.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/council" }, { label: "SooperVision" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <ShieldCheck className="h-4 w-4" />
                Delivered by GreeneDesk
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                SooperVision: AI Supervision Alerts for Childcare Centres
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                SooperVision is an AI safety layer that detects supervision risks in real time using a centre's existing CCTV, with no new cameras and no cloud video storage. GreeneDesk delivers and supports it in Australia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <a href="https://soopervision.com.au/" target="_blank" rel="noopener">
                    Visit SooperVision.com.au
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="https://soopervision.com.au/contact" target="_blank" rel="noopener">
                    Request a live demo
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-border bg-background p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold mb-4">For services that care for children</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-background p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold mb-4">What it detects</h2>
              <ul className="space-y-3">
                {detections.map((detection) => (
                  <li key={detection} className="flex gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{detection}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground flex gap-2">
                <EyeOff className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                Alert snapshots have faces blurred.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-xl border border-border bg-background p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <Camera className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="font-display text-xl font-bold mb-4">Why GreeneDesk</h2>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Supports active supervision</h2>
            <p className="text-lg text-muted-foreground">
              SooperVision supports, and never replaces, active supervision by educators.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">SooperVision FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">See SooperVision in action</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button variant="cta" size="xl" asChild>
                <a href="https://soopervision.com.au/contact" target="_blank" rel="noopener">
                  Request a live demo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a href="tel:1300181665" className="inline-flex items-center gap-2 text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                <Phone className="h-4 w-4" />
                1300 181 665
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <a href="https://soopervision.com.au/tools/educator-to-child-ratio-calculator" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-text-on-dark hover:underline">
                Educator-to-child ratio calculator
                <ExternalLink className="h-4 w-4" />
              </a>
              <a href="https://soopervision.com.au/tools/qa2-supervision-self-audit-checklist" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-text-on-dark hover:underline">
                QA2 supervision self-audit checklist
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SooperVision;