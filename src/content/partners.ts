// Content for /partners (replaces the current page).

export const partners = {
  seo: {
    title: "Partner with GreeneDesk | Integration, Reseller & Distribution Partners",
    description:
      "Integrate with FitDesk and SwimDesk, refer or resell GreeneDesk, or distribute in your region. Hosted in your region or on your own servers. Fitness-floor, active ageing and swim school software used by 50+ centres.",
  },
  hero: {
    eyebrow: "Partners",
    h1: "Partner with GreeneDesk",
    sub: "FitDesk and SwimDesk add the fitness-floor, active ageing and swim school tools that management systems and allied health platforms don't. We integrate, we don't replace, and we can host in your region or on your servers, which makes us an easy partner for platforms, resellers and distributors worldwide.",
    primaryCta: { label: "Become a partner", href: "#partner-form" },
  },
  types: {
    heading: "Ways to partner",
    items: [
      {
        title: "Technology integration partners",
        who: "Gym and leisure management systems, booking and access platforms, allied health practice management systems, wearables and connected equipment.",
        get: [
          "An integration built with our engineering team around the data you need to exchange",
          "Listing on our integrations page",
          "Joint go-to-market with our customers in Australia and New Zealand",
        ],
        example: "Live today: PerfectGym and Envibe.",
      },
      {
        title: "Referral and reseller partners",
        who: "Leisure and fitness consultants, IT providers, equipment distributors and allied health networks.",
        get: [
          "Commercial terms agreed with each partner",
          "Demo accounts, sales materials and partner training",
          "Support from our team on every deal",
        ],
      },
      {
        title: "Regional distribution partners",
        who: "Software distributors and leisure technology companies outside Australia and New Zealand.",
        get: [
          "Hosting in your region, or on your own servers",
          "A fully configurable platform you can set up for local programs and curricula",
          "Onboarding playbooks from 50+ live centres",
        ],
      },
      {
        title: "Health and community program partners",
        who: "Councils, regional sports trusts, allied health providers, aged care and Support at Home providers running seniors, falls-prevention and rehab programs.",
        get: [
          "FitDesk configured to digitise your screening forms and assessments",
          "Customised progress reports emailed to funders, referrers and families",
          "Program templates you can share across sites",
        ],
      },
    ],
  },
  fit: {
    heading: "What partners ask, and our answer",
    rows: [
      { q: "Is it complementary to our platform?", a: "Yes. FitDesk and SwimDesk run alongside management systems; memberships, billing and access stay with you." },
      { q: "Do you have live integrations?", a: "Yes. PerfectGym and Envibe today, with wearable integrations in development." },
      { q: "Do you have a public API?", a: "Not yet. We build each integration directly with the partner, so it covers exactly the data both sides need." },
      { q: "Who uses it?", a: "50+ centres across Australia and New Zealand, including councils, aquatic centres and a university, with 500,000+ members." },
      { q: "Where is data hosted?", a: "Australian and New Zealand customers are hosted in Sydney. For other markets we can host in your region or on your own servers." },
      { q: "Can it be configured for our market?", a: "Yes. Forms, assessments, programs, curricula and reports are fully configurable." },
      { q: "What support do partners get?", a: "An Australian-based team, Monday to Friday 7am–7pm AEST, working directly with your team." },
    ],
  },
  form: {
    heading: "Become a partner",
    sub: "Tell us about your business and we'll reply within two business days.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "website", label: "Website", type: "url", required: false },
      {
        name: "partnerType",
        label: "Partner type",
        type: "select",
        required: true,
        options: ["Technology integration", "Referral or reseller", "Regional distribution", "Health or community program"],
      },
      { name: "region", label: "Country or region", type: "text", required: true },
      { name: "platform", label: "Your platform or product (if any)", type: "text", required: false },
      { name: "venues", label: "Number of venues or customers you serve", type: "text", required: false },
      { name: "message", label: "What would you like to do together?", type: "textarea", required: false },
    ],
    submit: "Send partner enquiry",
  },
};
