"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import styles from "./solana.module.css";
import SolanaTransactionSimulator from "@/components/SolanaTransactionSimulator";

const concepts = [
  {
    number: "01",
    title: "ACCOUNTS",
    text: "Accounts store data and state on the Solana network. They are an important part of how applications and users interact with the blockchain.",
  },
  {
    number: "02",
    title: "PROGRAMS",
    text: "Programs are Solana's smart-contract logic. They contain the instructions that applications can execute on the network.",
  },
  {
    number: "03",
    title: "TRANSACTIONS",
    text: "Transactions contain instructions that request actions from Solana programs and are signed before being submitted to the network.",
  },
  {
    number: "04",
    title: "VALIDATORS",
    text: "Validators participate in processing transactions, maintaining network state, and helping the Solana network reach agreement.",
  },
  {
    number: "05",
    title: "PROOF OF STAKE",
    text: "Solana uses a Proof of Stake system where validators participate in network security and consensus.",
  },
  {
    number: "06",
    title: "PROOF OF HISTORY",
    text: "Proof of History provides a cryptographic way of establishing the order and passage of events within the network.",
  },
];

const process = [
  {
    number: "01",
    title: "CREATE",
    text: "A user or application creates a transaction.",
  },
  {
    number: "02",
    title: "SIGN",
    text: "The transaction is signed using the user's wallet.",
  },
  {
    number: "03",
    title: "BROADCAST",
    text: "The transaction is sent to the Solana network.",
  },
  {
    number: "04",
    title: "EXECUTE",
    text: "Validators process the transaction instructions.",
  },
  {
    number: "05",
    title: "CONFIRM",
    text: "The network reaches agreement on the transaction.",
  },
  {
    number: "06",
    title: "UPDATE",
    text: "The resulting state is recorded on the network.",
  },
];

const ecosystem = [
  "TOKENS",
  "DEFI",
  "NFTS",
  "GAMES",
  "MEME COINS",
  "DAPPS",
];

const strengths = [
  {
    title: "THROUGHPUT",
    text: "Designed to process a high volume of transactions.",
  },
  {
    title: "LOW FEES",
    text: "Transaction costs can be relatively low compared with many other networks.",
  },
  {
    title: "DEVELOPER ECOSYSTEM",
    text: "Provides infrastructure for building applications and digital assets.",
  },
];

const limitations = [
  {
    title: "COMPLEXITY",
    text: "Understanding the architecture can take time for new developers and users.",
  },
  {
    title: "NETWORK DEPENDENCY",
    text: "Applications depend on the availability and performance of the underlying network.",
  },
  {
    title: "USER RESPONSIBILITY",
    text: "Users remain responsible for protecting wallets, credentials, and transaction decisions.",
  },
];

const keyTerms = [
  ["SOL", "The native asset of the Solana network."],
  ["PROGRAM", "Solana's term for on-chain executable logic."],
  ["ACCOUNT", "A location used to store data and state."],
  ["VALIDATOR", "A network participant involved in processing and consensus."],
  ["RPC", "Infrastructure that allows applications to communicate with Solana."],
  ["TRANSACTION", "A signed request containing instructions for the network."],
];

/*
 * SOLANA LEARNING SECTIONS
 *
 * These are used by the new progress system and search system.
 * The existing page sections remain unchanged.
 */
