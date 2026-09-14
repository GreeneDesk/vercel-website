import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle, Repeat } from "lucide-react";

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
              <Puzzle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Complete PerfectGym</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Keep PerfectGym for memberships, billing and access. Add FitDesk for assessments,
              workout programming, trainer scheduling, progress tracking and member engagement.
            </p>
            <Button asChild className="self-start">
              <Link to="/integrations/perfectgym">
                Explore FitDesk with PerfectGym
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Independent customer-authorised API integration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-background p-8 flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-accent-hover mb-5 flex items-center justify-center">
              <Repeat className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Replace Mywellness</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Move programming, assessments and member engagement to an Australian-hosted platform
              while retaining PerfectGym as your core management system.
            </p>
            <Button asChild className="self-start">
              <Link to="/technogym-mywellness-alternative">
                Explore the Mywellness alternative
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              This concerns Mywellness software, not Technogym fitness equipment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
