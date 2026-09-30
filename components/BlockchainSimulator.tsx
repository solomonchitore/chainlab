"use client";

import { useMemo, useState } from "react";

type Transaction = {
  id: number;
  from: string;
  to: string;
  amount: number;
  token: string;
};

type Block = {
  index: number;
  timestamp: string;
  transactions: Transaction[];
  previousHash: string;
  hash: string;
  nonce: number;
  mined: boolean;
};

const INITIAL_BLOCK: Block = {
  index: 0,
  timestamp: new Date().toISOString(),
  transactions: [
    {
      id: 0,
      from: "SYSTEM",
      to: "CLAB TREASURY",
      amount: 1_000_000_000,
      token: "CLAB",
    },
  ],
  previousHash: "0000000000000000",
  hash: "GENESIS-CLAB-0000",
  nonce: 0,
  mined: true,
};

const initialBlocks: Block[] = [INITIAL_BLOCK];

function shortHash(value: string) {
  if (value.length <= 18) return value;
  return `${value.slice(0, 10)}...${value.slice(-6)}`;
}

function transactionText(transaction: Transaction) {
  return `${transaction.from}->${transaction.to}:${transaction.amount}:${transaction.token}`;
}

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function calculateHash(block: Block, nonce: number) {
  const payload = [
    block.index,
    block.timestamp,
    block.previousHash,
    nonce,
    block.transactions.map(transactionText).join("|"),
  ].join("::");

  return sha256(payload);
}

function makeTransaction(
  id: number,
  from: string,
  to: string,
  amount: number
): Transaction {
  return {
    id,
    from,
    to,
    amount,
    token: "CLAB",
  };
}

