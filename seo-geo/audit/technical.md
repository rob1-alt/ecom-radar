# Audit agent-readiness — Radar Ecom (ecomradar.co) — 2026-10-18

Score : 92/100 · Critique : 0 · Haute : 2 (actions propriétaire) · Moyenne : 1

Vérifié sur https://ecomradar.refine-ai.workers.dev (même build que ecomradar.co). Tests faits avec PageSpeed Insights (Lighthouse 13.5, mobile) et lecture du HTML servi. Les accès par user-agent IA n'ont pas été simulés depuis ce sandbox (pas d'accès internet direct) : à confirmer dans Cloudflare > AI Crawl Control.

## Résultats Lighthouse (mobile, PSI)

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
| --- | --- | --- | --- | --- |
| Article TrendTrack | 97 | 100 | 100 | 100 |
| Accueil (avec loader) | 85 → à remesurer | 100 | 100 | 100 |

Le loader de l'accueil coûte du Speed Index en labo ; il ne bloque ni le HTML ni l'indexation.

## Fait

1. Contenu 100 % dans le HTML statique (Next.js export) : articles, tableaux, prix, FAQ lisibles sans JavaScript par GPTBot, ClaudeBot, PerplexityBot.
2. robots.txt : bots de recherche IA et requêtes utilisateurs autorisés (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, MistralAI-User, DuckAssistBot), bots d'entraînement autorisés (choix : site public dont le but est d'être cité), sitemap déclaré.
3. sitemap.xml avec lastmod réels (date de mise à jour de chaque article).
4. Date « Mis à jour le » visible + `dateModified` sur chaque article.
5. JSON-LD : Organization + WebSite (accueil), Article, BreadcrumbList, ItemList (comparatifs), FAQPage (contenu réellement visible).
6. Une seule H1 par page, H2/H3 logiques, vrais `<table>`.
7. Performance : polices auto-hébergées et allégées (font-display optional), CSS inline, logos et grilles rendus côté serveur (zéro JS), menu rendu à l'ouverture, cache immuable sur les assets, JS moderne.
8. llms.txt présent (hygiène, aucun effet mesuré).

## À faire par le propriétaire (cette semaine)

1. **[Haute] Brancher ecomradar.co** : supprimer les enregistrements DNS `A ecomradar.co → 2.57.91.91` et `CNAME www`, puis ajouter le domaine au Worker `ecomradar`.
2. **[Haute] Google Search Console + Bing Webmaster Tools** : vérifier le domaine, soumettre `https://ecomradar.co/sitemap.xml`. Bing alimente Copilot et influence ChatGPT.
3. **[Moyenne] Cloudflare > AI Crawl Control** : vérifier que Search, Agent et Training sont autorisés pour ecomradar.co (les nouveaux domaines peuvent bloquer certains bots par défaut).

## Ce qui n'a pas été vérifié

- Comportement des vrais bots derrière Cloudflare → AI Crawl Control > Metrics après quelques jours.
- Visibilité réelle dans ChatGPT / Perplexity / Gemini : à mesurer avec Refine sur les prompts cibles, avant/après publication.
