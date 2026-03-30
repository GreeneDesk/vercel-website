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
        title="Compare GreeneDesk vs Udio, Mindbody, SimplySwim"
        description="Transparent feature-by-feature comparison of GreeneDesk against Udio, Mindbody, and SimplySwim for swim schools, gyms, and aquatic centres in Australia."
        canonical="/compare"
      />
      <Breadcrumbs items={[{ label: "Compare" }]} />

      <ComparisonTable />
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
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Compare;
