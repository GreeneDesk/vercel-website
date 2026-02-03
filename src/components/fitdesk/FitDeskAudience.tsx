import { motion } from "framer-motion";
import { 
  Dumbbell, 
  Waves, 
  Baby, 
  Building2, 
  Heart, 
  Users 
} from "lucide-react";

const audiences = [
  { icon: Dumbbell, label: "Gyms and fitness centres" },
  { icon: Waves, label: "Swim schools and aquatic centres" },
  { icon: Baby, label: "Gymnastics and kids' sports centres" },
  { icon: Building2, label: "Community and government-run facilities" },
  { icon: Heart, label: "YMCAs and multi-purpose recreation centres" },
  { icon: Users, label: "Centres with a large senior citizen member base" },
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
            Designed for real-world centres, not just private gyms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            FitDesk is widely used in environments where diverse programs, age groups and abilities need to be supported:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {audiences.map((item, index) => (
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
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-2xl mx-auto"
        >
          If your centre serves children, families, adults and seniors — often all in the same week — FitDesk is designed for that complexity.
        </motion.p>
      </div>
    </section>
  );
}
