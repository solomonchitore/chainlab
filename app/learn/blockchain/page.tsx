import Link from "next/link";
import styles from "./blockchain.module.css";

const lessons = [
  {
    number: "01",
    title: "WHAT IS BLOCKCHAIN",
    description:
      "Learn what blockchain is, how it works, and why it matters in modern digital systems.",
    href: "#what-is-blockchain",
  },
  {
    number: "02",
    title: "BLOCKS AND TRANSACTIONS",
    description:
      "Understand how transactions are created, grouped into blocks, and recorded on a blockchain.",
    href: "#blocks-transactions",
  },
  {
    number: "03",
    title: "DECENTRALIZATION",
    description:
      "Explore how decentralized networks work and why control is distributed across participants.",
    href: "#decentralization",
  },
  {
    number: "04",
    title: "VALIDATION AND CONSENSUS",
    description:
      "Learn how blockchain networks validate transactions and agree on the state of the network.",
    href: "#validation",
  },
  {
    number: "05",
    title: "WALLETS",
    description:
      "Understand what wallets are, what they control, and how they interact with blockchain networks.",
    href: "#wallets",
  },
  {
    number: "06",
    title: "SMART CONTRACTS",
    description:
      "Learn what smart contracts are and how programmable logic can operate on blockchain networks.",
    href: "#smart-contracts",
  },
  {
    number: "07",
    title: "REAL-WORLD USE CASES",
    description:
      "See how blockchain technology can be applied to finance, identity, supply chains, and digital ownership.",
    href: "#use-cases",
  },
  {
    number: "08",
    title: "KEY TAKEAWAYS",
    description:
      "Review the most important concepts and build a strong foundation before moving to the next module.",
    href: "#key-takeaways",
  },
];

