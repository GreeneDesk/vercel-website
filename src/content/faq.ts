// FAQ content for /faq. Fill every [FILL] and check every [CONFIRM] before publishing.
// Edit this file directly in Lovable's code editor (no AI prompt needed).

export type FaqItem = { q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "About GreeneDesk",
    items: [
      {
        q: "What is GreeneDesk?",
        a: "GreeneDesk is an Australian company and a software platform for sports and recreation facilities. Its products are FitDesk for fitness floors and seniors programs, SwimDesk for swim schools and aquatic programs, and SportDesk for squads and sports programs. More than 50 centres across Australia and New Zealand use GreeneDesk products.",
      },
      {
        q: "Where is my data stored?",
        a: "Australian customer data stays in Australia, hosted on AWS in Sydney. New Zealand customers are also hosted in Sydney. For customers and partners elsewhere, GreeneDesk can be hosted in your region or on your own servers. Support is provided by an Australian-based team, Monday to Friday 7am–7pm AEST, on 1300 181 665.",
      },
      {
        q: "Do I have to replace my management system?",
        a: "No. GreeneDesk works alongside systems such as PerfectGym, which keep handling memberships, billing and access control. Independent swim schools can also run SwimDesk on its own.",
      },
    ],
  },
  {
    title: "PerfectGym",
    items: [
      {
        q: "Does FitDesk integrate with PerfectGym?",
        a: "Yes. FitDesk connects to PerfectGym through an independent, customer-authorised API integration. PerfectGym stays your system for memberships, billing and access; FitDesk adds digital PARQ, assessments, workout programming, trainer scheduling and a member app.",
      },
      {
        q: "What syncs between PerfectGym and FitDesk?",
        a: "Member profiles and membership status sync from PerfectGym to FitDesk, so trainers never re-key member details.",
      },
      {
        q: "Is GreeneDesk affiliated with PerfectGym?",
        a: "No. The integration is independent and is authorised by each customer.",
      },
    ],
  },
  {
    title: "Moving from Mywellness",
    items: [
      {
        q: "What is the best Mywellness alternative for Australian leisure centres?",
        a: "For centres that want member and health data hosted in Australia, FitDesk covers the same ground: digital PARQ and health consultations, assessments, workout programming with 4,000+ exercise videos and a member app. It is hosted on AWS Sydney and supported from Australia.",
      },
      {
        q: "Can we keep our Technogym equipment?",
        a: "Yes. FitDesk replaces Mywellness software only. It has nothing to do with your Technogym fitness equipment.",
      },
      {
        q: "Can we replace Mywellness and keep PerfectGym?",
        a: "Yes. FitDesk plugs into PerfectGym, so you can move off Mywellness without changing your membership and billing system.",
      },
      {
        q: "How do we move member programs from Mywellness?",
        a: "We help you export member records and rebuild your program templates in FitDesk's exercise library. Most centres switch in 2 weeks.",
      },
    ],
  },
  {
    title: "Active ageing and rehabilitation",
    items: [
      {
        q: "What software do leisure centres use for seniors and falls-prevention programs?",
        a: "FitDesk is built for it: digital pre-exercise screening, your own balance and strength assessments digitised, structured strength and balance programs with reassessments, attendance tracking and a simple member app. It is hosted in Sydney and used by council leisure centres across Australia and New Zealand.",
      },
      {
        q: "Can FitDesk track strength and balance classes for ACC Live Stronger for Longer?",
        a: "FitDesk tracks class attendance and records the baseline and follow-up assessments your instructors run, and you can email customised progress reports. That helps councils and providers running Live Stronger for Longer classes in New Zealand. GreeneDesk is not affiliated with ACC.",
      },
      {
        q: "Can exercise physiologists and physios hand programs over to the gym floor?",
        a: "Yes. Programs are built in FitDesk from 4,000+ exercises, members follow them in the app, and trainers see who is keeping up, so clients can step down from clinic to community gym.",
      },
      {
        q: "Does FitDesk support Support at Home or restorative care programs?",
        a: "FitDesk runs structured 8 to 12-week programs with reassessments and progress reports, which suits centres delivering exercise for Support at Home providers. Funding and claiming stay with the registered provider.",
      },
      {
        q: "Does FitDesk run falls-risk or fitness tests?",
        a: "FitDesk doesn't prescribe tests. It digitises the assessments your team already uses, such as balance, strength and mobility tests or screening forms, and it is fully customisable. Results are kept in each member's history and can be emailed as customised reports to GPs, physios and families.",
      },
      {
        q: "Living Longer Living Stronger has ended. Can we keep our seniors strength program going?",
        a: "Yes. COTA Victoria ended Living Longer Living Stronger in February 2025. FitDesk gives you the screening, program templates and progress tracking to keep running a seniors strength program under your own name.",
      },
    ],
  },
  {
    title: "Swim schools",
    items: [
      {
        q: "What is SwimDesk?",
        a: "SwimDesk is swim school and aquatic centre software for class scheduling and bookings, poolside attendance and skills assessments, progression tracking, digital certificates, parent communication and term-based billing.",
      },
      {
        q: "Does SwimDesk support AUSTSWIM and Royal Life Saving levels?",
        a: "Yes. SwimDesk supports AUSTSWIM, Royal Life Saving and YMCA curricula, or your own syllabus and lesson plans.",
      },
      {
        q: "Can parents book make-up lessons?",
        a: "Yes. In the SwimDesk parent app, families book classes, report absences, book make-up classes and see progress and certificates.",
      },
      {
        q: "Can instructors assess poolside without wifi?",
        a: "Yes. SwimDesk has a pool-deck tablet mode that works offline and syncs when the device reconnects.",
      },
      {
        q: "We use iClassPro. Can we switch to SwimDesk?",
        a: "Yes. We import your families, students, levels and class lists from your iClassPro data export and set up your levels before go-live. You get a platform built around Australian learn-to-swim programs, with Australian data kept in Australia and local support.",
      },
      {
        q: "Does SwimDesk handle school swimming programs?",
        a: "Yes. SwimDesk includes a School Programs module for school group bookings, attendance and reporting, including across multiple sites.",
      },
      {
        q: "Can SwimDesk run our squads as well as lessons?",
        a: "Yes. SwimDesk includes a Squads module for squad groups, coaching sessions and athlete progress. Learn-to-swim, school programs and squads run on one platform, so swimmers move from lessons into squads without re-entering records.",
      },
      {
        q: "Is there a mobile app?",
        a: "Yes, for every user. Instructors and coaches use it poolside for attendance and assessments, office staff for scheduling, and parents for bookings, absences, make-up classes, progress and certificates. FitDesk trainers and members have their own apps too.",
      },
      {
        q: "How does AI retention work?",
        a: "SwimDesk's AI retention alerts flag students at risk of dropping out or not re-enrolling, based on patterns such as missed lessons and stalled progress, so your team can contact families before term ends.",
      },
    ],
  },
  {
    title: "Pricing and getting started",
    items: [
      {
        q: "How much does SwimDesk cost?",
        a: "SwimDesk is priced by active enrolments: Essentials up to 500, Professional 501–1,500 and Enterprise 1,500+. Plans start from A$350 per month, and annual billing saves 15%.",
      },
      {
        q: "How much does FitDesk cost?",
        a: "FitDesk is priced by active members: Basic up to 150, FitDesk+ 151–500 and Enterprise 500+. Plans start from A$550 per month, and annual billing saves 15%.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. After your demo, we set your centre up with a 15-day free trial so you can try GreeneDesk with your own programs and data. No credit card required.",
      },
      {
        q: "How long does setup take?",
        a: "Most centres go live within 2 weeks of signing.",
      },
    ],
  },
];
