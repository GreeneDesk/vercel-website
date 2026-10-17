import { Link } from "react-router-dom";
import { ArrowRight, FileDown } from "lucide-react";
import { getGuide } from "@/content/guides";

export function GuideCallout({ slug }: { slug: string }) {
  const guide = getGuide(slug);
  if (!guide) return null;
  return (
    <div className="container-wide">
      <div className="rounded-xl border border-border bg-surface-section p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-start gap-4 flex-1">
            <FileDown className="h-8 w-8 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Free guide</p>
              <h3 className="font-display text-lg md:text-xl font-semibold mt-1">{guide.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <Link
              to={`/guides/${guide.slug}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              What's inside <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={guide.pdf}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-background"
            >
              Download free PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
