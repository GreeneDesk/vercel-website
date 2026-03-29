import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, MapPin, Lock, ArrowRight } from "lucide-react";

export function DataResidencyTeaser() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border border-primary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 border border-primary-foreground/20 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
              Built for Australia and New Zealand
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-text-on-dark">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>All data hosted in Sydney, Australia</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-text-on-dark">
                <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Designed for local compliance and operational needs</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-text-on-dark">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Trusted by centres that require strong data governance</span>
              </div>
            </div>
            
            <Button variant="cta" asChild>
              <Link to="/data-residency">
                Data Residency & Trust
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
