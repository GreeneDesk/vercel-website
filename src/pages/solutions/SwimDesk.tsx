import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Waves,
  ClipboardCheck,
  GraduationCap,
  Users,
  DollarSign,
  Calendar,
  Smartphone,
  Award,
  Check,
  Zap
} from "lucide-react";

const parentFeatures = [
  "Book and reschedule classes",
  "Report absences",
  "Track progress",
  "Receive digital certificates",
];

const instructorFeatures = [
  "Mark attendance",
  "Track skills",
  "Manage classes from mobile",
];

const managementFeatures = [
  "Pool and lane scheduling",
  "Payments and discounts",
  "Reporting and insights",
];

const schoolFeatures = [
  "Book schools into schedules",
  "Manage large student groups",
  "Track skills and progress",
  "Send structured reports",
];

const SwimDesk = () => {
  return (
    <Layout>
      <SEO
        title="SwimDesk – Swim School Management Software"
        description="The complete operating system for swim schools and aquatic centres. Booking, attendance, skills tracking, certificates, and parent apps."
        canonical="/solutions/swimdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SwimDesk",
          "description": "The complete operating system for swim schools and aquatic centres. Parent booking, attendance, skills tracking, digital certificates, and payments.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Swim School Management Software"
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/swimdesk" }, { label: "SwimDesk" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Waves className="h-4 w-4" />
                Swim School Management
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The complete operating system for{" "}
                <span className="text-gradient-primary">swim schools and aquatic centres</span>
              </h1>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parent Experience */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Parent Experience
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {parentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Experience */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Instructor Experience
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {instructorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Management
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {managementFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Programs */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              School Programs
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {schoolFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages
        heading="Explore Related Solutions"
        pages={[
          { title: "School Programs", description: "End-to-end management for school swimming programs", href: "/solutions/school-programs" },
          { title: "Squads", description: "Squad progression and competitive program management", href: "/solutions/squads" },
          { title: "FitDesk", description: "Gym and leisure centre operations platform", href: "/solutions/fitdesk" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Run your swim school with complete visibility
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

export default SwimDesk;
