import { motion } from "framer-motion";
import { 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  FileText, 
  CreditCard 
} from "lucide-react";

const capabilities = [
  {
    icon: Calendar,
    title: "Scheduling Engine",
    description: "Manage classes, trainers, facilities, schools, and squads in one system",
  },
  {
    icon: MessageSquare,
    title: "Engagement & Communication",
    description: "Connect trainers, instructors, parents, and members through apps and notifications",
  },
  {
    icon: TrendingUp,
    title: "Skills & Progress Tracking",
    description: "Track development, performance, and certifications over time",
  },
  {
    icon: FileText,
    title: "Digital Operations",
    description: "Replace paperwork with structured digital workflows and history",
  },
  {
    icon: CreditCard,
    title: "Payments & Pricing",
    description: "Support flexible pricing, discounts, and billing workflows",
  },
];

export function ValueSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
