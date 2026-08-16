export default function SecurityPage() {
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
        <p className="eyebrow">[ 04 / SECURITY ]</p>

        <h1>
          LEARN BEFORE
          <br />
          <span>YOU CONNECT.</span>
        </h1>

        <p className="learning-intro">
          Learn how to protect your wallet, recognize common Web3
          threats, and interact with blockchain applications safely.
        </p>
      </section>

      {/* Introduction */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ SECURITY / 001 ]</p>

          <h2>YOUR WALLET IS YOUR RESPONSIBILITY.</h2>
        </div>

        <div className="lesson-content">
          <p>
            Blockchain transactions are generally designed to be
            irreversible. This means that sending assets to the wrong
            address or approving a malicious transaction can result
            in permanent loss.
          </p>

          <p>
            Security therefore begins with understanding what you are
            signing, which website you are using, and which permissions
            you are giving to a blockchain application.
          </p>

          <p>
            Never share your seed phrase or private key with another
            person or website.
          </p>
        </div>
      </section>

      {/* Security threats */}
      <section className="concept-section">
        <p className="eyebrow">[ COMMON THREATS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>PHISHING</h3>

            <p>
              Attackers may create fake websites, messages, or
              accounts designed to trick users into revealing
              sensitive information.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>FAKE TOKENS</h3>

            <p>
              Anyone can create tokens with similar names or symbols.
              Always verify the official token contract address.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>MALICIOUS LINKS</h3>

            <p>
              Unknown links can lead to fraudulent websites or
              applications designed to steal assets or information.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>RUG PULLS</h3>

            <p>
              Some projects are designed to take advantage of users
              through malicious contracts, liquidity removal, or
              dishonest project structures.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>FAKE AIRDROPS</h3>

            <p>
              Unexpected token distributions may be used to attract
              users to malicious websites or contracts.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>IMPERSONATION</h3>

            <p>
              Attackers may pretend to be project teams, developers,
              support staff, or influencers to gain your trust.
            </p>
          </article>
        </div>
      </section>

      {/* Wallet security */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ WALLET SECURITY / 002 ]</p>

          <h2>PROTECT YOUR WALLET.</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>

            <h3>PROTECT YOUR SEED PHRASE</h3>

            <p>
              Keep your recovery phrase private and store it securely.
              Never send it through messages or email.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>

            <h3>VERIFY WEBSITES</h3>

            <p>
              Check the website address carefully before connecting
              your wallet or signing a transaction.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>READ TRANSACTIONS</h3>

            <p>
              Understand what your wallet is asking you to approve
              before confirming a transaction.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>USE A SEPARATE WALLET</h3>

            <p>
              Consider separating wallets for different activities
              instead of exposing important assets to unknown
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Before connecting */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ BEFORE CONNECTING / 003 ]</p>

          <h2>STOP. CHECK. CONNECT.</h2>
        </div>

        <div className="lesson-content">
          <p>
            Before connecting your wallet to a decentralized
            application, verify that you are using the correct
            website.
          </p>

          <p>
            Check the project's official communication channels and
            compare contract addresses rather than trusting search
            results, advertisements, or messages from strangers.
          </p>

          <p>
            If a website asks for your seed phrase or private key,
            stop immediately. Legitimate decentralized applications
            should not require you to reveal these secrets.
          </p>
        </div>
      </section>

      {/* Security checklist */}
      <section className="concept-section">
        <p className="eyebrow">[ SECURITY CHECKLIST ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>VERIFY</h3>

            <p>
              Verify the website, token address, contract, and source
              of the information before interacting.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>QUESTION</h3>

            <p>
              Be suspicious of unexpected messages, urgent requests,
              unrealistic promises, and guaranteed returns.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>LIMIT</h3>

            <p>
              Avoid giving unnecessary permissions to applications and
              review wallet approvals regularly.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>PROTECT</h3>

            <p>
              Keep recovery phrases and private keys offline and
              protected from unauthorized access.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>RESEARCH</h3>

            <p>
              Learn about the project before connecting your wallet or
              purchasing a token.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>THINK FIRST</h3>

            <p>
              If something feels suspicious or rushed, stop and
              investigate before signing anything.
            </p>
          </article>
        </div>
      </section>

      {/* Final message */}
      <section className="next-section">
        <p className="eyebrow">[ CHAINLAB PROTOCOL ]</p>

        <h2>
          LEARN.
          <br />
          <span>VERIFY. EXPLORE.</span>
        </h2>

        <a href="/" className="primary-button">
          RETURN TO CHAINLAB →
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