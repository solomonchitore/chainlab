"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import styles from "./meme-coins.module.css";

const learningSections = [
  {
    number: "01",
    title: "THE FOUNDATION",
    description: "Understand what meme coins are and how they relate to blockchain.",
    href: "#foundation",
  },
  {
    number: "02",
    title: "CORE CONCEPTS",
    description: "Learn about tokens, supply, liquidity, communities, tokenomics and market cap.",
    href: "#core-concepts",
  },
  {
    number: "03",
    title: "HOW IT WORKS",
    description: "Follow a meme coin from creation through distribution, liquidity and market activity.",
    href: "#mechanics",
  },
  {
    number: "04",
    title: "TOKENOMICS",
    description: "Understand supply, distribution, circulating supply and liquidity.",
    href: "#tokenomics",
  },
  {
    number: "05",
    title: "RISK PROTOCOL",
    description: "Learn about volatility, scams, rug pulls, concentration and FOMO.",
    href: "#risks",
  },
  {
    number: "06",
    title: "RESEARCH",
    description: "Learn what to investigate before interacting with a token.",
    href: "#research",
  },
  {
    number: "07",
    title: "KNOWLEDGE CHECK",
    description: "Test your understanding of meme coins and token research.",
    href: "#knowledge-check",
  },
];

const quizQuestions = [
  {
    question: "What is a meme coin?",
    options: [
      "A cryptocurrency strongly influenced by internet culture and communities",
      "A type of blockchain validator",
      "A private blockchain database",
      "A wallet recovery phrase",
    ],
    answer: 0,
    explanation:
      "A meme coin is a cryptocurrency or token strongly influenced by internet culture, memes, communities, trends and social attention.",
  },
  {
    question: "Why does liquidity matter?",
    options: [
      "It determines someone's wallet password",
      "It allows users to buy and sell tokens",
      "It creates a private key",
      "It removes market volatility",
    ],
    answer: 1,
    explanation:
      "Liquidity allows people to buy and sell tokens. Limited liquidity can make prices move dramatically.",
  },
  {
    question: "What does tokenomics describe?",
    options: [
      "The economic design of a token",
      "A blockchain's internet connection",
      "A wallet's password",
      "A social-media account",
    ],
    answer: 0,
    explanation:
      "Tokenomics describes the economic design of a token, including supply, distribution, incentives and utility.",
  },
  {
    question: "What is one risk of highly concentrated token ownership?",
    options: [
      "The blockchain becomes invisible",
      "A small number of wallets can significantly influence the market",
      "Users cannot create wallets",
      "The token automatically becomes safer",
    ],
    answer: 1,
    explanation:
      "When a small number of wallets control a large supply, their actions can significantly affect the market.",
  },
  {
    question: "What should you verify before interacting with a token?",
    options: [
      "Only its social-media followers",
      "Only its logo",
      "The contract, liquidity, holders and reliable information sources",
      "Only the token's name",
    ],
    answer: 2,
    explanation:
      "Research should include verifying the contract, examining liquidity and holders, and checking information across reliable sources.",
  },
];

