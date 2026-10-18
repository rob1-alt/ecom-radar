import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="wordmark" aria-hidden="true">
        radar
      </p>
      <div className="wrap foot-row">
        <div>
          <b>Radar Ecom</b> · Média indépendant, aucun classement payé. Propulsé par Refine. Logos : propriété de leurs éditeurs.
        </div>
        <nav aria-label="Pied de page">
          <Link href="/methodologie/">Méthodologie</Link>
          <Link href="/methodologie/#outil-liste">Votre outil est listé ?</Link>
          <Link href="/barometre/">Baromètre IA</Link>
          <Link href="/#newsletter">Newsletter</Link>
        </nav>
      </div>
    </footer>
  );
}
