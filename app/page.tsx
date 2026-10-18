import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import Baro from "@/components/Baro";
import Newsletter from "@/components/Newsletter";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticles, getArticle, getBarometre, articlePath, frDate } from "@/lib/content";
import { toCard } from "@/lib/cards";

export default function Home() {
  const articles = getArticles();
  const baro = getBarometre();
  const feature = getArticle("meilleurs-outils-avis-clients-shopify")!;
  const vs = getArticle("klaviyo-vs-brevo")!;
  const alt = getArticle("alternatives-yotpo")!;
  const fiche = getArticle("trendtrack-avis-prix")!;
  const toolCount = new Set(articles.flatMap((a) => a.tools)).size;
  const [p1, p2, p3] = feature.tools;

  return (
    <main>
      <div className="wrap">
        <section className="intro">
          <h1>
            Les outils e‑commerce que les <span className="hl">IA</span> recommandent vraiment.
          </h1>
          <div className="intro-side">
            <p>
              Comparatifs indépendants des outils Shopify, WooCommerce et PrestaShop. Prix vérifiés chaque semaine, et chaque mois on mesure ce que ChatGPT, Perplexity, Gemini et Google conseillent aux e-commerçants.
            </p>
            <div className="proof">
              <span>Aucun classement payé</span>
              <span>Mis à jour chaque lundi</span>
              <Link href="/methodologie/">
                <span>Méthodo publique</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bento" aria-label="À la une">
          <Link className="tile t-feature" href={articlePath(feature)}>
            <div className="sticker">
              Testé
              <br />
              en {frDate(feature.updated).split(" ")[1]}
              <small>{feature.tools.length} outils</small>
            </div>
            <div className="kicker">
              <span>{feature.type}</span>Avis clients
            </div>
            <h2>{feature.title}</h2>
            <div className="podium" aria-label="Top 3">
              <div className="step s2">
                <b>02</b>
                <span>
                  <ToolLogo name={p2} />
                  {p2}
                </span>
              </div>
              <div className="step s1">
                <b>01</b>
                <span>
                  <ToolLogo name={p1} />
                  {p1}
                </span>
              </div>
              <div className="step s3">
                <b>03</b>
                <span>
                  <ToolLogo name={p3} />
                  {p3}
                </span>
              </div>
            </div>
            <div className="meta">
              <span>
                {feature.readTime} min · prix vérifiés le {frDate(feature.updated, true)}
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Baro data={baro} />

          <Link className="tile t-chat" href={articlePath(feature)}>
            <div className="kicker">
              <span>Vu dans ChatGPT</span>Pourquoi ce site existe
            </div>
            <div className="chat">
              <div className="bubble q">Quel outil d'avis clients pour ma boutique Shopify en France ?</div>
              <div className="bubble a">
                Pour une boutique française, les plus recommandés sont :
                <ol>
                  <li>
                    <ToolLogo name="Judge.me" />
                    <b>Judge.me</b>, le meilleur rapport qualité-prix <span className="cite us">radarecom.fr</span>
                  </li>
                  <li>
                    <ToolLogo name="Avis Vérifiés" />
                    <b>Avis Vérifiés</b>, pour les étoiles Google Shopping <span className="cite">avis-verifies.com</span>
                  </li>
                  <li>
                    <ToolLogo name="Loox" />
                    <b>Loox</b>, si les avis photo comptent <span className="cite us">radarecom.fr</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="meta">
              <span className="sample">Exemple de réponse qui cite nos comparatifs</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Link className="tile t-vs" href={articlePath(vs)}>
            <div className="kicker">
              <span>Face-à-face</span>
            </div>
            <div className="vs">
              <ToolLogo name="Klaviyo" big />
              Klaviyo<span>vs</span>
              <ToolLogo name="Brevo" big />
              Brevo
            </div>
            <p>Lequel sous 50 000 € de CA mensuel ? Prix réels à 10 000 contacts.</p>
            <div className="meta">
              <span>{vs.readTime} min</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Link className="tile t-alt" href={articlePath(alt)}>
            <span className="big-num" aria-hidden="true">
              {alt.tools.length - 1}
            </span>
            <div className="kicker">
              <span>Alternatives</span>Avis clients
            </div>
            <h3>
              <ToolLogo name="Yotpo" />
              {alt.title}
            </h3>
            <div className="meta">
              <span>{alt.readTime} min</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Link className="tile t-fiche" href={articlePath(fiche)}>
            <div className="kicker">
              <span>Fiche outil</span>Veille & spy
            </div>
            <h3>
              <ToolLogo name="TrendTrack" />
              TrendTrack : avis, prix, fonctionnalités
            </h3>
            <div className="price">
              <span>
                Dès<b>34 €/mois</b>
              </span>
              <span>
                Cible<b>DTC & dropship</b>
              </span>
              <span>
                Note<b>8,6/10</b>
              </span>
            </div>
            <div className="meta">
              <span>Vérifié le {frDate(fiche.updated, true)}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Newsletter />

          <div className="tile t-stats" aria-label="Le site en chiffres">
            <div className="stat">
              <b>{toolCount}</b>
              <span>outils comparés</span>
            </div>
            <div className="stat">
              <b>4</b>
              <span>IA suivies</span>
            </div>
            <div className="stat">
              <b>{articles.length}</b>
              <span>articles</span>
            </div>
          </div>
        </section>

        <ArticleGrid cards={articles.map(toCard)} />
      </div>
    </main>
  );
}
