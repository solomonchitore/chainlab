"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button
        type="button"
        className={`mobile-menu-button ${
          isOpen ? "open" : ""
        }`}
        onClick={() =>
          setIsOpen((current) => !current)
        }
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU */}
      <div
        className={`mobile-navigation ${
          isOpen
            ? "mobile-navigation-open"
            : ""
        }`}
      >
        <div className="mobile-navigation-header">
          <Link
            href="/"
            className="mobile-navigation-brand"
            onClick={closeMenu}
          >
            [CHAINLAB]
          </Link>

          <button
            type="button"
            className="mobile-navigation-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-navigation-links">
          <Link
            href="/learn/blockchain"
            onClick={closeMenu}
          >
            <span>01</span>
            BLOCKCHAIN
          </Link>

          <Link
            href="/learn/solana"
            onClick={closeMenu}
          >
            <span>02</span>
            SOLANA
          </Link>

          <Link
            href="/learn/meme-coins"
            onClick={closeMenu}
          >
            <span>03</span>
            MEME COINS
          </Link>

          <Link
            href="/learn/security"
            onClick={closeMenu}
          >
            <span>04</span>
            SECURITY
          </Link>
        </nav>

        <Link
          href="/learn"
          className="mobile-navigation-start"
          onClick={closeMenu}
        >
          START LEARNING
          <span>→</span>
        </Link>
      </div>
    </>
  );
}