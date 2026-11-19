---
title: "Frais PayPal 2026 pour un e-commerçant : combien coûte vraiment une commande ?"
description: "Frais PayPal France vérifiés le 19 novembre 2026 : 2,90 % + 0,35 €, suppléments hors EEE, remboursements, litiges, micropaiements, et coût sur 300 commandes par mois."
category: paiement
type: Guide
date: 2026-11-19
updated: 2026-11-19
readTime: 7
tools: ["PayPal", "Stripe", "Mollie", "Shopify Payments"]
cited: [0, 0, 0, 0]
sample: false
answer: "En France, **PayPal** facture 2,90 % + 0,35 € par transaction commerciale nationale, soit 2,09 € sur une commande de 60 €. Il faut ajouter 1,29 % pour un acheteur au Royaume-Uni et 1,99 % hors EEE, 3,0 % en cas de conversion de devises, et les frais ne sont pas rendus quand tu rembourses. À titre de comparaison, une carte européenne standard coûte 1,15 € chez **Stripe** sur la même commande."
faq:
  - q: "Quels sont les frais PayPal pour un marchand en France en 2026 ?"
    a: "D'après la page des frais PayPal France (mise à jour le 4 novembre 2026, consultée le 19 novembre 2026) : 2,90 % + 0,35 € pour une transaction commerciale nationale, 1,20 % + 0,35 € pour un paiement par carte d'un utilisateur sans compte PayPal, et 1,20 % + 0,35 € pour les cartes avancées en structure regroupée."
  - q: "Combien coûte PayPal pour un acheteur étranger ?"
    a: "PayPal ajoute un pourcentage aux frais nationaux : 0 % si l'acheteur est dans l'EEE, 1,29 % au Royaume-Uni, 1,99 % pour les autres marchés. Sur une commande de 60 €, cela donne 2,09 €, 2,86 € et 3,28 €, hors conversion de devises (3,0 % au-dessus du taux de change de base)."
  - q: "PayPal rend-il ses frais quand je rembourse une commande ?"
    a: "Non. Le remboursement ne coûte rien à émettre, mais les frais payés à la réception du paiement ne sont pas rendus, pour un remboursement total ou partiel. Stripe ne rend pas non plus ses frais de traitement sur un remboursement."
  - q: "Combien coûte un litige PayPal ?"
    a: "14 € en tarif standard et 28 € en volume élevé pour un litige sur une transaction passée par un compte PayPal ou une solution de paiement PayPal. Une opposition bancaire sur une carte hors compte PayPal coûte 16 €."
  - q: "Shopify facture-t-il des frais de transaction sur les commandes PayPal ?"
    a: "Selon l'aide Shopify, les commandes PayPal sont exemptées des frais de transaction tiers si Shopify Payments est ton prestataire de paiement principal. Sans Shopify Payments, les frais de transaction tiers s'appliquent aux transactions passées par des passerelles tierces."
---

## Les frais PayPal en un tableau

| Type de paiement reçu (France) | Frais PayPal | Sur une commande de 60 € |
| --- | --- | --- |
| **PayPal**, acheteur en France ou dans l'EEE | 2,90 % + 0,35 € | 2,09 € |
| **PayPal**, acheteur au Royaume-Uni | 2,90 % + 1,29 % + 0,35 € | 2,86 € |
| **PayPal**, acheteur hors EEE et hors Royaume-Uni | 2,90 % + 1,99 % + 0,35 € | 3,28 € |
| Carte d'un utilisateur sans compte PayPal | 1,20 % + 0,35 € | 1,07 € |
| Cartes avancées (structure regroupée) | 1,20 % + 0,35 € | 1,07 € |
| American Express (cartes avancées) | 3,50 % | 2,10 € |
| Micropaiement national (sur approbation, moins de 5 €) | 5,0 % + 0,10 € | Non concerné |

