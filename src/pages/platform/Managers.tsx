import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
  Eye,
  ListTodo,
  CheckCircle,
  Check,
  Briefcase
} from "lucide-react";

const dashboardFeatures = [
  { icon: Eye, title: "Real-time visibility", description: "See what's happening across classes, staff, and programs right now" },
  { icon: Users, title: "Attendance insights", description: "Track patterns, identify drops, and spot issues before they escalate" },
  { icon: AlertTriangle, title: "At-risk alerts", description: "System-generated flags for members showing disengagement signals" },
  { icon: TrendingUp, title: "Retention metrics", description: "Understand what's driving cancellations and what's keeping members" },
];

const operationalTools = [
  { 
    icon: ListTodo, 
    title: "Task management", 
    description: "Auto-generated task lists from member events. Nothing falls through when staff are busy." 
  },
  { 
    icon: Clock, 
    title: "Utilisation reports", 
    description: "See which classes are full, underperforming, or need attention — at a glance." 
  },
  { 
    icon: CheckCircle, 
    title: "Staff performance", 
    description: "Track instructor activity, assessment completion, and class delivery without micromanaging." 
  },
  { 
    icon: BarChart3, 
    title: "Custom reporting", 
    description: "Build the reports you need. Export when required. No spreadsheet gymnastics." 
  },
];

const managerQuestions = [
  "Which classes are underperforming?",
  "Who's at risk of cancelling this month?",
  "Are assessments being completed on time?",
  "What's our retention rate by program?",
  "Where are the capacity gaps?",
  "Which staff need support?",
];

const managerBenefits = [
  "Stop chasing information — it comes to you",
  "Intervene early, not after cancellation",
  "Trust your team with clear visibility",
  "Justify decisions with data, not gut feel",
  "Free up time for leadership, not admin",
];

const Managers = () => {
  return (
    <Layout>
      <SEO title="Manager Dashboard – Retention & Operations" description="Real-time operational dashboards for centre managers. At-risk member alerts, staff performance tracking, and utilisation reports." canonical="/platform/managers" />
      <Breadcrumbs items={[{ label: "Platform", href: "/platform/managers" }, { label: "For Managers" }]} />
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
                <Briefcase className="h-4 w-4" />
                For Managers
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                See what's happening —{" "}
                <span className="text-gradient-primary">before it's a problem</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Dashboards, alerts, and reporting that give you visibility across operations 
                without drowning in data. Manage proactively, not reactively.
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

      {/* Dashboard Features */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Your operational command centre
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know, surfaced intelligently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Answered */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Answer the questions that matter
              </h2>
              <p className="text-muted-foreground mb-6">
                Stop digging through systems for basic information. 
                GreeneDesk surfaces answers to the questions managers actually ask.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {managerQuestions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-background border border-border"
                >
                  <p className="text-sm font-medium">{question}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operational Tools */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tools for daily operations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {operationalTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-surface-section border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What this means for you
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {managerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-text-on-dark">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Manager Tools Work Best With"
        pages={[
          { title: "Analytics & Retention", description: "Deeper data insights to support operational decisions", href: "/platform/analytics" },
          { title: "CEO & Owner Visibility", description: "Strategic reporting that rolls up from manager-level data", href: "/platform/ceos" },
          { title: "Communication", description: "Act on at-risk alerts with automated outreach workflows", href: "/platform/communication" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Management shouldn't mean more spreadsheets
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              GreeneDesk is designed to give managers clarity without creating more work. 
              The system does the heavy lifting — you make the decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/data-residency">Australian Data Residency</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Managers;
