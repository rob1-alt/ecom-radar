---
title: "SMS marketing to France: how Brevo, Klaviyo and Omnisend bill it (2026)"
description: "Cost of an SMS to France with Brevo, Klaviyo and Omnisend: what the public pages show, how segments multiply the bill, and the sending rules in France."
category: emailing
type: Guide
date: 2026-11-24
updated: 2026-11-24
readTime: 7
tools: ["Brevo", "Klaviyo", "Omnisend"]
cited: [0, 0, 0, 0]
sample: false
answer: "None of the three publishes the price of an SMS to France: **Brevo** sells credit packs that never expire, **Klaviyo** has billed a monthly dollar plan per message since July 2026, **Omnisend** sells SMS credits in dollars on its Pro plan. The France rate is shown inside the account. What really moves the bill is the number of segments: one emoji takes an SMS from 160 to 70 characters per segment."
faq:
  - q: "How much does a marketing SMS to France cost with Brevo?"
    a: "Brevo doesn't publish a per-SMS price: its help center says the cost depends on the destination country and points to the in-account calculator (My Plan > SMS & WhatsApp messages). SMS credits are bought in packs of 100 and never expire (checked on Nov 24, 2026)."
  - q: "Does Klaviyo still bill SMS in credits?"
    a: "No. Starting July 13, 2026, Klaviyo moves from credits to per-message dollar rates: immediately for new accounts, at the first billing date after August 13, 2026 for existing paid accounts. You buy a plan upfront and unused spend doesn't roll over."
  - q: "Why is my SMS billed several times?"
    a: "SMS are billed per segment. A segment holds 160 characters, or 70 as soon as there is an emoji or special character; a split message drops to 153 (or 67) characters per segment. Brevo lists the typographic apostrophe among the characters that switch a message to Unicode."
  - q: "What time can you send a marketing SMS in France?"
    a: "According to Brevo's help center, marketing SMS to France are sent Monday to Saturday from 8 am to 10 pm, with no sending on Sundays or public holidays."
  - q: "Can customers reply STOP to a Klaviyo SMS in France?"
    a: "In France, Klaviyo sends with an alphanumeric branded sender ID, which cannot receive texts. Keywords therefore don't work: recipients unsubscribe through the unsubscribe link included in the message."
slug: sms-marketing-cost-france-brevo-klaviyo-omnisend
translationOf: prix-sms-marketing-france-brevo-klaviyo-omnisend
---

## The summary in one table

| Tool | SMS billing model | France price shown publicly | Where to read the France rate | Rollover / expiry |
| --- | --- | --- | --- | --- |
| **Brevo** | Prepaid credits, packs of 100 | No | Account > My Plan > SMS & WhatsApp messages | Credits never expire |
| **Klaviyo** | Monthly dollar plan, rate per message and per segment | No | Account > Settings > Billing | Unused spend doesn't roll over |
| **Omnisend** | Dollar SMS credits added to the Pro plan | No (public dollar grid for the United States) | SMS pricing page, estimate per country | Not stated on the page |

