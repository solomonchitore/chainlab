const learningAreas = [
  {
    number: "01",
    title: "BLOCKCHAIN",
    description:
      "Learn the fundamentals of blockchain technology, from blocks and transactions to wallets, nodes, and decentralization.",
    link: "/learn/blockchain",
  },
  {
    number: "02",
    title: "SOLANA",
    description:
      "Understand Solana, SOL, transactions, scalability, and how applications are built on the Solana network.",
    link: "/learn/solana",
  },
  {
    number: "03",
    title: "MEME COINS",
    description:
      "Explore tokens, tokenomics, liquidity, communities, market capitalization, and the risks behind meme coins.",
    link: "/learn/meme-coins",
  },
  {
    number: "04",
    title: "SECURITY",
    description:
      "Learn how to protect your wallet, identify scams, avoid malicious links, and stay safe in Web3.",
    link: "/learn/security",
  },
];

const stats = [
  {
    value: "100%",
    label: "FREE",
    description: "Everything is free to learn",
  },
  {
    value: "01",
    label: "BEGINNER",
    description: "Built for newcomers",
  },
  {
    value: "∞",
    label: "INTERACTIVE",
    description: "Learn through exploration",
  },
  {
    value: "SOL",
    label: "BUILT ON",
    description: "Fast. Scalable. Powerful.",
  },
];

const journey = [
  {
    number: "01",
    title: "BEGINNER",
    description: "Learn the fundamentals",
  },
  {
    number: "02",
    title: "INTERMEDIATE",
    description: "Understand deeper concepts",
  },
  {
    number: "03",
    title: "ADVANCED",
    description: "Explore Web3 systems",
  },
  {
    number: "04",
    title: "BUILDER",
    description: "Create with blockchain",
  },
];

