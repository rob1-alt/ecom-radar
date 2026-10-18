// Loader du premier chargement : les ondes du radar s'allument, puis un rideau de couleurs dévoile la page.
// Il ne s'affiche qu'une fois par session (voir le script inline dans layout.tsx) et jamais en mouvement réduit.
const WAVES = [
  ["M61.49 59.64A15 15 0 0 0 61.49 40.36L58.04 43.25A10.5 10.5 0 0 1 58.04 56.75Z", "M38.51 40.36A15 15 0 0 0 38.51 59.64L41.96 56.75A10.5 10.5 0 0 1 41.96 43.25Z"],
  ["M66.09 63.5A21 21 0 0 0 66.09 36.5L62.1 39.84A15.8 15.8 0 0 1 62.1 60.16Z", "M33.91 36.5A21 21 0 0 0 33.91 63.5L37.9 60.16A15.8 15.8 0 0 1 37.9 39.84Z"],
  ["M71.45 68.0A28 28 0 0 0 71.45 32.0L66.7 35.99A21.8 21.8 0 0 1 66.7 64.01Z", "M28.55 32.0A28 28 0 0 0 28.55 68.0L33.3 64.01A21.8 21.8 0 0 1 33.3 35.99Z"],
  ["M77.58 73.14A36 36 0 0 0 77.58 26.86L72.06 31.49A28.8 28.8 0 0 1 72.06 68.51Z", "M22.42 26.86A36 36 0 0 0 22.42 73.14L27.94 68.51A28.8 28.8 0 0 1 27.94 31.49Z"],
  ["M85.24 79.57A46 46 0 0 0 85.24 20.43L78.19 26.35A36.8 36.8 0 0 1 78.19 73.65Z", "M14.76 20.43A46 46 0 0 0 14.76 79.57L21.81 73.65A36.8 36.8 0 0 1 21.81 26.35Z"],
];

export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <span className="curtain c1" />
      <span className="curtain c2" />
      <span className="curtain c3" />
      <span className="curtain c4" />
      <div className="loader-ink">
        <svg viewBox="0 0 100 100" className="loader-logo">
          {WAVES.map((pair, i) => (
            <g key={i} className={`wave w${i + 1}`}>
              <path d={pair[0]} />
              <path d={pair[1]} />
            </g>
          ))}
          <circle cx="50" cy="50" r="7" className="loader-dot" />
        </svg>
        <div className="loader-word">
          {"radar".split("").map((l, i) => (
            <span key={i} style={{ animationDelay: `${0.35 + i * 0.05}s` }}>
              {l}
            </span>
          ))}
        </div>
        <div className="loader-scan">
          <i />
        </div>
      </div>
    </div>
  );
}
