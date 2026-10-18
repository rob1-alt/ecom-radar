import localFont from "next/font/local";

export const display = localFont({ src: "../app/fonts/bricolage-grotesque-latin-wght-normal.woff2", weight: "200 800", variable: "--f-display", display: "optional", fallback: ["Arial Black", "system-ui", "sans-serif"] });
export const body = localFont({ src: "../app/fonts/geist-latin-wght-normal.woff2", weight: "100 900", variable: "--f-body", display: "optional", fallback: ["Helvetica Neue", "Arial", "sans-serif"] });
export const mono = localFont({ src: "../app/fonts/geist-mono-latin-wght-normal.woff2", weight: "100 900", variable: "--f-mono", preload: false, display: "optional", fallback: ["ui-monospace", "Menlo", "monospace"] });
