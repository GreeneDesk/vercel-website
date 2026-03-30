export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  desc: string;
  capacity: string;
  price: string;
  featured?: boolean;
  enterprise?: boolean;
  features: PlanFeature[];
}

export const PRODUCTS = ["SwimDesk", "FitDesk", "SportDesk"] as const;
export type Product = (typeof PRODUCTS)[number];

export const PLANS: Record<Product, Plan[]> = {
  SwimDesk: [
    {
      name: "Essentials",
      desc: "Everything you need to run a modern swim school — assessments, attendance, payments and parent communication.",
      capacity: "Up to 500 enrolments",
      price: "—",
      features: [
        { text: "Pool-deck assessments on tablet/phone (offline-capable)", included: true },
        { text: "Customisable skill curriculum & levels", included: true },
        { text: "Digital certificates (auto-generated, branded)", included: true },
        { text: "Parent portal & GreeneDesk app (iOS + Android)", included: true },
        { text: "Automated assessment emails to parents", included: true },
        { text: "Attendance recording at press of a button", included: true },
        { text: "Online bookings, waitlists & makeup lessons", included: true },
        { text: "Online payments & automated payment follow-up", included: true },
        { text: "KPI dashboards & retention reporting", included: true },
        { text: "SMS & WhatsApp messaging", included: false },
        { text: "AI communication generator", included: false },
        { text: "Voice notes to parents via app", included: false },
        { text: "Schools program module", included: false },
        { text: "Squads module", included: false },
      ],
    },
    {
      name: "Professional",
      desc: "Full operations platform — AI communications, schools programs, squads, and multi-location management.",
      capacity: "501–1,500 enrolments",
      price: "—",
      featured: true,
      features: [
        { text: "Everything in Essentials", included: true },
        { text: "SMS & WhatsApp messaging", included: true },
        { text: "AI communication generator (10+ years of training data)", included: true },
        { text: "Voice notes — record & send audio to parents via app", included: true },
        { text: "Schools program module (bulk upload, auto-reports)", included: true },
        { text: "Squads module (bookings, payments, training videos, stopwatch)", included: true },
        { text: "Advanced analytics & time-in-level reporting", included: true },
        { text: "Multi-location class management", included: true },
        { text: "Automation triggers (cancellations, progression, birthdays)", included: true },
        { text: "Dedicated account manager", included: false },
        { text: "Custom leisure management system integration", included: false },
      ],
    },
    {
      name: "Enterprise",
      desc: "For large aquatic centres and council operations with custom integrations and dedicated support.",
      capacity: "1,500+ enrolments",
      price: "Custom",
      enterprise: true,
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Custom leisure management system integration", included: true },
        { text: "Victoria Water Safety & state reporting templates", included: true },
        { text: "Custom onboarding program with named specialist", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "SLA-backed priority support (4h response)", included: true },
        { text: "Executive & stakeholder reporting dashboards", included: true },
      ],
    },
  ],
  FitDesk: [
    {
      name: "Basic",
      desc: "Digitise your gym's member induction, workout programming and exercise library.",
      capacity: "Up to 150 members",
      price: "—",
      features: [
        { text: "Electronic health consultations (PARQ)", included: true },
        { text: "Digital workout programs with exercise GIFs & video", included: true },
        { text: "4,000+ exercise library (customisable)", included: true },
        { text: "Member portal & GreeneDesk app (iOS + Android)", included: true },
        { text: "Workout history tracking & progress logs", included: true },
        { text: "Document storage (medical certs, physio notes)", included: true },
        { text: "PT appointment booking & scheduling", included: false },
        { text: "Automated SMS & email reminders", included: false },
        { text: "Retention module & milestone follow-ups", included: false },
        { text: "Member challenges & leaderboards", included: false },
        { text: "KPI & team performance analytics", included: false },
        { text: "SalesDesk CRM integration", included: false },
      ],
    },
    {
      name: "FitDesk+",
      desc: "Adds PT scheduling, retention automation, challenges, leaderboards and team analytics.",
      capacity: "151–500 members",
      price: "—",
      featured: true,
      features: [
        { text: "Everything in Basic", included: true },
        { text: "PT appointment booking & scheduling", included: true },
        { text: "Automated SMS & email reminders (no-show reduction)", included: true },
        { text: "Retention module — milestone-triggered follow-ups", included: true },
        { text: "Member challenges & points leaderboards", included: true },
        { text: "New member onboarding automation", included: true },
        { text: "KPI & team performance analytics dashboard", included: true },
        { text: "Multi-trainer management & output tracking", included: true },
        { text: "Gym floor kiosk support", included: true },
        { text: "SalesDesk CRM integration", included: false },
        { text: "Multi-site management", included: false },
      ],
    },
    {
      name: "Enterprise",
      desc: "For health clubs needing CRM, multi-site management, and custom integrations.",
      capacity: "500+ members",
      price: "Custom",
      enterprise: true,
      features: [
        { text: "Everything in FitDesk+", included: true },
        { text: "SalesDesk CRM integration (lead-to-member pipeline)", included: true },
        { text: "Multi-site management & cross-facility reporting", included: true },
        { text: "Leisure management system integrations", included: true },
        { text: "Accounting system integration (contact us for details)", included: true },
        { text: "Custom branding & facility configuration", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom onboarding program", included: true },
        { text: "Priority support SLA", included: true },
      ],
    },
  ],
  SportDesk: [
    {
      name: "Club",
      desc: "Class scheduling, member registration, billing and attendance for sports clubs.",
      capacity: "Up to 300 members",
      price: "—",
      features: [
        { text: "Class & session scheduling", included: true },
        { text: "Member registration & billing", included: true },
        { text: "Attendance tracking", included: true },
        { text: "Parent notifications", included: true },
        { text: "Advanced reporting", included: false },
        { text: "Multi-venue support", included: false },
      ],
    },
    {
      name: "Centre",
      desc: "Multi-venue management with advanced reporting and access control integration.",
      capacity: "300–1,000 members",
      price: "—",
      featured: true,
      features: [
        { text: "Everything in Club", included: true },
        { text: "Advanced reporting", included: true },
        { text: "Multi-venue support", included: true },
        { text: "Access control integration", included: true },
        { text: "Council reporting templates", included: true },
        { text: "Dedicated onboarding", included: false },
      ],
    },
    {
      name: "Enterprise",
      desc: "Custom integrations, dedicated account management and priority support.",
      capacity: "1,000+ members",
      price: "Custom",
      enterprise: true,
      features: [
        { text: "Everything in Centre", included: true },
        { text: "Dedicated onboarding", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Accounting system integration (contact us for details)", included: true },
      ],
    },
  ],
};
