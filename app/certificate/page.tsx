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

  useEffect(() => {
    const check = () => {
      setComplete(isCourseComplete(readCourseProgress()));
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
      <main className="certificate-locked">
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
    <main className="certificate-page">
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

      <section className="chainlab-certificate" aria-label="ChainLab Certificate of Completion">
        <div className="certificate-top">
          <p className="small-label">[CHAINLAB]</p>
          <p className="small-label">CERTIFICATE OF COMPLETION</p>
        </div>

        <div className="certificate-main">
          <p className="certificate-kicker">THIS CERTIFICATE RECOGNIZES</p>

          <h1>
            CHAINLAB
            <br />
            <span>GRADUATE.</span>
          </h1>

          <p className="description">
            This certificate recognizes the successful completion of the
            ChainLab Web3 learning program consisting of 30 course sections
            across Blockchain, Solana, Meme Coins, and Security.
          </p>

          <div className="module-grid">
            {MODULES.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
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
          </div>
        </div>

        <div className="certificate-footer">
          <div>
            <strong>CHAINLAB</strong>
            <small>Web3 Learning Platform</small>
          </div>

          <div>
            <strong>30 / 30</strong>
            <small>SECTIONS COMPLETED</small>
          </div>
        </div>
      </section>

      <p className="download-note">
        Use the print dialog and select <strong>Save as PDF</strong> to save
        your certificate to your device.
      </p>

      <style jsx global>{`
        .certificate-page {
          min-height: 100vh;
          padding: 50px 24px;
          background: #e9e9e2;
          color: #111;
          font-family: Arial, sans-serif;
        }

        .certificate-actions {
          max-width: 1100px;
          margin: 0 auto 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .back-link {
          color: #111;
          text-decoration: none;
          font-weight: 700;
        }

        .download-button {
          border: 1px solid #111;
          background: #111;
          color: #fff;
          padding: 13px 18px;
          cursor: pointer;
          font-weight: 700;
        }

        .download-button:hover {
          background: #333;
        }

        .chainlab-certificate {
          max-width: 1100px;
          min-height: 680px;
          margin: auto;
          padding: 60px 70px;
          background: #fff;
          border: 2px solid #111;
          box-shadow: 12px 12px 0 #111;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .certificate-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .small-label {
          letter-spacing: 0.2em;
          font-size: 12px;
          font-weight: 700;
          margin: 0;
        }

        .certificate-main {
          text-align: center;
        }

        .certificate-kicker {
          letter-spacing: 0.16em;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .chainlab-certificate h1 {
          font-size: clamp(42px, 7vw, 86px);
          line-height: 0.95;
          margin: 20px 0 30px;
        }

        .chainlab-certificate h1 span {
          font-weight: 400;
        }

        .description {
          max-width: 700px;
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.7;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 45px auto;
          max-width: 850px;
          border: 1px solid #111;
        }

        .module-grid div {
          padding: 22px 10px;
          border-right: 1px solid #111;
        }

        .module-grid div:last-child {
          border-right: 0;
        }

        .module-grid strong,
        .module-grid span,
        .certificate-footer small {
          display: block;
        }

        .module-grid span {
          margin-top: 8px;
        }

        .certificate-meta {
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .certificate-meta div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .certificate-meta small {
          font-size: 10px;
          letter-spacing: 0.12em;
          font-weight: 700;
        }

        .certificate-meta strong {
          font-size: 14px;
        }

        .certificate-footer {
          display: flex;
          justify-content: space-between;
          text-align: left;
          margin-top: 55px;
        }

        .certificate-footer > div:last-child {
          text-align: right;
        }

        .certificate-footer small {
          margin-top: 5px;
        }

        .download-note {
          max-width: 1100px;
          margin: 24px auto 0;
          text-align: center;
          font-size: 13px;
        }

        .certificate-locked {
          min-height: 100vh;
          padding: 80px 24px;
          background: #f5f5f0;
          color: #111;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .certificate-locked h1 {
          font-size: clamp(42px, 8vw, 82px);
          margin: 20px 0;
        }

        .locked-label {
          letter-spacing: 0.18em;
          font-weight: 700;
          font-size: 12px;
        }

        .locked-button {
          display: inline-block;
          margin-top: 28px;
          padding: 16px 22px;
          background: #111;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
        }

        @media (max-width: 700px) {
          .certificate-page {
            padding: 25px 14px;
          }

          .certificate-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .back-link {
            text-align: center;
          }

          .chainlab-certificate {
            min-height: auto;
            padding: 35px 20px;
            box-shadow: 6px 6px 0 #111;
          }

          .certificate-top {
            flex-direction: column;
            text-align: center;
          }

          .module-grid {
            grid-template-columns: 1fr 1fr;
          }

          .module-grid div:nth-child(2) {
            border-right: 0;
          }

          .module-grid div:nth-child(-n + 2) {
            border-bottom: 1px solid #111;
          }

          .certificate-footer {
            gap: 30px;
          }

          .certificate-meta {
            gap: 25px;
          }
        }

        @media print {
          .certificate-page {
            min-height: auto;
            padding: 0;
            background: #fff !important;
          }

          .certificate-actions,
          .download-note {
            display: none !important;
          }

          .chainlab-certificate {
            max-width: none;
            min-height: auto;
            box-shadow: none;
            border: 2px solid #111;
            margin: 0;
            padding: 45px;
          }

          @page {
            size: landscape;
            margin: 0.4in;
          }
        }
      `}</style>
    </main>
  );
}
