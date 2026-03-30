import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
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
    ],
    secondImage: actionRules,
    secondImageAlt: "SwimDesk action rules for automated birthday, welcome, and progress notification emails",
  },
];

const SwimDesk = () => {
  return (
    <Layout>
      <SEO
        title="SwimDesk – Swim School Management Software"
        description="The complete operating system for swim schools and aquatic centres. Booking, attendance, skills tracking, certificates, and parent apps."
        canonical="/solutions/swimdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SwimDesk",
          "description": "The complete operating system for swim schools and aquatic centres. Parent booking, attendance, skills tracking, digital certificates, and payments.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Swim School Management Software"
        }}
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
                Swim School Management
              </p>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The complete operating system for{" "}
                <span className="text-gradient-primary">swim schools and aquatic centres</span>
              </h1>
              
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
