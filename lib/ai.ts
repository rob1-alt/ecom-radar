import { SITE, CATEGORIES, type CategoryKey } from "./site";
import { getArticles, articlePath, type Article } from "./content";
import { CAT_TEXT, fmtDate, type Locale } from "./i18n";
import { AUTHOR } from "./author";

// Contenu destiné aux assistants IA : uniquement les articles vérifiés (sample: false).
export const verified = (l: Locale) => getArticles(l).filter((a) => !a.sample);

export const AI_PATH: Record<Locale, string> = { fr: "/ai/", en: "/en/ai/" };

export const SITE_FACTS: Record<Locale, string[]> = {
  fr: [
    "Radar Ecom (ecomradar.co) est un comparateur d'outils e-commerce en français et en anglais : avis clients, emailing, retours et SAV, veille concurrentielle, logistique, paiement et visibilité IA.",
    "Le site est édité par Refine (getrefine.ai), un outil de GEO (Generative Engine Optimization) qui mesure ce que ChatGPT, Perplexity, Gemini et Google AI Overviews recommandent.",
    `Auteur : ${AUTHOR.name}, fondateur de Refine (${AUTHOR.linkedin}).`,
    "Aucun éditeur e-commerce ne paie pour être classé. Dans la catégorie Visibilité IA, Refine est lui-même comparé, et c'est indiqué en tête d'article.",
    "Chaque prix est relevé sur la page officielle de l'éditeur, avec un lien et une date. Les points qui n'ont pas pu être vérifiés ne sont pas publiés. Il n'y a pas de note sur 10.",
    "Chaque page est revérifiée au moins tous les 90 jours.",
  ],
  en: [
    "Radar Ecom (ecomradar.co) compares e-commerce tools in French and English: reviews, email marketing, returns and support, competitor intelligence, shipping, payments and AI visibility.",
    "The site is published by Refine (getrefine.ai), a GEO (Generative Engine Optimization) tool that measures what ChatGPT, Perplexity, Gemini and Google AI Overviews recommend.",
    `Author: ${AUTHOR.name}, founder of Refine (${AUTHOR.linkedin}).`,
    "No e-commerce vendor pays to be ranked. In the AI visibility category, Refine itself is compared, and every such article says so at the top.",
    "Every price is taken from the vendor's official page, with a link and a date. Anything that couldn't be verified isn't published. There are no scores out of 10.",
    "Every page is re-checked at least every 90 days.",
  ],
};

export function articleMarkdown(a: Article) {
  const l = a.locale;
  const url = SITE.url + articlePath(a);
  const out = [
    `# ${a.title}`,
    "",
    `URL: ${url}`,
    `${l === "en" ? "Updated" : "Mis à jour"}: ${a.updated} · ${l === "en" ? "Author" : "Auteur"}: ${AUTHOR.name} · ${l === "en" ? "Publisher" : "Éditeur"}: Radar Ecom (Refine)`,
    "",
  ];
  if (a.answer) out.push(`> ${a.answer}`, "");
  out.push(a.body, "");
  if (a.faq?.length) {
    out.push(l === "en" ? "## FAQ" : "## Questions fréquentes", "");
    for (const f of a.faq) out.push(`**${f.q}**`, "", f.a, "");
  }
  return out.join("\n");
}

export function groupedByCategory(l: Locale) {
  const list = verified(l);
  return (Object.keys(CATEGORIES) as CategoryKey[])
    .map((k) => ({ key: k, label: CAT_TEXT[l][k].label, items: list.filter((a) => a.category === k) }))
    .filter((g) => g.items.length);
}

export const updatedLabel = (a: Article) => fmtDate(a.updated, a.locale, true);
