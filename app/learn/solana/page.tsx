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
          Understand how Solana works, what SOL is, how transactions
          are processed, and how the Solana ecosystem fits together.
        </p>
      </section>

      {/* What Is Solana */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ FUNDAMENTALS / 001 ]</p>

          <h2>WHAT IS SOLANA?</h2>
        </div>

        <div className="lesson-content">
          <p>
            Solana is a blockchain network designed to support fast
            transactions and decentralized applications.
          </p>

          <p>
            Like other blockchain networks, Solana maintains a shared
            record of activity across a distributed network of
            computers.
          </p>

          <p>
            The network is designed to process a large number of
            transactions while keeping transaction costs relatively
            low.
          </p>

          <p>
            Solana can be used for decentralized applications,
            digital assets, payments, decentralized finance, games,
            and other Web3 applications.
          </p>
        </div>
      </section>

      {/* SOL */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ NATIVE ASSET / 002 ]</p>

          <h2>WHAT IS SOL?</h2>
        </div>

        <div className="lesson-content">
          <p>
            SOL is the native cryptocurrency of the Solana network.
          </p>

          <p>
            SOL can be used to pay transaction fees and can also
            participate in the network's staking system.
          </p>

          <p>
            Users can hold SOL in compatible wallets and use it when
            interacting with applications and services built on
            Solana.
          </p>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="concept-section">
        <p className="eyebrow">[ SOLANA CORE CONCEPTS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>ACCOUNTS</h3>

            <p>
              Accounts are used by the Solana runtime to store state
              and information required by applications and users.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>PROGRAMS</h3>

            <p>
              Solana programs contain the logic used by decentralized
              applications and can be invoked through transactions.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>TRANSACTIONS</h3>

            <p>
              Transactions contain instructions that request actions
              from programs and accounts on the network.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>VALIDATORS</h3>

            <p>
              Validators are computers that participate in processing
              transactions and maintaining the Solana network.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>PROOF OF STAKE</h3>

            <p>
              Solana uses a proof-of-stake-based system in which
              validators participate in securing and operating the
              network.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>PROOF OF HISTORY</h3>

            <p>
              Proof of History provides a cryptographic way to establish
              the ordering and passage of events within the network.
            </p>
          </article>
        </div>
      </section>

      {/* How Solana Works */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ HOW IT WORKS / 003 ]</p>

          <h2>HOW DOES SOLANA PROCESS A TRANSACTION?</h2>
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
              The transaction is signed using the appropriate
              cryptographic key.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>BROADCAST</h3>

            <p>
              The signed transaction is submitted to the Solana
              network for processing.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>EXECUTE</h3>

            <p>
              The network processes the transaction's instructions
              according to Solana's runtime rules.
            </p>
          </div>

          <div className="step">
            <span>[05]</span>

            <h3>CONFIRM</h3>

            <p>
              The network processes and confirms the transaction
              according to its consensus and confirmation mechanisms.
            </p>
          </div>

          <div className="step">
            <span>[06]</span>

            <h3>UPDATE</h3>

            <p>
              The resulting state changes are recorded and become
              available to applications and users.
            </p>
          </div>
        </div>
      </section>

      {/* Transaction Flow */}
      <section className="flow-section">
        <p className="eyebrow">[ SOLANA TRANSACTION FLOW ]</p>

        <h2>
          FROM WALLET
          <br />
          <span>TO NETWORK.</span>
        </h2>

        <div className="flow-grid">
          <div className="flow-item">
            <span>[01]</span>
            <strong>WALLET</strong>
            <p>Create and sign a transaction.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[02]</span>
            <strong>RPC</strong>
            <p>Submit the transaction to the network.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[03]</span>
            <strong>VALIDATORS</strong>
            <p>Process and validate network activity.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[04]</span>
            <strong>CONFIRM</strong>
            <p>Return the resulting network state.</p>
          </div>
        </div>
      </section>

      {/* Solana Ecosystem */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ ECOSYSTEM / 004 ]</p>

          <h2>WHAT CAN YOU BUILD ON SOLANA?</h2>
        </div>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>TOKENS</h3>

            <p>
              Digital assets can be created and managed through
              programs operating on the Solana network.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>DEFI</h3>

            <p>
              Decentralized finance applications can provide services
              such as trading, lending, and liquidity.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>NFTS</h3>

            <p>
              Solana can be used to create and interact with
              applications involving unique digital assets.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>GAMES</h3>

            <p>
              Developers can use blockchain infrastructure to build
              games with digital assets and on-chain interactions.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>MEME COINS</h3>

            <p>
              Solana has become a popular environment for creating and
              trading community-driven tokens.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>DAPPS</h3>

            <p>
              Developers can create decentralized applications that
              interact with Solana programs and accounts.
            </p>
          </article>
        </div>
      </section>

      {/* Advantages */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ UNDERSTANDING / 005 ]</p>

          <h2>SOLANA STRENGTHS & LIMITATIONS</h2>
        </div>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>THROUGHPUT</h3>

            <p>
              Solana is designed to process a high volume of blockchain
              activity.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>LOW FEES</h3>

            <p>
              Solana transactions are generally designed to have low
              network fees.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>DEVELOPER ECOSYSTEM</h3>

            <p>
              Developers can build applications using Solana programs,
              SDKs, wallets, and other ecosystem tools.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>COMPLEXITY</h3>

            <p>
              Understanding accounts, programs, transactions, and
              network infrastructure requires technical knowledge.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>NETWORK DEPENDENCY</h3>

            <p>
              Applications depend on the availability and behavior of
              the underlying blockchain infrastructure.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>USER RESPONSIBILITY</h3>

            <p>
              Users must protect their wallets and carefully verify
              applications and transactions before signing them.
            </p>
          </article>
        </div>
      </section>

      {/* Key Terms */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ QUICK REFERENCE / 006 ]</p>

          <h2>SOLANA KEY TERMS</h2>
        </div>

        <div className="lesson-content">
          <p>
            <strong>SOL:</strong> The native cryptocurrency of the
            Solana network.
          </p>

          <p>
            <strong>PROGRAM:</strong> Solana's term for the on-chain
            code that provides application logic.
          </p>

          <p>
            <strong>ACCOUNT:</strong> A location on Solana used to store
            data and state.
          </p>

          <p>
            <strong>VALIDATOR:</strong> A participant that helps process
            transactions and maintain the network.
          </p>

          <p>
            <strong>RPC:</strong> Infrastructure that allows applications
            and wallets to communicate with a blockchain network.
          </p>

          <p>
            <strong>TRANSACTION:</strong> A signed request containing
            instructions for actions on the network.
          </p>
        </div>
      </section>

      {/* Knowledge Check */}
      <section className="security-section">
        <p className="eyebrow">[ KNOWLEDGE CHECK ]</p>

        <h2>
          BEFORE YOU MOVE
          <br />
          <span>TO MEME COINS.</span>
        </h2>

        <p>
          You should now understand what Solana is, what SOL does,
          how transactions work, what programs and accounts are, and
          how validators participate in the network.
        </p>

        <a href="/learn/meme-coins" className="primary-button">
          CONTINUE TO MEME COINS →
        </a>
      </section>

      {/* Next Module */}
      <section className="next-section">
        <p className="eyebrow">[ NEXT MODULE ]</p>

        <h2>
          READY FOR
          <br />
          <span>MEME COINS?</span>
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