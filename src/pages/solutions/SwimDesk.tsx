import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Waves,
  ClipboardCheck,
  Bell,
  GraduationCap,
  FileText,
  Users,
  DollarSign,
  AlertTriangle,
  Check
} from "lucide-react";

const capabilities = [
  { icon: ClipboardCheck, title: "Deck-side assessments", description: "Works offline for poolside use" },
  { icon: Bell, title: "Automatic parent updates", description: "Progress notifications and certificates" },
  { icon: GraduationCap, title: "School swimming programs", description: "Manage school group bookings" },
  { icon: FileText, title: "High-volume reporting", description: "For schools and councils" },
  { icon: Users, title: "Squad progression tracking", description: "Monitor squad attendance and progress" },
  { icon: DollarSign, title: "Fair, transparent pricing", description: "No hidden fees or surprises" },
];

const SwimDesk = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Waves className="h-4 w-4" />
                For Swim Schools
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                SwimDesk — swim school software that fixes the{" "}
                <span className="text-gradient-primary">communication gap</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Designed for learn-to-swim programs, school swimming and squads — where progress visibility matters most.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a SwimDesk Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Problem */}
      <section className="section-padding bg-destructive/5">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              The biggest reason families leave swim programs?
            </h2>
            
            <p className="text-xl md:text-2xl font-medium text-destructive">
              They don't know how their child is progressing.
            </p>
            
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              SwimDesk bridges the gap between instructors and parents with real-time progress updates, automatic certificates, and clear visibility into skill development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              SwimDesk Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <capability.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How SwimDesk Works
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Instructors assess", description: "Record skills poolside, even offline" },
                { step: "2", title: "Parents get notified", description: "Automatic progress updates and certificates" },
                { step: "3", title: "Management has visibility", description: "Reports ready in minutes, not days" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to improve parent communication?
            </h2>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a SwimDesk Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SwimDesk;