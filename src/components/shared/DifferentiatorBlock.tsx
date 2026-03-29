import { motion } from "framer-motion";

export function DifferentiatorBlock() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-background p-8 md:p-10 text-center"
        >
          <p className="text-lg text-foreground font-semibold mb-4">
            GreeneDesk does not replace your management system. It enhances it.
          </p>
          <p className="text-muted-foreground">
            Most platforms focus on administration. GreeneDesk focuses on delivery, engagement, and outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
