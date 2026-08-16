const learningAreas = [
  {
    number: "01",
    title: "BLOCKCHAIN",
    description:
      "Understand blocks, transactions, wallets, nodes, consensus, and how decentralized networks work.",
    link: "/learn/blockchain",
  },
  {
    number: "02",
    title: "SOLANA",
    description:
      "Learn how Solana works, what SOL is, how transactions work, and how the Solana ecosystem fits together.",
    link: "/learn/solana",
  },
  {
    number: "03",
    title: "MEME COINS",
    description:
      "Explore tokens, tokenomics, liquidity, communities, risks, and how meme coins are created.",
    link: "/learn/meme-coins",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="site-nav">
        <a href="/" className="logo">
          [CHAINLAB]
        </a>

        <div className="nav-links">
          <a href="#learn">LEARN</a>
          <a href="/learn/solana">SOLANA</a>
          <a href="/learn/meme-coins">MEME COINS</a>
          <a href="/learn/security">SECURITY</a>
        </div>

        <a href="#learn" className="nav-action">
          START →
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <p className="eyebrow">[ WEB3 EDUCATION / 001 ]</p>

          <h1>
            ENTER THE
            <span>BLOCKCHAIN</span>
          </h1>

          <p className="hero-description">
            A free educational platform for understanding blockchain,
            Solana, meme coins, tokenomics, and Web3 security.
          </p>

          <div className="hero-actions">
            <a href="#learn" className="primary-button">
              START LEARNING
            </a>

            <a href="#about" className="secondary-button">
              EXPLORE CHAINLAB
            </a>
          </div>
        </div>

        <div className="hero-status">
          <span className="status-dot" />
          EDUCATION SYSTEM ONLINE
        </div>

        <div className="hero-index">[01 / 08]</div>
      </section>

      {/* Learning Areas */}
      <section id="learn" className="learning-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">[ LEARNING SYSTEM ]</p>

            <h2>
              WHERE DO YOU
              <br />
              WANT TO START?
            </h2>
          </div>

          <p className="section-intro">
            Start with the fundamentals and gradually build your
            understanding of Web3 technology.
          </p>
        </div>

        <div className="learning-grid">
          {learningAreas.map((area) => (
            <article className="learning-card" key={area.number}>
              <span className="card-number">[{area.number}]</span>

              <h3>{area.title}</h3>

              <p>{area.description}</p>

              <a href={area.link} className="card-link">
                EXPLORE TOPIC →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Blockchain */}
      <section id="blockchain" className="feature-section">
        <div className="feature-line" />

        <div>
          <p className="eyebrow">[ 01 / BLOCKCHAIN ]</p>

          <h2>
            UNDERSTAND.
            <br />
            <span>THE FOUNDATION.</span>
          </h2>
        </div>

        <p className="feature-text">
          Learn the fundamentals of blockchain technology, including
          blocks, transactions, wallets, nodes, consensus, and
          decentralization.
        </p>

        <a href="/learn/blockchain" className="primary-button">
          ENTER BLOCKCHAIN →
        </a>
      </section>

      {/* Solana */}
      <section id="solana" className="feature-section">
        <div className="feature-line" />

        <div>
          <p className="eyebrow">[ 02 / SOLANA ]</p>

          <h2>
            FAST.
            <br />
            SCALABLE.
            <br />
            <span>DECENTRALIZED.</span>
          </h2>
        </div>

        <p className="feature-text">
          Discover how Solana works, how transactions are processed,
          what SOL is, and how developers build applications on the
          network.
        </p>

        <a href="/learn/solana" className="primary-button">
          ENTER SOLANA →
        </a>
      </section>

      {/* Meme Coins */}
      <section id="memecoins" className="meme-section">
        <div className="meme-background">MEME</div>

        <div className="meme-content">
          <p className="eyebrow">[ 03 / MEME COINS ]</p>

          <h2>
            NOT JUST
            <br />
            <span>HYPE.</span>
          </h2>

          <p>
            Learn what happens behind the memes: token supply,
            liquidity, communities, market capitalization, risks,
            and tokenomics.
          </p>

          <a href="/learn/meme-coins" className="primary-button">
            ENTER MEME COINS →
          </a>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="security-section">
        <p className="eyebrow">[ SECURITY PROTOCOL ]</p>

        <h2>
          LEARN BEFORE
          <br />
          YOU <span>CONNECT.</span>
        </h2>

        <p>
          Your wallet is your responsibility. Learn how to recognize
          phishing attacks, fake tokens, malicious links, rug pulls,
          and other Web3 threats.
        </p>

        <a href="/learn/security" className="primary-button">
          LEARN SECURITY →
        </a>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <p className="eyebrow">[ ABOUT CHAINLAB ]</p>

        <h2>
          BLOCKCHAIN
          <br />
          <span>WITHOUT THE CONFUSION.</span>
        </h2>

        <p>
          CHAINLAB is an educational project created to make complex
          blockchain and Web3 concepts easier for beginners to
          understand.
        </p>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div>
          <strong>[CHAINLAB]</strong>

          <p>Learn. Understand. Explore.</p>
        </div>

        <p>© 2026 CHAINLAB — EDUCATIONAL PROJECT</p>
      </footer>
    </main>
  );
}