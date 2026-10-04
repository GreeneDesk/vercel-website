import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, Check, Quote } from "lucide-react";

const why = [
  { title: "Built for swimming", body: "iClassPro serves gymnastics, cheer, dance and swim. SwimDesk is built around swim: poolside skills assessments, level progressions, certificates and pool and lane scheduling." },
  { title: "Your data stays in Australia", body: "SwimDesk is hosted on AWS in Sydney, so student and family records are stored in Australia." },
  { title: "Australian curricula, or your own", body: "AUSTSWIM, Royal Life Saving and YMCA levels are supported, or load your own syllabus and lesson plans." },
  { title: "Local support", body: "An Australian-based team on 1300 181 665, Monday to Friday 7am–7pm AEST." },
];

const features = [
  "Class scheduling and online bookings",
  "Poolside attendance and skills assessments, with offline tablet mode",
  "Level progressions, assessment history and digital certificates",
  "Parent app: bookings, absences, make-up classes, progress",
  "Term-based and recurring billing",
  "Automated emails: welcome, birthday, progress",
  "School swimming programs and group bookings",
  "Works alongside PerfectGym and Envibe at council centres",
];

const IClassProAlternative = () => (
  <Layout>
    <SEO
      title="iClassPro Alternative for Australian Swim Schools | SwimDesk by GreeneDesk"
      description="Switching from iClassPro? SwimDesk is swim school software built in Australia and hosted on AWS Sydney, with poolside assessments, level progressions, a parent app and term billing."
      canonical="/iclasspro-alternative"
    />
    <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: "iClassPro Alternative" }]} />

    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="container-wide relative py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-widest text-primary mb-5">
            For swim schools moving from iClassPro
          </p>
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-5">
            The iClassPro alternative built for <span className="text-gradient-primary">Australian swim schools</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-7">
            SwimDesk is built around learn-to-swim, not every class type. Poolside assessments, level progressions and certificates, a parent app with make-up classes, and term billing. Hosted in Sydney, supported from Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
              <Link to="/demo?source=iclasspro-alternative">Book a Demo <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
              <Link to="/solutions/swimdesk">See SwimDesk</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-surface-section">
      <div className="container-wide max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">Why swim schools switch to SwimDesk</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {why.map((w) => (
            <div key={w.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-display text-lg font-bold mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">What you get with SwimDesk</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl border border-border p-5">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-sm font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section-padding bg-surface-section">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <Quote className="h-8 w-8 text-primary mx-auto mb-4" aria-hidden="true" />
        <blockquote className="font-display text-xl md:text-2xl font-medium mb-4">
          “I literally looked around the world for such a program but could not find one that would allow us to use our own syllabus and lesson plans.”
        </blockquote>
        <p className="text-sm text-muted-foreground">Swim School Owner</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">See SwimDesk with your levels and classes</h2>
        <p className="text-muted-foreground mb-7">A short, practical demo set up for your swim school. We walk through your levels, classes and billing and agree a go-live date.</p>
        <Button variant="cta" size="lg" asChild>
          <Link to="/demo?source=iclasspro-alternative">Book a Demo <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-8">
          iClassPro is a trademark of its respective owner. GreeneDesk is not affiliated with or endorsed by iClassPro.
        </p>
      </div>
    </section>
  </Layout>
);

export default IClassProAlternative;
