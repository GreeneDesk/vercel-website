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
  Building2,
  Check,
  Layers,
  Users,
  Shield,
  Puzzle,
  Calendar,
  BarChart3,
} from "lucide-react";

const challenges = [
  "Multiple programs across fitness, aquatics, sports, and wellness",
  "Existing management systems that handle billing and memberships",
  "Diverse user groups: trainers, instructors, parents, members, managers",
  "Strict data governance and compliance requirements",
  "Staff adoption across large, multi-skilled teams",
];

const howItFits = [
  {
    icon: Puzzle,
    title: "Works alongside your existing system",
    description: "GreeneDesk integrates with platforms like PerfectGym. No rip-and-replace required.",
  },
  {
    icon: Layers,
    title: "Adds operational depth",
    description: "Scheduling, assessments, engagement, and program delivery — the capabilities your front desk system doesn't cover.",
  },
  {
    icon: Users,
    title: "Built for staff adoption",
    description: "Purpose-built mobile apps for trainers, instructors, and managers. Minimal training, immediate value.",
  },
  {
    icon: Shield,
    title: "Australian data hosting",
    description: "All data hosted in Sydney, Australia. Designed for councils that require strong data governance.",
  },
];

const modules = [
  { icon: Calendar, title: "FitDesk", description: "Gym, wellness, rehab, and active ageing programs" },
  { icon: Calendar, title: "SwimDesk", description: "Learn-to-swim, school programs, and squad management" },
  { icon: Calendar, title: "SportDesk", description: "Martial arts, gymnastics, tennis, and competitive sports" },
  { icon: BarChart3, title: "Analytics", description: "Reporting, retention tracking, and operational insights" },
];

const outcomes = [
  "Faster rollout without disrupting existing systems",
  "Better member engagement and retention",
  "Structured program delivery across all departments",
  "Reduced admin workload for trainers and instructors",
  "Clear visibility for managers and executives",
  "Compliance-ready data governance",
];

const Council = () => {
  return (
    <Layout>
      <SEO
        title="Council & Leisure Centre Software"
        description="GreeneDesk works alongside your existing management system to power scheduling, engagement, and program delivery for council leisure centres."
        canonical="/solutions/council"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GreeneDesk for Council & Leisure Centres",
          description: "Operations platform for council leisure centres. Integrates with existing management systems to add scheduling, engagement, and program delivery.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: "AU",
          serviceType: "Leisure Centre Software Australia",
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/council" }, { label: "Council & Leisure Centres" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Building2 className="h-4 w-4" />
                Leisure Centre Software Australia
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Built for the complexity of{" "}
                <span className="text-gradient-primary">multi-service leisure centres</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Council centres run fitness, aquatics, sports, and wellness under one roof. GreeneDesk powers what happens beyond the front desk — without replacing your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">The Reality of Running a Council Centre</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">Council leisure centres are uniquely complex:</p>
            <div className="space-y-3">
              {challenges.map((challenge, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">!</span>
                  </div>
                  <span>{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How GreeneDesk Fits */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How GreeneDesk Fits Into Your Centre</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {howItFits.map((item, i) => (
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

      {/* Modules */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">One Platform, Every Department</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {modules.map((mod, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center mx-auto">
                  <mod.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Outcomes for Council Centres</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {outcomes.map((outcome, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages
        heading="Explore GreeneDesk Solutions"
        pages={[
          { title: "FitDesk", description: "Gym, wellness, and active ageing operations", href: "/solutions/fitdesk" },
          { title: "SwimDesk", description: "Swim school and aquatic centre management", href: "/solutions/swimdesk" },
          { title: "Integrations", description: "Connect with PerfectGym and others", href: "/integrations" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              See how GreeneDesk works alongside your existing setup
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Council;
