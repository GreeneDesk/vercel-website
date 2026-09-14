import { motion } from "framer-motion";
import parqAssessment from "@/assets/fitdesk/parq-assessment.png";
import workoutPrograms from "@/assets/fitdesk/workout-programs.png";
import trainerScheduler from "@/assets/fitdesk/trainer-scheduler.png";
import memberAppExercise from "@/assets/fitdesk/member-app-exercise.png";

const shots = [
  {
    src: parqAssessment,
    alt: "FitDesk digital PARQ assessment form recording a member's health history",
    caption: "Digital PARQ and health consultations replace paper forms.",
  },
  {
    src: workoutPrograms,
    alt: "FitDesk workout programming builder with exercise video library",
    caption: "Programs built from 4,000+ exercises with videos and GIFs.",
  },
  {
    src: trainerScheduler,
    alt: "FitDesk trainer scheduling calendar showing appointments across the week",
    caption: "Trainer, service and resource scheduling in one calendar.",
  },
  {
    src: memberAppExercise,
    alt: "FitDesk member app showing an assigned exercise with instructional video",
    caption: "Members follow their program on the GreeneDesk app.",
  },
];

export function FitDeskScreenshots() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            See FitDesk in the day-to-day
          </h2>
          <p className="text-lg text-muted-foreground">
            Real screens from the assessments, programming, scheduling and member workflows your
            team uses every shift.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-background p-4"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full h-auto rounded-lg object-contain"
              />
              <figcaption className="text-sm text-muted-foreground mt-4">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
