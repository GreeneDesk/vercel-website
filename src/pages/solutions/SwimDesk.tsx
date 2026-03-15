import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Waves,
  ClipboardCheck,
  Bell,
  GraduationCap,
  FileText,
  Users,
  DollarSign,
  Calendar,
  CreditCard,
  Smartphone,
  MessageSquare,
  Award,
  BarChart3,
  Brain,
  Heart,
  Check,
  X,
  Zap,
  Shield
} from "lucide-react";

const coreOperations = [
  { icon: Calendar, title: "Class scheduling & calendar management", description: "Term-based and ongoing programs" },
  { icon: Users, title: "Enrolments, capacity & waitlists", description: "Manage class sizes and movements seamlessly" },
  { icon: ClipboardCheck, title: "Attendance tracking", description: "Front-desk workflow support" },
  { icon: CreditCard, title: "Payments & billing", description: "When SwimDesk is the primary system" },
  { icon: Shield, title: "Optional payment integration", description: "Modernise without ripping out your stack" },
];

const parentPortalFeatures = [
  "Report absences",
  "Reschedule classes",
  "Request and manage make-ups",
  "View progress and updates",
  "Make payments (if enabled)",
];

const differentiators = [
  {
    icon: MessageSquare,
    title: "Automated communication that feels human",
    tagline: "Your strongest wedge",
    description: "SwimDesk is built for automated, empathy-first communication across SMS, Email, and WhatsApp — and it's not \"blast messaging\". It's triggered, contextual, and staff-friendly.",
    features: [
      "Tasks and at-risk student alerts",
      "Staff prompts so nothing slips during peak load",
      "Human voice in front, not robotic automation",
    ],
  },
  {
    icon: Award,
    title: "Digital certificates — fully customised, automatic",
    tagline: "Certificates become a retention event",
    description: "Most systems treat certificates as admin paperwork. SwimDesk makes them a moment that keeps families engaged.",
    features: [
      "Custom templates per level / program",
      "Auto-issued on achievement",
      "Delivered to parents instantly",
      "Creates \"small wins\" that keep families engaged",
    ],
  },
  {
    icon: BarChart3,
    title: "Retention analytics, not just management",
    tagline: "SwimDesk is a retention engine",
    description: "SwimDesk isn't just an admin system — it's built to help you understand and act on what keeps families enrolled.",
    features: [
      "Skill progression tracking built into operations",
      "KPI dashboards and reporting",
      "\"At-risk\" identification and interventions",
    ],
  },
  {
    icon: Brain,
    title: "AI-enabled, with humans in control",
    tagline: "AI helps staff think and act faster",
    description: "SwimDesk uses AI to help staff think and act faster — not replace them.",
    features: [
      "Assisted messaging and personalised communication workflows",
      "Automation that reduces admin load while keeping empathy intact",
    ],
  },
];

const bestFitFor = [
  "Mid and large swim schools",
  "Multi-program operators (swim + sports)",
  "Centres that care about retention, parent experience, and operational calm",
  "Organisations that want enterprise-grade trust and a modern mobile experience",
];

const comparisonItems = [
  { basic: "Helps you run classes", swimdesk: "Helps you keep families for years" },
  { basic: "Blast messaging", swimdesk: "Triggered, contextual, empathy-first comms" },
  { basic: "Manual certificate admin", swimdesk: "Automated, branded certificate delivery" },
  { basic: "Basic attendance tracking", swimdesk: "Retention analytics and at-risk alerts" },
  { basic: "Generic portal", swimdesk: "Parent-first mobile experience" },
];

const SwimDesk = () => {
  return (
    <Layout>
      <SEO
        title="SwimDesk – Swim School Management Software"
        description="Complete swim school software for Australian aquatics centres. Lesson management, assessments, parent communication, and progress tracking."
        canonical="/solutions/swimdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SwimDesk",
          "description": "Swim school management software for learn-to-swim programs. Lesson scheduling, skill assessments, parent portal, and digital certificates.",
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
                Complete Swim School Management
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                SwimDesk — the complete system for{" "}
                <span className="text-gradient-primary">mid and large swim schools</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Most class-management platforms lead with the same broad promises: scheduling, enrolments, payments, customer portal, attendance, progress tracking.
              </p>
              
              <p className="text-lg md:text-xl font-medium text-foreground mb-8">
                SwimDesk matches that baseline — but the difference is <span className="text-primary">depth</span>, <span className="text-primary">automation</span>, and the <span className="text-primary">parent experience</span> at scale.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a SwimDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Operations */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium text-primary mb-2">The "Table Stakes"</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Core Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you expect from modern class software — scheduling, enrolments, payments, and attendance — done right.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreOperations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Portal */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                <Smartphone className="h-4 w-4" />
                Where churn is won or lost
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Parent Portal + Mobile App
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Parents can self-serve from mobile — no phone calls, no chasing. SwimDesk's positioning is simple:
              </p>
              
              <p className="text-xl font-medium text-primary mb-8">
                Parents don't chase the centre — the centre stays ahead of parents.
              </p>
              
              <ul className="space-y-3">
                {parentPortalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-background border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <Smartphone className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Parent-first mobile experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where SwimDesk is Bigger */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Where SwimDesk is Bigger Than the Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four key differentiators that set SwimDesk apart from generic class management platforms.
            </p>
          </motion.div>

          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">{index + 1}. {item.tagline}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{item.description}</p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools & Squads */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Handle Schools and Squads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SwimDesk supports both school swimming programs and competitive squad management within a single platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">School Programs</h3>
              <p className="text-muted-foreground mb-6">
                Manage group bookings, high-volume reporting, and coordination with schools and councils.
              </p>
              <Button variant="outline" asChild>
                <Link to="/solutions/school-programs">
                  Learn more about School Programs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">Squad Management</h3>
              <p className="text-muted-foreground mb-6">
                Track squad attendance, progression, and performance for competitive swimmers.
              </p>
              <Button variant="outline" asChild>
                <Link to="/solutions/squads">
                  Learn more about Squads
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Fit */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              SwimDesk is Best For
            </h2>
            
            <ul className="space-y-4 text-left max-w-lg mx-auto">
              {bestFitFor.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              A Basic System vs SwimDesk
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="text-muted-foreground/70">A basic system helps you run classes.</span>{" "}
              <span className="text-primary font-medium">SwimDesk helps you keep families for years.</span>
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-2 bg-muted/50 p-4 font-medium text-sm">
                <div className="text-muted-foreground">Basic System</div>
                <div className="text-primary">SwimDesk</div>
              </div>
              
              {comparisonItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-2 border-t border-border"
                >
                  <div className="p-4 flex items-center gap-3 text-muted-foreground">
                    <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                    <span>{item.basic}</span>
                  </div>
                  <div className="p-4 flex items-center gap-3 bg-primary/5">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item.swimdesk}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20"
            >
              <p className="text-center font-medium">
                <span className="text-primary">SwimDesk:</span> automated communication + task-driven operations + certificates + analytics + AI assist
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to keep families for years?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              See how SwimDesk's depth, automation, and parent experience can transform your swim school.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/demo">
                Request a SwimDesk Demo
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
