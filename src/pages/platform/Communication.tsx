import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  MessageSquare,
  Mail,
  Smartphone,
  Bell,
  Zap,
  Heart,
  Users,
  Clock,
  Check,
  Bot
} from "lucide-react";

const channels = [
  { icon: MessageSquare, title: "SMS", description: "Direct, high-open-rate messaging" },
  { icon: Mail, title: "Email", description: "Rich content and attachments" },
  { icon: Smartphone, title: "WhatsApp", description: "Where families already are" },
  { icon: Bell, title: "Push notifications", description: "Instant mobile alerts" },
];

const features = [
  { 
    icon: Zap, 
    title: "Triggered, not blasted", 
    description: "Messages fire based on real events — absences, milestones, risk signals — not manual lists." 
  },
  { 
    icon: Heart, 
    title: "Empathy-first templates", 
    description: "Pre-built messaging that sounds human, not robotic. Staff can personalise before sending." 
  },
  { 
    icon: Bot, 
    title: "AI-assisted drafting", 
    description: "Let AI help craft the right message for sensitive situations — with final approval always human." 
  },
  { 
    icon: Users, 
    title: "Audience segmentation", 
    description: "Target by class, level, attendance patterns, or custom criteria without spreadsheet exports." 
  },
  { 
    icon: Clock, 
    title: "Scheduled delivery", 
    description: "Queue messages for optimal timing. No more 9pm 'oops' sends." 
  },
];

const automations = [
  "Absence follow-ups sent automatically",
  "Milestone celebrations triggered on achievement",
  "At-risk member alerts to staff",
  "Payment reminders before they're overdue",
  "Welcome sequences for new enrolments",
  "Re-engagement campaigns for lapsed members",
];

const Communication = () => {
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
                <MessageSquare className="h-4 w-4" />
                Communication
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Communication that feels{" "}
                <span className="text-gradient-primary">human at scale</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Automated messaging that keeps families engaged without losing the personal touch. 
                Triggered by real events, not manual effort.
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

      {/* Multi-Channel */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Reach families where they are
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One platform, multiple channels. Send the right message through the right medium.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center mx-auto">
                  <channel.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Smart communication, not spam
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every message is contextual, timely, and adds value to the relationship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Automations that run themselves
              </h2>
              <p className="text-muted-foreground mb-6">
                Set up once, benefit forever. These workflows fire automatically based on member behaviour and events.
              </p>
              <p className="text-sm text-muted-foreground">
                Staff stay in control — they can review, pause, or personalise any automated message before it sends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {automations.map((automation, index) => (
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
                  <span className="font-medium">{automation}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
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
              This is the difference between reactive admin and proactive engagement. 
              Communication becomes a retention tool, not a task.
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
              Ready to transform how you communicate?
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

export default Communication;
