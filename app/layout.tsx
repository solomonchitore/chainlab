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
  themeColor: "#ffffff",
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
          <header className="chainlab-header">
            <div className="chainlab-header-inner">
              <div className="header-controls">
                <ChainLabControls />
              </div>

              <span className="header-divider" aria-hidden="true" />

              <LanguageSelector />

              <span className="header-divider" aria-hidden="true" />

              <Link href="/" className="brand">
                [CHAINLAB]
              </Link>

              <nav className="main-nav" aria-label="Main navigation">
                <Link href="/">HOME</Link>
                <Link href="/learn">LEARN</Link>
                <Link href="/learn/blockchain">BLOCKCHAIN</Link>
                <Link href="/learn/solana">SOLANA</Link>
                <Link href="/learn/meme-coins">MEME COINS</Link>
                <Link href="/learn/security">SECURITY</Link>
              </nav>

              <div className="nav-actions">
                <button
                  type="button"
                  className="nav-search-button"
                  aria-label="Search ChainLab"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M16 16L21 21"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <span className="header-divider" aria-hidden="true" />

                <Link href="/login" className="nav-login-button">
                  Log In
                </Link>

                <Link href="/learn" className="nav-button">
                  START LEARNING <span aria-hidden="true">→</span>
                </Link>

                <DevicePreview />
              </div>
            </div>
          </header>

          <PageTransition>{children}</PageTransition>

          <footer className="chainlab-legal-links">
            <Link href="/extension">Chrome Extension</Link>
            <span aria-hidden="true">|</span>
            <Link href="/study-notes">Study Notes</Link>
            <span aria-hidden="true">|</span>
            <Link href="/achievements">Achievements</Link>
            <span aria-hidden="true">|</span>
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/legal/terms-of-service">Terms of Service</Link>
            <span aria-hidden="true">|</span>
            <Link href="/certificate">Certificate</Link>
          </footer>

          <MobileNavigation />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
