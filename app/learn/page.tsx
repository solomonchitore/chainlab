"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./learn.module.css";

const modules = [
  {
    number: "01",
    title: "BLOCKCHAIN",
    description: "Learn the fundamentals.",
    href: "/learn/blockchain",
  },
  {
    number: "02",
    title: "SOLANA",
    description: "Understand the Solana ecosystem.",
    href: "/learn/solana",
  },
  {
    number: "03",
    title: "MEME COINS",
    description: "Learn about tokens and meme coins.",
    href: "/learn/meme-coins",
    featured: true,
  },
  {
    number: "04",
    title: "SECURITY",
    description: "Learn how to protect Web3 assets.",
    href: "/learn/security",
  },
];

export default function LearnPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollableHeight =
        documentHeight - viewportHeight;

      if (scrollableHeight <= 0) {
        setProgress(3);
        return;
      }

      const currentProgress =
        (scrollTop / scrollableHeight) * 100;

      setProgress(
        Math.min(
          100,
          Math.max(3, currentProgress)
        )
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <main className={styles.page}>

      {/* HEADER */}
      <header className={styles.header}>

        <div className={styles.headerInner}>

          <Link
            href="/"
            className={styles.logo}
          >
            [CHAINLAB]
          </Link>

          <nav className={styles.nav}>

            <Link
              href="/"
              className={styles.navLink}
            >
              HOME
            </Link>

            <Link
              href="/learn"
              className={`${styles.navLink} ${styles.active}`}
            >
              LEARN
            </Link>

            <Link
              href="/learn/blockchain"
              className={styles.navLink}
            >
              BLOCKCHAIN
            </Link>

            <Link
              href="/learn/solana"
              className={styles.navLink}
            >
              SOLANA
            </Link>

            <Link
              href="/learn/meme-coins"
              className={styles.navLink}
            >
              MEME COINS
            </Link>

            <Link
              href="/learn/security"
              className={styles.navLink}
            >
              SECURITY
            </Link>

          </nav>

          <Link
            href="/learn/blockchain"
            className={styles.startButton}
          >
            START LEARNING
            <span>→</span>
          </Link>

        </div>

        {/* READING PROGRESS */}

        <div
          style={{
            width: "100%",
            height: "6px",
            backgroundColor: "#1a1f25",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "6px",
              minWidth: "3%",
              backgroundColor: "#00d9ff",
              boxShadow:
                "0 0 10px #00d9ff, 0 0 20px rgba(0, 217, 255, 0.7)",
              transition: "width 0.1s linear",
            }}
          />
        </div>

      </header>

      {/* MAIN CONTENT */}

      <section className={styles.learningSection}>

        <div className={styles.introduction}>

          <div className={styles.breadcrumb}>
            CHAINLAB / LEARNING
          </div>

          <h1>
            START LEARNING<span>.</span>
          </h1>

          <p>
            Explore blockchain, Solana, meme coins,
            and Web3 security.
          </p>

        </div>

        {/* LEARNING MODULES */}

        <div className={styles.moduleGrid}>

          {modules.map((module) => (

            <Link
              key={module.number}
              href={module.href}
              className={`${styles.moduleCard} ${
                module.featured
                  ? styles.featured
                  : ""
              }`}
            >

              <div
                className={styles.moduleNumber}
              >
                {module.number}
              </div>

              <div
                className={styles.moduleContent}
              >

                <h2>
                  {module.title}
                </h2>

                <p>
                  {module.description}
                </p>

                <div
                  className={styles.explore}
                >
                  EXPLORE
                  <span>→</span>
                </div>

              </div>

              {module.featured && (
                <div
                  className={styles.featureDot}
                />
              )}

            </Link>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className={styles.footer}>

        <div className={styles.footerInner}>

          <div>

            <div
              className={styles.footerLogo}
            >
              [CHAINLAB]
            </div>

            <p
              className={styles.footerTagline}
            >
              Learn. Practice. Build. Succeed.
            </p>

          </div>

          <p
            className={styles.copyright}
          >
            © 2026 ChainLab. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}