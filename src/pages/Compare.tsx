import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Compare = () => {
  return (
    <Layout>
      <SEO
        title="Compare GreeneDesk vs Udio, Mindbody, SimplySwim & Mywellness"
        description="Feature-by-feature comparison of GreeneDesk against Udio, Mindbody and SimplySwim, plus how FitDesk compares as a Mywellness software alternative."
        canonical="/compare"
      />
      <Breadcrumbs items={[{ label: "Compare" }]} />

      <section className="pt-10 md:pt-14">
        <div className="container-wide max-w-3xl">
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-4">
            Compare GreeneDesk with the{" "}
            <span className="text-gradient-primary">alternatives</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Honest comparisons for swim schools, gyms, leisure centres and aquatic facilities across
            Australia and New Zealand.
          </p>
        </div>
      </section>

      <ComparisonTable />

      {/* Fourth comparison option */}
      <section className="pb-12 md:pb-16">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary bg-surface-section p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">FitDesk vs Mywellness</h2>
              <p className="text-muted-foreground max-w-2xl">
                Considering an Australian-hosted alternative to Technogym Mywellness software? See
                FitDesk's verified capabilities, migration considerations and the "Replace
                Mywellness. Keep PerfectGym." proposition.
              </p>
            </div>
            <Button asChild className="mt-6 md:mt-0 flex-shrink-0">
              <Link to="/technogym-mywellness-alternative">
                Explore the Mywellness alternative
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to see the difference?
            </h2>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/demo">
                Book a Demo
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Compare;
