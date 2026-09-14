import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import fitdeskLogo from "@/assets/brand/fitdesk-color-horizontal.png";
import fitdeskHand from "@/assets/fitdesk/fitdesk-hand.png";

export function FitDeskHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img src={fitdeskLogo} alt="FitDesk by GreeneDesk" className="h-10 w-auto" />
            </div>
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              FitDesk by GreeneDesk · Built and hosted in Australia
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fitness operations and member engagement{" "}
              <span className="text-gradient-primary">beyond the front desk</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              FitDesk gives leisure centres specialist tools for assessments, workout programming,
              trainer scheduling, progress tracking and member engagement. Use it alongside
              PerfectGym or as an alternative to Mywellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/integrations/perfectgym">See FitDesk with PerfectGym</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <Link to="/technogym-mywellness-alternative" className="text-primary hover:underline">
                Mywellness alternative
              </Link>
              <Link to="/platform/workout-programming" className="text-primary hover:underline">
                Workout programming
              </Link>
              <Link to="/platform/teacher-trainer" className="text-primary hover:underline">
                Trainer tools &amp; assessments
              </Link>
              <Link to="/platform/analytics" className="text-primary hover:underline">
                Progress &amp; retention
              </Link>
              <Link to="/data-residency" className="text-primary hover:underline">
                Australian data residency
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={fitdeskHand}
              alt="FitDesk workout programming interface on a tablet device"
              className="max-h-[500px] w-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
