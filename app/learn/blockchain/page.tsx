export default function BlockchainPage() {
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

      {/* What Is Blockchain */}
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
            the record, blockchain networks can distribute copies of
            the record across many participants.
          </p>

          <p>
            Information is grouped into blocks, and these blocks are
            linked together using cryptographic techniques to form a
            continuously growing chain.
          </p>

          <p>
            This allows participants to verify the history of recorded
            activity without requiring a single organization to control
            the entire system.
          </p>
        </div>
      </section>

      {/* Why Blockchain */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ WHY IT MATTERS / 002 ]</p>

          <h2>WHY DOES BLOCKCHAIN EXIST?</h2>
        </div>

        <div className="lesson-content">
          <p>
            Traditional digital systems often depend on a central
            organization to maintain records and determine who can
            update them.
          </p>

          <p>
            Blockchain technology provides another approach: multiple
            computers can participate in maintaining and verifying a
            shared record according to predefined rules.
          </p>

          <p>
            This can make it possible to transfer digital assets,
            verify information, and build applications without relying
            entirely on a single central authority.
          </p>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="concept-section">
        <p className="eyebrow">[ CORE CONCEPTS ]</p>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>BLOCKS</h3>

            <p>
              Groups of transactions or other data that are recorded
              together on a blockchain.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>TRANSACTIONS</h3>

            <p>
              Digital instructions that record actions such as
              transferring assets between accounts or interacting with
              blockchain programs.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>WALLETS</h3>

            <p>
              Tools that allow users to manage cryptographic keys and
              interact with blockchain networks and applications.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>NODES</h3>

            <p>
              Computers that participate in communicating, verifying,
              storing, or processing blockchain information.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>CONSENSUS</h3>

            <p>
              Rules and mechanisms that allow participants in a
              blockchain network to agree on the valid state of the
              network.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>DECENTRALIZATION</h3>

            <p>
              The distribution of control and responsibility across
              multiple participants instead of depending entirely on
              one central authority.
            </p>
          </article>
        </div>
      </section>

      {/* How Transactions Work */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ HOW IT WORKS / 003 ]</p>

          <h2>HOW DOES A TRANSACTION WORK?</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>[01]</span>

            <h3>CREATE</h3>

            <p>
              A user creates a transaction using a blockchain wallet.
              The transaction describes the action the user wants to
              perform.
            </p>
          </div>

          <div className="step">
            <span>[02]</span>

            <h3>SIGN</h3>

            <p>
              The wallet uses the user's private key to digitally sign
              the transaction and prove that the user authorized it.
            </p>
          </div>

          <div className="step">
            <span>[03]</span>

            <h3>SUBMIT</h3>

            <p>
              The signed transaction is sent to the blockchain network
              where it can be received and processed by participating
              computers.
            </p>
          </div>

          <div className="step">
            <span>[04]</span>

            <h3>VERIFY</h3>

            <p>
              The network checks whether the transaction follows the
              rules of the blockchain.
            </p>
          </div>

          <div className="step">
            <span>[05]</span>

            <h3>CONFIRM</h3>

            <p>
              The network reaches the required level of agreement for
              the transaction to be accepted.
            </p>
          </div>

          <div className="step">
            <span>[06]</span>

            <h3>RECORD</h3>

            <p>
              The accepted transaction becomes part of the blockchain's
              recorded history.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Transaction Flow */}
      <section className="flow-section">
        <p className="eyebrow">[ TRANSACTION FLOW ]</p>

        <h2>
          FROM ACTION
          <br />
          <span>TO BLOCKCHAIN.</span>
        </h2>

        <div className="flow-grid">
          <div className="flow-item">
            <span>[01]</span>
            <strong>WALLET</strong>
            <p>Create and sign the transaction.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[02]</span>
            <strong>NETWORK</strong>
            <p>Broadcast the transaction.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[03]</span>
            <strong>VALIDATION</strong>
            <p>Check that the transaction is valid.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-item">
            <span>[04]</span>
            <strong>BLOCK</strong>
            <p>Record the accepted transaction.</p>
          </div>
        </div>
      </section>

      {/* Advantages and Limitations */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ UNDERSTANDING / 004 ]</p>

          <h2>STRENGTHS & LIMITATIONS</h2>
        </div>

        <div className="concept-grid">
          <article className="concept-card">
            <span>[01]</span>

            <h3>TRANSPARENCY</h3>

            <p>
              Many public blockchains allow participants to inspect
              transaction history and network activity.
            </p>
          </article>

          <article className="concept-card">
            <span>[02]</span>

            <h3>RESILIENCE</h3>

            <p>
              Distributed networks can avoid depending entirely on a
              single computer or organization.
            </p>
          </article>

          <article className="concept-card">
            <span>[03]</span>

            <h3>VERIFIABILITY</h3>

            <p>
              Cryptographic methods and network rules allow participants
              to verify transactions and other blockchain data.
            </p>
          </article>

          <article className="concept-card">
            <span>[04]</span>

            <h3>SCALABILITY</h3>

            <p>
              Different blockchain networks make different trade-offs
              between speed, cost, decentralization, and security.
            </p>
          </article>

          <article className="concept-card">
            <span>[05]</span>

            <h3>SECURITY RISKS</h3>

            <p>
              Users can still lose assets through stolen keys,
              malicious applications, scams, or unsafe transactions.
            </p>
          </article>

          <article className="concept-card">
            <span>[06]</span>

            <h3>COMPLEXITY</h3>

            <p>
              Blockchain systems involve technical concepts that users
              should understand before interacting with them.
            </p>
          </article>
        </div>
      </section>

      {/* Key Terms */}
      <section className="lesson-section">
        <div className="lesson-header">
          <p className="eyebrow">[ QUICK REFERENCE / 005 ]</p>

          <h2>KEY TERMS TO REMEMBER</h2>
        </div>

        <div className="lesson-content">
          <p>
            <strong>BLOCK:</strong> A group of blockchain records
            organized together.
          </p>

          <p>
            <strong>TRANSACTION:</strong> An instruction requesting an
            action on a blockchain.
          </p>

          <p>
            <strong>WALLET:</strong> Software or hardware used to manage
            cryptographic keys and interact with blockchain networks.
          </p>

          <p>
            <strong>NODE:</strong> A computer participating in the
            blockchain network.
          </p>

          <p>
            <strong>CONSENSUS:</strong> The process or rules used by a
            network to agree on valid blockchain state.
          </p>

          <p>
            <strong>PRIVATE KEY:</strong> Secret cryptographic
            information used to authorize actions from an account.
          </p>
        </div>
      </section>

      {/* Learning Check */}
      <section className="security-section">
        <p className="eyebrow">[ KNOWLEDGE CHECK ]</p>

        <h2>
          BEFORE YOU MOVE
          <br />
          <span>TO SOLANA.</span>
        </h2>

        <p>
          You should now understand what a blockchain is, why
          decentralization matters, what blocks and transactions are,
          how wallets interact with networks, and how transactions move
          from creation to confirmation.
        </p>

        <a href="/learn/solana" className="primary-button">
          CONTINUE TO SOLANA →
        </a>
      </section>

      {/* Next Module */}
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