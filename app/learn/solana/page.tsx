export default function SolanaPage() {
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
        <p className="eyebrow">[ 02 / SOLANA ]</p>

        <h1>
          FAST.
          <br />
          <span>SCALABLE.</span>
          <br />
          DECENTRALIZED.
        </h1>

        <p className="learning-intro">
          Learn how Solana works, how transactions are processed,
          what SOL is, and why developers build applications on
          the Solana network.
        </p>
      </section>

      {/* What is Solana */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ FUNDAMENTALS / 001 ]</p>

          <h2>WHAT IS SOLANA?</h2>
        </div>

        <div className="lesson-content">
          <p>
            Solana is a high-performance blockchain designed to
            support decentralized applications and digital assets.
          </p>

          <p>
            It is designed to process transactions quickly while
            keeping transaction costs relatively low.
          </p>

          <p>
            Solana uses a combination of technologies and network
            mechanisms to coordinate transactions between
            participants without relying on a traditional central
            authority.
          </p>
        </div>
      </section>

      {/* SOL */}
      <section className="concept-section">
        <p className="eyebrow">[ CORE CONCEPTS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>SOL</h3>

            <p>
              SOL is the native cryptocurrency of the Solana
              network. It can be used to pay transaction fees and
              interact with applications built on Solana.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>PROGRAMS</h3>

            <p>
              Solana programs are on-chain applications that contain
              the logic used to process transactions and perform
              specific operations.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>ACCOUNTS</h3>

            <p>
              Accounts are used by Solana applications and users to
              store information and state on the network.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>VALIDATORS</h3>

            <p>
              Validators participate in processing transactions and
              helping maintain the Solana network.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>TRANSACTIONS</h3>

            <p>
              Transactions contain instructions that request actions
              from Solana programs and accounts.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>FEES</h3>

            <p>
              Users generally pay network fees in SOL when submitting
              transactions to the Solana network.
            </p>
          </article>
        </div>
      </section>

      {/* How Solana works */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ HOW IT WORKS / 002 ]</p>

          <h2>HOW DOES A SOLANA TRANSACTION WORK?</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>

            <h3>CREATE</h3>

            <p>
              A user creates a transaction through a wallet or
              decentralized application.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>

            <h3>SIGN</h3>

            <p>
              The transaction is signed using the user's private
              cryptographic key.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>SUBMIT</h3>

            <p>
              The signed transaction is submitted to the Solana
              network for processing.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>CONFIRM</h3>

            <p>
              The network processes the transaction and records the
              resulting state.
            </p>
          </div>
        </div>
      </section>

      {/* Why Solana */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ WHY SOLANA / 003 ]</p>

          <h2>WHY DO DEVELOPERS USE SOLANA?</h2>
        </div>

        <div className="lesson-content">
          <p>
            Solana is designed for applications that require
            relatively fast transaction processing and low network
            fees.
          </p>

          <p>
            Its ecosystem includes decentralized finance applications,
            NFT projects, games, infrastructure tools, wallets, and
            token-based applications.
          </p>

          <p>
            Understanding the network before interacting with it is
            important, especially when working with wallets, tokens,
            and decentralized applications.
          </p>
        </div>
      </section>

      {/* Developer section */}
      <section className="concept-section">
        <p className="eyebrow">[ DEVELOPER STACK ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>RUST</h3>

            <p>
              Rust is widely used for developing Solana programs and
              provides the foundation for many Solana development
              workflows.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>ANCHOR</h3>

            <p>
              Anchor is a development framework that simplifies the
              process of building Solana programs.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>RPC</h3>

            <p>
              RPC endpoints allow applications and developers to
              communicate with the Solana network.
            </p>
          </article>
        </div>
      </section>

      {/* Next module */}
      <section className="next-section">
        <p className="eyebrow">[ NEXT MODULE ]</p>

        <h2>
          ENTER THE
          <br />
          <span>MEME COIN WORLD.</span>
        </h2>

        <a href="/learn/meme-coins" className="primary-button">
          LEARN MEME COINS →
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