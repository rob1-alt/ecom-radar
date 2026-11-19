---
title: "PayPal fees in 2026 for an online store: what does an order really cost?"
description: "PayPal France fees checked on Nov 19, 2026: 2.90% + €0.35, non-EEA surcharges, refunds, disputes, micropayments, and the cost on 300 orders a month."
category: paiement
type: Guide
date: 2026-11-19
updated: 2026-11-19
readTime: 7
tools: ["PayPal", "Stripe", "Mollie", "Shopify Payments"]
cited: [0, 0, 0, 0]
sample: false
slug: paypal-fees-ecommerce-merchants-2026
translationOf: frais-paypal-ecommercant-2026
answer: "In France, **PayPal** charges 2.90% + €0.35 per domestic commercial transaction, which is €2.09 on a €60 order. Add 1.29% for a buyer in the UK and 1.99% outside the EEA, 3.0% when currency conversion applies, and the fees are not returned when you refund. For comparison, a standard European card costs €1.15 at **Stripe** on the same order."
faq:
  - q: "What are PayPal's merchant fees in France in 2026?"
    a: "According to PayPal France's fees page (updated Nov 4, 2026, checked Nov 19, 2026): 2.90% + €0.35 for a domestic commercial transaction, 1.20% + €0.35 for a card-funded payment from a user without a PayPal account, and 1.20% + €0.35 for advanced cards on blended pricing."
  - q: "How much does PayPal cost for a foreign buyer?"
    a: "PayPal adds a percentage on top of the domestic fee: 0% if the buyer is in the EEA, 1.29% in the UK, 1.99% for all other markets. On a €60 order, that gives €2.09, €2.86 and €3.28, excluding currency conversion (3.0% above the base exchange rate)."
  - q: "Does PayPal return its fees when I refund an order?"
    a: "No. Issuing the refund costs nothing, but the fees you paid to receive the payment are not returned, for full or partial refunds. Stripe does not return its processing fees on a refund either."
  - q: "How much does a PayPal dispute cost?"
    a: "€14 at the standard rate and €28 at high volume for a dispute on a transaction made through a PayPal account or a PayPal checkout solution. A card chargeback on a transaction not made through a PayPal account costs €16."
  - q: "Does Shopify charge transaction fees on PayPal orders?"
    a: "According to Shopify's help center, PayPal transactions are exempt from third-party transaction fees if Shopify Payments is your primary payment provider. Without Shopify Payments, third-party transaction fees apply to transactions processed through third-party gateways."
---

## PayPal fees in one table

| Payment received (France) | PayPal fee | On a €60 order |
| --- | --- | --- |
| **PayPal**, buyer in France or the EEA | 2.90% + €0.35 | €2.09 |
| **PayPal**, buyer in the UK | 2.90% + 1.29% + €0.35 | €2.86 |
| **PayPal**, buyer outside the EEA and the UK | 2.90% + 1.99% + €0.35 | €3.28 |
| Card from a user without a PayPal account | 1.20% + €0.35 | €1.07 |
| Advanced cards (blended pricing) | 1.20% + €0.35 | €1.07 |
| American Express (advanced cards) | 3.50% | €2.10 |
| Domestic micropayment (on approval, under €5) | 5.0% + €0.10 | Not applicable |

