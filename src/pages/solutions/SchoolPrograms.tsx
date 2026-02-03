import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  GraduationCap,
  ClipboardCheck,
  FileText,
  Calendar,
  Users,
  Check,
  Upload,
  Layout as LayoutIcon,
  Wifi,
  WifiOff,
  BarChart3,
  Award,
  RefreshCw,
  Shield,
  Building2,
  ChevronRight
} from "lucide-react";

const lifecycleSteps = [
  {
    icon: Upload,
    title: "1. School Intake at Scale",
    subtitle: "Without Spreadsheet Chaos",
    description: "School data is rarely clean. SwimDesk Schools handles it gracefully.",
    features: [
      "Bulk upload of large school rosters",
      "Flexible intake for different school formats",
      "Quick handling of late additions and changes",
      "Clean, structured student records from day one",
    ],
    tagline: "No fragile spreadsheets. No rework when lists change."
  },
  {
    icon: LayoutIcon,
    title: "2. Program Planning",
    subtitle: "That Survives Reality",
    description: "School programs are tightly scheduled and resource-heavy.",
    features: [
      "Visual program planning across days, lanes, and instructors",
      "Fast class creation for large cohorts",
      "Clear visibility into who is where, and when",
    ],
    tagline: "Deliver programs on time, on plan, and under control."
  },
  {
    icon: WifiOff,
    title: "3. Poolside Delivery",
    subtitle: "That Works Without Wi-Fi",
    description: "School programs happen at the pool edge — not behind a desk.",
    features: [
      "Works on phones or tablets",
      "Offline capable — no dependence on pool Wi-Fi",
      "Seamless sync when connectivity returns",
    ],
    tagline: "Instructors focus on students, not paperwork."
  },
  {
    icon: ClipboardCheck,
    title: "4. Attendance & Assessment",
    subtitle: "Captured Once, Used Everywhere",
    description: "During delivery, SwimDesk Schools captures everything needed.",
    features: [
      "Digital attendance",
      "Skill assessments and outcomes",
      "Accurate, session-level records",
    ],
    tagline: "No double entry. No missing data when reports are due."
  },
];

const reportingFeatures = [
  "Attendance summaries by class, day, or school",
  "Outcome and competency reporting",
  "Program completion overviews",
  "One-click report generation",
];

const certificateFeatures = [
  "Branded digital certificates",
  "Custom designs per program or level",
  "Automatic issuance based on assessment data",
  "Easy sharing with schools and families",
];

const trustFeatures = [
  { icon: Shield, text: "Clear audit trails" },
  { icon: FileText, text: "Structured records" },
  { icon: Shield, text: "Secure data handling" },
  { icon: Building2, text: "Australian-hosted infrastructure" },
];

const idealFor = [
  "Mid and large swim centres",
  "Council-run aquatic facilities",
  "Operators delivering high-volume school programs",
  "Centres that value professionalism, trust, and repeat school partnerships",
];

const challenges = [
  "Hundreds (sometimes thousands) of students arriving in short windows",
  "Changing rosters, late enrolments, and mixed ability groups",
  "Paperwork expected by schools and governing bodies",
  "Demands for clear attendance, outcomes, and post-program reporting",
  "Little tolerance for mistakes — because these are children, not customers",
];

