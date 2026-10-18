import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kamal81684.github.io"),
  title: {
    default: "Kamal Kumari — Full-Stack & AI Engineer",
    template: "%s | Kamal Kumari",
  },
  description:
    "Kamal Kumari — full-stack and AI engineer at IIT (BHU). Real-time collaborative apps, secure backends and LLM pipelines; Codeforces Specialist and CodeChef 3-star.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kamal Kumari — Full-Stack & AI Engineer",
    description: "Full-stack web apps, AI pipelines and competitive programming.",
    url: "https://kamal81684.github.io",
    type: "website",
    images: ["/kamal.jpg"],
  },
};

// Browser chrome tint matches the page background.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0EEE9" },
    { media: "(prefers-color-scheme: dark)", color: "#141311" },
  ],
};

// Runs before paint: saved choice, else the system preference (light by default).
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
