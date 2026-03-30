import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_CATEGORIES, FAQS, type FAQCategory } from "@/data/faqs";

export function FAQSection() {
  const [category, setCategory] = useState<FAQCategory>("Pricing");
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = FAQS[category];

  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              FAQ
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Every question{" "}
              <span className="text-gradient-primary">answered</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Can't find what you're looking for? Call us on{" "}
              <strong className="text-foreground">1300 181 665</strong>.
            </p>

            <nav className="flex flex-col gap-1.5">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setOpenIdx(0);
                  }}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all border-l-[3px] ${
                    category === cat
                      ? "bg-background shadow-md border-l-primary font-bold text-foreground"
                      : "border-l-transparent text-muted-foreground hover:bg-background/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* FAQ list */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={`${category}-${i}`}
                className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-display font-bold text-sm leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-all ${
                      openIdx === i
                        ? "bg-primary text-primary-foreground rotate-180"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