Checked on Nov 24, 2026 on the [Brevo help center](https://help.brevo.com/hc/en-us/articles/208717449), [Klaviyo's SMS pricing FAQ](https://help.klaviyo.com/hc/en-us/articles/52952739755931) and [Omnisend's SMS pricing page](https://www.omnisend.com/sms-prices/).

In practice: to compare the price of an SMS to France, you need to open an account (free with all three) and read the rate in the interface. "Per SMS" figures that circulate without a source or date should be treated with caution.

## How does Brevo bill SMS?

Brevo has no SMS plan. Its [help center](https://help.brevo.com/hc/en-us/articles/208717449) says you buy SMS credits, in packs of 100, and that they never expire. The Starter plan reads "SMS credits sold separately" on the [pricing page](https://www.brevo.com/fr/pricing/).

The cost of an SMS "varies based on the recipient's country" and the number of characters. The detail is calculated in the account, under My Plan > SMS & WhatsApp messages. [Brevo's SMS calculator](https://www.brevo.com/tools/ecommerce-tools/sms-whatsapp-cost-calculator/?lang=fr) states that its figures are estimates dated August 2026.

For Brevo's email costs, see our page [Brevo pricing, plans and limits in 2026](/en/email-marketing/brevo-pricing-plans-ecommerce/).

## How has Klaviyo billed SMS since July 2026?

Klaviyo changed its model. According to its [per-message pricing FAQ](https://help.klaviyo.com/hc/en-us/articles/52952739755931), starting July 13, 2026 mobile messaging moves from credits to per-message dollar rates. New accounts switch right away; existing paid accounts at their first billing date after August 13, 2026.

What stays: you buy a monthly plan upfront, with volume discounts (the bigger the plan, the lower the unit rate). Carrier fees are included in the rate. Unused spend doesn't roll over to the next month, according to the [article on the mobile messaging system](https://help.klaviyo.com/hc/en-us/articles/13502982552347).

The rate per country is shown under Settings > Billing. The old credit table, still published, counted 7 credits for an SMS to France; that is a legacy unit, with no dollar conversion on the page.

What is billed: campaigns and flows, including failed deliveries. What isn't: opt-in codes, STOP/HELP replies and skipped messages.

## How does Omnisend bill SMS?

[Omnisend's SMS pricing page](https://www.omnisend.com/sms-prices/) shows "starting at $0.007/SMS", noting that this starting rate applies to high-volume US sends and that the price varies by country and volume. The only priced grid published is for the United States. France is in the list of available countries, but its rate doesn't appear in the public text of the page.

The offer is for Pro plan users only, who add "Global SMS credits" to their subscription. Billing is in dollars: the page states that local-currency prices are estimates. For the rest of the offer, see our [Omnisend review and pricing](/en/email-marketing/omnisend-review-pricing/).

## Why does your SMS cost two or three times the listed price?

At Brevo as at Klaviyo, the billed unit is the segment, not the message. Klaviyo's formula: price per segment × number of segments × number of recipients.

The splitting rules are the same in both docs:

| Message content | 1 segment | Per segment when split |
| --- | --- | --- |
| Standard text (GSM-7) | 160 characters | 153 characters |
| With an emoji or special character (Unicode) | 70 characters | 67 characters |

Sources: [Klaviyo help](https://help.klaviyo.com/hc/en-us/articles/13502982552347) and [Brevo calculator](https://www.brevo.com/tools/ecommerce-tools/sms-whatsapp-cost-calculator/?lang=fr), checked on Nov 24, 2026.

Brevo's calculator gives the example of a 150-character message that becomes three segments as soon as it contains a Unicode character, and lists the typographic apostrophe (’) among the triggers. In French, where curly apostrophes often come in by copy-pasting from a word processor, this is the most common trap.

Example calculation from these rules: a 150-character campaign sent to 10,000 subscribers is 10,000 segments in standard text, and 30,000 segments with a single emoji. The bill triples for the same message.

## What sending rules apply in France?

**Hours.** The [Brevo help center](https://help.brevo.com/hc/en-us/articles/208717449) states for France: Monday to Saturday from 8 am to 10 pm, no marketing SMS on Sundays or public holidays. These restrictions target marketing SMS, not transactional SMS.

**Sender.** At Klaviyo, France is only available with an alphanumeric branded sender ID, according to the [SMS country list](https://help.klaviyo.com/hc/en-us/articles/4402914866843). Format: 3 to 11 characters, at least one letter, no special characters or punctuation, according to the [branded sender ID article](https://help.klaviyo.com/hc/en-us/articles/14953787622427).

**Unsubscribing.** A branded sender ID cannot receive texts: keywords (STOP, text-to-join) don't work, and Klaviyo states that recipients unsubscribe through the link included in the message. For the European Union, Klaviyo requires the organization's identification and an unsubscribe link or keyword, and recommends double opt-in.

**MMS.** Klaviyo states that MMS is not available in any European country for now.

## How to choose

- **You send few SMS, irregularly**: **Brevo**'s model (credits that never expire) avoids paying for an unused monthly plan.
- **You send every month and you're already on Klaviyo**: the monthly per-message plan makes sense, but size it tightly, unused spend is lost.
- **You're on Omnisend**: SMS requires the Pro plan; check the France estimate on the pricing page before committing.
- **In every case**: proofread your messages for emojis and curly apostrophes, and test the segment count before sending to your whole list.

To compare the tools on email, see also [Klaviyo vs Brevo](/en/email-marketing/klaviyo-vs-brevo/).

## Related reading

- [Brevo pricing, plans and limits in 2026 for e-commerce](/en/email-marketing/brevo-pricing-plans-ecommerce/)
- [Klaviyo vs Brevo: which one should you choose for ecommerce?](/en/email-marketing/klaviyo-vs-brevo/)
- [Omnisend review: pricing, features and alternatives](/en/email-marketing/omnisend-review-pricing/)
