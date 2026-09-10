import Link from "next/link";
import styles from "./meme-coins.module.css";

export default function MemeCoinsPage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <header className={styles.header}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            [CHAINLAB]
          </Link>

          <nav className={styles.nav}>
            <Link href="/learn/blockchain">BLOCKCHAIN</Link>
            <Link href="/learn/solana">SOLANA</Link>
            <Link
              href="/learn/meme-coins"
              className={styles.active}
            >
              MEME COINS
            </Link>
            <Link href="/learn/security">SECURITY</Link>
          </nav>

          <Link href="/learn" className={styles.navButton}>
            LEARNING HUB <span>→</span>
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* LEFT SIDE */}
          <div className={styles.heroContent}>
            <div className={styles.sectionLabel}>
              [ 03 / MEME COINS ]
            </div>

            <h1>
              NOT
              <br />
              JUST
              <br />
              <span>HYPE.</span>
            </h1>

            <p className={styles.heroText}>
              Meme coins sit at the intersection of technology,
              communities, online culture and market speculation.
              Understanding how they work is more important than
              simply following the hype.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#mechanics"
                className={styles.primaryButton}
              >
                EXPLORE THE MECHANICS <span>→</span>
              </a>

              <a
                href="#risks"
                className={styles.secondaryButton}
              >
                UNDERSTAND THE RISKS
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — DOWNLOADED IMAGE */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <img
                src="/images/meme-coins-hero.png"
                alt="Meme coins and blockchain"
                className={styles.heroCardImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className={styles.introduction}>
        <div className={styles.sectionLabel}>
          [ THE FOUNDATION ]
        </div>

        <div className={styles.introductionGrid}>
          <div>
            <h2>
              WHAT IS A
              <br />
              <span>MEME COIN?</span>
            </h2>
          </div>

          <div className={styles.introductionContent}>
            <p>
              A meme coin is a cryptocurrency or token that is
              strongly influenced by internet culture, memes,
              communities, trends, and social attention.
            </p>

            <p>
              Some meme coins are built primarily around community
              participation and culture rather than a complex
              technical application. Others can develop broader
              ecosystems, utilities, communities, and markets.
            </p>

            <p>
              The important distinction is that popularity does
              not automatically mean value, utility, or safety.
              Understanding the underlying mechanics is therefore
              essential.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE CONCEPTS
      ====================================================== */}
      <section className={styles.concepts}>
        <div className={styles.sectionLabel}>
          [ CORE CONCEPTS ]
        </div>

        <div className={styles.sectionHeading}>
          <h2>
            UNDERSTAND WHAT
            <br />
            <span>DRIVES A TOKEN.</span>
          </h2>
        </div>

        <div className={styles.conceptGrid}>
          <article className={styles.conceptCard}>
            <span>01</span>

            <h3>TOKEN</h3>

            <p>
              The digital asset itself. A meme coin is represented
              by a token that exists on a blockchain network.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>02</span>

            <h3>SUPPLY</h3>

            <p>
              The number of tokens created and the amount available
              in circulation can influence how a token behaves in
              the market.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>03</span>

            <h3>LIQUIDITY</h3>

            <p>
              Liquidity allows people to buy and sell tokens.
              Limited liquidity can make prices move dramatically.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>04</span>

            <h3>COMMUNITY</h3>

            <p>
              Meme coins often depend heavily on community
              participation, attention, culture, and social activity.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>05</span>

            <h3>TOKENOMICS</h3>

            <p>
              Tokenomics describes the economic design of a token,
              including supply, distribution, incentives and utility.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>06</span>

            <h3>MARKET CAP</h3>

            <p>
              Market capitalization provides a way of estimating
              the total market value of tokens currently in
              circulation.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          HOW MEME COINS WORK
      ====================================================== */}
      <section
        className={styles.mechanics}
        id="mechanics"
      >
        <div className={styles.sectionLabel}>
          [ HOW IT WORKS ]
        </div>

        <div className={styles.mechanicsHeader}>
          <h2>
            FROM CREATION
            <br />
            <span>TO MARKET.</span>
          </h2>

          <p className={styles.processIntro}>
            A meme coin can move through several stages from
            creation to community adoption and market activity.
          </p>
        </div>

        <div className={styles.processList}>
          <div className={styles.processRow}>
            <div className={styles.processNumber}>01</div>

            <div className={styles.processTitle}>
              <h3>CREATE</h3>
            </div>

            <div className={styles.processContent}>
              <p>
                A token is created on a blockchain network using
                the network's token standards or smart-contract
                functionality.
              </p>
            </div>
          </div>

          <div className={styles.processRow}>
            <div className={styles.processNumber}>02</div>

            <div className={styles.processTitle}>
              <h3>DISTRIBUTE</h3>
            </div>

            <div className={styles.processContent}>
              <p>
                Tokens can be distributed through different
                mechanisms depending on how the project is
                structured.
              </p>
            </div>
          </div>

          <div className={styles.processRow}>
            <div className={styles.processNumber}>03</div>

            <div className={styles.processTitle}>
              <h3>LIQUIDITY</h3>
            </div>

            <div className={styles.processContent}>
              <p>
                Liquidity can be provided to markets so users can
                trade the token.
              </p>
            </div>
          </div>

          <div className={styles.processRow}>
            <div className={styles.processNumber}>04</div>

            <div className={styles.processTitle}>
              <h3>COMMUNITY</h3>
            </div>

            <div className={styles.processContent}>
              <p>
                Communities can drive awareness, discussion,
                participation, culture and attention around a token.
              </p>
            </div>
          </div>

          <div className={styles.processRow}>
            <div className={styles.processNumber}>05</div>

            <div className={styles.processTitle}>
              <h3>MARKET</h3>
            </div>

            <div className={styles.processContent}>
              <p>
                Once trading activity develops, supply, demand,
                liquidity, sentiment and market conditions can
                influence price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOKENOMICS
      ====================================================== */}
      <section className={styles.tokenomics}>
        <div className={styles.sectionLabel}>
          [ TOKENOMICS ]
        </div>

        <div className={styles.tokenomicsHeader}>
          <h2>
            FOLLOW THE
            <br />
            <span>NUMBERS.</span>
          </h2>

          <p>
            Understanding token supply and distribution can help
            provide important context when researching a meme coin.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metric}>
            <span>01</span>

            <h3>TOTAL SUPPLY</h3>

            <p>
              The total number of tokens that exist or are intended
              to exist according to the token's design.
            </p>
          </div>

          <div className={styles.metric}>
            <span>02</span>

            <h3>CIRCULATING SUPPLY</h3>

            <p>
              The number of tokens currently considered to be
              circulating in the market.
            </p>
          </div>

          <div className={styles.metric}>
            <span>03</span>

            <h3>DISTRIBUTION</h3>

            <p>
              How tokens are allocated among wallets, communities,
              teams, liquidity pools and other participants.
            </p>
          </div>

          <div className={styles.metric}>
            <span>04</span>

            <h3>LIQUIDITY</h3>

            <p>
              The available trading liquidity can influence how
              easily participants can enter or exit positions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RISKS
      ====================================================== */}
      <section
        className={styles.risks}
        id="risks"
      >
        <div className={styles.sectionLabel}>
          [ RISK PROTOCOL ]
        </div>

        <div className={styles.riskHeader}>
          <h2>
            UNDERSTAND THE
            <br />
            <span>RISK.</span>
          </h2>

          <p>
            Meme coins can be highly volatile and speculative.
            Learning how to identify common risks is an important
            part of responsible participation.
          </p>
        </div>

        <div className={styles.riskGrid}>
          <article className={styles.riskCard}>
            <span>01</span>

            <h3>VOLATILITY</h3>

            <p>
              Prices can move rapidly because of speculation,
              sentiment, liquidity and changing market conditions.
            </p>
          </article>

          <article className={styles.riskCard}>
            <span>02</span>

            <h3>SCAMS</h3>

            <p>
              Fraudulent projects, fake websites, impersonation and
              misleading information can put users at risk.
            </p>
          </article>

          <article className={styles.riskCard}>
            <span>03</span>

            <h3>RUG PULLS</h3>

            <p>
              Some projects can be structured in ways that allow
              insiders to remove liquidity or exploit participants.
            </p>
          </article>

          <article className={styles.riskCard}>
            <span>04</span>

            <h3>CONCENTRATION</h3>

            <p>
              If a small number of wallets control a large supply,
              their actions can significantly affect the market.
            </p>
          </article>

          <article className={styles.riskCard}>
            <span>05</span>

            <h3>FOMO</h3>

            <p>
              Fear of missing out can encourage impulsive decisions
              without adequate research.
            </p>
          </article>

          <article className={styles.riskCard}>
            <span>06</span>

            <h3>DYOR</h3>

            <p>
              Do your own research. Verify information before
              trusting a project, contract, community or promotion.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          RESEARCH
      ====================================================== */}
      <section className={styles.research}>
        <div className={styles.sectionLabel}>
          [ RESEARCH BEFORE PARTICIPATING ]
        </div>

        <div className={styles.researchBox}>
          <h2>
            DON'T FOLLOW
            <br />
            <span>THE NOISE.</span>
          </h2>

          <p>
            Research the underlying information before making
            decisions about a token.
          </p>

          <div className={styles.researchGrid}>
            <div>
              <span>01</span>
              <h3>CONTRACT</h3>
              <p>
                Verify the token contract address and make sure you
                are interacting with the intended asset.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>LIQUIDITY</h3>
              <p>
                Consider whether sufficient liquidity exists and
                understand where it is held.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>HOLDERS</h3>
              <p>
                Examine token distribution and whether ownership
                appears heavily concentrated.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>SOURCES</h3>
              <p>
                Check information across reliable sources rather
                than relying on a single social-media post.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KNOWLEDGE CHECK
      ====================================================== */}
      <section className={styles.knowledge}>
        <div className={styles.sectionLabel}>
          [ KNOWLEDGE CHECK ]
        </div>

        <h2>
          TEST YOUR
          <br />
          <span>UNDERSTANDING.</span>
        </h2>

        <p>
          Before moving forward, make sure you understand the
          relationship between tokens, liquidity, communities,
          tokenomics and risk.
        </p>

        <div className={styles.checkList}>
          <div className={styles.checkItem}>
            <span>01</span>

            <div>
              <h3>
                Does popularity guarantee that a meme coin is
                valuable?
              </h3>

              <p>
                No. Popularity and market attention do not
                automatically establish long-term value or safety.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>02</span>

            <div>
              <h3>
                Why does liquidity matter?
              </h3>

              <p>
                Liquidity affects how easily participants can trade
                an asset and how strongly trades can influence price.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>03</span>

            <div>
              <h3>
                Why should token distribution be researched?
              </h3>

              <p>
                Concentrated ownership can create additional risks
                because a small number of wallets may have
                significant influence over the market.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>04</span>

            <div>
              <h3>
                What should you do before interacting with a token?
              </h3>

              <p>
                Verify the contract, research liquidity and holders,
                check reliable sources and understand the risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT MODULE
      ====================================================== */}
      <section className={styles.nextModule}>
        <div className={styles.sectionLabel}>
          [ NEXT MODULE ]
        </div>

        <h2>
          SECURITY
          <br />
          <span>MATTERS.</span>
        </h2>

        <p>
          Understanding meme coins is only part of the Web3
          journey. The next step is learning how to protect
          wallets, private keys, transactions and digital assets.
        </p>

        <Link
          href="/learn/security"
          className={styles.primaryButton}
        >
          LEARN WEB3 SECURITY <span>→</span>
        </Link>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            [CHAINLAB]
          </Link>

          <span>
            Learn. Understand. Explore.
          </span>
        </div>

        <div className={styles.footerLinks}>
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
        </div>

        <p>
          © 2026 CHAINLAB — EDUCATIONAL PROJECT
        </p>
      </footer>
    </main>
  );
}