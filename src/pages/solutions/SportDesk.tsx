import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { PageFaqs, type PageFaq } from "@/components/shared/PageFaqs";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Calendar, ClipboardCheck, TrendingUp, MessageSquare } from "lucide-react";

const features = [
  { icon: Calendar, title: "Class scheduling and rosters", text: "Plan classes, venues and instructors in one calendar." },
  { icon: ClipboardCheck, title: "Attendance", text: "Mark attendance on a tablet or phone." },
  { icon: TrendingUp, title: "Skills and progression", text: "Track each student's level and progress over time." },
  { icon: MessageSquare, title: "Parent app and communication", text: "Keep parents updated with progress and messages." },
];

const faqs: PageFaq[] = [
  {
    question: "Is SportDesk for swim schools?",
    answer: "No. Swim schools and aquatic centres use SwimDesk.",
  },
  {
    question: "Where is data hosted?",
    answer: "Australian customer data stays in Australia, hosted on AWS in Sydney.",
  },
];

const SportDesk = () => {
  return (
    <Layout>
      <SEO
        title="Sports Class Management Software Australia | SportDesk"
        noSuffix
        description="Sports class software for Australian and NZ centres: scheduling, attendance, progression and parent communication for martial arts, gymnastics and tennis."
        canonical="/solutions/sportdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SportDesk",
          "description": "Sports class software for Australian and NZ centres: scheduling, attendance, progression and parent communication for martial arts, gymnastics and tennis.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Sports Class Management Software"
        }}
        faq={faqs}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/sportdesk" }, { label: "SportDesk" }]} />

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
                <Trophy className="h-4 w-4" />
                Sports classes
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Sports class software for martial arts, gymnastics, tennis and{" "}
                <span className="text-gradient-primary">more</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                SportDesk helps Australian and New Zealand centres run structured sports classes:
                scheduling, attendance, progression and parent communication in one place.
                Swim schools use SwimDesk.
              </p>

              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-background border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="font-display text-lg font-bold mb-2">{feature.title}</h2>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Explore Related Solutions"
        pages={[
          { title: "SwimDesk", description: "Swim school and aquatic centre software", href: "/solutions/swimdesk" },
          { title: "FitDesk", description: "Gym and leisure centre operations", href: "/solutions/fitdesk" },
          { title: "Council and leisure centres", description: "Software for council leisure and aquatic centres", href: "/solutions/council" },
        ]}
      />

      <PageFaqs heading="SportDesk questions" faqs={faqs} />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bring structure to your sports classes
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SportDesk;
