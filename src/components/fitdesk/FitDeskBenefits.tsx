import { motion } from "framer-motion";
import { 
  UserCheck, 
  TrendingUp, 
  Clock, 
  Layers
} from "lucide-react";

const outcomes = [
  { icon: UserCheck, text: "Improve member engagement" },
  { icon: TrendingUp, text: "Increase retention" },
  { icon: Clock, text: "Reduce administrative workload" },
  { icon: Layers, text: "Deliver structured programs at scale" },
];

export function FitDeskBenefits() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Outcomes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
