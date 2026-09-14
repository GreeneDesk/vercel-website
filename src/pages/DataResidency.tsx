import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Lock, Users, FileX, Check, Globe } from "lucide-react";

const keyPoints = [
  { icon: MapPin, title: "Stored in Australia using AWS infrastructure in the Sydney region (ap-southeast-2)" },
  { icon: Lock, title: "Role-based access, restricted to operational needs" },
  { icon: Shield, title: "All access logged and monitored" },
  { icon: FileX, title: "Named infrastructure providers and subprocessors only — customer data is never sold or shared for marketing" },
];

const idealFor = [
  "Councils requiring data sovereignty",
  "Schools with strict privacy requirements",
  "Long-term operators planning for the future",
  "Organisations reassessing overseas-hosted platforms",
];

const DataResidency = () => {
  return (
    <Layout>
      <SEO
        title="Australian Data Residency – AWS Sydney Hosted"
        description="GreeneDesk customer data is stored in Australia using AWS infrastructure in the Sydney region, with role-based access, audit trails and Australian Privacy Principles alignment."
        canonical="/data-residency"
        faq={[
          { question: "Where is GreeneDesk customer data stored?", answer: "GreeneDesk customer data is stored in Australia using AWS infrastructure in the Sydney region (ap-southeast-2)." },
          { question: "Which providers are involved in storing our data?", answer: "Amazon Web Services provides the underlying infrastructure in the Sydney region. GreeneDesk uses a limited set of subprocessors for services such as transactional email, and does not sell customer data or share it for marketing purposes." },
          { question: "Is GreeneDesk compliant with Australian Privacy Principles?", answer: "Yes. GreeneDesk is designed to comply with Australian Privacy Principles (APPs) including APP 8 regarding cross-border disclosure." },
          { question: "Who can access our data?", answer: "Access is role-based and restricted to operational needs, and all access is logged and monitored. Where authorised support personnel outside Australia access systems for maintenance or support, that access is governed by contractual confidentiality obligations and technical safeguards." },
        ]}
      />
      <Breadcrumbs items={[{ label: "Data Residency" }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border border-primary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 border border-primary-foreground/20 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Shield className="h-4 w-4" />
                Built in Australia for the World.
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Australian data hosting.{" "}
                <span className="text-primary">Clear accountability.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-on-dark-muted mb-8">
                GreeneDesk customer data is stored in Australia using AWS infrastructure in the Sydney region (ap-southeast-2). Access is role-based, logged and monitored.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold pt-2">{point.title}</h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8 p-6 rounded-xl bg-surface-section border border-border"
          >
            <h3 className="font-display text-lg font-semibold mb-3">How this works in practice</h3>
            <dl className="space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold">Data storage location</dt>
                <dd className="text-muted-foreground">Customer data is stored in Australia, in the AWS Sydney region (ap-southeast-2).</dd>
              </div>
              <div>
                <dt className="font-semibold">Infrastructure provider</dt>
                <dd className="text-muted-foreground">Amazon Web Services provides the hosting, storage and backup infrastructure used by GreeneDesk.</dd>
              </div>
              <div>
                <dt className="font-semibold">Subprocessors</dt>
                <dd className="text-muted-foreground">GreeneDesk uses a limited set of subprocessors for supporting services such as transactional email and system monitoring. A current list is available on request.</dd>
              </div>
              <div>
                <dt className="font-semibold">Authorised support access</dt>
                <dd className="text-muted-foreground">Access by GreeneDesk personnel is role-based, restricted to operational needs, logged and monitored.</dd>
              </div>
              <div>
                <dt className="font-semibold">Cross-border access</dt>
                <dd className="text-muted-foreground">Where authorised support personnel located outside Australia access systems for maintenance or support purposes, that access is governed by contractual confidentiality obligations and technical safeguards. Customer data continues to be stored in the Sydney region. This model is designed to align with the Australian Privacy Principles, including APP 8 (Cross-border Disclosure).</dd>
              </div>
              <div>
                <dt className="font-semibold">Security and audit controls</dt>
                <dd className="text-muted-foreground">Encryption in transit, role-based permissions, access logging and audit trails apply across the platform. Final privacy and data-processing wording should be confirmed with your own privacy officer before contract.</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Designed For */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Designed for organisations that care about data governance
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Learn More About GreeneDesk"
        pages={[
          { title: "CEO & Owner Visibility", description: "Strategic dashboards with governance and compliance", href: "/platform/ceos" },
          { title: "Pricing", description: "Flexible pricing for centres of all sizes", href: "/pricing" },
          { title: "Integrations", description: "Connect with your existing systems", href: "/integrations" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Want to learn more about our data practices?
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

export default DataResidency;