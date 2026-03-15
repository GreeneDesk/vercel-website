import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { DataResidencyTeaser } from "@/components/sections/DataResidencyTeaser";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

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
            "description": "GreeneDesk is unified software for gyms, swim schools, and sports centres. Reduce admin, improve retention, and get clearer visibility. Built and hosted in Australia.",
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
            "description": "Unified software platform for gyms, swim schools, and sports centres. Scheduling, payments, communication, assessments, analytics, and member management.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "AUD"
            },
            "provider": {
              "@type": "Organization",
              "name": "GreeneDesk"
            },
            "featureList": "Scheduling, Payments, Communication, Assessments, Analytics, Member Management, Parent Portal, Data Residency"
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GreeneDesk",
            "description": "Software for gyms, swim schools, and sports centres. Built and hosted in Australia.",
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
      <ProblemsSection />
      <DeploymentSection />
      <ValueSection />
      <DataResidencyTeaser />
      <FinalCTASection />
    </Layout>
  );
};

export default Home;
