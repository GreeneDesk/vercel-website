import { Link } from "react-router-dom";
import { wwcConnect as g } from "@/content/wwc-connect";
import { usePageMeta, SITE_URL } from "@/lib/seo";
import { Layout } from "@/components/layout/Layout";
import { GuideSignup } from "@/components/sections/GuideSignup";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const roles = [
  ["Swim teachers and junior squad coaches", "Treat as child-related work, subject to individual exemptions."],
  ["Deck supervisors and program coordinators", "Assess child contact within supervision, assessments and lesson support."],
  ["Lifeguards and duty managers", "Assess the actual duties. Do not assume all aquatic roles are the same."],
  ["Reception, admin and maintenance", "Assess actual duties, including any direct communication with children. Being on the premises is not the test."],
];
const recruitment = [
  "Assess the role by its duties, not its title.",
  "Paid work needs an employee clearance, not a volunteer clearance, unless an exemption applies.",
  "Verify before work starts or before any verbal or written arrangement is made, whichever is earlier.",
  `Connect in WWC Connect within ${g.requirements.workerDays} days (${g.requirements.volunteerDays} for volunteers).`,
  "For returning casuals, re-check. An old card image or last season's roster is not proof.",
  "Record the date verified, who verified, what status they saw and the engagement date.",
  "Update WWC Connect when someone leaves or their details change.",
  "Allow time for child safety training for new applicants and renewals.",
];
const sources = [
  ["Victorian Government, WWC Connect", "https://www.vic.gov.au/working-children-connect"],
  ["Changes to the Working with Children Check", "https://www.vic.gov.au/changes-working-children-check-0"],
  ["Who requires a WWC clearance", "https://www.vic.gov.au/who-requires-WWC-clearance"],
  ["Mandatory child safety training", "https://www.vic.gov.au/mandatory-child-safety-training-working-children-clearance-holders"],
  ["ASSA guide for swim schools", "https://australianswimschools.org.au/victorian-working-with-children-changes/"],
];

export default function WwcConnectGuide() {
  const path = `/guides/${g.slug}`;
  usePageMeta({
    title: `${g.seoTitle} | GreeneDesk`,
    description: g.description,
    path,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Free guides", item: `${SITE_URL}/guides` },
            { "@type": "ListItem", position: 2, name: "Checklist", item: `${SITE_URL}${path}` },
          ],
        },
        { "@type": "FAQPage", mainEntity: g.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ],
    },
  });

  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/guides" className="hover:underline">Free guides</Link> / Checklist
        </nav>
        <section className="mt-4 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="text-sm font-medium text-primary">Free checklist · PDF · 1 page</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{g.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{g.summary}</p>
          </div>
          <aside className="h-fit rounded-xl border bg-muted/40 p-6">
            <p className="font-semibold text-foreground">Download the checklist. Free, no sign-up.</p>
            <Button asChild className="mt-4 w-full rounded-md shadow-none">
              <a href={g.file} download>Download PDF</a>
            </Button>
          </aside>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">What changes on 19 October 2026</h2>
          <p className="mt-4 text-muted-foreground">Three steps: Check, Connect, Maintain.</p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li><strong className="text-foreground">Check:</strong> verify a person's clearance on the official WWC status checker before they start work.</li>
            <li><strong className="text-foreground">Connect:</strong> connect them to your organisation in WWC Connect within {g.requirements.workerDays} days of engagement for workers, or {g.requirements.volunteerDays} days for volunteers, subject to exemptions.</li>
            <li><strong className="text-foreground">Maintain:</strong> update records when someone stops child-related work or their details change, within the same timeframes.</li>
          </ul>
          <p className="mt-4 text-muted-foreground">Also: records must be kept for at least {g.requirements.retentionYears} years after the engagement ends. New applicants, renewing clearance holders and volunteers moving to an employee clearance must complete child safety training (about {g.requirements.trainingMinutes} minutes).</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who counts as doing child-related work in a swim school</h2>
          <p className="mt-4 text-muted-foreground">The legal test looks at the service and whether duties usually involve direct contact with children. Duties matter more than job titles.</p>
          <table className="mt-4 w-full table-fixed border-collapse text-left text-sm">
            <thead><tr className="border-b bg-muted/40"><th scope="col" className="w-2/5 p-3 align-top">Role</th><th scope="col" className="p-3 align-top">How to approach it</th></tr></thead>
            <tbody>{roles.map(([role, approach]) => <tr key={role} className="border-b"><th scope="row" className="break-words p-3 align-top font-medium">{role}</th><td className="break-words p-3 align-top text-muted-foreground">{approach}</td></tr>)}</tbody>
          </table>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">A recruitment checklist for swim schools</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-muted-foreground">{recruitment.map(item => <li key={item} className="pl-1">{item}</li>)}</ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Keeping a clear record</h2>
          <p className="mt-4 text-muted-foreground">Checking is the organisation's responsibility. A dated record of who checked, what they saw and when is how you show it was done. Keep it in one place, with access limited to the people who need it, and keep personal details out of shared lesson-planning sheets. A spreadsheet, an HR system or your swim school software can all do the job.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] table-fixed border-collapse text-left text-sm">
              <caption className="mb-2 text-left font-medium text-foreground">Minimum record per person</caption>
              <thead><tr className="border-y bg-muted/40">{["Name", "Clearance type", "Date verified", "Verified by", "Date engaged", "Date connected", "Date ended"].map(label => <th scope="col" key={label} className="p-3 align-top">{label}</th>)}</tr></thead>
              <tbody><tr>{Array.from({ length: 7 }, (_, i) => <td key={i} className="h-12 border-b" />)}</tr></tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            {g.faqs.map(f => <AccordionItem key={f.q} value={f.q}><AccordionTrigger className="text-left font-medium">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Official sources</h2>
          <ul className="mt-4 space-y-3">{sources.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{label}</a></li>)}</ul>
          <p className="mt-4 text-sm text-muted-foreground">Victorian Government Contact Centre 1300 652 879, Mon to Fri 9am to 4pm.</p>
        </section>

        <p className="mt-8 text-xs text-muted-foreground">General information current at 18 October 2026, based on published Victorian Government and ASSA guidance. Not legal advice. Check current requirements with the Social Services Regulator.</p>
        <GuideSignup />

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-foreground">Related links</h2>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link to="/guides/child-safe-checklist-aquatic-recreation" className="font-medium text-primary hover:underline">Child safe checklist for aquatic and recreation programs</Link>
            <Link to="/solutions/swimdesk" className="font-medium text-primary hover:underline">SwimDesk</Link>
            <Link to="/solutions/school-programs" className="font-medium text-primary hover:underline">Swim School Programs</Link>
            <Link to="/guides" className="font-medium text-primary hover:underline">All free guides</Link>
          </div>
        </section>
      </article>
      <section className="bg-primary px-6 py-10 text-center text-primary-foreground sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Running swim lessons, school programs or squads? See how SwimDesk keeps classes, teachers and progress in one place.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="hero-outline" asChild><Link to="/solutions/swimdesk">Explore SwimDesk</Link></Button>
            <Button variant="cta" asChild><Link to="/demo">Book a Demo</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}