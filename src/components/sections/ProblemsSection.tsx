import { motion } from "framer-motion";
import { 
  Clock, 
  HelpCircle, 
  TrendingDown, 
  Unplug, 
  FileSpreadsheet, 
  Globe 
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "Staff spending too much time on admin instead of members",
  },
  {
    icon: HelpCircle,
    text: 'Parents asking, "How is my child actually progressing?"',
  },
  {
    icon: TrendingDown,
    text: "Attendance slowly dropping — noticed too late",
  },
  {
    icon: Unplug,
    text: "Multiple systems that don't talk to each other",
  },
  {
    icon: FileSpreadsheet,
    text: "School and squad reporting that takes days, not minutes",
  },
  {
    icon: Globe,
    text: "Overseas software with unclear data hosting",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function ProblemsSection() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These challenges are common across Australian gyms, swim schools, and recreation centres.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}