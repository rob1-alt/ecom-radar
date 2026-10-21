---
title: "Card chargebacks: how much do they cost with Stripe, Shopify Payments, PayPal and Mollie?"
description: "Verified, dated chargeback fees for Stripe, Shopify Payments, PayPal and Mollie in France: what is refunded if you win, the cost of contesting, and the Cartes Bancaires case."
category: paiement
type: Comparatif
date: 2026-10-21
updated: 2026-10-21
readTime: 6
tools: ["Stripe", "Shopify Payments", "PayPal", "Mollie"]
cited: [0, 0, 0, 0]
sample: false
answer: "A card dispute costs a French merchant **€20** in fees at **Stripe** (not refunded, plus €20 if you contest, refunded if you win), **€15** at **Shopify Payments** (refunded if you win) and **€14** at **PayPal** (€28 at high volume), on top of the disputed amount. **Mollie** does not show these fees on its pricing page. At Stripe, a dispute on a Cartes Bancaires card carries no fee but cannot be contested."
faq:
  - q: "How much does a card dispute cost at Stripe in France?"
    a: "As of Oct 21, 2026, Stripe lists €20 per dispute received. If you contest, a €20 dispute countered fee is added, refunded if you win. The dispute received fee is never refunded unless your contract says otherwise. No fee applies to a dispute on a Cartes Bancaires card."
  - q: "Does Shopify Payments refund chargeback fees?"
    a: "According to Shopify's documentation, the chargeback fee is €15 for France, and if you win, the disputed amount and the fee are refunded. You generally have 7 to 21 days to respond."
  - q: "How much does PayPal charge for a dispute?"
    a: "PayPal's fees page (updated July 15, 2026) lists €14 at the standard rate and €28 at high volume, applied in the currency of the original transaction."
  - q: "What are Mollie's dispute fees?"
    a: "Mollie's pricing page, checked on Oct 21, 2026, does not list them. Ask Mollie before committing."
  - q: "Can you contest a dispute on a Cartes Bancaires card?"
    a: "At Stripe, no: for businesses in the SEPA area, the Cartes Bancaires network requires more evidence from the cardholder but bars the merchant from contesting the dispute. In return, Stripe charges no fee for these disputes."
---

## The dispute fee table

| Provider | Fee per dispute (France) | If you win | Time to respond |
| --- | --- | --- | --- |
| **Stripe** | €20 received + €20 if you contest | The €20 countered fee is refunded, not the €20 received fee | 7 to 21 days depending on the network |
| **Shopify Payments** | €15 | Disputed amount and fee refunded | 7 to 21 days |
| **PayPal** | €14 (€28 high volume) | Not stated on the fees page | Not stated |
| **Mollie** | Not shown on the pricing page | Not stated | Not stated |

Checked on Oct 21, 2026 on [Stripe's pricing page](https://stripe.com/fr/pricing), [Stripe's dispute documentation](https://docs.stripe.com/disputes/how-disputes-work), [Shopify's chargeback documentation](https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process), [PayPal's fees page](https://www.paypal.com/fr/business/paypal-business-fees) and [Mollie's pricing page](https://www.mollie.com/fr/pricing).

In every case, these fees come on top of the disputed order amount, which is debited from the merchant during the process.

## What is different at Stripe?

At **Stripe**, a dispute received costs €20 and contesting costs €20 more. The countered fee is returned if you win, the received fee is not unless your contract says otherwise, per [Stripe's documentation](https://docs.stripe.com/disputes/how-disputes-work).

The documentation adds a special case: businesses in the SEPA area pay no fee for a dispute on a Cartes Bancaires card. In return, these disputes cannot be contested. The [pricing page](https://stripe.com/fr/pricing) does not mention this exception: check it in your Dashboard.

## What is different at Shopify Payments?

According to [Shopify's documentation](https://help.shopify.com/fr/manual/payments/chargebacks/chargeback-process), a chargeback costs €15 for France. If you win, you get back the disputed amount and the fee. It is the only one of the four where a full fee refund is documented. The amount is deducted from your next payout.

## What about PayPal and Mollie?

**PayPal** charges €14 at the standard rate and €28 at high volume. The [fees page](https://www.paypal.com/fr/business/paypal-business-fees) does not say whether the fee is returned when you win.

**Mollie** does not publish these fees on its [pricing page](https://www.mollie.com/fr/pricing). I do not state any: ask for them in writing.

## What does a dispute cost on a €60 order?

Calculated from the fees above, for a card other than Cartes Bancaires. You lose the dispute: you lose the €60 order, plus €20 in fees at Stripe (€40 if you contested), €15 at Shopify Payments, €14 at PayPal.

You win: at Shopify Payments you get back €60 and the €15 fee. At Stripe you get back €60 but keep €20 in non-refunded fees.

## How to choose

- **Shopify store**: Shopify Payments refunds everything if you win.
- **Many Cartes Bancaires payments**: at Stripe, no dispute fee, but no way to contest.
- **Low average order value**: a €20 fee weighs heavily on a €30 item. To compare transaction fees, read the [payment solutions comparison](/en/payments/best-ecommerce-payment-solutions/).
- **Installment payments**: fees differ, see [Alma vs Klarna](/en/payments/alma-vs-klarna/).

## The smart move

Before choosing a provider, ask in writing for the dispute fees and whether they are refunded when you win.
