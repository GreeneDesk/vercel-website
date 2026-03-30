export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_CATEGORIES = [
  "Pricing",
  "SwimDesk",
  "FitDesk",
  "Data & Compliance",
  "Migration & Onboarding",
  "Support",
  "Integrations",
] as const;

export type FAQCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQS: Record<FAQCategory, FAQItem[]> = {
  Pricing: [
    {
      q: "How much does GreeneDesk cost?",
      a: "Pricing is based on enrolment or membership volume. SwimDesk starts from A$144/month (annual) for up to 300 students. FitDesk starts from A$254/month (annual) for under 1,000 members. All plans are billed monthly or annually with a 15% annual discount.",
    },
    {
      q: "Are there setup or onboarding fees?",
      a: "No hidden setup fees. All plans include onboarding support, data migration assistance, and initial training sessions.",
    },
    {
      q: "Do you charge extra for SMS or WhatsApp messaging?",
      a: "SMS and WhatsApp messaging is included from the Professional tier onwards. There are no per-message surcharges within reasonable usage limits.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. SwimDesk offers a 15-day free trial with no credit card required, plus a complimentary 30-minute onboarding session to get you set up.",
    },
  ],
  SwimDesk: [
    {
      q: "Does SwimDesk work on the pool deck without WiFi?",
      a: "Yes — assessments and attendance can be recorded on any tablet or smartphone without an internet connection. Data auto-saves locally and syncs automatically once the device reconnects.",
    },
    {
      q: "Can we use our own curriculum and skill levels?",
      a: "Fully customisable. Whether you follow Swim Australia, Royal Lifesaving, Water Safety New Zealand, or your own proprietary program — the system adapts to you.",
    },
    {
      q: "How does SwimDesk improve parent engagement?",
      a: "Automated assessment emails, a parent app showing skill-by-skill progress, digital certificates, AI-generated personalised feedback, and voice notes teachers can record poolside.",
    },
    {
      q: "Can SwimDesk bolt onto our existing management system?",
      a: "Yes — many aquatic centres use SwimDesk alongside Jonas, Gladstone, or similar systems for memberships and bookings, adding assessment tracking and parent communication without replacing anything.",
    },
  ],
  FitDesk: [
    {
      q: "What makes FitDesk different from other gym software?",
      a: "FitDesk focuses on the gym floor experience — electronic PARQ health consultations, personalised workout programs with video/GIF demonstrations, member progress tracking, PT scheduling, and automated retention milestones. It's built for health clubs, not boutique studios.",
    },
    {
      q: "How does the exercise library work?",
      a: "FitDesk includes over 3,000 exercises with video and GIF demonstrations. You can also add your own custom exercises. Trainers build programs by selecting exercises and the member sees them in the app with full visual guides.",
    },
  ],
  "Data & Compliance": [
    {
      q: "Where is our data stored?",
      a: "All customer data is hosted on AWS Sydney, Australia. Data never leaves Australian jurisdiction.",
    },
    {
      q: "Is GreeneDesk compliant with the Australian Privacy Act?",
      a: "Yes. GreeneDesk is built in compliance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). For NZ customers, we align with the Privacy Act 2020.",
    },
    {
      q: "Who owns our data?",
      a: "Your organisation owns your data. Always. GreeneDesk does not sell your data to third parties. If you leave, you receive a complete export.",
    },
  ],
  "Migration & Onboarding": [
    {
      q: "Can you migrate our data from our current system?",
      a: "Yes. We have experience migrating data from Udio, SimplySwim, iClassPro, Mindbody, and custom spreadsheet setups. Migration typically takes 5–10 business days.",
    },
    {
      q: "How long does onboarding take?",
      a: "Most centres are live within 2 weeks. The process includes data migration, system configuration, staff training, and a go-live check.",
    },
  ],
  Support: [
    {
      q: "What are your support hours?",
      a: "Support is available 7am–7pm AEST, Monday to Friday. We're reachable by phone (1300 181 665), email, and in-app chat.",
    },
    {
      q: "Is support based in Australia?",
      a: "Yes. All support, product development, and account management is in-house and based in Australia.",
    },
  ],
  Integrations: [
    {
      q: "Does GreeneDesk integrate with accounting software?",
      a: "Integration with accounting systems like Xero and MYOB is on our roadmap. Contact us to discuss your current requirements.",
    },
    {
      q: "Can GreeneDesk integrate with our leisure management system?",
      a: "Yes. GreeneDesk integrates with platforms like Jonas Leisure, Gladstone, PerfectGym, and Envibe. We also support custom API connections for enterprise clients.",
    },
  ],
};
