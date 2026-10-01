 "use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const modules = [
  {
    name: "Blockchain",
    completed: 0,
    total: 8,
    href: "/learn/blockchain",
    accent: "blue",
    description: "Learn the fundamentals of blockchain technology, how it works, and real-world use cases.",
  },
  {
    name: "Solana",
    completed: 0,
    total: 8,
    href: "/learn/solana",
    accent: "green",
    description: "Explore Solana, its ecosystem, developer tools, smart contracts and on-chain applications.",
  },
  {
    name: "Meme Coins",
    completed: 0,
    total: 7,
    href: "/learn/meme-coins",
    accent: "gold",
    description: "Understand meme coins, tokenomics, community building and real market examples.",
  },
  {
    name: "Security",
    completed: 0,
    total: 7,
    href: "/learn/security",
    accent: "red",
    description: "Learn how to stay safe in Web3, secure your assets and prevent common attacks.",
  },
];

const achievements = [
  {
    number: "01",
    name: "First Step",
    description: "Complete your first ChainLab learning section.",
  },
  {
    number: "02",
    name: "Blockchain Explorer",
    description: "Complete the Blockchain learning path.",
  },
  {
    number: "03",
    name: "Web3 Learner",
    description: "Make progress across multiple ChainLab modules.",
  },
  {
    number: "04",
    name: "ChainLab Graduate",
    description: "Complete all 30 course sections.",
  },
];

