import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Check } from "lucide-react";

const walkthrough = [
  "Your programs and demographics",
  "How trainers would use the coaching tools",
  "How managers gain visibility",
];

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
            See how FitDesk supports your centre
          </h2>
          
          <p className="text-lg text-text-on-dark-muted mb-6">
            We'll walk through:
          </p>

          <ul className="inline-flex flex-col items-start gap-3 mb-8 text-left">
            {walkthrough.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a FitDesk Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/demo">
                <MessageSquare className="h-5 w-5" />
                Talk to Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container-wide mt-16 pt-8 border-t border-primary-foreground/10"
      >
        <p className="text-center text-sm text-text-on-dark-muted">
          FitDesk is part of the GreeneDesk platform — built in Australia for sports and recreation centres worldwide.
          <br />
          All customer data is hosted in Australia.
        </p>
      </motion.div>
    </section>
  );
}
