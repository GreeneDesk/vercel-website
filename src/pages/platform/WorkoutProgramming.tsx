import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  Video,
  ClipboardCheck,
  Users,
  Heart,
  Smartphone,
  BarChart3,
  Check,
} from "lucide-react";
import workoutPrograms from "@/assets/fitdesk/workout-programs.png";
import memberAppExercise from "@/assets/fitdesk/member-app-exercise.png";
import memberGoals from "@/assets/fitdesk/member-goals.png";

const capabilities = [
  {
    icon: Video,
    title: "4,000+ Exercise Library",
    description:
      "Searchable video and GIF library covering strength, cardio, flexibility, rehab, and active ageing. Add your own exercises with custom YouTube links.",
  },
  {
    icon: Dumbbell,
    title: "Program Builder",
    description:
      "Build structured workout programs with sets, reps, tempo, and rest periods. Save as templates and assign to members or groups in seconds.",
  },
  {
    icon: ClipboardCheck,
    title: "Digital Health Consultations (PARQ)",
    description:
      "Replace paper forms with electronic health screening. Store complete member history, medical notes, and physio referrals — accessible from any device.",
  },
  {
    icon: Heart,
    title: "Active Ageing & Senior Wellness",
    description:
      "Tailored programs for senior members including chair-based exercise, balance training, and gentle mobility. Track progress over time with milestone follow-ups.",
  },
  {
    icon: Users,
    title: "Trainer Management",
    description:
      "Assign programs across your team, track trainer output, and manage PT appointment scheduling. See who's delivering and who needs support.",
  },
  {
    icon: Smartphone,
    title: "Member App Access",
    description:
      "Members view their personalised program on the GreeneDesk app (iOS & Android) or any browser. Log results, track history, and communicate with their trainer.",
  },
  {
    icon: BarChart3,
    title: "Retention & Milestone Tracking",
    description:
      "Automatically trigger follow-ups at key milestones — first visit, reassessment due, inactivity alerts. Keep members engaged with data-driven workflows.",
  },
];

const features = [
  {
    title: "Build & Assign Workout Programs",
    image: workoutPrograms,
    imageAlt:
      "FitDesk workout program builder showing exercise selection with video previews",
    points: [
      "Drag and drop exercises into structured programs",
      "Set reps, sets, tempo, and rest periods",
      "Save as reusable templates for common goals",
      "Assign to individual members or groups",
      "Members access programs on their phone or gym kiosk",
    ],
  },
  {
    title: "Track Member Goals & Progress",
    image: memberGoals,
    imageAlt:
      "FitDesk member goals dashboard showing priorities and trainer assignments",
    points: [
      "Set personalised goals during health consultations",
      "Track progress with workout logs and testing results",
      "Automated milestone reminders for reassessments",
      "Trainers see member history at a glance on the gym floor",
      "Support senior members with gentle progression tracking",
    ],
  },
  {
    title: "Member App — Workouts Anywhere",
    image: memberAppExercise,
    imageAlt:
      "FitDesk member app showing workout exercises with video guidance on a smartphone",
    points: [
      "Members view their program with exercise videos and instructions",
      "Log workout results and track personal records",
      "Create and save their own workouts",
      "Communicate with their trainer via in-app messaging",
      "Works on iOS, Android, and any browser",
    ],
  },
];

const WorkoutProgramming = () => {
  return (
    <Layout>
      <SEO
        title="Workout Programming & Exercise Library – FitDesk"
        description="Build personalised workout programs, manage a 4,000+ exercise video library, and track member progress with FitDesk — the trainer's toolkit for health clubs and leisure centres."
        canonical="/platform/workout-programming"
      />
      <Breadcrumbs
        items={[
          { label: "Platform", href: "/platform/features" },
          { label: "Workout Programming" },
        ]}
      />

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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Dumbbell className="h-4 w-4" />
                FitDesk Module
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Workout Programming{" "}
                <span className="text-gradient-primary">& Exercise Library</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Build personalised workout programs from a library of 4,000+
                exercises with video. Assign to members, track progress, and
                support every goal — from post-rehab to active ageing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/demo">
                    Request a Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/solutions/fitdesk">Explore FitDesk</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything Trainers Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From health screening to workout delivery — tools that work on the
              gym floor, at the front desk, and in a member's pocket.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details with Screenshots */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center rounded-2xl border border-border bg-background p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="font-display text-2xl font-bold mb-6">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full border border-border"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <RelatedPages
        heading="More From the Platform"
        pages={[
          {
            title: "FitDesk",
            description:
              "Complete gym and fitness centre management",
            href: "/solutions/fitdesk",
          },
          {
            title: "Teacher & Trainer Tools",
            description: "Mobile-first tools for on-floor delivery",
            href: "/platform/teacher-trainer",
          },
          {
            title: "Analytics & Retention",
            description: "Data-driven insights for member engagement",
            href: "/platform/analytics",
          },
        ]}
      />

      {/* CTA */}
      <section className="section-padding bg-surface-section">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your gym floor?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              See how FitDesk's workout programming helps trainers deliver
              better programs and keep members engaged.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/demo">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkoutProgramming;
