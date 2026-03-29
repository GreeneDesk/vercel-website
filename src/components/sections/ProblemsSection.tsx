import { motion } from "framer-motion";
import { Monitor, Dumbbell, ArrowRight } from "lucide-react";

export function ProblemsSection() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
            Why GreeneDesk
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-6 md:p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">Most management systems are built for the front desk.</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Memberships</li>
                <li>Billing</li>
                <li>Check-ins</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-primary bg-primary/5 p-6 md:p-8"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">But real value is created on the floor, in the pool, and during training.</h3>
              <p className="text-muted-foreground mb-4">
                GreeneDesk fills that gap.
              </p>
              <p className="text-foreground">
                It powers trainers, instructors, and coaches with the tools they need to deliver better programs, track progress, and engage members consistently.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
