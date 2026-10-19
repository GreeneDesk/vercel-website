import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoItsForRow } from "@/components/sections/WhoItsForRow";
import { GuidesStrip } from "@/components/sections/GuidesStrip";
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
import { WwcAnnouncement } from "@/components/sections/WwcAnnouncement";

const Home = () => {
  return (
    <>
    <WwcAnnouncement />
    <Layout>
      <SEO
        title="Swim School & Gym Software for Australia & NZ | GreeneDesk"
        description="Swim school, gym and active ageing software for Australian and NZ leisure centres and councils. Built in Australia, hosted in Sydney."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GreeneDesk",
            "url": "https://greenedesk.com.au",
            "logo": "https://greenedesk.com.au/og-image.png",
            "description": "GreeneDesk is an Australian software company for leisure centres, aquatic and recreation facilities and sports programs across Australia and New Zealand. Australian customer data stays in Australia.",
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
      <WhoItsForRow />
      <TrustedBySection />
      <PathwaysSection />
      <FitDeskGapSection />
      <FitDeskCapabilities />
      <DeploymentSection />
      <FitDeskScreenshots />
      <DataResidencyTeaser />
      <TrustBanner />
      <GuidesStrip />
      <FinalCTASection />
      <MoreFromGreeneDesk />
    </Layout>
    </>
  );
};

export default Home;
