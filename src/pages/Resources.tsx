import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Dumbbell, Users, Waves, HeartPulse, Trophy, MapPin, Puzzle, ClipboardList, CalendarClock, RefreshCw, ShieldCheck } from "lucide-react";

const categories = [
  { icon: Puzzle, title: "PerfectGym integrations", href: "/integrations/perfectgym" },
  { icon: RefreshCw, title: "Mywellness alternatives and migration", href: "/technogym-mywellness-alternative" },
  { icon: Dumbbell, title: "Workout programming", href: "/platform/workout-programming" },
  { icon: ClipboardList, title: "Digital health assessments", href: "/platform/teacher-trainer" },
  { icon: Users, title: "Member engagement and retention", href: "/platform/analytics" },
  { icon: CalendarClock, title: "Trainer scheduling", href: "/platform/roster-scheduler" },
  { icon: HeartPulse, title: "Active ageing and rehabilitation", href: "/solutions/fitdesk" },
  { icon: MapPin, title: "Australian data residency", href: "/data-residency" },
  { icon: Waves, title: "Swim-school management", href: "/solutions/swimdesk" },
  { icon: Trophy, title: "Sports and squad management", href: "/solutions/sportdesk" },
  { icon: Users, title: "Educator-to-child ratio calculator", href: "https://soopervision.com.au/tools/educator-to-child-ratio-calculator", external: true },
  { icon: ShieldCheck, title: "QA2 supervision self-audit checklist", href: "https://soopervision.com.au/tools/qa2-supervision-self-audit-checklist", external: true },
];

const Resources = () => {
  return (
    <Layout>
      <SEO title="Resources – Guides & Best Practices" description="Guides on PerfectGym integrations, Mywellness alternatives, workout programming, assessments, member engagement and Australian data residency." canonical="/resources" />
      <Breadcrumbs items={[{ label: "Resources" }]} />
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
                <BookOpen className="h-4 w-4" />
                Knowledge Base
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Resources
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Guides for improving fitness-floor operations, member engagement and program delivery—without replacing your core management system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {'external' in category && category.external ? (
                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener"
                    className="block p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Open tool</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </a>
                ) : (
                  <Link
                    to={category.href}
                    className="block p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Explore GreeneDesk"
        pages={[
          { title: "FitDesk", description: "Fitness operations and member engagement software", href: "/solutions/fitdesk" },
          { title: "SwimDesk for Swim Schools", description: "Swim school management platform", href: "/solutions/swimdesk" },
          { title: "Pricing", description: "Flexible plans for centres of all sizes", href: "/pricing" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a demo and our team will walk you through how FitDesk fits your facility and existing systems.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Book a FitDesk Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;