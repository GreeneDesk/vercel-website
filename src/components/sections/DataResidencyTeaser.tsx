import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, MapPin, Lock, ArrowRight } from "lucide-react";

export function DataResidencyTeaser() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 border border-primary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 border border-primary-foreground/20 rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium">Built in Australia for the World.</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
                Australian data hosting with global reach
              </h2>
              
              <p className="text-lg text-text-on-dark-muted mb-8 max-w-lg">
                Customer data hosted exclusively on AWS Sydney. Access is role-based, logged and monitored — with no third-party providers involved in data processing or storage.
              </p>
              
              <Button variant="cta" asChild>
                <Link to="/data-residency">
                  Data Residency & Trust
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-xl bg-background/10 backdrop-blur-sm p-6 text-center"
                >
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-text-on-dark font-medium">Australian Hosted</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="rounded-xl bg-background/10 backdrop-blur-sm p-6 text-center"
                >
                  <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-text-on-dark font-medium">Role-Based Access</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="rounded-xl bg-background/10 backdrop-blur-sm p-6 text-center col-span-2"
                >
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-text-on-dark font-medium">APP 8 Compliant</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}