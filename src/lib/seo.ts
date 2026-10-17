// Shared page SEO hook. Sets title, description, canonical, Open Graph, robots and JSON-LD.
// Usage: usePageMeta({ title, description, path: "/guides", jsonLd: {...} })
// No extra packages needed.

import { useEffect } from "react";

const SITE = "https://greenedesk.com.au";

type PageMeta = {
  title: string;
  description: string;
  path: string; // e.g. "/guides" (no domain)
  jsonLd?: object;
  noindex?: boolean;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description, path, jsonLd, noindex }: PageMeta) {
  const ldText = jsonLd ? JSON.stringify(jsonLd) : "";
  useEffect(() => {
    const url = SITE + path;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");

    let canon = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = url;

    let ld: HTMLScriptElement | null = null;
    if (ldText) {
      document.getElementById("page-ld")?.remove();
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "page-ld";
      ld.text = ldText;
      document.head.appendChild(ld);
    }
    return () => {
      ld?.remove();
      if (noindex) setMeta("name", "robots", "index, follow");
    };
  }, [title, description, path, ldText, noindex]);
}

export const SITE_URL = SITE;
