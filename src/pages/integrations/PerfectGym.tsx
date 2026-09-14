import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CompetitorDisclaimer } from "@/components/shared/CompetitorDisclaimer";
import { FitDeskGapSection } from "@/components/sections/FitDeskGapSection";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const dataFlow = [
  "Member and membership records synchronised through a customer-authorised API connection",
  "Check-in and membership status available to FitDesk trainer workflows",
  "No duplicate member entry for reception or fitness staff",
  "PerfectGym remains the source of truth for memberships, billing and access",
];

const fitdeskAdds = [
  "Digital health consultations and PARQ assessments",
  "Workout programming from a 4,000+ exercise video library",
  "Trainer, service and resource scheduling",
  "Member goals, progress tracking and milestone follow-ups",
  "Trainer and member mobile apps",
  "Engagement and retention workflows for the fitness floor",
];

const PerfectGymIntegration = () => {
  return (
    <Layout>
      <SEO
        title="FitDesk with PerfectGym – Independent Integration"
        description="Complete your PerfectGym setup with FitDesk: Australian-hosted assessments, workout programming, trainer scheduling and member engagement via a customer-authorised API connection."
        canonical="/integrations/perfectgym"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FitDesk by GreeneDesk",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "FitDesk adds assessments, workout programming, trainer scheduling, progress tracking and member engagement alongside PerfectGym through an independent customer-authorised API connection.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: [
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "New Zealand" },
          ],
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "AUD" },
        }}
      />
      <Breadcrumbs
        items={[{ label: "Integrations", href: "/integrations" }, { label: "PerfectGym" }]}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Independent integration
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete your PerfectGym setup with{" "}
              <span className="text-gradient-primary">FitDesk</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Keep PerfectGym for memberships, billing and access. FitDesk works alongside it,
              adding Australian-hosted assessments, workout programming, trainer scheduling,
              progress tracking and member engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/technogym-mywellness-alternative">Replace Mywellness instead?</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Customer-authorised API connection · Data hosted on AWS Sydney · AU-based support
            </p>
          </motion.div>
        </div>
      </section>

      <FitDeskGapSection />

      <section className="section-padding bg-surface-section">
        <div className="container-wide grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="font-display text-2xl font-bold mb-5">How the connection works</h2>
            <ul className="space-y-3">
              {dataFlow.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="font-display text-2xl font-bold mb-5">What FitDesk adds</h2>
            <ul className="space-y-3">
              {fitdeskAdds.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Explore FitDesk"
        pages={[
          { title: "FitDesk", description: "Fitness operations and member engagement software", href: "/solutions/fitdesk" },
          { title: "Mywellness alternative", description: "Replace Mywellness while keeping PerfectGym", href: "/technogym-mywellness-alternative" },
          { title: "Australian data residency", description: "Customer data hosted on AWS Sydney", href: "/data-residency" },
        ]}
      />

      <CompetitorDisclaimer />
    </Layout>
  );
};

export default PerfectGymIntegration;
