export interface ComparisonRow {
  feature: string;
  gd: "yes" | "no" | "partial";
  comp: "yes" | "no" | "partial";
  compNote?: string;
}

export interface ComparisonData {
  competitor: string;
  intro: string;
  verdict: {
    icon: string;
    title: string;
    text: string;
  };
  rows: ComparisonRow[];
}

export const COMPARISONS: Record<string, ComparisonData> = {
  "GreeneDesk vs Udio": {
    competitor: "Udio",
    intro: "Udio is a solid general class-management platform built for lesson-based businesses. GreeneDesk is built specifically for aquatic and sports centres — with deeper progression tracking, competitive squads management, and a parent app designed for swim school workflows.",
    verdict: {
      icon: "🏊",
      title: "The bottom line on GreeneDesk vs Udio",
      text: "If you run a swim school and student progression, parent communication, and retention analytics are your primary pain points — GreeneDesk is the purpose-built choice. Udio is a capable generalist. GreeneDesk is a specialist.",
    },
    rows: [
      { feature: "Built for swim schools", gd: "yes", comp: "partial", compNote: "General class businesses" },
      { feature: "Pool-deck tablet mode (offline-capable)", gd: "yes", comp: "no" },
      { feature: "Competitive squads management", gd: "yes", comp: "no" },
      { feature: "Schools program module", gd: "yes", comp: "no" },
      { feature: "Parent mobile app (iOS + Android)", gd: "yes", comp: "yes" },
      { feature: "Skill-level assessment & progression", gd: "yes", comp: "partial", compNote: "Basic tracking only" },
      { feature: "AI retention risk alerts", gd: "yes", comp: "no" },
      { feature: "Online bookings & payments", gd: "yes", comp: "yes" },
      { feature: "SMS & WhatsApp messaging", gd: "yes", comp: "partial", compNote: "Email-primary" },
      { feature: "Australian data hosting (AWS Sydney)", gd: "yes", comp: "yes" },
      { feature: "Au/NZ-based support team", gd: "yes", comp: "partial", compNote: "AU support" },
    ],
  },
  "GreeneDesk vs Mindbody": {
    competitor: "Mindbody",
    intro: "Mindbody is a US-based platform widely used in yoga, pilates, and boutique fitness studios. FitDesk by GreeneDesk is purpose-built for health clubs, leisure centres, and gym-floor member management — with a strong focus on induction, workout programming, and retention.",
    verdict: {
      icon: "🏋️",
      title: "The bottom line on FitDesk vs Mindbody",
      text: "Mindbody is built for boutique studios and class-based fitness businesses. FitDesk is built for health clubs that need electronic member induction, personalised workout programming, and a structured retention process.",
    },
    rows: [
      { feature: "Purpose-built for health clubs & leisure centres", gd: "yes", comp: "partial", compNote: "Studio/class focus" },
      { feature: "Electronic PARQ health consultations", gd: "yes", comp: "no" },
      { feature: "Personalised workout programs with video/GIFs", gd: "yes", comp: "no" },
      { feature: "4,000+ exercise library (customisable)", gd: "yes", comp: "no" },
      { feature: "Member workout tracking & progress logs", gd: "yes", comp: "no" },
      { feature: "PT appointment scheduling & management", gd: "yes", comp: "yes" },
      { feature: "Automated retention milestone follow-ups", gd: "yes", comp: "partial", compNote: "Marketing automations only" },
      { feature: "Member challenges & leaderboards", gd: "yes", comp: "no" },
      { feature: "Australian data hosting", gd: "yes", comp: "no", compNote: "US-hosted" },
      { feature: "AU/NZ-based support team", gd: "yes", comp: "no", compNote: "US support hours" },
      { feature: "Pricing in AUD", gd: "yes", comp: "no", compNote: "USD pricing" },
    ],
  },
  "GreeneDesk vs SimplySwim": {
    competitor: "SimplySwim",
    intro: "SimplySwim is an Australian-built swim school platform with a strong focus on ease of use and a clean interface. GreeneDesk serves a broader range of centre types and delivers significantly deeper analytics, squads support, and multi-module flexibility.",
    verdict: {
      icon: "🏅",
      title: "The bottom line on GreeneDesk vs SimplySwim",
      text: "SimplySwim is a strong entry-level option for smaller private swim schools prioritising simplicity. GreeneDesk is the right choice for centres that have outgrown simple class management — those running school programs, competitive squads, or multiple venues.",
    },
    rows: [
      { feature: "Built for Australian swim schools", gd: "yes", comp: "yes" },
      { feature: "NZ support & data hosting", gd: "yes", comp: "no" },
      { feature: "Competitive squads module", gd: "yes", comp: "no" },
      { feature: "Schools program module", gd: "yes", comp: "no" },
      { feature: "Pool-deck tablet mode (offline)", gd: "yes", comp: "partial", compNote: "Requires connectivity" },
      { feature: "AI retention risk alerts", gd: "yes", comp: "no" },
      { feature: "WhatsApp messaging", gd: "yes", comp: "no" },
      { feature: "Multi-site management", gd: "yes", comp: "partial", compNote: "Limited" },
      { feature: "Gym management (FitDesk)", gd: "yes", comp: "no" },
      { feature: "Parent app (iOS + Android)", gd: "yes", comp: "yes" },
      { feature: "Online enrolments & payments", gd: "yes", comp: "yes" },
    ],
  },
};
