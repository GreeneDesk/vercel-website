import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Trophy,
  Check,
  Timer,
  Target,
  ClipboardCheck,
  Dumbbell,
  Users
} from "lucide-react";

const features = [
  { icon: Users, text: "Squad scheduling and attendance" },
  { icon: Timer, text: "Heat creation and time tracking" },
  { icon: Target, text: "Qualifying benchmarks" },
  { icon: Dumbbell, text: "Wet and dry workout tracking" },
  { icon: ClipboardCheck, text: "Athlete and parent engagement" },
];

const SportDesk = () => {
  return (
    <Layout>
      <SEO
        title="SportDesk – Squad & Coaching Management"
        description="Manage squads, performance, and progression in one system. Heat tracking, benchmarks, workouts, and athlete engagement."
        canonical="/solutions/sportdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SportDesk",
          "description": "Squad and coaching management software. Heat tracking, qualifying benchmarks, workout tracking, and athlete engagement.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Squad Management Software"
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/sportdesk" }, { label: "SportDesk" }]} />

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
                <Trophy className="h-4 w-4" />
                Squads & Coaching
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Manage squads, performance, and progression{" "}
                <span className="text-gradient-primary">in one system</span>
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

      {/* Features */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages
        heading="Explore Related Solutions"
        pages={[
          { title: "SwimDesk", description: "Complete swim school management platform", href: "/solutions/swimdesk" },
          { title: "FitDesk", description: "Gym and leisure centre operations platform", href: "/solutions/fitdesk" },
          { title: "Squads", description: "Squad progression and competitive programs", href: "/solutions/squads" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bring structure to your squad programs
            </h2>
            <Button variant="cta" size="xl" asChild>
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

export default SportDesk;
