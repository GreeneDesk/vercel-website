import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Activity, 
  Waves, 
  Trophy,
  Check
} from "lucide-react";

const products = [
  {
    icon: Activity,
    name: "FitDesk",
    tagline: "For leisure centres, wellness facilities, rehab, and active ageing programs",
    features: [
      "Advanced scheduling for trainers and services",
      "Digital assessments and member history",
      "Exercise programming with video library",
      "Trainer to member engagement tools",
      "Mobile apps for staff and members",
    ],
    href: "/solutions/fitdesk",
    cta: "Explore FitDesk",
  },
  {
    icon: Waves,
    name: "SwimDesk",
    tagline: "For swim schools and aquatic centres",
    features: [
      "Parent booking, rescheduling, and absence management",
      "Attendance and skills tracking",
      "Digital certificates",
      "Payments and discounts",
      "Instructor and manager apps",
    ],
    href: "/solutions/swimdesk",
    cta: "Explore SwimDesk",
  },
  {
    icon: Trophy,
    name: "SportDesk (Squads & Coaching)",
    tagline: "For competitive and structured training environments",
    features: [
      "Squad scheduling and attendance",
      "Heat creation and time tracking",
      "Qualifying benchmarks",
      "Wet and dry workout tracking",
      "Athlete and parent apps",
    ],
    href: "/solutions/sportdesk",
    cta: "Explore SportDesk",
  },
];

const multiSportTypes = [
  "Gymnastics centres",
  "Martial arts studios",
  "Tennis academies",
  "Badminton schools",
];

export function ProductsSection() {
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
            Our Products
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <product.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-6">{product.tagline}</p>
              
              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="default" asChild>
                <Link to={product.href}>
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Multi-Sport Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-4">Multi-Sport Support</h3>
          <p className="text-muted-foreground mb-6">GreeneDesk is already used across:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {multiSportTypes.map((type, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
