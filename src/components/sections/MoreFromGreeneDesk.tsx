import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Trophy, Waves } from "lucide-react";

const products = [
  {
    icon: Waves,
    name: "SwimDesk",
    copy: "Swim-school assessment, progression, attendance and parent-engagement software.",
    href: "/solutions/swimdesk",
    cta: "Explore SwimDesk",
  },
  {
    icon: Trophy,
    name: "SportDesk",
    copy: "Squad, coaching and structured sports-program management.",
    href: "/solutions/sportdesk",
    cta: "Explore SportDesk",
  },
  {
    icon: ShieldCheck,
    name: "SooperVision",
    copy: "AI supervision risk alerts for childcare centres on your existing CCTV.",
    href: "/solutions/soopervision",
    cta: "Explore SooperVision",
  },
];

export function MoreFromGreeneDesk() {
  return (
    <section className="py-14 bg-surface-section border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-8"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-2">More from GreeneDesk</h2>
          <p className="text-sm text-muted-foreground">
            GreeneDesk also provides specialist software for aquatic and structured sports programs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {products.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="group rounded-xl border border-border bg-background p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <p.icon className="h-4 w-4 text-primary" />
                <h3 className="font-display text-base font-semibold">{p.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{p.copy}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
