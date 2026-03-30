import { motion } from "framer-motion";
import { 
  Building2, 
  Heart, 
  Stethoscope, 
  Activity,
  Users,
  Dumbbell,
  Accessibility,
  Check
} from "lucide-react";

const useCases = [
  { icon: Building2, text: "Leisure centres & health clubs" },
  { icon: Heart, text: "Community wellness programs" },
  { icon: Users, text: "Active ageing & seniors programs" },
  { icon: Stethoscope, text: "Rehab and recovery services" },
  { icon: Activity, text: "Exercise physiology setups" },
  { icon: Dumbbell, text: "Physio-adjacent businesses" },
  { icon: Accessibility, text: "Senior citizen fitness & falls prevention" },
];

export function FitDeskAudience() {
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
            Ideal use cases
          </h2>
          <p className="text-lg text-muted-foreground">FitDesk is designed for:</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
