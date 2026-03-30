import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQSection } from "@/components/sections/FAQSection";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <Layout>
      <SEO
        title="Pricing – Plans for Swim Schools, Gyms & Sports Centres"
        description="Transparent pricing for SwimDesk, FitDesk, and SportDesk. Plans from A$144/month. No hidden fees, no per-transaction charges. All data hosted in Australia."
        canonical="/pricing"
        faq={[
          { question: "How much does GreeneDesk cost?", answer: "Pricing is based on enrolment or membership volume. SwimDesk starts from A$144/month (annual) for up to 300 students. FitDesk starts from A$254/month (annual)." },
          { question: "Is there a free trial?", answer: "Yes. SwimDesk offers a 15-day free trial with no credit card required." },
          { question: "Where is my data stored?", answer: "All data is hosted exclusively on AWS Sydney (ap-southeast-2) in Australia." },
          { question: "Are there setup fees?", answer: "No hidden setup fees. All plans include onboarding support, data migration, and training." },
        ]}
      />
      <Breadcrumbs items={[{ label: "Pricing" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Simple, transparent{" "}
                <span className="text-gradient-primary">pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Pay for what you use. No per-transaction fees. No surprise invoices. All pricing in AUD.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <PricingCards />
      <TrustBanner />
      <FAQSection />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
