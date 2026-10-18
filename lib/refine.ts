import type { Locale } from "./i18n";

// Refine édite Radar Ecom et fournit les mesures IA du baromètre.
export const REFINE = { name: "Refine", domain: "getrefine.ai", url: "https://getrefine.ai" };

export const refineLink = (placement: string, locale: Locale) =>
  `${REFINE.url}/?utm_source=ecomradar&utm_medium=referral&utm_campaign=${placement}&utm_content=${locale}`;

export type RefineCtx = "home" | "article" | "baro" | "geo";

export const REFINE_TXT: Record<Locale, Record<RefineCtx, { k: string; h: string; p: string; cta: string }>> & Record<Locale, { by: string; disclose: string }> = {
  fr: {
    home: { k: "Les coulisses", h: "Ce site est un labo GEO, mesuré par Refine.", p: "Radar Ecom est édité par Refine, l'outil qui suit ce que ChatGPT, Perplexity, Gemini et Google AI Overviews disent d'une marque. Chaque baromètre et chaque article sont pilotés avec. Si ta boutique veut être la réponse, c'est le même outil.", cta: "Tester ma visibilité IA" },
    article: { k: "Et ta boutique ?", h: "Les IA recommandent-elles ta marque ?", p: "Cet article vise à être cité par les assistants IA. Refine, l'outil qui édite Radar Ecom, mesure si ChatGPT, Perplexity, Gemini et Google recommandent ta boutique et tes produits, et te dit quoi publier pour y apparaître.", cta: "Voir ce que les IA disent de moi" },
    baro: { k: "Méthode", h: "Le baromètre est mesuré avec Refine.", p: "Les mêmes questions sont posées chaque mois aux quatre moteurs, plusieurs fois, et les citations sont comptées. C'est exactement ce que fait Refine pour les marques qui veulent suivre leur part de voix dans les réponses IA.", cta: "Suivre ma marque" },
    geo: { k: "Transparence", h: "Refine édite Radar Ecom.", p: "On compare ici des outils GEO alors que l'un d'eux est le nôtre. Les critères et les prix sont publiés pour que tu puisses juger, et chaque concurrent a sa place s'il fait mieux sur ton besoin.", cta: "Découvrir Refine" },
    by: "Mesures IA : Refine",
    disclose: "Radar Ecom est édité par Refine (outil GEO).",
  },
  en: {
    home: { k: "Behind the scenes", h: "This site is a GEO lab, measured with Refine.", p: "Radar Ecom is published by Refine, the tool that tracks what ChatGPT, Perplexity, Gemini and Google AI Overviews say about a brand. Every barometer and every article is run with it. If your store wants to be the answer, it's the same tool.", cta: "Check my AI visibility" },
    article: { k: "What about your store?", h: "Do AI assistants recommend your brand?", p: "This article is built to be cited by AI assistants. Refine, the tool behind Radar Ecom, measures whether ChatGPT, Perplexity, Gemini and Google recommend your store and products, and tells you what to publish to show up.", cta: "See what AI says about me" },
    baro: { k: "Method", h: "The barometer is measured with Refine.", p: "The same questions are asked to the four engines every month, several times over, and citations are counted. That's exactly what Refine does for brands that want to track their share of voice in AI answers.", cta: "Track my brand" },
    geo: { k: "Disclosure", h: "Refine publishes Radar Ecom.", p: "We compare GEO tools here while one of them is ours. Criteria and prices are published so you can judge for yourself, and every competitor gets its due where it fits your needs better.", cta: "Discover Refine" },
    by: "AI measurements: Refine",
    disclose: "Radar Ecom is published by Refine (a GEO tool).",
  },
} as never;
