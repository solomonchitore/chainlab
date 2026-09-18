import type { Metadata, Viewport } from "next";

import "./globals.css";

import ChainLabControls from "@/components/ChainLabControls";
import MobileNavigation from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
import ReadingProgress from "@/components/ReadingProgress";
import PageTransition from "@/components/PageTransition";
import DevicePreview from "@/components/DevicePreview";

export const metadata: Metadata = {
  title: {
    default: "CHAINLAB — Web3 Education",
    template: "%s | CHAINLAB",
  },

  description:
    "CHAINLAB is a free educational platform for learning blockchain, Solana, meme coins, tokenomics, and Web3 security.",

  keywords: [
    "blockchain",
    "Solana",
    "Web3",
    "meme coins",
    "tokenomics",
    "crypto security",
    "blockchain education",
    "Web3 education",
    "Solana education",
    "blockchain learning",
  ],

  authors: [
    {
      name: "Birthday Messaging",
    },
  ],

  creator: "Birthday Messaging",
  publisher: "Birthday Messaging",

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "CHAINLAB",
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* PAGE TRANSITIONS */}
        <PageTransition>
          {children}
        </PageTransition>

        {/* GLOBAL READING PROGRESS */}
        <ReadingProgress />

        {/* GLOBAL MOBILE NAVIGATION */}
        <MobileNavigation />

        {/* GLOBAL ACCESSIBILITY / CHAT CONTROLS */}
        <ChainLabControls />

        {/* DEVICE PREVIEW */}
        <DevicePreview />

        {/* GLOBAL COOKIE CONSENT */}
        <CookieConsent />

      </body>
    </html>
  );
}