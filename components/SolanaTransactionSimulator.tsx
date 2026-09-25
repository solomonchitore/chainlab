

import { type CSSProperties, useMemo, useState } from "react";

type SimulationStatus =
  | "idle"
  | "creating"
  | "signing"
  | "broadcasting"
  | "executing"
  | "confirming"
  | "success"
  | "error";

const BASE_FEE_LAMPORTS_PER_SIGNATURE = 5_000;

const stageData = [
  {
    key: "creating",
    number: "01",
    title: "CREATE",
    description: "Build the transaction message with the sender, recipient and transfer instruction.",
  },
  {
    key: "signing",
    number: "02",
    title: "SIGN",
    description: "The simulated wallet authorizes the prepared transaction.",
  },
  {
    key: "broadcasting",
    number: "03",
    title: "BROADCAST",
    description: "The signed transaction is sent to an RPC endpoint.",
  },
  {
    key: "executing",
    number: "04",
    title: "EXECUTE",
    description: "The simulated validator checks the transaction and runs its instruction.",
  },
  {
    key: "confirming",
    number: "05",
    title: "CONFIRM",
    description: "The transaction is treated as committed in this educational simulation.",
  },
] as const;

function createFakeSignature() {
  const alphabet =
    "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

  let value = "";

  for (let index = 0; index < 64; index += 1) {
    value += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return value;
}

function createFakeBlockhash() {
  return createFakeSignature().slice(0, 44);
}

export default function SolanaTransactionSimulator() {
  const [senderBalance, setSenderBalance] = useState(1);
  const [recipientBalance, setRecipientBalance] = useState(0.25);
  const [amount, setAmount] = useState(0.1);
  const [priorityFee, setPriorityFee] = useState(0);
  const [computeLimit, setComputeLimit] = useState(200_000);
  const [status, setStatus] =
    useState<SimulationStatus>("idle");
  const [completedStage, setCompletedStage] = useState(0);
  const [signature, setSignature] = useState("");
  const [blockhash, setBlockhash] = useState("");
  const [error, setError] = useState("");

  const baseFeeLamports =
    BASE_FEE_LAMPORTS_PER_SIGNATURE;

  const priorityFeeLamports = Math.ceil(
    (priorityFee * computeLimit) / 1_000_000
  );

  const totalFeeLamports =
    baseFeeLamports + priorityFeeLamports;

  const totalFeeSol = totalFeeLamports / 1_000_000_000;

  const senderAfter =
    senderBalance - amount - totalFeeSol;

  const recipientAfter =
    recipientBalance + amount;

  const isRunning =
    status === "creating" ||
    status === "signing" ||
    status === "broadcasting" ||
    status === "executing" ||
    status === "confirming";

  const canSimulate =
    amount > 0 &&
    amount <= 1000 &&
    Number.isFinite(amount) &&
    Number.isFinite(senderBalance) &&
    Number.isFinite(recipientBalance) &&
    Number.isFinite(priorityFee) &&
    Number.isFinite(computeLimit) &&
    senderAfter >= 0 &&
    computeLimit > 0;

  const statusLabel = useMemo(() => {
    switch (status) {
      case "creating":
        return "CREATING TRANSACTION";
      case "signing":
        return "SIGNING";
      case "broadcasting":
        return "SENDING TO RPC";
      case "executing":
        return "VALIDATING & EXECUTING";
      case "confirming":
        return "CONFIRMING";
      case "success":
        return "SIMULATION COMPLETE";
      case "error":
        return "SIMULATION FAILED";
      default:
        return "READY TO SIMULATE";
    }
  }, [status]);

  async function runSimulation() {
    if (isRunning) {
      return;
    }

    if (!canSimulate) {
      setError(
        "Enter a valid transfer amount and make sure the sender has enough SOL to cover the transfer and fee."
      );
      setStatus("error");
      return;
    }

    setError("");
    setSignature("");
    setBlockhash("");
    setCompletedStage(0);

    try {
      setStatus("creating");
      setCompletedStage(1);
      await wait(850);

      setBlockhash(createFakeBlockhash());

      setStatus("signing");
      setCompletedStage(2);
      await wait(850);

      setSignature(createFakeSignature());

      setStatus("broadcasting");
      setCompletedStage(3);
      await wait(900);

      setStatus("executing");
      setCompletedStage(4);
      await wait(1000);

      setStatus("confirming");
      setCompletedStage(5);
      await wait(900);

      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "The educational simulation could not complete. Try again."
      );
    }
  }

  function resetSimulation() {
    setStatus("idle");
    setCompletedStage(0);
    setSignature("");
    setBlockhash("");
    setError("");
  }

  return (
    <section
      id="transaction-simulator"
      aria-labelledby="transaction-simulator-title"
      style={{
        margin: "clamp(4rem, 9vw, 8rem) 0",
        padding: "clamp(1.25rem, 3vw, 2rem)",
        position: "relative",
        zIndex: 10,
        pointerEvents: "auto",
        border: "1px solid rgba(255,255,255,0.14)",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "minmax(0, 0.8fr) minmax(0, 1.2fr)",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 0.8rem",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              opacity: 0.65,
            }}
          >
            [ INTERACTIVE LAB / DEVNET CONCEPT ]
          </p>

          <h2
            id="transaction-simulator-title"
            style={{
              margin: 0,
              fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            SIMULATE A
            <br />
            <span>TRANSACTION.</span>
          </h2>

          <p
            style={{
              margin: "1.5rem 0 0",
              maxWidth: "42rem",
              lineHeight: 1.75,
              opacity: 0.78,
            }}
          >
            Experiment with a simple SOL transfer and watch
            the transaction move through the main stages of
            the Solana transaction lifecycle.
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              borderLeft: "2px solid currentColor",
              opacity: 0.75,
            }}
          >
            <strong>EDUCATIONAL SIMULATION</strong>
            <p
              style={{
                margin: "0.45rem 0 0",
                lineHeight: 1.6,
                fontSize: "0.9rem",
              }}
            >
              This lab does not connect to a wallet, spend SOL,
              or submit a real transaction. It models the
              transaction flow locally in your browser.
            </p>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",
              gap: "0.9rem",
            }}
          >
            <label style={labelStyle}>
              <span>SENDER BALANCE (SOL)</span>
              <input
                type="number"
                min="0.001"
                step="0.01"
                value={senderBalance}
                onChange={(event) =>
                  setSenderBalance(
                    Number(event.target.value)
                  )
                }
                style={inputStyle}
                disabled={status !== "idle" && status !== "success" && status !== "error"}
              />
            </label>

            <label style={labelStyle}>
              <span>RECIPIENT BALANCE (SOL)</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={recipientBalance}
                onChange={(event) =>
                  setRecipientBalance(
                    Number(event.target.value)
                  )
                }
                style={inputStyle}
                disabled={status !== "idle" && status !== "success" && status !== "error"}
              />
            </label>

            <label style={labelStyle}>
              <span>TRANSFER AMOUNT (SOL)</span>
              <input
                type="number"
                min="0.000001"
                step="0.01"
                value={amount}
                onChange={(event) =>
                  setAmount(Number(event.target.value))
                }
                style={inputStyle}
                disabled={status !== "idle" && status !== "success" && status !== "error"}
              />
            </label>

            <label style={labelStyle}>
              <span>PRIORITY FEE (µLAMPORTS / CU)</span>
              <input
                type="number"
                min="0"
                step="1"
                value={priorityFee}
                onChange={(event) =>
                  setPriorityFee(
                    Math.max(0, Number(event.target.value))
                  )
                }
                style={inputStyle}
                disabled={status !== "idle" && status !== "success" && status !== "error"}
              />
            </label>
          </div>

          <label
            style={{
              ...labelStyle,
              display: "block",
              marginTop: "0.9rem",
            }}
          >
            <span>COMPUTE UNIT LIMIT</span>
            <input
              type="number"
              min="1"
              step="1000"
              value={computeLimit}
              onChange={(event) =>
                setComputeLimit(
                  Math.max(
                    1,
                    Number(event.target.value)
                  )
                )
              }
              style={inputStyle}
              disabled={status !== "idle" && status !== "success" && status !== "error"}
            />
          </label>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <Metric label="BASE FEE" value={`${baseFeeLamports} lamports`} />
            <Metric
              label="PRIORITY FEE"
              value={`${priorityFeeLamports} lamports`}
            />
            <Metric
              label="TOTAL FEE"
              value={`${totalFeeSol.toFixed(9)} SOL`}
            />
          </div>

          {senderAfter < 0 && (
            <p
              style={{
                margin: "1rem 0 0",
                padding: "0.8rem",
                border: "1px solid rgba(255,80,80,0.45)",
                lineHeight: 1.5,
              }}
            >
              The simulated sender does not have enough SOL
              to cover the transfer and network fee.
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginTop: "1.2rem",
            }}
          >
            <button
              type="button"
              onClick={runSimulation}
              disabled={isRunning}
              style={{
                ...primaryButtonStyle,
                opacity: isRunning ? 0.55 : 1,
                cursor: isRunning ? "wait" : "pointer",
              }}
            >
              SIMULATE TRANSACTION <span>→</span>
            </button>

            <button
              type="button"
              onClick={resetSimulation}
              style={secondaryButtonStyle}
            >
              RESET
            </button>
          </div>

          <div
            aria-live="polite"
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "1rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
              }}
            >
              <strong>{statusLabel}</strong>
              <span>{completedStage}/5</span>
            </div>

            <div
              style={{
                display: "grid",
                gap: "0.65rem",
              }}
            >
              {stageData.map((stage, index) => {
                const complete =
                  completedStage >= index + 1;

                const active =
                  status === stage.key;

                return (
                  <div
                    key={stage.key}
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "2rem 1fr auto",
                      gap: "0.8rem",
                      alignItems: "start",
                      padding: "0.75rem",
                      border: `1px solid ${
                        complete || active
                          ? "rgba(255,255,255,0.3)"
                          : "rgba(255,255,255,0.08)"
                      }`,
                      opacity:
                        complete || active ? 1 : 0.45,
                    }}
                  >
                    <span>{stage.number}</span>

                    <div>
                      <strong>{stage.title}</strong>
                      <p
                        style={{
                          margin: "0.3rem 0 0",
                          fontSize: "0.85rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {stage.description}
                      </p>
                    </div>

                    <span>
                      {complete ? "✓" : active ? "…" : "○"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {status === "success" && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.25rem",
            border: "1px solid rgba(120,255,170,0.3)",
            background:
              "rgba(120,255,170,0.045)",
          }}
        >
          <strong>SIMULATION SUCCESSFUL</strong>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <Result
              label="SENDER AFTER"
              value={`${senderAfter.toFixed(9)} SOL`}
            />
            <Result
              label="RECIPIENT AFTER"
              value={`${recipientAfter.toFixed(9)} SOL`}
            />
            <Result
              label="BLOCKHASH"
              value={blockhash}
            />
            <Result
              label="SIMULATED SIGNATURE"
              value={signature}
            />
          </div>

          <p
            style={{
              margin: "1rem 0 0",
              lineHeight: 1.6,
              opacity: 0.72,
              fontSize: "0.85rem",
            }}
          >
            The signature and blockhash shown here are generated
            locally for teaching purposes. They are not real
            Solana identifiers.
          </p>
        </div>
      )}

      {status === "error" && (
        <p
          style={{
            marginTop: "1rem",
            padding: "0.9rem",
            border: "1px solid rgba(255,80,80,0.4)",
          }}
        >
          {error}
        </p>
      )}
    </section>
  );
}

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        padding: "0.8rem",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          opacity: 0.55,
        }}
      >
        {label}
      </span>

      <strong
        style={{
          display: "block",
          marginTop: "0.35rem",
          fontSize: "0.85rem",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        padding: "0.85rem",
        border: "1px solid rgba(255,255,255,0.1)",
        minWidth: 0,
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          opacity: 0.55,
        }}
      >
        {label}
      </span>

      <strong
        style={{
          display: "block",
          marginTop: "0.4rem",
          fontSize: "0.82rem",
          overflowWrap: "anywhere",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

const labelStyle: CSSProperties = {
  display: "grid",
  gap: "0.45rem",
  fontSize: "0.68rem",
  letterSpacing: "0.1em",
  opacity: 0.9,
};

const inputStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "0.8rem 0.85rem",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(0,0,0,0.25)",
  color: "inherit",
  font: "inherit",
  outline: "none",
  position: "relative",
  zIndex: 20,
  pointerEvents: "auto",
};

const primaryButtonStyle: CSSProperties = {
  position: "relative",
  zIndex: 20,
  pointerEvents: "auto",
  appearance: "none",
  WebkitAppearance: "none",
  border: "1px solid #f5b942",
  borderRadius: 0,
  padding: "0.9rem 1.15rem",
  background: "#f5b942",
  color: "#0b0d10",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "0.72rem",
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: "0.08em",
};

const secondaryButtonStyle: CSSProperties = {
  position: "relative",
  zIndex: 20,
  pointerEvents: "auto",
  appearance: "none",
  WebkitAppearance: "none",
  border: "1px solid rgba(255,255,255,0.28)",
  borderRadius: 0,
  padding: "0.9rem 1.15rem",
  background: "transparent",
  color: "#eef2f7",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "0.72rem",
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: "0.08em",
};