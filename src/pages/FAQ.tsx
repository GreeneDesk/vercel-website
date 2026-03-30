import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="FAQ – Frequently Asked Questions about GreeneDesk"
        description="Find answers about SwimDesk, FitDesk, pricing, data residency, onboarding, support and integrations. All your GreeneDesk questions answered."
        canonical="/faq"
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <FAQSection />
    </Layout>
  );
};

export default FAQ;
