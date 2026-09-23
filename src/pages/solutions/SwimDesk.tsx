import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import swimdeskLogo from "@/assets/brand/swimdesk-color-horizontal.png";
import heroIpad from "@/assets/swimdesk/hero-ipad.png";
import parentApp from "@/assets/swimdesk/parent-app.png";
import skillsAssessment from "@/assets/swimdesk/skills-assessment.png";
import calendar from "@/assets/swimdesk/calendar.png";
import classList from "@/assets/swimdesk/class-list.png";
import progressionTracking from "@/assets/swimdesk/progression-tracking.png";
import emailComm from "@/assets/swimdesk/email-communication.png";
import actionRules from "@/assets/swimdesk/action-rules.png";

const sections = [
  {
    title: "Parent Experience",
    image: parentApp,
    imageAlt: "SwimDesk parent app showing student level, class details, and progress tracking",
    bg: "bg-surface-section",
    items: [
      "Book and reschedule classes",
      "Report absences",
      "Track progress",
      "Receive digital certificates",
      "Pay for classes from their mobile or tablet",
      "Book compensatory classes",
      "Report explained absences under your facility's own rules",
    ],
  },
  {
    title: "Skills Assessment & Attendance",
    image: skillsAssessment,
    imageAlt: "SwimDesk attendance and skills assessment interface with colour-coded competency tracking",
    bg: "",
    items: [
      "Mark attendance poolside",
      "Track skills per student",
      "Colour-coded competency levels",
      "Book assessments directly",
    ],
  },
  {
    title: "Class Scheduling & Calendar",
    image: calendar,
    imageAlt: "SwimDesk weekly class calendar showing colour-coded swim classes across multiple pools and lanes",
    bg: "bg-surface-section",
    items: [
      "Pool and lane scheduling",
      "Weekly calendar overview",
      "Instructor assignments",
      "Capacity management",
    ],
  },
  {
    title: "Class Management",
    image: classList,
    imageAlt: "SwimDesk class list showing students, teachers, areas, and dates with quick class access",
    bg: "",
    items: [
      "View all classes at a glance",
      "Filter by date and instructor",
      "Jump to class details instantly",
      "Print-ready class lists",
    ],
  },
  {
    title: "Progression Tracking",
    image: progressionTracking,
    imageAlt: "SwimDesk student progression tracking with pass/not-pass assessments and evaluation history",
    bg: "bg-surface-section",
    items: [
      "Track student progression over time",
      "Pass and not-pass assessments",
      "Evaluation history per student",
      "Send progress reports to parents",
      "Supports AUSTSWIM, Royal Life Saving and YMCA learn-to-swim programs — or any structured curriculum",
    ],
  },
  {
    title: "Communication & Automation",
    image: emailComm,
    imageAlt: "SwimDesk email communication interface for sending targeted messages to students and parents",
    bg: "",
    items: [
      "Send targeted emails to parents",
      "Filter by level, instructor, or class",
      "Automated action rules for events",
      "Birthday, welcome, and progress emails",
      "Voice notes to one student or an entire class — sent as notifications",
    ],
    secondImage: actionRules,
    secondImageAlt: "SwimDesk action rules for automated birthday, welcome, and progress notification emails",
  },
];

