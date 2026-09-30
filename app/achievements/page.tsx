"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ModuleProgress = {
  completed: number;
  total: number;
};

type Progress = {
  blockchain: ModuleProgress;
  solana: ModuleProgress;
  memeCoins: ModuleProgress;
  security: ModuleProgress;
};

const initialProgress: Progress = {
  blockchain: { completed: 0, total: 8 },
  solana: { completed: 0, total: 8 },
  memeCoins: { completed: 0, total: 7 },
  security: { completed: 0, total: 7 },
};

const badges = [
  {
    id: "first-step",
    icon: "🌱",
    name: "FIRST STEP",
    description: "Complete your first learning section.",
    requirement: "Complete at least one section in any module.",
  },
  {
    id: "blockchain-explorer",
    icon: "⛓️",
    name: "BLOCKCHAIN EXPLORER",
    description: "Complete the Blockchain learning module.",
    requirement: "Complete all 8 Blockchain sections.",
  },
  {
    id: "solana-learner",
    icon: "☀️",
    name: "SOLANA LEARNER",
    description: "Complete the Solana learning module.",
    requirement: "Complete all 8 Solana sections.",
  },
  {
    id: "tokenomics-explorer",
    icon: "🪙",
    name: "TOKENOMICS EXPLORER",
    description: "Complete the Meme Coins learning module.",
    requirement: "Complete all 7 Meme Coins sections.",
  },
  {
    id: "security-guardian",
    icon: "🛡️",
    name: "SECURITY GUARDIAN",
    description: "Complete the Web3 Security learning module.",
    requirement: "Complete all 7 Security sections.",
  },
  {
    id: "chainlab-graduate",
    icon: "🎓",
    name: "CHAINLAB GRADUATE",
    description: "Complete all four ChainLab learning modules.",
    requirement: "Complete all 30 learning sections.",
  },
];

