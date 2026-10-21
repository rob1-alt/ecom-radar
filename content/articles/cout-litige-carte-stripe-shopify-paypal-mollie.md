---
title: "Litige carte (chargeback) : combien ça coûte avec Stripe, Shopify Payments, PayPal et Mollie ?"
description: "Frais de litige vérifiés et datés pour Stripe, Shopify Payments, PayPal et Mollie en France : ce qui est remboursé si tu gagnes, ce que coûte contester, cas des Cartes Bancaires."
category: paiement
type: Comparatif
date: 2026-10-21
updated: 2026-10-21
readTime: 6
tools: ["Stripe", "Shopify Payments", "PayPal", "Mollie"]
cited: [0, 0, 0, 0]
sample: false
answer: "Un litige carte coûte à un marchand français **20 €** de frais chez **Stripe** (non remboursés, plus 20 € si tu contestes, remboursés si tu gagnes), **15 €** chez **Shopify Payments** (remboursés si tu gagnes) et **14 €** chez **PayPal** (28 € en volume élevé), en plus du montant contesté. **Mollie** n'affiche pas ces frais sur sa page tarifs. Chez Stripe, un litige sur une carte Cartes Bancaires n'entraîne aucun frais, mais ne peut pas être contesté."
faq:
  - q: "Combien coûte un litige carte chez Stripe en France ?"
    a: "Au 21 octobre 2026, Stripe affiche 20 € par litige reçu. Si tu contestes, 20 € de frais de contestation s'ajoutent, remboursés si tu gagnes. Le frais de litige reçu n'est jamais remboursé, sauf mention contraire dans ton contrat. Aucun frais n'est facturé pour un litige sur une carte Cartes Bancaires."
  - q: "Shopify Payments rembourse-t-il les frais de litige ?"
    a: "D'après la documentation Shopify, les frais de rétrofacturation sont de 15 € pour la France, et si tu gagnes, le montant contesté et les frais te sont remboursés. Tu as en général 7 à 21 jours pour répondre."
  - q: "Combien PayPal facture-t-il un litige ?"
    a: "La page des frais PayPal (mise à jour le 15 juillet 2026) indique 14 € en tarif standard et 28 € en volume élevé, appliqués dans la devise de la transaction d'origine."
  - q: "Quels sont les frais de litige de Mollie ?"
    a: "La page tarifs de Mollie consultée le 21 octobre 2026 ne les indique pas. Demande-les à Mollie avant de t'engager."
  - q: "Peut-on contester un litige sur une carte Cartes Bancaires ?"
    a: "Chez Stripe, non : pour les entreprises de la zone SEPA, le réseau Cartes Bancaires exige plus de preuves du porteur mais interdit au marchand de contester le litige. En contrepartie, Stripe ne facture aucun frais pour ces litiges."
---

## Le tableau des frais de litige

| Solution | Frais par litige (France) | Si tu gagnes | Délai pour répondre |
| --- | --- | --- | --- |
| **Stripe** | 20 € reçu + 20 € si tu contestes | Les 20 € de contestation sont remboursés, pas les 20 € reçus | 7 à 21 jours selon le réseau |
| **Shopify Payments** | 15 € | Montant contesté et frais remboursés | 7 à 21 jours |
| **PayPal** | 14 € (28 € volume élevé) | Non précisé sur la page des frais | Non précisé |
| **Mollie** | Non affichés sur la page tarifs | Non précisé | Non précisé |

Relevé le 21 octobre 2026 sur la [page tarifs de Stripe](https://stripe.com/fr/pricing), la [documentation Stripe sur les litiges](https://docs.stripe.com/disputes/how-disputes-work), la [documentation Shopify sur les rétrofacturations](https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process), la [page des frais PayPal](https://www.paypal.com/fr/business/paypal-business-fees) et la [page tarifs de Mollie](https://www.mollie.com/fr/pricing).

Dans tous les cas, ces frais s'ajoutent au montant de la commande contestée, qui est débité au marchand pendant la procédure.

## Qu'est-ce qui change chez Stripe ?

Chez **Stripe**, le litige reçu coûte 20 € et la contestation 20 € de plus. Le frais de contestation est rendu si tu gagnes, pas le frais de litige reçu, sauf mention contraire dans ton contrat, selon la [documentation Stripe](https://docs.stripe.com/disputes/how-disputes-work).

La documentation précise un cas particulier : les entreprises de la zone SEPA ne paient aucun frais pour un litige sur une carte Cartes Bancaires. En contrepartie, ces litiges ne sont pas contestables. La [page tarifs](https://stripe.com/fr/pricing) ne mentionne pas cette exception : vérifie-la dans ton Dashboard.

## Qu'est-ce qui change chez Shopify Payments ?

Selon la [documentation Shopify](https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process), la rétrofacturation coûte 15 € pour la France. Si tu gagnes, tu récupères le montant contesté et les frais. C'est la seule des quatre solutions où le remboursement complet des frais est documenté. Le montant est prélevé sur ton prochain versement.

## Et PayPal et Mollie ?

**PayPal** facture 14 € en tarif standard et 28 € en volume élevé. La [page des frais](https://www.paypal.com/fr/business/paypal-business-fees) ne dit pas si ces frais sont rendus en cas de victoire.

**Mollie** ne publie pas ces frais sur sa [page tarifs](https://www.mollie.com/fr/pricing). Je ne les écris donc pas : demande-les par écrit.

## Combien te coûte un litige sur une commande de 60 € ?

Calcul fait à partir des frais ci-dessus, pour une carte hors Cartes Bancaires. Tu perds le litige : tu perds les 60 € de la commande, plus 20 € de frais chez Stripe (40 € si tu avais contesté), 15 € chez Shopify Payments, 14 € chez PayPal.

Tu gagnes : chez Shopify Payments, tu récupères 60 € et les 15 € de frais. Chez Stripe, tu récupères 60 € mais gardes 20 € de frais non remboursés.

## Comment choisir

- **Boutique Shopify** : Shopify Payments rembourse tout si tu gagnes.
- **Beaucoup de paiements Cartes Bancaires** : chez Stripe, pas de frais de litige, mais pas de contestation possible.
- **Panier moyen bas** : un litige à 20 € de frais pèse lourd sur un article à 30 €. Pour comparer les frais de transaction, lis le [comparatif des solutions de paiement](/paiement/meilleures-solutions-paiement-ecommerce/).
- **Paiement en plusieurs fois** : les frais sont différents, voir [Alma vs Klarna](/paiement/alma-vs-klarna/).

## Le bon réflexe

Avant de choisir un prestataire, demande par écrit les frais de litige et leur remboursement en cas de victoire.
