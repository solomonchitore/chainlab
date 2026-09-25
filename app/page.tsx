"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  const tx = (key: string, fallback: string) => {
    const translated = t(key);
    return translated === key ? fallback : translated;
  };

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
            <Link href="/learn/blockchain">{tx("nav.blockchain", "BLOCKCHAIN")}</Link>
            <Link href="/learn/solana">{tx("nav.solana", "SOLANA")}</Link>
            <Link href="/learn/meme-coins">{tx("nav.memeCoins", "MEME COINS")}</Link>
            <Link href="/learn/security">{tx("nav.security", "SECURITY")}</Link>
          </nav>

          <Link href="/learn" className="nav-button">
            {t("home.hero.startLearning")} <span>→</span>
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
              {t("home.hero.eyebrow")}
            </div>

            <h1>
              {t("home.hero.learn")}
              <br />
              {t("home.hero.build")}
              <br />
              {t("home.hero.ownThe")}
              <br />
              <span>{t("home.hero.future")}</span>
            </h1>

            <p className="hero-description">
              {t("home.hero.description")}
            </p>

            <div className="hero-actions">
              <Link
                href="/learn"
                className="primary-button"
              >
                {t("home.hero.startLearning")} <span>→</span>
              </Link>

              <a
                href="#learning-paths"
                className="secondary-button"
              >
                {t("home.hero.exploreTopics")}
              </a>
            </div>

            <p className="hero-note">
              {t("home.hero.note")}
            </p>
          </div>
        </div>

        {/* =========================
            INTRODUCTION / LEARNING OVERVIEW
        ========================== */}
        <section className="hero-learning-overview" aria-labelledby="overview-heading">
          <div className="overview-heading-group">
            <p className="overview-kicker">{t("home.overview.kicker")}</p>
            <h2 id="overview-heading">{tx("home.overview.title", "Build Understanding, One Concept at a Time.")}</h2>
            <p className="overview-intro">
              {t("home.overview.intro")}
            </p>
          </div>

          {/* =========================
              FIVE CORE LEARNING TOPICS
          ========================== */}
          <div className="overview-topics-heading">
            <p className="overview-kicker">{t("home.topics.kicker")}</p>
            <p className="overview-intro">
              {t("home.topics.intro")}
            </p>
          </div>

          <div className="overview-content-grid">
            <article className="overview-card">
              <span className="overview-number">{t("home.topic.blockchain.number")}</span>
              <h3>{t("home.topic.blockchain.title")}</h3>
              <p>
                {t("home.topic.blockchain.description")}
              </p>
              <Link href="/learn/blockchain" className="overview-text-link">{t("home.topic.blockchain.link")} <span>→</span></Link>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.topic.solana.number")}</span>
              <h3>{t("home.topic.solana.title")}</h3>
              <p>
                {t("home.topic.solana.description")}
              </p>
              <Link href="/learn/solana" className="overview-text-link">{t("home.topic.solana.link")} <span>→</span></Link>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.topic.memeCoins.number")}</span>
              <h3>{t("home.topic.memeCoins.title")}</h3>
              <p>
                {t("home.topic.memeCoins.description")}
              </p>
              <Link href="/learn/meme-coins" className="overview-text-link">{t("home.topic.memeCoins.link")} <span>→</span></Link>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.topic.security.number")}</span>
              <h3>{t("home.topic.security.title")}</h3>
              <p>
                {t("home.topic.security.description")}
              </p>
              <Link href="/learn/security" className="overview-text-link">{t("home.topic.security.link")} <span>→</span></Link>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.topic.dapps.number")}</span>
              <h3>{t("home.topic.dapps.title")}</h3>
              <p>
                {t("home.topic.dapps.description")}
              </p>
              <Link href="/learn" className="overview-text-link">{t("home.bottom.browse")} <span>→</span></Link>
            </article>
          </div>

          <div className="overview-content-grid">
            <article className="overview-card">
              <span className="overview-number">{t("home.understand.number")}</span>
              <h3>{t("home.understand.title")}</h3>
              <p>
                {tx("home.understand.description", "Discover what a blockchain is, how distributed networks record information, and how blocks, transactions, consensus, and validators relate to one another.")}
              </p>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.explore.number")}</span>
              <h3>{t("home.explore.title")}</h3>
              <p>
                {tx("home.explore.description", "Follow the connections between wallets, keys, tokens, smart contracts, decentralized applications, and the networks that support them.")}
              </p>
            </article>
            <article className="overview-card">
              <span className="overview-number">{t("home.practise.number")}</span>
              <h3>{t("home.practise.title")}</h3>
              <p>
                {tx("home.practise.description", "Use structured explanations and practical examples to reinforce each topic, check your understanding, and build a foundation for further study.")}
              </p>
            </article>
          </div>

          <div className="overview-bottom-line">
            <p><strong>{t("home.bottom.startCurious")}</strong> {t("home.bottom.description")}</p>
            <Link href="/learn" className="overview-text-link">BROWSE THE LEARNING LIBRARY <span>→</span></Link>
          </div>
        </section>

        {/* =========================
            HERO FEATURES
        ========================== */}
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon">◇</div>

            <div>
              <h3>{t("home.features.practical.title")}</h3>

              <p>
                {tx("home.features.practical.description", "Step-by-step lessons designed for beginners and future Web3 builders.")}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⬡</div>

            <div>
              <h3>{t("home.features.web3.title")}</h3>

              <p>
                {tx("home.features.web3.description", "Learn blockchain, Solana, meme coins, tokenomics, and decentralized technologies.")}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">◈</div>

            <div>
              <h3>{t("home.features.security.title")}</h3>

              <p>
                {tx("home.features.security.description", "Understand Web3 risks and learn how to protect yourself in the decentralized world.")}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">◎</div>

            <div>
              <h3>{t("home.features.community.title")}</h3>

              <p>
                {tx("home.features.community.description", "Build knowledge that can help you participate in the evolving Web3 ecosystem.")}
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
            <span>{t("home.stats.coreTopics")}</span>
          </div>

          <div className="stat">
            <strong>04</strong>
            <span>{t("home.stats.learningPaths")}</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>{t("home.stats.access")}</span>
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
              {t("home.about.label")}
            </div>

            <h2>
              {tx("home.about.title", "The Company")}
              <br />
              <span>{tx("home.about.titleSpan", "Behind ChainLab.")}</span>
            </h2>

            <p>
              {tx("home.about.description", "ChainLab is an educational initiative created by Birthday Messaging to make blockchain and Web3 technology easier to understand.")}
            </p>

            <p>
              {tx("home.about.description2", "As emerging technologies continue to change the way people build, communicate, transact, and participate online, understanding the technology behind them becomes increasingly important.")}
            </p>

            <p>
              {tx("home.about.description3", "Birthday Messaging created ChainLab as a learning environment where people can explore these concepts progressively — starting with the fundamentals and moving toward more advanced Web3 topics.")}
            </p>

            <Link
              href="/learn"
              className="primary-button company-button"
            >
              {tx("home.about.button", "EXPLORE CHAINLAB")} <span>→</span>
            </Link>
          </div>

          <div className="company-label">
            {tx("home.about.companyLabel", "BIRTHDAY MESSAGING / CHAINLAB")}
          </div>

          <div className="company-location">
            {tx("home.about.location", "EDUCATION / TECHNOLOGY / WEB3")}
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

            <h3>{t("home.values.innovation.title")}</h3>

            <p>
              {tx("home.values.innovation.description", "Exploring emerging technologies and the ideas shaping the digital future.")}
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

            <h3>{t("home.values.education.title")}</h3>

            <p>
              {tx("home.values.education.description", "Turning complex technical concepts into practical knowledge people can understand.")}
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

            <h3>{t("home.values.access.title")}</h3>

            <p>
              {tx("home.values.access.description", "Making foundational Web3 education available without unnecessary barriers.")}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHAINLAB
      ====================================================== */}
      <section className="mission-section">
        <div className="section-label">
          {t("home.mission.label")}
        </div>

        <div className="mission-heading">
          <h2>
            {tx("home.about.whyTitle", "Web3 Is Changing.")}
            <br />
            <span>Understanding It Matters.</span>
          </h2>

          <p>
            {tx("home.about.whyIntro", "Blockchain technology is more than cryptocurrency. It introduces new ways of thinking about ownership, digital assets, applications, identity, communities, and online coordination.")}
          </p>
        </div>

        <div className="mission-grid">
          <article>
            <span className="number">01</span>

            <h3>{t("home.mission.fundamentals.title")}</h3>

            <p>
              {tx("home.mission.fundamentals.description", "Build a strong understanding of blockchain before moving into more specialized technologies.")}
            </p>
          </article>

          <article>
            <span className="number">02</span>

            <h3>{t("home.mission.connection.title")}</h3>

            <p>
              {tx("home.mission.connection.description", "Understand how wallets, networks, transactions, tokens, applications, and users fit together.")}
            </p>
          </article>

          <article>
            <span className="number">03</span>

            <h3>{t("home.mission.risks.title")}</h3>

            <p>
              {tx("home.mission.risks.description", "Learn why security, verification, responsible research, and user awareness matter in Web3.")}
            </p>
          </article>

          <article>
            <span className="number">04</span>

            <h3>{t("home.mission.builder.title")}</h3>

            <p>
              {tx("home.mission.builder.description", "Move beyond simply using technology and develop the knowledge required to understand how it works.")}
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
              {t("home.paths.label")}
            </div>

            <h2>
              {tx("home.paths.chooseTopic", "Choose a Topic.")}
              <br />
              <span>{tx("home.paths.startJourney", "Start Your Journey.")}</span>
            </h2>
          </div>

          <Link
            href="/learn"
            className="text-link"
          >
            {t("home.paths.viewAll")}
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

            <h3>{t("home.paths.blockchain.title")}</h3>

            <p>
              {tx("home.paths.blockchain.description", "Learn the fundamentals of blockchain technology, decentralized networks, transactions, blocks, and validation.")}
            </p>

            <strong>
              {t("home.paths.startModule")}
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

            <h3>{t("home.paths.solana.title")}</h3>

            <p>
              {tx("home.paths.solana.description", "Explore Solana, its architecture, accounts, programs, transactions, validators, and ecosystem.")}
            </p>

            <strong>
              {t("home.paths.startModule")}
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

            <h3>{t("home.paths.memeCoins.title")}</h3>

            <p>
              {tx("home.paths.memeCoins.description", "Understand tokens, communities, liquidity, tokenomics, market dynamics, and risk.")}
            </p>

            <strong>
              {t("home.paths.startModule")}
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

            <h3>{t("home.paths.security.title")}</h3>

            <p>
              {tx("home.paths.security.description", "Learn how wallets, private keys, scams, phishing, smart contracts, and user responsibility connect.")}
            </p>

            <strong>
              {t("home.paths.startModule")}
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

            <h3>{t("home.paths.tokenomics.title")}</h3>

            <p>
              {tx("home.paths.tokenomics.description", "Discover how token supply, distribution, utility, incentives, and market participation influence digital assets.")}
            </p>

            <strong>
              {t("home.paths.comingSoon")}
            </strong>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW CHAINLAB WORKS
      ====================================================== */}
      <section className="process-section">
        <div className="section-label">
          {t("home.process.label")}
        </div>

        <h2>
          {tx("home.process.title", "A Simple Path to")}
          <br />
          <span>{tx("home.process.titleSpan", "Web3 Knowledge.")}</span>
        </h2>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">
              01
            </div>

            <h3>{t("home.process.choose.title")}</h3>

            <p>
              {tx("home.process.choose.description", "Pick a subject that interests you and start with the fundamentals.")}
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              02
            </div>

            <h3>{t("home.process.follow.title")}</h3>

            <p>
              {tx("home.process.follow.description", "Learn through structured explanations designed to make difficult concepts easier to follow.")}
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              03
            </div>

            <h3>{t("home.process.connect.title")}</h3>

            <p>
              {tx("home.process.connect.description", "Understand how different parts of Web3 technology work together.")}
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">
              04
            </div>

            <h3>{t("home.process.keep.title")}</h3>

            <p>
              {tx("home.process.keep.description", "Continue developing your knowledge as blockchain technology evolves.")}
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
              {t("home.biggerPicture.label")}
            </div>

            <h2>
              {tx("home.biggerPicture.title1", "A More")}
              <br />
              {tx("home.biggerPicture.title2", "Open,")}
              <br />
              <span>{tx("home.biggerPicture.title3", "Educated")}</span>
              <br />
              <span>{tx("home.biggerPicture.title4", "Web3")}</span>
              <br />
              <span>{tx("home.biggerPicture.title5", "Future.")}</span>
            </h2>

            <p>
              {tx("home.biggerPicture.description", "We believe people should be able to understand the technologies they interact with.")}
            </p>

            <p>
              {tx("home.biggerPicture.description2", "Whether you are completely new to blockchain, exploring Solana, researching meme coins, or learning how to protect your digital assets, ChainLab provides a place to build your foundation.")}
            </p>
          </div>

          <div className="featured-label">
            {t("home.biggerPicture.labelBottom")}
          </div>

          <div className="featured-location">
            {t("home.biggerPicture.location")}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECURITY FIRST
      ====================================================== */}
      <section className="security-section">
        <div className="security-content">
          <div className="section-label">
            {t("home.security.label")}
          </div>

          <h2>
            {tx("home.security.title", "Knowledge Is Part")}
            <br />
            <span>{tx("home.security.titleSpan", "of Your Security.")}</span>
          </h2>

          <p>
            {tx("home.security.description", "Web3 gives users greater control, but greater control also means greater responsibility.")}
          </p>

          <p>
            {tx("home.security.description2", "Understanding wallets, private keys, transactions, phishing attempts, malicious contracts, scams, and common social-engineering techniques can help users make better decisions.")}
          </p>

          <Link
            href="/learn/security"
            className="secondary-button"
          >
            {t("home.security.button")}
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
            {t("home.security.imageLabel")}
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
              {t("home.learning.label")}
            </div>

            <h2>
              {tx("home.learning.title", "Built for Curious")}
              <br />
              <span>{tx("home.learning.titleSpan", "Learners.")}</span>
            </h2>
          </div>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              {tx("home.testimonial.beginner.description", "ChainLab focuses on explaining the concepts instead of assuming the learner already understands the technology.")}
            </p>

            <div className="testimonial-author">
              <strong>
                {t("home.testimonial.beginner.title")}
              </strong>

              <span>
                {t("home.testimonial.beginner.subtitle")}
              </span>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              {tx("home.testimonial.explorer.description", "The structured approach makes it easier to connect blockchain fundamentals with technologies such as Solana and token ecosystems.")}
            </p>

            <div className="testimonial-author">
              <strong>
                {t("home.testimonial.explorer.title")}
              </strong>

              <span>
                {t("home.testimonial.explorer.subtitle")}
              </span>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="quote">
              “
            </div>

            <p>
              {tx("home.testimonial.builder.description", "Security is treated as part of the learning journey, not something that should only be considered after using Web3 applications.")}
            </p>

            <div className="testimonial-author">
              <strong>
                {t("home.testimonial.builder.title")}
              </strong>

              <span>
                {t("home.testimonial.builder.subtitle")}
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
            {t("home.faq.label")}
          </div>

          <h2>
            {tx("home.faq.title", "Got Questions?")}
            <br />
            <span>{tx("home.faq.titleSpan", "We've Got Answers.")}</span>
          </h2>
        </div>

        <div className="faq-list">
          <details>
            <summary>
              {t("home.faq.free.question")}
              <span>+</span>
            </summary>

            <p>
              {tx("home.faq.free.answer", "ChainLab is designed as a free educational resource for people who want to learn about blockchain and Web3 technologies.")}
            </p>
          </details>

          <details>
            <summary>
              {t("home.faq.experience.question")}
              <span>+</span>
            </summary>

            <p>
              {tx("home.faq.experience.answer", "No. The learning path starts with foundational concepts and progressively introduces more specialized Web3 topics.")}
            </p>
          </details>

          <details>
            <summary>
              {t("home.faq.learn.question")}
              <span>+</span>
            </summary>

            <p>
              {tx("home.faq.learn.answer", "Current learning areas include blockchain, Solana, meme coins, and Web3 security, with additional topics planned as the learning system expands.")}
            </p>
          </details>

          <details>
            <summary>
              {t("home.faq.investment.question")}
              <span>+</span>
            </summary>

            <p>
              {tx("home.faq.investment.answer", "No. ChainLab is an educational website. Its purpose is to provide learning material and help users understand Web3 concepts.")}
            </p>
          </details>

          <details>
            <summary>
              {t("home.faq.creator.question")}
              <span>+</span>
            </summary>

            <p>
              {tx("home.faq.creator.answer", "ChainLab is an educational initiative created by Birthday Messaging.")}
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
            {t("home.final.label")}
          </div>

          <h2>
            {tx("home.final.title", "Your Web3")}
            <br />
            <span>{tx("home.final.titleSpan", "Learning Journey Starts Here.")}</span>
          </h2>

          <p>
            {tx("home.final.description", "Start with the fundamentals. Build your knowledge. Understand the technology.")}
          </p>

          <Link
            href="/learn"
            className="primary-button large-button"
          >
            {t("home.hero.startLearning")} <span>→</span>
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
              {tx("footer.description", "An educational platform created by Birthday Messaging to make blockchain and Web3 easier to understand.")}
            </p>

            <span className="footer-tagline">
              {tx("footer.tagline", "LEARN. PRACTICE. BUILD. SUCCEED.")}
            </span>
          </div>

          <div className="footer-column">
            <h4>{tx("footer.learning", "LEARNING")}</h4>

            <Link href="/learn">
              {tx("footer.learn", "Learn")}
            </Link>

            <Link href="/learn/blockchain">
              {tx("footer.blockchain", "Blockchain")}
            </Link>

            <Link href="/learn/solana">
              {tx("footer.solana", "Solana")}
            </Link>

            <Link href="/learn/meme-coins">
              {tx("footer.memeCoins", "Meme Coins")}
            </Link>

            <Link href="/learn/security">
              {tx("footer.security", "Security")}
            </Link>
          </div>

          <div className="footer-column">
            <h4>{tx("footer.chainlab", "CHAINLAB")}</h4>

            <a href="#learning-paths">
              {tx("footer.learningPaths", "Learning Paths")}
            </a>

            <a href="#about">
              {tx("footer.about", "About")}
            </a>

            <a href="#faq">
              {tx("footer.faq", "FAQ")}
            </a>
          </div>

          <div className="footer-column">
            <h4>{tx("footer.company", "COMPANY")}</h4>

            <span>
              {tx("footer.birthdayMessaging", "Birthday Messaging")}
            </span>

            <span>
              {tx("footer.educationalInitiative", "Educational Initiative")}
            </span>

            <span>
              {tx("footer.web3Education", "Web3 Education")}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {tx("footer.copyright", "© 2026 Birthday Messaging. All rights reserved.")}
          </span>

          <span>
            {tx("footer.bottomTagline", "CHAINLAB — WEB3 EDUCATION")}
          </span>
        </div>

      </footer>
    </main>
  );
}