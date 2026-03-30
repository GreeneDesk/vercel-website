import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Calendar,
  ClipboardCheck,
  CreditCard,
  Smartphone,
  MessageSquare,
  BarChart3,
  Puzzle,
  Dumbbell,
  Heart,
  Check
} from "lucide-react";

const capabilities = [
  { icon: Calendar, title: "Scheduling & calendars", description: "Flexible class, appointment, and PT session management" },
  { icon: ClipboardCheck, title: "Assessments & progression", description: "Digital health consultations (PARQ), skill tracking, and outcome recording" },
  { icon: CreditCard, title: "Payments & billing", description: "Integrated payment processing and invoicing" },
  { icon: Smartphone, title: "Member and parent apps", description: "Mobile apps for members, parents, and trainers" },
  { icon: MessageSquare, title: "Communications", description: "SMS, email, WhatsApp, and AI-generated messaging" },
  { icon: BarChart3, title: "Retention and utilisation analytics", description: "Milestone tracking, at-risk alerts, and KPI dashboards" },
  { icon: Dumbbell, title: "Exercise programming", description: "4,000+ exercise library with video, personalised workout plans, and progress logs" },
  { icon: Heart, title: "Active ageing & wellness", description: "Tailored programs for seniors, rehab, and community wellness" },
  { icon: Puzzle, title: "Integrations and API access", description: "Connect with existing leisure management and accounting systems" },
];

const Features = () => {
  return (
    <Layout>
      <SEO title="Platform Features – All Capabilities" description="Explore GreeneDesk's full platform: scheduling, payments, communication, assessments, analytics, and member management for Australian centres." canonical="/platform/features" />
      <Breadcrumbs items={[{ label: "Platform", href: "/platform/features" }, { label: "Features Overview" }]} />
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Core Platform{" "}
                <span className="text-gradient-primary">Capabilities</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Everything you need to run your centre efficiently, with the flexibility to match how you actually work.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Dive Deeper Into the Platform"
        pages={[
          { title: "Communication", description: "Multi-channel automated messaging", href: "/platform/communication" },
          { title: "Roster & Scheduler", description: "Visual scheduling and capacity management", href: "/platform/roster-scheduler" },
          { title: "Analytics & Retention", description: "Data-driven insights for better decisions", href: "/platform/analytics" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              See how these features work together
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;