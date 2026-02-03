import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, MapPin, Lock, Users, Check, Globe } from "lucide-react";

const dataPoints = [
  { icon: MapPin, text: "All customer data hosted in Australia" },
  { icon: Lock, text: "Role-based access controls" },
  { icon: Globe, text: "Cross-border access under strict contractual safeguards" },
  { icon: Check, text: "Aligned with Australian Privacy Principles (APP 8)" },
];

export function FitDeskDataResidency() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-background p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-sm font-medium text-primary">Built in Australia for the World.</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Australian data hosting with global reach
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {dataPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="pt-1">{point.text}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Where authorised support personnel located outside Australia access systems for maintenance purposes, such access is performed under strict contractual confidentiality obligations and technical safeguards — without offshore storage or processing of customer data.
          </p>

          <Link
            to="/data-residency"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Learn more about our data practices
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