const learningSections = [
  {
    number: "01",
    title: "SOLANA FUNDAMENTALS",
    description: "Understand what Solana is and what SOL does.",
    href: "#fundamentals",
  },
  {
    number: "02",
    title: "CORE CONCEPTS",
    description: "Learn accounts, programs, transactions, validators and consensus.",
    href: "#core-concepts",
  },
  {
    number: "03",
    title: "HOW SOLANA WORKS",
    description: "Follow the transaction lifecycle from creation to network update.",
    href: "#how-solana-works",
  },
  {
    number: "04",
    title: "TRANSACTION FLOW",
    description: "Understand the path from a wallet through RPC and validators.",
    href: "#transaction-flow",
  },
  {
    number: "05",
    title: "SOLANA ECOSYSTEM",
    description: "Explore tokens, DeFi, NFTs, games, meme coins and dApps.",
    href: "#ecosystem",
  },
  {
    number: "06",
    title: "STRENGTHS & LIMITATIONS",
    description: "Understand important characteristics and considerations.",
    href: "#perspective",
  },
  {
    number: "07",
    title: "KEY TERMS",
    description: "Build your Solana vocabulary.",
    href: "#key-terms",
  },
  {
    number: "08",
    title: "KNOWLEDGE CHECK",
    description: "Test your understanding of the Solana module.",
    href: "#knowledge-check",
  },
];

const quizQuestions = [
  {
    question: "What is SOL?",
    options: [
      "A Solana programming language",
      "The native asset of the Solana network",
      "A type of validator",
      "An RPC provider",
    ],
    answer: 1,
    explanation:
      "SOL is the native asset of the Solana network and is used for transactions and other network activities.",
  },
  {
    question: "What are programs on Solana?",
    options: [
      "On-chain executable logic",
      "Physical servers",
      "User passwords",
      "Wallet recovery phrases",
    ],
    answer: 0,
    explanation:
      "Programs are Solana's term for on-chain executable logic that applications can interact with.",
  },
  {
    question: "What role do validators play?",
    options: [
      "They design websites",
      "They store user passwords",
      "They participate in transaction processing and consensus",
      "They create recovery phrases",
    ],
    answer: 2,
    explanation:
      "Validators participate in processing transactions, maintaining network state and helping the network reach agreement.",
  },
  {
    question: "What does Proof of History help establish?",
    options: [
      "The price of SOL",
      "The order and passage of events",
      "A user's wallet password",
      "The identity of every user",
    ],
    answer: 1,
    explanation:
      "Proof of History provides a cryptographic way of establishing the order and passage of events within the network.",
  },
  {
    question: "What does RPC infrastructure allow applications to do?",
    options: [
      "Communicate with Solana",
      "Replace validators",
      "Create physical hardware",
      "Remove blockchain transactions",
    ],
    answer: 0,
    explanation:
      "RPC infrastructure provides a communication layer that allows applications to interact with the Solana network.",
  },
];

