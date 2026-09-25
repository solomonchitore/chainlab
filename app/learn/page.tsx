"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./learn.module.css";

const modules = [
  {
    number: "01",
    title: "BLOCKCHAIN",
    topic: "Blockchain",
    description:
      "Learn the fundamentals of blockchain technology, how it works, and real-world applications.",
    href: "/learn/blockchain",
    level: "Beginner",
    lessons: 8,
    graphic: "blocks",
  },
  {
    number: "02",
    title: "SOLANA",
    topic: "Solana",
    description:
      "Understand the Solana ecosystem, wallets, tokens, and how to build on Solana.",
    href: "/learn/solana",
    level: "Beginner",
    lessons: 8,
    graphic: "solana",
  },
  {
    number: "03",
    title: "MEME COINS",
    topic: "Meme Coins",
    description:
      "Explore meme coins, tokenomics, communities, and how they create value in Web3.",
    href: "/learn/meme-coins",
    level: "Intermediate",
    lessons: 8,
    graphic: "meme",
  },
  {
    number: "04",
    title: "SECURITY",
    topic: "Security",
    description:
      "Learn how to protect your assets, identify threats, and stay safe in Web3.",
    href: "/learn/security",
    level: "Intermediate",
    lessons: 8,
    graphic: "security",
  },
];

const topics = ["All", "Blockchain", "Solana", "Meme Coins", "Security"];

