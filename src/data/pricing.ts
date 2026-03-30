export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  desc: string;
  students: string;
  students2: string;
  monthly: string;
  monthly2: string;
  annual: string;
  annual2: string;
  featured?: boolean;
  features: PlanFeature[];
}

export const PRODUCTS = ["SwimDesk", "FitDesk", "SportDesk"] as const;
export type Product = (typeof PRODUCTS)[number];

export const PLANS: Record<Product, Plan[]> = {
  SwimDesk: [
    {
      name: "Starter",
      desc: "Everything you need to run a modern swim school — classlist, attendance, skills, payments and parent communication.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "169",
      monthly2: "199",
      annual: "144",
      annual2: "169",
      features: [
        { text: "Classlist & class management", included: true },
        { text: "Attendance tracking", included: true },
        { text: "Skills tracking & assessments", included: true },
        { text: "Communication tools (email)", included: true },
        { text: "Payment capability", included: true },
        { text: "Calendar", included: true },
        { text: "Parent portal", included: true },
        { text: "SMS capability", included: true },
        { text: "Digital certificates", included: true },
        { text: "Online training", included: true },
        { text: "Reports", included: false },
        { text: "Parent & Staff app", included: false },
        { text: "Online booking & payments", included: false },
        { text: "Auto actions & voice notes", included: false },
        { text: "AI generated student reports", included: false },
      ],
    },
    {
      name: "Premium",
      desc: "Full operations platform — adds the parent app, staff app, online bookings, auto-actions and voice notes.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "239",
      monthly2: "269",
      annual: "203",
      annual2: "229",
      featured: true,
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Reports & analytics", included: true },
        { text: "Parent app (iOS + Android)", included: true },
        { text: "Staff app (iOS + Android)", included: true },
        { text: "Online booking & payments", included: true },
        { text: "Booking makeup classes", included: true },
        { text: "Auto actions & task list", included: true },
        { text: "Voice notes to parents via app", included: true },
        { text: "Branded digital certificates", included: true },
        { text: "AI generated student reports (up to 100/mo)", included: false },
      ],
    },
    {
      name: "Premium Plus",
      desc: "For centres that want AI-powered parent communication — personalised student reports and emails generated automatically.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "349",
      monthly2: "399",
      annual: "297",
      annual2: "339",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "AI generated student reports & emails (up to 100/mo)", included: true },
      ],
    },
  ],
  FitDesk: [
    {
      name: "Starter",
      desc: "Digitise your gym's member induction, workout programming and PT scheduling — eliminate paper entirely.",
      students: "Under 1,000 members",
      students2: "1,000+ members",
      monthly: "299",
      monthly2: "399",
      annual: "254",
      annual2: "339",
      features: [
        { text: "KPI dashboard", included: true },
        { text: "Communication tools", included: true },
        { text: "Member induction & evaluation", included: true },
        { text: "Exercise library (3,000+ exercises)", included: true },
        { text: "Add your own exercises", included: true },
        { text: "Workout builder", included: true },
        { text: "Assign program to member", included: true },
        { text: "Trainer roster", included: true },
        { text: "Member appointment booking", included: true },
        { text: "Member portal", included: true },
        { text: "Online onboarding", included: true },
        { text: "Reports", included: false },
        { text: "Member & Staff app", included: false },
        { text: "Auto actions & challenges", included: false },
        { text: "AI generated member reports", included: false },
      ],
    },
    {
      name: "Premium",
      desc: "Adds the member app, staff app, automated retention actions, challenges, leaderboards and custom evaluations.",
      students: "Under 1,000 members",
      students2: "1,000+ members",
      monthly: "399",
      monthly2: "499",
      annual: "339",
      annual2: "424",
      featured: true,
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Reports & analytics", included: true },
        { text: "Member app (iOS + Android)", included: true },
        { text: "Staff app (iOS + Android)", included: true },
        { text: "Auto actions & task list", included: true },
        { text: "Member challenges & leaderboard", included: true },
        { text: "Members can create own programs", included: true },
        { text: "Customised evaluation forms", included: true },
        { text: "Weekly analytics email", included: false },
        { text: "AI generated member reports", included: false },
      ],
    },
    {
      name: "Premium Plus",
      desc: "For data-driven gyms — weekly AI analytics digest and AI-generated personalised member reports.",
      students: "Under 1,000 members",
      students2: "1,000+ members",
      monthly: "499",
      monthly2: "599",
      annual: "424",
      annual2: "509",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "Weekly email with key analytics", included: true },
        { text: "AI generated member reports", included: true },
      ],
    },
  ],
  SportDesk: [
    {
      name: "Starter",
      desc: "Class management, attendance, skills tracking, communications and digital certificates for sports academies.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "169",
      monthly2: "199",
      annual: "144",
      annual2: "169",
      features: [
        { text: "Classlist & class management", included: true },
        { text: "Attendance tracking", included: true },
        { text: "Skills tracking & assessments", included: true },
        { text: "Communication tools (email)", included: true },
        { text: "Payment capability", included: true },
        { text: "Calendar", included: true },
        { text: "Parent portal", included: true },
        { text: "SMS capability", included: true },
        { text: "Digital certificates", included: true },
        { text: "Online training", included: true },
        { text: "Reports", included: false },
        { text: "Parent & Staff app", included: false },
        { text: "Online booking & payments", included: false },
        { text: "Auto actions & voice notes", included: false },
        { text: "AI generated student reports", included: false },
      ],
    },
    {
      name: "Premium",
      desc: "Full operations — parent app, staff app, online bookings, auto-actions and branded certificates.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "239",
      monthly2: "269",
      annual: "203",
      annual2: "229",
      featured: true,
      features: [
        { text: "Everything in Starter", included: true },
        { text: "Reports & analytics", included: true },
        { text: "Parent app (iOS + Android)", included: true },
        { text: "Staff app (iOS + Android)", included: true },
        { text: "Online booking & payments", included: true },
        { text: "Booking makeup classes", included: true },
        { text: "Auto actions & task list", included: true },
        { text: "Voice notes to parents via app", included: true },
        { text: "Branded digital certificates", included: true },
        { text: "AI generated student reports (up to 100/mo)", included: false },
      ],
    },
    {
      name: "Premium Plus",
      desc: "AI-powered parent communication — personalised student reports and emails generated automatically.",
      students: "Up to 300 students",
      students2: "300+ students",
      monthly: "349",
      monthly2: "399",
      annual: "297",
      annual2: "339",
      features: [
        { text: "Everything in Premium", included: true },
        { text: "AI generated student reports & emails (up to 100/mo)", included: true },
      ],
    },
  ],
};
