import { pageMeta } from "@/lib/meta";
import type { Locale } from "@/lib/i18n";

const TXT = {
  fr: {
    title: "Méthodologie",
    desc: "Comment Radar Ecom teste les outils, vérifie les prix et mesure ce que recommandent les IA.",
    h1: "Comment on note les outils",
    lead: "Radar Ecom est édité par Refine et indépendant des outils e-commerce comparés. Aucun éditeur ne paie pour être classé, et chaque chiffre affiché a une date de vérification.",
    s: [
      ["Ce qu'on vérifie", "Pour chaque outil, on lit le site de l'éditeur, sa page tarifs, sa documentation et sa fiche sur l'App Store Shopify. Chaque fait affiché a un lien vers sa source. Quand on n'a pas pu vérifier un point, on ne l'écrit pas. On ne publie pas de note sur 10 : on compare sur des critères factuels (prix au volume indiqué, intégration Shopify, support en français, fonctionnalités clés, limites)."],
      ["Les prix", "Les prix sont relevés sur le site de l'éditeur. La date de vérification est affichée sur chaque page, et chaque page est revérifiée au moins tous les 90 jours."],
      ["Le baromètre IA", "Chaque mois, on pose une série de questions à ChatGPT, Perplexity, Gemini et Google AI Overviews, par catégorie d'outil. La part de voix d'un outil est la part des réponses qui le citent. Les mesures sont faites avec Refine, l'outil GEO qui édite le site."],
      ["Qui édite Radar Ecom", "Radar Ecom est édité par Refine (getrefine.ai), un outil de GEO (Generative Engine Optimization) qui mesure ce que les assistants IA recommandent. Les éditeurs e-commerce comparés ici ne nous paient pas. Dans la catégorie Visibilité IA, Refine est lui-même comparé : on l'indique en tête de chaque article concerné."],
    ],
    listedH: "Votre outil est listé ?",
    listed: "Une information est fausse ou datée ? Écrivez-nous avec la source, on corrige sous 7 jours. Un classement ne s'achète pas.",
  },
  en: {
    title: "Methodology",
    desc: "How Radar Ecom tests tools, checks prices and measures what AI assistants recommend.",
    h1: "How we rate tools",
    lead: "Radar Ecom is published by Refine and independent from the e-commerce tools it compares. No vendor pays to be ranked, and every figure on the site shows the date it was checked.",
    s: [
      ["What we check", "For each tool we read the vendor's website, pricing page, documentation and Shopify App Store listing. Every fact shown links to its source. When we can't verify something, we don't write it. We don't publish scores out of 10: we compare on factual criteria (price at the stated volume, Shopify integration, French-language support, key features, limits)."],
      ["Prices", "Prices are taken from the vendor's website. The check date is shown on every page, and every page is re-checked at least every 90 days."],
      ["The AI barometer", "Every month, we ask ChatGPT, Perplexity, Gemini and Google AI Overviews a set of questions per tool category. A tool's share of voice is the share of answers that mention it. Measurements are run with Refine, the GEO tool that publishes the site."],
      ["Who publishes Radar Ecom", "Radar Ecom is published by Refine (getrefine.ai), a GEO (Generative Engine Optimization) tool that measures what AI assistants recommend. The e-commerce vendors compared here do not pay us. In the AI visibility category, Refine itself is compared: we say so at the top of every such article."],
    ],
    listedH: "Is your tool listed?",
    listed: "Is something wrong or out of date? Write to us with the source and we fix it within 7 days. Rankings are not for sale.",
  },
};

export function methodMeta(locale: Locale) {
  return pageMeta(locale, { fr: "/methodologie/", en: "/en/methodology/" }, { title: TXT[locale].title, description: TXT[locale].desc });
}

export default function Method({ locale }: { locale: Locale }) {
  const x = TXT[locale];
  return (
    <main>
      <div className="wrap">
        <section className="page-head">
          <span className="chip">{x.title}</span>
          <h1>{x.h1}</h1>
          <p>{x.lead}</p>
        </section>
        <div className="method">
          {x.s.map(([h, p]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
          <h2 id="outil-liste">{x.listedH}</h2>
          <p>{x.listed}</p>
        </div>
      </div>
    </main>
  );
}
