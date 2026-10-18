import Link from "next/link";
import ToolLogo from "@/components/ToolLogo";
import Baro from "@/components/Baro";
import Newsletter from "@/components/Newsletter";
import ArticleGrid from "@/components/ArticleGrid";
import RefineBand from "@/components/RefineBand";
import { getArticles, getArticleByKey, getBarometre, articlePath } from "@/lib/content";
import { toCard } from "@/lib/cards";
import { T, CAT_TEXT, TYPE_TEXT, fmtDate, monthWord, type Locale } from "@/lib/i18n";

export default function Home({ locale }: { locale: Locale }) {
  const t = T[locale];
  const articles = getArticles(locale);
  const baro = getBarometre();
  const feature = getArticleByKey("meilleurs-outils-avis-clients-shopify", locale)!;
  const vs = getArticleByKey("klaviyo-vs-brevo", locale)!;
  const alt = getArticleByKey("alternatives-yotpo", locale)!;
  const fiche = getArticleByKey("trendtrack-avis-prix", locale)!;
  const toolCount = new Set(articles.flatMap((a) => a.tools)).size;
  const [p1, p2, p3] = feature.tools;
  const cat = (k: keyof typeof CAT_TEXT.fr) => CAT_TEXT[locale][k].label;

  return (
    <main>
      <div className="wrap">
        <section className="intro">
          <h1>
            {t.heroA}
            <span className="hl">{locale === "en" ? "AI" : "IA"}</span>
            {t.heroB}
          </h1>
          <div className="intro-side">
            <p>{t.heroP}</p>
            <div className="proof">
              <span>{t.proof[0]}</span>
              <span>{t.proof[1]}</span>
              <Link href={t.methodPath}>
                <span>{t.proof[2]}</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bento" aria-label={t.featured}>
          <Link className="tile t-feature" href={articlePath(feature)}>
            <div className="sticker">
              {t.tested}
              <br />
              {t.in} {monthWord(feature.updated, locale)}
              <small>
                {feature.tools.length} {t.tools}
              </small>
            </div>
            <div className="kicker">
              <span>{TYPE_TEXT[locale][feature.type]}</span>
              {cat("avis-clients")}
            </div>
            <h2>{feature.title}</h2>
            <div className="podium" aria-label={t.top3}>
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
                {feature.readTime} {t.min} · {t.pricesChecked} {fmtDate(feature.updated, locale, true)}
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Baro data={baro} locale={locale} />

          <Link className="tile t-chat" href={articlePath(feature)}>
            <div className="kicker">
              <span>{t.seenIn}</span>
              {t.whyExists}
            </div>
            <div className="chat">
              <div className="bubble q">{t.chatQ}</div>
              <div className="bubble a">
                {t.chatA}
                <ol>
                  <li>
                    <ToolLogo name="Judge.me" />
                    <b>Judge.me</b>, {t.chatL[0]} <span className="cite us">ecomradar.co</span>
                  </li>
                  <li>
                    <ToolLogo name="Avis Vérifiés" />
                    <b>Avis Vérifiés</b>, {t.chatL[1]} <span className="cite">avis-verifies.com</span>
                  </li>
                  <li>
                    <ToolLogo name="Loox" />
                    <b>Loox</b>, {t.chatL[2]} <span className="cite us">ecomradar.co</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="meta">
              <span className="sample">{t.chatNote}</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Link className="tile t-vs" href={articlePath(vs)}>
            <div className="kicker">
              <span>{TYPE_TEXT[locale]["Face-à-face"]}</span>
            </div>
            <div className="vs">
              <ToolLogo name="Klaviyo" big />
              Klaviyo<span>vs</span>
              <ToolLogo name="Brevo" big />
              Brevo
            </div>
            <p>{t.vsP}</p>
            <div className="meta">
              <span>
                {vs.readTime} {t.min}
              </span>
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
              <span>{TYPE_TEXT[locale].Alternatives}</span>
              {cat("avis-clients")}
            </div>
            <h3>
              <ToolLogo name="Yotpo" />
              {alt.title}
            </h3>
            <div className="meta">
              <span>
                {alt.readTime} {t.min}
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Link className="tile t-fiche" href={articlePath(fiche)}>
            <div className="kicker">
              <span>{TYPE_TEXT[locale]["Fiche outil"]}</span>
              {cat("veille")}
            </div>
            <h3>
              <ToolLogo name="TrendTrack" />
              {fiche.title.split(/ en 20| in 20/)[0]}
            </h3>
            <div className="price">
              <span>
                {t.from}
                <b>{locale === "en" ? "€34/month" : "34 €/mois"}</b>
              </span>
              <span>
                {t.target}
                <b>{t.targetV}</b>
              </span>
              <span>
                {t.rating}
                <b>{locale === "en" ? "€111/month" : "111 €/mois"}</b>
              </span>
            </div>
            <div className="meta">
              <span>
                {t.checkedOn} {fmtDate(fiche.updated, locale, true)}
              </span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          <Newsletter locale={locale} />

          <div className="tile t-stats" aria-label={t.stats}>
            <div className="stat">
              <b>{toolCount}</b>
              <span>{t.statTools}</span>
            </div>
            <div className="stat">
              <b>4</b>
              <span>{t.statAI}</span>
            </div>
            <div className="stat">
              <b>{articles.length}</b>
              <span>{t.statArticles}</span>
            </div>
          </div>
        </section>

        <RefineBand ctx="home" locale={locale} />

        <ArticleGrid cards={articles.map(toCard)} locale={locale} title={t.latest} />
      </div>
    </main>
  );
}
