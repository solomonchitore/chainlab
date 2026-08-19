import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAINLAB — Web3 Education",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}