"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { isCourseComplete, readCourseProgress } from "@/lib/course-progress";

const MODULES = [
  ["BLOCKCHAIN", "8 / 8"],
  ["SOLANA", "8 / 8"],
  ["MEME COINS", "7 / 7"],
  ["SECURITY", "7 / 7"],
] as const;

function getCertificateId() {
  if (typeof window === "undefined") return "CL-PENDING";

  const key = "chainlab-certificate-id";
  const existing = localStorage.getItem(key);

  if (existing) return existing;

  const id = `CL-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;

  localStorage.setItem(key, id);
  return id;
}

function getCompletionDate() {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

export default function CertificatePage() {
  const [ready, setReady] = useState(false);
  const [complete, setComplete] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const readTheme = () => {
      const saved = localStorage.getItem("chainlab-theme");
      const htmlTheme = document.documentElement.dataset.theme;
      const bodyTheme = document.body.dataset.theme;

      if (saved === "light" || htmlTheme === "light" || bodyTheme === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    window.addEventListener("storage", readTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", readTheme);
    };
  }, []);

  useEffect(() => {
    const check = () => {
      // DESIGN PREVIEW:
      // Set SHOW_CERTIFICATE_NOW to false when you want the normal 30/30 lock
      // to be enforced again.
      const SHOW_CERTIFICATE_NOW = true;

      setComplete(
        SHOW_CERTIFICATE_NOW
          ? true
          : isCourseComplete(readCourseProgress())
      );
      setReady(true);
    };

    check();

    window.addEventListener("storage", check);
    window.addEventListener("chainlab-course-progress", check);

    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("chainlab-course-progress", check);
    };
  }, []);

  const certificateId = useMemo(
    () => (complete ? getCertificateId() : "CL-PENDING"),
    [complete]
  );

  const completionDate = useMemo(
    () => (complete ? getCompletionDate() : ""),
    [complete]
  );

  const downloadCertificate = () => {
    window.print();
  };

  if (!ready) {
    return <main style={{ padding: 40 }}>Loading certificate...</main>;
  }

  if (!complete) {
    return (
      <main className={`certificate-locked certificate-theme-${theme}`}>
        <p className="locked-label">CHAINLAB / GRADUATION</p>
        <h1>NOT YET UNLOCKED.</h1>
        <p>
          Complete all 30 ChainLab course sections before accessing your
          certificate.
        </p>

        <Link href="/achievements" className="locked-button">
          VIEW PROGRESS →
        </Link>
      </main>
    );
  }

  return (
    <main className={`certificate-page certificate-theme-${theme}`}>
      <div className="certificate-actions">
        <Link href="/achievements" className="back-link">
          ← ACHIEVEMENTS
        </Link>

        <button
          type="button"
          onClick={downloadCertificate}
          className="download-button"
        >
          DOWNLOAD CERTIFICATE / PDF
        </button>
      </div>

      <section
        className="chainlab-certificate"
        aria-label="ChainLab Certificate of Completion"
      >
        <div className="certificate-accent certificate-accent-left" />
        <div className="certificate-accent certificate-accent-right" />

        <div className="certificate-top">
          <div className="brand-lockup">
            <span className="brand-mark">CL</span>
            <div>
              <p className="small-label">CHAINLAB</p>
              <span>WEB3 EDUCATION PLATFORM</span>
            </div>
          </div>

          <div className="certificate-type">
            <div className="certificate-seal" aria-hidden="true">
              <span>★</span>
            </div>
            <p className="small-label">CERTIFICATE</p>
            <span>OF COMPLETION</span>
          </div>
        </div>

        <div className="certificate-main">
          <p className="certificate-kicker">THIS CERTIFICATE CERTIFIES THAT</p>

          <h1>
            SOLOMON CHITORE
          </h1>

          <div className="certificate-rule" />

          <p className="certificate-statement">
            This certificate is awarded in recognition of the successful
            completion of the ChainLab Web3 learning program. The recipient
            has completed all required learning sections and demonstrated
            sustained engagement across the program&apos;s core areas of
            blockchain technology, Solana, meme coins, and Web3 security.
          </p>

          <p className="certificate-substatement">
            The program provides a structured foundation for understanding
            decentralized technologies, digital assets, blockchain ecosystems,
            token concepts, and practical Web3 security principles.
          </p>

          <div className="program-overview">
            <div className="overview-heading">
              <span>PROGRAM COMPLETION</span>
              <strong>30 / 30 SECTIONS</strong>
            </div>

            <div className="module-grid">
              {MODULES.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="learning-summary">
            <div>
              <span className="summary-icon">◇</span>
              <strong>BLOCKCHAIN</strong>
              <span className="summary-progress">8 / 8</span>
              <p>Learn the fundamentals of blockchain technology, how it works, and real-world applications.</p>
            </div>

            <div>
              <span className="summary-icon">◆</span>
              <strong>SOLANA</strong>
              <span className="summary-progress">8 / 8</span>
              <p>Explore the Solana ecosystem, development tools, transactions, accounts, and programs.</p>
            </div>

            <div>
              <span className="summary-icon">●</span>
              <strong>MEME COINS</strong>
              <span className="summary-progress">7 / 7</span>
              <p>Understand meme coins, tokenomics, liquidity, distribution, and community ecosystems.</p>
            </div>

            <div>
              <span className="summary-icon">◆</span>
              <strong>SECURITY</strong>
              <span className="summary-progress">7 / 7</span>
              <p>Learn Web3 security practices, wallet safety, scams, and smart-contract risks.</p>
            </div>
          </div>

          <div className="certificate-meta">
            <div>
              <small>COMPLETION DATE</small>
              <strong>{completionDate}</strong>
            </div>

            <div>
              <small>CERTIFICATE ID</small>
              <strong>{certificateId}</strong>
            </div>

            <div>
              <small>PROGRAM STATUS</small>
              <strong>COMPLETED</strong>
            </div>
          </div>
        </div>

        <div className="certificate-footer">
          <div>
            <strong>CHAINLAB</strong>
            <small>Learn. Understand. Build responsibly.</small>
          </div>

          <div className="footer-center">
            <span>30 / 30</span>
            <small>LEARNING SECTIONS COMPLETED</small>
          </div>

          <div className="footer-right">
            <strong>ISSUED</strong>
            <small>{completionDate}</small>
          </div>
        </div>
      </section>

      <p className="download-note">
        Your certificate is generated from your ChainLab course completion
        record. Select <strong>Save as PDF</strong> in the print dialog to
        keep a digital copy.
      </p>

      <style jsx global>{`
        /* =========================================================
           CHAINLAB CERTIFICATE — SAMPLE MATCH
           Centered premium certificate / pure black dark mode
        ========================================================= */

        .certificate-page,
        .certificate-locked {
          min-height: 100vh !important;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "SF Pro Display",
            "SF Pro Text",
            "Helvetica Neue",
            Inter,
            Arial,
            sans-serif !important;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .certificate-page {
          padding: 48px 24px 60px !important;
          background: #ffffff !important;
          color: #000000 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          transition: background .2s ease, color .2s ease;
        }

        .certificate-actions {
          width: min(1080px, calc(100% - 20px));
          margin: 0 auto 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .certificate-page .back-link {
          color: #000000 !important;
          text-decoration: none;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: .08em;
        }

        .certificate-page .download-button {
          border: 1px solid #000000 !important;
          background: #000000 !important;
          color: #ffffff !important;
          padding: 12px 17px;
          cursor: pointer;
          font-weight: 800;
          font-family: inherit;
          border-radius: 8px;
          letter-spacing: .03em;
          font-size: 11px;
          transition: transform .18s ease, opacity .18s ease;
        }

        .certificate-page .download-button:hover {
          transform: translateY(-1px);
          opacity: .88;
        }

        /* Main centered certificate */
        .chainlab-certificate {
          position: relative;
          overflow: hidden;
          width: min(1080px, calc(100% - 20px)) !important;
          max-width: 1080px;
          min-height: 680px;
          margin: 0 auto !important;
          padding: 34px 48px 28px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,.035), transparent 42%),
            #05090c !important;
          color: #ffffff !important;
          border: 1px solid rgba(222, 187, 112, .9) !important;
          border-radius: 16px;
          box-shadow:
            0 28px 70px rgba(0,0,0,.28),
            0 0 0 1px rgba(255,255,255,.04) inset;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .chainlab-certificate::before,
        .chainlab-certificate::after {
          content: "";
          position: absolute;
          width: 430px;
          height: 170px;
          border-top: 1px solid rgba(224,188,111,.35);
          border-radius: 50%;
          pointer-events: none;
        }

        .chainlab-certificate::before {
          left: -150px;
          top: 120px;
          transform: rotate(13deg);
          box-shadow:
            0 16px 0 rgba(224,188,111,.13),
            0 32px 0 rgba(224,188,111,.09),
            0 48px 0 rgba(224,188,111,.06),
            0 64px 0 rgba(224,188,111,.04);
        }

        .chainlab-certificate::after {
          right: -150px;
          bottom: 90px;
          transform: rotate(-13deg);
          box-shadow:
            0 16px 0 rgba(224,188,111,.13),
            0 32px 0 rgba(224,188,111,.09),
            0 48px 0 rgba(224,188,111,.06),
            0 64px 0 rgba(224,188,111,.04);
        }

        .certificate-accent {
          position: absolute;
          width: 110px;
          height: 110px;
          border: 1px solid rgba(224,188,111,.32);
          pointer-events: none;
          transform: rotate(45deg);
        }

        .certificate-accent-left {
          left: -72px;
          top: -72px;
        }

        .certificate-accent-right {
          right: -72px;
          bottom: -72px;
        }

        .certificate-top {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          border-bottom: 1px solid rgba(255,255,255,.12);
          padding-bottom: 17px;
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 2px solid #e0bc70;
          color: #e0bc70 !important;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: -.04em;
          border-radius: 10px;
          transform: rotate(30deg);
        }

        .brand-mark::first-letter {
          transform: rotate(-30deg);
        }

        .brand-lockup .small-label,
        .certificate-type .small-label {
          margin: 0;
        }

        .brand-lockup .small-label {
          color: #ffffff !important;
          font-size: 18px;
          letter-spacing: .04em;
        }

        .brand-lockup > div > span,
        .certificate-type > span {
          display: block;
          margin-top: 3px;
          font-size: 8px;
          letter-spacing: .16em;
          font-weight: 700;
          color: rgba(255,255,255,.65) !important;
        }

        .small-label {
          color: #ffffff !important;
          letter-spacing: .16em;
          font-size: 10px;
          font-weight: 900;
        }

        .certificate-type {
          text-align: right;
          position: relative;
          padding-right: 56px;
        }

        .certificate-type .small-label {
          color: #ffffff !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          letter-spacing: .02em;
          font-weight: 500;
        }

        .certificate-seal {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border: 3px solid #e0bc70;
          border-radius: 50%;
          color: #e0bc70;
          box-shadow: 0 0 0 4px rgba(224,188,111,.12);
          font-size: 18px;
        }

        .certificate-main {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 970px;
          width: 100%;
          margin: 26px auto 0;
        }

        .certificate-kicker {
          color: rgba(255,255,255,.85) !important;
          letter-spacing: .16em;
          font-size: 10px;
          font-weight: 800;
          margin: 0 0 12px;
        }

        .chainlab-certificate h1 {
          color: #e6c67d !important;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 6vw, 68px);
          line-height: .98;
          margin: 0 0 16px;
          font-weight: 500;
          letter-spacing: .025em;
        }

        .chainlab-certificate h1 span {
          color: #e6c67d !important;
          font-weight: 500;
        }

        .certificate-rule {
          width: 70px;
          height: 2px;
          margin: 0 auto 15px;
          background: #e0bc70;
        }

        .certificate-statement {
          max-width: 780px;
          margin: 0 auto;
          color: rgba(255,255,255,.9) !important;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 400;
        }

        .certificate-substatement {
          max-width: 710px;
          margin: 7px auto 0;
          color: rgba(255,255,255,.55) !important;
          font-size: 11px;
          line-height: 1.5;
        }

        .program-overview {
          max-width: 930px;
          margin: 22px auto 0;
          background: rgba(4,8,11,.72);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 12px;
          overflow: hidden;
        }

        .overview-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 11px 14px 9px;
          border-bottom: 2px solid #e0bc70;
          text-align: left;
        }

        .overview-heading span,
        .overview-heading strong {
          color: #ffffff !important;
          font-size: 10px;
          letter-spacing: .12em;
          font-weight: 900;
        }

        .overview-heading strong {
          color: #e0bc70 !important;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .module-grid div {
          padding: 12px 14px;
          border-right: 1px solid rgba(255,255,255,.12);
          color: #ffffff !important;
          text-align: left;
        }

        .module-grid div:last-child {
          border-right: 0;
        }

        .module-grid strong {
          display: block;
          color: #ffffff !important;
          font-size: 9px;
          letter-spacing: .07em;
          font-weight: 900;
        }

        .module-grid span {
          display: block;
          margin-top: 5px;
          color: #e0bc70 !important;
          font-size: 12px;
          font-weight: 800;
        }

        .learning-summary {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          max-width: 930px;
          margin: 18px auto 0;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }

        .learning-summary > div {
          border-left: 1px solid rgba(255,255,255,.16);
          padding: 0 14px 12px;
        }

        .learning-summary > div:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .learning-summary > div:last-child {
          padding-right: 0;
        }

        .summary-icon {
          display: inline-grid;
          place-items: center;
          width: 22px;
          height: 22px;
          border-radius: 7px;
          border: 1px solid rgba(224,188,111,.7);
          color: #e0bc70 !important;
          font-size: 12px;
          margin-bottom: 6px;
        }

        .learning-summary strong {
          display: block;
          color: #ffffff !important;
          font-size: 9px;
          line-height: 1.3;
          letter-spacing: .06em;
          font-weight: 900;
        }

        .summary-progress {
          display: block;
          color: #e0bc70 !important;
          font-size: 10px;
          font-weight: 800;
          margin-top: 3px;
        }

        .learning-summary p {
          color: rgba(255,255,255,.62) !important;
          font-size: 9px;
          line-height: 1.45;
          margin: 5px 0 0;
        }

        .certificate-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 0;
        }

        .certificate-meta div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .certificate-meta small {
          color: rgba(255,255,255,.52) !important;
          font-size: 8px;
          letter-spacing: .13em;
          font-weight: 900;
        }

        .certificate-meta strong {
          color: #ffffff !important;
          font-size: 11px;
          font-weight: 800;
          word-break: break-word;
        }

        .certificate-meta div:nth-child(3) strong {
          color: #7ee2a8 !important;
        }

        .certificate-footer {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: end;
          gap: 20px;
          margin-top: 18px;
          padding-top: 13px;
          border-top: 1px solid rgba(255,255,255,.12);
          text-align: left;
        }

        .certificate-footer strong {
          display: block;
          color: #ffffff !important;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .05em;
        }

        .certificate-footer small {
          display: block;
          margin-top: 3px;
          color: rgba(255,255,255,.5) !important;
          font-size: 8px;
          letter-spacing: .05em;
        }

        .footer-center {
          text-align: center;
        }

        .footer-center span {
          display: block;
          color: #e0bc70 !important;
          font-size: 17px;
          font-weight: 900;
        }

        .footer-right {
          text-align: right;
        }

        .download-note {
          width: min(1080px, calc(100% - 20px));
          margin: 17px auto 0;
          text-align: center;
          font-size: 11px;
          line-height: 1.55;
          color: #000000 !important;
          opacity: .65;
        }

        /* LIGHT MODE */
        .certificate-page.certificate-theme-light {
          background: #ffffff !important;
          color: #000000 !important;
        }

        .certificate-theme-light .chainlab-certificate {
          background: #ffffff !important;
          color: #000000 !important;
          border-color: #b8944c !important;
          box-shadow:
            0 22px 55px rgba(0,0,0,.12),
            0 0 0 1px rgba(184,148,76,.12) inset;
        }

        .certificate-theme-light .certificate-top,
        .certificate-theme-light .certificate-footer {
          border-color: rgba(0,0,0,.13) !important;
        }

        .certificate-theme-light .brand-mark,
        .certificate-theme-light .certificate-seal {
          color: #9a752f !important;
          border-color: #b8944c !important;
        }

        .certificate-theme-light .brand-lockup .small-label,
        .certificate-theme-light .certificate-type .small-label,
        .certificate-theme-light .certificate-type > span,
        .certificate-theme-light .certificate-kicker,
        .certificate-theme-light .certificate-statement,
        .certificate-theme-light .certificate-substatement,
        .certificate-theme-light .module-grid strong,
        .certificate-theme-light .learning-summary strong,
        .certificate-theme-light .learning-summary p,
        .certificate-theme-light .certificate-meta strong,
        .certificate-theme-light .certificate-footer strong {
          color: #000000 !important;
        }

        .certificate-theme-light .brand-lockup > div > span,
        .certificate-theme-light .certificate-type > span,
        .certificate-theme-light .certificate-substatement,
        .certificate-theme-light .learning-summary p,
        .certificate-theme-light .certificate-meta small,
        .certificate-theme-light .certificate-footer small {
          color: #000000 !important;
          opacity: .58;
        }

        .certificate-theme-light .chainlab-certificate h1 {
          color: #8e6826 !important;
        }

        .certificate-theme-light .certificate-rule,
        .certificate-theme-light .overview-heading {
          border-color: #b8944c !important;
        }

        .certificate-theme-light .certificate-rule {
          background: #b8944c !important;
        }

        .certificate-theme-light .program-overview {
          background: #f7f4ed !important;
          border-color: rgba(0,0,0,.12) !important;
        }

        .certificate-theme-light .overview-heading span {
          color: #000000 !important;
        }

        .certificate-theme-light .overview-heading strong,
        .certificate-theme-light .module-grid span,
        .certificate-theme-light .summary-icon,
        .certificate-theme-light .summary-progress,
        .certificate-theme-light .footer-center span {
          color: #8e6826 !important;
        }

        .certificate-theme-light .module-grid div {
          color: #000000 !important;
          border-color: rgba(0,0,0,.12) !important;
        }

        .certificate-theme-light .learning-summary {
          border-color: rgba(0,0,0,.13) !important;
        }

        .certificate-theme-light .learning-summary > div {
          border-color: rgba(0,0,0,.14) !important;
        }

        .certificate-theme-light .certificate-meta div:nth-child(3) strong {
          color: #18834b !important;
        }

        .certificate-theme-light .download-note,
        .certificate-theme-light .back-link {
          color: #000000 !important;
        }

        /* DARK MODE */
        .certificate-page.certificate-theme-dark,
        .certificate-locked.certificate-theme-dark {
          background: #000000 !important;
          color: #ffffff !important;
        }

        .certificate-theme-dark .download-button {
          background: #ffffff !important;
          color: #000000 !important;
          border-color: #ffffff !important;
        }

        /* LOCKED STATE */
        .certificate-locked {
          min-height: 100vh !important;
          padding: 60px 24px !important;
          background: #ffffff !important;
          color: #000000 !important;
          text-align: center;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          box-sizing: border-box;
        }

        .certificate-locked > * {
          max-width: 900px;
        }

        .certificate-locked h1 {
          color: #000000 !important;
          font-size: clamp(42px, 8vw, 82px);
          margin: 20px 0;
          font-weight: 850;
          letter-spacing: -.055em;
        }

        .certificate-locked .locked-label,
        .certificate-locked > p:not(.locked-label) {
          color: #000000 !important;
        }

        .locked-button {
          display: inline-block;
          margin-top: 28px;
          padding: 14px 22px;
          background: #000000 !important;
          color: #ffffff !important;
          text-decoration: none;
          font-weight: 800;
          border-radius: 8px;
        }

        .certificate-locked.certificate-theme-dark .locked-label,
        .certificate-locked.certificate-theme-dark h1,
        .certificate-locked.certificate-theme-dark > p:not(.locked-label) {
          color: #ffffff !important;
        }

        .certificate-locked.certificate-theme-dark .locked-button {
          background: #ffffff !important;
          color: #000000 !important;
        }

        @media (max-width: 850px) {
          .chainlab-certificate {
            padding: 30px 28px 24px;
          }

          .learning-summary {
            grid-template-columns: 1fr 1fr;
            gap: 14px 0;
          }

          .learning-summary > div:nth-child(3) {
            border-left: 0;
            padding-left: 0;
          }
        }

        @media (max-width: 700px) {
          .certificate-page {
            padding: 24px 10px 35px !important;
          }

          .certificate-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .certificate-page .back-link {
            text-align: center;
          }

          .chainlab-certificate {
            width: 100% !important;
            min-height: auto;
            padding: 26px 18px 22px;
            border-radius: 12px;
          }

          .certificate-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .certificate-type {
            text-align: center;
          }

          .module-grid,
          .learning-summary {
            grid-template-columns: 1fr;
          }

          .module-grid div {
            border-right: 0 !important;
            border-bottom: 1px solid rgba(255,255,255,.12);
          }

          .certificate-theme-light .module-grid div {
            border-bottom-color: rgba(0,0,0,.12);
          }

          .module-grid div:last-child {
            border-bottom: 0;
          }

          .learning-summary > div,
          .learning-summary > div:nth-child(3) {
            border-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,.14);
            padding: 12px 0 0 !important;
          }

          .certificate-theme-light .learning-summary > div {
            border-top-color: rgba(0,0,0,.14);
          }

          .learning-summary > div:first-child {
            border-top: 0 !important;
            padding-top: 0 !important;
          }

          .certificate-meta {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .certificate-footer {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-center,
          .footer-right {
            text-align: center;
          }
        }

        @media print {
          .certificate-page {
            min-height: auto !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #111111 !important;
          }

          .certificate-actions,
          .download-note {
            display: none !important;
          }

          .chainlab-certificate,
          .certificate-theme-dark .chainlab-certificate {
            width: 100% !important;
            max-width: none !important;
            min-height: auto !important;
            box-shadow: none !important;
            border: 2px solid #111111 !important;
            background: #ffffff !important;
            color: #111111 !important;
            margin: 0 !important;
            padding: 38px !important;
          }

          .chainlab-certificate * {
            color: #111111 !important;
            border-color: #111111 !important;
          }

          .certificate-rule {
            background: #111111 !important;
          }

          .certificate-theme-dark .certificate-seal {
            border-color: #111111 !important;
          }

          @page {
            size: landscape;
            margin: .35in;
          }
        }
      `}</style>

    </main>
  );
}
