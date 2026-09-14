import { motion } from "framer-motion";
import { Check, Building2, Dumbbell } from "lucide-react";

const coreSystem = [
  "Memberships",
  "Contracts",
  "Billing",
  "Payments",
  "Access control",
  "Check-ins",
];

const fitdesk = [
  "Digital health consultations",
  "Assessments and member history",
  "Workout programming",
  "Exercise video library",
  "Trainer scheduling",
  "Member goals and progress",
  "Milestone follow-ups",
  "Trainer and member apps",
  "Engagement and retention workflows",
];

export function FitDeskGapSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center max-w-4xl mx-auto mb-12"
        >
          Your management system runs the front desk.{" "}
          <span className="text-gradient-primary">FitDesk powers the fitness floor.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface-section p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-muted-foreground" />
              <h3 className="font-display text-xl font-bold">Core management system</h3>
            </div>
            <ul className="space-y-3">
              {coreSystem.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-primary/40 bg-background p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl font-bold">FitDesk</h3>
            </div>
            <ul className="space-y-3">
              {fitdesk.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mt-10">
          FitDesk does not force a management-system replacement. It gives fitness teams the
          specialist tools their core administration platform was not designed to provide.
        </p>
      </div>
    </section>
  );
}
