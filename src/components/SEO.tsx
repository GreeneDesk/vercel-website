import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

const defaults = {
  title: "GreeneDesk – Software for Australian Gyms, Swim Schools & Recreation Centres",
  description: "GreeneDesk is unified software for gyms, swim schools, and sports centres. Reduce admin, improve retention, and get clearer visibility. Built in Australia, data hosted in Australia.",
};

export function SEO({ title, description, canonical, type = "website" }: SEOProps) {
  const fullTitle = title ? `${title} | GreeneDesk` : defaults.title;
  const desc = description || defaults.description;
  const url = canonical ? `https://www.greenedesk.com${canonical}` : "https://www.greenedesk.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
