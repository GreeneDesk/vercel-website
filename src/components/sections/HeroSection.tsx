import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroIpad from "@/assets/fitdesk/hero-ipad.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />

      <div className="container-wide relative py-10 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-widest text-primary mb-4">
              🇦🇺 🇳🇿 Built in Australia · Trusted across AU &amp; NZ
            </p>

            <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-4">
              Run better programs without{" "}
              <span className="text-gradient-primary">replacing your management system</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl">
              GreeneDesk adds scheduling, assessments, workout programming, engagement and
              performance tracking to your existing technology—including PerfectGym.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Button variant="cta" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
                <Link to="/solutions/fitdesk">Explore FitDesk</Link>
              </Button>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground">
              Australian-built · Data hosted on AWS Sydney · AU-based support
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
              alt="GreeneDesk exercise library and workout programming on an iPad"
              className="max-h-[440px] w-auto object-contain drop-shadow-2xl"
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
