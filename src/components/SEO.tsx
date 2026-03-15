import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  faq?: FAQItem[];
}

const defaults = {
  title: "GreeneDesk – Software for Australian Gyms, Swim Schools & Recreation Centres",
  description: "GreeneDesk is unified software for gyms, swim schools, and sports centres. Reduce admin, improve retention, and get clearer visibility. Built and hosted in Australia.",
  image: "https://lovable.dev/opengraph-image-p98pqg.png",
};

export function SEO({ title, description, canonical, type = "website", image, jsonLd, faq }: SEOProps) {
  const fullTitle = title ? `${title} | GreeneDesk` : defaults.title;
  const desc = description || defaults.description;
  const url = canonical ? `https://www.greenedesk.com${canonical}` : "https://www.greenedesk.com";
  const ogImage = image || defaults.image;

  const schemas: Record<string, unknown>[] = [];

  // Add custom JSON-LD
  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      schemas.push(...jsonLd);
    } else {
      schemas.push(jsonLd);
    }
  }

  // Add FAQ schema
  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content="GreeneDesk" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
