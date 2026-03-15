import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        description="Complete gym management software for Australian fitness centres. Member management, class scheduling, payments, and retention tools. Data hosted in Australia."
        canonical="/solutions/fitdesk"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "FitDesk",
          "description": "Complete gym and fitness centre management software. Member management, class scheduling, payments, communication, and retention tools.",
          "provider": { "@type": "Organization", "name": "GreeneDesk" },
          "areaServed": "AU",
          "serviceType": "Gym Management Software"
        }}
      />
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions/fitdesk" }, { label: "FitDesk" }]} />
      <FitDeskHero />
      <FitDeskAudience />
      <FitDeskProblems />
      <FitDeskOverview />
      <FitDeskModules />
      <FitDeskCommunity />
      <FitDeskDataResidency />
      <FitDeskBenefits />
      <FitDeskCTA />
    </Layout>
  );
};

export default FitDesk;