export default function SolanaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<
    Record<number, number>
  >({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  /*
   * LOAD SAVED SOLANA PROGRESS
   */
  useEffect(() => {
    const savedProgress = localStorage.getItem(
      "chainlab-solana-progress"
    );

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);

        if (Array.isArray(parsed)) {
          setCompletedSections(parsed);
        }
      } catch {
        localStorage.removeItem(
          "chainlab-solana-progress"
        );
      }
    }
  }, []);

  /*
   * SAVE SOLANA PROGRESS
   */
  useEffect(() => {
    localStorage.setItem(
      "chainlab-solana-progress",
      JSON.stringify(completedSections)
    );
  }, [completedSections]);

  /*
   * SEARCH
   */
  const filteredSections = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return learningSections;
    }

    return learningSections.filter(
      (section) =>
        section.number.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  /*
   * TOGGLE COMPLETION
   */
  function toggleSectionComplete(number: string) {
    setCompletedSections((current) => {
      if (current.includes(number)) {
        return current.filter((item) => item !== number);
      }

      return [...current, number];
    });
  }

  /*
   * QUIZ ANSWER
   */
  function selectQuizAnswer(
    questionIndex: number,
    answerIndex: number
  ) {
    if (quizSubmitted) {
      return;
    }

    setQuizAnswers((current) => ({
      ...current,
      [questionIndex]: answerIndex,
    }));
  }

  /*
   * SUBMIT QUIZ
   */
  function submitQuiz() {
    if (
      Object.keys(quizAnswers).length !==
      quizQuestions.length
    ) {
      return;
    }

    setQuizSubmitted(true);
  }

  /*
   * RESET QUIZ
   */
  function resetQuiz() {
    setQuizAnswers({});
    setQuizSubmitted(false);
  }

  /*
   * QUIZ SCORE
   */
  const quizScore = quizQuestions.reduce(
    (score, question, index) => {
      return (
        score +
        (quizAnswers[index] === question.answer ? 1 : 0)
      );
    },
    0
  );

  /*
   * COMPLETION %
   */
  const completionPercentage = Math.round(
    (completedSections.length / learningSections.length) *
      100
  );

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

          <Link href="/learn/blockchain">
            BLOCKCHAIN
          </Link>

          <Link
            href="/learn/solana"
            className={styles.active}
          >
            SOLANA
          </Link>

          <Link href="/learn/meme-coins">
            MEME COINS
          </Link>

          <Link href="/learn/security">
            SECURITY
          </Link>
        </nav>

        <Link href="/learn" className={styles.navButton}>
          BACK TO LEARN <span>→</span>
        </Link>
      </header>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <p className={styles.eyebrow}>
            [ 02 / SOLANA ]
          </p>

          <p className={styles.heroIndex}>
            CHAINLAB
            <br />
            LEARNING SYSTEM
          </p>
        </div>

        <div className={styles.heroMain}>
          <div className={styles.heroTitle}>
            <h1>
              FAST.
              <br />
              SCALABLE.
              <br />
              <span>DECENTRALIZED.</span>
            </h1>
          </div>

          <div className={styles.heroDescription}>
            <p>
              Solana is a blockchain designed for
              high-performance applications and
              digital assets.
            </p>

            <p>
              In this module, we move beyond the
              basic blockchain architecture and
              explore how Solana organizes accounts,
              programs, transactions, validators,
              and network activity.
            </p>

            <Link
              href="#fundamentals"
              className={styles.heroButton}
            >
              START THE MODULE <span>↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroStatement}>
          <span>THE IDEA</span>

          <p>
            Solana combines a blockchain architecture
            with a time-ordering mechanism designed
            to help the network coordinate activity at
            scale.
          </p>
        </div>
      </section>

      {/* NEW: LEARNING TOOLS */}

      <section className={styles.learningTools}>
        <div className={styles.progressPanel}>
          <div className={styles.progressHeader}>
            <div>
              <p className={styles.toolEyebrow}>
                YOUR SOLANA PROGRESS
              </p>

              <h2>
                {completedSections.length}
                <span>
                  {" "}
                  / {learningSections.length}
                </span>
              </h2>
            </div>

            <strong>
              {completionPercentage}%
            </strong>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>

          <p className={styles.progressText}>
            {completedSections.length === 0
              ? "Start completing sections to track your Solana progress."
              : completedSections.length ===
                  learningSections.length
                ? "Solana learning module complete."
                : "Your progress is saved automatically in this browser."}
          </p>

          <div className={styles.progressItems}>
            {learningSections.map((section) => {
              const completed =
                completedSections.includes(
                  section.number
                );

              return (
                <div
                  key={section.number}
                  className={`${styles.progressItem} ${
                    completed
                      ? styles.progressItemCompleted
                      : ""
                  }`}
                >
                  <div>
                    <span>{section.number}</span>

                    <strong>
                      {section.title}
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      toggleSectionComplete(
                        section.number
                      )
                    }
                  >
                    {completed
                      ? "✓ DONE"
                      : "COMPLETE"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.searchPanel}>
          <label
            htmlFor="solana-search"
            className={styles.searchLabel}
          >
            SEARCH SOLANA LESSONS
          </label>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>
              ⌕
            </span>

            <input
              id="solana-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search Solana topics..."
              className={styles.searchInput}
            />

            {searchTerm && (
              <button
                type="button"
                className={styles.searchClear}
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <p className={styles.searchResultText}>
            {searchTerm
              ? `${filteredSections.length} section${
                  filteredSections.length === 1
                    ? ""
                    : "s"
                } found`
              : "Search accounts, programs, transactions, validators, ecosystem and more."}
          </p>

          <div className={styles.searchResults}>
            {filteredSections.map((section) => (
              <Link
                href={section.href}
                key={section.number}
                className={styles.searchResult}
                onClick={() => setSearchTerm("")}
              >
                <span>{section.number}</span>

                <div>
                  <strong>
                    {section.title}
                  </strong>

                  <p>
                    {section.description}
                  </p>
                </div>

                <span className={styles.searchArrow}>
                  →
                </span>
              </Link>
            ))}
          </div>

          {searchTerm &&
            filteredSections.length === 0 && (
              <div className={styles.searchNoResults}>
                NO RESULTS
              </div>
            )}
        </div>
      </section>

      {/* FUNDAMENTALS */}

      <section
        id="fundamentals"
        className={styles.fundamentals}
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              01 / FUNDAMENTALS
            </p>

            <h2>
              WHAT IS
              <br />
              <span>SOLANA?</span>
            </h2>
          </div>

          <p>
            Solana is a blockchain network built to
            support decentralized applications,
            digital assets, financial systems, and
            other programmable services.
          </p>
        </div>

        <div className={styles.foundationGrid}>
          <article className={styles.foundationCard}>
            <span>01</span>

            <h3>WHAT IS SOLANA?</h3>

            <p>
              Solana provides infrastructure where
              users and applications can create,
              transfer, and interact with digital
              assets and on-chain programs.
            </p>
          </article>

          <article className={styles.foundationCard}>
            <span>02</span>

            <h3>WHAT IS SOL?</h3>

            <p>
              SOL is the native asset of the Solana
              network. It is used within the network
              for transactions and other network
              activities.
            </p>
          </article>

          <article className={styles.foundationCard}>
            <span>03</span>

            <h3>WHY DOES IT MATTER?</h3>

            <p>
              Solana's architecture is designed
              around high throughput, low transaction
              costs, and an ecosystem for programmable
              applications.
            </p>
          </article>
        </div>
      </section>

      {/* CORE CONCEPTS */}

      <section
        id="core-concepts"
        className={styles.conceptsSection}
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              02 / ARCHITECTURE
            </p>

            <h2>
              THE CORE
              <br />
              <span>CONCEPTS.</span>
            </h2>
          </div>

          <p>
            Before using Solana applications, it is
            important to understand the components
            that make the network operate.
          </p>
        </div>

        <div className={styles.conceptGrid}>
          {concepts.map((concept) => (
            <article
              key={concept.number}
              className={styles.conceptCard}
            >
              <span
                className={styles.conceptNumber}
              >
                {concept.number}
              </span>

              <div>
                <h3>{concept.title}</h3>

                <p>{concept.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-solana-works"
        className={styles.processSection}
      >
        <div className={styles.processHeader}>
          <div>
            <p className={styles.eyebrow}>
              03 / PROCESS
            </p>

            <h2>
              HOW SOLANA
              <br />
              <span>WORKS.</span>
            </h2>
          </div>

          <p>
            A Solana transaction follows a sequence
            from creation through execution and
            confirmation.
          </p>
        </div>

        <div className={styles.processTrack}>
          {process.map((step) => (
            <div
              key={step.number}
              className={styles.processStep}
            >
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSACTION FLOW */}

      <section
        id="transaction-flow"
        className={styles.transactionSection}
      >
        <div className={styles.transactionIntro}>
          <p className={styles.eyebrow}>
            04 / TRANSACTION FLOW
          </p>

          <h2>
            FROM WALLET
            <br />
            <span>TO CONFIRMATION.</span>
          </h2>

          <p>
            Understanding the transaction path helps
            explain what happens when a user
            interacts with a Solana application.
          </p>
        </div>

        <div className={styles.transactionFlow}>
          <div>
            <span>01</span>
            <strong>WALLET</strong>
            <p>
              The user creates and signs a transaction.
            </p>
          </div>

          <div className={styles.flowArrow}>
            →
          </div>

          <div>
            <span>02</span>
            <strong>RPC</strong>
            <p>
              The transaction is submitted to network
              infrastructure.
            </p>
          </div>

          <div className={styles.flowArrow}>
            →
          </div>

          <div>
            <span>03</span>
            <strong>VALIDATORS</strong>
            <p>
              Network participants process and verify
              the transaction.
            </p>
          </div>

          <div className={styles.flowArrow}>
            →
          </div>

          <div>
            <span>04</span>
            <strong>CONFIRM</strong>
            <p>
              The transaction reaches the required
              network state.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRANSACTION SIMULATOR */}

      <SolanaTransactionSimulator />

      {/* ECOSYSTEM */}

      <section
        id="ecosystem"
        className={styles.ecosystemSection}
      >
        <div className={styles.ecosystemHeader}>
          <p className={styles.eyebrow}>
            05 / ECOSYSTEM
          </p>

          <h2>
            BUILT FOR
            <br />
            <span>APPLICATIONS.</span>
          </h2>

          <p>
            Solana supports a broad ecosystem of
            applications and digital assets. These
            categories represent some of the areas
            users can encounter when exploring the
            network.
          </p>
        </div>

        <div className={styles.ecosystemGrid}>
          {ecosystem.map((item, index) => (
            <div
              key={item}
              className={styles.ecosystemItem}
            >
              <span>
                0{index + 1}
              </span>

              <strong>{item}</strong>

              <small>
                EXPLORE THE ECOSYSTEM
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* STRENGTHS AND LIMITATIONS */}

      <section
        id="perspective"
        className={styles.comparisonSection}
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>
              06 / PERSPECTIVE
            </p>

            <h2>
              STRENGTHS
              <br />
              <span>& LIMITATIONS.</span>
            </h2>
          </div>

          <p>
            Understanding a technology means looking
            at both what it does well and what users
            need to consider when interacting with it.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          <div className={styles.strengthColumn}>
            <div className={styles.columnTitle}>
              <span>+</span>
              STRENGTHS
            </div>

            {strengths.map((item) => (
              <article key={item.title}>
                <span>+</span>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.limitColumn}>
            <div className={styles.columnTitle}>
              <span>−</span>
              LIMITATIONS
            </div>

            {limitations.map((item) => (
              <article key={item.title}>
                <span>−</span>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY TERMS */}

      <section
        id="key-terms"
        className={styles.termsSection}
      >
        <div className={styles.termsHeading}>
          <p className={styles.eyebrow}>
            07 / GLOSSARY
          </p>

          <h2>
            KNOW THE
            <br />
            <span>LANGUAGE.</span>
          </h2>
        </div>

        <div className={styles.termsGrid}>
          {keyTerms.map(([term, definition]) => (
            <div
              key={term}
              className={styles.term}
            >
              <strong>{term}</strong>

              <p>{definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MINI QUIZ */}

      <section
        id="knowledge-check"
        className={styles.quizSection}
      >
        <div className={styles.quizHeader}>
          <div>
            <p className={styles.eyebrow}>
              08 / KNOWLEDGE CHECK
            </p>

            <h2>
              TEST YOUR
              <br />
              <span>KNOWLEDGE.</span>
            </h2>
          </div>

          <p className={styles.quizIntro}>
            Test your understanding of the Solana
            concepts covered throughout this module.
          </p>
        </div>

        <div className={styles.quizCard}>
          {quizQuestions.map(
            (question, questionIndex) => {
              const selectedAnswer =
                quizAnswers[questionIndex];

              const isCorrect =
                selectedAnswer === question.answer;

              return (
                <div
                  className={styles.quizQuestion}
                  key={questionIndex}
                >
                  <div
                    className={
                      styles.quizQuestionTop
                    }
                  >
                    <span>
                      QUESTION{" "}
                      {String(
                        questionIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    {quizSubmitted && (
                      <span
                        className={
                          isCorrect
                            ? styles.quizCorrect
                            : styles.quizIncorrect
                        }
                      >
                        {isCorrect
                          ? "✓ CORRECT"
                          : "✕ INCORRECT"}
                      </span>
                    )}
                  </div>

                  <h3>{question.question}</h3>

                  <div
                    className={styles.quizOptions}
                  >
                    {question.options.map(
                      (option, optionIndex) => {
                        const selected =
                          selectedAnswer ===
                          optionIndex;

                        const correct =
                          question.answer ===
                          optionIndex;

                        let optionClass =
                          styles.quizOption;

                        if (selected) {
                          optionClass += ` ${styles.quizOptionSelected}`;
                        }

                        if (
                          quizSubmitted &&
                          correct
                        ) {
                          optionClass += ` ${styles.quizOptionCorrect}`;
                        }

                        if (
                          quizSubmitted &&
                          selected &&
                          !correct
                        ) {
                          optionClass += ` ${styles.quizOptionWrong}`;
                        }

                        return (
                          <button
                            type="button"
                            key={optionIndex}
                            className={
                              optionClass
                            }
                            onClick={() =>
                              selectQuizAnswer(
                                questionIndex,
                                optionIndex
                              )
                            }
                            disabled={
                              quizSubmitted
                            }
                          >
                            <span
                              className={
                                styles.quizOptionLetter
                              }
                            >
                              {String.fromCharCode(
                                65 +
                                  optionIndex
                              )}
                            </span>

                            <span>
                              {option}
                            </span>
                          </button>
                        );
                      }
                    )}
                  </div>

                  {quizSubmitted && (
                    <div
                      className={
                        styles.quizExplanation
                      }
                    >
                      <span>
                        EXPLANATION
                      </span>

                      <p>
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            }
          )}

          <div className={styles.quizFooter}>
            {!quizSubmitted ? (
              <button
                type="button"
                className={styles.quizSubmit}
                onClick={submitQuiz}
                disabled={
                  Object.keys(quizAnswers)
                    .length !==
                  quizQuestions.length
                }
              >
                SUBMIT QUIZ
                <span>→</span>
              </button>
            ) : (
              <div className={styles.quizResult}>
                <div>
                  <span>YOUR SCORE</span>

                  <strong>
                    {quizScore} /{" "}
                    {quizQuestions.length}
                  </strong>
                </div>

                <button
                  type="button"
                  className={styles.quizReset}
                  onClick={resetQuiz}
                >
                  RETAKE QUIZ
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEXT MODULE */}

      <section className={styles.nextModule}>
        <div>
          <p className={styles.nextLabel}>
            NEXT MODULE / 03
          </p>

          <h2>
            MEME COINS
            <br />
            <span>START HERE.</span>
          </h2>

          <p>
            Explore tokens, communities,
            liquidity, tokenomics, market dynamics,
            and the risks surrounding meme coins.
          </p>
        </div>

        <Link
          href="/learn/meme-coins"
          className={styles.nextButton}
        >
          CONTINUE TO MEME COINS{" "}
          <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}

      <footer className={styles.footer}>
        <div>
          <Link
            href="/"
            className={styles.footerLogo}
          >
            [CHAINLAB]
          </Link>

          <p>
            Learn. Practice. Build. Succeed.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <Link href="/learn">
            LEARN
          </Link>

          <Link href="/learn/blockchain">
            BLOCKCHAIN
          </Link>

          <Link href="/learn/meme-coins">
            MEME COINS
          </Link>

          <Link href="/learn/security">
            SECURITY
          </Link>
        </div>

        <p>
          © 2026 CHAINLAB. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}