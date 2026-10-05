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
      { feature: "SMS messaging", gd: "yes", comp: "partial", compNote: "Email-primary" },
      { feature: "Australian data hosting (AWS Sydney)", gd: "yes", comp: "yes" },
      { feature: "AU data hosting", gd: "yes", comp: "partial", compNote: "Check with vendor" },
      { feature: "Free trial available", gd: "yes", comp: "yes" },
      { feature: "AU/NZ-based support team", gd: "yes", comp: "partial", compNote: "AU support" },
    ],
  },
};