Fees checked on [PayPal's merchant fees page](https://www.paypal.com/fr/business/paypal-business-fees) (updated Nov 4, 2026) on Nov 19, 2026. Radar Ecom calculations, excluding currency conversion.

PayPal's page does not say which integrations the "card from a user without a PayPal account" line applies to. Check the rate actually charged on these payments in your account.

## How much does PayPal cost on 300 orders a month?

Take a store that receives 300 orders of €60 a month, 30% of them paid with PayPal by French buyers, so 90 orders.

| Item | Calculation | Monthly cost |
| --- | --- | --- |
| PayPal fees on 90 orders | 90 × €2.09 | €188.10 |
| The same 90 orders by standard EEA card at **Stripe** | 90 × €1.15 | €103.50 |
| Difference | | €84.60 |

Over a year, the difference reaches €1,015.20. This calculation assumes those customers would have paid by card: it does not measure the sales the PayPal button may bring you. To find out, compare your conversion rate with and without PayPal on your own store.

## What happens when you refund?

Issuing a refund costs nothing, but PayPal keeps the fees paid when the payment was received, for full or partial refunds. On a refunded €60 order, you lose €2.09.

With 10% of the 90 PayPal orders above refunded, that is 9 × €2.09 = €18.81 a month. At **Stripe**, the [pricing page](https://stripe.com/en-fr/pricing) also states that the original transaction's processing fees are not returned. To cut this cost, see how to [reduce your return rate](/en/returns-support/reduce-ecommerce-return-rate/).

## Selling outside France with PayPal: what gets added

PayPal applies its domestic fee, then a percentage based on the buyer's country: 0% in the EEA, 1.29% in the UK and 1.99% for all other markets.

If currency conversion is needed, PayPal applies 3.0% above the base exchange rate. At **Stripe**, UK and international cards cost 2.5% + €0.25 and 3.15% + €0.25, plus 2% if currency conversion is required.

## Disputes, chargebacks and other fees

- **Dispute** on a transaction made through a PayPal account or a PayPal checkout solution: €14 at the standard rate, €28 at high volume, in the currency of the original transaction. The page does not define the high-volume threshold and refers to the user agreement.
- **Card chargeback** on a transaction not made through a PayPal account: €16.
- **Transfer to your local bank account** without conversion: free, including instant transfers.
- **Advanced fraud tool**: €0.06 per transaction. **Chargeback protection**: 0.59% per transaction.

To compare with other providers, read our article on [card chargeback fees at Stripe, Shopify Payments, PayPal and Mollie](/en/payments/chargeback-fees-stripe-shopify-paypal-mollie/).

## Are micropayments worth it?

For transactions under €5, PayPal offers, on approval, a rate of 5.0% + €0.10 (6.0% + €0.10 internationally). On a €4 payment, that is €0.30 versus €0.47 at the standard rate. Under €5, the micropayment rate is always cheaper than the standard domestic rate.

## PayPal on Shopify: watch out for third-party transaction fees

[Shopify's help center](https://help.shopify.com/en/manual/payments/third-party-providers) states that PayPal transactions are exempt from third-party transaction fees if **Shopify Payments** is your primary provider. Without Shopify Payments, these fees apply to transactions processed through third-party gateways, depending on your Shopify plan.

## What about through Mollie?

**Mollie** lets you accept PayPal alongside cards. Its [pricing page](https://www.mollie.com/pricing) shows "PayPal fees + €0.10", so €2.19 on a €60 order paid by a French buyer. You centralize payment methods, but pay €0.10 more per PayPal order.

## How to reduce your PayPal fees

- **Keep PayPal as an option**, not your main method: cards cost less at PayPal (1.20% + €0.35) as well as at Stripe or Mollie.
- **On Shopify**, turn on Shopify Payments to avoid third-party transaction fees on PayPal.
- **Low average order value**: ask for the micropayment rate if you sell a lot under €5.
- **Non-EEA customers**: build the 1.29% or 1.99% surcharge into your prices for those countries.

For a full comparison of providers, read [the best ecommerce payment solutions](/en/payments/best-ecommerce-payment-solutions/).

## Sources

- [PayPal merchant fees page (France)](https://www.paypal.com/fr/business/paypal-business-fees), updated Nov 4, 2026, checked Nov 19, 2026.
- [Stripe pricing page (France)](https://stripe.com/en-fr/pricing), checked Nov 19, 2026.
- [Mollie pricing page](https://www.mollie.com/pricing), checked Nov 19, 2026.
- [Shopify help center on third-party providers](https://help.shopify.com/en/manual/payments/third-party-providers), checked Nov 19, 2026.
