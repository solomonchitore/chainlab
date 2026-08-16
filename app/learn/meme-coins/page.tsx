export default function MemeCoinsPage() {
  return (
    <main className="learning-page">
      {/* Navigation */}
      <nav className="site-nav">
        <a href="/" className="logo">
          [CHAINLAB]
        </a>

        <div className="nav-links">
          <a href="/learn/blockchain">BLOCKCHAIN</a>
          <a href="/learn/solana">SOLANA</a>
          <a href="/learn/meme-coins">MEME COINS</a>
          <a href="/learn/security">SECURITY</a>
        </div>

        <a href="/" className="nav-action">
          HOME →
        </a>
      </nav>

      {/* Hero */}
      <section className="learning-hero">
        <p className="eyebrow">[ 03 / MEME COINS ]</p>

        <h1>
          NOT JUST
          <br />
          <span>HYPE.</span>
        </h1>

        <p className="learning-intro">
          Understand what meme coins are, how tokens work,
          how communities influence them, and what risks users
          should understand before participating.
        </p>
      </section>

      {/* What are meme coins? */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ FUNDAMENTALS / 001 ]</p>

          <h2>WHAT IS A MEME COIN?</h2>
        </div>

        <div className="lesson-content">
          <p>
            A meme coin is a cryptocurrency token that is often
            inspired by internet memes, characters, communities,
            trends, or online culture.
          </p>

          <p>
            Meme coins can attract attention quickly because their
            communities and social media activity can strongly
            influence interest in the project.
          </p>

          <p>
            However, popularity does not automatically mean that a
            token has strong technology, sustainable economics, or
            long-term value.
          </p>
        </div>
      </section>

      {/* Core concepts */}
      <section className="concept-section">
        <p className="eyebrow">[ CORE CONCEPTS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>TOKEN</h3>

            <p>
              A digital asset created and managed according to the
              rules of a blockchain program or token standard.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>SUPPLY</h3>

            <p>
              The number of tokens that exist or may exist according
              to the project's token design.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>LIQUIDITY</h3>

            <p>
              The availability of assets that allows users to buy or
              sell a token with less price disruption.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>COMMUNITY</h3>

            <p>
              The users and supporters surrounding a project who can
              influence awareness, discussion, and adoption.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>TOKENOMICS</h3>

            <p>
              The economic design of a token, including supply,
              distribution, utility, incentives, and allocation.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>MARKET CAP</h3>

            <p>
              A commonly used measurement calculated from a token's
              circulating supply and market price.
            </p>
          </article>
        </div>
      </section>

      {/* How meme coins work */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ HOW IT WORKS / 002 ]</p>

          <h2>HOW DOES A MEME COIN WORK?</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>

            <h3>CREATE</h3>

            <p>
              A project creates a token using the capabilities of a
              blockchain network.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>

            <h3>DISTRIBUTE</h3>

            <p>
              Tokens are distributed according to the project's
              chosen tokenomics and launch strategy.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>LIQUIDITY</h3>

            <p>
              Liquidity can be provided so users have a way to trade
              the token through supported markets.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>COMMUNITY</h3>

            <p>
              Community activity, social media, and awareness can
              increase attention around the project.
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ TOKENOMICS / 003 ]</p>

          <h2>UNDERSTAND THE NUMBERS.</h2>
        </div>

        <div className="lesson-content">
          <p>
            Tokenomics describes how a token is designed and
            distributed. Before interacting with a project, users
            should understand how many tokens exist and who controls
            significant portions of the supply.
          </p>

          <p>
            Important areas include total supply, circulating supply,
            allocation, vesting, liquidity, treasury holdings, and
            token utility.
          </p>

          <p>
            A large token supply by itself does not determine whether
            a project is valuable. The structure surrounding that
            supply is what needs to be examined.
          </p>
        </div>
      </section>

      {/* Risks */}
      <section className="concept-section">
        <p className="eyebrow">[ RISK PROTOCOL ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>VOLATILITY</h3>

            <p>
              Meme coins can experience significant price movements
              over short periods of time.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>SCAMS</h3>

            <p>
              Fake projects, impersonation, malicious links, and
              fraudulent token launches can target users.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>RUG PULLS</h3>

            <p>
              Some projects may be structured so that insiders can
              remove liquidity or otherwise harm participants.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>CONCENTRATION</h3>

            <p>
              A small number of wallets controlling a large share of
              supply can create additional risks.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>FOMO</h3>

            <p>
              Fear of missing out can cause people to make decisions
              based on emotion rather than research.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>DYOR</h3>

            <p>
              Research the project, tokenomics, contracts, liquidity,
              team information, and risks before interacting.
            </p>
          </article>
        </div>
      </section>

      {/* Research checklist */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ RESEARCH / 004 ]</p>

          <h2>BEFORE YOU BUY.</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>

            <h3>CHECK THE CONTRACT</h3>

            <p>
              Verify that you are interacting with the correct token
              and official contract address.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>

            <h3>CHECK LIQUIDITY</h3>

            <p>
              Understand where liquidity comes from and whether there
              are unusual liquidity risks.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>CHECK HOLDERS</h3>

            <p>
              Examine token distribution and whether a small number
              of wallets control large amounts.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>CHECK SOURCES</h3>

            <p>
              Use official project channels and verify information
              before connecting your wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Next module */}
      <section className="next-section">
        <p className="eyebrow">[ NEXT MODULE ]</p>

        <h2>
          PROTECT
          <br />
          <span>YOUR WALLET.</span>
        </h2>

        <a href="/learn/security" className="primary-button">
          LEARN SECURITY →
        </a>
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