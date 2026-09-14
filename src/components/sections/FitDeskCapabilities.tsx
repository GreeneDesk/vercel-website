import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  Dumbbell,
  CalendarDays,
  Smartphone,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Assessments and consultations",
    copy: "Replace paper PARQ forms and disconnected records with a complete digital member history.",
    href: "/platform/teacher-trainer",
    linkLabel: "Trainer tools",
  },
  {
    icon: Dumbbell,
    title: "Workout programming",
    copy: "Build structured programs using more than 4,000 exercises with instructional videos and GIFs.",
    href: "/platform/workout-programming",
    linkLabel: "Workout programming",
  },
  {
    icon: CalendarDays,
    title: "Trainer scheduling",
    copy: "Manage trainers, appointments, services and resources with shared operational visibility.",
    href: "/platform/roster-scheduler",
    linkLabel: "Roster & scheduler",
  },
  {
    icon: Smartphone,
    title: "Member engagement",
    copy: "Give members mobile access to programs, goals, progress and trainer communication.",
    href: "/platform/parent-member",
    linkLabel: "Member experience",
  },
  {
    icon: TrendingUp,
    title: "Progress and retention",
    copy: "Track milestones, reassessments, activity and follow-up requirements.",
    href: "/platform/analytics",
    linkLabel: "Analytics & retention",
  },
  {
    icon: HeartPulse,
    title: "Active ageing and rehabilitation",
    copy: "Deliver structured programs for older adults, community wellness, recovery and exercise-based services.",
    href: "/solutions/fitdesk",
    linkLabel: "FitDesk overview",
  },
];

export function FitDeskCapabilities() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            FitDesk capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything your fitness team does after the join-up
          </h2>
          <p className="text-lg text-muted-foreground">
            Assessments, programming, scheduling, engagement and progress tracking in one
            Australian-hosted platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-background p-7 flex flex-col hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                <cap.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground mb-5 flex-1">{cap.copy}</p>
              <Link
                to={cap.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {cap.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
