import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FitDeskOverview() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-text-on-dark-muted mb-4">
            GreeneDesk does not replace your management system. It enhances it.
          </p>
          <p className="text-xl font-semibold text-text-on-dark">
            Most platforms focus on administration. GreeneDesk focuses on delivery, engagement, and outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
