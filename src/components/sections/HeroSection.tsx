import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      
      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Built in Australia for Australian centres
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Software built for how Australian sports and recreation centres{" "}
              <span className="text-gradient-primary">actually run</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Running a gym, swim school or sports program is already complex. GreeneDesk helps reduce admin, improve retention and give you clearer visibility — without adding more systems or stress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary-glow p-1 shadow-glow">
              <div className="rounded-xl bg-background p-6">
                {/* Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">G</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">GreeneDesk Dashboard</p>
                        <p className="text-xs text-muted-foreground">Live Overview</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-primary-light p-3">
                      <p className="text-2xl font-bold text-primary">847</p>
                      <p className="text-xs text-muted-foreground">Active Members</p>
                    </div>
                    <div className="rounded-lg bg-accent/10 p-3">
                      <p className="text-2xl font-bold text-accent">94%</p>
                      <p className="text-xs text-muted-foreground">Retention Rate</p>
                    </div>
                    <div className="rounded-lg bg-secondary/10 p-3">
                      <p className="text-2xl font-bold text-secondary">23</p>
                      <p className="text-xs text-muted-foreground">Classes Today</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pool Utilisation</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-primary-glow" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Gym Floor Capacity</span>
                      <span className="font-medium">62%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-accent to-accent-hover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 rounded-xl bg-background border shadow-lg p-3"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs">🏊</span>
                </div>
                <div>
                  <p className="text-xs font-medium">Swim Assessment</p>
                  <p className="text-xs text-primary">Auto-synced</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-xl bg-background border shadow-lg p-3"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <div>
                  <p className="text-xs font-medium">Parent Notification</p>
                  <p className="text-xs text-accent">Sent ✓</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}