import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamal81684.github.io"),
  title: {
    default: "Kamal Kumari — Full-Stack & AI Engineer",
    template: "%s | Kamal Kumari",
  },
  description:
    "Kamal Kumari — full-stack and AI engineer at IIT (BHU). Real-time collaborative apps, secure backends and LLM pipelines; Codeforces Specialist and CodeChef 3-star.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Kamal Kumari — Full-Stack & AI Engineer",
    description: "Full-stack web apps, AI pipelines and competitive programming.",
    url: "https://kamal81684.github.io",
    type: "website",
    images: ["/kamal.jpg"],
  },
};

// Runs before paint to apply the saved/preferred theme and avoid a flash.
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