Tarifs relevés sur la [page des frais PayPal pour les marchands](https://www.paypal.com/fr/business/paypal-business-fees) (mise à jour le 4 novembre 2026) le 19 novembre 2026. Calculs Radar Ecom, hors conversion de devises.

La page PayPal ne précise pas à quelles intégrations s'applique la ligne « carte d'un utilisateur sans compte PayPal ». Vérifie dans ton compte le taux réellement appliqué à ces paiements.

## Combien coûte PayPal sur 300 commandes par mois ?

Prenons une boutique qui reçoit 300 commandes de 60 € par mois, dont 30 % payées avec PayPal par des acheteurs français, soit 90 commandes.

| Poste | Calcul | Coût mensuel |
| --- | --- | --- |
| Frais PayPal sur 90 commandes | 90 × 2,09 € | 188,10 € |
| Les mêmes 90 commandes par carte standard EEE chez **Stripe** | 90 × 1,15 € | 103,50 € |
| Écart | | 84,60 € |

Sur un an, l'écart atteint 1 015,20 €. Ce calcul suppose que ces clients auraient payé par carte : il ne mesure pas les ventes que le bouton PayPal peut t'apporter. Pour le savoir, compare ton taux de conversion avec et sans PayPal sur ta propre boutique.

## Que se passe-t-il quand tu rembourses ?

Le remboursement ne coûte rien à émettre, mais PayPal garde les frais payés à la réception, pour un remboursement total ou partiel. Sur une commande de 60 € remboursée, tu perds donc 2,09 €.

Avec 10 % de retours remboursés sur les 90 commandes PayPal ci-dessus, cela fait 9 × 2,09 € = 18,81 € par mois. Chez **Stripe**, la [page tarifs](https://stripe.com/en-fr/pricing) indique aussi que les frais de traitement de la transaction d'origine ne sont pas rendus. Pour réduire ce poste, regarde comment [réduire ton taux de retour](/retours-sav/reduire-taux-de-retour/).

## Vendre hors de France avec PayPal : ce qui s'ajoute

PayPal applique ses frais nationaux, puis un pourcentage selon le pays de l'acheteur : 0 % dans l'EEE, 1,29 % au Royaume-Uni et 1,99 % pour tous les autres marchés.

Si une conversion de devises est nécessaire, PayPal applique 3,0 % au-dessus du taux de change de base. Chez **Stripe**, les cartes britanniques et internationales coûtent 2,5 % + 0,25 € et 3,15 % + 0,25 €, plus 2 % si une conversion est nécessaire.

## Litiges, oppositions et autres frais

- **Litige** sur une transaction passée par un compte PayPal ou une solution de paiement PayPal : 14 € en tarif standard, 28 € en volume élevé, dans la devise de la transaction d'origine. La page ne définit pas le seuil du volume élevé et renvoie aux conditions d'utilisation.
- **Opposition bancaire** sur une carte hors compte PayPal : 16 €.
- **Virement vers ton compte bancaire local** sans conversion : gratuit, y compris en instantané.
- **Outil avancé contre la fraude** : 0,06 € par transaction. **Protection contre les oppositions bancaires** : 0,59 % par transaction.

Pour comparer avec les autres prestataires, lis notre article sur le [coût d'un litige carte chez Stripe, Shopify Payments, PayPal et Mollie](/paiement/cout-litige-carte-stripe-shopify-paypal-mollie/).

## Les micropaiements valent-ils le coup ?

Pour les transactions de moins de 5 €, PayPal propose sur approbation un tarif de 5,0 % + 0,10 € (6,0 % + 0,10 € à l'international). Sur un paiement de 4 €, cela fait 0,30 € contre 0,47 € au tarif standard. Sous 5 €, le tarif micropaiement est toujours moins cher que le tarif standard national.

## PayPal sur Shopify : attention aux frais de transaction tiers

L'[aide Shopify](https://help.shopify.com/en/manual/payments/third-party-providers) indique que les transactions PayPal sont exemptées des frais de transaction tiers si **Shopify Payments** est ton prestataire principal. Sans Shopify Payments, ces frais s'appliquent aux transactions des passerelles tierces, selon ton forfait Shopify.

## Et via Mollie ?

**Mollie** permet d'encaisser PayPal à côté des cartes. Sa [page tarifs](https://www.mollie.com/pricing) affiche « frais PayPal + 0,10 € », soit 2,19 € sur une commande de 60 € payée par un acheteur français. Tu centralises les moyens de paiement, mais tu paies 0,10 € de plus par commande PayPal.

## Comment réduire tes frais PayPal ?

- **Garde PayPal comme option**, pas comme moyen principal : les cartes coûtent moins cher chez PayPal (1,20 % + 0,35 €) comme chez Stripe ou Mollie.
- **Sur Shopify**, active Shopify Payments pour éviter les frais de transaction tiers sur PayPal.
- **Panier moyen bas** : demande le tarif micropaiement si tu vends beaucoup sous 5 €.
- **Clients hors EEE** : intègre le supplément de 1,29 % ou 1,99 % dans tes prix pour ces pays.

Pour un comparatif complet des prestataires, lis [les meilleures solutions de paiement pour l'e-commerce](/paiement/meilleures-solutions-paiement-ecommerce/).

## Sources

- [Page des frais PayPal pour les marchands (France)](https://www.paypal.com/fr/business/paypal-business-fees), mise à jour le 4 novembre 2026, consultée le 19 novembre 2026.
- [Page tarifs de Stripe (France)](https://stripe.com/en-fr/pricing), consultée le 19 novembre 2026.
- [Page tarifs de Mollie](https://www.mollie.com/pricing), consultée le 19 novembre 2026.
- [Aide Shopify sur les prestataires tiers](https://help.shopify.com/en/manual/payments/third-party-providers), consultée le 19 novembre 2026.
