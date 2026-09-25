"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { KeyboardEvent } from "react";

type Theme = "dark" | "light";

const FONT_SIZES = [0.9, 1.1, 1.3];

export default function ChainLabControls() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [fontIndex, setFontIndex] = useState(0);
  const [fontPanelOpen, setFontPanelOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState<
    { sender: "user" | "chainlab"; text: string }[]
  >([
    {
      sender: "chainlab",
      text: "Welcome to ChainLab. How can I help you explore Web3?",
    },
  ]);

  // Make the portal available after the component mounts.
  useEffect(() => {
    setPortalReady(true);
  }, []);

  // Load saved preferences.
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "chainlab-theme"
    ) as Theme | null;

    const savedFontIndex = localStorage.getItem(
      "chainlab-font-size"
    );

    const initialTheme: Theme =
      savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);

    document.documentElement.dataset.theme = initialTheme;
    document.body.dataset.theme = initialTheme;

    const parsedIndex =
      savedFontIndex !== null ? Number(savedFontIndex) : 0;

    const validFontIndex =
      Number.isInteger(parsedIndex) &&
      parsedIndex >= 0 &&
      parsedIndex < FONT_SIZES.length
        ? parsedIndex
        : 0;

    setFontIndex(validFontIndex);

    document.documentElement.style.setProperty(
      "--cl-font-scale",
      String(FONT_SIZES[validFontIndex])
    );
  }, []);

  // Toggle light and dark mode.
  function toggleTheme() {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    document.documentElement.dataset.theme = nextTheme;
    document.body.dataset.theme = nextTheme;

    localStorage.setItem("chainlab-theme", nextTheme);
  }

  // Change the global font size.
  function changeFontSize(index: number) {
    if (index < 0 || index >= FONT_SIZES.length) {
      return;
    }

    setFontIndex(index);

    document.documentElement.style.setProperty(
      "--cl-font-scale",
      String(FONT_SIZES[index])
    );

    localStorage.setItem(
      "chainlab-font-size",
      String(index)
    );
  }

  // Send a chat message.
  function sendMessage() {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setChatMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: trimmedMessage,
      },
      {
        sender: "chainlab",
        text:
          "Thanks for your question. ChainLab is currently focused on blockchain, Solana, meme coins, tokenomics, and Web3 security education.",
      },
    ]);

    setMessage("");
  }

  // Send messages when Enter is pressed.
  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* FONT SIZE AND THEME CONTROLS */}

      <div className="chainlab-tools">

        {/* FONT SIZE CONTROL */}

        <div className="font-control-wrapper">
          <button
            type="button"
            className="chainlab-tool-button chainlab-control-sparkle"
            onClick={() =>
              setFontPanelOpen((previous) => !previous)
            }
            aria-label="Font size controls"
            aria-expanded={fontPanelOpen}
            title="Font size"
          >
            Aa
          </button>

          {fontPanelOpen && (
            <div className="font-control-panel">
              <button
                type="button"
                onClick={() => changeFontSize(0)}
                className={fontIndex === 0 ? "active" : ""}
                aria-label="Decrease font size"
                aria-pressed={fontIndex === 0}
              >
                A−
              </button>

              <button
                type="button"
                onClick={() => changeFontSize(1)}
                className={fontIndex === 1 ? "active" : ""}
                aria-label="Reset font size"
                aria-pressed={fontIndex === 1}
              >
                A
              </button>

              <button
                type="button"
                onClick={() => changeFontSize(2)}
                className={fontIndex === 2 ? "active" : ""}
                aria-label="Increase font size"
                aria-pressed={fontIndex === 2}
              >
                A+
              </button>
            </div>
          )}
        </div>

        {/* LIGHT / DARK MODE BUTTON */}

        <button
          type="button"
          className="chainlab-theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          aria-pressed={theme === "light"}
        >
          {theme === "dark" ? (
            /* SUN ICON */

            <svg
              className="chainlab-theme-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M12 2V5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M12 19V22"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M2 12H5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M19 12H22"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M4.93 4.93L7.05 7.05"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M16.95 16.95L19.07 19.07"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M19.07 4.93L16.95 7.05"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M7.05 16.95L4.93 19.07"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* MOON ICON */

            <svg
              className="chainlab-theme-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5A8.5 8.5 0 1 0 20.5 15.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* FLOATING CHAT LAUNCHER AND CHAT WINDOW */}

      {portalReady &&
        createPortal(
          <>
            {/* FLOATING CHAT BUTTON */}

            <button
              type="button"
              className="chainlab-chat-launcher"
              onClick={() =>
                setChatOpen((previous) => !previous)
              }
              aria-label={
                chatOpen
                  ? "Close ChainLab chat"
                  : "Open ChainLab chat"
              }
              aria-expanded={chatOpen}
            >
              <span className="chainlab-chat-launcher-icon">
                {chatOpen ? "×" : "▢"}
              </span>

              <span>
                {chatOpen ? "CLOSE CHAT" : "CHAT"}
              </span>
            </button>

            {/* FLOATING CHAT WINDOW */}

            {chatOpen && (
              <aside
                className="chainlab-chatbox"
                aria-label="ChainLab assistant chat"
              >
                {/* CHAT HEADER */}

                <div className="chainlab-chat-header">
                  <div>
                    <span className="chainlab-chat-label">
                      [ CHAINLAB ASSISTANT ]
                    </span>

                    <h2>Web3 Chat</h2>
                  </div>

                  <button
                    type="button"
                    className="chainlab-chat-close"
                    onClick={() => setChatOpen(false)}
                    aria-label="Close chat"
                  >
                    ×
                  </button>
                </div>

                {/* CHAT MESSAGES */}

                <div
                  className="chainlab-chat-messages"
                  aria-live="polite"
                >
                  {chatMessages.map(
                    (chatMessage, index) => (
                      <div
                        key={`${chatMessage.sender}-${index}`}
                        className={`chainlab-message ${
                          chatMessage.sender === "user"
                            ? "user-message"
                            : "assistant-message"
                        }`}
                      >
                        {chatMessage.text}
                      </div>
                    )
                  )}
                </div>

                {/* QUICK QUESTIONS */}

                <div className="chainlab-chat-quick">
                  <button
                    type="button"
                    onClick={() =>
                      setMessage("What is blockchain?")
                    }
                  >
                    What is blockchain?
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setMessage("What is Solana?")
                    }
                  >
                    What is Solana?
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setMessage(
                        "How do I stay safe in Web3?"
                      )
                    }
                  >
                    Web3 security
                  </button>
                </div>

                {/* CHAT INPUT */}

                <form
                  className="chainlab-chat-input"
                  onSubmit={(event) => {
                    event.preventDefault();
                    sendMessage();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask something about Web3..."
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    aria-label="Ask a question about Web3"
                  />

                  <button
                    type="submit"
                    aria-label="Send message"
                  >
                    →
                  </button>
                </form>
              </aside>
            )}
          </>,
          document.body
        )}
    </>
  );
}