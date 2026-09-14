import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
import { FitDeskPathwayCards } from "@/components/fitdesk/FitDeskPathwayCards";
import { FitDeskHero } from "@/components/fitdesk/FitDeskHero";
import { FitDeskAudience } from "@/components/fitdesk/FitDeskAudience";
import { FitDeskProblems } from "@/components/fitdesk/FitDeskProblems";
import { FitDeskOverview } from "@/components/fitdesk/FitDeskOverview";
import { FitDeskModules } from "@/components/fitdesk/FitDeskModules";
import { FitDeskCommunity } from "@/components/fitdesk/FitDeskCommunity";
import { FitDeskDataResidency } from "@/components/fitdesk/FitDeskDataResidency";
import { FitDeskBenefits } from "@/components/fitdesk/FitDeskBenefits";
import { FitDeskCTA } from "@/components/fitdesk/FitDeskCTA";

const FitDesk = () => {
  return (
    <Layout>
      <SEO
        title="FitDesk – Fitness Operations & Member Engagement Software"
        description="FitDesk gives leisure centres assessments, workout programming, trainer scheduling, progress tracking and member engagement. Use it alongside PerfectGym or as a Mywellness alternative."
        canonical="/solutions/fitdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "FitDesk by GreeneDesk",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, iOS, Android",
          "description": "Fitness operations and member engagement software for leisure centres, aquatic and recreation facilities, active-ageing programs and exercise-based rehabilitation services.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": [
            { "@type": "Country", "name": "Australia" },
            { "@type": "Country", "name": "New Zealand" }
          ],
          "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AUD" }
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/fitdesk" }, { label: "FitDesk" }]} />
      <FitDeskHero />
      <FitDeskPathwayCards />
      <FitDeskProblems />
      <FitDeskCommunity />
      <FitDeskModules />
      <FitDeskAudience />
      <FitDeskBenefits />
      <FitDeskDataResidency />
      <FitDeskOverview />

      <section className="section-padding bg-surface-section">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            No existing management platform?
          </h2>
          <p className="text-muted-foreground">
            FitDesk can also operate independently where a facility does not have an existing
            management platform, covering scheduling, member records, programming and engagement in
            one place.
          </p>
        </div>
      </section>

      <DifferentiatorBlock />

      <RelatedPages
        heading="Explore FitDesk in detail"
        pages={[
          { title: "FitDesk with PerfectGym", description: "Independent customer-authorised API integration", href: "/integrations/perfectgym" },
          { title: "Mywellness alternative", description: "Replace Mywellness while keeping PerfectGym", href: "/technogym-mywellness-alternative" },
          { title: "Workout programming", description: "4,000+ exercises with instructional videos", href: "/platform/workout-programming" },
          { title: "Trainer tools & assessments", description: "Digital consultations and member history", href: "/platform/teacher-trainer" },
          { title: "Analytics & retention", description: "Milestones, reassessments and follow-ups", href: "/platform/analytics" },
          { title: "Australian data residency", description: "Customer data hosted on AWS Sydney", href: "/data-residency" },
        ]}
      />
      <FitDeskCTA />
    </Layout>
  );
};

export default FitDesk;
