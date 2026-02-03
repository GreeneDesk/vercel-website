import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Puzzle, Check } from "lucide-react";

const integrations = [
  {
    name: "PerfectGym",
    description: "Keep your existing billing and member management while adding deeper scheduling and engagement.",
  },
  {
    name: "Envibe",
    description: "Integrate with Envibe for enhanced facility management and reporting.",
  },
];

const benefits = [
  "Keep what already works",
  "Add GreeneDesk where depth matters",
  "Retain existing billing systems",
  "Add deeper scheduling, assessments, engagement and analytics",
  "No rip-and-replace required",
];

const Integrations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Puzzle className="h-4 w-4" />
                Seamless Connectivity
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Integrations that reduce{" "}
                <span className="text-gradient-primary">switching risk</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Keep what already works. Add GreeneDesk where depth matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border-2 border-primary bg-background p-8 md:p-12"
            >
              <p className="text-lg text-muted-foreground mb-8">
                GreeneDesk integrates with platforms like PerfectGym and Envibe, allowing you to retain existing billing systems while adding deeper scheduling, assessments, engagement and analytics.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Systems We Integrate With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <Puzzle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{integration.name}</h3>
                <p className="text-muted-foreground">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Want to discuss your integration needs?
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Integrations;