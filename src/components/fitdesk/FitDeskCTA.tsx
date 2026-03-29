import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FitDeskCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            See how FitDesk fits into your centre
          </h2>

          <Button variant="cta" size="xl" asChild>
            <Link to="/demo">
              Book a Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-wide mt-16 pt-8 border-t border-primary-foreground/10"
      >
        <p className="text-center text-sm text-text-on-dark-muted">
          FitDesk is part of the GreeneDesk platform — built in Australia for the World.
          <br />
          All customer data is hosted in Australia.
        </p>
      </motion.div>
    </section>
  );
}
