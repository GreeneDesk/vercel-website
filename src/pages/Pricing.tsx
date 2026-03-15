import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, Check, Building2, TrendingUp, Building } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "All-in-one for swim schools and sports clubs",
    icon: Building2,
    features: [
      "Scheduling & enrolments",
      "Built-in payments",
      "Member/parent app",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "Multi-site operations with automations and analytics",
    icon: TrendingUp,
    popular: true,
    features: [
      "Everything in Starter",
      "Multi-site management",
      "Advanced analytics",
      "Automation workflows",
      "Priority support",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise / Council",
    description: "Integration-first, governance and reporting",
    icon: Building,
    features: [
      "Everything in Growth",
      "PerfectGym/Envibe integration",
      "Advanced governance",
      "Custom reporting",
      "Dedicated support",
      "SLA guarantees",
      "Data residency controls",
    ],
  },
];

const pricingFactors = [
  "Number of locations",
  "Active members or students",
  "Modules used",
  "Integrations required",
];

const Pricing = () => {
  return (
    <Layout>
      <SEO title="Pricing" description="Transparent pricing for GreeneDesk gym, swim school, and sports centre software. Plans for mid-size and large centres." canonical="/pricing" />
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pricing that matches how your centre{" "}
                <span className="text-gradient-primary">operates</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We don't publish flat prices because centres vary — but we are transparent about how pricing works.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border p-8 ${
                  tier.popular 
                    ? "border-2 border-accent bg-accent/5" 
                    : "border-border bg-background"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-xs font-medium text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-6 flex items-center justify-center">
                  <tier.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "cta" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/demo">Get a Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                How we calculate pricing
              </h2>
              <p className="text-muted-foreground">
                Your quote is based on these factors:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <span className="font-medium">{factor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to get a pricing walkthrough?
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Get a Pricing Walkthrough
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;