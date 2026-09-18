import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAYANG ID | Ekosistem Talenta Dalang Muda Salatiga",
  description: "Platform ekosistem talenta dalang muda untuk menemukan, mengenali, dan mengembangkan potensi seni pedalangan di Kota Salatiga.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "WAYANG ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f131d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${playfair.variable} ${jakarta.variable} font-body-md text-on-surface bg-background min-h-screen antialiased flex flex-col`}
      >
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}

