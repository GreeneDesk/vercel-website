import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  Check,
  Layers,
  DollarSign,
  Palette,
  Code,
  Building2,
  Globe,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Code,
    title: "Integration Partners",
    description: "Connect your platform to GreeneDesk's scheduling, assessment, and engagement engine via API.",
    benefits: [
      "REST API access",
      "Webhook event notifications",
      "Dedicated integration support",
      "Joint go-to-market opportunities",
    ],
  },
  {
    icon: Palette,
    title: "White-Label Partners",
    description: "Offer GreeneDesk capabilities under your own brand. Ideal for software vendors serving leisure and sports markets.",
    benefits: [
      "Fully branded experience",
      "Custom deployment options",
      "Revenue share model",
      "Co-branded marketing support",
    ],
  },
  {
    icon: DollarSign,
    title: "Referral Partners",
    description: "Recommend GreeneDesk to your network and earn revenue share on successful deployments.",
    benefits: [
      "Simple referral process",
      "Transparent revenue share",
      "Marketing collateral provided",
      "Dedicated partner manager",
    ],
  },
];

const whyPartner = [
  { icon: Layers, text: "Add operational depth to your platform without building from scratch" },
  { icon: Globe, text: "Multi-sport capability across fitness, aquatics, and sports" },
  { icon: Building2, text: "Australian-hosted infrastructure with enterprise-grade compliance" },
];

const Partners = () => {
  return (
    <Layout>
      <SEO
        title="Partner Ecosystem – Grow With GreeneDesk"
        description="Partner with GreeneDesk to extend your platform. Integration, white-label, and referral opportunities for software vendors in sports and leisure."
        canonical="/partners"
      />
      <Breadcrumbs items={[{ label: "Partners" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Handshake className="h-4 w-4" />
                Partner Ecosystem
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Extend your platform with{" "}
                <span className="text-gradient-primary">GreeneDesk capabilities</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                GreeneDesk is designed as a capability layer. Partner with us to add scheduling, engagement, and program delivery to your existing platform.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Become a Partner <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Partner With GreeneDesk</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyPartner.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Partnership Models</h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <type.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3 flex-1">
                  {type.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Learn More About GreeneDesk"
        pages={[
          { title: "Integrations", description: "How GreeneDesk connects with existing systems", href: "/integrations" },
          { title: "Platform Features", description: "Full overview of capabilities", href: "/platform/features" },
          { title: "Data Residency", description: "Australian-hosted infrastructure", href: "/data-residency" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to explore a partnership?</h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Get in Touch <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
