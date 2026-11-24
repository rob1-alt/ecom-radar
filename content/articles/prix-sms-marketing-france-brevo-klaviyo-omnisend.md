---
title: "SMS marketing en France : comment Brevo, Klaviyo et Omnisend le facturent (2026)"
description: "Prix d'un SMS vers la France chez Brevo, Klaviyo et Omnisend : ce que les pages publiques affichent, comment les segments multiplient la facture, et les règles d'envoi en France."
category: emailing
type: Guide
date: 2026-11-24
updated: 2026-11-24
readTime: 7
tools: ["Brevo", "Klaviyo", "Omnisend"]
cited: [0, 0, 0, 0]
sample: false
answer: "Aucun des trois n'affiche publiquement le prix d'un SMS vers la France : **Brevo** vend des packs de crédits qui n'expirent pas, **Klaviyo** facture depuis juillet 2026 un plan mensuel en dollars au message, **Omnisend** vend des crédits SMS en dollars sur son plan Pro. Le tarif France se lit dans le compte. Ce qui fait vraiment varier la facture, c'est le nombre de segments : un emoji fait passer un SMS de 160 à 70 caractères par segment."
faq:
  - q: "Combien coûte un SMS marketing vers la France avec Brevo ?"
    a: "Brevo ne publie pas de prix par SMS : son centre d'aide indique que le coût dépend du pays de destination et renvoie au calculateur du compte (Mon plan > SMS & WhatsApp). Les crédits SMS s'achètent par packs de 100 et n'expirent jamais (relevé du 24 novembre 2026)."
  - q: "Klaviyo facture-t-il encore le SMS en crédits ?"
    a: "Non. Depuis le 13 juillet 2026, Klaviyo passe des crédits à des tarifs au message en dollars : immédiatement pour les nouveaux comptes, à la première date de facturation après le 13 août 2026 pour les comptes payants existants. Tu achètes un plan à l'avance et la part non dépensée n'est pas reportée."
  - q: "Pourquoi mon SMS est-il facturé plusieurs fois ?"
    a: "Les SMS sont facturés par segment. Un segment contient 160 caractères, ou 70 dès qu'il y a un emoji ou un caractère spécial ; un message découpé tombe à 153 (ou 67) caractères par segment. Brevo cite l'apostrophe typographique parmi les caractères qui font basculer en Unicode."
  - q: "À quelle heure peut-on envoyer un SMS marketing en France ?"
    a: "D'après le centre d'aide de Brevo, les SMS marketing vers la France sont envoyés du lundi au samedi de 8 h à 22 h, sans envoi le dimanche ni les jours fériés."
  - q: "Les clients peuvent-ils répondre STOP à un SMS Klaviyo en France ?"
    a: "En France, Klaviyo envoie avec un identifiant d'expéditeur alphanumérique (branded sender ID), qui ne peut pas recevoir de SMS. Les mots-clés de désabonnement ne fonctionnent donc pas : le destinataire se désinscrit via le lien de désabonnement inclus dans le message."
---

## Le résumé en un tableau

| Outil | Modèle de facturation SMS | Prix vers la France affiché publiquement | Où lire le tarif France | Report / expiration |
| --- | --- | --- | --- | --- |
| **Brevo** | Crédits prépayés, packs de 100 | Non | Compte > Mon plan > SMS & WhatsApp | Les crédits n'expirent jamais |
| **Klaviyo** | Plan mensuel en dollars, tarif par message et par segment | Non | Compte > Settings > Billing | Le montant non dépensé n'est pas reporté |
| **Omnisend** | Crédits SMS en dollars ajoutés au plan Pro | Non (grille publique en dollars pour les États-Unis) | Page tarifs SMS, estimation par pays | Non précisé sur la page |

