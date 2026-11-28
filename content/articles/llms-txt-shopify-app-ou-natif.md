---
title: "llms.txt sur Shopify : ta boutique en a déjà un, faut-il payer une app ? (2026)"
description: "Shopify sert un /llms.txt par défaut et Google l'ignore. Ce que contient le fichier, comment le modifier et 9 apps comparées, prix relevés le 28 novembre 2026."
category: visibilite-ia
type: Guide
date: 2026-11-28
updated: 2026-11-28
readTime: 8
tools: ["Arc: llms.txt", "autoLLMs", "Gemify llms-full.txt", "LLMs.txt Generator (Gokyo)", "AI LLMs Txt Generator", "LLMs, Robots and Agents Editor", "LLMs.txt AI Optimizer", "LLMs.txt Generator by Bouquet", "LLM Core"]
cited: [0, 0, 0, 0]
sample: false
slug: llms-txt-shopify-app-ou-natif
answer: "Oui, ta boutique Shopify sert déjà un fichier **/llms.txt** : par défaut, Shopify le génère en miroir de **/agents.md**, et tu peux le remplacer avec un modèle `llms.txt.liquid` dans ton thème. Google indique que Google Search, AI Overviews et AI Mode compris, ignore ces fichiers. Une app n'est donc pas indispensable : elles vont de gratuit à 49,99 $/mois (prix relevés le 28 novembre 2026)."
faq:
  - q: "Ma boutique Shopify a-t-elle un fichier llms.txt ?"
    a: "Oui. D'après la documentation développeurs de Shopify, Shopify gère /llms.txt par défaut en reprenant le contenu de /agents.md. Tu peux le vérifier en ouvrant ton-domaine.com/llms.txt."
  - q: "Le fichier llms.txt aide-t-il à apparaître dans Google AI Overviews ?"
    a: "Non selon Google. Son guide d'optimisation pour l'IA, mis à jour en juin 2026, indique que Google Search, y compris ses fonctions d'IA générative, n'utilise pas ces fichiers, et qu'en créer un ne nuit ni n'aide au classement."
  - q: "Comment modifier le llms.txt de Shopify ?"
    a: "Crée un modèle templates/llms.txt.liquid dans le code de ton thème (Boutique en ligne > Thèmes > Modifier le code). Il remplace /llms.txt seulement. Pour modifier /agents.md, /llms.txt et /llms-full.txt d'un coup, Shopify recommande agents.md.liquid."
  - q: "Quelle est l'app llms.txt la moins chère pour Shopify ?"
    a: "Au 28 novembre 2026, LLMs, Robots and Agents Editor est gratuite, et plusieurs apps ont un plan gratuit limité (Arc, Gemify, MageComp, Gokyo, EganAI). Pour un catalogue illimité, AI LLMs Txt Generator de MageComp affiche 69,99 $/an."
  - q: "Le fichier llms.txt par défaut de Shopify liste-t-il mes produits ?"
    a: "D'après les relevés publiés par Fudge et sur le forum de la communauté Shopify, non : il décrit les accès pour les agents (points d'accès, règles, sitemap) sans liste de produits. La documentation Shopify n'en détaille pas le contenu."
---

## llms.txt sur Shopify en un tableau

