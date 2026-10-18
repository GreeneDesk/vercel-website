// Free guides and checklists for /guides and /guides/:slug.
// PDFs live in public/guides/. To add a guide: drop the PDF in public/guides/, add an entry here,
// and add its URL to public/sitemap.xml. No AI prompt needed.

import { wwcConnect } from "./wwc-connect";

export type Guide = {
  slug: string;
  file: string; // path under public/
  type: "Guide" | "Checklist";
  audience: "Seniors and falls prevention" | "Gyms and fitness floors" | "Swim and children's programs";
  title: string;
  seoTitle: string; // under 60 characters
  description: string; // meta description, under 160 characters
  summary: string;
  who: string;
  inside: string[];
  faqs: { q: string; a: string; appendix?: { text: string; linkText: string; to: string } }[];
  related: { label: string; to: string }[];
  pages: number;
};

export const guides: Guide[] = [
  {
    slug: "falls-prevention-retirement-villages-aged-care",
    file: "/guides/GreeneDesk-falls-prevention-retirement-villages-aged-care.pdf",
    type: "Guide",
    audience: "Seniors and falls prevention",
    title: "Falls prevention exercise programs in retirement villages and aged care",
    seoTitle: "Falls Prevention Exercise Program Guide (Free PDF)",
    description:
      "Free guide for retirement villages, aged care and seniors gyms: falls data, what the evidence says works, and a checklist for running exercise programs.",
    summary:
      "Falls cause 43% of injury deaths in Australia. This guide sets out what the evidence says about exercise and falls, and gives village managers, lifestyle coordinators and aged care teams a practical checklist for programs residents use and boards, families and clinicians trust.",
    who: "Retirement village managers, wellness and lifestyle coordinators, allied health teams and aged care providers in Australia and New Zealand.",
    inside: [
      "Australian falls data from the AIHW: deaths, hospitalisations and cost",
      "What works: Cochrane review results and NZ Live Stronger for Longer outcomes",
      "Why falls programs are on boards' agendas, including aged care quality indicators",
      "Set-up, delivery and review checklists",
      "How programs differ in retirement villages and residential aged care",
    ],
    faqs: [
      {
        q: "Does exercise reduce falls in older people?",
        a: "Yes. A 2019 Cochrane review found exercise reduces the rate of falls by 23% in older people living in the community, and programs combining balance, functional and resistance exercise by 34%.",
      },
      {
        q: "How often should a falls prevention exercise program run?",
        a: "The guide recommends sessions at least twice a week, with home or room exercises between sessions, and balance challenge that increases as residents improve.",
      },
      {
        q: "Who is this guide for?",
        a: "Retirement villages, residential aged care providers, seniors gyms and allied health teams in Australia and New Zealand.",
      },
    ],
    related: [
      { label: "FitDesk for aged care and retirement villages", to: "/aged-care-retirement-living-fitness" },
      { label: "FitDesk for active ageing and rehab", to: "/active-ageing-rehab-software" },
    ],
    pages: 4,
  },
  {
    slug: "older-adults-strength-balance-program-guide",
    file: "/guides/GreeneDesk-older-adults-strength-balance-program-guide.pdf",
    type: "Guide",
    audience: "Seniors and falls prevention",
    title: "Running strength and balance programs for older adults",
    seoTitle: "Strength and Balance Programs for Older Adults (PDF)",
    description:
      "Free guide for leisure centres, councils and YMCAs: the evidence on strength and balance for older adults, safe delivery, and the records funders expect.",
    summary:
      "Strength and balance classes are one of the best-evidenced ways to keep older adults active and independent. This guide covers the evidence, the Australian guidelines for people aged 65 and over, a safe delivery checklist, and the records funders, families and GPs expect.",
    who: "Leisure centres, councils, YMCAs, retirement villages, aged care and allied health teams in Australia and New Zealand.",
    inside: [
      "The evidence: Cochrane falls results and ACC Live Stronger for Longer",
      "Australian physical activity guidelines for people aged 65 and over",
      "Before, during and after checklists for safe delivery",
      "Records that make a program fundable and reportable",
    ],
    faqs: [
      {
        q: "How much exercise do older Australians need?",
        a: "Australian guidelines recommend at least 30 minutes of moderate activity on most days for people aged 65 and over, including fitness, strength, flexibility and balance.",
      },
      {
        q: "What records should a seniors exercise program keep?",
        a: "At minimum: pre-exercise screening, baseline and follow-up assessments, attendance, and any incidents or new symptoms. The guide lists what funders, families and GPs usually ask for.",
      },
    ],
    related: [
      { label: "FitDesk for active ageing and rehab", to: "/active-ageing-rehab-software" },
      { label: "Councils and leisure centres", to: "/solutions/council" },
    ],
    pages: 4,
  },
  {
    slug: "gym-pre-exercise-screening-health-records-checklist",
    file: "/guides/GreeneDesk-gym-pre-exercise-screening-health-records-checklist.pdf",
    type: "Checklist",
    audience: "Gyms and fitness floors",
    title: "Pre-exercise screening and health records checklist",
    seoTitle: "Pre-Exercise Screening (APSS) Checklist for Gyms",
    description:
      "Free checklist for council and YMCA gyms: screening new members with the Adult Pre-exercise Screening System (APSS) and handling the health records it creates.",
    summary:
      "Most council and community gyms screen new members with the Adult Pre-exercise Screening System (APSS). This checklist covers running the screening well and handling the health information it creates: consent, storage, access and retention.",
    who: "Fitness managers, coordinators and trainers in council, YMCA and community leisure centres.",
    inside: [
      "The three stages of the APSS and what each means for your team",
      "A screening process checklist",
      "Collection, consent, storage, access and retention of health information",
      "Signs your screening process needs fixing",
    ],
    faqs: [
      {
        q: "What is the APSS?",
        a: "The Adult Pre-exercise Screening System (version 2, 2019) is a screening tool developed by Exercise & Sports Science Australia, Fitness Australia (now AUSactive), Sports Medicine Australia and Exercise is Medicine. Many council gyms use it as their standard form.",
      },
      {
        q: "Can we screen members digitally?",
        a: "Yes. Many centres move screening from paper to digital forms so answers are complete, flagged answers are followed up, and records are stored securely. FitDesk digitises your centre's own screening forms.",
      },
    ],
    related: [
      { label: "FitDesk", to: "/solutions/fitdesk" },
      { label: "FitDesk with PerfectGym", to: "/integrations/perfectgym" },
    ],
    pages: 4,
  },
  {
    slug: wwcConnect.slug,
    file: wwcConnect.file,
    type: "Checklist",
    audience: "Swim and children's programs",
    title: wwcConnect.title,
    seoTitle: wwcConnect.seoTitle,
    description: wwcConnect.cardDescription,
    summary: wwcConnect.summary,
    who: "Victorian swim schools and aquatic centres.",
    inside: ["Check, Connect, Maintain", "A recruitment checklist for swim schools", "Keeping a clear record"],
    faqs: wwcConnect.faqs,
    related: [
      { label: "Child safe checklist for aquatic and recreation programs", to: "/guides/child-safe-checklist-aquatic-recreation" },
      { label: "SwimDesk", to: "/solutions/swimdesk" },
      { label: "Swim School Programs", to: "/solutions/school-programs" },
    ],
    pages: 1,
  },
  {
    slug: "child-safe-checklist-aquatic-recreation",
    file: "/guides/GreeneDesk-child-safe-checklist-aquatic-recreation.pdf",
    type: "Checklist",
    audience: "Swim and children's programs",
    title: "Child safe checklist for aquatic and recreation programs",
    seoTitle: "Child Safe Checklist for Swim Schools and Pools (PDF)",
    description:
      "Free child safe self-check for swim schools, aquatic centres and recreation programs, mapped to the National Principles, Vic and NSW standards and NZ rules.",
    summary:
      "The Royal Commission named the aquatic industry as one where child abuse had occurred, and child safe rules for pools and recreation programs have tightened since. This self-check maps day-to-day practice to the National Principles for Child Safe Organisations and the rules in Victoria, New South Wales and New Zealand.",
    who: "Aquatic and recreation managers, swim school coordinators, YMCA and council program leads in Australia and New Zealand.",
    inside: [
      "Which rules apply: National Principles, Victoria, NSW and New Zealand",
      "The 10 National Principles for Child Safe Organisations",
      "Self-check: leadership, people, pool deck and change rooms, online and photos, complaints",
      "Signs you need to act",
    ],
    faqs: [
      {
        q: "Do swim schools have to follow the Child Safe Standards?",
        a: "In Victoria and New South Wales, organisations providing services to children, including sport and recreation, must meet the state Child Safe Standards. The National Principles for Child Safe Organisations are the national benchmark.",
      },
      {
        q: "Do swim instructors need a Working with Children Check?",
        a: "Yes, people in paid or volunteer child-related work need a Working with Children Check in their state, and in NSW organisations must verify it. In New Zealand, government-funded organisations and their contractors must safety-check children's workers under the Children's Act 2014.",
        appendix: {
          text: "In Victoria, a new online service, WWC Connect, starts on 19 October 2026.",
          linkText: "See our WWC Connect checklist for Victorian swim schools.",
          to: "/guides/wwc-connect-victorian-swim-schools",
        },
      },
      {
        q: "Is this legal advice?",
        a: "No. It is general information to help you review your practices. Check the current rules with your state regulator or the NZ Government.",
      },
    ],
    related: [
      { label: "SwimDesk", to: "/solutions/swimdesk" },
      { label: "School swimming programs", to: "/solutions/school-programs" },
      { label: "WWC Connect checklist for Victorian swim schools", to: "/guides/wwc-connect-victorian-swim-schools" },
    ],
    pages: 4,
  },
];

export const getGuide = (slug?: string) => guides.find((g) => g.slug === slug);
