"use client";
import { useState } from "react";

// À brancher sur l'outil d'emailing (Brevo, Klaviyo…) : remplacer le setDone par un appel à son formulaire.
export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <div className="tile t-mint" id="newsletter">
      <div className="txt">
        <div className="kicker">
          <span>Newsletter</span>Le 1er du mois
        </div>
        <h3>Le baromètre IA, directement dans ta boîte mail</h3>
      </div>
      {done ? (
        <div className="signup-ok">C'est noté. Prochain baromètre le 1er du mois.</div>
      ) : (
        <form
          className="signup"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label htmlFor="email" className="vh">
            Adresse email
          </label>
          <input id="email" type="email" required placeholder="toi@taboutique.fr" autoComplete="email" />
          <button className="btn" type="submit">
            S'abonner
          </button>
        </form>
      )}
    </div>
  );
}
