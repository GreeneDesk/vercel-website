import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageFaqs, type PageFaq } from "@/components/shared/PageFaqs";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";

const checklist = [
  {
    title: "Poolside, even offline",
    answer: "SwimDesk poolside assessments and attendance work on a tablet, even without wifi.",
  },
  {
    title: "Levels and curriculum",
    answer: "Supports AUSTSWIM, Royal Life Saving and YMCA levels, or your own levels and skills.",
  },
  {
    title: "School programs",
    answer: "Poolside assessments and level grouping, attendance, certificates and reports for each school.",
  },
  {
    title: "Squads",
    answer: "Squad groups, attendance, coach rosters and a swimmer and parent app.",
  },
  {
    title: "Where your data lives",
    answer: "Customer data is hosted on AWS in Sydney. New Zealand customers are also hosted in Sydney.",
  },
  {
    title: "Moving your data",
    answer: "We import families, students, levels and class lists from your existing export. Setup and data migration typically take about 2 weeks, depending on the data supplied.",
  },
  {
    title: "Support",
    answer: "An Australian-based team on 1300 181 665, Monday to Friday 7am–7pm AEST.",
  },
];

const steps = [
  { title: "Demo and plan", body: "We walk through your levels, classes and billing and agree a go-live date." },
  { title: "Data import", body: "We import families, students, levels and class lists from your export." },
  { title: "Set up and train", body: "We configure your levels and train your office team and instructors." },
  { title: "Go live", body: "Families get the parent app and you start the new term on SwimDesk." },
];

const faqs: PageFaq[] = [
  {
    question: "Is SwimDesk affiliated with SimplySwim?",
    answer: "No. SwimDesk is independent of SimplySwim.",
  },
  {
    question: "Can we keep our current billing or management system?",
    answer: "Yes. SwimDesk works alongside systems such as PerfectGym and Envibe.",
  },
  {
    question: "How long does a switch take?",
    answer: "Setup and data migration typically take about 2 weeks, depending on the data supplied.",
  },
];

const SimplySwimAlternative = () => (
  <Layout>
    <SEO
      title="SimplySwim Alternative for Australian Swim Schools | SwimDesk"
      noSuffix
      description="Thinking of switching from SimplySwim? A checklist for choosing swim school software, and how SwimDesk answers it. Hosted in Sydney."
      canonical="/simplyswim-alternative"
      faq={faqs}
    />
    <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: "SimplySwim Alternative" }]} />

    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
      <div className="container-wide relative py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-widest text-primary mb-5">
            For swim schools considering a move
          </p>
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-5">
            A SimplySwim alternative built for <span className="text-gradient-primary">Australian swim schools</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-7">
            SwimDesk is swim school software made in Australia, with customer data hosted in Sydney and local support on 1300 181 665, Monday to Friday 7am–7pm AEST.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" className="md:h-14 md:px-8 md:text-base" asChild>
              <Link to="/demo?source=simplyswim-alternative">Book a Demo <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">What to check before you switch</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          Rather than publishing claims about another vendor's current features, test any swim school software against these points with your own requirements in hand.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {checklist.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-display text-lg font-bold mb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">How the switch works</h2>
        <ol className="grid sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-border bg-background p-6">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</p>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <PageFaqs heading="SimplySwim alternative questions" faqs={faqs} />

    <section className="section-padding bg-surface-section">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">See SwimDesk with your levels and classes</h2>
        <Button variant="cta" size="lg" asChild>
          <Link to="/demo?source=simplyswim-alternative">Book a Demo <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-8">
          SimplySwim is a trademark of its respective owner. GreeneDesk is not affiliated with or endorsed by SimplySwim.
        </p>
      </div>
    </section>
  </Layout>
);

export default SimplySwimAlternative;
