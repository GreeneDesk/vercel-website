import { motion } from "framer-motion";
import { 
  Calendar, 
  ClipboardCheck, 
  Video, 
  MessageSquare, 
  Smartphone,
  Check
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Advanced Scheduling",
    items: [
      "Trainer and resource scheduling",
      "Service and program management",
      "Visibility across teams",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Digital Assessments",
    items: [
      "Replace paper forms",
      "Store complete member history",
      "Track outcomes over time",
    ],
  },
  {
    icon: Video,
    title: "Exercise Programming",
    items: [
      "Thousands of exercises with instructional videos",
      "Build structured programs",
      "Custom templates",
    ],
  },
  {
    icon: MessageSquare,
    title: "Engagement Tools",
    items: [
      "Trainer to member communication",
      "Notifications and reminders",
      "Program adherence tracking",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    items: [
      "Trainer app for on-floor usage",
      "Member app for tracking and engagement",
    ],
  },
];

export function FitDeskModules() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Core Features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
