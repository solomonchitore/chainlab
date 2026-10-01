"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StudyNote = {
  number: string;
  title: string;
  category: string;
  description: string;
  filename: string;
  topics: string[];
};

const studyNotes: StudyNote[] = [
  {
    number: "01",
    title: "Blockchain Fundamentals",
    category: "BLOCKCHAIN",
    description:
      "Learn how blockchains work, including blocks, transactions, nodes, consensus, cryptographic hashes, and the benefits and limitations of blockchain systems.",
    filename: "01_ChainLab_blockchain_fundamentals.pdf",
    topics: ["Blocks and transactions", "Consensus", "Decentralization"],
  },
  {
    number: "02",
    title: "Distributed Ledgers and Decentralization",
    category: "BLOCKCHAIN",
    description:
      "Explore distributed ledgers, trust models, governance, and the different dimensions of decentralization.",
    filename:
      "02_ChainLab_distributed_ledgers_and_decentralization.pdf",
    topics: ["Distributed ledgers", "Trust models", "Governance"],
  },
  {
    number: "03",
    title: "Cryptography for Blockchain",
    category: "BLOCKCHAIN",
    description:
      "Understand cryptographic hashes, public and private keys, digital signatures, Merkle trees, and wallet safety.",
    filename: "03_ChainLab_cryptography_for_blockchain.pdf",
    topics: ["Hash functions", "Digital signatures", "Merkle trees"],
  },
  {
    number: "04",
    title: "Smart Contracts and dApps",
    category: "BLOCKCHAIN",
    description:
      "Learn about smart contracts, decentralized application architecture, contract development, common vulnerabilities, and user safety.",
    filename: "04_ChainLab_smart_contracts_and_dapps.pdf",
    topics: ["Smart contracts", "dApp architecture", "Security"],
  },
  {
    number: "05",
    title: "Solana Fundamentals",
    category: "SOLANA",
    description:
      "Discover Solana's account model, programs, instructions, transactions, clusters, fees, and development environments.",
    filename: "05_ChainLab_solana_fundamentals.pdf",
    topics: ["Accounts and programs", "Transactions", "Clusters"],
  },
  {
    number: "06",
    title: "Solana Development Concepts",
    category: "SOLANA",
    description:
      "Study Solana program design, account validation, Anchor concepts, testing practices, and deployment preparation.",
    filename: "06_ChainLab_solana_development_concepts.pdf",
    topics: ["Program design", "Anchor", "Testing and deployment"],
  },
  {
    number: "07",
    title: "Meme Coins and Tokenomics",
    category: "MEME COINS",
    description:
      "Explore token supply, distribution, vesting, liquidity, market capitalization, token authorities, and common risks.",
    filename: "07_ChainLab_meme_coins_and_tokenomics.pdf",
    topics: ["Token supply", "Liquidity", "Risk assessment"],
  },
  {
    number: "08",
    title: "Crypto Wallets and Key Management",
    category: "SECURITY",
    description:
      "Learn about custodial and self-custody wallets, seed phrases, transaction signing, operational security, and recovery planning.",
    filename: "08_ChainLab_crypto_wallets_and_key_management.pdf",
    topics: ["Wallet types", "Key protection", "Recovery planning"],
  },
  {
    number: "09",
    title: "Blockchain Security and Scams",
    category: "SECURITY",
    description:
      "Identify common scams and technical threats, build a threat model, and learn practical defensive and incident-response habits.",
    filename: "09_ChainLab_blockchain_security_and_scams.pdf",
    topics: ["Threat modeling", "Phishing", "Incident response"],
  },
  {
    number: "10",
    title: "Blockchain Research and Due Diligence",
    category: "SECURITY",
    description:
      "Learn how to research blockchain projects, verify claims, inspect on-chain evidence, understand audits, and document risks.",
    filename: "10_ChainLab_blockchain_research_and_due_diligence.pdf",
    topics: ["Project research", "On-chain evidence", "Audit reviews"],
  },
];

