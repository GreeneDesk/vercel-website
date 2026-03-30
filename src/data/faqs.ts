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
      a: "Pricing is based on enrolment or membership volume — you only pay for the scale you operate at. All plans are billed monthly or annually (15% discount annually). Contact us for an exact quote tailored to your centre size.",
    },
    {
      q: "Are there setup or onboarding fees?",
      a: "No hidden setup fees. All plans include onboarding support, data migration assistance, and initial training sessions. Enterprise plans include a custom onboarding program with a dedicated specialist.",
    },
    {
      q: "Do you charge extra for SMS or WhatsApp messaging?",
      a: "SMS and WhatsApp messaging is included from the Professional tier onwards. There are no per-message surcharges within reasonable usage limits.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes. SwimDesk offers a 15-day free trial with no credit card required, plus a complimentary 30-minute onboarding session. Book your trial from the demo page.",
    },
  ],
  SwimDesk: [
    {
      q: "Does SwimDesk work on the pool deck without WiFi?",
      a: "Yes. Assessments and attendance can be recorded on any tablet or smartphone without an internet connection. Data auto-saves locally and syncs automatically once the device reconnects. No dropped records, no lost sessions, no dependency on a pool-side WiFi signal.",
    },
    {
      q: "Can we use our own curriculum and skill levels?",
      a: "Fully. SwimDesk is customisable to your facility's curriculum, skill progression structure, and branding. Whether you follow Swim Australia, Royal Lifesaving, Water Safety New Zealand, or your own proprietary program — the system adapts to you.",
    },
    {
      q: "How does SwimDesk improve parent engagement?",
      a: "Research shows 69% of swim school parents are dissatisfied, with lack of progress feedback as their number one complaint. SwimDesk fixes this with automated assessment emails, a parent app showing skill-by-skill progress history, digital certificates, AI-generated personalised feedback messages, and voice notes teachers can record poolside and send directly to parents via the app.",
    },
    {
      q: "What is the AI communication feature?",
      a: "SwimDesk's AI tool was built on over 10 years of swim school data. After you assess a student, the AI generates a personalised message to send to parents at the press of a button. It learns from your swim school's existing language and style to produce authentic-sounding communication — not generic templates.",
    },
    {
      q: "What are Voice Notes?",
      a: "Voice Notes let teachers record a short audio message for an individual student or an entire class from poolside. The note is automatically sent to parents via the GreeneDesk app. Parents receive a notification and can listen immediately. It's the fastest way to give personal feedback without typing.",
    },
    {
      q: "Can SwimDesk handle makeup lessons and waitlists?",
      a: "Yes. Parents can manage their own confirmed absences, book makeup lessons, and join waitlists directly through the parent portal or app — without calling your front desk.",
    },
    {
      q: "How does the Schools module work?",
      a: "The Schools module handles the full workflow: bulk upload of student data from a spreadsheet, session and class creation, pool-deck attendance and assessments (offline-capable), student movement between classes with one click, automated digital certificates, and reporting output including the Victorian Water Safety report. Schools get their own portal to manage their students.",
    },
    {
      q: "What is the Squads module?",
      a: "The Squads module is built for competitive swimming programs. It includes online bookings and payments for squad sessions, training time recording with an in-built stopwatch, video capture of training sets, AI communication tools and voice notes, and KPI reporting for coaches.",
    },
    {
      q: "Can SwimDesk bolt onto our existing management system?",
      a: "Yes. Many aquatic centres already use a leisure management system for memberships and bookings. SwimDesk integrates alongside these to add assessment tracking, parent communication, and retention analytics without replacing the existing system.",
    },
    {
      q: "How many swim schools use SwimDesk?",
      a: "SwimDesk is trusted by swim schools across Australia, New Zealand, the United States, United Arab Emirates, and India — ranging from private schools with 200 students to large national aquatic centres with over 5,000 enrolments. GreeneDesk has been operating since 2010.",
    },
  ],
  FitDesk: [
    {
      q: "What does FitDesk actually replace at our gym?",
      a: "FitDesk replaces paper-based fitness consultations, handwritten workout cards, manual PT appointment books, and ad-hoc member follow-up processes. Everything moves digital — health consultations (PARQ), workout programs with exercise videos, PT scheduling, and retention follow-ups — all in one system accessible on any device.",
    },
    {
      q: "Can members access their workout program at home or on their phone?",
      a: "Yes. Members log in via the GreeneDesk app (iOS and Android) or any browser to view their personalised workout program, track results, and communicate with their trainer. They can also create and log their own workouts.",
    },
    {
      q: "How does FitDesk improve member retention?",
      a: "FitDesk's retention module tracks key member milestones — first visit, reassessment due dates, periods of inactivity — and automatically triggers follow-up tasks (calls, emails, SMS) for your team. Clients have seen improvements of up to 10% in member retention rates.",
    },
    {
      q: "Does FitDesk work on a gym floor tablet or kiosk?",
      a: "Yes. FitDesk is optimised for tablets and supports gym floor kiosks for members who prefer not to use their phone. We recommend Google Chrome on computers and Safari on iPad.",
    },
    {
      q: "Can we customise the health consultation and exercise library for our centre?",
      a: "Yes — fully. You can adjust the PARQ health consultation and the exercise library. Add your own exercises with custom videos linked from YouTube, define your own testing protocols, and configure everything to match your equipment and branding.",
    },
    {
      q: "What is SalesDesk and does it work with FitDesk?",
      a: "SalesDesk is GreeneDesk's CRM for managing gym member sales — capturing walk-in, phone, and digital leads, scheduling tours, and automating follow-up sequences to convert prospects into members. It integrates tightly with FitDesk so the member journey is seamless from first enquiry through to ongoing retention.",
    },
    {
      q: "Do you need WiFi to run FitDesk at the gym?",
      a: "You need an internet connection and a computer or tablet. A stable WiFi connection is recommended for the gym floor. We can advise on kiosk and network setup if you're retrofitting an older facility.",
    },
  ],
  "Data & Compliance": [
    {
      q: "Where is our data stored?",
      a: "All customer data is hosted on AWS Sydney, Australia. Data never leaves Australian jurisdiction. For New Zealand customers, data is hosted in Australia — if in-country NZ hosting is a specific requirement for your organisation, contact us to discuss options.",
    },
    {
      q: "Is GreeneDesk compliant with the Australian Privacy Act?",
      a: "Yes. GreeneDesk is built in compliance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). For New Zealand customers, we align with the Privacy Act 2020 and its Information Privacy Principles.",
    },
    {
      q: "Who owns our data?",
      a: "You do. Always. All data stored in GreeneDesk remains the property of your organisation. If you leave, you receive a full data export. GreeneDesk does not sell, share, or use your member data for any purpose outside of operating your account.",
    },
  ],
  "Migration & Onboarding": [
    {
      q: "Can you migrate our data from our current system?",
      a: "Yes. We have experience migrating data from Udio, SimplySwim, iClassPro, Mindbody, and custom spreadsheet setups. Our team handles the migration — you don't need to re-enter data manually. Typically 5–10 business days.",
    },
    {
      q: "How long does onboarding take?",
      a: "Most centres are live within 2 weeks of signing. For larger Enterprise deployments with custom integrations, allow 4–6 weeks.",
    },
    {
      q: "Do we get a dedicated onboarding person?",
      a: "All plans include onboarding support from our Australian-based team. Professional and Enterprise plans include a named account manager throughout the process.",
    },
  ],
  Support: [
    {
      q: "What are your support hours?",
      a: "Support is available 7am–7pm AEST, Monday to Friday. Enterprise plans include a 4-hour response SLA for critical issues. Reach us by phone (1300 181 665), email, or in-app chat.",
    },
    {
      q: "Is support based in Australia?",
      a: "Yes. All support, product development, and account management is in-house and based in Australia. When you call, you speak to someone who knows the product and understands how Australian and NZ aquatic centres operate.",
    },
  ],
  Integrations: [
    {
      q: "Does GreeneDesk integrate with accounting software like Xero or MYOB?",
      a: "Native Xero and MYOB integrations are on our roadmap. Currently, data can be exported in formats compatible with your accounting system. Contact us to discuss the best approach for your centre's financial workflow.",
    },
    {
      q: "What payment gateways do you support?",
      a: "GreeneDesk supports Stripe, eWAY, and PayWay — the most widely used payment gateways in Australia and New Zealand. Direct debit and credit card payments are fully supported.",
    },
    {
      q: "Can it integrate with our existing access control system?",
      a: "Enterprise plans support integration with leading access control systems used in Australian leisure facilities. Contact us with your current setup and we'll confirm compatibility.",
    },
    {
      q: "Does FitDesk integrate with our existing membership management system?",
      a: "Yes. FitDesk integrates with several popular leisure management systems — it can bolt on to your existing system to add assessment, workout, and retention functionality without replacing your core platform. Contact us with your current system and we'll confirm the integration path.",
    },
  ],
};
