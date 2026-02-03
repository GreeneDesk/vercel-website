import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

const benefits = [
  "Short, practical walkthrough",
  "No pressure sales pitch",
  "We'll map your programs, setup and integrations",
];

export function FinalCTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover mb-8">
            <Calendar className="h-8 w-8 text-accent-foreground" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            See how GreeneDesk would work in your centre
          </h2>
          
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button variant="cta" size="xl" asChild>
            <Link to="/demo">
              Request a Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}