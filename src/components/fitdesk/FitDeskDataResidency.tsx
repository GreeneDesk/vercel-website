import { motion } from "framer-motion";
import { Shield, MapPin, Lock } from "lucide-react";

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
          <div className="text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Data & Deployment
            </h2>

            <div className="space-y-4 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Hosted in Sydney, Australia</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Designed for secure and compliant operations</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Works across devices and environments</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
