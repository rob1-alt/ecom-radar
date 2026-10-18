# Radar Ecom

Comparateur d'outils e-commerce + baromètre IA mensuel. Next.js 16, export statique, hébergé sur Cloudflare Workers.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # génère le site statique dans ./out
```

## Ajouter un article (ce que fait le pipeline Refine)

Créer un fichier `content/articles/<slug>.md` :

```md
---
title: "Klaviyo vs Omnisend"
description: "Une phrase de 150 caractères pour Google et les IA."
category: emailing          # avis-clients | emailing | retours-sav | barometre
type: Face-à-face           # Comparatif | Fiche outil | Face-à-face | Alternatives | Guide | Baromètre
date: 2026-10-20            # publication
updated: 2026-10-20         # dernière vérification des prix
readTime: 8
tools: ["Klaviyo", "Omnisend"]   # doivent exister dans lib/tools.ts (logo auto)
cited: [1, 0, 1, 1]         # cité ce mois-ci par ChatGPT, Perplexity, Gemini, AI Overviews
wide: false                 # true = grande carte colorée sur l'accueil
answer: "La réponse courte en 2-3 phrases, en **gras** pour les outils."
faq:
  - q: "Question ?"
    a: "Réponse."
---

## Premier titre

Contenu en Markdown. Un outil écrit en **gras** reçoit son logo automatiquement.
```

Commit + push : Cloudflare reconstruit et publie le site.

## Baromètre

Un fichier JSON par mois dans `content/barometre/AAAA-MM.json`. Le plus récent est affiché partout.

## Déploiement

- Cloudflare Workers Builds connecté au repo GitHub : build `npm run build`, déploiement `npx wrangler deploy`.
- Ou manuellement : `npm run build` puis glisser le dossier `out` dans Cloudflare (Workers & Pages → Créer → Upload your static files).
- Domaine : définir `NEXT_PUBLIC_SITE_URL=https://radarecom.fr` dans les variables de build.

## Fichiers GEO générés

`/sitemap.xml`, `/robots.txt` (tous les robots IA autorisés), `/llms.txt`, JSON-LD Article / ItemList / FAQPage / BreadcrumbList sur chaque article.
