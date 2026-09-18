"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const FONT_SIZES = [0.9, 1, 1.12];

export default function ChainLabControls() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [fontIndex, setFontIndex] = useState(1);
  const [fontPanelOpen, setFontPanelOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<
    { sender: "user" | "chainlab"; text: string }[]
  >([
    {
      sender: "chainlab",
      text: "Welcome to ChainLab. How can I help you explore Web3?",
    },
  ]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "chainlab-theme"
    ) as Theme | null;

    const savedFontIndex = localStorage.getItem(
      "chainlab-font-size"
    );

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }

    if (savedFontIndex !== null) {
      const parsedIndex = Number(savedFontIndex);

      if (
        Number.isInteger(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < FONT_SIZES.length
      ) {
        setFontIndex(parsedIndex);
        document.documentElement.style.setProperty(
          "--cl-font-scale",
          String(FONT_SIZES[parsedIndex])
        );
      }
    } else {
      document.documentElement.style.setProperty(
        "--cl-font-scale",
        "1"
      );
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    document.documentElement.dataset.theme = nextTheme;

    localStorage.setItem("chainlab-theme", nextTheme);
  }

  function changeFontSize(index: number) {
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

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <>
      {/* ==============================
          CHAINLAB ACCESSIBILITY TOOLS
      =============================== */}
      <div className="chainlab-tools">
        {/* FONT SIZE */}
        <div className="font-control-wrapper">
          {fontPanelOpen && (
            <div className="font-control-panel">
              <button
                type="button"
                onClick={() => changeFontSize(0)}
                className={fontIndex === 0 ? "active" : ""}
                aria-label="Decrease font size"
              >
                A−
              </button>

              <button
                type="button"
                onClick={() => changeFontSize(1)}
                className={fontIndex === 1 ? "active" : ""}
                aria-label="Reset font size"
              >
                A
              </button>

              <button
                type="button"
                onClick={() => changeFontSize(2)}
                className={fontIndex === 2 ? "active" : ""}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>
          )}

          <button
            type="button"
            className="chainlab-tool-button"
            onClick={() =>
              setFontPanelOpen(!fontPanelOpen)
            }
            aria-label="Font size controls"
            aria-expanded={fontPanelOpen}
          >
            Aa
          </button>
        </div>

        {/* LIGHT / DARK MODE */}
        <button
          type="button"
          className="chainlab-tool-button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>

        {/* CHAT */}
        <button
          type="button"
          className="chainlab-chat-button"
          onClick={() => setChatOpen(true)}
        >
          CHAT
        </button>
      </div>

      {/* ==============================
          CHATBOX
      =============================== */}
      {chatOpen && (
        <div className="chainlab-chat-overlay">
          <aside className="chainlab-chatbox">
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

            <div className="chainlab-chat-messages">
              {chatMessages.map((chatMessage, index) => (
                <div
                  key={`${chatMessage.sender}-${index}`}
                  className={`chainlab-message ${
                    chatMessage.sender === "user"
                      ? "user-message"
                      : "chainlab-message"
                  }`}
                >
                  {chatMessage.text}
                </div>
              ))}
            </div>

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
                  setMessage("How do I stay safe in Web3?")
                }
              >
                Web3 security
              </button>
            </div>

            <div className="chainlab-chat-input">
              <input
                type="text"
                placeholder="Ask something about Web3..."
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
              />

              <button
                type="button"
                onClick={sendMessage}
                aria-label="Send message"
              >
                →
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}