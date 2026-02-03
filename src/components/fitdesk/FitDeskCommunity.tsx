import { motion } from "framer-motion";
import { Building2, Check, ArrowRight } from "lucide-react";

const supports = [
  "Multi-program environments",
  "Staff turnover",
  "Reporting requirements",
  "Long-term data continuity",
];

const options = [
  "Use FitDesk as a full operational system",
  "Or integrate it alongside existing billing platforms (e.g. PerfectGym)",
];

export function FitDeskCommunity() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Building2 className="h-4 w-4" />
              Community & Government
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Designed for councils, YMCAs and long-term operators
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <p className="text-lg text-muted-foreground mb-6">FitDesk supports:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {supports.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground mb-4">Centres can:</p>
              <ul className="space-y-3">
                {options.map((option, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3">
                This reduces risk and avoids unnecessary disruption.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
