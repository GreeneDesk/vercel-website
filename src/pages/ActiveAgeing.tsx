import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { activeAgeing as c } from "@/content/active-ageing";

const ActiveAgeing = () => {
  return (
    <Layout>
      <SEO title={c.seo.title} description={c.seo.description} canonical="/active-ageing-rehab-software" />
      <Breadcrumbs items={[{ label: "FitDesk", href: "/solutions/fitdesk" }, { label: "Active Ageing & Rehab" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="container-wide relative py-12 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-widest text-primary mb-5">
              {c.hero.eyebrow}
            </p>
            <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-5">{c.hero.h1}</h1>
            <p className="text-base md:text-lg text-muted-foreground mb-7">{c.hero.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
                <Link to={c.hero.primaryCta.href}>
                  {c.hero.primaryCta.label}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
                <Link to={c.hero.secondaryCta.href}>{c.hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">{c.programs.heading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.programs.items.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-background p-7 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground flex-1">{p.body}</p>
                {p.title === "Restorative and aged care programs" && (
                  <Link to="/aged-care-retirement-living-fitness" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    FitDesk for aged care and retirement villages
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">{c.features.heading}</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {c.features.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-12 text-center container-wide max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{c.proof.heading}</h2>
        <p className="text-muted-foreground">{c.proof.body}</p>
      </section>
      <TrustedBySection />

      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">{c.outcomes.heading}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.outcomes.items.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display text-xl font-bold mb-2">{o.title}</h3>
                <p className="text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{c.cta.heading}</h2>
          <p className="text-primary-foreground/90 mb-8">{c.cta.sub}</p>
          <Button variant="secondary" size="xl" asChild>
            <Link to={c.cta.button.href}>
              {c.cta.button.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="container-wide py-6">
        <p className="text-xs text-muted-foreground">{c.disclaimer}</p>
      </div>
    </Layout>
  );
};

export default ActiveAgeing;