const dashboardStyles = `
  body:has(#chainlab-dashboard) {
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
  }

  body:has(#chainlab-dashboard) .chainlab-utility-bar,
  body:has(#chainlab-dashboard) .site-header,
  body:has(#chainlab-dashboard) .chainlab-toolbar-center,
  body:has(#chainlab-dashboard) .chainlab-toolbar-right,
  body:has(#chainlab-dashboard) .chainlab-legal-links,
  body:has(#chainlab-dashboard) footer,
  body:has(#chainlab-dashboard) .chainlab-chat-launcher,
  body:has(#chainlab-dashboard) .chainlab-chatbox,
  body:has(#chainlab-dashboard) .mobile-navigation,
  body:has(#chainlab-dashboard) .mobile-nav,
  body:has(#chainlab-dashboard) .cookie-consent {
    display: none !important;
  }

  #chainlab-dashboard,
  #chainlab-dashboard * {
    box-sizing: border-box;
  }

  body:has(#chainlab-dashboard.dashboard-dark) {
    background: #080F17 !important;
    color: #f5f7fb !important;
  }

  html:has(#chainlab-dashboard.dashboard-dark) {
    background: #080F17 !important;
  }

  #chainlab-dashboard {
    --bg: #f5f7fa;
    --surface: #ffffff;
    --surface-soft: #f8fafc;
    --surface-muted: #edf2f7;
    --border: #dfe5ec;
    --text: #111827;
    --muted: #667085;
    --subtle: #98a2b3;
    --accent: #1677ff;
    --accent-soft: #eaf3ff;
    --sidebar: #ffffff;
    --hero: #ffffff;
    --module-blue-bg: #edf5ff;
    --module-green-bg: #edfdf8;
    --module-gold-bg: #fff9e9;
    --module-red-bg: #fff0f1;
    min-height: 100svh;
    width: 100%;
    display: flex;
    color: var(--text);
    background: var(--bg);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    transition: background .2s ease, color .2s ease;
  }

  #chainlab-dashboard.dashboard-dark {
    --bg: #080F17;
    --surface: #0D1926;
    --surface-soft: #102131;
    --surface-muted: #162B40;
    --border: #27415A;
    --text: #f5f7fb;
    --muted: #a1adba;
    --subtle: #738091;
    --accent: #2588ff;
    --accent-soft: #12304E;
    --sidebar: #091522;
    --hero: #0D1D30;
    --module-blue-bg: #0B2948;
    --module-green-bg: #0B302C;
    --module-gold-bg: #3A2C12;
    --module-red-bg: #3A1720;
  }

  .cl-sidebar {
    width: 215px;
    min-height: 100svh;
    flex: 0 0 215px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 26px 14px 20px;
    background: var(--sidebar);
    border-right: 1px solid var(--border);
  }

  .cl-logo {
    display: block;
    padding: 0 15px;
    color: var(--text);
    text-decoration: none;
    font-size: 20px;
    font-weight: 850;
    letter-spacing: -.045em;
  }

  .cl-nav {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 36px;
  }

  .cl-nav-link {
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    border-radius: 7px;
    color: var(--muted);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: .18s ease;
  }

  .cl-nav-link:hover {
    color: var(--text);
    background: var(--surface-muted);
  }

  .cl-nav-link.active {
    color: #fff;
    background: var(--accent);
  }

  .cl-sidebar-bottom {
    margin-top: auto;
  }

  .cl-signout {
    width: 100%;
    min-height: 41px;
    border: 1px solid var(--border);
    border-radius: 7px;
    color: var(--muted);
    background: transparent;
    cursor: pointer;
    font: inherit;
    font-size: 12px;
    font-weight: 650;
  }

  .cl-signout:hover {
    color: var(--text);
    background: var(--surface-muted);
  }

  .cl-main {
    min-width: 0;
    flex: 1;
  }

  .cl-topbar {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 28px;
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .cl-search {
    width: min(570px, 58vw);
    height: 38px;
    display: flex;
    align-items: center;
    padding: 0 13px;
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--muted);
    background: var(--surface-soft);
    font-size: 12px;
  }

  .cl-top-actions {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .cl-theme-switch {
    display: inline-flex;
    border: 1px solid var(--border);
    border-radius: 999px;
    overflow: hidden;
    background: var(--surface-soft);
  }

  .cl-theme-button {
    min-width: 52px;
    height: 30px;
    border: 0;
    color: var(--muted);
    background: transparent;
    cursor: pointer;
    font: inherit;
    font-size: 11px;
    font-weight: 700;
  }

  .cl-theme-button.active {
    color: #fff;
    background: var(--accent);
  }

  .cl-user {
    display: flex;
    align-items: center;
    gap: 9px;
    padding-left: 12px;
    border-left: 1px solid var(--border);
  }

  .cl-user-avatar {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    background: var(--accent);
    font-size: 10px;
    font-weight: 800;
  }

  .cl-user-copy {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .cl-user-copy strong {
    color: var(--text);
    font-size: 11px;
  }

  .cl-user-copy span {
    color: var(--muted);
    font-size: 9px;
  }

  .cl-content {
    width: min(1360px, 100%);
    margin: 0 auto;
    padding: 22px;
  }

  .cl-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(280px, .75fr);
    gap: 22px;
    padding: 25px;
    border: 1px solid rgba(37, 136, 255, .28);
    border-radius: 9px;
    background:
      linear-gradient(105deg, rgba(17, 82, 160, .28), transparent 55%),
      var(--hero);
  }

  .dashboard-dark .cl-hero {
    background:
      linear-gradient(105deg, rgba(11, 77, 153, .30), transparent 55%),
      #0a1626;
  }

  .cl-eyebrow {
    margin: 0 0 6px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  .cl-hero h1 {
    margin: 0;
    color: var(--text);
    font-size: clamp(34px, 4vw, 53px);
    line-height: 1;
    font-weight: 800;
    letter-spacing: -.055em;
  }

  .cl-hero h1 span {
    color: var(--accent);
  }

  .cl-hero-copy p {
    max-width: 570px;
    margin: 12px 0 18px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.55;
  }

  .cl-primary {
    display: inline-flex;
    align-items: center;
    min-height: 39px;
    padding: 0 18px;
    border-radius: 6px;
    color: #fff;
    background: var(--accent);
    text-decoration: none;
    font-size: 11px;
    font-weight: 750;
  }

  .cl-progress-card {
    align-self: center;
    padding: 18px;
    border: 1px solid rgba(67, 139, 220, .32);
    border-radius: 8px;
    background: #102131;
  }

  .cl-progress-label {
    color: var(--text);
    font-size: 11px;
    font-weight: 700;
  }

  .cl-progress-number {
    margin-top: 3px;
    color: var(--text);
    font-size: 32px;
    font-weight: 800;
    line-height: 1;
  }

  .cl-progress-track {
    height: 7px;
    margin-top: 12px;
    border-radius: 999px;
    overflow: hidden;
    background: var(--surface-muted);
  }

  .cl-progress-track span {
    display: block;
    height: 100%;
    width: 0;
    border-radius: inherit;
    background: var(--accent);
  }

  .cl-progress-note {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 10px;
  }

  .cl-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 12px;
  }

  .cl-stat {
    padding: 15px 17px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
  }

  .cl-stat-label {
    color: var(--muted);
    font-size: 9px;
    font-weight: 750;
    text-transform: uppercase;
    letter-spacing: .06em;
  }

  .cl-stat strong {
    display: block;
    margin-top: 6px;
    color: var(--text);
    font-size: 22px;
    line-height: 1;
  }

  .cl-stat p {
    margin: 6px 0 0;
    color: var(--subtle);
    font-size: 10px;
  }

  .cl-section {
    margin-top: 25px;
  }

  .cl-section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 12px;
  }

  .cl-section-heading h2 {
    margin: 0;
    color: var(--text);
    font-size: 18px;
    letter-spacing: -.025em;
  }

  .cl-section-heading p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 10px;
  }

  .cl-view-all {
    color: var(--accent);
    text-decoration: none;
    font-size: 10px;
    font-weight: 750;
  }

  .cl-modules {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .cl-module {
    min-width: 0;
    min-height: 184px;
    display: flex;
    flex-direction: column;
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    transition: transform .18s ease, border-color .18s ease;
  }

  .cl-module:hover {
    transform: translateY(-2px);
  }

  .cl-blue { border-color: #2789ff; background: linear-gradient(145deg, var(--surface), var(--module-blue-bg)); }
  .cl-green { border-color: #10b981; background: linear-gradient(145deg, var(--surface), var(--module-green-bg)); }
  .cl-gold { border-color: #d99b12; background: linear-gradient(145deg, var(--surface), var(--module-gold-bg)); }
  .cl-red { border-color: #e5484d; background: linear-gradient(145deg, var(--surface), var(--module-red-bg)); }

  .cl-module-name {
    color: var(--text);
    font-size: 15px;
    font-weight: 800;
  }

  .cl-module-description {
    min-height: 62px;
    margin: 8px 0 15px;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.5;
  }

  .cl-module-meta {
    display: flex;
    justify-content: space-between;
    color: var(--muted);
    font-size: 9px;
    font-weight: 700;
  }

  .cl-module-progress {
    height: 5px;
    margin-top: 7px;
    border-radius: 999px;
    overflow: hidden;
    background: var(--surface-muted);
  }

  .cl-module-progress span {
    display: block;
    height: 100%;
    width: 0;
    border-radius: inherit;
  }

  .cl-blue .cl-module-progress span { background: #1677ff; }
  .cl-green .cl-module-progress span { background: #10b981; }
  .cl-gold .cl-module-progress span { background: #d99b12; }
  .cl-red .cl-module-progress span { background: #e5484d; }

  .cl-module-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 31px;
    margin-top: 12px;
    border: 1px solid currentColor;
    border-radius: 5px;
    color: var(--text);
    text-decoration: none;
    font-size: 10px;
    font-weight: 750;
  }

  .cl-module-link:hover {
    color: var(--accent);
  }

  .cl-achievements {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .cl-achievement {
    min-height: 82px;
    display: grid;
    grid-template-columns: 43px 1fr;
    gap: 11px;
    align-items: center;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
  }

  .cl-achievement-number {
    width: 39px;
    height: 39px;
    display: grid;
    place-items: center;
    border-radius: 7px;
    color: var(--accent);
    background: var(--accent-soft);
    font-size: 12px;
    font-weight: 850;
  }

  .cl-achievement strong {
    display: block;
    color: var(--text);
    font-size: 10px;
  }

  .cl-achievement p {
    margin: 3px 0;
    color: var(--muted);
    font-size: 9px;
    line-height: 1.35;
  }

  .cl-achievement-status {
    color: var(--subtle);
    font-size: 8px;
  }

  .cl-bottom-grid {
    display: grid;
    grid-template-columns: 1.4fr .6fr;
    gap: 12px;
    margin-top: 12px;
  }

  .cl-panel {
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
  }

  .cl-panel h3 {
    margin: 0;
    color: var(--text);
    font-size: 14px;
  }

  .cl-panel-subtitle {
    margin: 5px 0 12px;
    color: var(--muted);
    font-size: 10px;
  }

  .cl-row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 9px 0;
    border-top: 1px solid var(--border);
  }

  .cl-row strong {
    color: var(--text);
    font-size: 10px;
  }

  .cl-row span {
    color: var(--muted);
    font-size: 9px;
  }

  .cl-certificate-status {
    margin: 10px 0;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.55;
  }

  .cl-certificate-link {
    color: var(--accent);
    text-decoration: none;
    font-size: 10px;
    font-weight: 750;
  }

  .cl-loading {
    min-height: 100svh;
    width: 100%;
    display: grid;
    place-content: center;
    padding: 30px;
    text-align: center;
    background: var(--bg);
    color: var(--text);
  }

  @media (max-width: 1050px) {
    .cl-sidebar { width: 190px; flex-basis: 190px; }
    .cl-content { padding: 18px; }
    .cl-modules, .cl-achievements { grid-template-columns: repeat(2, 1fr); }
    .cl-hero { grid-template-columns: 1fr; }
  }

  @media (max-width: 760px) {
    #chainlab-dashboard { display: block; }

    .cl-sidebar {
      width: 100%;
      min-height: auto;
      position: relative;
      padding: 17px;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .cl-nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;
    }

    .cl-sidebar-bottom {
      margin-top: 12px;
    }

    .cl-topbar {
      height: auto;
      min-height: 64px;
      padding: 12px 15px;
    }

    .cl-search {
      width: 100%;
    }

    .cl-user {
      display: none;
    }

    .cl-content {
      padding: 15px;
    }

    .cl-stats,
    .cl-modules,
    .cl-achievements,
    .cl-bottom-grid {
      grid-template-columns: 1fr;
    }

    .cl-hero {
      padding: 20px;
    }
  }

  /* DARK MODE — NO BLACK SURFACES */
  body:has(#chainlab-dashboard.dashboard-dark),
  html:has(#chainlab-dashboard.dashboard-dark) {
    background: #080F17 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard {
    background: #080F17 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-sidebar,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-topbar,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-stat,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-module,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-achievement,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-panel {
    background-color: #0D1926 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-search,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-theme-switch {
    background-color: #102131 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-hero {
    background: #0D1D30 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-progress-card {
    background: #102131 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-progress-track,
  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-module-progress {
    background: #162B40 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-blue {
    background: #0B2948 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-green {
    background: #0B302C !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-gold {
    background: #3A2C12 !important;
  }

  body:has(#chainlab-dashboard.dashboard-dark) #chainlab-dashboard .cl-red {
    background: #3A1720 !important;
  }

`;

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const totalCompleted = useMemo(
    () => modules.reduce((sum, module) => sum + module.completed, 0),
    []
  );

  const totalSections = 30;
  const percentage = Math.round((totalCompleted / totalSections) * 100);

  useEffect(() => {
    const saved = localStorage.getItem("chainlab-theme");
    const htmlTheme = document.documentElement.dataset.theme;

    setTheme(saved === "light" || htmlTheme === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  }

  function setDashboardTheme(next: "light" | "dark") {
    setTheme(next);
    localStorage.setItem("chainlab-theme", next);
    document.documentElement.dataset.theme = next;
  }

  if (isPending) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: dashboardStyles }} />
        <main id="chainlab-dashboard" className={theme === "dark" ? "dashboard-dark" : ""}>
          <section className="cl-loading">
            <strong>CHAINLAB</strong>
            <h1>Loading your dashboard...</h1>
            <p>Checking your ChainLab account.</p>
          </section>
        </main>
      </>
    );
  }

  if (!session) return null;

  const userName = session.user.name || "ChainLab Student";
  const userEmail = session.user.email || "No email available";

  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: dashboardStyles }} />

      <main
        id="chainlab-dashboard"
        className={theme === "dark" ? "dashboard-dark" : ""}
      >
        <aside className="cl-sidebar">
          <Link href="/" className="cl-logo">
            CHAINLAB
          </Link>

          <nav className="cl-nav" aria-label="Dashboard navigation">
            <Link href="/dashboard" className="cl-nav-link active">Dashboard</Link>
            <Link href="/learn" className="cl-nav-link">Learn</Link>
            <Link href="/learn/blockchain" className="cl-nav-link">Blockchain</Link>
            <Link href="/learn/solana" className="cl-nav-link">Solana</Link>
            <Link href="/learn/meme-coins" className="cl-nav-link">Meme Coins</Link>
            <Link href="/learn/security" className="cl-nav-link">Security</Link>
            <Link href="/achievements" className="cl-nav-link">Achievements</Link>
            <Link href="#profile" className="cl-nav-link">Profile</Link>
            <Link href="#settings" className="cl-nav-link">Settings</Link>
          </nav>

          <div className="cl-sidebar-bottom">
            <button type="button" className="cl-signout" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </aside>

        <div className="cl-main">
          <header className="cl-topbar">
            <div className="cl-search">
              Search courses, topics or resources...
            </div>

            <div className="cl-top-actions">
              <div className="cl-theme-switch" aria-label="Theme">
                <button
                  type="button"
                  className={`cl-theme-button ${theme === "dark" ? "active" : ""}`}
                  onClick={() => setDashboardTheme("dark")}
                >
                  Dark
                </button>
                <button
                  type="button"
                  className={`cl-theme-button ${theme === "light" ? "active" : ""}`}
                  onClick={() => setDashboardTheme("light")}
                >
                  Light
                </button>
              </div>

              <div className="cl-user">
                <div className="cl-user-avatar">{initials}</div>
                <div className="cl-user-copy">
                  <strong>{userName}</strong>
                  <span>Active Student</span>
                </div>
              </div>
            </div>
          </header>

          <div className="cl-content">
            <section className="cl-hero">
              <div className="cl-hero-copy">
                <p className="cl-eyebrow">Your complete Web3 learning platform</p>
                <h1>
                  Discover. <span>Learn.</span> Build.
                </h1>
                <p>
                  Build practical blockchain knowledge, understand Web3 technologies,
                  and develop the skills to navigate the decentralized future.
                </p>
                <Link href="/learn" className="cl-primary">
                  Start Learning
                </Link>
              </div>

              <div className="cl-progress-card">
                <div className="cl-progress-label">Learning Progress</div>
                <div className="cl-progress-number">{percentage}%</div>
                <div className="cl-progress-track">
                  <span style={{ width: `${percentage}%` }} />
                </div>
                <p className="cl-progress-note">
                  {totalCompleted} of {totalSections} sections completed
                </p>
              </div>
            </section>

            <section className="cl-stats">
              <article className="cl-stat">
                <span className="cl-stat-label">Learning progress</span>
                <strong>{percentage}%</strong>
                <p>{totalCompleted} of {totalSections} sections</p>
              </article>

              <article className="cl-stat">
                <span className="cl-stat-label">Modules in progress</span>
                <strong>4</strong>
                <p>Web3 learning modules</p>
              </article>

              <article className="cl-stat">
                <span className="cl-stat-label">Badges earned</span>
                <strong>0</strong>
                <p>of 4 badges</p>
              </article>

              <article className="cl-stat">
                <span className="cl-stat-label">Learning streak</span>
                <strong>0 days</strong>
                <p>Keep learning to build your streak</p>
              </article>
            </section>

            <section className="cl-section">
              <div className="cl-section-heading">
                <div>
                  <h2>Learning Modules</h2>
                  <p>Choose a path and continue your Web3 education.</p>
                </div>
                <Link href="/learn" className="cl-view-all">View All</Link>
              </div>

              <div className="cl-modules">
                {modules.map((module) => {
                  const modulePercentage = Math.round(
                    (module.completed / module.total) * 100
                  );

                  return (
                    <article key={module.name} className={`cl-module cl-${module.accent}`}>
                      <strong className="cl-module-name">{module.name}</strong>

                      <p className="cl-module-description">
                        {module.description}
                      </p>

                      <div className="cl-module-meta">
                        <span>{module.completed} of {module.total} sections</span>
                        <span>{modulePercentage}%</span>
                      </div>

                      <div
                        className="cl-module-progress"
                        aria-label={`${modulePercentage}% complete`}
                      >
                        <span style={{ width: `${modulePercentage}%` }} />
                      </div>

                      <Link href={module.href} className="cl-module-link">
                        Continue Learning
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="cl-section">
              <div className="cl-section-heading">
                <div>
                  <h2>Achievements &amp; Badges</h2>
                  <p>Milestones you can unlock as you progress.</p>
                </div>
                <Link href="/achievements" className="cl-view-all">View All</Link>
              </div>

              <div className="cl-achievements">
                {achievements.map((achievement) => (
                  <article className="cl-achievement" key={achievement.number}>
                    <div className="cl-achievement-number">{achievement.number}</div>
                    <div>
                      <strong>{achievement.name}</strong>
                      <p>{achievement.description}</p>
                      <span className="cl-achievement-status">Not earned</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="cl-bottom-grid">
              <section className="cl-panel">
                <h3>Learning Overview</h3>
                <p className="cl-panel-subtitle">
                  Your current progress across the ChainLab curriculum.
                </p>

                {modules.map((module) => (
                  <div className="cl-row" key={module.name}>
                    <strong>{module.name}</strong>
                    <span>{module.completed} / {module.total} sections</span>
                  </div>
                ))}
              </section>

              <section className="cl-panel">
                <h3>Certificate</h3>
                <p className="cl-certificate-status">
                  Complete all 30 course sections to unlock your ChainLab
                  Certificate of Completion.
                </p>
                <Link href="/certificate" className="cl-certificate-link">
                  View Certificate
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
