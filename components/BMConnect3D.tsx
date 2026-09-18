"use client";

export default function BMConnect3D() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "680px",
        position: "relative",
        overflow: "hidden",
        background: "#00040a",
      }}
      aria-label="Blockchain network visualization"
    >
      <img
        src="/images/blockchain-network-hero.png"
        alt="Futuristic blockchain network with interconnected blocks"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