export default function BlockchainSimulator() {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [from, setFrom] = useState("Alice");
  const [to, setTo] = useState("Bob");
  const [amount, setAmount] = useState("10000");
  const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>([]);
  const [difficulty, setDifficulty] = useState(3);
  const [message, setMessage] = useState(
    "Create a transaction, add it to a block, mine it, then tamper with a block to see why the chain becomes invalid."
  );
  const [busy, setBusy] = useState(false);
  const [tamperedIndex, setTamperedIndex] = useState<number | null>(null);

  const chainValidation = useMemo(() => {
    if (blocks.length === 0) return { valid: false, brokenAt: 0 };

    for (let index = 0; index < blocks.length; index += 1) {
      const block = blocks[index];

      if (index === 0) {
        if (block.previousHash !== INITIAL_BLOCK.previousHash) {
          return { valid: false, brokenAt: index };
        }
        continue;
      }

      if (block.previousHash !== blocks[index - 1].hash) {
        return { valid: false, brokenAt: index };
      }
    }

    return { valid: true, brokenAt: -1 };
  }, [blocks]);

  const addTransaction = () => {
    const numericAmount = Number(amount);

    if (!from.trim() || !to.trim()) {
      setMessage("Enter both a sender and recipient.");
      return;
    }

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setMessage("Enter a transaction amount greater than zero.");
      return;
    }

    const nextId =
      blocks.reduce(
        (highest, block) =>
          Math.max(
            highest,
            ...block.transactions.map((transaction) => transaction.id)
          ),
        0
      ) + pendingTransactions.length + 1;

    setPendingTransactions((current) => [
      ...current,
      makeTransaction(nextId, from.trim(), to.trim(), numericAmount),
    ]);

    setMessage(
      `Transaction created: ${from.trim()} → ${to.trim()} ${numericAmount.toLocaleString()} CLAB.`
    );
  };

  const createBlock = () => {
    if (pendingTransactions.length === 0) {
      setMessage("Add at least one transaction before creating a block.");
      return;
    }

    const previousBlock = blocks[blocks.length - 1];

    const newBlock: Block = {
      index: blocks.length,
      timestamp: new Date().toISOString(),
      transactions: pendingTransactions,
      previousHash: previousBlock.hash,
      hash: "UNMINED",
      nonce: 0,
      mined: false,
    };

    setBlocks((current) => [...current, newBlock]);
    setPendingTransactions([]);
    setTamperedIndex(null);
    setMessage(
      `Block #${newBlock.index} created. Mine it to find a hash that satisfies the demonstration difficulty.`
    );
  };

  const mineLatestBlock = async () => {
    if (busy) return;

    const latest = blocks[blocks.length - 1];

    if (!latest || latest.index === 0) {
      setMessage("Create a transaction and a new block before mining.");
      return;
    }

    setBusy(true);
    setMessage(`Mining Block #${latest.index}...`);

    let nonce = 0;
    let hash = "";

    while (nonce < 2_000_000) {
      hash = await calculateHash(latest, nonce);

      if (hash.startsWith("0".repeat(difficulty))) {
        break;
      }

      nonce += 1;

      // Keep the browser responsive during the educational mining loop.
      if (nonce % 2500 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }

    if (!hash.startsWith("0".repeat(difficulty))) {
      setBusy(false);
      setMessage("Mining reached the demonstration limit. Try a lower difficulty.");
      return;
    }

    setBlocks((current) =>
      current.map((block, index) =>
        index === current.length - 1
          ? { ...block, nonce, hash, mined: true }
          : block
      )
    );

    setTamperedIndex(null);
    setBusy(false);
    setMessage(
      `Block #${latest.index} mined successfully with nonce ${nonce.toLocaleString()}.`
    );
  };

  const tamperWithBlock = (index: number) => {
    if (index === 0) {
      setMessage("The genesis block is locked in this demonstration.");
      return;
    }

    setBlocks((current) =>
      current.map((block, blockIndex) => {
        if (blockIndex !== index) return block;

        const firstTransaction = block.transactions[0];

        return {
          ...block,
          transactions: [
            {
              ...firstTransaction,
              amount: firstTransaction.amount + 5000,
            },
            ...block.transactions.slice(1),
          ],
        };
      })
    );

    setTamperedIndex(index);
    setMessage(
      `Block #${index} was tampered with. Its stored hash no longer represents its current data.`
    );
  };

  const validateChain = async () => {
    for (let index = 1; index < blocks.length; index += 1) {
      const block = blocks[index];

      if (block.previousHash !== blocks[index - 1].hash) {
        setMessage(
          `❌ Chain invalid: Block #${index} points to a different previous hash.`
        );
        return;
      }

      if (block.mined) {
        const recalculated = await calculateHash(block, block.nonce);

        if (recalculated !== block.hash) {
          setMessage(
            `❌ Chain invalid: Block #${index} data no longer matches its stored hash.`
          );
          return;
        }
      }
    }

    setMessage(
      "✓ Chain valid: each block is correctly linked and mined block hashes match their data."
    );
  };

  const reset = () => {
    setBlocks([
      {
        ...INITIAL_BLOCK,
        timestamp: new Date().toISOString(),
      },
    ]);
    setPendingTransactions([]);
    setTamperedIndex(null);
    setMessage(
      "Blockchain reset. Start by creating a CLAB transaction."
    );
  };

  return (
    <div className="chainlab-blockchain-simulator">
      <div className="clab-sim-header">
        <div>
          <p className="clab-sim-eyebrow">HANDS-ON BLOCKCHAIN LAB</p>
          <h2>
            BUILD A <span>SOLANA MEME COIN</span> BLOCKCHAIN
          </h2>
          <p className="clab-sim-intro">
            Use a fictional <strong>$CLAB</strong> meme coin to see how
            transactions can be represented inside linked blocks. This is an
            educational model of blockchain concepts, not a real Solana
            transaction or token.
          </p>
        </div>

        <div className="clab-sim-network">
          <span>NETWORK</span>
          <strong>SOLANA</strong>
          <small>EDUCATIONAL SIMULATION</small>
        </div>
      </div>

      <div className="clab-sim-grid">
        <section className="clab-sim-panel">
          <div className="clab-sim-panel-title">
            <span>01</span>
            CREATE TRANSACTION
          </div>

          <label>
            FROM
            <input
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              placeholder="Alice"
            />
          </label>

          <label>
            TO
            <input
              value={to}
              onChange={(event) => setTo(event.target.value)}
              placeholder="Bob"
            />
          </label>

          <label>
            AMOUNT — CLAB
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              inputMode="decimal"
              type="number"
              min="1"
            />
          </label>

          <button type="button" onClick={addTransaction} disabled={busy}>
            ADD TRANSACTION →
          </button>

          {pendingTransactions.length > 0 && (
            <div className="clab-sim-pending">
              <span>PENDING TRANSACTIONS</span>
              {pendingTransactions.map((transaction) => (
                <p key={transaction.id}>
                  {transaction.from} → {transaction.to}{" "}
                  <strong>{transaction.amount.toLocaleString()} CLAB</strong>
                </p>
              ))}
            </div>
          )}
        </section>

        <section className="clab-sim-panel">
          <div className="clab-sim-panel-title">
            <span>02</span>
            BLOCK CONTROLS
          </div>

          <label>
            DEMONSTRATION DIFFICULTY
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(Number(event.target.value))}
              disabled={busy}
            >
              <option value={2}>2 leading zeros</option>
              <option value={3}>3 leading zeros</option>
              <option value={4}>4 leading zeros</option>
            </select>
          </label>

          <div className="clab-sim-actions">
            <button
              type="button"
              onClick={createBlock}
              disabled={busy || pendingTransactions.length === 0}
            >
              CREATE BLOCK
            </button>

            <button
              type="button"
              onClick={mineLatestBlock}
              disabled={
                busy ||
                blocks.length < 2 ||
                blocks[blocks.length - 1].mined
              }
            >
              {busy ? "MINING..." : "⛏ MINE BLOCK"}
            </button>

            <button type="button" onClick={validateChain} disabled={busy}>
              ✓ VALIDATE CHAIN
            </button>

            <button type="button" onClick={reset} disabled={busy}>
              RESET
            </button>
          </div>

          <div
            className={`clab-sim-status ${
              chainValidation.valid ? "is-valid" : "is-invalid"
            }`}
            aria-live="polite"
          >
            <strong>
              {chainValidation.valid ? "CHAIN STATUS: VALID" : "CHAIN STATUS: CHECK"}
            </strong>
            <span>{message}</span>
          </div>
        </section>
      </div>

      <div className="clab-sim-chain">
        <div className="clab-sim-chain-heading">
          <div>
            <p className="clab-sim-eyebrow">03 / THE CHAIN</p>
            <h3>LINKED BLOCKS</h3>
          </div>
          <div className="clab-sim-chain-count">
            {blocks.length} BLOCK{blocks.length === 1 ? "" : "S"}
          </div>
        </div>

        <div className="clab-sim-blocks">
          {blocks.map((block, index) => (
            <div className="clab-sim-block-wrap" key={block.index}>
              <article
                className={`clab-sim-block ${
                  tamperedIndex === block.index ? "is-tampered" : ""
                }`}
              >
                <div className="clab-sim-block-top">
                  <span>BLOCK #{block.index}</span>
                  <span>{block.mined ? "MINED" : "UNMINED"}</span>
                </div>

                <div className="clab-sim-block-row">
                  <span>TRANSACTIONS</span>
                  <strong>{block.transactions.length}</strong>
                </div>

                <div className="clab-sim-transactions">
                  {block.transactions.map((transaction) => (
                    <div key={transaction.id}>
                      <strong>
                        {transaction.from} → {transaction.to}
                      </strong>
                      <span>
                        {transaction.amount.toLocaleString()} {transaction.token}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="clab-sim-hash">
                  <span>PREVIOUS HASH</span>
                  <code>{shortHash(block.previousHash)}</code>
                </div>

                <div className="clab-sim-hash">
                  <span>HASH</span>
                  <code>{shortHash(block.hash)}</code>
                </div>

                <div className="clab-sim-block-row">
                  <span>NONCE</span>
                  <strong>{block.nonce.toLocaleString()}</strong>
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    className="clab-sim-tamper"
                    onClick={() => tamperWithBlock(index)}
                    disabled={busy}
                  >
                    TAMPER WITH THIS BLOCK
                  </button>
                )}
              </article>

              {index < blocks.length - 1 && (
                <div className="clab-sim-link">
                  <span>PREVIOUS HASH</span>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="clab-sim-explain">
        <div>
          <p className="clab-sim-eyebrow">04 / WHAT YOU ARE SEEING</p>
          <h3>WHY DOES TAMPERING BREAK THE CHAIN?</h3>
        </div>

        <div className="clab-sim-explain-list">
          <p>
            <span>01</span>
            Each block stores its own hash and the hash of the previous block.
          </p>
          <p>
            <span>02</span>
            Changing transaction data changes the block&apos;s calculated hash.
          </p>
          <p>
            <span>03</span>
            The next block still points to the old hash, so the link no longer
            matches.
          </p>
          <p>
            <span>04</span>
            In a real blockchain, network rules and consensus are much more
            complex than this browser demonstration.
          </p>
        </div>
      </div>

      <div className="clab-sim-note">
        <strong>EDUCATIONAL NOTE</strong>
        <span>
          $CLAB, the wallets, transactions, blocks, hashes, and mining process
          shown here are simulated locally in your browser. Nothing is sent to
          Solana and no real token is created.
        </span>
      </div>

      <style jsx>{`
        .chainlab-blockchain-simulator {
          border: 1px solid rgba(0, 217, 255, 0.24);
          background: rgba(2, 7, 13, 0.82);
          padding: 42px;
          color: #f4f7fb;
        }

        .clab-sim-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 220px;
          gap: 40px;
          align-items: start;
        }

        .clab-sim-eyebrow {
          margin: 0 0 12px;
          color: #00d9ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.7px;
        }

        .clab-sim-header h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -2px;
        }

        .clab-sim-header h2 span {
          color: #00d9ff;
        }

        .clab-sim-intro {
          max-width: 760px;
          margin: 22px 0 0;
          color: #9daabd;
          line-height: 1.75;
        }

        .clab-sim-intro strong {
          color: #00d9ff;
        }

        .clab-sim-network {
          border: 1px solid rgba(0, 217, 255, 0.3);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .clab-sim-network span,
        .clab-sim-network small {
          color: #71849a;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .clab-sim-network strong {
          color: #00d9ff;
          font-size: 24px;
        }

        .clab-sim-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 35px;
        }

        .clab-sim-panel {
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 26px;
        }

        .clab-sim-panel-title {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 22px;
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .clab-sim-panel-title span {
          color: #00d9ff;
        }

        .clab-sim-panel label {
          display: block;
          margin-top: 14px;
          color: #71849a;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .clab-sim-panel input,
        .clab-sim-panel select {
          width: 100%;
          height: 46px;
          margin-top: 8px;
          padding: 0 13px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          outline: none;
          background: #02070d;
          color: #fff;
          font: inherit;
        }

        .clab-sim-panel input:focus,
        .clab-sim-panel select:focus {
          border-color: #00d9ff;
        }

        .clab-sim-panel button,
        .clab-sim-tamper {
          border: 1px solid #00d9ff;
          background: transparent;
          color: #00d9ff;
          padding: 12px 15px;
          font: inherit;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .clab-sim-panel > button {
          margin-top: 17px;
        }

        .clab-sim-panel button:hover:not(:disabled),
        .clab-sim-tamper:hover:not(:disabled) {
          background: #00d9ff;
          color: #02070d;
        }

        .clab-sim-panel button:disabled,
        .clab-sim-tamper:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .clab-sim-pending {
          margin-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 15px;
        }

        .clab-sim-pending > span {
          color: #00d9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .clab-sim-pending p {
          margin: 9px 0 0;
          color: #9daabd;
          font-size: 12px;
        }

        .clab-sim-pending strong {
          color: #fff;
        }

        .clab-sim-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-top: 18px;
        }

        .clab-sim-actions button:nth-child(2) {
          background: #00d9ff;
          color: #02070d;
        }

        .clab-sim-status {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 20px;
          border-left: 2px solid #00d9ff;
          padding: 13px 16px;
          background: rgba(0, 217, 255, 0.04);
        }

        .clab-sim-status strong {
          color: #00d9ff;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .clab-sim-status span {
          color: #a7b6c9;
          font-size: 12px;
          line-height: 1.6;
        }

        .clab-sim-chain {
          margin-top: 38px;
        }

        .clab-sim-chain-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 20px;
        }

        .clab-sim-chain-heading h3,
        .clab-sim-explain h3 {
          margin: 0;
          font-size: clamp(26px, 4vw, 42px);
          letter-spacing: -1.5px;
        }

        .clab-sim-chain-count {
          color: #00d9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .clab-sim-blocks {
          display: flex;
          align-items: stretch;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .clab-sim-block-wrap {
          min-width: 285px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .clab-sim-block {
          width: 285px;
          border: 1px solid rgba(0, 217, 255, 0.2);
          background: #030a12;
          padding: 20px;
        }

        .clab-sim-block.is-tampered {
          border-color: #ff8a8a;
        }

        .clab-sim-block-top,
        .clab-sim-block-row,
        .clab-sim-hash {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .clab-sim-block-top {
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #00d9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .clab-sim-block-row {
          margin-top: 14px;
          color: #71849a;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .clab-sim-block-row strong {
          color: #fff;
        }

        .clab-sim-transactions {
          margin-top: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px;
        }

        .clab-sim-transactions div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .clab-sim-transactions strong {
          color: #fff;
          font-size: 11px;
        }

        .clab-sim-transactions span {
          color: #00d9ff;
          font-size: 10px;
        }

        .clab-sim-hash {
          margin-top: 14px;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding-top: 10px;
        }

        .clab-sim-hash span {
          color: #71849a;
          font-size: 8px;
          font-weight: 900;
        }

        .clab-sim-hash code {
          max-width: 130px;
          overflow: hidden;
          color: #9daabd;
          font-size: 9px;
        }

        .clab-sim-tamper {
          width: 100%;
          margin-top: 17px;
          border-color: rgba(255, 138, 138, 0.65);
          color: #ffb0b0;
        }

        .clab-sim-link {
          width: 80px;
          flex-shrink: 0;
          text-align: center;
          color: #00d9ff;
          font-size: 18px;
        }

        .clab-sim-link span {
          display: block;
          margin-bottom: 5px;
          color: #71849a;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .clab-sim-explain {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 55px;
          margin-top: 50px;
          border-top: 1px solid rgba(0, 183, 255, 0.14);
          padding-top: 35px;
        }

        .clab-sim-explain-list {
          border-top: 1px solid rgba(0, 183, 255, 0.18);
        }

        .clab-sim-explain-list p {
          margin: 0;
          padding: 16px 0;
          border-bottom: 1px solid rgba(0, 183, 255, 0.12);
          color: #9daabd;
          font-size: 12px;
          line-height: 1.6;
        }

        .clab-sim-explain-list span {
          display: inline-block;
          width: 35px;
          color: #00d9ff;
          font-weight: 900;
        }

        .clab-sim-note {
          display: flex;
          gap: 15px;
          margin-top: 35px;
          border-left: 2px solid #00d9ff;
          padding: 16px 18px;
          background: rgba(0, 217, 255, 0.035);
        }

        .clab-sim-note strong {
          flex-shrink: 0;
          color: #00d9ff;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .clab-sim-note span {
          color: #8192a8;
          font-size: 11px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .chainlab-blockchain-simulator {
            padding: 28px;
          }

          .clab-sim-header,
          .clab-sim-grid,
          .clab-sim-explain {
            grid-template-columns: 1fr;
          }

          .clab-sim-network {
            width: auto;
          }
        }

        @media (max-width: 600px) {
          .chainlab-blockchain-simulator {
            padding: 20px;
          }

          .clab-sim-actions {
            grid-template-columns: 1fr;
          }

          .clab-sim-chain-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .clab-sim-note {
            flex-direction: column;
          }
        }

        :global([data-theme="light"]) .chainlab-blockchain-simulator {
          background: #ffffff;
          color: #17212b;
          border-color: #d7e1e8;
        }

        :global([data-theme="light"]) .clab-sim-intro,
        :global([data-theme="light"]) .clab-sim-status span,
        :global([data-theme="light"]) .clab-sim-explain-list p,
        :global([data-theme="light"]) .clab-sim-note span {
          color: #435466;
        }

        :global([data-theme="light"]) .clab-sim-panel,
        :global([data-theme="light"]) .clab-sim-block {
          border-color: #d7e1e8;
          background: #f7fafc;
        }

        :global([data-theme="light"]) .clab-sim-panel input,
        :global([data-theme="light"]) .clab-sim-panel select {
          background: #ffffff;
          color: #17212b;
          border-color: #c7d4dd;
        }

        :global([data-theme="light"]) .clab-sim-block-row strong,
        :global([data-theme="light"]) .clab-sim-transactions strong {
          color: #17212b;
        }

        :global([data-theme="light"]) .clab-sim-hash code {
          color: #435466;
        }
      `}</style>
    </div>
  );
}
