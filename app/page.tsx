import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <header className="site-header">
        <div className="nav-container">

          <Link href="/" className="brand">
            [CHAINLAB]
          </Link>

          <nav className="main-nav">
            <Link href="/" className="active">
              HOME
            </Link>

            <Link href="/learn">
              LEARN
            </Link>

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
            START LEARNING
            <span>→</span>
          </Link>

        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="home-hero">

        {/* Background */}
        <div className="hero-grid"></div>
        <div className="hero-blue-glow"></div>
        <div className="hero-orange-glow"></div>

        <div className="hero-container">

          {/* =================================================
              LEFT SIDE
          ================================================= */}
          <div className="hero-content">

            <div className="hero-label">
              WEB3 EDUCATION FOR EVERYONE
            </div>

            <h1>
              LEARN.
              <br />
              BUILD.
              <br />
              OWN THE
              <br />
              <span>FUTURE.</span>
            </h1>

            <p className="hero-description">
              ChainLab is your free platform to learn blockchain,
              Solana, meme coins, tokenomics, and Web3 security
              through practical, easy-to-follow lessons.
            </p>

            <div className="hero-buttons">

              <Link href="/learn" className="primary-button">
                START LEARNING
                <span>→</span>
              </Link>

              <Link href="/learn" className="secondary-button">
                EXPLORE TOPICS
              </Link>

            </div>

            <p className="hero-company-text">
              An educational resource by Birthday Messaging,
              built to make blockchain and Solana easy to grasp
            </p>

          </div>


          {/* =================================================
              RIGHT SIDE — BLOCKCHAIN VISUAL
          ================================================= */}
          <div className="hero-visual">

            {/* Ambient glow behind everything */}
            <div className="visual-orange-glow"></div>
            <div className="visual-blue-glow"></div>


            {/* ===============================================
                CONNECTION LINES
            =============================================== */}

            <div className="network-line line-1"></div>
            <div className="network-line line-2"></div>
            <div className="network-line line-3"></div>
            <div className="network-line line-4"></div>
            <div className="network-line line-5"></div>


            {/* ===============================================
                3D BLOCKS
            =============================================== */}

            <div className="block block-learn">
              <div className="block-face block-front">
                <div className="block-icon">◆</div>
                <span>LEARN</span>
              </div>

              <div className="block-face block-right"></div>
              <div className="block-face block-top"></div>
            </div>


            <div className="block block-security">
              <div className="block-face block-front">
                <div className="block-icon">◇</div>
                <span>SECURITY</span>
              </div>

              <div className="block-face block-right"></div>
              <div className="block-face block-top"></div>
            </div>


            <div className="block block-blockchain">
              <div className="block-face block-front">
                <div className="block-icon">⬡</div>
                <span>BLOCKCHAIN</span>
              </div>

              <div className="block-face block-right"></div>
              <div className="block-face block-top"></div>
            </div>


            <div className="block block-community">
              <div className="block-face block-front">
                <div className="block-icon">◎</div>
                <span>COMMUNITY</span>
              </div>

              <div className="block-face block-right"></div>
              <div className="block-face block-top"></div>
            </div>


            <div className="block block-web3">
              <div className="block-face block-front">
                <div className="block-icon">▱</div>
                <span>WEB3</span>
              </div>

              <div className="block-face block-right"></div>
              <div className="block-face block-top"></div>
            </div>


            {/* ===============================================
                CENTRAL PLATFORM
            =============================================== */}

            <div className="central-platform">

              <div className="platform-outer"></div>

              <div className="platform-middle"></div>

              <div className="platform-inner"></div>

              <div className="platform-core"></div>

            </div>


            {/* ===============================================
                BM CONNECT COIN
            =============================================== */}

            <div className="coin-container">

              <div className="coin-glow"></div>

              <img
                src="/images/bm-connect-coin.png"
                alt="BM Connect Coin"
                className="bm-connect-coin"
              />

            </div>


            {/* Small floating particles */}

            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURE SECTION
      ===================================================== */}

      <section className="features-section">

        <div className="feature-card">

          <div className="feature-icon">
            ◇
          </div>

          <div>
            <h3>PRACTICAL LEARNING</h3>

            <p>
              Step-by-step lessons made for beginners
              and future Web3 builders.
            </p>
          </div>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ⬡
          </div>

          <div>
            <h3>WEB3 FOCUSED</h3>

            <p>
              Learn blockchain basics, Solana,
              meme coins, and tokenomics.
            </p>
          </div>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ◈
          </div>

          <div>
            <h3>SECURITY FIRST</h3>

            <p>
              Learn Web3 security and protect yourself
              in the crypto space.
            </p>
          </div>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            ◎
          </div>

          <div>
            <h3>COMMUNITY DRIVEN</h3>

            <p>
              Join a global community of learners,
              builders, and creators.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="stats-section">

        <div className="stat">

          <strong>1000+</strong>

          <span>LEARNERS</span>

        </div>


        <div className="stat">

          <strong>6+</strong>

          <span>MODULES</span>

        </div>


        <div className="stat">

          <strong>24/7</strong>

          <span>ACCESS</span>

        </div>


        <div className="stat">

          <strong>GLOBAL</strong>

          <span>COMMUNITY</span>

        </div>


        <div className="stat">

          <strong>SECURE</strong>

          <span>LEARNING</span>

        </div>

      </section>


      {/* =====================================================
          BOTTOM TAGLINE
      ===================================================== */}

      <section className="bottom-tagline">

        <p>
          LEARN. PRACTICE. BUILD. SUCCEED.
        </p>

      </section>

    </main>
  );
}