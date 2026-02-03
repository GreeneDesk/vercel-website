import { motion } from "framer-motion";
import { Briefcase, UserCheck } from "lucide-react";

const managerProblems = [
  "It's hard to see what's actually happening on the floor.",
  "Attendance drops quietly until members cancel.",
  "Reporting takes too long to be useful.",
];

const trainerProblems = [
  "I don't want more admin.",
  "I need better tools to coach properly.",
  "Members don't remember exercises between sessions.",
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
            What we consistently hear from Australian centres
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Managers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">Managers say:</h3>
            </div>
            <ul className="space-y-4">
              {managerProblems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl text-muted-foreground">"</span>
                  <p className="text-muted-foreground italic pt-1">{problem}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trainers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">Trainers say:</h3>
            </div>
            <ul className="space-y-4">
              {trainerProblems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl text-muted-foreground">"</span>
                  <p className="text-muted-foreground italic pt-1">{problem}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg font-medium mt-10 text-primary"
        >
          FitDesk was built to solve both sides — management and delivery.
        </motion.p>
      </div>
    </section>
  );
}