export default function Home() {
  return (
    <main className="chainlab-home">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="site-nav">
        <a href="/" className="logo">
          <span className="logo-mark">◇</span>
          <span>CHAINLAB</span>
        </a>

        <div className="nav-links">
          <a href="#learn">Home</a>
          <a href="/learn/blockchain">Blockchain</a>
          <a href="/learn/solana">Solana</a>
          <a href="/learn/meme-coins">Meme Coins</a>
          <a href="#learn">Learn</a>
          <a href="/learn/security">Security</a>
          <a href="#community">Community</a>
        </div>

        <a href="#learn" className="nav-wallet">
          Connect Wallet
        </a>
      </nav>

      {/* =========================================================
          MAIN THREE COLUMN GRID
      ========================================================= */}
      <div className="homepage-grid">
        {/* =======================================================
            LEFT COLUMN
        ======================================================= */}
        <div className="homepage-column homepage-left">
          {/* HERO */}
          <section className="hero-panel">
            <div className="hero-grid" />
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="hero-content">
              <p className="eyebrow">WEB3 EDUCATION / 001</p>

              <h1>
                UNDERSTAND
                <br />
                <span>BLOCKCHAIN.</span>
                <br />
                BUILD THE
                <br />
                <span>FUTURE.</span>
              </h1>

              <p className="hero-description">
                Your free academy to learn blockchain, Solana and Meme Coins
                from the right way.
              </p>

              <div className="hero-actions">
                <a href="#learn" className="primary-button">
                  START LEARNING
                </a>

                <a href="/learn/solana" className="text-button">
                  EXPLORE SOLANA →
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbital-ring orbital-ring-one" />
              <div className="orbital-ring orbital-ring-two" />
              <div className="orbital-ring orbital-ring-three" />

              <div className="hero-cube cube-one">◆</div>
              <div className="hero-cube cube-two">◇</div>
              <div className="hero-cube cube-three">◆</div>

              <div className="hero-core">
                <span>⬡</span>
              </div>

              <div className="hero-floor" />
            </div>

            <div className="hero-scroll">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </section>

          {/* STATS */}
          <section className="stats-panel">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span className="stat-icon">◇</span>

                <strong>
                  {stat.value} <small>{stat.label}</small>
                </strong>

                <p>{stat.description}</p>
              </div>
            ))}
          </section>

          {/* LEARNING AREAS */}
          <section id="learn" className="learning-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">EXPLORE CHAINLAB</p>

                <h2>
                  WHAT DO YOU WANT
                  <br />
                  TO LEARN TODAY?
                </h2>
              </div>

              <span className="panel-number">01 / 04</span>
            </div>

            <div className="learning-grid">
              {learningAreas.map((area) => (
                <article className="learning-card" key={area.number}>
                  <div className="card-top">
                    <span>[{area.number}]</span>
                    <span>↗</span>
                  </div>

                  <div className="card-icon">
                    {area.number === "01" && "⬡"}
                    {area.number === "02" && "≋"}
                    {area.number === "03" && "◉"}
                    {area.number === "04" && "⌾"}
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <a href={area.link} className="card-link">
                    GO LEARN <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* LEARNING PATH */}
          <section className="journey-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">LEARNING PATH</p>

                <h2>FROM BEGINNER TO BUILDER</h2>
              </div>

              <a href="#learn" className="outline-button">
                VIEW LEARNING PATH
              </a>
            </div>

            <p className="journey-intro">
              Follow our structured learning path and become confident in
              Web3.
            </p>

            <div className="journey-track">
              {journey.map((step, index) => (
                <div className="journey-step" key={step.number}>
                  <div className="journey-icon">
                    <span>{step.number}</span>
                  </div>

                  <div>
                    <span className="journey-label">
                      {step.number} / {step.title}
                    </span>

                    <p>{step.description}</p>
                  </div>

                  {index < journey.length - 1 && (
                    <span className="journey-arrow">→</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* =======================================================
            MIDDLE COLUMN
        ======================================================= */}
        <div className="homepage-column homepage-middle">
          {/* BLOCKCHAIN ACADEMY */}
          <section className="academy-panel blockchain-panel">
            <div className="academy-content">
              <p className="eyebrow">BLOCKCHAIN ACADEMY</p>

              <h2>
                WHAT IS
                <br />
                <span>BLOCKCHAIN?</span>
              </h2>

              <p>
                A blockchain is a decentralized digital ledger that records
                transactions across many computers.
              </p>

              <div className="concept-list">
                <span>✓ Decentralized</span>
                <span>✓ Transparent</span>
                <span>✓ Secure</span>
                <span>✓ Immutable</span>
              </div>

              <a href="/learn/blockchain" className="outline-button">
                START LESSON
              </a>
            </div>

            <div className="blockchain-visual">
              <div className="network-line line-one" />
              <div className="network-line line-two" />
              <div className="network-line line-three" />

              <div className="network-node node-one">◇</div>
              <div className="network-node node-two">◇</div>
              <div className="network-node node-three">◇</div>
              <div className="network-node node-four">◇</div>

              <div className="blockchain-center">
                <span>⬡</span>
              </div>
            </div>
          </section>

          {/* SOLANA */}
          <section className="solana-panel">
            <div className="solana-content">
              <p className="eyebrow">SOLANA ACADEMY</p>

              <h2>
                THE BLOCKCHAIN
                <br />
                FOR THE WORLD
              </h2>

              <p>
                Solana is a high-performance blockchain designed for fast,
                scalable and decentralized applications.
              </p>

              <div className="solana-stats">
                <div>
                  <strong>65,000+</strong>
                  <span>TPS</span>
                </div>

                <div>
                  <strong>0.4s</strong>
                  <span>Block Time</span>
                </div>

                <div>
                  <strong>$0.00025</strong>
                  <span>Avg. Fee</span>
                </div>
              </div>

              <a href="/learn/solana" className="outline-button">
                EXPLORE SOLANA
              </a>
            </div>

            <div className="solana-visual">
              <div className="solana-orbit" />

              <div className="solana-symbol">
                <span />
                <span />
                <span />
              </div>
            </div>
          </section>

          {/* MEME COINS + TOKENOMICS */}
          <section className="meme-token-panel">
            <div className="meme-info">
              <p className="eyebrow">MEME COINS LAB</p>

              <h2>
                HOW MEME COINS
                <br />
                <span>WORK</span>
              </h2>

              <p>
                Experiment with a meme coin model and learn tokenomics,
                liquidity, communities and risk.
              </p>

              <a href="/learn/meme-coins" className="outline-button">
                OPEN LAB
              </a>
            </div>

            <div className="tokenomics">
              <p className="eyebrow">TOKENOMICS</p>

              <div className="token-chart">
                <div className="chart-ring">
                  <span>
                    1,000,000,000
                    <small>SUPPLY</small>
                  </span>
                </div>
              </div>

              <div className="token-legend">
                <span>
                  <i /> Community <b>40%</b>
                </span>
                <span>
                  <i /> Liquidity <b>20%</b>
                </span>
                <span>
                  <i /> Marketing <b>10%</b>
                </span>
                <span>
                  <i /> Team <b>10%</b>
                </span>
                <span>
                  <i /> Treasury <b>20%</b>
                </span>
              </div>
            </div>
          </section>

          {/* START YOUR JOURNEY */}
          <section className="start-panel">
            <p className="eyebrow">LEARNING PATH</p>

            <h2>START YOUR JOURNEY</h2>

            <div className="start-steps">
              <div>
                <span>01</span>
                <strong>Learn</strong>
                <small>Foundations</small>
              </div>

              <div>
                <span>02</span>
                <strong>Explore</strong>
                <small>Ecosystems</small>
              </div>

              <div>
                <span>03</span>
                <strong>Understand</strong>
                <small>The Future</small>
              </div>

              <div>
                <span>04</span>
                <strong>Build</strong>
                <small>With Web3</small>
              </div>
            </div>

            <a href="#learn" className="primary-button">
              START LEARNING NOW
            </a>
          </section>
        </div>

        {/* =======================================================
            RIGHT COLUMN
        ======================================================= */}
        <div className="homepage-column homepage-right">
          {/* SECURITY */}
          <section className="security-panel">
            <div className="security-content">
              <p className="eyebrow">SECURITY FIRST</p>

              <h2>
                DON'T GET
                <br />
                <span>REKT</span>
              </h2>

              <p>
                Learn how to protect yourself from scams, hackers and common
                crypto risks.
              </p>

              <div className="security-list">
                <div>
                  <span>01</span>

                  <div>
                    <strong>PROTECT YOUR KEYS</strong>
                    <small>
                      Never share your private keys or seed phrase.
                    </small>
                  </div>
                </div>

                <div>
                  <span>02</span>

                  <div>
                    <strong>VERIFY EVERYTHING</strong>
                    <small>
                      Double-check links, addresses and smart contracts.
                    </small>
                  </div>
                </div>

                <div>
                  <span>03</span>

                  <div>
                    <strong>AVOID SCAMS</strong>
                    <small>Learn how to identify common Web3 scams.</small>
                  </div>
                </div>

                <div>
                  <span>04</span>

                  <div>
                    <strong>STAY EDUCATED</strong>
                    <small>Knowledge is your best protection.</small>
                  </div>
                </div>
              </div>

              <a href="/learn/security" className="outline-button">
                VIEW SECURITY LESSONS
              </a>
            </div>

            <div className="security-visual">
              <div className="hood">
                <div className="hood-face" />
              </div>

              <div className="shield">
                <span>⌾</span>
              </div>
            </div>
          </section>

          {/* BM ALPHA CASE STUDY */}
          <section className="case-study-panel">
            <div className="case-study-content">
              <p className="eyebrow">CASE STUDY</p>

              <h2>
                BM ALPHA
                <br />
                <span>A SOLANA MEME COIN PROJECT</span>
              </h2>

              <p>
                See how a meme coin project is structured from concept to
                launch.
              </p>

              <ol className="case-list">
                <li>Concept</li>
                <li>Tokenomics</li>
                <li>Smart Contract</li>
                <li>Liquidity</li>
                <li>Community</li>
                <li>Launch</li>
              </ol>

              <a href="/learn/meme-coins" className="outline-button">
                VIEW CASE STUDY
              </a>
            </div>

            <div className="bm-visual">
              <div className="bm-coin">
                <span>BM</span>
                <small>ALPHA</small>
              </div>

              <div className="coin-glow" />
            </div>
          </section>

          {/* COMMUNITY */}
          <section id="community" className="community-panel">
            <p className="eyebrow">COMMUNITY</p>

            <h2>
              LEARN.
              <br />
              SHARE.
              <br />
              <span>GROW.</span>
            </h2>

            <p>
              Join a community of learners, builders and Web3 enthusiasts.
            </p>

            <div className="social-links">
              <a href="#community">
                <span>◈</span>
                <strong>Discord</strong>
                <small>Join our server</small>
              </a>

              <a href="#community">
                <span>𝕏</span>
                <strong>Twitter</strong>
                <small>Follow updates</small>
              </a>

              <a href="https://github.com/solomonchitore/chainlab">
                <span>◉</span>
                <strong>GitHub</strong>
                <small>Source code</small>
              </a>

              <a href="#community">
                <span>▶</span>
                <strong>YouTube</strong>
                <small>Watch tutorials</small>
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-brand">
              <a href="/" className="logo">
                <span className="logo-mark">◇</span>
                <span>CHAINLAB</span>
              </a>

              <p>
                Your free academy for blockchain, Solana and Web3 education.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <strong>LINKS</strong>
                <a href="/learn/blockchain">Blockchain</a>
                <a href="/learn/solana">Solana</a>
                <a href="/learn/meme-coins">Meme Coins</a>
                <a href="/learn/security">Security</a>
              </div>

              <div>
                <strong>RESOURCES</strong>
                <a href="#learn">Learn</a>
                <a href="#learn">Academy</a>
                <a href="#community">Community</a>
                <a href="#learn">FAQ</a>
              </div>

              <div>
                <strong>LEGAL</strong>
                <a href="#about">Privacy Policy</a>
                <a href="#about">Terms</a>
                <a href="#about">Disclaimer</a>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 CHAINLAB — EDUCATIONAL PROJECT</span>

              <div>
                <a href="#community">◈</a>
                <a href="#community">𝕏</a>
                <a href="https://github.com/solomonchitore/chainlab">◉</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}