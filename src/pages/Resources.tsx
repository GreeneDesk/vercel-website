import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Dumbbell, Users, Waves, GraduationCap, Trophy, MapPin, Puzzle } from "lucide-react";

const categories = [
  { icon: Dumbbell, title: "Gym operations", href: "/resources/gym-operations" },
  { icon: Users, title: "Retention & engagement", href: "/resources/retention" },
  { icon: Waves, title: "Swim school management", href: "/resources/swim-schools" },
  { icon: GraduationCap, title: "School programs", href: "/resources/school-programs" },
  { icon: Trophy, title: "Squads", href: "/resources/squads" },
  { icon: MapPin, title: "Data residency in Australia", href: "/resources/data-residency" },
  { icon: Puzzle, title: "Integrations", href: "/resources/integrations" },
];

const Resources = () => {
  return (
    <Layout>
      <SEO title="Resources – Guides & Best Practices" description="Guides, articles, and best practices for running gyms, swim schools, and recreation centres. Operational tips from the GreeneDesk team." canonical="/resources" />
      <Breadcrumbs items={[{ label: "Why GreeneDesk", href: "/resources" }, { label: "Resources" }]} />
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
                Guides, best practices, and insights for running better sports and recreation centres.
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
                    <span>Browse articles</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
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
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a demo and our team will walk you through how GreeneDesk can help your specific situation.
            </p>
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

export default Resources;