export default function StudyNotesPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const readTheme = () => {
      const saved = localStorage.getItem("chainlab-theme");
      const htmlTheme = document.documentElement.dataset.theme;
      const bodyTheme = document.body.dataset.theme;

      const isLight =
        saved === "light" ||
        htmlTheme === "light" ||
        bodyTheme === "light";

      setTheme(isLight ? "light" : "dark");
    };

    readTheme();

    const observer = new MutationObserver(readTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    window.addEventListener("storage", readTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", readTheme);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        /* =========================================================
           CHAINLAB STUDY NOTES
           LIGHT + DARK MODE
        ========================================================= */

        .study-notes-page {
          min-height: 100vh;
          width: 100%;
          padding: 48px 24px 80px;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "SF Pro Display",
            "SF Pro Text",
            "Helvetica Neue",
            Inter,
            Arial,
            sans-serif;
          transition:
            background-color 0.25s ease,
            color 0.25s ease;
        }

        /* =========================================================
           DARK MODE — BLACK PAGE + VISIBLE CONTENT
        ========================================================= */

        html:has(.study-notes-theme-dark),
        body:has(.study-notes-theme-dark) {
          background: #000000 !important;
        }

        .study-notes-theme-dark {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(53, 71, 79, 0.34),
              transparent 34%
            ),
            #000000 !important;
          color: #ffffff !important;
        }

        /* =========================================================
           LIGHT MODE
        ========================================================= */

        html:has(.study-notes-theme-light),
        body:has(.study-notes-theme-light) {
          background: #f3f4f6 !important;
        }

        .study-notes-theme-light {
          background: #f3f4f6 !important;
          color: #000000 !important;
        }

        /* =========================================================
           MAIN CONTAINER
        ========================================================= */

        .study-notes-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .study-notes-hero {
          width: 100%;
          padding: 56px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          margin-bottom: 22px;
        }

        .study-notes-theme-dark .study-notes-hero {
          background:
            linear-gradient(
              145deg,
              #1b252c 0%,
              #11191f 52%,
              #0a0f13 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .study-notes-theme-light .study-notes-hero {
          background: #ffffff;
          border: 1px solid #d9dee5;
          box-shadow: 0 25px 70px rgba(15, 23, 42, 0.09);
        }

        .study-notes-hero::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -150px;
          top: -190px;
          border-radius: 50%;
          background: rgba(234, 191, 106, 0.08);
          pointer-events: none;
        }

        .study-notes-hero-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
        }

        .study-notes-eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .study-notes-theme-dark .study-notes-eyebrow {
          color: #f0c36c !important;
        }

        .study-notes-theme-light .study-notes-eyebrow {
          color: #85631f !important;
        }

        .study-notes-hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 850;
        }

        .study-notes-theme-dark .study-notes-hero h1 {
          color: #ffffff !important;
        }

        .study-notes-theme-light .study-notes-hero h1 {
          color: #000000 !important;
        }

        .study-notes-hero h1 span {
          font-weight: 500;
        }

        .study-notes-theme-dark .study-notes-hero h1 span {
          color: #f0c36c !important;
        }

        .study-notes-theme-light .study-notes-hero h1 span {
          color: #85631f !important;
        }

        .study-notes-hero p {
          max-width: 720px;
          margin: 22px 0 0;
          font-size: 15px;
          line-height: 1.75;
        }

        .study-notes-theme-dark .study-notes-hero p {
          color: rgba(255, 255, 255, 0.72) !important;
        }

        .study-notes-theme-light .study-notes-hero p {
          color: #374151 !important;
        }

        /* =========================================================
           HERO BUTTONS
        ========================================================= */

        .study-notes-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 27px;
        }

        .study-notes-primary-button,
        .study-notes-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 45px;
          padding: 0 18px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.04em;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease,
            background 0.2s ease;
        }

        .study-notes-primary-button:hover,
        .study-notes-secondary-button:hover {
          transform: translateY(-2px);
        }

        .study-notes-theme-dark .study-notes-primary-button {
          background: #ffffff !important;
          color: #000000 !important;
        }

        .study-notes-theme-light .study-notes-primary-button {
          background: #000000 !important;
          color: #ffffff !important;
        }

        .study-notes-theme-dark .study-notes-secondary-button {
          background: #35474f !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .study-notes-theme-light .study-notes-secondary-button {
          background: #ffffff !important;
          color: #000000 !important;
          border: 1px solid #cbd5e1;
        }

        /* =========================================================
           STATS
        ========================================================= */

        .study-notes-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 30px;
          max-width: 720px;
        }

        .study-notes-stat {
          padding: 17px;
          border-radius: 13px;
        }

        .study-notes-theme-dark .study-notes-stat {
          background: #35474f !important;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .study-notes-theme-light .study-notes-stat {
          background: #f8fafc !important;
          border: 1px solid #e2e8f0;
        }

        .study-notes-stat strong {
          display: block;
          font-size: 25px;
          line-height: 1;
        }

        .study-notes-theme-dark .study-notes-stat strong {
          color: #ffffff !important;
        }

        .study-notes-theme-light .study-notes-stat strong {
          color: #000000 !important;
        }

        .study-notes-stat span {
          display: block;
          margin-top: 7px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .study-notes-theme-dark .study-notes-stat span {
          color: rgba(255, 255, 255, 0.62) !important;
        }

        .study-notes-theme-light .study-notes-stat span {
          color: #64748b !important;
        }

        /* =========================================================
           LIBRARY SECTION
        ========================================================= */

        .study-notes-library {
          padding: 32px;
          border-radius: 24px;
        }

        .study-notes-theme-dark .study-notes-library {
          background: #0c1115 !important;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .study-notes-theme-light .study-notes-library {
          background: #ffffff !important;
          border: 1px solid #d9dee5;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.07);
        }

        .study-notes-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .study-notes-section-heading h2 {
          margin: 3px 0 0;
          font-size: clamp(25px, 4vw, 38px);
          letter-spacing: -0.04em;
        }

        .study-notes-theme-dark .study-notes-section-heading h2 {
          color: #ffffff !important;
        }

        .study-notes-theme-light .study-notes-section-heading h2 {
          color: #000000 !important;
        }

        .study-notes-section-heading p {
          margin: 10px 0 0;
          font-size: 12px;
          line-height: 1.6;
        }

        .study-notes-theme-dark .study-notes-section-heading p {
          color: rgba(255, 255, 255, 0.62) !important;
        }

        .study-notes-theme-light .study-notes-section-heading p {
          color: #64748b !important;
        }

        .study-notes-count {
          padding: 9px 12px;
          border-radius: 999px;
          white-space: nowrap;
          font-size: 9px;
          font-weight: 900;
        }

        .study-notes-theme-dark .study-notes-count {
          color: #f0c36c !important;
          background: rgba(240, 195, 108, 0.08);
          border: 1px solid rgba(240, 195, 108, 0.25);
        }

        .study-notes-theme-light .study-notes-count {
          color: #6f521b !important;
          background: #fff8e7;
          border: 1px solid #ead39c;
        }

        /* =========================================================
           RESOURCE GRID
        ========================================================= */

        .study-notes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .study-notes-card {
          min-width: 0;
          padding: 22px;
          border-radius: 17px;
          display: flex;
          flex-direction: column;
          min-height: 320px;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .study-notes-card:hover {
          transform: translateY(-3px);
        }

        .study-notes-theme-dark .study-notes-card {
          background: #35474f !important;
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.24);
        }

        .study-notes-theme-dark .study-notes-card:hover {
          border-color: rgba(255, 255, 255, 0.48);
        }

        .study-notes-theme-light .study-notes-card {
          background: #ffffff !important;
          border: 1px solid #dce2e8;
          box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
        }

        .study-notes-theme-light .study-notes-card:hover {
          border-color: #9ca3af;
        }

        .study-notes-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .study-notes-number {
          font-size: 28px;
          font-weight: 850;
          letter-spacing: -0.05em;
        }

        .study-notes-theme-dark .study-notes-number {
          color: rgba(255, 255, 255, 0.92) !important;
        }

        .study-notes-theme-light .study-notes-number {
          color: #000000 !important;
        }

        .study-notes-category {
          padding: 7px 9px;
          border-radius: 999px;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.07em;
        }

        .study-notes-theme-dark .study-notes-category {
          color: #f0c36c !important;
          background: rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(240, 195, 108, 0.3);
        }

        .study-notes-theme-light .study-notes-category {
          color: #6f521b !important;
          background: #fff8e7;
          border: 1px solid #ead39c;
        }

        .study-notes-card h3 {
          margin: 24px 0 10px;
          font-size: 19px;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .study-notes-theme-dark .study-notes-card h3 {
          color: #ffffff !important;
        }

        .study-notes-theme-light .study-notes-card h3 {
          color: #000000 !important;
        }

        .study-notes-description {
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
        }

        .study-notes-theme-dark .study-notes-description {
          color: rgba(255, 255, 255, 0.73) !important;
        }

        .study-notes-theme-light .study-notes-description {
          color: #4b5563 !important;
        }

        .study-notes-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 18px;
        }

        .study-notes-topics span {
          padding: 7px 9px;
          border-radius: 7px;
          font-size: 8px;
          font-weight: 800;
        }

        .study-notes-theme-dark .study-notes-topics span {
          color: #ffffff !important;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.13);
        }

        .study-notes-theme-light .study-notes-topics span {
          color: #111827 !important;
          background: #f1f5f9;
          border: 1px solid #dbe2ea;
        }

        .study-notes-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 22px;
        }

        .study-notes-file-type {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .study-notes-theme-dark .study-notes-file-type {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .study-notes-theme-light .study-notes-file-type {
          color: #64748b !important;
        }

        .study-notes-download-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 13px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .study-notes-download-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .study-notes-theme-dark .study-notes-download-button {
          background: #ffffff !important;
          color: #000000 !important;
        }

        .study-notes-theme-light .study-notes-download-button {
          background: #000000 !important;
          color: #ffffff !important;
        }

        /* =========================================================
           BOTTOM CTA
        ========================================================= */

        .study-notes-bottom-cta {
          margin-top: 22px;
          padding: 48px;
          border-radius: 24px;
          text-align: center;
        }

        .study-notes-theme-dark .study-notes-bottom-cta {
          background: #35474f !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .study-notes-theme-light .study-notes-bottom-cta {
          background: #ffffff !important;
          border: 1px solid #d9dee5;
          box-shadow: 0 20px 55px rgba(15, 23, 42, 0.07);
        }

        .study-notes-bottom-cta h2 {
          margin: 4px auto 12px;
          font-size: clamp(27px, 4vw, 44px);
          letter-spacing: -0.045em;
        }

        .study-notes-theme-dark .study-notes-bottom-cta h2 {
          color: #ffffff !important;
        }

        .study-notes-theme-light .study-notes-bottom-cta h2 {
          color: #000000 !important;
        }

        .study-notes-bottom-cta p {
          max-width: 600px;
          margin: 0 auto 22px;
          font-size: 12px;
          line-height: 1.7;
        }

        .study-notes-theme-dark .study-notes-bottom-cta p {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .study-notes-theme-light .study-notes-bottom-cta p {
          color: #4b5563 !important;
        }

        .study-notes-bottom-cta .study-notes-primary-button {
          display: inline-flex;
        }


        /* =========================================================
           DARK MODE — FORCE EVERY TEXT ELEMENT TO WHITE
        ========================================================= */

        .study-notes-theme-dark,
        .study-notes-theme-dark * {
          color: #ffffff !important;
        }

        .study-notes-theme-dark .study-notes-primary-button,
        .study-notes-theme-dark .study-notes-secondary-button,
        .study-notes-theme-dark .study-notes-download-button {
          color: #ffffff !important;
          background: #35474f !important;
          border: 1px solid rgba(255, 255, 255, 0.35) !important;
        }

        .study-notes-theme-dark .study-notes-primary-button:hover,
        .study-notes-theme-dark .study-notes-secondary-button:hover,
        .study-notes-theme-dark .study-notes-download-button:hover {
          color: #ffffff !important;
          background: #435862 !important;
        }

        .study-notes-theme-dark .study-notes-category,
        .study-notes-theme-dark .study-notes-count {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
        }

        .study-notes-theme-dark .study-notes-hero h1 span {
          color: #ffffff !important;
        }

        .study-notes-theme-dark .study-notes-eyebrow,
        .study-notes-theme-dark .study-notes-number,
        .study-notes-theme-dark .study-notes-stat strong,
        .study-notes-theme-dark .study-notes-stat span,
        .study-notes-theme-dark .study-notes-section-heading h2,
        .study-notes-theme-dark .study-notes-section-heading p,
        .study-notes-theme-dark .study-notes-card h3,
        .study-notes-theme-dark .study-notes-description,
        .study-notes-theme-dark .study-notes-topics span,
        .study-notes-theme-dark .study-notes-file-type,
        .study-notes-theme-dark .study-notes-bottom-cta h2,
        .study-notes-theme-dark .study-notes-bottom-cta p {
          color: #ffffff !important;
        }

        .study-notes-theme-dark .study-notes-topics span {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        .study-notes-theme-dark a {
          color: #ffffff !important;
        }


        /* =========================================================
           PURE BLACK DARK MODE
           Remove all slate/grey backgrounds.
        ========================================================= */

        html:has(.study-notes-theme-dark),
        body:has(.study-notes-theme-dark),
        .study-notes-theme-dark,
        .study-notes-theme-dark .study-notes-container,
        .study-notes-theme-dark .study-notes-hero,
        .study-notes-theme-dark .study-notes-library,
        .study-notes-theme-dark .study-notes-card,
        .study-notes-theme-dark .study-notes-stat,
        .study-notes-theme-dark .study-notes-bottom-cta {
          background: #000000 !important;
          background-image: none !important;
        }

        .study-notes-theme-dark .study-notes-hero::after {
          display: none !important;
        }

        .study-notes-theme-dark .study-notes-card,
        .study-notes-theme-dark .study-notes-stat,
        .study-notes-theme-dark .study-notes-library,
        .study-notes-theme-dark .study-notes-hero,
        .study-notes-theme-dark .study-notes-bottom-cta {
          border-color: rgba(255, 255, 255, 0.18) !important;
          box-shadow: none !important;
        }

        .study-notes-theme-dark .study-notes-secondary-button,
        .study-notes-theme-dark .study-notes-primary-button,
        .study-notes-theme-dark .study-notes-download-button {
          background: #000000 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.35) !important;
        }

        .study-notes-theme-dark .study-notes-topics span {
          background: #000000 !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.22) !important;
        }

        .study-notes-theme-dark .study-notes-category,
        .study-notes-theme-dark .study-notes-count {
          background: #000000 !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
        }

        .study-notes-theme-dark .study-notes-theme-dark {
          background: #000000 !important;
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 850px) {
          .study-notes-page {
            padding: 25px 14px 55px;
          }

          .study-notes-hero {
            padding: 35px 25px;
          }

          .study-notes-library {
            padding: 24px 18px;
          }

          .study-notes-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .study-notes-page {
            padding: 15px 9px 40px;
          }

          .study-notes-hero,
          .study-notes-library,
          .study-notes-bottom-cta {
            border-radius: 17px;
          }

          .study-notes-hero {
            padding: 28px 18px;
          }

          .study-notes-stats {
            grid-template-columns: 1fr;
          }

          .study-notes-section-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .study-notes-card-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .study-notes-download-button {
            width: 100%;
          }

          .study-notes-bottom-cta {
            padding: 32px 18px;
          }
        }
      `}</style>

      <main
        className={`study-notes-page study-notes-theme-${theme}`}
      >
        <div className="study-notes-container">
          {/* =====================================================
              HERO
          ===================================================== */}

          <section className="study-notes-hero">
            <div className="study-notes-hero-content">
              <span className="study-notes-eyebrow">
                CHAINLAB LEARNING RESOURCES
              </span>

              <h1>
                Study Notes{" "}
                <span>&amp; Learning Guides</span>
              </h1>

              <p>
                Build your blockchain knowledge with free downloadable
                study materials. Learn the fundamentals, explore Solana,
                understand tokenomics, and develop safer Web3 habits.
              </p>

              <div className="study-notes-hero-actions">
                <a
                  href="#available-notes"
                  className="study-notes-primary-button"
                >
                  Explore Study Notes
                  <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/learn"
                  className="study-notes-secondary-button"
                >
                  Explore Learning Areas
                </Link>
              </div>

              <div className="study-notes-stats">
                <div className="study-notes-stat">
                  <strong>10</strong>
                  <span>PDF resources</span>
                </div>

                <div className="study-notes-stat">
                  <strong>4</strong>
                  <span>Learning categories</span>
                </div>

                <div className="study-notes-stat">
                  <strong>Free</strong>
                  <span>Learning materials</span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              RESOURCE LIBRARY
          ===================================================== */}

          <section
            id="available-notes"
            className="study-notes-library"
            aria-labelledby="study-notes-heading"
          >
            <div className="study-notes-section-heading">
              <div>
                <span className="study-notes-eyebrow">
                  THE RESOURCE LIBRARY
                </span>

                <h2 id="study-notes-heading">
                  Available Study Materials
                </h2>

                <p>
                  Choose a guide to start learning or download it
                  for later revision.
                </p>
              </div>

              <span className="study-notes-count">
                {studyNotes.length} RESOURCES
              </span>
            </div>

            <div className="study-notes-grid">
              {studyNotes.map((note) => (
                <article
                  className="study-notes-card"
                  key={note.number}
                >
                  <div className="study-notes-card-top">
                    <span className="study-notes-number">
                      {note.number}
                    </span>

                    <span className="study-notes-category">
                      {note.category}
                    </span>
                  </div>

                  <h3>{note.title}</h3>

                  <p className="study-notes-description">
                    {note.description}
                  </p>

                  <div className="study-notes-topics">
                    {note.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>

                  <div className="study-notes-card-footer">
                    <span className="study-notes-file-type">
                      PDF RESOURCE
                    </span>

                    <a
                      className="study-notes-download-button"
                      href={`/study-notes/${note.filename}`}
                      download
                      aria-label={`Download ${note.title} PDF`}
                    >
                      Download PDF
                      <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =====================================================
              BOTTOM CTA
          ===================================================== */}

          <section className="study-notes-bottom-cta">
            <span className="study-notes-eyebrow">
              KEEP LEARNING
            </span>

            <h2>
              Your Web3 learning journey starts here.
            </h2>

            <p>
              Explore the ChainLab learning areas to continue
              building your understanding of blockchain technology.
            </p>

            <Link
              href="/learn"
              className="study-notes-primary-button"
            >
              Start Learning
              <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}