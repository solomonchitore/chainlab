import Link from "next/link";
import styles from "./security.module.css";

export default function SecurityPage() {
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          [CHAINLAB]
        </Link>

        <div className={styles.navLinks}>
          <Link href="/learn/blockchain">BLOCKCHAIN</Link>
          <Link href="/learn/solana">SOLANA</Link>
          <Link href="/learn/meme-coins">MEME COINS</Link>
          <Link href="/learn/security" className={styles.active}>
            SECURITY
          </Link>
        </div>

        <Link href="/" className={styles.homeLink}>
          HOME <span>→</span>
        </Link>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>[ 04 / SECURITY ]</span>
          <span>CHAINLAB EDUCATION</span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>WEB3 SECURITY FUNDAMENTALS</p>

          <h1>
            VERIFY.
            <br />
            <span>PROTECT.</span>
          </h1>

          <p className={styles.heroText}>
            Blockchain transactions are designed to be difficult to reverse.
            Security therefore begins before you connect a wallet, sign a
            transaction, or interact with a smart contract.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introduction}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <span>FOUNDATIONS</span>
        </div>

        <div className={styles.introductionContent}>
          <h2>
            SECURITY
            <br />
            STARTS WITH YOU.
          </h2>

          <p>
            Web3 security is the practice of protecting wallets, private keys,
            recovery phrases, accounts, transactions, and digital assets from
            unauthorized access or malicious activity.
          </p>

          <p>
            Unlike traditional systems, blockchain transactions are often
            irreversible. A mistake can therefore have permanent consequences.
          </p>

          <div className={styles.definitionBox}>
            <span>SECURITY PRINCIPLE</span>
            <strong>
              VERIFY BEFORE YOU TRUST. PROTECT BEFORE YOU CONNECT.
            </strong>
          </div>
        </div>
      </section>

      {/* WALLET SECURITY */}
      <section className={styles.wallet}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>WALLET SECURITY</span>
        </div>

        <div className={styles.walletHeader}>
          <h2>
            PROTECT
            <br />
            THE KEY.
          </h2>

          <p>
            Your wallet gives you control over blockchain accounts and assets.
            Protecting the credentials that control that wallet is one of the
            most important responsibilities in Web3.
          </p>
        </div>

        <div className={styles.walletGrid}>
          <article className={styles.securityCard}>
            <span>01</span>
            <h3>PRIVATE KEYS</h3>
            <p>
              A private key is a cryptographic credential used to authorize
              transactions. Anyone who gains control of it may be able to
              control the associated assets.
            </p>
          </article>

          <article className={styles.securityCard}>
            <span>02</span>
            <h3>RECOVERY PHRASES</h3>
            <p>
              A recovery phrase can restore access to a wallet. It should be
              kept private and stored securely offline where appropriate.
            </p>
          </article>

          <article className={styles.securityCard}>
            <span>03</span>
            <h3>WALLET ACCESS</h3>
            <p>
              Never give another person your private key or recovery phrase.
              Legitimate support should not require these credentials.
            </p>
          </article>

          <article className={styles.securityCard}>
            <span>04</span>
            <h3>DEVICE SECURITY</h3>
            <p>
              Wallet security also depends on the device being used. Keep
              software updated and avoid installing unknown applications or
              browser extensions.
            </p>
          </article>
        </div>
      </section>

      {/* TRANSACTION SECURITY */}
      <section className={styles.transactions}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <span>TRANSACTION SECURITY</span>
        </div>

        <div className={styles.transactionHeader}>
          <h2>
            READ
            <br />
            BEFORE SIGNING.
          </h2>

          <p>
            Signing a blockchain transaction can authorize an action. Always
            understand what your wallet is asking you to approve before
            continuing.
          </p>
        </div>

        <div className={styles.transactionSteps}>
          <div className={styles.transactionRow}>
            <div className={styles.number}>01</div>

            <div>
              <h3>CHECK THE WEBSITE</h3>
              <p>
                Confirm that you are using the intended website and that the
                domain is correct before connecting your wallet.
              </p>
            </div>
          </div>

          <div className={styles.transactionRow}>
            <div className={styles.number}>02</div>

            <div>
              <h3>CHECK THE NETWORK</h3>
              <p>
                Make sure the transaction is being performed on the blockchain
                network you intended to use.
              </p>
            </div>
          </div>

          <div className={styles.transactionRow}>
            <div className={styles.number}>03</div>

            <div>
              <h3>READ THE REQUEST</h3>
              <p>
                Review what your wallet is asking you to sign instead of
                approving requests automatically.
              </p>
            </div>
          </div>

          <div className={styles.transactionRow}>
            <div className={styles.number}>04</div>

            <div>
              <h3>VERIFY THE DESTINATION</h3>
              <p>
                When sending assets, carefully verify the destination address
                before confirming the transaction.
              </p>
            </div>
          </div>

          <div className={styles.transactionRow}>
            <div className={styles.number}>05</div>

            <div>
              <h3>CONFIRM THE ACTION</h3>
              <p>
                Only approve the transaction after you understand what it will
                do and are comfortable with the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON THREATS */}
      <section className={styles.threats}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <span>COMMON THREATS</span>
        </div>

        <div className={styles.threatHeader}>
          <h2>
            KNOW
            <br />
            THE THREAT.
          </h2>

          <p>
            Many Web3 attacks depend on deception rather than breaking the
            blockchain itself. Understanding common attack patterns helps you
            identify suspicious activity before it becomes a problem.
          </p>
        </div>

        <div className={styles.threatGrid}>
          <article className={styles.threatCard}>
            <span>THREAT 01</span>
            <h3>PHISHING</h3>
            <p>
              Fake websites, messages, emails, or social accounts can imitate
              legitimate services and attempt to steal credentials or gain
              access to wallets.
            </p>
          </article>

          <article className={styles.threatCard}>
            <span>THREAT 02</span>
            <h3>FAKE LINKS</h3>
            <p>
              Attackers can distribute links that lead users to malicious
              websites designed to imitate legitimate blockchain applications.
            </p>
          </article>

          <article className={styles.threatCard}>
            <span>THREAT 03</span>
            <h3>FAKE SUPPORT</h3>
            <p>
              Scammers may impersonate support staff and ask for sensitive
              information or request that users perform unsafe actions.
            </p>
          </article>

          <article className={styles.threatCard}>
            <span>THREAT 04</span>
            <h3>MALICIOUS CONTRACTS</h3>
            <p>
              A smart contract interaction can contain permissions or behavior
              that users do not fully understand. Verify the application and
              contract before interacting.
            </p>
          </article>

          <article className={styles.threatCard}>
            <span>THREAT 05</span>
            <h3>SOCIAL ENGINEERING</h3>
            <p>
              Attackers can manipulate users through urgency, authority,
              fear, or attractive promises in order to influence their
              decisions.
            </p>
          </article>

          <article className={styles.threatCard}>
            <span>THREAT 06</span>
            <h3>IMPERSONATION</h3>
            <p>
              Fake accounts and communities can imitate projects, developers,
              companies, or public figures to appear trustworthy.
            </p>
          </article>
        </div>
      </section>

      {/* SMART CONTRACT SECURITY */}
      <section className={styles.contracts}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <span>SMART CONTRACTS</span>
        </div>

        <div className={styles.contractHeader}>
          <h2>
            CODE
            <br />
            IS NOT TRUST.
          </h2>

          <p>
            Smart contracts execute programmed instructions on a blockchain.
            Interacting with one should still involve careful verification and
            an understanding of what the application is requesting.
          </p>
        </div>

        <div className={styles.contractGrid}>
          <div className={styles.contractPoint}>
            <span>01</span>
            <h3>VERIFY THE SOURCE</h3>
            <p>
              Use trusted project documentation and official channels when
              identifying contracts and applications.
            </p>
          </div>

          <div className={styles.contractPoint}>
            <span>02</span>
            <h3>UNDERSTAND PERMISSIONS</h3>
            <p>
              Pay attention to what an application is asking your wallet to
              authorize.
            </p>
          </div>

          <div className={styles.contractPoint}>
            <span>03</span>
            <h3>CHECK THE ADDRESS</h3>
            <p>
              Contract addresses should be verified carefully because malicious
              actors can create addresses that look similar.
            </p>
          </div>

          <div className={styles.contractPoint}>
            <span>04</span>
            <h3>LIMIT EXPOSURE</h3>
            <p>
              Avoid granting unnecessary permissions and consider separating
              different activities across appropriate wallets.
            </p>
          </div>
        </div>
      </section>

      {/* SECURITY CHECKLIST */}
      <section className={styles.checklist}>
        <div className={styles.sectionLabel}>
          <span>06</span>
          <span>SECURITY CHECKLIST</span>
        </div>

        <div className={styles.checklistHeader}>
          <h2>
            BEFORE
            <br />
            YOU CONNECT.
          </h2>

          <p>
            Use this checklist whenever you are about to connect a wallet,
            sign a transaction, or interact with a new Web3 application.
          </p>
        </div>

        <div className={styles.checkList}>
          <div className={styles.checkItem}>
            <span>01</span>
            <div>
              <h3>VERIFY THE WEBSITE</h3>
              <p>
                Confirm the website address and make sure you reached the
                intended service.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>02</span>
            <div>
              <h3>VERIFY THE SOURCE</h3>
              <p>
                Use official documentation and trusted project channels when
                researching a service or contract.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>03</span>
            <div>
              <h3>PROTECT YOUR CREDENTIALS</h3>
              <p>
                Never share private keys, recovery phrases, or wallet
                credentials.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>04</span>
            <div>
              <h3>READ BEFORE SIGNING</h3>
              <p>
                Understand what the wallet is asking you to approve before
                signing.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>05</span>
            <div>
              <h3>QUESTION URGENCY</h3>
              <p>
                Be cautious when someone pressures you to act immediately or
                promises guaranteed results.
              </p>
            </div>
          </div>

          <div className={styles.checkItem}>
            <span>06</span>
            <div>
              <h3>STOP WHEN UNSURE</h3>
              <p>
                If something does not look right, stop and verify the
                information before continuing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE CHECK */}
      <section className={styles.knowledge}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <span>KNOWLEDGE CHECK</span>
        </div>

        <h2>SECURITY MINDSET</h2>

        <p>
          The goal is not to eliminate every possible risk. The goal is to
          develop habits that reduce unnecessary exposure and help you make
          informed decisions.
        </p>

        <div className={styles.questions}>
          <div>
            <span>QUESTION 01</span>
            <h3>
              Should you ever share your private key or recovery phrase with
              support?
            </h3>
            <p>NO. These credentials should remain private.</p>
          </div>

          <div>
            <span>QUESTION 02</span>
            <h3>
              Should you sign a transaction if you do not understand what it
              does?
            </h3>
            <p>NO. Stop and verify the transaction first.</p>
          </div>

          <div>
            <span>QUESTION 03</span>
            <h3>
              Can a legitimate-looking website still be malicious?
            </h3>
            <p>
              YES. Verify the domain, source, application, and transaction
              before interacting.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div className={styles.sectionLabel}>
            <span>[ CHAINLAB PROTOCOL ]</span>
          </div>

          <h2>
            LEARN.
            <br />
            <span>VERIFY. EXPLORE.</span>
          </h2>

          <p>
            Security is not a single step. It is a habit of verifying
            information, protecting your wallet, and understanding what you
            are interacting with.
          </p>

          <Link href="/" className={styles.finalCtaButton}>
            RETURN TO CHAINLAB
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <strong>[CHAINLAB]</strong>
          <span>Learn. Understand. Explore.</span>
        </div>

        <div className={styles.footerLinks}>
          <Link href="/learn/blockchain">BLOCKCHAIN</Link>
          <Link href="/learn/solana">SOLANA</Link>
          <Link href="/learn/meme-coins">MEME COINS</Link>
          <Link href="/learn/security">SECURITY</Link>
        </div>

        <p>© 2026 CHAINLAB — EDUCATIONAL PROJECT</p>
      </footer>
    </main>
  );
}