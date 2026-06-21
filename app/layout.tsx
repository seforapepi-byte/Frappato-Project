import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Frappato Trail | Rete partner per turismo lento, vino e workation in Sicilia sud-orientale",
  description:
    "Entra in FRAPPATO TRAIL: la rete partner che trasforma il turismo lento in Sicilia sud-orientale in opportunità concrete per enti, cantine, ospitalità, bike service, Workation Station e aziende.",
  keywords: [
    "Frappato Trail",
    "turismo lento Sicilia sud-orientale",
    "cicloturismo Sicilia",
    "rete partner turismo Sicilia",
    "destination marketing Sicilia",
    "Cerasuolo di Vittoria turismo",
    "workation Sicilia",
    "workation station Sicilia",
    "remote working Sicilia",
    "lavorare da remoto in Sicilia",
    "coworking Sicilia sud-orientale",
    "digital nomad Sicilia",
    "corporate workation",
    "corporate workation passport",
    "welfare aziendale workation",
    "team retreat Sicilia",
    "temporary relocation Sicilia",
    "remote worker Sicilia",
    "workation friendly",
    "spazi workation Sicilia",
    "turismo esperienziale Ragusa",
    "circuito ciclopedonale Sicilia",
    "partner programma turismo"
  ],
  openGraph: {
    title: "FRAPPATO TRAIL | Entra nella rete partner",
    description:
      "Porta il tuo lavoro dentro una destinazione riconoscibile, prenotabile e vendibile nella Sicilia sud-orientale.",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/images/1.png", alt: "FRAPPATO TRAIL, rete territoriale della Sicilia sud-orientale" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
