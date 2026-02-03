import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Smartphone,
  Bell,
  Calendar,
  Award,
  MessageSquare,
  CreditCard,
  Check
} from "lucide-react";

const memberFeatures = [
  { icon: Calendar, title: "Book classes & appointments", description: "Easy scheduling from the app" },
  { icon: Bell, title: "Push notifications", description: "Stay informed with instant updates" },
  { icon: Award, title: "View progress & certificates", description: "Track achievements over time" },
  { icon: CreditCard, title: "Manage payments", description: "View invoices and make payments" },
];

const parentFeatures = [
  "Real-time progress updates",
  "Certificate notifications",
  "Lesson reminders",
  "Direct messaging with instructors",
  "Multiple children on one account",
];

const MemberApp = () => {
  return (
    <Layout>
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
                Mobile Experience
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Member & Parent{" "}
                <span className="text-gradient-primary">Mobile Apps</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Keep members and parents engaged with branded mobile apps. Book classes, track progress, and stay connected — all from their pocket.
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
                      <p className="font-semibold">Squad Training</p>
                      <p className="text-sm text-muted-foreground">Tomorrow, 4:30 PM</p>
                    </div>
                    
                    <div className="p-4 rounded-xl border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Recent Progress</p>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="text-sm font-medium">Freestyle Level 3 Complete!</span>
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

      {/* Member Features */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Member App Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center mx-auto">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Features */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Parent-Specific Features
              </h2>
              <p className="text-muted-foreground">
                Keep parents informed and engaged with their child's progress.
              </p>
            </motion.div>

            <div className="space-y-4">
              {parentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
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
              Ready to improve member engagement?
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

export default MemberApp;