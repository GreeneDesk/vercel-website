import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Swords,
  Calendar,
  Award,
  ClipboardCheck,
  MessageSquare,
  Check,
  Users,
  TrendingUp,
  Layers,
  Target,
  Brain,
  History,
  ListTodo,
  Smartphone,
  ChevronRight
} from "lucide-react";

const programDemands = [
  "Clear progression frameworks (levels, belts, grades, squads)",
  "Accurate tracking of skills over long periods",
  "Consistent assessments across instructors",
  "High communication frequency with parents",
  "Reliable records when students move, pause, or return",
];

const progressionFeatures = [
  "Unlimited levels, belts, or grades",
  "Age-based and skill-based pathways",
  "Parallel programs (e.g., beginner → intermediate → squad)",
  "Clear visibility of where each student is — and where they're headed",
];

const progressionIdealFor = [
  "Martial arts belt systems",
  "Competitive and recreational pathways",
  "Long-term athlete development models",
];

const assessmentFeatures = [
  "Digital skill assessments on the floor or field",
  "Custom assessment criteria per level or discipline",
  "Consistent standards across instructors",
  "Clear records of when and how progress was achieved",
];

const scaleFeatures = [
  { icon: Users, title: "Fast class lists and filters" },
  { icon: Smartphone, title: "Mobile-first instructor tools" },
  { icon: TrendingUp, title: "Clear dashboards for admin teams" },
  { icon: Layers, title: "No performance drop as numbers grow" },
];

const parentCommFeatures = [
  "SMS, email, and WhatsApp messaging (where enabled)",
  "Progress updates tied to real events",
  "Instructor feedback delivered clearly",
  "No manual chasing or inconsistent messaging",
];

const certificateFeatures = [
  "Fully customised digital certificates",
  "Different designs per belt, grade, or level",
  "Automatic issuance when criteria are met",
  "Instant delivery to parents",
];

const schedulingFeatures = [
  "Overlapping classes",
  "Multiple instructors",
  "Age and skill splits",
  "Squad and non-squad pathways",
];

const idealFor = [
  "Martial arts academies",
  "Multi-discipline sports centres",
  "High-volume programs with structured progression",
  "Operators who care about trust, reputation, and long-term retention",
];

const programTypes = [
  "Swimming",
  "Martial arts",
  "Gymnastics",
  "Structured sports programs",
];

