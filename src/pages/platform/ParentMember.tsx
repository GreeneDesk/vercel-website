import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Smartphone,
  Calendar,
  Award,
  Bell,
  CreditCard,
  MessageSquare,
  Users,
  RefreshCw,
  Check,
  Heart
} from "lucide-react";

const appFeatures = [
  { icon: Calendar, title: "Book and manage classes", description: "Schedule, reschedule, and cancel from the app" },
  { icon: Award, title: "Track progress", description: "See achievements, levels, and skill development" },
  { icon: Bell, title: "Instant notifications", description: "Push alerts for updates, reminders, and milestones" },
  { icon: CreditCard, title: "Manage payments", description: "View invoices, make payments, update details" },
  { icon: MessageSquare, title: "Direct messaging", description: "Communicate with instructors and admin" },
  { icon: RefreshCw, title: "Handle absences", description: "Report absences and request make-up classes" },
];

const parentSpecificFeatures = [
  { 
    title: "Multiple children on one account", 
    description: "Manage all your children from a single login — see schedules, progress, and payments in one place." 
  },
  { 
    title: "Real-time progress updates", 
    description: "Know when your child achieves a milestone, completes a level, or receives instructor feedback." 
  },
  { 
    title: "Digital certificates", 
    description: "Receive certificates instantly when levels are completed — sharable and saveable." 
  },
  { 
    title: "Lesson reminders", 
    description: "Automatic reminders before classes so you never forget a session." 
  },
];

const engagementPoints = [
  "Parents feel informed, not in the dark",
  "Self-service reduces admin calls and emails",
  "Progress visibility increases perceived value",
  "Certificates create shareable moments",
  "Easy booking reduces friction to attendance",
];

const ParentMember = () => {
  return (
    <Layout>
      <SEO title="Parent & Member App Experience" description="Branded mobile app for families. Book classes, track progress, receive certificates, and manage payments. Self-service that reduces admin." canonical="/platform/parent-member" />
      <Breadcrumbs items={[{ label: "Platform", href: "/platform/parent-member" }, { label: "Parent & Member Experience" }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Smartphone className="h-4 w-4" />
                Parent & Member Experience
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The experience that{" "}
                <span className="text-gradient-primary">keeps families</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Mobile apps for members and parents that make booking easy, progress visible, 
                and communication seamless. This is where retention is won or lost.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-[500px] bg-gradient-to-br from-primary to-primary-glow rounded-[3rem] p-2 shadow-glow">
                <div className="w-full h-full bg-background rounded-[2.5rem] p-4 overflow-hidden">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">G</span>
                        </div>
                        <span className="text-sm font-medium">GreeneDesk</span>
                      </div>
                      <Bell className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="p-4 rounded-xl bg-primary-light">
                      <p className="text-xs text-muted-foreground mb-1">Next Class</p>
                      <p className="font-semibold">Level 3 Swimming</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 4:30 PM</p>
                    </div>
                    
                    <div className="p-4 rounded-xl border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Recent Achievement</p>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Freestyle Complete!</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-muted text-center">
                        <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-xs">Book</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted text-center">
                        <MessageSquare className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-xs">Message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything in their pocket
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A branded mobile experience that puts control in parents' and members' hands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
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

      {/* Parent-Specific */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Users className="h-4 w-4" />
              For Parents
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Designed for busy families
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {parentSpecificFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Impact */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                <Heart className="h-4 w-4" />
                Retention Impact
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Engagement drives retention
              </h2>
              <p className="text-muted-foreground mb-6">
                When parents feel connected to their child's progress, they stay longer. 
                When booking is easy, attendance improves. When communication is proactive, trust builds.
              </p>
              <p className="text-muted-foreground">
                The parent experience isn't a nice-to-have — it's where churn is won or lost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {engagementPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-surface-section border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Parents don't chase the centre — the centre stays ahead of parents
            </h2>
            <p className="text-lg text-text-on-dark-muted">
              Proactive updates, easy self-service, and visible progress create an experience 
              that families value and talk about.
            </p>
          </motion.div>
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
              Ready to improve your member experience?
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

export default ParentMember;