export default function MemeCoinsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<
    Record<number, number>
  >({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  /*
   * LOAD SAVED PROGRESS
   */
  useEffect(() => {
    const savedProgress = localStorage.getItem(
      "chainlab-meme-coins-progress"
    );

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);

        if (Array.isArray(parsed)) {
          setCompletedSections(parsed);
        }
      } catch {
        localStorage.removeItem(
          "chainlab-meme-coins-progress"
        );
      }
    }
  }, []);

  /*
   * SAVE PROGRESS
   */
  useEffect(() => {
    localStorage.setItem(
      "chainlab-meme-coins-progress",
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
   * TOGGLE LESSON COMPLETION
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
   * SELECT QUIZ ANSWER
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
   * SCORE
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

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className={styles.header}>
        <div className={styles.navInner}>

          <Link href="/" className={styles.logo}>
            [CHAINLAB]
          </Link>

          <nav className={styles.nav}>
            <Link href="/learn/blockchain">
              BLOCKCHAIN
            </Link>

            <Link href="/learn/solana">
              SOLANA
            </Link>

            <Link
              href="/learn/meme-coins"
              className={styles.active}
            >
              MEME COINS
            </Link>

            <Link href="/learn/security">
              SECURITY
            </Link>
          </nav>

          <Link
            href="/learn"
            className={styles.navButton}
          >
            LEARNING HUB <span>→</span>
          </Link>

        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGrid}>

          <div className={styles.heroContent}>

            <div className={styles.sectionLabel}>
              [ 03 / MEME COINS ]
            </div>

            <h1>
              NOT
              <br />
              JUST
              <br />
              <span>HYPE.</span>
            </h1>

            <p className={styles.heroText}>
              Meme coins sit at the intersection of technology,
              communities, online culture and market speculation.
              Understanding how they work is more important than
              simply following the hype.
            </p>

            <div className={styles.heroActions}>

              <a
                href="#mechanics"
                className={styles.primaryButton}
              >
                EXPLORE THE MECHANICS <span>→</span>
              </a>

              <a
                href="#risks"
                className={styles.secondaryButton}
              >
                UNDERSTAND THE RISKS
              </a>

            </div>

          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>

              <img
                src="/images/meme-coins-hero.png"
                alt="Meme coins and blockchain"
                className={styles.heroCardImage}
              />

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          LEARNING TOOLS
      ====================================================== */}

      <section className={styles.learningTools}>

        {/* PROGRESS */}

        <div className={styles.progressPanel}>

          <div className={styles.progressHeader}>

            <div>
              <p className={styles.toolEyebrow}>
                YOUR MEME COINS PROGRESS
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
              ? "Start completing sections to track your Meme Coins progress."
              : completedSections.length ===
                  learningSections.length
                ? "Meme Coins learning module complete."
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

                    <span>
                      {section.number}
                    </span>

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

        {/* SEARCH */}

        <div className={styles.searchPanel}>

          <label
            htmlFor="meme-coins-search"
            className={styles.searchLabel}
          >
            SEARCH MEME COINS LESSONS
          </label>

          <div className={styles.searchBox}>

            <span className={styles.searchIcon}>
              ⌕
            </span>

            <input
              id="meme-coins-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search meme coin topics..."
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
              : "Search tokenomics, liquidity, risks, research and more."}
          </p>

          <div className={styles.searchResults}>

            {filteredSections.map((section) => (

              <Link
                href={section.href}
                key={section.number}
                className={styles.searchResult}
                onClick={() => setSearchTerm("")}
              >

                <span>
                  {section.number}
                </span>

                <div>

                  <strong>
                    {section.title}
                  </strong>

                  <p>
                    {section.description}
                  </p>

                </div>

                <span
                  className={styles.searchArrow}
                >
                  →
                </span>

              </Link>

            ))}

          </div>

          {searchTerm &&
            filteredSections.length === 0 && (
              <div
                className={styles.searchNoResults}
              >
                NO RESULTS
              </div>
            )}

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section
        className={styles.introduction}
        id="foundation"
      >

        <div className={styles.sectionLabel}>
          [ THE FOUNDATION ]
        </div>

        <div className={styles.introductionGrid}>

          <div>
            <h2>
              WHAT IS A
              <br />
              <span>MEME COIN?</span>
            </h2>
          </div>

          <div
            className={styles.introductionContent}
          >

            <p>
              A meme coin is a cryptocurrency or token that is
              strongly influenced by internet culture, memes,
              communities, trends, and social attention.
            </p>

            <p>
              Some meme coins are built primarily around community
              participation and culture rather than a complex
              technical application. Others can develop broader
              ecosystems, utilities, communities, and markets.
            </p>

            <p>
              The important distinction is that popularity does
              not automatically mean value, utility, or safety.
              Understanding the underlying mechanics is therefore
              essential.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CORE CONCEPTS
      ====================================================== */}

      <section
        className={styles.concepts}
        id="core-concepts"
      >

        <div className={styles.sectionLabel}>
          [ CORE CONCEPTS ]
        </div>

        <div className={styles.sectionHeading}>

          <h2>
            UNDERSTAND WHAT
            <br />
            <span>DRIVES A TOKEN.</span>
          </h2>

        </div>

        <div className={styles.conceptGrid}>

          <article className={styles.conceptCard}>
            <span>01</span>

            <h3>TOKEN</h3>

            <p>
              The digital asset itself. A meme coin is represented
              by a token that exists on a blockchain network.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>02</span>

            <h3>SUPPLY</h3>

            <p>
              The number of tokens created and the amount available
              in circulation can influence how a token behaves in
              the market.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>03</span>

            <h3>LIQUIDITY</h3>

            <p>
              Liquidity allows people to buy and sell tokens.
              Limited liquidity can make prices move dramatically.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>04</span>

            <h3>COMMUNITY</h3>

            <p>
              Meme coins often depend heavily on community
              participation, attention, culture, and social activity.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>05</span>

            <h3>TOKENOMICS</h3>

            <p>
              Tokenomics describes the economic design of a token,
              including supply, distribution, incentives and utility.
            </p>
          </article>

          <article className={styles.conceptCard}>
            <span>06</span>

            <h3>MARKET CAP</h3>

            <p>
              Market capitalization provides a way of estimating
              the total market value of tokens currently in
              circulation.
            </p>
          </article>

        </div>

      </section>

      {/* =====================================================
          HOW MEME COINS WORK
      ====================================================== */}

      <section
        className={styles.mechanics}
        id="mechanics"
      >

        <div className={styles.sectionLabel}>
          [ HOW IT WORKS ]
        </div>

        <div className={styles.mechanicsHeader}>

          <h2>
            FROM CREATION
            <br />
            <span>TO MARKET.</span>
          </h2>

          <p className={styles.processIntro}>
            A meme coin can move through several stages from
            creation to community adoption and market activity.
          </p>

        </div>

        <div className={styles.processList}>

          {[
            [
              "01",
              "CREATE",
              "A token is created on a blockchain network using the network's token standards or smart-contract functionality.",
            ],
            [
              "02",
              "DISTRIBUTE",
              "Tokens can be distributed through different mechanisms depending on how the project is structured.",
            ],
            [
              "03",
              "LIQUIDITY",
              "Liquidity can be provided to markets so users can trade the token.",
            ],
            [
              "04",
              "COMMUNITY",
              "Communities can drive awareness, discussion, participation, culture and attention around a token.",
            ],
            [
              "05",
              "MARKET",
              "Once trading activity develops, supply, demand, liquidity, sentiment and market conditions can influence price.",
            ],
          ].map(([number, title, text]) => (

            <div
              className={styles.processRow}
              key={number}
            >

              <div className={styles.processNumber}>
                {number}
              </div>

              <div className={styles.processTitle}>
                <h3>{title}</h3>
              </div>

              <div className={styles.processContent}>
                <p>{text}</p>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          TOKENOMICS
      ====================================================== */}

      <section
        className={styles.tokenomics}
        id="tokenomics"
      >

        <div className={styles.sectionLabel}>
          [ TOKENOMICS ]
        </div>

        <div className={styles.tokenomicsHeader}>

          <h2>
            FOLLOW THE
            <br />
            <span>NUMBERS.</span>
          </h2>

          <p>
            Understanding token supply and distribution can help
            provide important context when researching a meme coin.
          </p>

        </div>

        <div className={styles.metricsGrid}>

          <div className={styles.metric}>
            <span>01</span>

            <h3>TOTAL SUPPLY</h3>

            <p>
              The total number of tokens that exist or are intended
              to exist according to the token's design.
            </p>
          </div>

          <div className={styles.metric}>
            <span>02</span>

            <h3>CIRCULATING SUPPLY</h3>

            <p>
              The number of tokens currently considered to be
              circulating in the market.
            </p>
          </div>

          <div className={styles.metric}>
            <span>03</span>

            <h3>DISTRIBUTION</h3>

            <p>
              How tokens are allocated among wallets, communities,
              teams, liquidity pools and other participants.
            </p>
          </div>

          <div className={styles.metric}>
            <span>04</span>

            <h3>LIQUIDITY</h3>

            <p>
              The available trading liquidity can influence how
              easily participants can enter or exit positions.
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          RISKS
      ====================================================== */}

      <section
        className={styles.risks}
        id="risks"
      >

        <div className={styles.sectionLabel}>
          [ RISK PROTOCOL ]
        </div>

        <div className={styles.riskHeader}>

          <h2>
            UNDERSTAND THE
            <br />
            <span>RISK.</span>
          </h2>

          <p>
            Meme coins can be highly volatile and speculative.
            Learning how to identify common risks is an important
            part of responsible participation.
          </p>

        </div>

        <div className={styles.riskGrid}>

          {[
            [
              "01",
              "VOLATILITY",
              "Prices can move rapidly because of speculation, sentiment, liquidity and changing market conditions.",
            ],
            [
              "02",
              "SCAMS",
              "Fraudulent projects, fake websites, impersonation and misleading information can put users at risk.",
            ],
            [
              "03",
              "RUG PULLS",
              "Some projects can be structured in ways that allow insiders to remove liquidity or exploit participants.",
            ],
            [
              "04",
              "CONCENTRATION",
              "If a small number of wallets control a large supply, their actions can significantly affect the market.",
            ],
            [
              "05",
              "FOMO",
              "Fear of missing out can encourage impulsive decisions without adequate research.",
            ],
            [
              "06",
              "DYOR",
              "Do your own research. Verify information before trusting a project, contract, community or promotion.",
            ],
          ].map(([number, title, text]) => (

            <article
              className={styles.riskCard}
              key={number}
            >

              <span>{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          RESEARCH
      ====================================================== */}

      <section
        className={styles.research}
        id="research"
      >

        <div className={styles.sectionLabel}>
          [ RESEARCH BEFORE PARTICIPATING ]
        </div>

        <div className={styles.researchBox}>

          <h2>
            DON'T FOLLOW
            <br />
            <span>THE NOISE.</span>
          </h2>

          <p>
            Research the underlying information before making
            decisions about a token.
          </p>

          <div className={styles.researchGrid}>

            <div>
              <span>01</span>

              <h3>CONTRACT</h3>

              <p>
                Verify the token contract address and make sure you
                are interacting with the intended asset.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>LIQUIDITY</h3>

              <p>
                Consider whether sufficient liquidity exists and
                understand where it is held.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>HOLDERS</h3>

              <p>
                Examine token distribution and whether ownership
                appears heavily concentrated.
              </p>
            </div>

            <div>
              <span>04</span>

              <h3>SOURCES</h3>

              <p>
                Check information across reliable sources rather
                than relying on a single social-media post.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KNOWLEDGE CHECK / MINI QUIZ
      ====================================================== */}

      <section
        className={styles.knowledge}
        id="knowledge-check"
      >

        <div className={styles.sectionLabel}>
          [ KNOWLEDGE CHECK ]
        </div>

        <h2>
          TEST YOUR
          <br />
          <span>UNDERSTANDING.</span>
        </h2>

        <p>
          Test your understanding of tokens, liquidity,
          communities, tokenomics and risk.
        </p>

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

                  <h3>
                    {question.question}
                  </h3>

                  <div
                    className={
                      styles.quizOptions
                    }
                  >

                    {question.options.map(
                      (
                        option,
                        optionIndex
                      ) => {

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

      {/* =====================================================
          NEXT MODULE
      ====================================================== */}

      <section className={styles.nextModule}>

        <div className={styles.sectionLabel}>
          [ NEXT MODULE ]
        </div>

        <h2>
          SECURITY
          <br />
          <span>MATTERS.</span>
        </h2>

        <p>
          Understanding meme coins is only part of the Web3
          journey. The next step is learning how to protect
          wallets, private keys, transactions and digital assets.
        </p>

        <Link
          href="/learn/security"
          className={styles.primaryButton}
        >
          LEARN WEB3 SECURITY <span>→</span>
        </Link>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className={styles.footer}>

        <div className={styles.footerBrand}>

          <Link
            href="/"
            className={styles.logo}
          >
            [CHAINLAB]
          </Link>

          <span>
            Learn. Understand. Explore.
          </span>

        </div>

        <div className={styles.footerLinks}>

          <Link href="/learn/blockchain">
            BLOCKCHAIN
          </Link>

          <Link href="/learn/solana">
            SOLANA
          </Link>

          <Link href="/learn/meme-coins">
            MEME COINS
          </Link>

          <Link href="/learn/security">
            SECURITY
          </Link>

        </div>

        <p>
          © 2026 CHAINLAB — EDUCATIONAL PROJECT
        </p>

      </footer>

    </main>
  );
}