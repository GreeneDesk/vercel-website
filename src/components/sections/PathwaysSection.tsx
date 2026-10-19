import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function PathwaysSection() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Build on what already works
          </h2>
          <p className="text-lg text-muted-foreground">
            Keep the systems that handle your core administration. Add the operational depth your
            trainers, teams and members need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-8 flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-5 flex items-center justify-center">
              <Puzzle className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Complete PerfectGym</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Keep PerfectGym for memberships, billing and access. Add FitDesk for digital
              assessments, workout programming, trainer scheduling, progress tracking and member
              engagement.
            </p>
            <Button
              asChild
              className="self-start"
              onClick={() => trackEvent("home_pathway_perfectgym_click", { pathway: "complete-perfectgym" })}
            >
              <Link to="/integrations/perfectgym">
                Explore the PerfectGym integration
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Independent, customer-authorised API integration
            </p>
            <p className="text-sm mt-3">
              <Link to="/compare" className="text-primary font-medium hover:underline">
                Switching from another system? See how to move →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
