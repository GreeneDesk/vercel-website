import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLANS, PRODUCTS, type Product } from "@/data/pricing";

export function PricingCards() {
  const [product, setProduct] = useState<Product>("SwimDesk");
  const [annual, setAnnual] = useState(false);
  const plans = PLANS[product];

  return (
    <section className="section-padding bg-surface-dark text-text-on-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-glow mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Simple pricing, <span className="text-primary">no surprises</span>
          </h2>
          <p className="text-text-on-dark-muted max-w-xl mx-auto">
            {product === "FitDesk"
              ? "FitDesk is priced by active members."
              : `${product} is priced by enrolments.`}{" "}
            All plans include onboarding, AU-based support, and data hosted on AWS Sydney.
          </p>
        </motion.div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PRODUCTS.map((p) => (
            <button
              key={p}
              onClick={() => setProduct(p)}
              className={`px-5 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${
                product === p
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-dark-elevated text-text-on-dark-muted border border-border/20 hover:bg-surface-dark-elevated/80"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface-dark-elevated rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition-all ${
                !annual ? "bg-primary text-primary-foreground" : "text-text-on-dark-muted"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition-all ${
                annual ? "bg-primary text-primary-foreground" : "text-text-on-dark-muted"
              }`}
            >
              Annual{" "}
              <span className="ml-1 inline-block rounded-full bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "bg-primary/90 border-2 border-accent"
                  : "bg-surface-dark-elevated/50 border border-border/10"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              <p className="text-xs font-bold uppercase tracking-widest text-primary-glow mb-1">
                {product}
              </p>
              <h3 className="font-display text-xl font-bold text-text-on-dark mb-2">{plan.name}</h3>
              <p className="text-sm text-text-on-dark-muted mb-6 min-h-[52px] leading-relaxed">
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-sm text-text-on-dark-muted">A$</span>
                <span className="font-display text-5xl font-bold text-text-on-dark leading-none">
                  {annual ? plan.annual : plan.monthly}
                </span>
                <span className="text-sm text-text-on-dark-muted">/mo</span>
              </div>
              <p className="text-xs text-text-on-dark-muted mb-6">{plan.students}</p>

              <div className="h-px bg-border/20 mb-6" />

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    {f.included ? (
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-text-on-dark-muted/30 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? "text-text-on-dark/80" : "text-text-on-dark-muted/40"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" className="w-full" asChild>
                <Link to="/demo">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-text-on-dark-muted/50 text-sm mt-10">
          <strong className="text-text-on-dark-muted/70">No per-transaction fees. No surprise invoices.</strong>{" "}
          All pricing in AUD. Annual plans billed upfront.
          <br />
          Questions? Call <strong className="text-text-on-dark-muted/70">1300 181 665</strong> or email{" "}
          <strong className="text-text-on-dark-muted/70">anita.w@greenedesk.com</strong>
        </p>
      </div>
    </section>
  );
}
