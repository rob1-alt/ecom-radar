"use client";
import { useState } from "react";
import { T, type Locale } from "@/lib/i18n";

// À brancher sur l'outil d'emailing (Brevo, Klaviyo…) : remplacer le setDone par un appel à son formulaire.
export default function Newsletter({ locale = "fr" }: { locale?: Locale }) {
  const t = T[locale];
  const [done, setDone] = useState(false);
  return (
    <div className="tile t-mint" id="newsletter">
      <div className="txt">
        <div className="kicker">
          <span>{t.newsletter}</span>
          {t.newsWhen}
        </div>
        <h3>{t.newsTitle}</h3>
      </div>
      {done ? (
        <div className="signup-ok">{t.subscribed}</div>
      ) : (
        <form
          className="signup"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label htmlFor="email" className="vh">
            {t.emailLabel}
          </label>
          <input id="email" type="email" required placeholder={t.emailPh} autoComplete="email" />
          <button className="btn" type="submit">
            {t.subscribe}
          </button>
        </form>
      )}
    </div>
  );
}
