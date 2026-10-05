import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Check, Handshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { partners as c } from "@/content/partners";

type Values = Record<string, string>;

const Partners = () => {
  const { toast } = useToast();
  const [values, setValues] = useState<Values>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (name: string, v: string) => setValues((p) => ({ ...p, [name]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const missing = c.form.fields.filter((f) => f.required && !values[f.name]?.trim());
    if (missing.length) {
      toast({ title: "Please fill in required fields", description: missing.map((f) => f.label).join(", "), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("demo_leads").insert({
        id,
        org_type: `Partner enquiry – ${values.partnerType}`,
        current_system: values.platform || "Not provided",
        locations: values.venues || "Not provided",
        email: values.email,
        phone: null,
        lead_source: "partners",
      });
      if (error) throw error;
      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "partner-enquiry-notification",
            recipientEmail: "anita.w@greenedesk.com",
            idempotencyKey: `partner-notify-${id}`,
            templateData: values,
          },
        })
        .catch((err) => console.error("Email send failed:", err));
      trackEvent("partner_form_submit", { partner_type: values.partnerType });
      setSent(true);
      toast({ title: "Partner enquiry sent", description: "We'll reply within two business days." });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again or call 1300 181 665.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO title={c.seo.title} description={c.seo.description} canonical="/partners" />
      <Breadcrumbs items={[{ label: "Partners" }]} />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="container-wide section-padding relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Handshake className="h-4 w-4" />
              {c.hero.eyebrow}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{c.hero.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{c.hero.sub}</p>
            <Button variant="cta" size="xl" asChild>
              <a href={c.hero.primaryCta.href}>
                {c.hero.primaryCta.label} <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">{c.types.heading}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.types.items.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-background p-6 md:p-8 flex flex-col">
                <h3 className="font-display text-2xl font-bold mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Who it's for: </span>
                  {t.who}
                </p>
                <p className="text-sm font-semibold mb-2">What you get</p>
                <ul className="space-y-2 flex-1">
                  {t.get.map((g) => (
                    <li key={g} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
                {"example" in t && t.example && <p className="mt-4 text-sm font-medium text-primary">{t.example}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">{c.fit.heading}</h2>
          <Accordion type="single" collapsible>
            {c.fit.rows.map((r, i) => (
              <AccordionItem key={r.q} value={`q${i}`}>
                <AccordionTrigger className="text-left">{r.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{r.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="partner-form" className="section-padding bg-surface-section scroll-mt-24">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">{c.form.heading}</h2>
          <p className="text-muted-foreground text-center mb-8">{c.form.sub}</p>
          {sent ? (
            <div className="p-8 rounded-2xl border border-primary/30 bg-primary-light text-center">
              <Check className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="font-semibold">Thanks — your partner enquiry has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-background p-6 md:p-8">
              {c.form.fields.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="block text-sm font-medium mb-1.5">
                    {f.label}
                    {f.required && " *"}
                  </label>
                  {f.type === "textarea" ? (
                    <Textarea id={f.name} rows={4} value={values[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
                  ) : f.type === "select" ? (
                    <select
                      id={f.name}
                      required={f.required}
                      value={values[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select…</option>
                      {"options" in f && f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <Input id={f.name} type={f.type} required={f.required} value={values[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
                  )}
                </div>
              ))}
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending…" : c.form.submit}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
