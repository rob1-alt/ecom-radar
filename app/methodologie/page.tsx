import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthodologie",
  description: "Comment Radar Ecom teste les outils, vérifie les prix et mesure ce que recommandent les IA.",
  alternates: { canonical: "/methodologie/" },
};

export default function Methodologie() {
  return (
    <main>
      <div className="wrap">
        <section className="page-head">
          <span className="chip">Méthodologie</span>
          <h1>Comment on note les outils</h1>
          <p>Radar Ecom est un média indépendant. Aucun éditeur ne paie pour être classé, et chaque chiffre affiché a une date de vérification.</p>
        </section>
        <div className="method">
          <h2>Les tests</h2>
          <p>Chaque outil est installé sur une boutique Shopify de test. On note la mise en place, le rendu sur mobile, l'impact sur la vitesse de la page et le prix réel au volume indiqué dans l'article.</p>
          <h2>Les prix</h2>
          <p>Les prix sont relevés sur le site de l'éditeur. La date de vérification est affichée sur chaque page, et chaque page est revérifiée au moins tous les 90 jours.</p>
          <h2>Le baromètre IA</h2>
          <p>Chaque mois, on pose une série de questions en français à ChatGPT, Perplexity, Gemini et Google AI Overviews, par catégorie d'outil. La part de voix d'un outil est la part des réponses qui le citent.</p>
          <h2 id="outil-liste">Votre outil est listé ?</h2>
          <p>Une information est fausse ou datée ? Écrivez-nous avec la source, on corrige sous 7 jours. Un classement ne s'achète pas.</p>
        </div>
      </div>
    </main>
  );
}
