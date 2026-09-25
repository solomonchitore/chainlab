import type { Metadata, Viewport } from "next";

import Link from "next/link";

import "./globals.css";

import ChainLabControls from "@/components/ChainLabControls";
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider } from "@/components/LanguageProvider";
import MobileNavigation from "@/components/MobileNavigation";
import CookieConsent from "@/components/CookieConsent";
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

  authors: [{ name: "Birthday Messaging" }],
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
        <LanguageProvider>
          {/* FIXED TOP TOOLBAR */}
          <div className="chainlab-utility-bar">
            <div className="chainlab-utility-inner">
              {/* FONT SIZE, THEME, AND LANGUAGE CONTROLS */}
              <div className="chainlab-toolbar-center">
                <ChainLabControls />
                <LanguageSelector />
              </div>

              {/* SHARED CHAINLAB NAVIGATION */}
              <header className="site-header">
                <div className="nav-inner">
                  <Link href="/" className="brand">
                    [CHAINLAB]
                  </Link>

                  <nav
                    className="main-nav"
                    aria-label="Main navigation"
                  >
                    <Link href="/learn/blockchain">
                      BLOCKCHAIN
                    </Link>

                    <Link href="/learn/solana">
                      SOLANA
                    </Link>

                    <Link href="/learn/meme-coins">
                      MEME COINS
                    </Link>

                    <Link href="/learn/security">
                      SECURITY
                    </Link>
                  </nav>

                  <Link href="/learn" className="nav-button">
                    START LEARNING <span>→</span>
                  </Link>
                </div>
              </header>

              {/* DEVICE BUTTON */}
              <div className="chainlab-toolbar-right">
                <DevicePreview />
              </div>
            </div>
          </div>

          {/* WEBSITE CONTENT */}
          <PageTransition>{children}</PageTransition>

          {/* GLOBAL FOOTER LINKS — SINGLE SITE-WIDE ROW */}
          <footer className="chainlab-legal-links">
            <Link href="/extension">Chrome Extension</Link>
            <span aria-hidden="true">|</span>

            <Link href="/study-notes">Study Notes</Link>
            <span aria-hidden="true">|</span>

            <Link href="/achievements">Achievements</Link>
            <span aria-hidden="true">|</span>

            <Link href="/legal/privacy-policy">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>

            <Link href="/legal/terms-of-service">
              Terms of Service
            </Link>
            <span aria-hidden="true">|</span>

            <Link href="/certificate">
              Certificate
            </Link>
          </footer>

          {/* GLOBAL COMPONENTS */}
          <MobileNavigation />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
