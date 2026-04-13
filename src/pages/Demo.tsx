import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ArrowRight, Building2, Users, MapPin, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  "Short, practical walkthrough",
  "No pressure sales pitch",
  "Tailored to your setup and integrations",
];

const orgTypes = [
  "Leisure Centre / Council",
  "Aquatic Centre / Swim School",
  "Wellness / Rehab / Active Ageing",
  "Coaching / Sports Facility",
  "Other",
];

const currentSystems = [
  "PerfectGym",
  "Envibe",
  "Other",
  "None",
];

const locationOptions = ["1", "2–5", "6–10", "10+"];

const demoTracks = [
  {
    title: "Leisure / Council",
    items: ["Multi-service scheduling", "Integration story", "Engagement layer"],
  },
  {
    title: "Aquatic",
    items: ["Parent app", "Skills tracking", "School programs"],
  },
  {
    title: "Wellness / Rehab",
    items: ["Assessments", "Program tracking", "Member history"],
  },
];

const Demo = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    orgType: "",
    currentSystem: "",
    locations: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Demo request submitted!", description: "We'll tailor the demo to your setup." });
    setIsSubmitting(false);
    setStep(3);
  };

  const canProceed = step === 1 ? formData.orgType && formData.currentSystem && formData.locations : true;

  return (
    <Layout>
      <SEO title="Book a Demo – See GreeneDesk in Action" description="Book a short, practical walkthrough of GreeneDesk tailored to your gym, swim school, or sports centre. No pressure, just clarity." canonical="/demo" />
      <Breadcrumbs items={[{ label: "Book a Demo" }]} />
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-hover mb-8">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                See how GreeneDesk would work in{" "}
                <span className="text-gradient-primary">your centre</span>
              </h1>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="grid sm:grid-cols-3 gap-4 p-6 rounded-xl bg-surface-section mb-8">
                <div className="text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">100+ Centres</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">50,000+ Members</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Australian Hosted</p>
                </div>
              </div>

              {/* Demo Tracks */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">We tailor every demo</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {demoTracks.map((track, i) => (
                    <div key={i} className="p-4 rounded-xl bg-surface-section border border-border">
                      <p className="font-semibold text-sm mb-2">{track.title}</p>
                      <ul className="space-y-1">
                        {track.items.map((item, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="rounded-2xl border border-border bg-background p-8 shadow-lg">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map(s => (
                    <div key={s} className={`h-2 flex-1 rounded-full ${step >= s ? "bg-primary" : "bg-muted"}`} />
                  ))}
                </div>

                {step === 1 && (
                  <>
                    <h2 className="font-display text-2xl font-bold mb-6">Tell us about your centre</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Type of organisation *</Label>
                        <Select value={formData.orgType} onValueChange={v => setFormData({ ...formData, orgType: v })}>
                          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                          <SelectContent>
                            {orgTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Current system *</Label>
                        <Select value={formData.currentSystem} onValueChange={v => setFormData({ ...formData, currentSystem: v })}>
                          <SelectTrigger><SelectValue placeholder="Select system" /></SelectTrigger>
                          <SelectContent>
                            {currentSystems.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Number of locations *</Label>
                        <Select value={formData.locations} onValueChange={v => setFormData({ ...formData, locations: v })}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {locationOptions.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="cta" size="xl" className="w-full" disabled={!canProceed} onClick={() => setStep(2)}>
                        Continue <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit}>
                    <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4" onClick={() => setStep(1)}>
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <h2 className="font-display text-2xl font-bold mb-6">Your contact details</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                      <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Request a Demo"}
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-8">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-4">Thanks! We'll tailor the demo to your setup.</h2>
                    <p className="text-muted-foreground">
                      We'll be in touch shortly to schedule a time that works for you.
                    </p>
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center mt-6">
                  By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about GreeneDesk.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
