import { motion } from "framer-motion";
import { 
  Calendar, 
  ClipboardCheck, 
  Video, 
  MessageSquare, 
  Smartphone,
  Check
} from "lucide-react";
import trainerScheduler from "@/assets/fitdesk/trainer-scheduler.png";
import workoutPrograms from "@/assets/fitdesk/workout-programs.png";
import parqAssessment from "@/assets/fitdesk/parq-assessment.png";
import memberGoals from "@/assets/fitdesk/member-goals.png";
import memberAppExercise from "@/assets/fitdesk/member-app-exercise.png";

const features = [
  {
    icon: Calendar,
    title: "Advanced Scheduling",
    image: trainerScheduler,
    imageAlt: "FitDesk trainer scheduling interface showing weekly calendar with appointment bookings",
    items: [
      "Trainer and resource scheduling",
      "Service and program management",
      "Visibility across teams",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Digital Assessments",
    image: parqAssessment,
    imageAlt: "FitDesk PARQ digital assessment form for recording member health history",
    items: [
      "Replace paper forms",
      "Store complete member history",
      "Track outcomes over time",
    ],
  },
  {
    icon: Video,
    title: "Exercise Programming",
    image: workoutPrograms,
    imageAlt: "FitDesk exercise programming interface with video library and workout builder",
    items: [
      "Thousands of exercises with instructional videos",
      "Build structured programs",
      "Custom templates",
    ],
  },
  {
    icon: MessageSquare,
    title: "Engagement Tools",
    image: memberGoals,
    imageAlt: "FitDesk member goals tracking showing priorities, timelines, and trainer assignments",
    items: [
      "Trainer to member communication",
      "Notifications and reminders",
      "Program adherence tracking",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    image: memberAppExercise,
    imageAlt: "FitDesk member app showing workout exercises with video guidance on a smartphone",
    items: [
      "Trainer app for on-floor usage",
      "Member app for tracking and engagement",
    ],
  },
];

export function FitDeskModules() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Core Features
          </h2>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid ${feature.image ? 'lg:grid-cols-2' : ''} gap-8 items-center rounded-2xl border border-border bg-background p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300`}
            >
              <div className={index % 2 === 1 && feature.image ? "lg:order-2" : ""}>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {feature.image && (
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    loading="lazy"
                    className="rounded-xl shadow-lg w-full border border-border"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
