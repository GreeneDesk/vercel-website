import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp,
  Shield,
  Target,
  Building2,
  DollarSign,
  Users,
  BarChart3,
  Lock,
  Check,
  Globe
} from "lucide-react";

const strategicInsights = [
  { icon: TrendingUp, title: "Retention trends", description: "Track member retention across programs, locations, and time periods" },
  { icon: DollarSign, title: "Revenue visibility", description: "Understand revenue drivers and identify growth opportunities" },
  { icon: Users, title: "Member lifetime value", description: "See the full picture of member relationships and value" },
  { icon: Target, title: "KPI dashboards", description: "Custom metrics that align with your strategic priorities" },
];

const enterpriseFeatures = [
  { 
    icon: Building2, 
    title: "Multi-location oversight", 
    description: "Compare performance across venues. Identify best practices and areas needing attention." 
  },
  { 
    icon: Shield, 
    title: "Governance and compliance", 
    description: "Clear audit trails, role-based access, and data handling that meets regulatory requirements." 
  },
  { 
    icon: Lock, 
    title: "Australian data residency", 
    description: "All data hosted in Australia on AWS Sydney. No offshore processing or third-party data sharing." 
  },
  { 
    icon: Globe, 
    title: "Scalable infrastructure", 
    description: "Built in Australia for the world. Enterprise-grade reliability as you grow." 
  },
];

const ceoQuestions = [
  { question: "Are we retaining members?", answer: "Retention dashboards show trends, risks, and drivers." },
  { question: "Is the team performing?", answer: "Staff metrics without micromanagement." },
  { question: "Where should we invest?", answer: "Data-driven insights for capacity and programs." },
  { question: "Are we compliant?", answer: "Audit trails and governance built in." },
  { question: "Can this scale?", answer: "Enterprise infrastructure, Australian hosted." },
];

const trustIndicators = [
  "Australian-built and Australian-hosted",
  "No third-party data processors",
  "Role-based access control",
  "Complete audit trails",
  "Designed for mid-to-large centres",
  "Enterprise-grade reliability",
];

const CEOs = () => {
  return (
    <Layout>
      <SEO title="CEO & Owner Strategic Visibility" description="Strategic dashboards for centre owners. Multi-location oversight, governance, compliance, and Australian data residency on AWS Sydney." canonical="/platform/ceos" />
      <Breadcrumbs items={[{ label: "Platform", href: "/platform/ceos" }, { label: "For CEOs" }]} />
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
                <Building2 className="h-4 w-4" />
                For CEOs & Executives
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Strategic visibility.{" "}
                <span className="text-gradient-primary">Enterprise trust.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                High-level insights without the noise. Governance without the friction. 
                A platform that scales with your ambitions and protects what matters.
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

      {/* Strategic Insights */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The metrics that matter at the top
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not operational detail — strategic insight. See what drives performance 
              and where attention is needed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <insight.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Questions */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The questions executives ask
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ceoQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl bg-background border border-border"
              >
                <div className="flex-1">
                  <p className="font-display text-lg font-semibold text-foreground">"{item.question}"</p>
                </div>
                <div className="flex items-center gap-2 md:w-1/2">
                  <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Enterprise-grade by design
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for organisations that take governance, compliance, and scale seriously.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-surface-section border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built in Australia for the World
            </h2>
            <p className="text-text-on-dark-muted max-w-2xl mx-auto">
              Trust isn't just a feature — it's the foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-text-on-dark">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Strategic Visibility Built On"
        pages={[
          { title: "Manager Dashboard", description: "Operational data that feeds into executive-level reporting", href: "/platform/managers" },
          { title: "Analytics & Retention", description: "Deep retention analytics and trend analysis across programs", href: "/platform/analytics" },
          { title: "Data Residency", description: "Australian-hosted infrastructure with full audit trails", href: "/data-residency" },
        ]}
      />

      {/* Final Message */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Software that matches your ambitions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              GreeneDesk is designed for organisations that are serious about growth, 
              governance, and member experience. If that's you, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CEOs;
