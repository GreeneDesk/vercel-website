import { motion } from "framer-motion";
import { 
  UserCheck, 
  Lightbulb, 
  Heart, 
  Clock, 
  TrendingUp 
} from "lucide-react";

const benefits = [
  { icon: UserCheck, text: "Trainers engage more with the system" },
  { icon: Lightbulb, text: "Members understand what they're doing" },
  { icon: Heart, text: "Seniors feel supported, not confused" },
  { icon: Clock, text: "Managers spend less time chasing information" },
  { icon: TrendingUp, text: "Decisions are based on insight, not guesswork" },
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
            Why mid and large centres choose FitDesk
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference a comprehensive, purpose-built system makes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
