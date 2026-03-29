import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Check, Calendar, Award, Users, Smartphone } from "lucide-react";

const features = [
  { icon: Calendar, title: "Scheduling & Booking", description: "Parent booking, rescheduling, and absence management for learn-to-swim programs." },
  { icon: Award, title: "Skills & Certificates", description: "Track skills, issue digital certificates, and manage progression pathways." },
  { icon: Users, title: "School Programs", description: "Bulk intake, poolside assessments, and structured reporting for school swimming." },
  { icon: Smartphone, title: "Instructor & Parent Apps", description: "Mobile-first tools for instructors and a parent app for bookings and progress." },
];

const SwimSchoolSoftware = () => {
  return (
    <Layout>
      <SEO
        title="Swim School Software Australia"
        description="SwimDesk is swim school software for Australian aquatic centres. Booking, skills tracking, certificates, school programs, and parent engagement."
        canonical="/swim-school-software-australia"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Swim School Software Australia – SwimDesk by GreeneDesk",
          description: "Complete swim school management for Australian aquatic centres. Booking, attendance, skills tracking, certificates, and school programs.",
          provider: { "@type": "Organization", name: "GreeneDesk" },
          areaServed: "AU",
          serviceType: "Swim School Software",
        }}
        faq={[
          { question: "What is the best swim school software in Australia?", answer: "SwimDesk by GreeneDesk is purpose-built for Australian swim schools and aquatic centres, covering booking, skills tracking, certificates, school programs, and parent engagement." },
          { question: "Can SwimDesk manage school swimming programs?", answer: "Yes. SwimDesk Schools handles bulk student intake, poolside assessments, attendance, and automated reporting and certificates." },
        ]}
      />
      <Breadcrumbs items={[{ label: "Swim School Software Australia" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Waves className="h-4 w-4" />
                Swim School Software Australia
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Swim school software{" "}
                <span className="text-gradient-primary">for Australian aquatic centres</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                SwimDesk is the complete operating system for swim schools. Parent booking, skills tracking, certificates, school programs, and instructor tools — all hosted in Australia.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">SwimDesk Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages heading="Explore Solutions" pages={[
        { title: "SwimDesk", description: "Full swim school management platform", href: "/solutions/swimdesk" },
        { title: "School Programs", description: "End-to-end school swimming management", href: "/solutions/school-programs" },
        { title: "Aquatic Centre Software", description: "Complete aquatic operations", href: "/solutions/swimdesk" },
      ]} />

      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">See SwimDesk in action</h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">Book a Demo <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SwimSchoolSoftware;