Relevé le 24 novembre 2026 sur le [centre d'aide Brevo](https://help.brevo.com/hc/en-us/articles/208717449), la [FAQ tarifs SMS de Klaviyo](https://help.klaviyo.com/hc/en-us/articles/52952739755931) et la [page tarifs SMS d'Omnisend](https://www.omnisend.com/sms-prices/).

Conséquence pratique : pour comparer le prix d'un SMS vers la France, il faut ouvrir un compte (gratuit chez les trois) et lire le tarif dans l'interface. Les chiffres « par SMS » qui circulent sans source ni date sont à prendre avec prudence.

## Comment Brevo facture le SMS ?

Brevo n'a pas de forfait SMS. Son [centre d'aide](https://help.brevo.com/hc/en-us/articles/208717449) indique qu'il faut acheter des crédits SMS, par packs de 100, et qu'ils n'expirent jamais. Le plan Starter mentionne « Crédits SMS vendus séparément » sur la [page tarifs](https://www.brevo.com/fr/pricing/).

Le coût d'un SMS « varie selon le pays du destinataire » et le nombre de caractères. Le détail se calcule dans le compte, menu Mon plan > SMS & WhatsApp. Le [calculateur SMS de Brevo](https://www.brevo.com/tools/ecommerce-tools/sms-whatsapp-cost-calculator/?lang=fr) précise qu'il donne des estimations datées d'août 2026.

Pour le coût des emails chez Brevo, vois notre fiche [Brevo : prix, plans et limites en 2026](/emailing/brevo-prix-plans-ecommerce/).

## Comment Klaviyo facture le SMS depuis juillet 2026 ?

Klaviyo a changé de modèle. D'après sa [FAQ sur la tarification au message](https://help.klaviyo.com/hc/en-us/articles/52952739755931), à partir du 13 juillet 2026 la messagerie mobile passe des crédits à des tarifs au message en dollars. Les nouveaux comptes basculent tout de suite ; les comptes payants existants à leur première date de facturation après le 13 août 2026.

Ce qui reste : tu achètes un plan mensuel à l'avance, avec des remises au volume (plus le plan est gros, plus le prix unitaire baisse). Les frais opérateurs sont inclus dans le tarif. La part non dépensée n'est pas reportée au mois suivant, selon l'[article sur le système de messagerie mobile](https://help.klaviyo.com/hc/en-us/articles/13502982552347).

Le tarif par pays s'affiche dans Settings > Billing. L'ancien barème en crédits, toujours publié, comptait 7 crédits pour un SMS vers la France ; c'est une unité historique, sans conversion en dollars sur la page.

Ce qui est facturé : les campagnes et les flows, y compris les envois échoués. Ce qui ne l'est pas : les codes d'opt-in, les réponses STOP/HELP et les messages ignorés.

## Comment Omnisend facture le SMS ?

La [page tarifs SMS d'Omnisend](https://www.omnisend.com/sms-prices/) affiche « à partir de 0,007 $ par SMS », en précisant que ce prix de départ s'applique aux gros volumes vers les États-Unis et que le prix varie selon le pays et le volume. La seule grille chiffrée publiée concerne les États-Unis. La France figure dans la liste des pays disponibles, mais son tarif n'apparaît pas dans le texte public de la page.

L'offre est réservée aux utilisateurs du plan Pro, qui ajoutent des crédits SMS « Global » à leur abonnement. La facturation se fait en dollars : la page indique que les prix en devise locale sont des estimations. Pour le reste de l'offre, vois notre fiche [Omnisend : prix et avis](/emailing/omnisend-avis-prix/).

## Pourquoi ton SMS coûte deux ou trois fois le prix affiché ?

Chez Brevo comme chez Klaviyo, l'unité facturée est le segment, pas le message. La formule de Klaviyo : prix par segment × nombre de segments × nombre de destinataires.

Les règles de découpage sont les mêmes dans les deux documentations :

| Contenu du message | 1 segment | Par segment si découpé |
| --- | --- | --- |
| Texte standard (GSM-7) | 160 caractères | 153 caractères |
| Avec un emoji ou un caractère spécial (Unicode) | 70 caractères | 67 caractères |

Sources : [aide Klaviyo](https://help.klaviyo.com/hc/en-us/articles/13502982552347) et [calculateur Brevo](https://www.brevo.com/tools/ecommerce-tools/sms-whatsapp-cost-calculator/?lang=fr), relevés le 24 novembre 2026.

Le calculateur de Brevo donne l'exemple d'un message de 150 caractères qui passe à trois segments dès qu'il contient un caractère Unicode, et cite l'apostrophe typographique (’) parmi les déclencheurs. En français, où les apostrophes courbes arrivent souvent par copier-coller depuis un traitement de texte, c'est le piège le plus courant.

Exemple de calcul à partir de ces règles : une campagne de 150 caractères envoyée à 10 000 abonnés représente 10 000 segments en texte standard, et 30 000 segments avec un seul emoji. La facture est multipliée par trois pour le même message.

## Quelles règles d'envoi s'appliquent en France ?

**Horaires.** Le [centre d'aide Brevo](https://help.brevo.com/hc/en-us/articles/208717449) indique pour la France : du lundi au samedi de 8 h à 22 h, pas de SMS marketing le dimanche ni les jours fériés. Ces restrictions visent les SMS marketing, pas les SMS transactionnels.

**Expéditeur.** Chez Klaviyo, la France n'est disponible qu'avec un identifiant d'expéditeur alphanumérique (branded sender ID), d'après la [liste des pays SMS](https://help.klaviyo.com/hc/en-us/articles/4402914866843). Format : 3 à 11 caractères, au moins une lettre, sans caractères spéciaux ni ponctuation, selon l'[article sur les branded sender IDs](https://help.klaviyo.com/hc/en-us/articles/14953787622427).

**Désabonnement.** Un branded sender ID ne peut pas recevoir de SMS : les mots-clés (STOP, inscription par SMS) ne fonctionnent pas, et Klaviyo indique que le destinataire se désabonne via le lien inclus dans le message. Pour l'Union européenne, Klaviyo demande l'identification de l'organisation et un lien ou un mot-clé de désabonnement, et recommande le double opt-in.

**MMS.** Klaviyo indique que le MMS n'est disponible dans aucun pays d'Europe pour l'instant.

## Comment choisir

- **Tu envoies peu de SMS, de façon irrégulière** : le modèle de **Brevo** (crédits qui n'expirent pas) évite de payer un plan mensuel inutilisé.
- **Tu envoies tous les mois et tu es déjà sur Klaviyo** : le plan mensuel au message est cohérent, mais calibre-le au plus juste, la part non dépensée est perdue.
- **Tu es sur Omnisend** : le SMS demande le plan Pro ; demande l'estimation France sur la page tarifs avant de t'engager.
- **Dans tous les cas** : relis tes messages sans emoji ni apostrophe courbe, et teste le nombre de segments avant d'envoyer à toute ta liste.

Pour comparer les outils sur l'email, vois aussi [Klaviyo vs Brevo](/emailing/klaviyo-vs-brevo/).

## À lire aussi

- [Brevo : prix, plans et limites en 2026 pour un e-commerce](/emailing/brevo-prix-plans-ecommerce/)
- [Klaviyo vs Brevo : lequel choisir pour un e-commerce ?](/emailing/klaviyo-vs-brevo/)
- [Omnisend : prix, avis, alternatives](/emailing/omnisend-avis-prix/)
