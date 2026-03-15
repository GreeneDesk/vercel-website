import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
}

interface RelatedPagesProps {
  heading?: string;
  pages: RelatedPage[];
}

export function RelatedPages({ heading = "Explore Related Capabilities", pages }: RelatedPagesProps) {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
            {heading}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group rounded-xl border border-border bg-background p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Explore {page.title}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
