import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Check, Timer, Target, Users, Dumbbell } from "lucide-react";

const features = [
  { icon: Users, title: "Squad Management", description: "Organise athletes by level, age, and program. Manage squad transitions and groupings." },
  { icon: Timer, title: "Heat & Time Tracking", description: "Create heats, record times, and monitor qualifying benchmarks." },
  { icon: Target, title: "Progression Pathways", description: "Track levels, belts, grades, and certifications across any sport." },
  { icon: Dumbbell, title: "Workout Management", description: "Plan and track both wet and dry workouts for athletes." },
];

const sports = [
  "Gymnastics centres",
  "Martial arts academies",
  "Tennis academies",
  "Badminton schools",
  "Swimming squads",
  "Multi-sport facilities",
];

const SportsFacilitySoftware = () => {
  return (
    <Layout>
      <SEO
        title="Sports Facility Software Australia"
        description="SportDesk is sports facility software for squads, coaching, and competitive programs. Heat tracking, benchmarks, and athlete management."
        canonical="/sports-facility-software"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sports Facility Software – SportDesk by GreeneDesk",
          description: "Squad and coaching management for sports facilities. Heat tracking, benchmarks, progression pathways, and athlete engagement.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: "AU",
          serviceType: "Sports Facility Software",
        }}
      />
      <Breadcrumbs items={[{ label: "Sports Facility Software" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Trophy className="h-4 w-4" />
                Sports Facility Software
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sports facility software for{" "}
                <span className="text-gradient-primary">squads and coaching programs</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                SportDesk brings structure to competitive and squad-based training. Heat tracking, qualifying benchmarks, workout management, and athlete engagement.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">SportDesk Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Built For</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {sports.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages heading="Explore Solutions" pages={[
        { title: "SportDesk", description: "Squad and coaching management", href: "/solutions/sportdesk" },
        { title: "Squads", description: "Competitive squad programs", href: "/solutions/squads" },
        { title: "FitDesk", description: "Gym and fitness operations", href: "/solutions/fitdesk" },
      ]} />

      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">See SportDesk in action</h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SportsFacilitySoftware;
