import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="learn-v2">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <nav className="site-nav">
        <Link href="/" className="logo">
          <span className="logo-mark">◇</span>
          CHAINLAB
        </Link>

        <div className="nav-links">
          <Link href="/">HOME</Link>
          <Link href="/learn">LEARN</Link>
          <Link href="/learn/blockchain">BLOCKCHAIN</Link>
          <Link href="/learn/solana">SOLANA</Link>
          <Link href="/learn/meme-coins">MEME COINS</Link>
          <Link href="/learn/security">SECURITY</Link>
        </div>

        <Link href="/learn" className="nav-action">
          START LEARNING
        </Link>
      </nav>

      {/* =====================================================
          LEARNING HERO
      ===================================================== */}
      <section className="learn-v2-hero">

        {/* 3D BACKGROUND */}
        <div className="learn-v2-scene">

          <div className="learn-v2-grid"></div>

          <div className="learn-v2-orbit orbit-a"></div>
          <div className="learn-v2-orbit orbit-b"></div>

          <div className="learn-v2-node node-a"></div>
          <div className="learn-v2-node node-b"></div>
          <div className="learn-v2-node node-c"></div>
          <div className="learn-v2-node node-d"></div>
          <div className="learn-v2-node node-e"></div>

          <div className="learn-v2-line line-a"></div>
          <div className="learn-v2-line line-b"></div>
          <div className="learn-v2-line line-c"></div>

          <div className="learn-v2-platform">
            <div className="platform-glow"></div>

            <div className="learn-v2-cube">
              <div className="cube-face cube-front"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-top"></div>
            </div>

            <div className="cube-core"></div>
          </div>

          <div className="learn-v2-floating-cube floating-one"></div>
          <div className="learn-v2-floating-cube floating-two"></div>
          <div className="learn-v2-floating-cube floating-three"></div>
          <div className="learn-v2-floating-cube floating-four"></div>

        </div>

        {/* HERO CONTENT */}
        <div className="learn-v2-content">

          <p className="learn-v2-eyebrow">
            CHAINLAB / LEARNING
          </p>

          <h1>
            START
            <br />
            <span>LEARNING.</span>
          </h1>

          <div className="learn-v2-line-accent">
            <span></span>
          </div>

          <p className="learn-v2-description">
            Explore blockchain, Solana, meme coins,
            <br />
            and Web3 security.
          </p>

        </div>
      </section>

      {/* =====================================================
          LEARNING AREAS
      ===================================================== */}
      <section className="learn-v2-options">

        <Link
          href="/learn/blockchain"
          className="learn-v2-card"
        >
          <div className="learn-v2-card-top">
            <span>01</span>

            <div className="learn-v2-icon blockchain-icon">
              <span></span>
            </div>
          </div>

          <div className="learn-v2-card-content">
            <h2>BLOCKCHAIN</h2>

            <p>
              Learn the fundamentals.
            </p>
          </div>

          <div className="learn-v2-explore">
            EXPLORE
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/learn/solana"
          className="learn-v2-card"
        >
          <div className="learn-v2-card-top">
            <span>02</span>

            <div className="learn-v2-icon solana-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="learn-v2-card-content">
            <h2>SOLANA</h2>

            <p>
              Understand the Solana ecosystem.
            </p>
          </div>

          <div className="learn-v2-explore">
            EXPLORE
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/learn/meme-coins"
          className="learn-v2-card"
        >
          <div className="learn-v2-card-top">
            <span>03</span>

            <div className="learn-v2-icon meme-icon">
              <span>●</span>
            </div>
          </div>

          <div className="learn-v2-card-content">
            <h2>MEME COINS</h2>

            <p>
              Learn about tokens and meme coins.
            </p>
          </div>

          <div className="learn-v2-explore">
            EXPLORE
            <span>→</span>
          </div>
        </Link>

        <Link
          href="/learn/security"
          className="learn-v2-card"
        >
          <div className="learn-v2-card-top">
            <span>04</span>

            <div className="learn-v2-icon security-icon">
              <span></span>
            </div>
          </div>

          <div className="learn-v2-card-content">
            <h2>SECURITY</h2>

            <p>
              Learn how to protect Web3 assets.
            </p>
          </div>

          <div className="learn-v2-explore">
            EXPLORE
            <span>→</span>
          </div>
        </Link>

      </section>

      {/* =====================================================
          MOTIVATION
      ===================================================== */}
      <section className="learn-v2-motivation">
        <span className="motivation-icon">↗</span>

        <p>
          Every expert was once a beginner.
          <span> Keep learning, keep building.</span>
        </p>
      </section>
    </main>
  );
}
