import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Using PerfectGym?",
    copy: "Add assessments, programming, scheduling and engagement without replacing your management system.",
    cta: "Complete PerfectGym",
    href: "/integrations/perfectgym",
  },
  {
    title: "Using Mywellness?",
    copy: "Explore an Australian-hosted alternative for your programming and member-engagement workflows.",
    cta: "Replace Mywellness",
    href: "/technogym-mywellness-alternative",
  },
];

export function FitDeskPathwayCards() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          FitDesk can operate independently or alongside management platforms such as PerfectGym.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-8 flex flex-col"
            >
              <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1">{card.copy}</p>
              <Button asChild variant="outline" className="self-start">
                <Link to={card.href}>
                  {card.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
