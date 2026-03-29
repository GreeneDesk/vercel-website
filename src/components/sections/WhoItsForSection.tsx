import { motion } from "framer-motion";
import { 
  Building2, 
  Waves, 
  Heart, 
  Stethoscope, 
  Trophy,
  Check
} from "lucide-react";

const audiences = [
  { icon: Building2, text: "Council leisure centres" },
  { icon: Waves, text: "Aquatic centres and swim schools" },
  { icon: Heart, text: "Wellness and active ageing programs" },
  { icon: Stethoscope, text: "Rehab and exercise-based services" },
  { icon: Trophy, text: "Coaching and competitive sports programs" },
];

export function WhoItsForSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Who It Is For
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
        </motion.div>
      </div>
    </section>
  );
}
