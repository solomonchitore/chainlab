"use client";

import styles from "@/app/learn/blockchain/blockchain.module.css";

import { useMemo, useState } from "react";

type LabTransaction = {
  id: string;
  from: string;
  to: string;
  amount: number;
  token: string;
  timestamp: number;
};

type LabBlock = {
  index: number;
  timestamp: number;
  transactions: LabTransaction[];
  previousHash: string;
  hash: string;
  sealed: boolean;
};

type LabWallet = {
  address: string;
  balance: number;
};

type ContractLog = {
  id: string;
  action: string;
  amount: number;
  result: string;
};

const GENESIS_HASH = "GENESIS-CHAINLAB-0000";

function short(value: string, size = 10) {
  if (value.length <= size) return value;
  return `${value.slice(0, Math.ceil(size / 2))}…${value.slice(-Math.floor(size / 2))}`;
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function makeDemoAddress() {
  const alphabet =
    "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let value = "";
  for (let index = 0; index < 32; index += 1) {
    value += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return value;
}

async function sha256(value: string) {
  if (typeof window === "undefined" || !window.crypto?.subtle) {
    return `LOCAL-${btoa(unescape(encodeURIComponent(value))).slice(0, 32)}`;
  }

  const data = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function createGenesisBlock(): LabBlock {
  return {
    index: 0,
    timestamp: Date.now(),
    transactions: [],
    previousHash: "NONE",
    hash: GENESIS_HASH,
    sealed: true,
  };
}

function blockPayload(block: LabBlock) {
  return JSON.stringify({
    index: block.index,
    timestamp: block.timestamp,
    transactions: block.transactions,
    previousHash: block.previousHash,
  });
}

const securityLessons = [
  {
    title: "Never share a seed phrase",
    description:
      "A real wallet recovery phrase can control the assets in that wallet. ChainLab never asks students to enter one.",
  },
  {
    title: "Verify the website",
    description:
      "Phishing pages can imitate wallet interfaces. Check the domain and avoid entering secrets into unknown pages.",
  },
  {
    title: "Understand approvals",
    description:
      "Token approvals can give applications permission to move assets. Read what a transaction or approval is doing before signing.",
  },
  {
    title: "Check transactions",
    description:
      "Before signing, review the destination, amount, network, and requested permissions.",
  },
];

export default function BlockchainEducationLab() {
  const [activeLab, setActiveLab] = useState("wallet");
  const [wallet, setWallet] = useState<LabWallet | null>(null);
  const [recipient, setRecipient] = useState("");
  const [sendAmount, setSendAmount] = useState("10");
  const [walletMessage, setWalletMessage] = useState("");

  const [tokenName, setTokenName] = useState("ChainLab");
  const [tokenSymbol, setTokenSymbol] = useState("CLAB");
  const [tokenSupply, setTokenSupply] = useState("1000000");
  const [createdToken, setCreatedToken] = useState({
    name: "ChainLab",
    symbol: "CLAB",
    supply: 1000000,
  });
  const [tokenMessage, setTokenMessage] = useState("");

  const [pendingTransactions, setPendingTransactions] = useState<
    LabTransaction[]
  >([]);
  const [chain, setChain] = useState<LabBlock[]>([createGenesisBlock()]);
  const [chainMessage, setChainMessage] = useState("");
  const [chainValid, setChainValid] = useState<boolean | null>(null);
  const [explorerSearch, setExplorerSearch] = useState("");

  const [contractBalance, setContractBalance] = useState(0);
  const [contractUserBalance, setContractUserBalance] = useState(500);
  const [contractAmount, setContractAmount] = useState("50");
  const [contractLogs, setContractLogs] = useState<ContractLog[]>([]);
  const [contractMessage, setContractMessage] = useState("");

  const [securityDone, setSecurityDone] = useState<string[]>([]);

  const [challenge, setChallenge] = useState({
    wallet: false,
    token: false,
    transaction: false,
    block: false,
    contract: false,
    security: false,
  });

  const latestBlock = chain[chain.length - 1];

  const explorerBlocks = useMemo(() => {
    const query = explorerSearch.trim().toLowerCase();
    if (!query) return chain;

    return chain.filter((block) => {
      const searchable = [
        String(block.index),
        block.hash,
        block.previousHash,
        ...block.transactions.flatMap((transaction) => [
          transaction.id,
          transaction.from,
          transaction.to,
          transaction.token,
        ]),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [chain, explorerSearch]);

  function createWallet() {
    const newWallet = {
      address: makeDemoAddress(),
      balance: 1000,
    };

    setWallet(newWallet);
    setWalletMessage(
      "Educational wallet created locally. No real keys or assets were created."
    );
    setChallenge((current) => ({ ...current, wallet: true }));
  }

  function sendFromWallet() {
    if (!wallet) {
      setWalletMessage("Create the educational wallet first.");
      return;
    }

    const amount = Number(sendAmount);
    if (!recipient.trim()) {
      setWalletMessage("Enter a recipient address or name.");
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      setWalletMessage("Enter a valid amount greater than zero.");
      return;
    }

    if (amount > wallet.balance) {
      setWalletMessage("The educational wallet does not have enough CLAB.");
      return;
    }

    const transaction: LabTransaction = {
      id: makeId("tx"),
      from: wallet.address,
      to: recipient.trim(),
      amount,
      token: createdToken.symbol,
      timestamp: Date.now(),
    };

    setWallet((current) =>
      current ? { ...current, balance: current.balance - amount } : current
    );
    setPendingTransactions((current) => [...current, transaction]);
    setWalletMessage(
      "Transaction created and added to the local pending pool."
    );
    setChallenge((current) => ({ ...current, transaction: true }));
  }

  function createToken() {
    const supply = Number(tokenSupply);

    if (!tokenName.trim() || !tokenSymbol.trim()) {
      setTokenMessage("Enter a token name and symbol.");
      return;
    }

    if (!Number.isFinite(supply) || supply <= 0) {
      setTokenMessage("Enter a valid total supply.");
      return;
    }

    const nextToken = {
      name: tokenName.trim(),
      symbol: tokenSymbol.trim().toUpperCase(),
      supply,
    };

    setCreatedToken(nextToken);
    setTokenMessage(
      `${nextToken.name} (${nextToken.symbol}) created in the educational simulation.`
    );
    setChallenge((current) => ({ ...current, token: true }));
  }

  function createBlock() {
    if (pendingTransactions.length === 0) {
      setChainMessage(
        "Create at least one transaction before creating a new block."
      );
      return;
    }

    const previous = chain[chain.length - 1];

    const newBlock: LabBlock = {
      index: chain.length,
      timestamp: Date.now(),
      transactions: pendingTransactions,
      previousHash: previous.hash,
      hash: "",
      sealed: false,
    };

    setChain((current) => [...current, newBlock]);
    setPendingTransactions([]);
    setChainValid(null);
    setChainMessage(
      `Block #${newBlock.index} created. Seal it to calculate its hash.`
    );
    setChallenge((current) => ({ ...current, block: true }));
  }

  async function sealLatestBlock() {
    if (latestBlock.index === 0 || latestBlock.sealed) {
      setChainMessage("There is no unsealed block to seal.");
      return;
    }

    const hash = await sha256(blockPayload(latestBlock));

    setChain((current) =>
      current.map((block, index) =>
        index === current.length - 1
          ? { ...block, hash, sealed: true }
          : block
      )
    );

    setChainValid(null);
    setChainMessage(
      `Block #${latestBlock.index} sealed with SHA-256 hash ${short(hash, 18)}.`
    );
  }

  async function validateChain() {
    if (chain.length === 1) {
      setChainValid(true);
      setChainMessage("Genesis block is valid. Add more blocks to test the chain.");
      return;
    }

    for (let index = 1; index < chain.length; index += 1) {
      const current = chain[index];
      const previous = chain[index - 1];

      if (!current.sealed || !current.hash) {
        setChainValid(false);
        setChainMessage(`Block #${current.index} is not sealed.`);
        return;
      }

      if (current.previousHash !== previous.hash) {
        setChainValid(false);
        setChainMessage(
          `Chain broken between block #${previous.index} and block #${current.index}.`
        );
        return;
      }

      const recalculatedHash = await sha256(blockPayload(current));

      if (recalculatedHash !== current.hash) {
        setChainValid(false);
        setChainMessage(
          `Block #${current.index} has been modified after it was sealed.`
        );
        return;
      }
    }

    setChainValid(true);
    setChainMessage(
      "✓ Chain valid. Every sealed block points to the correct previous hash."
    );
  }

  function tamperLatestBlock() {
    if (latestBlock.index === 0) {
      setChainMessage("Create a block first, then tamper with it.");
      return;
    }

    setChain((current) =>
      current.map((block, index) => {
        if (index !== current.length - 1) return block;

        const transactions =
          block.transactions.length > 0
            ? block.transactions.map((transaction, txIndex) =>
                txIndex === 0
                  ? {
                      ...transaction,
                      amount: transaction.amount + 1,
                    }
                  : transaction
              )
            : block.transactions;

        return {
          ...block,
          transactions,
        };
      })
    );

    setChainValid(null);
    setChainMessage(
      "Block data changed without updating its stored hash. Validate the chain to see the failure."
    );
  }

  function resetBlockchain() {
    setChain([createGenesisBlock()]);
    setPendingTransactions([]);
    setChainValid(null);
    setChainMessage("Local blockchain reset to the genesis block.");
  }

  function executeContract(action: "deposit" | "withdraw") {
    const amount = Number(contractAmount);

    if (!Number.isFinite(amount) || amount <= 0) {
      setContractMessage("Enter a valid contract amount.");
      return;
    }

    if (action === "deposit") {
      if (amount > contractUserBalance) {
        setContractMessage("The demo user balance is too low.");
        return;
      }

      setContractUserBalance((current) => current - amount);
      setContractBalance((current) => current + amount);

      setContractLogs((current) => [
        ...current,
        {
          id: makeId("contract"),
          action: "DEPOSIT",
          amount,
          result: "Accepted by contract rules",
        },
      ]);

      setContractMessage(
        `Contract accepted the deposit of ${amount} ${createdToken.symbol}.`
      );
    } else {
      if (amount > contractBalance) {
        setContractMessage("The contract vault does not have enough balance.");
        return;
      }

      setContractBalance((current) => current - amount);
      setContractUserBalance((current) => current + amount);

      setContractLogs((current) => [
        ...current,
        {
          id: makeId("contract"),
          action: "WITHDRAW",
          amount,
          result: "Accepted by contract rules",
        },
      ]);

      setContractMessage(
        `Contract released ${amount} ${createdToken.symbol} to the user.`
      );
    }

    setChallenge((current) => ({ ...current, contract: true }));
  }

  function toggleSecurity(id: string) {
    setSecurityDone((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  const securityComplete = securityDone.length === securityLessons.length;

  const challengeComplete =
    challenge.wallet &&
    challenge.token &&
    challenge.transaction &&
    challenge.block &&
    challenge.contract &&
    chainValid === true &&
    securityComplete;

  return (
    <section className={styles.chainlabBlockchainLab}>
      <div className={styles.chainlabBlockchainLabHeader}>
        <div>
          <p className={styles.chainlabLabEyebrow}>INTERACTIVE BLOCKCHAIN LAB</p>
          <h2>
            BUILD.
            <br />
            <span>BREAK.</span>
            <br />
            UNDERSTAND.
          </h2>
        </div>

        <div className={styles.chainlabLabIntro}>
          <p>
            Go beyond the lesson. Build a miniature blockchain, create a local
            wallet, experiment with tokens, execute a smart contract, inspect
            blocks, and test common Web3 security rules.
          </p>
          <div className={styles.chainlabLabDisclaimer}>
            <strong>EDUCATIONAL SIMULATION</strong>
            <span>
              Everything in this laboratory runs locally in your browser. It
              does not create real assets, store real private keys, or send
              transactions to Solana or another network.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.chainlabLabTabs} role="tablist" aria-label="Blockchain labs">
        {[
          ["wallet", "01", "WALLET"],
          ["token", "02", "TOKEN"],
          ["blockchain", "03", "BUILD BLOCKCHAIN"],
          ["contract", "04", "SMART CONTRACT"],
          ["explorer", "05", "EXPLORER"],
          ["security", "06", "SECURITY"],
          ["challenge", "07", "FINAL CHALLENGE"],
        ].map(([id, number, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeLab === id}
            className={activeLab === id ? styles.active : ""}
            onClick={() => setActiveLab(id)}
          >
            <span>{number}</span>
            {label}
          </button>
        ))}
      </div>

      {activeLab === "wallet" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>01 / USER ACCESS</p>
              <h3>Build a simple wallet</h3>
            </div>
            <span className={styles.chainlabLabStatus}>LOCAL ONLY</span>
          </div>

          <div className={`${styles.chainlabLabGrid} ${styles.two}`}>
            <div className={styles.chainlabLabCard}>
              <p className={styles.chainlabCardLabel}>HOW A WALLET WORKS</p>
              <div className={styles.chainlabWalletFlow}>
                <div>
                  <strong>PUBLIC ADDRESS</strong>
                  <span>Shareable identifier</span>
                </div>
                <div>↓</div>
                <div>
                  <strong>TRANSACTION</strong>
                  <span>Action you want to authorize</span>
                </div>
                <div>↓</div>
                <div>
                  <strong>PRIVATE KEY</strong>
                  <span>Secret authorization credential</span>
                </div>
              </div>
              <div className={styles.chainlabLabNote}>
                <strong>Phantom example:</strong> Phantom is a real Web3 wallet
                interface. In ChainLab we only simulate the wallet experience;
                students should never enter a real recovery phrase here.
              </div>
            </div>

            <div className={styles.chainlabLabCard}>
              <p className={styles.chainlabCardLabel}>CHAINLAB WALLET</p>

              {!wallet ? (
                <div className={styles.chainlabEmptyState}>
                  <div className={styles.chainlabWalletIcon}>W</div>
                  <h4>No wallet created</h4>
                  <p>
                    Generate a fictional local wallet to learn how addresses,
                    balances, and transactions work.
                  </p>
                  <button type="button" onClick={createWallet}>
                    CREATE EDUCATIONAL WALLET →
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.chainlabWalletBalance}>
                    <span>BALANCE</span>
                    <strong>
                      {wallet.balance.toLocaleString()} {createdToken.symbol}
                    </strong>
                  </div>

                  <div className={styles.chainlabAddressBox}>
                    <span>PUBLIC ADDRESS</span>
                    <code>{wallet.address}</code>
                  </div>

                  <div className={styles.chainlabWalletForm}>
                    <label>
                      RECIPIENT
                      <input
                        value={recipient}
                        onChange={(event) => setRecipient(event.target.value)}
                        placeholder="Example: Student-2"
                      />
                    </label>

                    <label>
                      AMOUNT
                      <input
                        type="number"
                        min="0"
                        value={sendAmount}
                        onChange={(event) => setSendAmount(event.target.value)}
                      />
                    </label>

                    <button type="button" onClick={sendFromWallet}>
                      SIGN & CREATE TRANSACTION →
                    </button>
                  </div>
                </>
              )}

              {walletMessage && (
                <p className={styles.chainlabLabMessage}>{walletMessage}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {activeLab === "token" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>02 / DIGITAL ASSETS</p>
              <h3>Create a token</h3>
            </div>
            <span className={styles.chainlabLabStatus}>SIMULATED</span>
          </div>

          <div className={`${styles.chainlabLabGrid} ${styles.two}`}>
            <div className={styles.chainlabLabCard}>
              <p className={styles.chainlabCardLabel}>TOKEN PARAMETERS</p>

              <div className={styles.chainlabFormGrid}>
                <label>
                  TOKEN NAME
                  <input
                    value={tokenName}
                    onChange={(event) => setTokenName(event.target.value)}
                  />
                </label>

                <label>
                  SYMBOL
                  <input
                    value={tokenSymbol}
                    onChange={(event) => setTokenSymbol(event.target.value)}
                    maxLength={8}
                  />
                </label>

                <label className={styles.wide}>
                  TOTAL SUPPLY
                  <input
                    type="number"
                    min="1"
                    value={tokenSupply}
                    onChange={(event) => setTokenSupply(event.target.value)}
                  />
                </label>
              </div>

              <button type="button" onClick={createToken}>
                CREATE TOKEN →
              </button>

              {tokenMessage && (
                <p className={styles.chainlabLabMessage}>{tokenMessage}</p>
              )}
            </div>

            <div className={`${styles.chainlabLabCard} ${styles.chainlabTokenPreview}`}>
              <p className={styles.chainlabCardLabel}>TOKEN PREVIEW</p>
              <div className={styles.chainlabTokenSymbol}>
                {createdToken.symbol.slice(0, 4)}
              </div>
              <h4>
                {createdToken.name} ({createdToken.symbol})
              </h4>
              <strong>
                {createdToken.supply.toLocaleString()} total supply
              </strong>
              <p>
                This demonstrates the concepts behind token metadata and
                supply. It does not deploy an actual token contract or mint
                on-chain assets.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeLab === "blockchain" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>03 / BUILD YOUR OWN</p>
              <h3>Build a simple blockchain</h3>
            </div>
            <span className={styles.chainlabLabStatus}>LOCAL CHAIN</span>
          </div>

          <div className={styles.chainlabChainExplainer}>
            <div>
              <span>TRANSACTION</span>
              <strong>→</strong>
              <span>BLOCK</span>
              <strong>→</strong>
              <span>HASH</span>
              <strong>→</strong>
              <span>CHAIN</span>
              <strong>→</strong>
              <span>VALIDATE</span>
            </div>
            <p>
              This laboratory uses SHA-256 to demonstrate hashing and linked
              blocks. It is a learning model, not a copy of Solana consensus.
            </p>
          </div>

          <div className={styles.chainlabActionBar}>
            <button
              type="button"
              onClick={createBlock}
              disabled={pendingTransactions.length === 0}
            >
              CREATE BLOCK
            </button>
            <button
              type="button"
              onClick={sealLatestBlock}
              disabled={latestBlock.index === 0 || latestBlock.sealed}
            >
              SEAL LATEST BLOCK
            </button>
            <button type="button" onClick={validateChain}>
              VALIDATE CHAIN
            </button>
            <button
              type="button"
              className={styles.danger}
              onClick={tamperLatestBlock}
              disabled={latestBlock.index === 0}
            >
              TAMPER WITH BLOCK
            </button>
            <button type="button" className={styles.ghost} onClick={resetBlockchain}>
              RESET
            </button>
          </div>

          {pendingTransactions.length > 0 && (
            <div className={styles.chainlabPending}>
              <div className={styles.chainlabSectionHeading}>
                <span>PENDING TRANSACTIONS</span>
                <strong>{pendingTransactions.length}</strong>
              </div>

              {pendingTransactions.map((transaction) => (
                <div className={styles.chainlabTransactionRow} key={transaction.id}>
                  <code>{short(transaction.id, 16)}</code>
                  <span>{short(transaction.from, 16)}</span>
                  <strong>→</strong>
                  <span>{transaction.to}</span>
                  <strong>
                    {transaction.amount} {transaction.token}
                  </strong>
                </div>
              ))}
            </div>
          )}

          {chainMessage && (
            <div
              className={`${styles.chainlabChainMessage} ${
                chainValid === true
                  ? styles.success
                  : chainValid === false
                  ? styles.error
                  : ""
              }`}
            >
              {chainMessage}
            </div>
          )}

          <div className={styles.chainlabBlockList}>
            {chain.map((block) => (
              <article className={styles.chainlabBlock} key={`${block.index}-${block.timestamp}`}>
                <div className={styles.chainlabBlockHeader}>
                  <div>
                    <span>BLOCK</span>
                    <strong>#{block.index}</strong>
                  </div>
                  <span className={block.sealed ? styles.sealed : styles.unsealed}>
                    {block.sealed ? "SEALED" : "UNSEALED"}
                  </span>
                </div>

                <div className={styles.chainlabBlockGrid}>
                  <div>
                    <span>TRANSACTIONS</span>
                    <strong>{block.transactions.length}</strong>
                  </div>
                  <div>
                    <span>PREVIOUS HASH</span>
                    <code>{short(block.previousHash, 22)}</code>
                  </div>
                  <div>
                    <span>HASH</span>
                    <code>{block.hash ? short(block.hash, 22) : "NOT SEALED"}</code>
                  </div>
                  <div>
                    <span>TIME</span>
                    <strong>{new Date(block.timestamp).toLocaleTimeString()}</strong>
                  </div>
                </div>

                {block.transactions.length > 0 && (
                  <div className={styles.chainlabBlockTransactions}>
                    {block.transactions.map((transaction) => (
                      <div key={transaction.id}>
                        <span>{short(transaction.from, 14)}</span>
                        <strong>→</strong>
                        <span>{transaction.to}</span>
                        <b>
                          {transaction.amount} {transaction.token}
                        </b>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      {activeLab === "contract" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>04 / PROGRAMMABLE LOGIC</p>
              <h3>Smart contract laboratory</h3>
            </div>
            <span className={styles.chainlabLabStatus}>RULE ENGINE</span>
          </div>

          <div className={styles.chainlabContractDiagram}>
            <div className={styles.chainlabContractNode}>
              <span>USER</span>
              <strong>{contractUserBalance} {createdToken.symbol}</strong>
            </div>
            <div className={styles.chainlabContractArrow}>↔</div>
            <div className={`${styles.chainlabContractNode} ${styles.active}`}>
              <span>SMART CONTRACT</span>
              <strong>TokenVault</strong>
              <small>{contractBalance} {createdToken.symbol} locked</small>
            </div>
          </div>

          <div className={`${styles.chainlabLabGrid} ${styles.two}`}>
            <div className={styles.chainlabLabCard}>
              <p className={styles.chainlabCardLabel}>CONTRACT RULES</p>

              <div className={styles.chainlabRule}>
                <code>IF</code>
                <span>user balance ≥ amount</span>
                <strong>ALLOW DEPOSIT</strong>
              </div>

              <div className={styles.chainlabRule}>
                <code>IF</code>
                <span>vault balance ≥ amount</span>
                <strong>ALLOW WITHDRAW</strong>
              </div>

              <div className={styles.chainlabRule}>
                <code>ELSE</code>
                <span>condition fails</span>
                <strong>REJECT</strong>
              </div>

              <label className={styles.chainlabContractAmount}>
                AMOUNT
                <input
                  type="number"
                  min="1"
                  value={contractAmount}
                  onChange={(event) => setContractAmount(event.target.value)}
                />
              </label>

              <div className={styles.chainlabButtonRow}>
                <button type="button" onClick={() => executeContract("deposit")}>
                  DEPOSIT
                </button>
                <button
                  type="button"
                  className={styles.ghost}
                  onClick={() => executeContract("withdraw")}
                >
                  WITHDRAW
                </button>
              </div>

              {contractMessage && (
                <p className={styles.chainlabLabMessage}>{contractMessage}</p>
              )}
            </div>

            <div className={styles.chainlabLabCard}>
              <p className={styles.chainlabCardLabel}>EXECUTION LOG</p>
              {contractLogs.length === 0 ? (
                <div className={`${styles.chainlabEmptyState} ${styles.compact}`}>
                  <h4>No contract calls yet</h4>
                  <p>
                    Execute a deposit or withdrawal to see the contract state
                    change.
                  </p>
                </div>
              ) : (
                <div className={styles.chainlabContractLogs}>
                  {contractLogs.map((log) => (
                    <div key={log.id}>
                      <span>{log.action}</span>
                      <strong>
                        {log.amount} {createdToken.symbol}
                      </strong>
                      <small>{log.result}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeLab === "explorer" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>05 / NETWORK OBSERVATION</p>
              <h3>ChainLab block explorer</h3>
            </div>
            <span className={styles.chainlabLabStatus}>
              {chain.length} BLOCKS
            </span>
          </div>

          <div className={styles.chainlabExplorerTop}>
            <div>
              <span>NETWORK</span>
              <strong>ChainLab LocalNet</strong>
            </div>
            <div>
              <span>ASSET</span>
              <strong>{createdToken.symbol}</strong>
            </div>
            <div>
              <span>PENDING</span>
              <strong>{pendingTransactions.length}</strong>
            </div>
            <label>
              SEARCH
              <input
                value={explorerSearch}
                onChange={(event) => setExplorerSearch(event.target.value)}
                placeholder="Block, hash, address..."
              />
            </label>
          </div>

          <div className={styles.chainlabExplorerTable}>
            <div className={styles.chainlabExplorerTableHeader}>
              <span>BLOCK</span>
              <span>TRANSACTIONS</span>
              <span>PREVIOUS HASH</span>
              <span>HASH</span>
              <span>STATUS</span>
            </div>

            {explorerBlocks.map((block) => (
              <div className={styles.chainlabExplorerRow} key={`${block.index}-${block.timestamp}`}>
                <strong>#{block.index}</strong>
                <span>{block.transactions.length}</span>
                <code>{short(block.previousHash, 16)}</code>
                <code>{block.hash ? short(block.hash, 16) : "—"}</code>
                <span className={block.sealed ? styles.ok : styles.pending}>
                  {block.sealed ? "VALID" : "PENDING"}
                </span>
              </div>
            ))}
          </div>

          {explorerBlocks.length === 0 && (
            <div className={`${styles.chainlabEmptyState} ${styles.compact}`}>
              <h4>No matching blocks</h4>
              <p>Try a block number, hash fragment, or address.</p>
            </div>
          )}
        </div>
      )}

      {activeLab === "security" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>06 / WALLET & CONTRACT SAFETY</p>
              <h3>Security laboratory</h3>
            </div>
            <span className={styles.chainlabLabStatus}>
              {securityDone.length}/{securityLessons.length} COMPLETE
            </span>
          </div>

          <div className={styles.chainlabSecurityGrid}>
            {securityLessons.map((lesson, index) => {
              const id = `security-${index}`;
              const done = securityDone.includes(id);

              return (
                <article
                  className={`${styles.chainlabSecurityCard} ${done ? styles.done : ""}`}
                  key={id}
                >
                  <span>0{index + 1}</span>
                  <h4>{lesson.title}</h4>
                  <p>{lesson.description}</p>
                  <button type="button" onClick={() => toggleSecurity(id)}>
                    {done ? "✓ UNDERSTOOD" : "MARK AS UNDERSTOOD"}
                  </button>
                </article>
              );
            })}
          </div>

          <div className={styles.chainlabSecurityWarning}>
            <strong>CHAINLAB RULE:</strong>
            Never paste a real seed phrase, private key, password, or wallet
            secret into an educational website or chat.
          </div>
        </div>
      )}

      {activeLab === "challenge" && (
        <div className={styles.chainlabLabPanel}>
          <div className={styles.chainlabLabPanelHeader}>
            <div>
              <p className={styles.chainlabLabKicker}>07 / PUT IT ALL TOGETHER</p>
              <h3>Final blockchain challenge</h3>
            </div>
            <span
              className={`${styles.chainlabLabStatus} ${
                challengeComplete ? styles.complete : ""
              }`}
            >
              {challengeComplete ? "COMPLETE" : "IN PROGRESS"}
            </span>
          </div>

          <p className={styles.chainlabChallengeIntro}>
            Complete the practical steps below. Use the other laboratory tabs
            to perform each task, then return here to see your progress.
          </p>

          <div className={styles.chainlabChallengeGrid}>
            {[
              [
                "wallet",
                "01",
                "CREATE A WALLET",
                challenge.wallet,
                "Generate the fictional ChainLab wallet.",
              ],
              [
                "token",
                "02",
                "CREATE A TOKEN",
                challenge.token,
                "Configure the token name, symbol, and supply.",
              ],
              [
                "transaction",
                "03",
                "CREATE A TRANSACTION",
                challenge.transaction,
                "Use the wallet lab to create a local transfer.",
              ],
              [
                "block",
                "04",
                "BUILD A BLOCK",
                challenge.block,
                "Move a pending transaction into a block.",
              ],
              [
                "validate",
                "05",
                "VALIDATE THE CHAIN",
                chainValid === true,
                "Seal the block and verify the chain links.",
              ],
              [
                "contract",
                "06",
                "CALL A SMART CONTRACT",
                challenge.contract,
                "Execute a deposit or withdrawal.",
              ],
              [
                "security",
                "07",
                "COMPLETE SECURITY CHECK",
                securityComplete,
                "Review all four wallet and contract safety rules.",
              ],
            ].map(([id, number, title, done, description]) => (
              <button
                type="button"
                key={String(id)}
                className={`${styles.chainlabChallengeItem} ${done ? styles.done : ""}`}
                onClick={() =>
                  setActiveLab(
                    id === "wallet"
                      ? "wallet"
                      : id === "token"
                      ? "token"
                      : id === "transaction"
                      ? "wallet"
                      : id === "block"
                      ? "blockchain"
                      : id === "contract"
                      ? "contract"
                      : id === "validate"
                      ? "blockchain"
                      : "security"
                  )
                }
              >
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
                <b>{done ? "✓" : "→"}</b>
              </button>
            ))}
          </div>

          <div className={`${styles.chainlabChallengeResult} ${challengeComplete ? styles.complete : ""}`}>
            <span>{challengeComplete ? "LAB COMPLETE" : "KEEP BUILDING"}</span>
            <strong>
              {challengeComplete
                ? "You connected wallets, tokens, transactions, blocks, smart contracts, and security into one learning workflow."
                : "Finish the practical tasks to complete the ChainLab blockchain laboratory."}
            </strong>
          </div>
        </div>
      )}
    </section>
  );
}
