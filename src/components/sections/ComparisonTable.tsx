import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";
import { COMPARISONS } from "@/data/comparisons";

export function ComparisonTable() {
  const keys = Object.keys(COMPARISONS);
  const [active, setActive] = useState(keys[0]);
  const data = COMPARISONS[active];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Honest Comparisons
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How does GreeneDesk{" "}
            <span className="text-gradient-primary">stack up?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Transparent, feature-by-feature comparison against the alternatives.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-5 py-2.5 rounded-lg font-display font-bold text-sm transition-all ${
                active === k
                  ? "bg-surface-dark text-text-on-dark"
                  : "border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Intro */}
        <div className="border-l-4 border-primary bg-surface-section rounded-r-xl px-6 py-5 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-dark">
                <th className="px-6 py-4 text-left text-sm font-display font-bold text-text-on-dark-muted">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-sm font-display font-bold text-primary-glow">
                  GreeneDesk
                </th>
                <th className="px-6 py-4 text-left text-sm font-display font-bold text-text-on-dark-muted">
                  {data.competitor}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-b-0 hover:bg-surface-section transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                  <td className="px-6 py-4">
                    {row.gd === "yes" ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : row.gd === "no" ? (
                      <X className="h-5 w-5 text-muted-foreground/30" />
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 text-accent text-xs font-bold px-2.5 py-1">
                        <AlertTriangle className="h-3 w-3" /> Partial
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {row.comp === "yes" ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : row.comp === "no" ? (
                      <X className="h-5 w-5 text-muted-foreground/30" />
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold px-2.5 py-1">
                        {row.compNote || "Partial"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-surface-dark rounded-2xl p-8 flex items-start gap-6"
        >
          <span className="text-3xl flex-shrink-0">{data.verdict.icon}</span>
          <div>
            <h4 className="font-display font-bold text-text-on-dark mb-2">
              {data.verdict.title}
            </h4>
            <p className="text-text-on-dark-muted text-sm leading-relaxed">
              {data.verdict.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
