import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ClipboardCheck,
  Smartphone,
  Users,
  Award,
  WifiOff,
  CheckCircle,
  MessageSquare,
  ListTodo,
  Check
} from "lucide-react";

const coreTools = [
  { icon: ClipboardCheck, title: "Digital assessments", description: "Conduct skill assessments on the floor, not after class" },
  { icon: Users, title: "Class lists", description: "See who's in class with notes and history at a glance" },
  { icon: Award, title: "Progression tracking", description: "Record achievements and level completions instantly" },
  { icon: Smartphone, title: "Mobile-first design", description: "Built for phones and tablets in real teaching environments" },
];

const practicalFeatures = [
  { 
    icon: WifiOff, 
    title: "Offline capable", 
    description: "Works without reliable Wi-Fi. Syncs automatically when connectivity returns." 
  },
  { 
    icon: CheckCircle, 
    title: "One-tap attendance", 
    description: "Mark students present with a single tap. No paper rolls, no end-of-day catch-up." 
  },
  { 
    icon: MessageSquare, 
    title: "Quick notes", 
    description: "Add observations per student that feed into reports and parent updates." 
  },
  { 
    icon: ListTodo, 
    title: "Task prompts", 
    description: "System-generated reminders for follow-ups, assessments due, and at-risk students." 
  },
];

const philosophy = [
  "Reduce admin, not increase it",
  "Designed for use during class, not after",
  "Clear, focused interface — no clutter",
  "Data captured once, used everywhere",
  "Supports teaching, doesn't replace judgment",
];

const TeacherTrainer = () => {
  return (
    <Layout>
      <SEO title="Teacher & Trainer Tools – Mobile-First" description="Mobile-first tools for swim teachers, gym trainers, and sports instructors. Digital assessments, offline sync, and one-tap attendance." canonical="/platform/teacher-trainer" />
      <Breadcrumbs items={[{ label: "Platform", href: "/platform/teacher-trainer" }, { label: "Teacher & Trainer Tools" }]} />
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
                <ClipboardCheck className="h-4 w-4" />
                Teacher & Trainer Tools
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Tools that help you{" "}
                <span className="text-gradient-primary">teach, not type</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Mobile-first tools for instructors that work on the floor, pool deck, or field — 
                not just behind a desk. Less admin. Better coaching. Clearer records.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Tools */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything instructors need — nothing they don't
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <tool.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Features */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built for real conditions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pool decks, gym floors, and outdoor fields aren't office environments. 
              These tools are designed accordingly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {practicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Flow */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Assessments that flow naturally
              </h2>
              <p className="text-muted-foreground mb-6">
                Skill assessments shouldn't interrupt teaching. With GreeneDesk, instructors 
                can record observations and mark competencies in real-time, as students demonstrate skills.
              </p>
              <p className="text-muted-foreground">
                Criteria are customisable per program. Standards stay consistent across instructors. 
                Progress is visible to parents immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary-light to-background border border-border"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <span className="font-medium">Open class on mobile</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <span className="font-medium">Select student and skill</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <span className="font-medium">Mark competency with one tap</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <span className="font-medium">Parent sees update in app</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our design philosophy
            </h2>
            <p className="text-text-on-dark-muted max-w-2xl mx-auto">
              Tools for instructors should respect their expertise and time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {philosophy.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-text-on-dark">{principle}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        heading="Instructor Tools Work Best With"
        pages={[
          { title: "Roster & Scheduler", description: "Schedules sync directly to instructor views — no manual updates", href: "/platform/roster-scheduler" },
          { title: "Parent & Member App", description: "Assessment results flow directly to parent progress views", href: "/platform/parent-member" },
          { title: "Manager Dashboard", description: "Track instructor activity and assessment completion rates", href: "/platform/managers" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to empower your instructors?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/integrations">View Integrations</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TeacherTrainer;
