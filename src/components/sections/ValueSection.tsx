import { motion } from "framer-motion";
import { 
  Zap, 
  Eye, 
  MessageCircle, 
  TrendingUp, 
  Users 
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Automate day-to-day operations",
    description: "Reduce manual tasks and free up your staff for what matters",
  },
  {
    icon: Eye,
    title: "Identify retention risks earlier",
    description: "Spot attendance drops before they become cancellations",
  },
  {
    icon: MessageCircle,
    title: "Improve member and parent communication",
    description: "Keep everyone informed with automated updates",
  },
  {
    icon: TrendingUp,
    title: "Understand utilisation and capacity",
    description: "Make data-driven decisions about classes and facilities",
  },
  {
    icon: Users,
    title: "Support growth without adding headcount",
    description: "Scale your operations efficiently",
  },
];

export function ValueSection() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Less admin. Better visibility. Fewer surprises.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GreeneDesk helps you run your centre more effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6">
                <value.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}