| Question | Réponse vérifiée | Source |
| --- | --- | --- |
| Shopify sert-il un /llms.txt ? | Oui, par défaut, en miroir de /agents.md | [Documentation Shopify](https://shopify.dev/docs/storefronts/themes/architecture/templates/llms-txt-liquid) |
| Peut-on le modifier ? | Oui, avec `templates/llms.txt.liquid` ou `agents.md.liquid` | Documentation Shopify |
| Peut-on y boucler sur ses produits en Liquid ? | Non : seuls les objets `request` et `agents` sont disponibles | Documentation Shopify |
| Google l'utilise-t-il pour AI Overviews ou AI Mode ? | Non, Google Search ignore ces fichiers | [Search Engine Roundtable](https://www.seroundtable.com/google-llms-txt-files-hurt-help-41512.html), 16 juin 2026 |
| Combien coûte une app ? | De 0 à 49,99 $/mois | Fiches Shopify App Store, 28 novembre 2026 |

Documentation Shopify consultée le 28 novembre 2026.

## Ta boutique Shopify a-t-elle déjà un llms.txt ?

Oui. La [documentation développeurs de Shopify](https://shopify.dev/docs/storefronts/themes/architecture/templates/llms-txt-liquid) indique que, par défaut, Shopify gère `/llms.txt` en reprenant le contenu de `/agents.md`, qu'elle présente comme le document de référence pour les agents d'IA. Ouvre `ton-domaine.com/llms.txt` pour voir le tien.

Les marchands l'ont découvert au printemps 2026 : le fil « [Shopify Just Killed /llms.txt for all stores](https://community.shopify.com/t/shopify-just-killed-llms-txt-for-all-stores-heres-what-to-do/629150) » date du 24 mai 2026. Un message de septembre 2026 dans le même fil rapporte que `/llms.txt` répond bien directement (code 200), sans redirection.

## Que contient le fichier par défaut ?

La documentation Shopify ne détaille pas le contenu. D'après les relevés publiés par [Fudge](https://www.fudge.ai/blog/shopify-llms-txt/) (16 novembre 2026) et sur le forum Shopify, c'est un fichier Markdown d'« instructions pour agents » : points d'accès pour les agents d'achat, règles d'autorisation, renvois vers le sitemap et les politiques. Il ne contient ni description de ta marque, ni liste de produits ou de collections.

Ces relevés ne concordent pas sur tout (taille du fichier, présence des coordonnées de contact). Regarde donc le tien plutôt que de te fier à un exemple.

## Comment le modifier sans app ?

Dans l'admin : Boutique en ligne > Thèmes > Modifier le code > Templates > Nouveau fichier, puis `llms.txt.liquid`. Shopify sert `/llms.txt` dans cet ordre :

1. `llms.txt.liquid` s'il existe ;
2. sinon `agents.md.liquid` ;
3. sinon le fichier généré par Shopify.

Un `llms.txt.liquid` ne change que `/llms.txt`. Pour modifier `/agents.md`, `/llms.txt` et `/llms-full.txt` ensemble, Shopify recommande `agents.md.liquid`. Le modèle accepte du texte, du Markdown et du Liquid.

La limite qui compte : dans ces modèles, Shopify ne fournit que les objets `request` et `agents` (nom de la boutique, URL, sitemap, points d'accès). Les objets habituels comme `shop`, `collections` ou `articles` ne sont pas disponibles. Tu ne peux donc pas générer automatiquement la liste de tes produits : ce que tu écris reste statique.

## Est-ce que llms.txt aide à être cité par les IA ?

Pour Google, non. Son guide d'optimisation pour l'IA, publié vers la mi-mai 2026 puis précisé en juin, indique qu'il n'est pas nécessaire de créer des fichiers lisibles par les machines pour apparaître dans Google Search, « y compris ses fonctions d'IA générative », car Google Search ne les utilise pas. Créer un llms.txt « ne nuira ni n'aidera » ton classement, selon le texte cité par [Search Engine Roundtable](https://www.seroundtable.com/google-llms-txt-files-hurt-help-41512.html) et [Search Engine Land](https://searchengineland.com/google-says-llms-txt-files-wont-harm-or-help-your-search-rankings-480264).

Un autre outil de Google dit l'inverse : Lighthouse 13.3 a ajouté une catégorie expérimentale « Agentic Browsing » avec un audit llms.txt, d'après [Search Engine Journal](https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/) (20 mai 2026). Cet audit concerne les agents qui naviguent sur ton site, pas le référencement ni les citations dans les réponses d'IA.

Pour ChatGPT, Perplexity ou Claude, aucun éditeur n'a publié d'engagement à lire llms.txt dans les sources consultées. Nous n'avons pas de mesure Refine sur l'effet d'un llms.txt pour une boutique : nous n'en affichons donc aucune.

## Les 9 apps llms.txt pour Shopify comparées

| App | Éditeur | Plan gratuit | Plans payants | Mise à jour | Avis sur la fiche |
| --- | --- | --- | --- | --- | --- |
| **Arc: llms.txt** | ArcSpeed | Oui (200 éléments par type, synchro hebdo) | Pro 9 $/mois ou 99 $/an (1 000 par type, synchro quotidienne) | Auto | 4,4 (80 avis), Built for Shopify |
| **autoLLMs** | Ollie | Non (essai 7 jours) | 9,99 $/mois ou 99 $/an, sans limite de contenu | Quotidienne | 5,0 (6 avis) |
| **Gemify llms-full.txt** | Gemify | Oui (50 éléments par type) | Complete 9,99 $/mois, illimité | Horaire, quotidienne ou hebdo | 5,0 (1 avis) |
| **AI LLMs Txt Generator** | MageComp | Oui (50 produits, 10 collections) | Advance 5,99 $/mois, Pro 6,99 $/mois ou 69,99 $/an (illimité) | Auto (fréquence au choix) | 5,0 (1 avis) |
| **LLMs.txt Generator (Gokyo)** | Gokyo.ai | Oui (50 produits, 5 collections) | 4,99 $, 9,99 $ et 49,99 $/mois (illimité) | Non précisée | 3,0 (5 avis) |
| **LLMs.txt AI Optimizer** | EganAI | Oui | Pro 9 $/mois (synchro catalogue, stats des robots d'IA) | Auto en Pro | Aucun avis |
| **LLMs.txt Generator by Bouquet** | Bouquet Inc. | Non | Standard 10 $/mois (synchro hebdo), Pro 25 $/mois (horaire) | Selon le plan | 5,0 (1 avis) |
| **LLM Core** | Swonie Creative Design | Non (essai 7 jours) | Pro 4,90 $/mois | En un clic | Aucun avis |
| **LLMs, Robots and Agents Editor** | Pholidota Studio | Gratuite | — | Auto (llms.txt et agents.md) | 4,1 (3 avis) |

Tarifs relevés le 28 novembre 2026 sur les fiches Shopify App Store de [Arc](https://apps.shopify.com/llms-txt-generator-ai-search), [autoLLMs](https://apps.shopify.com/autollm), [Gemify](https://apps.shopify.com/llms-full-txt), [MageComp](https://apps.shopify.com/llms-txt-generator), [Gokyo](https://apps.shopify.com/llms-txt), [EganAI](https://apps.shopify.com/llms-txt-4), [Bouquet](https://apps.shopify.com/bouquet-llms-text-generator), [LLM Core](https://apps.shopify.com/llm-core-llms-txt) et [Pholidota](https://apps.shopify.com/llm-txt-generator). Les prix sont affichés en dollars sur ces fiches, pas en euros.

Seule **Arc: llms.txt** a assez d'avis pour juger de son sérieux. Les autres ont entre 0 et 6 avis. Parmi les apps, **Gemify llms-full.txt** et **autoLLMs** sont les seules à lister le français.

## Combien coûte une app pour 1 000 produits sur un an ?

| App | Plan qui couvre 1 000 produits | Coût sur 12 mois |
| --- | --- | --- |
| **LLMs, Robots and Agents Editor** | Gratuite (pas de liste de produits annoncée) | 0 $ |
| **LLM Core** | Pro | 58,80 $ |
| **AI LLMs Txt Generator** | Pro annuel | 69,99 $ |
| **Arc: llms.txt** | Pro annuel (jusqu'à 1 000) | 99 $ |
| **autoLLMs** | Annuel | 99 $ |
| **LLMs.txt AI Optimizer** | Pro | 108 $ |
| **Gemify llms-full.txt** | Complete | 119,88 $ |
| **LLMs.txt Generator (Gokyo)** | Gold (2 500 produits) | 119,88 $ |
| **LLMs.txt Generator by Bouquet** | Standard | 120 $ |

Calcul à partir des tarifs relevés le 28 novembre 2026, en dollars, hors taxes éventuelles. Pour Arc, au-delà de 1 000 éléments par type, la fiche n'affiche pas de plan supérieur.

## Attention aux conflits avec le fichier natif

Depuis que Shopify sert son propre `/llms.txt`, des marchands du [forum Shopify](https://community.shopify.com/t/shopify-just-killed-llms-txt-for-all-stores-heres-what-to-do/629150) disent que des redirections ou des apps ne s'affichaient plus. Aucune source officielle ne précise comment Shopify arbitre entre son fichier et celui d'une app. Des avis sur la fiche d'Arc évoquent aussi des redirections restées en place après désinstallation ; l'éditeur dit avoir corrigé une ancienne version.

Après installation, ouvre `ton-domaine.com/llms.txt` : si tu vois toujours le fichier « instructions pour agents » de Shopify, l'app ne sert à rien chez toi.

## Comment choisir

- **Tu veux juste être propre :** ne fais rien, ou écris un `llms.txt.liquid` court (présentation de la marque, catégories, pages clés, politique de retour). C'est gratuit.
- **Tu veux une liste de produits à jour sans y toucher :** **Arc: llms.txt** (le plus d'avis) ou **AI LLMs Txt Generator** (le moins cher en illimité). Vérifie le résultat en ligne.
- **Tu veux aussi gérer robots.txt et agents.md :** **LLMs, Robots and Agents Editor**, gratuite.
- **Ton but est d'être recommandé par ChatGPT ou Google :** llms.txt ne suffira pas. Mesure d'abord où tu en es avec un [outil de visibilité IA](/visibilite-ia/meilleurs-outils-geo-ecommerce/), puis travaille ce qui pèse : tes avis produits (voir [les étoiles Google Shopping](/avis-clients/etoiles-google-shopping-avis-produits/)), tes fiches et les comparatifs qui te citent.

Pour voir comment tes concurrents s'y prennent, suis notre méthode pour [analyser une boutique Shopify concurrente](/veille/analyser-boutique-shopify-concurrente/).

## À lire aussi

- [Les meilleurs outils GEO pour l'e-commerce](/visibilite-ia/meilleurs-outils-geo-ecommerce/)
- [Étoiles Google Shopping : comment les obtenir et combien ça coûte](/avis-clients/etoiles-google-shopping-avis-produits/)
