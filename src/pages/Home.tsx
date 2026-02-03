import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { DataResidencyTeaser } from "@/components/sections/DataResidencyTeaser";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemsSection />
      <DeploymentSection />
      <ValueSection />
      <DataResidencyTeaser />
      <FinalCTASection />
    </Layout>
  );
};

export default Home;