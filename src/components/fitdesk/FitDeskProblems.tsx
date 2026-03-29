import { motion } from "framer-motion";
import { Monitor, Dumbbell, Check, X } from "lucide-react";

const traditionalFocus = [
  "Memberships",
  "Billing",
  "Check-ins",
];

const centreStruggles = [
  "Trainer scheduling",
  "Member engagement",
  "Assessments and progress tracking",
  "Program delivery",
];

export function FitDeskProblems() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The gap in traditional systems
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6">Most systems focus on:</h3>
            <ul className="space-y-3">
              {traditionalFocus.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6">But centres struggle with:</h3>
            <ul className="space-y-3">
              {centreStruggles.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xl font-semibold mt-10 text-primary"
        >
          FitDesk is built to solve this.
        </motion.p>
      </div>
    </section>
  );
}