export default function AchievementsPage() {
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Follow the existing ChainLab theme controller.
  useEffect(() => {
    const readTheme = () => {
      const saved = localStorage.getItem("chainlab-theme");
      const htmlTheme = document.documentElement.dataset.theme;
      const bodyTheme = document.body.dataset.theme;

      setTheme(
        saved === "light" ||
        htmlTheme === "light" ||
        bodyTheme === "light"
          ? "light"
          : "dark"
      );
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

  useEffect(() => {
    function readProgress() {
      try {
        const readArray = (key: string): string[] => {
          const saved = localStorage.getItem(key);

          if (!saved) {
            return [];
          }

          const parsed: unknown = JSON.parse(saved);

          return Array.isArray(parsed)
            ? parsed.filter(
                (item): item is string => typeof item === "string"
              )
            : [];
        };

        const blockchain = readArray(
          "chainlab-blockchain-progress"
        );

        const solana = readArray(
          "chainlab-solana-progress"
        );

        const memeCoins = readArray(
          "chainlab-meme-coins-progress"
        );

        const security = readArray(
          "chainlab-security-progress"
        );

        setProgress({
          blockchain: {
            completed: Math.min(blockchain.length, 8),
            total: 8,
          },
          solana: {
            completed: Math.min(solana.length, 8),
            total: 8,
          },
          memeCoins: {
            completed: Math.min(memeCoins.length, 7),
            total: 7,
          },
          security: {
            completed: Math.min(security.length, 7),
            total: 7,
          },
        });
      } catch (error) {
        console.error(
          "Unable to read ChainLab learning progress:",
          error
        );
      }

      setLoaded(true);
    }

    readProgress();

    // Refresh achievements when the page becomes active again.
    window.addEventListener("focus", readProgress);

    return () => {
      window.removeEventListener("focus", readProgress);
    };
  }, []);

  const totalCompleted =
    progress.blockchain.completed +
    progress.solana.completed +
    progress.memeCoins.completed +
    progress.security.completed;

  const totalSections =
    progress.blockchain.total +
    progress.solana.total +
    progress.memeCoins.total +
    progress.security.total;

  const overallPercentage = Math.round(
    (totalCompleted / totalSections) * 100
  );

  const earnedBadgeIds = new Set<string>();

  if (totalCompleted >= 1) {
    earnedBadgeIds.add("first-step");
  }

  if (
    progress.blockchain.completed ===
    progress.blockchain.total
  ) {
    earnedBadgeIds.add("blockchain-explorer");
  }

  if (
    progress.solana.completed ===
    progress.solana.total
  ) {
    earnedBadgeIds.add("solana-learner");
  }

  if (
    progress.memeCoins.completed ===
    progress.memeCoins.total
  ) {
    earnedBadgeIds.add("tokenomics-explorer");
  }

  if (
    progress.security.completed ===
    progress.security.total
  ) {
    earnedBadgeIds.add("security-guardian");
  }

  if (totalCompleted === totalSections) {
    earnedBadgeIds.add("chainlab-graduate");
  }

  const earnedCount = earnedBadgeIds.size;

  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        .achievements-page {
          min-height: 100vh;
          width: 100%;
          padding: 42px 20px 64px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display",
            "SF Pro Text", "Helvetica Neue", Inter, Arial, sans-serif;
        }

        html:has(.achievements-page.achievements-theme-dark),
        body:has(.achievements-page.achievements-theme-dark) {
          background: #000 !important;
        }

        html:has(.achievements-page.achievements-theme-light),
        body:has(.achievements-page.achievements-theme-light) {
          background: #f3f4f6 !important;
        }

        .achievements-page.achievements-theme-dark {
          background: radial-gradient(circle at 50% 0%, rgba(45,55,72,.28), transparent 35%), #000 !important;
          color: #fff !important;
        }

        .achievements-page.achievements-theme-light {
          background: #f3f4f6 !important;
          color: #000 !important;
        }

        .achievements-shell {
          width: min(1120px, 100%);
          margin: 0 auto;
          padding: 34px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }

        .achievements-theme-dark .achievements-shell {
          background: linear-gradient(145deg, #141b22, #070b0f);
          border: 1px solid rgba(255,255,255,.17);
          box-shadow: 0 30px 90px rgba(0,0,0,.58), 0 0 0 1px rgba(255,255,255,.025) inset;
        }

        .achievements-theme-light .achievements-shell {
          background: #fff;
          border: 1px solid #d9dde3;
          box-shadow: 0 24px 70px rgba(15,23,42,.10);
        }

        .achievements-hero { padding: 8px 2px 28px; position: relative; z-index: 1; }

        .achievements-eyebrow {
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .achievements-theme-dark .achievements-eyebrow { color: #f0c36c !important; }
        .achievements-theme-light .achievements-eyebrow { color: #8a641d !important; }

        .achievements-hero h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(34px,5vw,58px);
          line-height: .98;
          letter-spacing: -.055em;
          font-weight: 850;
        }

        .achievements-theme-dark .achievements-hero h1 { color: #fff !important; }
        .achievements-theme-light .achievements-hero h1 { color: #000 !important; }

        .achievements-hero h1 span { font-weight: 500; }
        .achievements-theme-dark .achievements-hero h1 span { color: #f0c36c !important; }
        .achievements-theme-light .achievements-hero h1 span { color: #8a641d !important; }

        .achievements-hero > p {
          max-width: 680px;
          margin: 17px 0 0;
          font-size: 14px;
          line-height: 1.65;
        }

        .achievements-theme-dark .achievements-hero > p { color: rgba(255,255,255,.65) !important; }
        .achievements-theme-light .achievements-hero > p { color: #4b5563 !important; }

        .achievement-summary {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 24px;
        }

        .achievement-summary-card {
          padding: 17px 18px;
          border-radius: 14px;
        }

        .achievements-theme-dark .achievement-summary-card {
          background: #111820 !important;
          border: 1px solid rgba(255,255,255,.11);
        }

        .achievements-theme-light .achievement-summary-card {
          background: #f8fafc !important;
          border: 1px solid #e2e8f0;
        }

        .summary-label {
          display: block;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .achievements-theme-dark .summary-label { color: rgba(255,255,255,.52) !important; }
        .achievements-theme-light .summary-label { color: #64748b !important; }

        .achievement-summary-card strong {
          display: block;
          margin-top: 8px;
          font-size: 27px;
          line-height: 1;
        }

        .achievements-theme-dark .achievement-summary-card strong { color: #fff !important; }
        .achievements-theme-light .achievement-summary-card strong { color: #000 !important; }

        .achievement-summary-card strong span { font-size: 14px; opacity: .45; }

        .achievement-progress-track {
          height: 8px;
          margin-top: 14px;
          border-radius: 999px;
          overflow: hidden;
        }

        .achievements-theme-dark .achievement-progress-track { background: #2b333c !important; }
        .achievements-theme-light .achievement-progress-track { background: #e2e8f0 !important; }

        .achievement-progress-fill {
          height: 100%;
          border-radius: inherit;
          transition: width .45s ease;
        }

        .achievements-theme-dark .achievement-progress-fill {
          background: linear-gradient(90deg,#e7ad45,#f6d58d) !important;
        }

        .achievements-theme-light .achievement-progress-fill { background: #111 !important; }

        .achievement-modules,
        .achievement-section {
          margin-top: 18px;
          padding: 22px;
          border-radius: 18px;
          position: relative;
          z-index: 1;
        }

        .achievements-theme-dark .achievement-modules,
        .achievements-theme-dark .achievement-section {
          background: #0d1319 !important;
          border: 1px solid rgba(255,255,255,.10);
        }

        .achievements-theme-light .achievement-modules,
        .achievements-theme-light .achievement-section {
          background: #f8fafc !important;
          border: 1px solid #e2e8f0;
        }

        .module-section-heading,
        .achievement-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 17px;
        }

        .module-section-heading h2,
        .achievement-section-heading h2 {
          margin: 4px 0 0;
          font-size: 20px;
          letter-spacing: -.03em;
        }

        .achievements-theme-dark .module-section-heading h2,
        .achievements-theme-dark .achievement-section-heading h2 { color: #fff !important; }

        .achievements-theme-light .module-section-heading h2,
        .achievements-theme-light .achievement-section-heading h2 { color: #000 !important; }

        .module-section-heading a {
          color: #eabf6a !important;
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
        }

        .module-progress-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .module-progress-card {
          padding: 17px;
          border-radius: 14px;
          min-height: 156px;
        }

        .achievements-theme-dark .module-progress-card {
          background: #141c23;
          border: 1px solid rgba(255,255,255,.10);
        }

        .achievements-theme-light .module-progress-card {
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        .module-progress-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .module-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          font-size: 17px;
        }

        .module-icon.blockchain { background: rgba(43,155,255,.14); }
        .module-icon.solana { background: rgba(126,90,255,.14); }
        .module-icon.meme { background: rgba(239,180,72,.14); }
        .module-icon.security { background: rgba(44,201,142,.14); }

        .module-percent { font-size: 9px; font-weight: 900; opacity: .6; }

        .module-progress-card h3 {
          margin: 13px 0 4px;
          font-size: 11px;
          letter-spacing: .06em;
        }

        .achievements-theme-dark .module-progress-card h3 { color: #fff !important; }
        .achievements-theme-light .module-progress-card h3 { color: #000 !important; }

        .module-progress-number {
          font-size: 17px;
          font-weight: 800;
          color: #e9c476 !important;
        }

        .module-mini-track {
          height: 5px;
          margin-top: 9px;
          border-radius: 999px;
          background: rgba(148,163,184,.22);
          overflow: hidden;
        }

        .module-mini-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg,#e6ad47,#f6d58d);
        }

        .module-progress-card p {
          margin: 9px 0 0;
          font-size: 10px;
          line-height: 1.45;
        }

        .achievements-theme-dark .module-progress-card p { color: rgba(255,255,255,.55) !important; }
        .achievements-theme-light .module-progress-card p { color: #64748b !important; }

        .achievement-count {
          padding: 8px 11px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 900;
        }

        .achievements-theme-dark .achievement-count {
          color: #f0c36c !important;
          background: rgba(240,195,108,.08);
          border: 1px solid rgba(240,195,108,.18);
        }

        .achievements-theme-light .achievement-count {
          color: #7b5b1e !important;
          background: #fff8e8;
          border: 1px solid #ead39c;
        }

        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(6,1fr);
          gap: 9px;
        }

        .achievement-card {
          min-width: 0;
          min-height: 218px;
          padding: 14px;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
        }

        .achievements-theme-dark .achievement-card {
          background: #111920 !important;
          border: 1px solid rgba(255,255,255,.10);
        }

        .achievements-theme-light .achievement-card {
          background: #fff !important;
          border: 1px solid #e2e8f0;
        }

        .achievement-card.earned {
          border-color: rgba(234,191,106,.48);
          box-shadow: inset 0 2px 0 rgba(234,191,106,.7);
        }

        .achievement-card.locked { opacity: .72; }

        .achievement-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 7px;
        }

        .achievement-icon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 21px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(234,191,106,.45);
        }

        .achievement-status {
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .07em;
        }

        .status-earned { color: #61d89d !important; }
        .status-locked { color: #94a3b8 !important; }

        .achievement-card h3 {
          margin: 17px 0 7px;
          font-size: 10px;
          line-height: 1.3;
        }

        .achievements-theme-dark .achievement-card h3 { color: #fff !important; }
        .achievements-theme-light .achievement-card h3 { color: #000 !important; }

        .achievement-description {
          margin: 0;
          font-size: 9px;
          line-height: 1.45;
        }

        .achievements-theme-dark .achievement-description { color: rgba(255,255,255,.58) !important; }
        .achievements-theme-light .achievement-description { color: #64748b !important; }

        .achievement-requirement {
          margin-top: auto;
          padding-top: 12px;
        }

        .achievement-requirement > span {
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .1em;
          color: #eabf6a !important;
        }

        .achievement-requirement p {
          margin: 4px 0 0;
          font-size: 8px;
          line-height: 1.4;
        }

        .achievements-theme-dark .achievement-requirement p { color: rgba(255,255,255,.42) !important; }
        .achievements-theme-light .achievement-requirement p { color: #64748b !important; }

        .achievement-earned-label {
          margin-top: 9px;
          font-size: 8px;
          color: #61d89d !important;
          font-weight: 900;
        }

        .certificate-reward {
          margin-top: 18px;
          padding: 20px 22px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .achievements-theme-dark .certificate-reward {
          background: linear-gradient(110deg,#21190c,#17130c 48%,#101317);
          border: 1px solid rgba(234,191,106,.42);
        }

        .achievements-theme-light .certificate-reward {
          background: linear-gradient(110deg,#fff8e8,#fff);
          border: 1px solid #ead39c;
        }

        .certificate-reward-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          font-size: 26px;
          background: rgba(234,191,106,.12);
        }

        .certificate-reward-copy { flex: 1; }
        .certificate-reward-copy small {
          display: block;
          color: #eabf6a !important;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .certificate-reward-copy h3 {
          margin: 5px 0 4px;
          font-size: 17px;
        }

        .achievements-theme-dark .certificate-reward-copy h3 { color: #fff !important; }
        .achievements-theme-light .certificate-reward-copy h3 { color: #000 !important; }

        .certificate-reward-copy p {
          margin: 0;
          font-size: 10px;
          line-height: 1.45;
        }

        .achievements-theme-dark .certificate-reward-copy p { color: rgba(255,255,255,.58) !important; }
        .achievements-theme-light .certificate-reward-copy p { color: #64748b !important; }

        .certificate-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 165px;
          padding: 12px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
        }

        .achievements-theme-dark .certificate-button {
          background: #fff !important;
          color: #000 !important;
        }

        .achievements-theme-light .certificate-button {
          background: #000 !important;
          color: #fff !important;
        }

        .certificate-button.locked {
          opacity: .42;
          pointer-events: none;
        }

        .continue-learning {
          margin-top: 18px;
          padding-top: 20px;
          border-top: 1px solid rgba(148,163,184,.16);
          text-align: center;
        }

        .continue-learning h2 {
          margin: 7px 0 0;
          font-size: 26px;
          letter-spacing: -.045em;
        }

        .achievements-theme-dark .continue-learning h2 { color: #fff !important; }
        .achievements-theme-light .continue-learning h2 { color: #000 !important; }

        .continue-learning h2 span {
          color: #eabf6a !important;
          font-weight: 500;
        }

        .continue-learning > p {
          margin: 9px auto 15px;
          max-width: 520px;
          font-size: 10px;
          line-height: 1.5;
        }

        .achievements-theme-dark .continue-learning > p { color: rgba(255,255,255,.5) !important; }
        .achievements-theme-light .continue-learning > p { color: #64748b !important; }

        .achievement-module-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .achievement-module-links a {
          padding: 9px 12px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 8px;
          font-weight: 900;
        }

        .achievements-theme-dark .achievement-module-links a {
          color: #fff !important;
          border: 1px solid rgba(255,255,255,.16);
          background: #111820;
        }

        .achievements-theme-light .achievement-module-links a {
          color: #000 !important;
          border: 1px solid #d7dee7;
          background: #fff;
        }

        .achievement-main-button {
          display: inline-flex;
          margin-top: 13px;
          padding: 11px 16px;
          border-radius: 9px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
        }

        .achievements-theme-dark .achievement-main-button {
          background: #fff !important;
          color: #000 !important;
        }

        .achievements-theme-light .achievement-main-button {
          background: #000 !important;
          color: #fff !important;
        }

        @media (max-width: 1000px) {
          .achievement-grid { grid-template-columns: repeat(3,1fr); }
          .module-progress-grid { grid-template-columns: repeat(2,1fr); }
        }

        @media (max-width: 700px) {
          .achievements-page { padding: 18px 10px 40px; }
          .achievements-shell { padding: 20px 14px; border-radius: 18px; }
          .achievement-summary { grid-template-columns: 1fr; }
          .module-progress-grid,
          .achievement-grid { grid-template-columns: 1fr; }
          .achievement-section-heading,
          .module-section-heading {
            align-items: flex-start;
            flex-direction: column;
          }
          .certificate-reward {
            align-items: flex-start;
            flex-direction: column;
          }
          .certificate-button { width: 100%; }
        }
      `}</style>

      <main className={`achievements-page achievements-theme-${theme}`}>
        <div className="achievements-shell">
          <section className="achievements-hero">
            <div className="achievements-eyebrow">[ CHAINLAB / ACHIEVEMENTS ]</div>
            <h1>
              YOUR LEARNING
              <br />
              <span>ACHIEVEMENTS.</span>
            </h1>
            <p>
              Track your progress, earn badges, and unlock your ChainLab
              certificate. Complete all 30 learning sections across Blockchain,
              Solana, Meme Coins, and Security.
            </p>

            <div className="achievement-summary">
              <div className="achievement-summary-card">
                <span className="summary-label">BADGES EARNED</span>
                <strong>{loaded ? earnedCount : "—"}<span> / {badges.length}</span></strong>
              </div>
              <div className="achievement-summary-card">
                <span className="summary-label">SECTIONS COMPLETED</span>
                <strong>{loaded ? totalCompleted : "—"}<span> / {totalSections}</span></strong>
              </div>
              <div className="achievement-summary-card">
                <span className="summary-label">OVERALL PROGRESS</span>
                <strong>{loaded ? overallPercentage : "—"}%</strong>
              </div>
            </div>

            <div className="achievement-progress-track">
              <div
                className="achievement-progress-fill"
                style={{ width: `${loaded ? overallPercentage : 0}%` }}
              />
            </div>
          </section>

          <section className="achievement-modules">
            <div className="module-section-heading">
              <div>
                <div className="achievements-eyebrow">[ LEARNING JOURNEY ]</div>
                <h2>Learning Modules Progress</h2>
              </div>
              <Link href="/learn">VIEW ALL MODULES →</Link>
            </div>

            <div className="module-progress-grid">
              {[
                {
                  key: "blockchain",
                  name: "BLOCKCHAIN",
                  icon: "◆",
                  cls: "blockchain",
                  description: "Learn the fundamentals of blockchain technology.",
                },
                {
                  key: "solana",
                  name: "SOLANA",
                  icon: "◆",
                  cls: "solana",
                  description: "Explore the Solana ecosystem and development.",
                },
                {
                  key: "memeCoins",
                  name: "MEME COINS",
                  icon: "●",
                  cls: "meme",
                  description: "Understand meme coins, tokenomics, and communities.",
                },
                {
                  key: "security",
                  name: "SECURITY",
                  icon: "◆",
                  cls: "security",
                  description: "Learn Web3 security and safer crypto practices.",
                },
              ].map((module) => {
                const item = progress[module.key as keyof Progress];
                const percentage = Math.round((item.completed / item.total) * 100);

                return (
                  <div className="module-progress-card" key={module.key}>
                    <div className="module-progress-card-top">
                      <span className={`module-icon ${module.cls}`}>{module.icon}</span>
                      <span className="module-percent">{percentage}%</span>
                    </div>
                    <h3>{module.name}</h3>
                    <div className="module-progress-number">
                      {item.completed} / {item.total}
                    </div>
                    <div className="module-mini-track">
                      <div className="module-mini-fill" style={{ width: `${percentage}%` }} />
                    </div>
                    <p>{module.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="achievement-section">
            <div className="achievement-section-heading">
              <div>
                <div className="achievements-eyebrow">[ YOUR COLLECTION ]</div>
                <h2>Achievement Badges</h2>
              </div>
              <span className="achievement-count">
                {loaded ? earnedCount : 0} / {badges.length} UNLOCKED
              </span>
            </div>

            <div className="achievement-grid">
              {badges.map((badge) => {
                const earned = earnedBadgeIds.has(badge.id);

                return (
                  <article
                    key={badge.id}
                    className={`achievement-card ${earned ? "earned" : "locked"}`}
                  >
                    <div className="achievement-card-top">
                      <span className="achievement-icon">{badge.icon}</span>
                      <span className={`achievement-status ${earned ? "status-earned" : "status-locked"}`}>
                        {earned ? "UNLOCKED" : "LOCKED"}
                      </span>
                    </div>

                    <h3>{badge.name}</h3>
                    <p className="achievement-description">{badge.description}</p>

                    <div className="achievement-requirement">
                      <span>REQUIREMENT</span>
                      <p>{badge.requirement}</p>
                    </div>

                    {earned && (
                      <div className="achievement-earned-label">✓ ACHIEVEMENT EARNED</div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="certificate-reward">
            <div className="certificate-reward-icon">🎓</div>

            <div className="certificate-reward-copy">
              <small>FINAL REWARD</small>
              <h3>ChainLab Certificate of Completion</h3>
              <p>
                Complete all 30 learning sections to unlock your official
                ChainLab certificate and become a ChainLab Graduate.
              </p>
            </div>

            <Link
              href="/certificate"
              className={`certificate-button ${
                totalCompleted === totalSections ? "" : "locked"
              }`}
            >
              {totalCompleted === totalSections ? "GET CERTIFICATE →" : "🔒 GET CERTIFICATE"}
            </Link>
          </section>

          <section className="continue-learning">
            <div className="achievements-eyebrow">[ CONTINUE YOUR JOURNEY ]</div>
            <h2>KEEP <span>LEARNING.</span></h2>
            <p>Continue completing your learning sections to unlock more achievements.</p>

            <div className="achievement-module-links">
              <Link href="/learn/blockchain">BLOCKCHAIN →</Link>
              <Link href="/learn/solana">SOLANA →</Link>
              <Link href="/learn/meme-coins">MEME COINS →</Link>
              <Link href="/learn/security">SECURITY →</Link>
            </div>

            <Link href="/learn" className="achievement-main-button">
              GO TO LEARNING HUB →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