function CardArtwork({ type }: { type: string }) {
  if (type === "blocks") {
    return (
      <svg className={styles.artwork} viewBox="0 0 320 180" aria-hidden="true">
        <g fill="rgba(91,116,147,.24)" stroke="#7d91ad" strokeWidth="1">
          <path d="M45 96 83 76 121 96 83 117Z" />
          <path d="M45 96V139L83 160V117Z" />
          <path d="M83 117 121 96V139L83 160Z" />
          <path d="M111 53 151 31 191 53 151 75Z" />
          <path d="M111 53V99L151 121V75Z" />
          <path d="M151 75 191 53V99L151 121Z" />
          <path d="M174 105 214 83 254 105 214 127Z" />
          <path d="M174 105V148L214 170V127Z" />
          <path d="M214 127 254 105V148L214 170Z" />
          <path d="M215 50 249 32 283 50 249 69Z" />
          <path d="M215 50V87L249 106V69Z" />
          <path d="M249 69 283 50V87L249 106Z" />
        </g>
        <g stroke="#a9c9ee" opacity=".7">
          <path d="M83 76V117M151 31V75M214 83V127M249 32V69" />
          <path d="M45 96 83 117 121 96M111 53 151 75 191 53M174 105 214 127 254 105" />
        </g>
        <g fill="#d6e9ff">
          <circle cx="83" cy="117" r="2.4" />
          <circle cx="151" cy="75" r="2.4" />
          <circle cx="214" cy="127" r="2.4" />
          <circle cx="249" cy="69" r="2.4" />
        </g>
      </svg>
    );
  }

  if (type === "solana") {
    return (
      <svg className={styles.artwork} viewBox="0 0 320 180" aria-hidden="true">
        <defs>
          <linearGradient id="solanaMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a8bbd4" />
            <stop offset=".5" stopColor="#34465f" />
            <stop offset="1" stopColor="#101b2b" />
          </linearGradient>
        </defs>
        <circle cx="177" cy="89" r="79" fill="#07111e" stroke="#647994" strokeWidth="2" />
        <circle cx="177" cy="89" r="69" fill="url(#solanaMetal)" stroke="#25384f" />
        <g fill="#d6e2f0" stroke="#7187a2" strokeWidth="1">
          <path d="M119 58 211 58 194 76 102 76Z" />
          <path d="M137 83 229 83 246 101 154 101Z" />
          <path d="M102 108 194 108 177 126 85 126Z" />
        </g>
      </svg>
    );
  }

  if (type === "meme") {
    return (
      <svg className={styles.artwork} viewBox="0 0 320 180" aria-hidden="true">
        <defs>
          <linearGradient id="coin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a9bbd2" />
            <stop offset=".55" stopColor="#26364b" />
            <stop offset="1" stopColor="#0a1422" />
          </linearGradient>
        </defs>
        <circle cx="171" cy="88" r="78" fill="#07111e" stroke="#596e89" strokeWidth="2" />
        <circle cx="171" cy="88" r="67" fill="url(#coin)" stroke="#263b54" strokeWidth="2" />
        <path d="M122 74 130 37 155 56Q171 48 187 56L211 37 219 76 211 113Q171 149 130 113Z"
          fill="#8194ad" stroke="#c3d2e4" strokeWidth="2" />
        <ellipse cx="171" cy="91" rx="43" ry="33" fill="#c2cfdf" stroke="#71859f" strokeWidth="2" />
        <ellipse cx="151" cy="83" rx="7" ry="10" fill="#182538" />
        <ellipse cx="190" cy="83" rx="7" ry="10" fill="#182538" />
        <path d="M163 99 171 105 179 99" fill="none" stroke="#26364b" strokeWidth="4" strokeLinecap="round" />
        <path d="M171 105V113M171 113Q158 124 148 113M171 113Q184 124 194 113"
          fill="none" stroke="#26364b" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={styles.artwork} viewBox="0 0 320 180" aria-hidden="true">
      <defs>
        <linearGradient id="shieldMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9fb2ca" />
          <stop offset=".5" stopColor="#2c3d54" />
          <stop offset="1" stopColor="#091321" />
        </linearGradient>
      </defs>
      <path d="M172 14 239 42 234 104Q224 146 172 169 120 146 110 104L105 42Z"
        fill="#07111e" stroke="#637994" strokeWidth="2" />
      <path d="M172 23 229 47 225 103Q216 138 172 159 128 138 119 103L115 47Z"
        fill="url(#shieldMetal)" stroke="#a6b8ce" strokeWidth="2" />
      <rect x="146" y="83" width="52" height="44" rx="7" fill="#6d819a" stroke="#c0cede" strokeWidth="2" />
      <path d="M156 83V68A16 16 0 0 1 188 68V83" fill="none" stroke="#aebed1" strokeWidth="8" />
      <path d="M156 83V68A16 16 0 0 1 188 68V83" fill="none" stroke="#26374d" strokeWidth="4" />
      <circle cx="172" cy="102" r="6" fill="#152337" />
      <path d="M172 106V115" stroke="#152337" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function LearnPage() {
  const [progress, setProgress] = useState(17);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredModules = useMemo(() => {
    let results = modules.filter((module) => {
      const matchesTopic = selectedTopic === "All" || module.topic === selectedTopic;
      const term = search.trim().toLowerCase();
      const matchesSearch =
        !term ||
        `${module.title} ${module.description} ${module.topic} ${module.level}`
          .toLowerCase()
          .includes(term);
      return matchesTopic && matchesSearch;
    });

    if (sortBy === "A–Z") {
      results = [...results].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Lessons") {
      results = [...results].sort((a, b) => b.lessons - a.lessons);
    } else {
      results = [...results].sort((a, b) => a.number.localeCompare(b.number));
    }
    return results;
  }, [selectedTopic, search, sortBy]);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>[CHAINLAB]</Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="/" className={styles.navLink}>HOME</Link>
            <Link href="/learn" className={`${styles.navLink} ${styles.active}`}>LEARN</Link>
            <Link href="/learn/blockchain" className={styles.navLink}>BLOCKCHAIN</Link>
            <Link href="/learn/solana" className={styles.navLink}>SOLANA</Link>
            <Link href="/learn/meme-coins" className={styles.navLink}>MEME COINS</Link>
            <Link href="/learn/security" className={styles.navLink}>SECURITY</Link>
          </nav>

          <Link href="/learn/blockchain" className={styles.startButton}>
            START LEARNING <span>→</span>
          </Link>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
      </header>

      <section className={styles.learningSection}>
        <div className={styles.hero}>
          <div className={styles.introduction}>
            <div className={styles.breadcrumb}>LEARN&nbsp; • &nbsp;BUILD&nbsp; • &nbsp;GROW</div>
            <h1>ChainLab<br /><span>Learning.</span></h1>
            <p>
              A modern, structured way to learn blockchain, Solana, meme coins,
              and Web3 security. Practical lessons, real examples, and hands-on
              guides for the next generation.
            </p>
          </div>

          <aside className={styles.progressPanel}>
            <div className={styles.panelEyebrow}>
              <span>YOUR LEARNING PROGRESS</span>
              <span className={styles.keepGoing}><i /> Keep going!</span>
            </div>
            <h2>Explore. Learn. Build.</h2>
            <p>Track your progress across all learning paths<br className={styles.desktopBreak} /> and become Web3 ready.</p>
            <div className={styles.progressRow}>
              <div className={styles.panelTrack}>
                <div className={styles.panelBar} style={{ width: `${progress}%` }} />
              </div>
              <span>{Math.round((progress / 100) * 12)} / 12</span>
            </div>
            <div className={styles.stats}>
              <div><strong>4</strong><span>Learning Paths</span></div>
              <div><strong>32</strong><span>Lessons</span></div>
              <div><strong>8</strong><span>Resources</span></div>
            </div>
          </aside>
        </div>

        <div className={styles.controls}>
          <div className={styles.filterGroup}>
            <label>FILTER BY TOPIC</label>
            <div className={styles.topicButtons}>
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className={`${styles.topicButton} ${selectedTopic === topic ? styles.selected : ""}`}
                  onClick={() => setSelectedTopic(topic)}
                  aria-pressed={selectedTopic === topic}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.searchGroup}>
            <label htmlFor="lesson-search">SEARCH LESSONS</label>
            <div className={styles.searchBox}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 5 5" /></svg>
              <input
                id="lesson-search"
                type="search"
                placeholder="Search for lessons, topics, or keywords..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.sortGroup}>
            <label htmlFor="lesson-sort">SORT BY</label>
            <select id="lesson-sort" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option>Newest</option>
              <option>A–Z</option>
              <option>Lessons</option>
            </select>
          </div>
        </div>

        <div className={styles.moduleGrid}>
          {filteredModules.map((module) => (
            <Link key={module.number} href={module.href} className={styles.moduleCard}>
              <span className={styles.moduleNumber}>{module.number}</span>
              <CardArtwork type={module.graphic} />
              <div className={styles.moduleContent}>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.lessonCount}>
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 2.5h8l4 4V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" /><path d="M12 2.5v4h4" /></svg>
                    {module.lessons} lessons
                  </span>
                  <span className={styles.level}>{module.level}</span>
                  <span className={styles.cardArrow} aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
          {filteredModules.length === 0 && (
            <div className={styles.emptyState}>
              <strong>No learning paths found.</strong>
              <span>Try another topic or search term.</span>
            </div>
          )}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerLogo}>[CHAINLAB]</div>
            <p className={styles.footerTagline}>Learn. Practice. Build. Succeed.</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.socials} aria-label="Social links">
              <span aria-label="Discord">◉</span>
              <span aria-label="GitHub">⌘</span>
              <span aria-label="X">𝕏</span>
              <span aria-label="YouTube">▶</span>
            </div>
            <p className={styles.copyright}>© 2026 ChainLab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
