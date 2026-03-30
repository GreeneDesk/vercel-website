import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { DataResidencyTeaser } from "@/components/sections/DataResidencyTeaser";
import { WhoItsForSection } from "@/components/sections/WhoItsForSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { DifferentiatorBlock } from "@/components/shared/DifferentiatorBlock";

const Home = () => {
  return (
    <Layout>
      <SEO
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GreeneDesk",
            "url": "https://www.greenedesk.com",
            "logo": "https://www.greenedesk.com/og-image.png",
            "description": "GreeneDesk is a multi-sport operations platform that works alongside your current management software. Built and hosted in Australia.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "36 Catherine Avenue",
              "addressLocality": "Mount Waverley",
              "addressRegion": "VIC",
              "postalCode": "3149",
              "addressCountry": "AU"
            },
            "telephone": "+611300181665",
            "email": "anita.w@greenedesk.com",
            "sameAs": []
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "GreeneDesk",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Multi-sport operations platform for gyms, swim schools, and sports centres. Scheduling, assessments, engagement, performance tracking, and member management.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "AUD"
            },
            "provider": {
              "@type": "Organization",
              "name": "GreeneDesk"
            },
            "featureList": "Scheduling, Assessments, Engagement, Performance Tracking, Member Management, Parent Portal, Data Residency"
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GreeneDesk",
            "description": "Multi-sport operations platform for gyms, swim schools, and sports centres. Built and hosted in Australia.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "36 Catherine Avenue",
              "addressLocality": "Mount Waverley",
              "addressRegion": "VIC",
              "postalCode": "3149",
              "addressCountry": "AU"
            },
            "telephone": "+611300181665",
            "email": "anita.w@greenedesk.com",
            "url": "https://www.greenedesk.com",
            "image": "https://www.greenedesk.com/og-image.png"
          }
        ]}
      />
      <HeroSection />
      <TrustedBySection />
      <ProblemsSection />
      <DeploymentSection />
      <ProductsSection />
      <ValueSection />
      <DataResidencyTeaser />
      <WhoItsForSection />
      <DifferentiatorBlock />
      <FinalCTASection />
    </Layout>
  );
};

export default Home;
