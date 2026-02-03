import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Calendar, 
  CreditCard, 
  Smartphone, 
  MessageSquare, 
  BarChart3,
  Puzzle,
  ArrowRight,
  Check
} from "lucide-react";

const allInOneFeatures = [
  { icon: Calendar, text: "Scheduling & enrolments" },
  { icon: CreditCard, text: "Built-in payments & billing" },
  { icon: Smartphone, text: "Member / parent app" },
  { icon: MessageSquare, text: "Messaging & certificates" },
  { icon: BarChart3, text: "Simple reporting" },
];

const integratedFeatures = [
  "Works alongside systems like PerfectGym",
  "Adds deeper scheduling, assessments and engagement",
  "Keeps existing billing and finance workflows",
  "No rip-and-replace",
];

export function DeploymentSection() {
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
            Designed to fit your centre — not force a new way of working
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the deployment model that matches your operation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* All-in-One Option */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-border bg-background p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Best for smaller operators
              </span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 mt-4">
              All-in-One
            </h3>
            <p className="text-muted-foreground mb-6">
              Everything you need in one unified platform
            </p>
            
            <ul className="space-y-4 mb-8">
              {allInOneFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" asChild>
                <Link to="/solutions/swimdesk">
                  View SwimDesk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/solutions/sportdesk">
                  View SportDesk
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Integrated Intelligence Option */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl border-2 border-accent bg-accent/5 p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Best for larger centres
              </span>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2 mt-4">
              Integrated Intelligence
            </h3>
            <p className="text-muted-foreground mb-6">
              Enhance your existing systems with deeper capabilities
            </p>
            
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
              <Puzzle className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <ul className="space-y-3 mb-8">
              {integratedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="cta" asChild>
              <Link to="/solutions/fitdesk">
                View FitDesk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}