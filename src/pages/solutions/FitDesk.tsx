import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingDown, 
  Users, 
  Brain, 
  MessageSquare, 
  BarChart3,
  Calendar,
  FileCheck,
  Smartphone,
  AlertTriangle,
  Activity,
  Puzzle,
  Fingerprint,
  Check
} from "lucide-react";

const problems = [
  { icon: TrendingDown, text: "Attendance decline that goes unnoticed" },
  { icon: Users, text: "Classes that look full but underperform" },
  { icon: Brain, text: "Staff relying on gut feel instead of data" },
  { icon: MessageSquare, text: "Engagement tools that are disconnected" },
  { icon: BarChart3, text: "Reporting that arrives too late to act" },
];

const features = [
  { icon: Calendar, title: "Scheduling & calendars", description: "Flexible class and appointment scheduling" },
  { icon: FileCheck, title: "Digital onboarding and assessments", description: "Streamlined member intake process" },
  { icon: Smartphone, title: "Member & trainer mobile apps", description: "Stay connected on the go" },
  { icon: AlertTriangle, title: "Retention risk indicators", description: "Early warning system for at-risk members" },
  { icon: Activity, title: "Facility utilisation insights", description: "Understand how your space is used" },
  { icon: Puzzle, title: "Works alongside existing systems", description: "Integrates with PerfectGym and others" },
];

const accessBenefits = [
  "Improve entry flow without changing member experience",
  "Real-time capacity and utilisation data",
  "Integration with existing access hardware",
  "Operational visibility across all locations",
];

const FitDesk = () => {
  return (
    <Layout>
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
                <Activity className="h-4 w-4" />
                For Gyms & Recreation Centres
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                FitDesk — gym and recreation software focused on{" "}
                <span className="text-gradient-primary">retention and visibility</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Built for gyms, leisure centres and councils that want clearer insight into attendance, utilisation and member engagement — without replacing everything they already use.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Problems we solve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-background border"
              >
                <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              FitDesk Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Access */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-primary bg-background p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Fingerprint className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary">Optional</span>
              </div>
              
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Smarter entry and oversight
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Improve entry flow and operational visibility with optional access integrations — without changing how members move through your facility.
              </p>
              
              <ul className="space-y-3 mb-8">
                {accessBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to see FitDesk in action?
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a FitDesk Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FitDesk;