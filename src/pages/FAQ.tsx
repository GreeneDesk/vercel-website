import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/sections/FAQSection";

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="FAQ – Common Questions"
        description="Find answers about SwimDesk, FitDesk, pricing, data residency, onboarding, support and integrations. All your GreeneDesk questions answered."
        canonical="/faq"
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="pt-10 md:pt-14">
        <div className="container-wide max-w-3xl">
          <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked <span className="text-gradient-primary">questions</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Pricing, data residency, onboarding, support and integrations — including how FitDesk
            works alongside PerfectGym.
          </p>
        </div>
      </section>
      <FAQSection />
    </Layout>
  );
};

export default FAQ;
