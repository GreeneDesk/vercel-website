import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trusted by centres across{" "}
            <span className="text-gradient-primary">Australia & New Zealand</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real operators. Real results. From private swim schools to council-run aquatic centres.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl border border-border p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <span className="font-display text-4xl font-bold text-primary leading-none">"</span>

              <p className="text-muted-foreground italic leading-relaxed flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="text-xl">{t.flag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
