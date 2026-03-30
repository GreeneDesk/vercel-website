import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Active centres\nAU & NZ" },
  { number: "2010", label: "Trusted since\n15+ years" },
  { number: "AU", label: "Data residency\nAWS Sydney" },
  { number: "7am–7pm", label: "AU/NZ support\nMon–Fri AEST" },
];

export function TrustBanner() {
  return (
    <section className="py-12 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          {/* Flags */}
          <div className="flex items-center gap-3 flex-1 min-w-[240px]">
            <span className="text-3xl">🇦🇺</span>
            <span className="text-3xl">🇳🇿</span>
            <div>
              <p className="font-display font-bold text-sm">
                Trusted across Australia & New Zealand
              </p>
              <p className="text-xs text-muted-foreground">
                Data hosted on AWS Sydney · AU-based support · Founded in Australia
              </p>
            </div>
          </div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              {i === 0 && (
                <div className="hidden md:block w-px h-12 bg-border" />
              )}
              <div className="text-center min-w-[80px]">
                <p className="font-display text-2xl font-bold text-primary">
                  {stat.number}
                </p>
                <p className="text-xs text-muted-foreground whitespace-pre-line leading-tight">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
