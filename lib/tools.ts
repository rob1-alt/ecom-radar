// Annuaire des outils cités. Le logo vient du favicon officiel de l'éditeur.
export const TOOLS: Record<string, { domain: string; url: string }> = {
  "Judge.me": { domain: "judge.me", url: "https://judge.me" },
  "Avis Vérifiés": { domain: "avis-verifies.com", url: "https://www.avis-verifies.com" },
  Loox: { domain: "loox.io", url: "https://loox.io" },
  Okendo: { domain: "okendo.io", url: "https://okendo.io" },
  Trustpilot: { domain: "trustpilot.com", url: "https://www.trustpilot.com" },
  Yotpo: { domain: "yotpo.com", url: "https://www.yotpo.com" },
  Klaviyo: { domain: "klaviyo.com", url: "https://www.klaviyo.com" },
  Brevo: { domain: "brevo.com", url: "https://www.brevo.com" },
  Omnisend: { domain: "omnisend.com", url: "https://www.omnisend.com" },
  Splio: { domain: "splio.com", url: "https://splio.com" },
  Mailchimp: { domain: "mailchimp.com", url: "https://mailchimp.com" },
  Gorgias: { domain: "gorgias.com", url: "https://www.gorgias.com" },
  Loop: { domain: "loopreturns.com", url: "https://www.loopreturns.com" },
  ReturnGO: { domain: "returngo.ai", url: "https://returngo.ai" },
  Zendesk: { domain: "zendesk.com", url: "https://www.zendesk.com" },
  TrendTrack: { domain: "trendtrack.io", url: "https://www.trendtrack.io" },
  Minea: { domain: "minea.com", url: "https://www.minea.com" },
  "Koala Inspector": { domain: "koala-apps.io", url: "https://koala-apps.io" },
  Similarweb: { domain: "similarweb.com", url: "https://www.similarweb.com" },
  "Commerce Inspector": { domain: "commerceinspector.com", url: "https://www.commerceinspector.com" },
  Sendcloud: { domain: "sendcloud.com", url: "https://www.sendcloud.com" },
  Boxtal: { domain: "boxtal.com", url: "https://www.boxtal.com" },
  Shippingbo: { domain: "shippingbo.com", url: "https://www.shippingbo.com" },
  Cubyn: { domain: "cubyn.com", url: "https://www.cubyn.com" },
  Stripe: { domain: "stripe.com", url: "https://stripe.com" },
  Mollie: { domain: "mollie.com", url: "https://www.mollie.com" },
  PayPal: { domain: "paypal.com", url: "https://www.paypal.com" },
  Alma: { domain: "almapay.com", url: "https://almapay.com" },
  Klarna: { domain: "klarna.com", url: "https://www.klarna.com" },
  "Shopify Payments": { domain: "shopify.com", url: "https://www.shopify.com/payments" },
};

export function logoUrl(name: string) {
  const t = TOOLS[name];
  return t ? `https://www.google.com/s2/favicons?domain=${t.domain}&sz=128` : "";
}
