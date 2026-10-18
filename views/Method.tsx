import { pageMeta } from "@/lib/meta";
import type { Locale } from "@/lib/i18n";

const TXT = {
  fr: {
    title: "Méthodologie",
    desc: "Comment Radar Ecom teste les outils, vérifie les prix et mesure ce que recommandent les IA.",
    h1: "Comment on note les outils",
    lead: "Radar Ecom est un média indépendant. Aucun éditeur ne paie pour être classé, et chaque chiffre affiché a une date de vérification.",
    s: [
      ["Les tests", "Chaque outil est installé sur une boutique Shopify de test. On note la mise en place, le rendu sur mobile, l'impact sur la vitesse de la page et le prix réel au volume indiqué dans l'article."],
      ["Les prix", "Les prix sont relevés sur le site de l'éditeur. La date de vérification est affichée sur chaque page, et chaque page est revérifiée au moins tous les 90 jours."],
      ["Le baromètre IA", "Chaque mois, on pose une série de questions à ChatGPT, Perplexity, Gemini et Google AI Overviews, par catégorie d'outil. La part de voix d'un outil est la part des réponses qui le citent."],
    ],
    listedH: "Votre outil est listé ?",
    listed: "Une information est fausse ou datée ? Écrivez-nous avec la source, on corrige sous 7 jours. Un classement ne s'achète pas.",
  },
  en: {
    title: "Methodology",
    desc: "How Radar Ecom tests tools, checks prices and measures what AI assistants recommend.",
    h1: "How we rate tools",
    lead: "Radar Ecom is independent. No vendor pays to be ranked, and every figure on the site shows the date it was checked.",
    s: [
      ["Testing", "Each tool is installed on a test Shopify store. We rate setup, mobile rendering, impact on page speed and the real price at the volume stated in the article."],
      ["Prices", "Prices are taken from the vendor's website. The check date is shown on every page, and every page is re-checked at least every 90 days."],
      ["The AI barometer", "Every month, we ask ChatGPT, Perplexity, Gemini and Google AI Overviews a set of questions per tool category. A tool's share of voice is the share of answers that mention it."],
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
