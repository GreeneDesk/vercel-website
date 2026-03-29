import { motion } from "framer-motion";
import { Check, Puzzle, ArrowRight } from "lucide-react";

const integrationPoints = [
  "Integrates with platforms like PerfectGym and others",
  "Works alongside your current membership and billing systems",
  "No disruption to existing operations",
  "Add capabilities without a full system migration",
];

export function DeploymentSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built to work with your existing systems
            </h2>
            <p className="text-xl text-muted-foreground">
              GreeneDesk is not a replacement. It is an extension.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-accent bg-accent/5 p-8 md:p-10"
          >
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center mx-auto">
              <Puzzle className="h-8 w-8 text-primary-foreground" />
            </div>

            <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
              {integrationPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <p className="text-muted-foreground mb-1">Result:</p>
              <p className="text-xl font-semibold text-foreground">
                Keep what works. Add what is missing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