const SwimDesk = () => {
  return (
    <Layout>
      <SEO
        title="Swim School & Aquatic Centre Management Software | SwimDesk Australia"
        description="Australian swim school and aquatic centre management software. Class bookings, poolside attendance, skills assessments and progression tracking, digital certificates and a parent app. Works alongside your existing membership and payments system. Hosted in AWS Sydney."
        canonical="/solutions/swimdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SwimDesk – Swim School and Aquatic Centre Management Software",
          "description": "Swim school and aquatic centre management software for Australian councils, YMCAs and learn-to-swim providers. Class scheduling and bookings, poolside attendance, skills assessments, progression tracking, digital certificates, parent app and automated communication. Works alongside existing membership and payments systems including PerfectGym and Envibe. Supports structured learn-to-swim curricula including AUSTSWIM, Royal Life Saving and YMCA programs. Hosted in AWS Sydney.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": ["AU", "NZ"],
          "serviceType": "Swim School Management Software"
        }}
        faq={[
          {
            question: "Does SwimDesk replace our membership or payments system?",
            answer: "No. SwimDesk works alongside the system you already use — including PerfectGym and Envibe — and adds the learn-to-swim layer: class scheduling, poolside attendance, skills assessments, progression tracking and parent communication. There is no need to change your payments or membership setup."
          },
          {
            question: "Which learn-to-swim curricula does SwimDesk support?",
            answer: "SwimDesk supports structured learn-to-swim curricula including AUSTSWIM, Royal Life Saving and YMCA programs — or any structured curriculum your centre uses, with skills, levels and progressions configured to match."
          },
          {
            question: "Is SwimDesk suitable for council aquatic facilities?",
            answer: "Yes. Many SwimDesk customers are council-owned leisure and aquatic centres and YMCAs. It handles multi-pool and lane scheduling, instructor assignments, class capacity, school swimming programs and reporting, with instructors able to mark attendance and assessments poolside — including offline on the pool deck."
          },
          {
            question: "Where is SwimDesk data hosted?",
            answer: "All SwimDesk data is hosted in AWS Sydney, in Australia. Data is not processed offshore, supporting Australian Privacy Principles compliance for councils and other public-facing organisations."
          }
        ]}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/swimdesk" }, { label: "SwimDesk" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
        
        <div className="container-wide section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <img src={swimdeskLogo} alt="SwimDesk" className="h-10 w-auto" />
              </div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Swim School &amp; Aquatic Centre Management
              </p>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Swim school and aquatic centre{" "}
                <span className="text-gradient-primary">management software</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Used by Australian councils, YMCAs and learn-to-swim providers for class
                scheduling and bookings, poolside attendance, skills assessments, progression
                tracking, digital certificates and parent communication. Supports structured
                learn-to-swim curricula including AUSTSWIM, Royal Life Saving and YMCA programs,
                with all data hosted in AWS Sydney.
              </p>
              
              <Button variant="cta" size="xl" asChild>
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <img
                src={heroIpad}
                alt="SwimDesk attendance and skills tracking interface on iPad"
                className="max-h-[420px] w-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why councils and YMCAs choose SwimDesk */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built for councils, YMCAs and learn-to-swim providers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SwimDesk focuses on what swim schools actually need day to day — lessons
              delivery, assessments and parent communication — without asking you to
              replace the systems you already run.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Poolside assessments",
                text: "Mark attendance and track skills against each student's level from the pool deck, including offline. Assessments and digital certificates flow back to parents automatically.",
              },
              {
                title: "Any structured curriculum",
                text: "Configure skills, levels and progressions to match AUSTSWIM, Royal Life Saving or YMCA learn-to-swim programs — or any structured curriculum your centre follows.",
              },
              {
                title: "School swimming programs",
                text: "Run school group bookings, class lists and reporting alongside your regular learn-to-swim timetable, with dedicated school program management.",
              },
              {
                title: "Australian-hosted data",
                text: "All data is hosted in AWS Sydney. Nothing is processed offshore, supporting APP compliance requirements for council facilities.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <Check className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works alongside existing systems */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Works alongside your existing systems
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Keep your current membership, payments and access system — including{" "}
              <Link to="/integrations/perfectgym" className="text-primary font-medium hover:underline">
                PerfectGym
              </Link>{" "}
              and{" "}
              <Link to="/integrations" className="text-primary font-medium hover:underline">
                Envibe
              </Link>
              . SwimDesk adds the learn-to-swim layer on top: scheduling, attendance,
              assessments, progression tracking and parent communication. No rip-and-replace,
              no migration of your payment setup.
            </p>
            <Link
              to="/integrations"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              See the systems we integrate with
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections with Screenshots */}
      {sections.map((section, sectionIndex) => (
        <section key={section.title} className={`section-padding ${section.bg}`}>
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${sectionIndex % 2 === 1 ? '' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={sectionIndex % 2 === 1 ? "lg:order-2" : ""}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-3 mb-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`space-y-4 ${sectionIndex % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full border border-border"
                />
                {section.secondImage && (
                  <img
                    src={section.secondImage}
                    alt={section.secondImageAlt}
                    loading="lazy"
                    className="rounded-xl shadow-lg w-full border border-border"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <TestimonialsSection
        product="SwimDesk"
        heading="What swim schools say about SwimDesk"
        subheading="Feedback from swim schools and aquatic centres across Australia and New Zealand."
      />

      <DifferentiatorBlock />

      <RelatedPages
        heading="Explore Related Solutions"
        pages={[
          { title: "School Programs", description: "End-to-end management for school swimming programs", href: "/solutions/school-programs" },
          { title: "Squads", description: "Squad progression and competitive program management", href: "/solutions/squads" },
          { title: "FitDesk", description: "Gym and leisure centre operations platform", href: "/solutions/fitdesk" },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Run your swim school with complete visibility
            </h2>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/demo">
                Book a Demo
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
