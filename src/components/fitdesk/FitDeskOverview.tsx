import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  ClipboardCheck, 
  MessageSquare, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const capabilities = [
  { icon: Calendar, label: "Scheduling and timetables" },
  { icon: Users, label: "Attendance and engagement tracking" },
  { icon: ClipboardCheck, label: "Coaching tools for trainers" },
  { icon: MessageSquare, label: "Member and parent communication" },
  { icon: BarChart3, label: "Clear reporting for managers" },
];

export function FitDeskOverview() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything your gym or fitness centre needs — in one system
          </h2>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto">
            A complete platform that covers the full scope of gym operations:
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-primary/20 border border-primary/30"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="font-medium text-text-on-dark">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-text-on-dark-muted"
        >
          <ArrowRight className="h-5 w-5 text-primary" />
          <p className="text-lg">
            So everyone works from the same system — without friction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
