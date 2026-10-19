import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Moving from iClassPro",
    description: "How SwimDesk works for swim schools, and what a switch involves.",
    href: "/iclasspro-alternative",
  },
  {
    title: "Moving from SimplySwim",
    description: "A checklist to test any swim school software, and how SwimDesk answers each point.",
    href: "/simplyswim-alternative",
  },
  {
    title: "Using PerfectGym? Keep it",
    description: "Add FitDesk for assessments, programming and member engagement without replacing PerfectGym.",
    href: "/integrations/perfectgym",
  },
  {
    title: "Moving from Mywellness",
    description: "Move programming and member engagement to an Australian-hosted platform.",
    href: "/technogym-mywellness-alternative",
  },
];

const Compare = () => {
  return (
    <Layout>
      <SEO
        title="Switching Software? Start Here | GreeneDesk"
        noSuffix
        description="Practical guides for swim schools, gyms and leisure centres moving to SwimDesk or FitDesk. Data hosted in Sydney."
        canonical="/compare"
      />
      <Breadcrumbs items={[{ label: "Compare" }]} />

      <section className="pt-10 md:pt-14">
        <div className="container-wide max-w-3xl">
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-4">
            Switching software? Start here
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Practical guides for swim schools, gyms and leisure centres moving to SwimDesk or FitDesk.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={card.href}
                  className="block rounded-xl border border-border bg-background p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <h2 className="font-display text-lg font-bold mb-2">{card.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Book a Demo
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
              Product names are trademarks of their respective owners. GreeneDesk is not affiliated with or endorsed by them.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compare;
