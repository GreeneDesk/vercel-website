import { motion } from "framer-motion";
import { Check, Puzzle } from "lucide-react";

const integrationPoints = [
  "No need to replace your core system",
  "Extend capabilities instantly",
  "Enable trainers without changing front desk workflows",
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Works with your existing stack
            </h2>
            <p className="text-lg text-muted-foreground">
              FitDesk integrates with systems like PerfectGym and others.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center mx-auto">
              <Puzzle className="h-7 w-7 text-primary-foreground" />
            </div>

            <ul className="space-y-4 max-w-2xl mx-auto">
              {integrationPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
