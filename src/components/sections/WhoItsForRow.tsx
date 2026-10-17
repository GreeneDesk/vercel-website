import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Gyms and fitness floors",
    copy: "Digital screening, assessments, workout programming and a member app. Plugs into PerfectGym.",
    href: "/solutions/fitdesk",
  },
  {
    title: "Seniors, active ageing and rehab",
    copy: "Strength and balance, falls prevention and step-down rehab programs, with progress reports emailed to GPs and families.",
    href: "/active-ageing-rehab-software",
    extra: { label: "Aged care and retirement villages", href: "/aged-care-retirement-living-fitness" },
  },
  {
    title: "Swim schools and aquatic programs",
    copy: "Lessons, school swimming programs and squads, with apps for every user and AI retention alerts.",
    href: "/solutions/swimdesk",
  },
  {
    title: "Councils and multi-site operators",
    copy: "One platform across sites for fitness, aquatic and school programs.",
    href: "/solutions/council",
  },
];

export function WhoItsForRow() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">Who it's for</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{card.copy}</p>
              <Link
                to={card.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
              {card.extra && (
                <Link
                  to={card.extra.href}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
                >
                  {card.extra.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