export default function BlockchainPage() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <header className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span>[</span>CHAINLAB<span>]</span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/">HOME</Link>
          <Link href="/learn">LEARN</Link>
          <Link href="/learn/blockchain" className={styles.active}>
            BLOCKCHAIN
          </Link>
          <Link href="/learn/solana">SOLANA</Link>
          <Link href="/learn/meme-coins">MEME COINS</Link>
          <Link href="/learn/security">SECURITY</Link>
        </nav>

        <Link href="/learn" className={styles.navButton}>
          BACK TO LEARN <span>→</span>
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>LEARN / BLOCKCHAIN</p>

          <h1>
            BLOCKCHAIN<span>.</span>
          </h1>

          <p className={styles.heroText}>
            Understand the technology that powers decentralized systems,
            digital assets, programmable applications, and a new generation
            of online infrastructure.
          </p>
        </div>

        <div className={styles.heroCard}>
          <span className={styles.heroNumber}>01</span>

          <p className={styles.heroLabel}>FOUNDATION MODULE</p>

          <p className={styles.heroCardText}>
            Start here to understand the core concepts behind blockchain
            technology before moving into more advanced Web3 topics.
          </p>
        </div>
      </section>

      {/* LESSONS */}
      <section className={styles.lessonsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>BLOCKCHAIN FUNDAMENTALS</p>

            <h2>
              BUILD THE
              <br />
              <span>FOUNDATION.</span>
            </h2>
          </div>

          <p className={styles.sectionIntro}>
            Work through the modules in order. Each lesson introduces a
            fundamental concept and prepares you for the next stage of the
            learning journey.
          </p>
        </div>

        <div className={styles.lessonGrid}>
          {lessons.map((lesson) => (
            <article className={styles.lessonCard} key={lesson.number}>
              <div className={styles.lessonTop}>
                <span>{lesson.number}</span>
              </div>

              <div className={styles.lessonContent}>
                <h3>{lesson.title}</h3>

                <p>{lesson.description}</p>

                <a href={lesson.href} className={styles.lessonLink}>
                  READ LESSON <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT IS BLOCKCHAIN */}
      <section id="what-is-blockchain" className={styles.contentSection}>
        <div className={styles.contentNumber}>01</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>FOUNDATION</p>

          <h2>WHAT IS BLOCKCHAIN?</h2>

          <p>
            A blockchain is a distributed digital record that allows
            information to be recorded and shared across a network of
            participants.
          </p>

          <p>
            Instead of relying on one central database, blockchain networks
            distribute records across multiple computers. This structure can
            make records easier to verify and can reduce dependence on a
            single controlling authority.
          </p>

          <div className={styles.definitionBox}>
            <span>KEY IDEA</span>
            <p>
              Blockchain provides a shared system for recording and verifying
              information across a network.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCKS AND TRANSACTIONS */}
      <section id="blocks-transactions" className={styles.contentSection}>
        <div className={styles.contentNumber}>02</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>DATA STRUCTURE</p>

          <h2>BLOCKS AND TRANSACTIONS</h2>

          <p>
            Transactions represent actions that users or applications want
            the network to process.
          </p>

          <p>
            These transactions can be collected into blocks. Once a block is
            accepted by the network, it becomes part of the blockchain's
            growing record.
          </p>

          <div className={styles.steps}>
            <div>
              <span>01</span>
              <strong>CREATE</strong>
              <p>A user initiates an action.</p>
            </div>

            <div>
              <span>02</span>
              <strong>VERIFY</strong>
              <p>The network checks the transaction.</p>
            </div>

            <div>
              <span>03</span>
              <strong>GROUP</strong>
              <p>Transactions are organized into a block.</p>
            </div>

            <div>
              <span>04</span>
              <strong>RECORD</strong>
              <p>The block becomes part of the chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DECENTRALIZATION */}
      <section id="decentralization" className={styles.contentSection}>
        <div className={styles.contentNumber}>03</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>NETWORK DESIGN</p>

          <h2>DECENTRALIZATION</h2>

          <p>
            Decentralization means that control and responsibility are
            distributed across multiple participants instead of being held by
            a single central authority.
          </p>

          <p>
            Different blockchain networks use different architectures and
            governance models, but the underlying goal is to create systems
            where participants can independently verify activity.
          </p>

          <div className={styles.definitionBox}>
            <span>KEY IDEA</span>
            <p>
              More distributed participation can reduce dependence on a
              single point of control or failure.
            </p>
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="validation" className={styles.contentSection}>
        <div className={styles.contentNumber}>04</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>NETWORK AGREEMENT</p>

          <h2>VALIDATION AND CONSENSUS</h2>

          <p>
            Blockchain networks need a way for participants to agree on which
            transactions should become part of the shared record.
          </p>

          <p>
            Consensus mechanisms provide the rules that networks use to
            coordinate participants, validate activity, and maintain a
            consistent state.
          </p>

          <div className={styles.definitionBox}>
            <span>KEY IDEA</span>
            <p>
              Consensus allows independent participants to coordinate around
              a shared version of the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* WALLETS */}
      <section id="wallets" className={styles.contentSection}>
        <div className={styles.contentNumber}>05</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>USER ACCESS</p>

          <h2>WALLETS</h2>

          <p>
            A blockchain wallet is an interface that allows users to interact
            with blockchain networks and manage the credentials used to
            authorize transactions.
          </p>

          <p>
            Wallets are an important part of Web3 because users are often
            responsible for controlling their own access credentials.
          </p>

          <div className={styles.warningBox}>
            <span>SECURITY PRINCIPLE</span>
            <p>
              Never share your private keys or recovery phrase with another
              person or website.
            </p>
          </div>
        </div>
      </section>

      {/* SMART CONTRACTS */}
      <section id="smart-contracts" className={styles.contentSection}>
        <div className={styles.contentNumber}>06</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>PROGRAMMABLE BLOCKCHAINS</p>

          <h2>SMART CONTRACTS</h2>

          <p>
            Smart contracts are programs deployed to blockchain networks that
            can execute predefined logic when their conditions are met.
          </p>

          <p>
            They can support applications such as decentralized finance,
            token systems, digital ownership, marketplaces, and many other
            blockchain-based services.
          </p>

          <div className={styles.definitionBox}>
            <span>KEY IDEA</span>
            <p>
              Smart contracts allow blockchain networks to support
              programmable applications rather than simple record keeping.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className={styles.contentSection}>
        <div className={styles.contentNumber}>07</div>

        <div className={styles.contentBody}>
          <p className={styles.eyebrow}>APPLICATIONS</p>

          <h2>REAL-WORLD USE CASES</h2>

          <p>
            Blockchain technology can be used in many different areas where
            shared records, digital ownership, programmable transactions, or
            transparent verification are useful.
          </p>

          <div className={styles.useCases}>
            <div>
              <span>01</span>
              <strong>DIGITAL ASSETS</strong>
              <p>Represent and transfer digital assets.</p>
            </div>

            <div>
              <span>02</span>
              <strong>FINANCE</strong>
              <p>Support programmable financial applications.</p>
            </div>

            <div>
              <span>03</span>
              <strong>IDENTITY</strong>
              <p>Explore new approaches to digital identity.</p>
            </div>

            <div>
              <span>04</span>
              <strong>SUPPLY CHAINS</strong>
              <p>Track information across multiple participants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section id="key-takeaways" className={styles.takeaways}>
        <div>
          <p className={styles.eyebrow}>MODULE COMPLETE</p>

          <h2>
            KEY
            <br />
            <span>TAKEAWAYS.</span>
          </h2>
        </div>

        <div className={styles.takeawayList}>
          <p>
            <span>01</span>
            Blockchain creates a shared digital record across a network.
          </p>

          <p>
            <span>02</span>
            Transactions can be grouped into blocks and added to the chain.
          </p>

          <p>
            <span>03</span>
            Decentralization distributes participation across network members.
          </p>

          <p>
            <span>04</span>
            Consensus mechanisms help networks agree on valid activity.
          </p>

          <p>
            <span>05</span>
            Wallets provide an interface for interacting with blockchain
            networks.
          </p>

          <p>
            <span>06</span>
            Smart contracts make blockchain systems programmable.
          </p>
        </div>
      </section>

      {/* NEXT MODULE */}
      <section className={styles.nextModule}>
        <div>
          <p className={styles.nextLabel}>NEXT MODULE</p>

          <h2>EXPLORE SOLANA</h2>

          <p>
            Now that you understand the foundations of blockchain, move into
            the Solana ecosystem and explore how its architecture works.
          </p>
        </div>

        <Link href="/learn/solana" className={styles.nextButton}>
          GO TO SOLANA <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>
          <Link href="/" className={styles.footerLogo}>
            [CHAINLAB]
          </Link>

          <p>Learn. Practice. Build. Succeed.</p>
        </div>

        <p>© 2026 ChainLab. All rights reserved.</p>
      </footer>
    </main>
  );
}