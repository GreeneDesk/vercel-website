import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";
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
        title="FitDesk – Gym & Fitness Centre Software"
        description="FitDesk powers what happens beyond the front desk. Scheduling, assessments, engagement, and exercise programming for leisure centres and wellness facilities."
        canonical="/solutions/fitdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "FitDesk",
          "description": "Operations platform for leisure centres, wellness facilities, and rehab programs. Scheduling, assessments, engagement, and exercise programming.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Gym Management Software"
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/fitdesk" }, { label: "FitDesk" }]} />
      <FitDeskHero />
      <FitDeskProblems />
      <FitDeskCommunity />
      <FitDeskModules />
      <FitDeskAudience />
      <FitDeskBenefits />
      <FitDeskDataResidency />
      <FitDeskOverview />
      <RelatedPages
        heading="Explore Related Solutions"
        pages={[
          { title: "SwimDesk", description: "Complete swim school management for learn-to-swim programs", href: "/solutions/swimdesk" },
          { title: "SportDesk", description: "Structured sports and martial arts program management", href: "/solutions/sportdesk" },
          { title: "Payments & Billing", description: "Integrated payment processing for centres", href: "/platform/payments" },
        ]}
      />
      <FitDeskCTA />
    </Layout>
  );
};

export default FitDesk;
