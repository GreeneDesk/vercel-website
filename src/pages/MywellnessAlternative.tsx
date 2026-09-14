import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CompetitorDisclaimer } from "@/components/shared/CompetitorDisclaimer";
import { FitDeskCapabilities } from "@/components/sections/FitDeskCapabilities";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const reasons = [
  "Customer data hosted exclusively on AWS Sydney, in Australia",
  "AU-based support team during Australian business hours",
  "Assessments, programming and engagement in a single platform",
  "Works alongside PerfectGym through a customer-authorised API connection",
  "Built for council leisure centres, multi-site operators and aquatic and recreation facilities",
  "Active-ageing, community wellness and exercise-based rehabilitation workflows",
];

const migration = [
  "Review current programming, assessment and member-engagement workflows",
  "Map member records and program templates into FitDesk",
  "Configure trainer scheduling, services and assessment forms",
  "Train fitness staff on the trainer app and programming tools",
  "Move members onto the GreeneDesk member app",
];

const MywellnessAlternative = () => {
  return (
    <Layout>
      <SEO
        title="Mywellness Alternative – Australian-Hosted FitDesk"
        description="Looking for a Mywellness alternative? FitDesk delivers Australian-hosted assessments, workout programming and member engagement while you keep PerfectGym as your core system."
        canonical="/technogym-mywellness-alternative"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "FitDesk by GreeneDesk",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "FitDesk is an Australian-hosted alternative to Mywellness software for assessments, workout programming, trainer scheduling, progress tracking and member engagement.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: [
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "New Zealand" },
          ],
          offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "AUD" },
        }}
      />
      <Breadcrumbs items={[{ label: "Mywellness alternative" }]} />

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
              Mywellness alternative
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Replace Mywellness while{" "}
              <span className="text-gradient-primary">keeping PerfectGym</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Move programming, assessments and member engagement to an Australian-hosted platform
              while retaining PerfectGym as your core management system.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              This concerns Mywellness software, not Technogym fitness equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/integrations/perfectgym">See FitDesk with PerfectGym</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-section">
        <div className="container-wide grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="font-display text-2xl font-bold mb-5">
              Why centres consider the change
            </h2>
            <ul className="space-y-3">
              {reasons.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <h2 className="font-display text-2xl font-bold mb-5">How a migration runs</h2>
            <ol className="space-y-3">
              {migration.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FitDeskCapabilities />

      <RelatedPages
        heading="Related pages"
        pages={[
          { title: "FitDesk", description: "Fitness operations and member engagement software", href: "/solutions/fitdesk" },
          { title: "FitDesk with PerfectGym", description: "Independent customer-authorised API integration", href: "/integrations/perfectgym" },
          { title: "Australian data residency", description: "Customer data hosted on AWS Sydney", href: "/data-residency" },
        ]}
      />

      <CompetitorDisclaimer />
    </Layout>
  );
};

export default MywellnessAlternative;
