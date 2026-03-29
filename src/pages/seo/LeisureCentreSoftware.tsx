import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, Calendar, Users, Shield, TrendingUp } from "lucide-react";

const capabilities = [
  { icon: Calendar, title: "Advanced Scheduling", description: "Manage trainers, instructors, rooms, pools, and courts in a single scheduling engine." },
  { icon: Users, title: "Member & Parent Engagement", description: "Purpose-built mobile apps for members, parents, trainers, and managers." },
  { icon: TrendingUp, title: "Skills & Progress Tracking", description: "Track development, assessments, and certifications across every program." },
  { icon: Shield, title: "Australian Data Hosting", description: "All data hosted in Sydney. Designed for council compliance and data governance." },
];

const idealFor = [
  "Council-operated leisure centres",
  "Multi-service recreation facilities",
  "Community wellness and active ageing programs",
  "Aquatic centres with fitness and sports programs",
];

const LeisureCentreSoftware = () => {
  return (
    <Layout>
      <SEO
        title="Leisure Centre Software Australia"
        description="GreeneDesk is leisure centre software built for Australian councils and recreation centres. Scheduling, engagement, and program delivery alongside your existing systems."
        canonical="/leisure-centre-software-australia"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Leisure Centre Software Australia – GreeneDesk",
          description: "Operations platform for Australian leisure centres. Scheduling, engagement, and program delivery for councils and recreation centres.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: "AU",
          serviceType: "Leisure Centre Software",
        }}
        faq={[
          { question: "What is the best leisure centre software in Australia?", answer: "GreeneDesk is a multi-sport operations platform designed for Australian leisure centres. It integrates with existing management systems to add scheduling, assessments, engagement, and program delivery." },
          { question: "Does GreeneDesk replace my existing management system?", answer: "No. GreeneDesk works alongside systems like PerfectGym. It adds operational depth without replacing your billing or membership system." },
          { question: "Where is the data hosted?", answer: "All GreeneDesk data is hosted exclusively on AWS Sydney (ap-southeast-2) in Australia." },
        ]}
      />
      <Breadcrumbs items={[{ label: "Leisure Centre Software Australia" }]} />

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
                Leisure centre software{" "}
                <span className="text-gradient-primary">built for Australia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                GreeneDesk powers what happens beyond the front desk. Scheduling, engagement, assessments, and program delivery for multi-service leisure centres — hosted in Sydney, Australia.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Capabilities for Leisure Centres</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capabilities.map((item, i) => (
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
        { title: "Council & Leisure Centres", description: "Purpose-built for council operations", href: "/solutions/council" },
        { title: "FitDesk", description: "Gym, wellness, and rehab programs", href: "/solutions/fitdesk" },
        { title: "Data Residency", description: "Australian-hosted infrastructure", href: "/data-residency" },
      ]} />

      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">See GreeneDesk in action for your leisure centre</h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LeisureCentreSoftware;
