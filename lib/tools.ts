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
};

export function logoUrl(name: string) {
  const t = TOOLS[name];
  return t ? `https://www.google.com/s2/favicons?domain=${t.domain}&sz=128` : "";
}
