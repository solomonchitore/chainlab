"use client";

import { useMemo, useState } from "react";

type Allocation = {
  name: string;
  percentage: number;
};

const DEFAULT_ALLOCATIONS: Allocation[] = [
  { name: "Community", percentage: 40 },
  { name: "Liquidity", percentage: 20 },
  { name: "Team", percentage: 15 },
  { name: "Treasury", percentage: 15 },
  { name: "Marketing", percentage: 10 },
];

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(8,11,16,0.92)",
  padding: "1rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(255,255,255,0.16)",
  background: "#090d13",
  color: "#eef2f7",
  padding: "0.85rem 0.9rem",
  outline: "none",
  font: "inherit",
};

const buttonStyle: React.CSSProperties = {
  border: "1px solid #f5b942",
  background: "#f5b942",
  color: "#090d13",
  padding: "0.8rem 1rem",
  cursor: "pointer",
  font: "inherit",
  fontWeight: 800,
  letterSpacing: "0.06em",
};

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function TokenomicsCalculator() {
  const [tokenName, setTokenName] = useState("CHAIN");
  const [totalSupply, setTotalSupply] = useState(1_000_000_000);
  const [tokenPrice, setTokenPrice] = useState(0.01);
  const [circulatingPercent, setCirculatingPercent] = useState(25);
  const [allocations, setAllocations] =
    useState<Allocation[]>(DEFAULT_ALLOCATIONS);

  const circulatingSupply = useMemo(
    () => totalSupply * (circulatingPercent / 100),
    [totalSupply, circulatingPercent]
  );

  const marketCap = useMemo(
    () => circulatingSupply * tokenPrice,
    [circulatingSupply, tokenPrice]
  );

  const fdv = useMemo(
    () => totalSupply * tokenPrice,
    [totalSupply, tokenPrice]
  );

  const allocationTotal = useMemo(
    () =>
      allocations.reduce(
        (total, allocation) => total + Number(allocation.percentage || 0),
        0
      ),
    [allocations]
  );

  const unallocated = Math.max(0, 100 - allocationTotal);

  function updateAllocation(
    index: number,
    field: "name" | "percentage",
    value: string
  ) {
    setAllocations((current) =>
      current.map((allocation, allocationIndex) => {
        if (allocationIndex !== index) return allocation;

        return {
          ...allocation,
          [field]:
            field === "percentage"
              ? Math.max(0, Math.min(100, Number(value) || 0))
              : value,
        };
      })
    );
  }

  function addAllocation() {
    setAllocations((current) => [
      ...current,
      {
        name: `Allocation ${current.length + 1}`,
        percentage: 0,
      },
    ]);
  }

  function removeAllocation(index: number) {
    setAllocations((current) =>
      current.filter((_, allocationIndex) => allocationIndex !== index)
    );
  }

  function resetCalculator() {
    setTokenName("CHAIN");
    setTotalSupply(1_000_000_000);
    setTokenPrice(0.01);
    setCirculatingPercent(25);
    setAllocations(DEFAULT_ALLOCATIONS);
  }

  function exportSummary() {
    const lines = [
      `TOKENOMICS SUMMARY — ${tokenName || "TOKEN"}`,
      "",
      `Total Supply: ${formatNumber(totalSupply)}`,
      `Token Price: ${formatCurrency(tokenPrice)}`,
      `Circulating Supply: ${formatNumber(circulatingSupply)}`,
      `Circulating Supply: ${circulatingPercent}%`,
      `Market Cap: ${formatCurrency(marketCap)}`,
      `FDV: ${formatCurrency(fdv)}`,
      "",
      "ALLOCATIONS",
      ...allocations.map(
        (allocation) =>
          `${allocation.name}: ${allocation.percentage}% (${formatNumber(
            totalSupply * (allocation.percentage / 100)
          )} tokens)`
      ),
    ];

    navigator.clipboard?.writeText(lines.join("\n"));
  }

  return (
    <section
      aria-labelledby="tokenomics-calculator-title"
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        margin: "4rem 0",
        padding: "clamp(1rem, 3vw, 2rem)",
        boxSizing: "border-box",
        border: "1px solid rgba(255,255,255,0.14)",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.012))",
        color: "#eef2f7",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 0.8fr) minmax(0, 1.5fr)",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              color: "#9ca6b4",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
            }}
          >
            [ INTERACTIVE LAB / TOKENOMICS ]
          </p>

          <h2
            id="tokenomics-calculator-title"
            style={{
              margin: "0.7rem 0 1rem",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            BUILD A
            <br />
            <span style={{ color: "#f5b942" }}>TOKENOMICS MODEL.</span>
          </h2>

          <p
            style={{
              maxWidth: 620,
              margin: 0,
              color: "#aeb6c2",
              lineHeight: 1.65,
            }}
          >
            Experiment with supply, price, circulating supply, market
            capitalization, fully diluted valuation, and token allocation.
            Everything is calculated locally in your browser.
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              borderLeft: "2px solid #f5b942",
              padding: "0.9rem 0 0.9rem 1rem",
            }}
          >
            <strong style={{ display: "block", marginBottom: "0.4rem" }}>
              EDUCATIONAL SIMULATION
            </strong>
            <span style={{ color: "#aeb6c2", lineHeight: 1.5 }}>
              This calculator does not create a token, deploy a contract, or
              predict a token's future value.
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gap: "1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <label style={{ display: "grid", gap: "0.45rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                TOKEN NAME
              </span>
              <input
                value={tokenName}
                onChange={(event) => setTokenName(event.target.value)}
                style={inputStyle}
                maxLength={20}
              />
            </label>

            <label style={{ display: "grid", gap: "0.45rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                TOKEN PRICE (USD)
              </span>
              <input
                type="number"
                min="0"
                step="0.000001"
                value={tokenPrice}
                onChange={(event) =>
                  setTokenPrice(Math.max(0, Number(event.target.value) || 0))
                }
                style={inputStyle}
              />
            </label>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <label style={{ display: "grid", gap: "0.45rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                TOTAL SUPPLY
              </span>
              <input
                type="number"
                min="0"
                step="1"
                value={totalSupply}
                onChange={(event) =>
                  setTotalSupply(Math.max(0, Number(event.target.value) || 0))
                }
                style={inputStyle}
              />
            </label>

            <label style={{ display: "grid", gap: "0.45rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>
                CIRCULATING SUPPLY (%)
              </span>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={circulatingPercent}
                onChange={(event) =>
                  setCirculatingPercent(
                    Math.max(0, Math.min(100, Number(event.target.value) || 0))
                  )
                }
                style={inputStyle}
              />
            </label>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
            }}
          >
            <div style={cardStyle}>
              <span
                style={{
                  display: "block",
                  color: "#858d99",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                CIRCULATING
              </span>
              <strong style={{ display: "block", marginTop: "0.45rem" }}>
                {formatNumber(circulatingSupply)}
              </strong>
            </div>

            <div style={cardStyle}>
              <span
                style={{
                  display: "block",
                  color: "#858d99",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                MARKET CAP
              </span>
              <strong
                style={{
                  display: "block",
                  marginTop: "0.45rem",
                  color: "#f5b942",
                }}
              >
                {formatCurrency(marketCap)}
              </strong>
            </div>

            <div style={cardStyle}>
              <span
                style={{
                  display: "block",
                  color: "#858d99",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                FDV
              </span>
              <strong style={{ display: "block", marginTop: "0.45rem" }}>
                {formatCurrency(fdv)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "end",
            marginBottom: "0.8rem",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#9ca6b4",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              SUPPLY ALLOCATION
            </p>
            <h3 style={{ margin: "0.35rem 0 0", fontSize: "1.4rem" }}>
              Where does the supply go?
            </h3>
          </div>

          <strong
            style={{
              color:
                allocationTotal === 100
                  ? "#74d99b"
                  : allocationTotal > 100
                    ? "#ff7373"
                    : "#f5b942",
            }}
          >
            {allocationTotal}% ALLOCATED
          </strong>
        </div>

        <div style={{ display: "grid", gap: "0.65rem" }}>
          {allocations.map((allocation, index) => {
            const tokenAmount =
              totalSupply * (allocation.percentage / 100);

            return (
              <div
                key={`${index}-${allocation.name}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(120px, 1fr) 110px minmax(140px, 1fr) auto",
                  gap: "0.65rem",
                  alignItems: "center",
                  padding: "0.7rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <input
                  value={allocation.name}
                  onChange={(event) =>
                    updateAllocation(index, "name", event.target.value)
                  }
                  style={inputStyle}
                  aria-label={`Allocation ${index + 1} name`}
                />

                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={allocation.percentage}
                    onChange={(event) =>
                      updateAllocation(
                        index,
                        "percentage",
                        event.target.value
                      )
                    }
                    style={{
                      ...inputStyle,
                      paddingRight: "2rem",
                    }}
                    aria-label={`${allocation.name} percentage`}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: "0.7rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#858d99",
                    }}
                  >
                    %
                  </span>
                </div>

                <div
                  style={{
                    color: "#aeb6c2",
                    fontSize: "0.8rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatNumber(tokenAmount)} tokens
                </div>

                <button
                  type="button"
                  onClick={() => removeAllocation(index)}
                  aria-label={`Remove ${allocation.name}`}
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "transparent",
                    color: "#aeb6c2",
                    padding: "0.75rem 0.85rem",
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "0.75rem",
            padding: "0.8rem",
            border: "1px solid rgba(255,255,255,0.08)",
            color: allocationTotal > 100 ? "#ff7373" : "#9ca6b4",
            fontSize: "0.8rem",
          }}
        >
          {allocationTotal > 100
            ? `Allocation exceeds 100% by ${allocationTotal - 100}%.`
            : unallocated > 0
              ? `${unallocated}% of the total supply is currently unallocated.`
              : "100% of the total supply has been allocated."}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
            marginTop: "1rem",
          }}
        >
          <button type="button" onClick={addAllocation} style={buttonStyle}>
            + ADD ALLOCATION
          </button>

          <button
            type="button"
            onClick={exportSummary}
            style={{
              ...buttonStyle,
              background: "transparent",
              color: "#eef2f7",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            COPY SUMMARY
          </button>

          <button
            type="button"
            onClick={resetCalculator}
            style={{
              ...buttonStyle,
              background: "transparent",
              color: "#eef2f7",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            RESET
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
        }}
      >
        {allocations.map((allocation, index) => (
          <div
            key={`${allocation.name}-bar-${index}`}
            style={{
              minWidth: 0,
              borderTop: "3px solid #f5b942",
              paddingTop: "0.65rem",
            }}
          >
            <strong
              style={{
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "0.75rem",
              }}
            >
              {allocation.name || "UNNAMED"}
            </strong>
            <span style={{ color: "#858d99", fontSize: "0.7rem" }}>
              {allocation.percentage}%
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          section {
            padding: 1rem !important;
          }

          section > div:nth-child(2) > div:first-child,
          section > div:nth-child(2) > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }

          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }

          section > div:nth-child(3) > div {
            grid-template-columns: 1fr !important;
          }

          section > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
