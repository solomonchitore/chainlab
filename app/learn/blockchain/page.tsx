export default function BlockchainPage() {
  return (
    <main className="learning-page">
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

      <section className="learning-hero">
        <p className="eyebrow">[ 01 / BLOCKCHAIN ]</p>

        <h1>
          UNDERSTAND
          <br />
          <span>THE BLOCKCHAIN.</span>
        </h1>

        <p className="learning-intro">
          Learn the fundamental ideas behind blockchain technology
          before moving into Solana, tokens, and Web3.
        </p>
      </section>

      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ FUNDAMENTALS / 001 ]</p>

          <h2>WHAT IS A BLOCKCHAIN?</h2>
        </div>

        <div className="lesson-content">
          <p>
            A blockchain is a digital system for recording information
            in a way that can be shared across a network of computers.
          </p>

          <p>
            Instead of relying on one central organization to maintain
            the record, copies of the information can be maintained by
            many participants in the network.
          </p>

          <p>
            Information is grouped into blocks, and these blocks are
            connected together to form a chain.
          </p>
        </div>
      </section>

      <section className="concept-section">
        <p className="eyebrow">[ CORE CONCEPTS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>
            <h3>BLOCKS</h3>
            <p>
              Groups of transactions or other data that are recorded
              together on the blockchain.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>
            <h3>TRANSACTIONS</h3>
            <p>
              Digital instructions that record actions such as
              transferring assets between wallets.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>
            <h3>WALLETS</h3>
            <p>
              Tools that allow users to manage blockchain accounts and
              interact with decentralized applications.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>
            <h3>NODES</h3>
            <p>
              Computers that participate in maintaining, verifying, or
              communicating information across a blockchain network.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>
            <h3>CONSENSUS</h3>
            <p>
              Rules and mechanisms that allow network participants to
              agree on the state of the blockchain.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>
            <h3>DECENTRALIZATION</h3>
            <p>
              The distribution of control and responsibility across
              multiple participants rather than one central authority.
            </p>
          </article>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ HOW IT WORKS / 002 ]</p>

          <h2>HOW DOES A TRANSACTION WORK?</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>
            <h3>CREATE</h3>
            <p>
              A user creates a transaction using their blockchain
              wallet.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>
            <h3>SUBMIT</h3>
            <p>
              The transaction is submitted to the blockchain network.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>
            <h3>VERIFY</h3>
            <p>
              Network participants verify that the transaction follows
              the rules of the network.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>
            <h3>RECORD</h3>
            <p>
              Once accepted, the transaction becomes part of the
              blockchain's recorded history.
            </p>
          </div>
        </div>
      </section>

      <section className="next-section">
        <p className="eyebrow">[ NEXT MODULE ]</p>

        <h2>
          READY FOR
          <br />
          <span>SOLANA?</span>
        </h2>

        <a href="/learn/solana" className="primary-button">
          LEARN SOLANA →
        </a>
      </section>

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