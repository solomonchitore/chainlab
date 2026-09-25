import Link from "next/link";

type StudyNote = {
  number: string;
  title: string;
  category: string;
  description: string;
  filename: string;
  topics: string[];
};

const studyNotes: StudyNote[] = [
  {
    number: "01",
    title: "Blockchain Fundamentals",
    category: "BLOCKCHAIN",
    description:
      "Learn how blockchains work, including blocks, transactions, nodes, consensus, cryptographic hashes, and the benefits and limitations of blockchain systems.",
    filename: "01_ChainLab_blockchain_fundamentals.pdf",
    topics: ["Blocks and transactions", "Consensus", "Decentralization"],
  },
  {
    number: "02",
    title: "Distributed Ledgers and Decentralization",
    category: "BLOCKCHAIN",
    description:
      "Explore distributed ledgers, trust models, governance, and the different dimensions of decentralization.",
    filename:
      "02_ChainLab_distributed_ledgers_and_decentralization.pdf",
    topics: ["Distributed ledgers", "Trust models", "Governance"],
  },
  {
    number: "03",
    title: "Cryptography for Blockchain",
    category: "BLOCKCHAIN",
    description:
      "Understand cryptographic hashes, public and private keys, digital signatures, Merkle trees, and wallet safety.",
    filename: "03_ChainLab_cryptography_for_blockchain.pdf",
    topics: ["Hash functions", "Digital signatures", "Merkle trees"],
  },
  {
    number: "04",
    title: "Smart Contracts and dApps",
    category: "BLOCKCHAIN",
    description:
      "Learn about smart contracts, decentralized application architecture, contract development, common vulnerabilities, and user safety.",
    filename: "04_ChainLab_smart_contracts_and_dapps.pdf",
    topics: ["Smart contracts", "dApp architecture", "Security"],
  },
  {
    number: "05",
    title: "Solana Fundamentals",
    category: "SOLANA",
    description:
      "Discover Solana's account model, programs, instructions, transactions, clusters, fees, and development environments.",
    filename: "05_ChainLab_solana_fundamentals.pdf",
    topics: ["Accounts and programs", "Transactions", "Clusters"],
  },
  {
    number: "06",
    title: "Solana Development Concepts",
    category: "SOLANA",
    description:
      "Study Solana program design, account validation, Anchor concepts, testing practices, and deployment preparation.",
    filename: "06_ChainLab_solana_development_concepts.pdf",
    topics: ["Program design", "Anchor", "Testing and deployment"],
  },
  {
    number: "07",
    title: "Meme Coins and Tokenomics",
    category: "MEME COINS",
    description:
      "Explore token supply, distribution, vesting, liquidity, market capitalization, token authorities, and common risks.",
    filename: "07_ChainLab_meme_coins_and_tokenomics.pdf",
    topics: ["Token supply", "Liquidity", "Risk assessment"],
  },
  {
    number: "08",
    title: "Crypto Wallets and Key Management",
    category: "SECURITY",
    description:
      "Learn about custodial and self-custody wallets, seed phrases, transaction signing, operational security, and recovery planning.",
    filename: "08_ChainLab_crypto_wallets_and_key_management.pdf",
    topics: ["Wallet types", "Key protection", "Recovery planning"],
  },
  {
    number: "09",
    title: "Blockchain Security and Scams",
    category: "SECURITY",
    description:
      "Identify common scams and technical threats, build a threat model, and learn practical defensive and incident-response habits.",
    filename: "09_ChainLab_blockchain_security_and_scams.pdf",
    topics: ["Threat modeling", "Phishing", "Incident response"],
  },
  {
    number: "10",
    title: "Blockchain Research and Due Diligence",
    category: "SECURITY",
    description:
      "Learn how to research blockchain projects, verify claims, inspect on-chain evidence, understand audits, and document risks.",
    filename: "10_ChainLab_blockchain_research_and_due_diligence.pdf",
    topics: ["Project research", "On-chain evidence", "Audit reviews"],
  },
];

export default function StudyNotesPage() {
  return (
    <main className="study-notes-page">
      <section className="study-notes-hero">
        <div className="study-notes-hero-content">
          <span className="study-notes-eyebrow">
            CHAINLAB LEARNING RESOURCES
          </span>

          <h1>
            Study Notes <span>&amp; Learning Guides</span>
          </h1>

          <p>
            Build your blockchain knowledge with free downloadable study
            materials. Learn the fundamentals, explore Solana, understand
            tokenomics, and develop safer Web3 habits.
          </p>

          <div className="study-notes-hero-actions">
            <a href="#available-notes" className="study-notes-primary-button">
              Explore Study Notes
              <span aria-hidden="true">→</span>
            </a>

            <Link href="/learn" className="study-notes-secondary-button">
              Explore Learning Areas
            </Link>
          </div>

          <div className="study-notes-stats">
            <div className="study-notes-stat">
              <strong>10</strong>
              <span>PDF resources</span>
            </div>

            <div className="study-notes-stat">
              <strong>4</strong>
              <span>Learning categories</span>
            </div>

            <div className="study-notes-stat">
              <strong>Free</strong>
              <span>Learning materials</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="available-notes"
        className="study-notes-library"
        aria-labelledby="study-notes-heading"
      >
        <div className="study-notes-section-heading">
          <div>
            <span className="study-notes-eyebrow">THE RESOURCE LIBRARY</span>
            <h2 id="study-notes-heading">Available Study Materials</h2>
            <p>
              Choose a guide to start learning or download it for later
              revision.
            </p>
          </div>

          <span className="study-notes-count">
            {studyNotes.length} RESOURCES
          </span>
        </div>

        <div className="study-notes-grid">
          {studyNotes.map((note) => (
            <article className="study-notes-card" key={note.number}>
              <div className="study-notes-card-top">
                <span className="study-notes-number">{note.number}</span>
                <span className="study-notes-category">{note.category}</span>
              </div>

              <h3>{note.title}</h3>

              <p className="study-notes-description">{note.description}</p>

              <div className="study-notes-topics">
                {note.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>

              <div className="study-notes-card-footer">
                <span className="study-notes-file-type">PDF RESOURCE</span>

                <a
                  className="study-notes-download-button"
                  href={`/study-notes/${note.filename}`}
                  download
                  aria-label={`Download ${note.title} PDF`}
                >
                  Download PDF
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="study-notes-bottom-cta">
        <span className="study-notes-eyebrow">KEEP LEARNING</span>
        <h2>Your Web3 learning journey starts here.</h2>
        <p>
          Explore the ChainLab learning areas to continue building your
          understanding of blockchain technology.
        </p>

        <Link href="/learn" className="study-notes-primary-button">
          Start Learning
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}