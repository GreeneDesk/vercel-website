import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Activity } from "lucide-react";

export function FitDeskHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      
      <div className="container-wide section-padding relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Activity className="h-4 w-4" />
              Operations & Coaching Platform
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              FitDesk — software that managers trust and{" "}
              <span className="text-gradient-primary">trainers actually enjoy using</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              FitDesk supports the full day-to-day reality of running gyms, swim schools and community sports centres — combining scheduling, engagement, coaching tools and reporting in one practical system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="#how-it-works">
                  <Play className="h-5 w-5" />
                  See How FitDesk Works
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
