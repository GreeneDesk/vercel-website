import { Layout } from "@/components/layout/Layout";
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
