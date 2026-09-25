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
    <main className="achievements-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="achievements-hero">
        <div className="achievements-eyebrow">
          [ CHAINLAB / ACHIEVEMENTS ]
        </div>

        <h1>
          YOUR PROGRESS.
          <br />
          <span>YOUR ACHIEVEMENTS.</span>
        </h1>

        <p>
          Every completed section brings you closer to a new
          achievement. Keep learning, explore each module, and
          collect your ChainLab badges.
        </p>

        <div className="achievement-summary">
          <div className="achievement-summary-card">
            <span className="summary-label">
              BADGES EARNED
            </span>

            <strong>
              {loaded ? earnedCount : "—"}
              <span> / {badges.length}</span>
            </strong>
          </div>

          <div className="achievement-summary-card">
            <span className="summary-label">
              SECTIONS COMPLETED
            </span>

            <strong>
              {loaded ? totalCompleted : "—"}
              <span> / {totalSections}</span>
            </strong>
          </div>

          <div className="achievement-summary-card">
            <span className="summary-label">
              OVERALL PROGRESS
            </span>

            <strong>
              {loaded ? overallPercentage : "—"}%
            </strong>
          </div>
        </div>

        <div className="achievement-progress-track">
          <div
            className="achievement-progress-fill"
            style={{
              width: `${loaded ? overallPercentage : 0}%`,
            }}
          />
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENT COLLECTION
          ===================================================== */}

      <section className="achievement-section">
        <div className="achievement-section-heading">
          <div>
            <span className="achievements-eyebrow">
              [ YOUR COLLECTION ]
            </span>

            <h2>ACHIEVEMENT BADGES</h2>
          </div>

          <span className="achievement-count">
            {loaded ? earnedCount : 0} UNLOCKED
          </span>
        </div>

        <div className="achievement-grid">
          {badges.map((badge) => {
            const earned = earnedBadgeIds.has(badge.id);

            return (
              <article
                key={badge.id}
                className={`achievement-card ${
                  earned ? "earned" : "locked"
                }`}
              >
                <div className="achievement-card-top">
                  <span className="achievement-icon">
                    {badge.icon}
                  </span>

                  <span
                    className={`achievement-status ${
                      earned
                        ? "status-earned"
                        : "status-locked"
                    }`}
                  >
                    {earned ? "UNLOCKED" : "LOCKED"}
                  </span>
                </div>

                <h3>{badge.name}</h3>

                <p className="achievement-description">
                  {badge.description}
                </p>

                <div className="achievement-requirement">
                  <span>REQUIREMENT</span>

                  <p>{badge.requirement}</p>
                </div>

                {earned && (
                  <div className="achievement-earned-label">
                    ✓ ACHIEVEMENT EARNED
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTINUE LEARNING
          ===================================================== */}

      <section className="achievement-modules">
        <div className="achievements-eyebrow">
          [ CONTINUE YOUR JOURNEY ]
        </div>

        <h2>
          KEEP
          <br />
          <span>LEARNING.</span>
        </h2>

        <p>
          Continue completing your learning sections to unlock
          more achievements.
        </p>

        <div className="achievement-module-links">
          <Link href="/learn/blockchain">
            BLOCKCHAIN <span>→</span>
          </Link>

          <Link href="/learn/solana">
            SOLANA <span>→</span>
          </Link>

          <Link href="/learn/meme-coins">
            MEME COINS <span>→</span>
          </Link>

          <Link href="/learn/security">
            SECURITY <span>→</span>
          </Link>
        </div>

        <Link
          href="/learn"
          className="achievement-main-button"
        >
          GO TO LEARNING HUB <span>→</span>
        </Link>
      </section>
    </main>
  );
}