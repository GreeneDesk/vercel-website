import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { guides } from "@/content/guides";

export function GuidesStrip() {
  return (
    <section className="py-12 md:py-16 bg-surface-section">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Free guides for your team</h2>
          <Link to="/guides" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            See all guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to={`/guides/${g.slug}`}
              className="flex flex-col p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {g.type} · PDF · {g.pages} pages
              </span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug flex-1">{g.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
