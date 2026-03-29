import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Check, Calendar, ClipboardCheck, Dumbbell, Users } from "lucide-react";

const features = [
  { icon: Calendar, title: "Trainer Scheduling", description: "Advanced scheduling for trainers, services, and programs across your facility." },
  { icon: ClipboardCheck, title: "Digital Assessments", description: "Replace paper forms with structured assessments. Store complete member history." },
  { icon: Dumbbell, title: "Exercise Programming", description: "Build structured programs with a video exercise library. Custom templates for every need." },
  { icon: Users, title: "Member Engagement", description: "Trainer-to-member communication, notifications, and program adherence tracking." },
];

const idealFor = [
  "Community wellness programs",
  "Active ageing and seniors programs",
  "Rehab and recovery services",
  "Exercise physiology practices",
  "Physio-adjacent businesses",
];

const FitnessWellnessSoftware = () => {
  return (
    <Layout>
      <SEO
        title="Fitness & Wellness Software Australia"
        description="FitDesk is fitness and wellness software for Australian centres. Scheduling, assessments, exercise programming, and engagement for rehab and wellness."
        canonical="/fitness-wellness-software-australia"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fitness & Wellness Software Australia – FitDesk by GreeneDesk",
          description: "Operations platform for fitness and wellness centres. Scheduling, assessments, exercise programming, and member engagement.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: "AU",
          serviceType: "Fitness and Wellness Software",
        }}
      />
      <Breadcrumbs items={[{ label: "Fitness & Wellness Software Australia" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Activity className="h-4 w-4" />
                Fitness & Wellness Software
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Fitness and wellness software{" "}
                <span className="text-gradient-primary">for Australian centres</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                FitDesk powers what happens beyond the front desk. Scheduling, assessments, exercise programming, and engagement for wellness, rehab, and active ageing programs.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">FitDesk Capabilities</h2>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ideal For</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {idealFor.map((item, i) => (
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
        { title: "FitDesk", description: "Full gym and fitness operations platform", href: "/solutions/fitdesk" },
        { title: "Council & Leisure Centres", description: "Multi-service centre operations", href: "/solutions/council" },
        { title: "Data Residency", description: "Australian-hosted infrastructure", href: "/data-residency" },
      ]} />

      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">See FitDesk in action</h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FitnessWellnessSoftware;
