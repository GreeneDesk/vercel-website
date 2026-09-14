import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { PathwaysSection } from "@/components/sections/PathwaysSection";
import { FitDeskGapSection } from "@/components/sections/FitDeskGapSection";
import { FitDeskCapabilities } from "@/components/sections/FitDeskCapabilities";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { FitDeskScreenshots } from "@/components/sections/FitDeskScreenshots";
import { DataResidencyTeaser } from "@/components/sections/DataResidencyTeaser";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { MoreFromGreeneDesk } from "@/components/sections/MoreFromGreeneDesk";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="FitDesk – Fitness Operations Software for AU & NZ Leisure Centres"
        description="Complete PerfectGym or replace Mywellness with FitDesk. Australian-hosted assessments, workout programming, trainer scheduling and member engagement."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GreeneDesk",
            "url": "https://greenedesk.com.au",
            "logo": "https://greenedesk.com.au/og-image.png",
            "description": "GreeneDesk is an Australian software company for leisure centres, aquatic and recreation facilities and sports programs across Australia and New Zealand. Built and hosted in Australia.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "areaServed": [
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "New Zealand" }
            ],
            "telephone": "+611300181665",
            "email": "anita.w@greenedesk.com",
            "sameAs": []
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FitDesk by GreeneDesk",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "description": "FitDesk gives leisure centres specialist tools for digital assessments, workout programming, trainer scheduling, progress tracking and member engagement. Use it alongside PerfectGym or as an alternative to Mywellness software.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "AUD"
            },
            "provider": { "@type": "Organization", "name": "GreeneDesk" },
            "areaServed": [
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "New Zealand" }
            ],
            "featureList": "Digital assessments, Workout programming, Exercise video library, Trainer scheduling, Member goals and progress tracking, Member engagement, Australian data residency"
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GreeneDesk",
            "description": "Australian software company behind FitDesk, SwimDesk and SportDesk. Serving Australia and New Zealand.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "areaServed": [
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "New Zealand" }
            ],
            "telephone": "+611300181665",
            "email": "anita.w@greenedesk.com",
            "url": "https://greenedesk.com.au",
            "image": "https://greenedesk.com.au/og-image.png"
          }
        ]}
      />
      <HeroSection />
      <TrustedBySection />
      <PathwaysSection />
      <FitDeskGapSection />
      <FitDeskCapabilities />
      <DeploymentSection />
      <FitDeskScreenshots />
      <DataResidencyTeaser />
      <TrustBanner />
      <FinalCTASection />
      <MoreFromGreeneDesk />
    </Layout>
  );
};

export default Home;
