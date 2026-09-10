import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="site-header">
        <div className="nav-inner">
          <Link href="/" className="brand">
            [CHAINLAB]
          </Link>

          <nav className="main-nav">
            <Link href="/learn/blockchain">BLOCKCHAIN</Link>
            <Link href="/learn/solana">SOLANA</Link>
            <Link href="/learn/meme-coins">MEME COINS</Link>
            <Link href="/learn/security">SECURITY</Link>
          </nav>

          <Link href="/learn" className="nav-button">
            START LEARNING <span>→</span>
          </Link>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section className="hero-section">
        <div className="hero-grid">

          {/* LEFT — HERO CONTENT */}
          <div className="hero-content">
            <div className="eyebrow">
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
              ChainLab is a free educational platform designed to
              make blockchain, Solana, meme coins, tokenomics, and
              Web3 security easier to understand through practical,
              structured lessons.
            </p>

            <div className="hero-actions">
              <Link
                href="/learn"
                className="primary-button"
              >
                START LEARNING <span>→</span>
              </Link>

              <a
                href="#learning-paths"
                className="secondary-button"
              >
                EXPLORE TOPICS
              </a>
            </div>

            <p className="hero-note">
              An educational resource created by Birthday Messaging,
              built to make Web3 knowledge more accessible.
            </p>
          </div>

          {/* RIGHT — BM CONNECT HERO IMAGE */}
          <div className="hero-visual">
            <img
              src="/images/bm-connect-hero-4k.png"
              alt="BM Connect blockchain network"
              className="hero-image"
            />
          </div>
        </div>

        {/* =========================
            HERO FEATURES
        ========================== */}
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon">◇</div>

            <div>
              <h3>PRACTICAL LEARNING</h3>

              <p>
                Step-by-step lessons designed for beginners and
                future Web3 builders.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⬡</div>

            <div>
              <h3>WEB3 FOCUSED</h3>

              <p>
                Learn blockchain, Solana, meme coins, tokenomics,
                and decentralized technologies.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">◈</div>

            <div>
              <h3>SECURITY FIRST</h3>

              <p>
                Understand Web3 risks and learn how to protect
                yourself in the decentralized world.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">◎</div>

            <div>
              <h3>COMMUNITY DRIVEN</h3>

              <p>
                Build knowledge that can help you participate in
                the evolving Web3 ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            STATS
        ========================== */}
        <div className="stats-grid">
          <div className="stat">
            <strong>05</strong>
            <span>CORE TOPICS</span>
          </div>

          <div className="stat">
            <strong>04</strong>
            <span>LEARNING PATHS</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>ACCESS</span>
          </div>

          <div className="stat">
            <strong>GLOBAL</strong>
            <span>LEARNING</span>
          </div>

          <div className="stat">
            <strong>FREE</strong>
            <span>EDUCATION</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT BIRTHDAY MESSAGING
      ====================================================== */}
      <section className="about-section" id="about">
        <div className="company-card">
          <div className="company-image">
            <img
              src="/images/birthday-messaging-hq-4k.png"
              alt="Birthday Messaging headquarters"
              className="company-photo"
            />

            <div className="company-image-gradient" />
            <div className="company-image-vignette" />
          </div>

          <div className="company-content">
            <div className="section-label">
              [ THE COMPANY BEHIND CHAINLAB ]
            </div>

            <h2>
              The Company
              <br />
              <span>Behind ChainLab.</span>
            </h2>

            <p>
              ChainLab is an educational initiative created by
              Birthday Messaging to make blockchain and Web3
              technology easier to understand.
            </p>

            <p>
              As emerging technologies continue to change the way
              people build, communicate, transact, and participate
              online, understanding the technology behind them
              becomes increasingly important.
            </p>

            <p>
              Birthday Messaging created ChainLab as a learning
              environment where people can explore these concepts
              progressively — starting with the fundamentals and
              moving toward more advanced Web3 topics.
            </p>

            <Link
              href="/learn"
              className="primary-button company-button"
            >
              EXPLORE CHAINLAB <span>→</span>
            </Link>
          </div>

          <div className="company-label">
            BIRTHDAY MESSAGING / CHAINLAB
          </div>

          <div className="company-location">
            EDUCATION / TECHNOLOGY / WEB3
          </div>
        </div>

        {/* COMPANY VALUES */}
        <div className="about-values">
          {/* INNOVATION */}
          <div>
            <div
              className="feature-icon"
              aria-hidden="true"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span>01</span>

            <h3>INNOVATION</h3>

            <p>
              Exploring emerging technologies and the ideas
              shaping the digital future.
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <div
              className="feature-icon"
              aria-hidden="true"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5.5C4 4.67 4.67 4 5.5 4H10C11.1 4 12 4.9 12 6V20C12 18.9 11.1 18 10 18H5.5C4.67 18 4 18.67 4 19.5V5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M20 5.5C20 4.67 19.33 4 18.5 4H14C12.9 4 12 4.9 12 6V20C12 18.9 12.9 18 14 18H18.5C19.33 18 20 18.67 20 19.5V5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M7 8H9.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />

                <path
                  d="M14.5 8H17"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span>02</span>

            <h3>EDUCATION</h3>

            <p>
              Turning complex technical concepts into practical
              knowledge people can understand.
            </p>
          </div>

          {/* ACCESS */}
          <div>
            <div
              className="feature-icon"
              aria-hidden="true"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M3.5 12H20.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />

                <path
                  d="M12 3.5C14.2 5.85 15.3 8.68 15.3 12C15.3 15.32 14.2 18.15 12 20.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />

                <path
                  d="M12 3.5C9.8 5.85 8.7 8.68 8.7 12C8.7 15.32 9.8 18.15 12 20.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span>03</span>

            <h3>ACCESS</h3>

            <p>
              Making foundational Web3 education available without
              unnecessary barriers.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHAINLAB
      ====================================================== */}
      <section className="mission-section">
        <div className="section-label">
          [ WHY CHAINLAB ]
        </div>

        <div className="mission-heading">
          <h2>
            Web3 Is Changing.
            <br />
            <span>Understanding It Matters.</span>
          </h2>

          <p>
            Blockchain technology is more than cryptocurrency.
            It introduces new ways of thinking about ownership,
            digital assets, applications, identity, communities,
            and online coordination.
          </p>
        </div>

        <div className="mission-grid">
          <article>
            <span className="number">01</span>

            <h3>START WITH THE FUNDAMENTALS</h3>

            <p>
              Build a strong understanding of blockchain before
              moving into more specialized technologies.
            </p>
          </article>

          <article>
            <span className="number">02</span>

            <h3>LEARN BY CONNECTION</h3>

            <p>
              Understand how wallets, networks, transactions,
              tokens, applications, and users fit together.
            </p>
          </article>

          <article>
            <span className="number">03</span>

            <h3>UNDERSTAND THE RISKS</h3>

            <p>
              Learn why security, verification, responsible
              research, and user awareness matter in Web3.
            </p>
          </article>

          <article>
            <span className="number">04</span>

            <h3>THINK LIKE A BUILDER</h3>

            <p>
              Move beyond simply using technology and develop the
              knowledge required to understand how it works.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          LEARNING PATHS
      ====================================================== */}
      <section
        className="paths-section"
        id="learning-paths"
      >
        <div className="section-heading-row">
          <div>
            <div className="section-label">
              [ EXPLORE OUR LEARNING PATHS ]
            </div>

            <h2>
              Choose a Topic.
              <br />
              <span>Start Your Journey.</span>
            </h2>
          </div>

          <Link
            href="/learn"
            className="text-link"
          >
            VIEW ALL MODULES →
          </Link>
        </div>

        <div className="paths-grid">
          {/* BLOCKCHAIN */}
          <Link
            href="/learn/blockchain"
            className="path-card"
          >
            <div className="path-visual">
              <img
                src="/images/blockchain-4k.png.jpg"
                alt="Blockchain technology"
              />
            </div>

            <div className="path-number">
              01
            </div>

            <h3>BLOCKCHAIN</h3>

            <p>
              Learn the fundamentals of blockchain technology,
              decentralized networks, transactions, blocks,
              and validation.
            </p>

            <strong>
              START MODULE →
            </strong>
          </Link>

          {/* SOLANA */}
          <Link
            href="/learn/solana"
            className="path-card"
          >
            <div className="path-visual">
              <img
                src="/images/solana-4k.png.jpg"
                alt="Solana blockchain"
              />
            </div>

            <div className="path-number">
              02
            </div>

            <h3>SOLANA</h3>

            <p>
              Explore Solana, its architecture, accounts,
              programs, transactions, validators, and ecosystem.
            </p>

            <strong>
              START MODULE →
            </strong>
          </Link>

          {/* MEME COINS */}
          <Link
            href="/learn/meme-coins"
            className="path-card"
          >
            <div className="path-visual">
              <img
                src="/images/meme-coins-4k.png.jpg"
                alt="Meme coins"
              />
            </div>

            <div className="path-number">
              03
            </div>

            <h3>MEME COINS</h3>

            <p>
              Understand tokens, communities, liquidity,
              tokenomics, market dynamics, and risk.
            </p>

            <strong>
              START MODULE →
            </strong>
          </Link>

          {/* SECURITY */}
          <Link
            href="/learn/security"
            className="path-card"
          >
            <div className="path-visual">
              <img
                src="/images/web3-security-4k.png.jpg"
                alt="Web3 security"
              />
            </div>

            <div className="path-number">
              04
            </div>

            <h3>WEB3 SECURITY</h3>

            <p>
              Learn how wallets, private keys, scams, phishing,
              smart contracts, and user responsibility connect.
            </p>

            <strong>
              START MODULE →
            </strong>
          </Link>

          {/* TOKENOMICS */}
          <div className="path-card">
            <div className="path-visual">
              <img
                src="/images/tokenomics-4k.png.jpg"
                alt="Tokenomics"
              />
            </div>

            <div className="path-number">
              05
            </div>

            <h3>TOKENOMICS</h3>

            <p>
              Discover how token supply, distribution, utility,
              incentives, and market participation influence
              digital assets.
            </p>

            <strong>
              COMING SOON →
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW CHAINLAB WORKS
      ====================================================== */}
      <section className="process-section">
        <div className="section-label">
          [ HOW CHAINLAB WORKS ]
        </div>

        <h2>
          A Simple Path to
          <br />
          <span>Web3 Knowledge.</span>
        </h2>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">
              01
            </div>

            <h3>CHOOSE A TOPIC</h3>

            <p>
              Pick a subject that interests you and start with
              the fundamentals.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              02
            </div>

            <h3>FOLLOW THE LESSONS</h3>

            <p>
              Learn through structured explanations designed to
              make difficult concepts easier to follow.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              03
            </div>

            <h3>CONNECT THE CONCEPTS</h3>

            <p>
              Understand how different parts of Web3 technology
              work together.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              04
            </div>

            <h3>KEEP EXPLORING</h3>

            <p>
              Continue developing your knowledge as blockchain
              technology evolves.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE BIGGER PICTURE
      ====================================================== */}
      <section className="featured-section">
        <div className="featured-card">
          <div className="featured-image">
            <img
              src="/images/bigger-picture-web3.png.jpg"
              alt="Astronaut exploring a futuristic Web3 landscape"
              className="featured-photo"
            />

            <div className="featured-image-overlay" />
            <div className="featured-image-vignette" />
          </div>

          <div className="featured-content">
            <div className="section-label">
              [ THE BIGGER PICTURE ]
            </div>

            <h2>
              A More
              <br />
              Open,
              <br />
              <span>Educated</span>
              <br />
              <span>Web3</span>
              <br />
              <span>Future.</span>
            </h2>

            <p>
              We believe people should be able to understand the
              technologies they interact with.
            </p>

            <p>
              Whether you are completely new to blockchain, exploring
              Solana, researching meme coins, or learning how to
              protect your digital assets, ChainLab provides a place
              to build your foundation.
            </p>
          </div>

          <div className="featured-label">
            CHAINLAB / THE BIGGER PICTURE
          </div>

          <div className="featured-location">
            EXPLORE / LEARN / BUILD
          </div>
        </div>
      </section>

      {/* =====================================================
          SECURITY FIRST
      ====================================================== */}
      <section className="security-section">
        <div className="security-content">
          <div className="section-label">
            [ SECURITY FIRST ]
          </div>

          <h2>
            Knowledge Is Part
            <br />
            <span>of Your Security.</span>
          </h2>

          <p>
            Web3 gives users greater control, but greater control
            also means greater responsibility.
          </p>

          <p>
            Understanding wallets, private keys, transactions,
            phishing attempts, malicious contracts, scams, and
            common social-engineering techniques can help users
            make better decisions.
          </p>

          <Link
            href="/learn/security"
            className="secondary-button"
          >
            LEARN WEB3 SECURITY →
          </Link>
        </div>

        <div className="security-visual">
          <img
            src="/images/web3-security-visual.jpg"
            alt="Web3 security verification concept"
            className="security-photo"
          />

          <div className="security-image-overlay" />

          <div className="security-image-label">
            VERIFY / BEFORE YOU TRUST
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING EXPERIENCE
      ====================================================== */}
      <section className="testimonials-section">
        <div className="section-heading-row">
          <div>
            <div className="section-label">
              [ THE LEARNING EXPERIENCE ]
            </div>

            <h2>
              Built for Curious
              <br />
              <span>Learners.</span>
            </h2>
          </div>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              ChainLab focuses on explaining the concepts instead
              of assuming the learner already understands the
              technology.
            </p>

            <div className="testimonial-author">
              <strong>
                THE BEGINNER
              </strong>

              <span>
                Starting the Web3 journey
              </span>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              The structured approach makes it easier to connect
              blockchain fundamentals with technologies such as
              Solana and token ecosystems.
            </p>

            <div className="testimonial-author">
              <strong>
                THE EXPLORER
              </strong>

              <span>
                Going deeper into Web3
              </span>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              Security is treated as part of the learning journey,
              not something that should only be considered after
              using Web3 applications.
            </p>

            <div className="testimonial-author">
              <strong>
                THE BUILDER
              </strong>

              <span>
                Learning to think technically
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section
        className="faq-section"
        id="faq"
      >
        <div className="faq-heading">
          <div className="section-label">
            [ FREQUENTLY ASKED QUESTIONS ]
          </div>

          <h2>
            Got Questions?
            <br />
            <span>We've Got Answers.</span>
          </h2>
        </div>

        <div className="faq-list">
          <details>
            <summary>
              Is ChainLab free?
              <span>+</span>
            </summary>

            <p>
              ChainLab is designed as a free educational resource
              for people who want to learn about blockchain and
              Web3 technologies.
            </p>
          </details>

          <details>
            <summary>
              Do I need previous blockchain experience?
              <span>+</span>
            </summary>

            <p>
              No. The learning path starts with foundational
              concepts and progressively introduces more
              specialized Web3 topics.
            </p>
          </details>

          <details>
            <summary>
              What can I learn on ChainLab?
              <span>+</span>
            </summary>

            <p>
              Current learning areas include blockchain,
              Solana, meme coins, and Web3 security, with
              additional topics planned as the learning system
              expands.
            </p>
          </details>

          <details>
            <summary>
              Is ChainLab an investment platform?
              <span>+</span>
            </summary>

            <p>
              No. ChainLab is an educational website. Its purpose
              is to provide learning material and help users
              understand Web3 concepts.
            </p>
          </details>

          <details>
            <summary>
              Who created ChainLab?
              <span>+</span>
            </summary>

            <p>
              ChainLab is an educational initiative created by
              Birthday Messaging.
            </p>
          </details>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="final-section">
        <div className="final-inner">
          <div className="section-label">
            [ READY TO START? ]
          </div>

          <h2>
            Your Web3
            <br />
            <span>Learning Journey Starts Here.</span>
          </h2>

          <p>
            Start with the fundamentals. Build your knowledge.
            Understand the technology.
          </p>

          <Link
            href="/learn"
            className="primary-button large-button"
          >
            START LEARNING <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link
              href="/"
              className="brand"
            >
              [CHAINLAB]
            </Link>

            <p>
              An educational platform created by Birthday
              Messaging to make blockchain and Web3 easier
              to understand.
            </p>

            <span className="footer-tagline">
              LEARN. PRACTICE. BUILD. SUCCEED.
            </span>
          </div>

          <div className="footer-column">
            <h4>LEARNING</h4>

            <Link href="/learn">
              Learn
            </Link>

            <Link href="/learn/blockchain">
              Blockchain
            </Link>

            <Link href="/learn/solana">
              Solana
            </Link>

            <Link href="/learn/meme-coins">
              Meme Coins
            </Link>

            <Link href="/learn/security">
              Security
            </Link>
          </div>

          <div className="footer-column">
            <h4>CHAINLAB</h4>

            <a href="#learning-paths">
              Learning Paths
            </a>

            <a href="#about">
              About
            </a>

            <a href="#faq">
              FAQ
            </a>
          </div>

          <div className="footer-column">
            <h4>COMPANY</h4>

            <span>
              Birthday Messaging
            </span>

            <span>
              Educational Initiative
            </span>

            <span>
              Web3 Education
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Birthday Messaging. All rights reserved.
          </span>

          <span>
            CHAINLAB — WEB3 EDUCATION
          </span>
        </div>
      </footer>
    </main>
  );
}

