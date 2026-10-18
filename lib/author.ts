import { SITE } from "./site";
import type { Locale } from "./i18n";

// Auteur réel du site : uniquement des faits vérifiables (à enrichir par Robin).
export const AUTHOR = {
  name: "Robin Pautigny",
  linkedin: "https://www.linkedin.com/in/robin-pautigny/",
  path: { fr: "/auteur/robin-pautigny/", en: "/en/author/robin-pautigny/" } as Record<Locale, string>,
  role: { fr: "Fondateur de Refine", en: "Founder of Refine" } as Record<Locale, string>,
};

export const authorUrl = (l: Locale) => SITE.url + AUTHOR.path[l];

export const authorLd = (l: Locale) => ({
  "@type": "Person",
  "@id": `${SITE.url}/#robin-pautigny`,
  name: AUTHOR.name,
  url: authorUrl(l),
  jobTitle: AUTHOR.role[l],
  worksFor: { "@type": "Organization", name: "Refine", url: "https://getrefine.ai" },
  sameAs: [AUTHOR.linkedin],
  knowsAbout: ["Generative Engine Optimization", "GEO", "AI search visibility", "E-commerce software", "SEO"],
});
