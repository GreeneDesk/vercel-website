import { motion } from "framer-motion";
import { 
  Calendar, 
  TrendingUp, 
  Video, 
  Heart, 
  Smartphone, 
  Bell,
  AlertTriangle,
  BarChart3,
  Check
} from "lucide-react";

const modules = [
  {
    icon: Calendar,
    title: "1. Scheduling & Timetables",
    description: "Managers can:",
    features: [
      "Build schedules across multiple programs and rooms",
      "Manage class sizes, waitlists and substitutions",
      "Adjust timetables without confusion",
    ],
    note: "This is especially valuable in community and YMCA-style centres running overlapping programs.",
  },
  {
    icon: TrendingUp,
    title: "2. Attendance & Engagement Tracking",
    description: "FitDesk tracks attendance across all programs and highlights patterns. Managers can:",
    features: [
      "Identify declining attendance early",
      "Compare engagement across age groups",
      "Spot programs that need attention",
    ],
    note: "This helps prevent silent disengagement.",
  },
  {
    icon: Video,
    title: "3. Coaching Tools Trainers Actually Use",
    subtitle: "A system trainers enjoy — not tolerate",
    description: "FitDesk includes a library of 1,500+ instructional exercise videos, making it easy for trainers to:",
    features: [
      "Prescribe exercises confidently",
      "Demonstrate correct technique",
      "Support members between sessions",
    ],
    additionalFeatures: [
      "Add their own exercises with photos",
      "Link exercises to YouTube videos",
      "Build customised programs for different abilities",
    ],
    valuableFor: [
      "New trainers",
      "Casual staff",
      "Centres serving seniors or rehabilitation-focused members",
    ],
  },
  {
    icon: Heart,
    title: "4. Supporting Senior Citizens & Diverse Abilities",
    description: "FitDesk works well in centres with:",
    contexts: [
      "Senior fitness programs",
      "Low-impact and mobility sessions",
      "Community health initiatives",
    ],
    features: [
      "Clear visual instructions",
      "Simple exercise guidance",
      "Confidence to continue exercises independently",
    ],
    note: "This improves participation and safety.",
  },
  {
    icon: Smartphone,
    title: "5. Member, Parent & Trainer Apps",
    description: "FitDesk provides role-based access:",
    memberFeatures: [
      "View simple workout instructions",
      "Track attendance and progress",
      "Receive reminders and updates",
    ],
    trainerFeatures: [
      "Record attendance and notes",
      "Assign programs quickly",
      "Spend less time on admin",
    ],
    note: "This reduces reliance on paper notes and verbal reminders.",
  },
  {
    icon: Bell,
    title: "6. Communication That Reduces Chasing",
    description: "FitDesk automates routine communication so staff don't have to:",
    features: [
      "Program updates",
      "Session reminders",
      "Progress and milestone messages",
      "Renewal prompts",
    ],
    note: "Managers gain consistency without micromanaging staff.",
  },
  {
    icon: AlertTriangle,
    title: "7. Retention & Risk Indicators",
    description: "FitDesk highlights:",
    indicators: [
      "Reduced attendance",
      "Missed sessions",
      "Declining engagement",
    ],
    benefits: [
      "Step in early",
      "Support members before they disengage",
      "Improve retention without discounts",
    ],
  },
  {
    icon: BarChart3,
    title: "8. Facility Utilisation & Planning",
    description: "FitDesk helps centres understand:",
    insights: [
      "Peak vs quiet times",
      "Underused classes",
      "Staffing efficiency",
    ],
    supports: [
      "Roster planning",
      "Program adjustments",
      "Funding and grant justification (important for councils)",
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
            Core Modules
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything your centre needs, working together seamlessly
          </p>
        </motion.div>

        <div className="space-y-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-background p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0">
                  <module.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold">{module.title}</h3>
                  {module.subtitle && (
                    <p className="text-primary font-medium mt-1">{module.subtitle}</p>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{module.description}</p>

              {/* Standard features */}
              {module.features && (
                <ul className="space-y-2 mb-4">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Module 3: Additional trainer features */}
              {module.additionalFeatures && (
                <div className="mt-6">
                  <p className="text-muted-foreground mb-3">Trainers can also:</p>
                  <ul className="space-y-2 mb-4">
                    {module.additionalFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-3">This is especially valuable for:</p>
                  <ul className="space-y-2">
                    {module.valuableFor?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Module 4: Contexts */}
              {module.contexts && (
                <div className="mb-4">
                  <ul className="space-y-2 mb-4">
                    {module.contexts.map((context, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{context}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-3">Members benefit from:</p>
                  <ul className="space-y-2">
                    {module.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Module 5: Dual features */}
              {module.memberFeatures && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-3">Members and seniors can:</p>
                    <ul className="space-y-2">
                      {module.memberFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-3">Trainers can:</p>
                    <ul className="space-y-2">
                      {module.trainerFeatures?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Module 7: Indicators and benefits */}
              {module.indicators && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      {module.indicators.map((indicator, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-3">This allows managers to:</p>
                    <ul className="space-y-2">
                      {module.benefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Module 8: Insights and supports */}
              {module.insights && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      {module.insights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-3">This supports better:</p>
                    <ul className="space-y-2">
                      {module.supports?.map((support, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{support}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Note */}
              {module.note && (
                <p className="mt-4 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3">
                  {module.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
