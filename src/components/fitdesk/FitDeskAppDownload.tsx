import { motion } from "framer-motion";
import { AppStoreBadges } from "@/components/shared/AppStoreBadges";

const FITDESK_APP_STORE = "https://apps.apple.com/us/app/fitdesk/id6744887528";
const FITDESK_PLAY_STORE = "https://play.google.com/store/apps/details?id=www.mygreenedesk.com.fitdesk&hl=en_IN&pli=1";
const GREENEDESK_APP_STORE = "https://apps.apple.com/us/app/greenedesk/id6447428480";
const GREENEDESK_PLAY_STORE = "https://play.google.com/store/apps/details?id=www.mygreenedesk.com.greenedesk&hl=en_IN";

export function FitDeskAppDownload() {
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
            Mobile apps for members and staff
          </h2>
          <p className="text-lg text-muted-foreground">
            Members follow their program on the FitDesk app. Trainers, instructors and staff use the GreeneDesk app. All users can access the mobile app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-bold mb-2">FitDesk app</h3>
            <p className="text-muted-foreground mb-6">
              For members tracking workouts, bookings and progress.
            </p>
            <AppStoreBadges
              appName="FitDesk"
              appStoreUrl={FITDESK_APP_STORE}
              playStoreUrl={FITDESK_PLAY_STORE}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-bold mb-2">GreeneDesk app</h3>
            <p className="text-muted-foreground mb-6">
              For trainers, instructors and staff managing schedules and member engagement.
            </p>
            <AppStoreBadges
              appName="GreeneDesk"
              appStoreUrl={GREENEDESK_APP_STORE}
              playStoreUrl={GREENEDESK_PLAY_STORE}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
