import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  product?: Testimonial["product"];
  heading?: string;
  subheading?: string;
}

export function TestimonialsSection({ product, heading, subheading }: TestimonialsSectionProps) {
  const items = product ? TESTIMONIALS.filter((t) => t.product === product) : TESTIMONIALS;

  if (items.length === 0) return null;

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
            {heading ?? (
              <>
                Trusted by centres across{" "}
                <span className="text-gradient-primary">Australia &amp; New Zealand</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {subheading ??
              "Real operators. Real results. From private swim schools to council-run aquatic centres."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {items.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 0.1} />
          ))}
        </div>

        {items.length > 3 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.slice(3).map((t, i) => (
              <TestimonialCard key={i + 3} t={t} delay={(i + 3) * 0.1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-background rounded-2xl border border-border p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, s) => (
          <Star key={s} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <span className="font-display text-4xl font-bold text-primary leading-none">"</span>

      <p className="text-muted-foreground italic leading-relaxed flex-1 text-sm">{t.quote}</p>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
          {t.initials}
        </div>
        <div>
          <p className="font-display text-sm font-bold">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {t.role} · {t.flag} {t.country}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
