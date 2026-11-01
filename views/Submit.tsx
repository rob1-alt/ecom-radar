import { pageMeta } from "@/lib/meta";
import type { Locale } from "@/lib/i18n";

const ISSUE = "https://github.com/rob1-alt/ecom-radar/issues/new?template=soumettre-un-outil.yml";

const TXT = {
  fr: {
    title: "Soumettre un outil e-commerce",
    desc: "Propose ton outil e-commerce pour l'annuaire et les comparatifs de Radar Ecom. Gratuit, relu à la main, aucun classement payé.",
    h1: "Soumettre ton outil",
    lead: "Tu édites ou tu utilises un outil e-commerce qui n'est pas dans l'annuaire ? Propose-le. On le liste s'il est vérifiable, puis on peut le faire entrer dans un comparatif.",
    cta: "Ouvrir le formulaire de soumission",
    note: "Le formulaire est une issue GitHub : il faut un compte GitHub gratuit, et ta soumission est publique.",
    s: [
      ["Ce qu'on attend", "Le nom de l'outil, son site officiel, un lien direct vers sa page tarifs publique, sa catégorie et deux ou trois phrases factuelles sur ce qu'il fait. Dis aussi quel est ton lien avec l'outil : si on publie une comparaison, on l'indique."],
      ["Ce qui se passe ensuite", "On relit chaque soumission à la main. Si les faits sont vérifiables sur des pages publiques, l'outil entre dans l'annuaire. Quand plusieurs outils d'une même catégorie sont listés, on peut écrire un comparatif ou un face-à-face avec des prix vérifiés et datés."],
      ["Ce que la soumission ne garantit pas", "Ni publication, ni délai, ni classement. Aucun paiement n'influence le contenu, et un éditeur ne relit pas l'article avant publication. Une information fausse ? Réponds dans l'issue avec la source, on corrige sous 7 jours."],
    ],
  },
  en: {
    title: "Submit an e-commerce tool",
    desc: "Suggest your e-commerce tool for the Radar Ecom directory and comparisons. Free, reviewed by hand, no paid ranking.",
    h1: "Submit your tool",
    lead: "Do you build or use an e-commerce tool that isn't in the directory? Suggest it. We list it if it can be verified, and it can then enter a comparison.",
    cta: "Open the submission form",
    note: "The form is a GitHub issue: you need a free GitHub account, and your submission is public.",
    s: [
      ["What we need", "The tool's name, its official website, a direct link to its public pricing page, its category and two or three factual sentences about what it does. Also tell us how you are related to the tool: if we publish a comparison, we disclose it."],
      ["What happens next", "We review every submission by hand. If the facts can be verified on public pages, the tool enters the directory. Once several tools of a category are listed, we can write a comparison or head-to-head with verified, dated prices."],
      ["What submitting does not guarantee", "Neither publication, nor timing, nor ranking. No payment influences the content, and a vendor does not review the article before publication. Something wrong? Reply in the issue with the source and we fix it within 7 days."],
    ],
  },
};

export function submitMeta(locale: Locale) {
  return pageMeta(locale, { fr: "/soumettre-un-outil/", en: "/en/submit-tool/" }, { title: TXT[locale].title, description: TXT[locale].desc });
}

export default function Submit({ locale }: { locale: Locale }) {
  const x = TXT[locale];
  return (
    <main>
      <div className="wrap">
        <section className="page-head">
          <span className="chip">{x.title}</span>
          <h1>{x.h1}</h1>
          <p>{x.lead}</p>
          <p>
            <a className="dir-btn" href={ISSUE} rel="noopener" target="_blank">
              {x.cta}
            </a>
          </p>
          <p>{x.note}</p>
        </section>
        <div className="method">
          {x.s.map(([h, p]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