const SchoolPrograms = () => {
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
                <GraduationCap className="h-4 w-4" />
                SwimDesk Schools
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                School Swimming Programs,{" "}
                <span className="text-gradient-primary">Done Properly</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                School swimming programs are not just another booking type.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                They involve large student volumes, strict expectations, paperwork, reporting, and duty of care — all delivered on fixed timelines, often under pressure.
              </p>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                <p className="text-foreground font-medium">
                  <span className="text-primary font-semibold">SwimDesk Schools</span> is purpose-built for this reality. It replaces spreadsheets, paper rolls, and manual reporting with a structured, end-to-end digital workflow — from school intake to final reports and certificates.
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
                    See How It Fits Into SwimDesk
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why School Programs Are Different */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
              Why School Programs Are Different
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Running school programs is both a pain and a responsibility. Centres face:
            </p>

            <div className="space-y-3 mb-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">!</span>
                  </div>
                  <span className="text-foreground">{challenge}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-muted-foreground mb-2">
                Most swim software is designed for ongoing enrolments, not institutional programs.
              </p>
              <p className="text-foreground font-semibold text-lg">
                SwimDesk Schools was designed specifically for school delivery at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Lifecycle */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              A Complete School Program Lifecycle — One System
            </h2>
          </motion.div>

          <div className="space-y-8">
            {lifecycleSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-primary font-medium mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {step.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium text-primary italic">{step.tagline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <BarChart3 className="h-4 w-4" />
                Reporting
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Reporting That Schools Actually Need
              </h2>
              <p className="text-text-on-dark-muted mb-6">
                This is where most centres struggle. SwimDesk Schools turns delivery data into clear, professional outputs:
              </p>
              <ul className="space-y-3 mb-6">
                {reportingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="font-medium">What used to take days now takes minutes.</p>
                <p className="text-text-on-dark-muted text-sm mt-1">Schools get what they need. Centres keep control of their time.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Award className="h-4 w-4" />
                Certificates
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Professional Certificates — Automated
              </h2>
              <p className="text-text-on-dark-muted mb-6">
                School programs should end professionally. SwimDesk Schools delivers:
              </p>
              <ul className="space-y-3 mb-6">
                {certificateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="font-medium">This small detail makes a big difference</p>
                <p className="text-text-on-dark-muted text-sm mt-1">in how your centre is remembered.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Movement */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <RefreshCw className="h-4 w-4" />
                Flexibility
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Student Movement Without Breaking Records
              </h2>
              <p className="text-lg text-muted-foreground">
                School groups change — constantly. SwimDesk Schools allows:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Easy movement", desc: "Between classes or levels" },
                { title: "Full history", desc: "Retained for each student" },
                { title: "No duplicates", desc: "No lost data" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border text-center"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-primary font-medium mt-8"
            >
              Your records stay intact, even when schedules don't.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Built for Responsibility */}
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
                Built for Responsibility, Not Just Efficiency
              </h2>
              <p className="text-lg text-muted-foreground">
                School programs carry a higher duty of care. SwimDesk Schools is designed with:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8"
            >
              This matters to schools, councils, and governing bodies — and increasingly, they ask about it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Flexible Deployment */}
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
                Flexible Deployment for Different Centres
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-4">SwimDesk Schools can be used:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>As a standalone school-program module</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>As part of the broader SwimDesk suite</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-4">Payments can be:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Enabled where SwimDesk is the primary system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Kept optional where billing is handled elsewhere</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-primary font-semibold mt-8"
            >
              No forced rip-and-replace.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
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
                Who This Is For
              </h2>
              <p className="text-lg text-muted-foreground">
                SwimDesk Schools is ideal for:
              </p>
            </motion.div>

            <div className="space-y-3 mb-8">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center"
            >
              <p className="text-lg font-medium text-foreground">
                If school programs matter to your reputation, this system was built for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quiet Truth + CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-surface-dark-elevated text-text-on-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-12 p-8 rounded-2xl bg-primary/10 border border-primary/20">
              <h3 className="font-display text-xl font-semibold mb-4 text-text-on-dark-muted">A Quiet Truth</h3>
              <p className="text-lg text-text-on-dark-muted mb-2">
                Many centres run school programs because they have to.
              </p>
              <p className="text-lg text-text-on-dark-muted mb-4">
                Very few systems are built to support them properly.
              </p>
              <p className="text-2xl font-bold text-text-on-dark">
                SwimDesk Schools is.
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Run school programs with confidence — not spreadsheets
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Request a Walkthrough
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/solutions/swimdesk">
                  See How It Fits Into SwimDesk
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
            SwimDesk Schools is part of the GreeneDesk platform — built in Australia for the World.
            <br />
            All customer data is hosted in Australia on AWS Sydney.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default SchoolPrograms;