const SportDesk = () => {
  return (
    <Layout>
      <SEO
        title="SportDesk – Sports Centre Management Software"
        description="Comprehensive sports centre management software for gymnastics, martial arts, dance, and multi-sport facilities in Australia."
        canonical="/solutions/sportdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SportDesk",
          "description": "Sports centre management software for gymnastics, martial arts, dance, and multi-sport facilities. Scheduling, assessments, and member management.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Sports Centre Management Software"
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/sportdesk" }, { label: "SportDesk" }]} />
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
                <Swords className="h-4 w-4" />
                Martial Arts & Sports Programs
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Built for Complex Progression.{" "}
                <span className="text-gradient-primary">Trusted at Scale.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                Martial arts and structured sports programs are fundamentally different from casual classes.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Multiple levels, belts, grades, or squads",
                  "Long-term student journeys over years",
                  "High student volumes across age groups",
                  "Formal assessments and certifications",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                <p className="text-foreground">
                  <span className="font-semibold text-primary">SwimDesk</span> is built for this complexity. Whether it's martial arts, gymnastics, athletics, or structured sports programs, SwimDesk provides a single operating system to manage progression, communication, scheduling, and retention — at scale.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/demo">
                    Request a Walkthrough
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/solutions/swimdesk">
                    Explore SwimDesk
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why More Demanding */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Martial Arts & Sports Programs Are More Demanding
              </h2>
              <p className="text-lg text-muted-foreground">
                These programs are not transactional. They require:
              </p>
            </motion.div>

            <div className="space-y-3 mb-8">
              {programDemands.map((demand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{demand}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center"
            >
              <p className="text-muted-foreground mb-2">
                Most generic systems struggle once programs grow beyond a few levels or cohorts.
              </p>
              <p className="text-foreground font-semibold text-lg">
                SwimDesk is designed specifically for depth, structure, and longevity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Progression */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Layers className="h-4 w-4" />
              Progression
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              A System That Understands Progression — Not Just Attendance
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <h3 className="font-display text-xl font-bold mb-4">
                Multi-Level, Multi-Pathway Program Structures
              </h3>
              <p className="text-muted-foreground mb-6">SwimDesk supports:</p>
              <ul className="space-y-3 mb-6">
                {progressionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-primary/30 bg-primary/5"
            >
              <h3 className="font-display text-xl font-bold mb-4">
                Ideal For
              </h3>
              <ul className="space-y-4 mb-6">
                {progressionIdealFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Target className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">
                Progression stays structured, even as programs scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessments */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <ClipboardCheck className="h-4 w-4" />
                Assessments
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Assessments That Are Consistent, Practical, and Scalable
              </h2>
              <p className="text-text-on-dark-muted">
                Assessments are central to martial arts and sports programs. SwimDesk enables:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {assessmentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-text-on-dark-muted">No paper checklists. No fragmented records. No disputes over readiness.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High Volume */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Designed for High Student Volumes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Large programs create pressure points: busy peak times, instructor changes, administrative overload, missed follow-ups. SwimDesk handles this calmly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {scaleFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="font-medium">{feature.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-primary font-semibold"
          >
            Whether you manage hundreds or thousands of students, the system stays responsive and reliable.
          </motion.p>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <MessageSquare className="h-4 w-4" />
                Communication
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Parent Communication That Builds Trust
              </h2>
              <p className="text-muted-foreground mb-6">
                Parents in martial arts and sports programs care deeply about progress, discipline, milestones, and fair assessment. SwimDesk supports empathy-first, automated communication:
              </p>
              <ul className="space-y-3 mb-6">
                {parentCommFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">
                Parents stay informed without staff being overwhelmed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <ListTodo className="h-4 w-4" />
                Task-Driven Operations
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                So Nothing Falls Through
              </h2>
              <p className="text-muted-foreground mb-6">
                As programs grow, things get missed. SwimDesk prevents that by:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Generating task lists from real student events",
                  "Prompting staff when action is required",
                  "Keeping instructors, admin, and management aligned",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">
                This creates operational calm — even during grading weeks or peak terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates & Scheduling */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Award className="h-4 w-4" />
                Certificates
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Digital Certificates That Match the Achievement
              </h3>
              <p className="text-muted-foreground mb-6">
                Progression matters when it's recognised properly. SwimDesk delivers:
              </p>
              <ul className="space-y-3 mb-6">
                {certificateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">
                Recognition becomes consistent, timely, and professional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Calendar className="h-4 w-4" />
                Scheduling
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Scheduling Built for Complex Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                Martial arts and sports programs often involve:
              </p>
              <ul className="space-y-2 mb-6">
                {schedulingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground mb-4">
                SwimDesk supports advanced scheduling structures, easy rescheduling without data loss, and optional payments depending on your setup.
              </p>
              <p className="text-primary font-semibold">
                You get flexibility without breaking records or workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Movement + AI */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <History className="h-4 w-4" />
                Student Records
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">
                Student Movement Without Losing History
              </h2>
              <p className="text-text-on-dark-muted mb-6">
                Students move — between levels, squads, age groups, or locations. SwimDesk allows:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Easy movement between programs",
                  "Full historical record retained",
                  "No duplicate profiles or broken progression",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">
                This is critical for long-term programs where history matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Brain className="h-4 w-4" />
                AI-Enabled
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">
                AI-Enabled, Human-Led
              </h2>
              <p className="text-text-on-dark-muted mb-6">
                SwimDesk uses AI to support staff, not replace them:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Assistance with communication",
                  "Early identification of disengagement",
                  "Intelligent prompts for follow-ups",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-on-dark-muted">
                Decisions remain human. AI simply ensures consistency at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built for Serious Operators */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Built for Serious Operators
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                SwimDesk is ideal for:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-primary font-semibold text-lg"
            >
              This is not entry-level software.
            </motion.p>
          </div>
        </div>
      </section>

      {/* One Platform */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                One Platform, Multiple Programs
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                SwimDesk supports all within the same core system, with program-specific configuration — not separate tools:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {programTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 font-medium"
                  >
                    {type}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Reality + CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-12 p-8 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-display text-xl font-semibold mb-4 text-text-on-dark-muted">The Reality</h3>
              <p className="text-lg text-text-on-dark-muted mb-2">
                Managing martial arts and sports programs at scale is complex.
              </p>
              <p className="text-lg text-text-on-dark-muted mb-4">
                Most software simplifies the problem by avoiding it.
              </p>
              <p className="text-2xl font-bold text-text-on-dark">
                SwimDesk is built to handle it.
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Run complex programs with clarity and confidence
            </h2>
            <p className="text-text-on-dark-muted mb-8">
              See how SwimDesk supports martial arts and sports at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Walkthrough
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/solutions/swimdesk">
                  Explore SwimDesk
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-wide mt-16 pt-8 border-t border-primary-foreground/10"
        >
          <p className="text-center text-sm text-text-on-dark-muted">
            SwimDesk is part of the GreeneDesk platform — built in Australia for the World.
            <br />
            All customer data is hosted in Australia on AWS Sydney.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default SportDesk;
