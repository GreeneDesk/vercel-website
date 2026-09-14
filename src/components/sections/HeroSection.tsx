import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import fitdeskLogo from "@/assets/brand/fitdesk-color-horizontal.png";
import heroIpad from "@/assets/fitdesk/hero-ipad.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <img src={fitdeskLogo} alt="FitDesk by GreeneDesk" className="h-9 w-auto" />
            </div>

            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              FitDesk by GreeneDesk · Built and hosted in Australia
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              FitDesk powers what happens{" "}
              <span className="text-gradient-primary">beyond the front desk</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Complete PerfectGym or replace Mywellness with digital assessments, workout
              programming, trainer scheduling, progress tracking and member engagement—without
              disrupting your core management system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a FitDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/integrations/perfectgym">
                  <Puzzle className="h-5 w-5" />
                  See FitDesk with PerfectGym
                </Link>
              </Button>
            </div>

            <Link
              to="/technogym-mywellness-alternative"
              className="inline-block text-sm font-medium text-primary hover:underline mb-8"
            >
              Considering replacing Mywellness?
            </Link>

            <p className="text-sm text-muted-foreground">
              Customer data hosted on AWS Sydney · AU-based support · Trusted across Australia and
              New Zealand
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={heroIpad}
              alt="FitDesk exercise library and workout programming on an iPad"
              className="max-h-[480px] w-auto object-contain drop-shadow-2xl"
              width={471}
              height={420}
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is a valid HTML attribute
              fetchpriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
