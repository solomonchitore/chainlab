import Link from "next/link";

export const metadata = {
  title: "Chrome Extension | ChainLab",
  description: "Discover ChainLab Quick Learn, a browser companion for blockchain definitions and quick educational facts.",
};

export default function ExtensionPage() {
  return (
    <main className="extension-page">
      <section className="extension-hero">
        <p className="extension-eyebrow">CHAINLAB / BROWSER COMPANION</p>
        <h1>Learn Web3.<br /><span>Right from your browser.</span></h1>
        <p className="extension-intro">
          ChainLab Quick Learn is a lightweight Chrome extension for exploring
          blockchain terminology and quick educational facts without leaving your current tab.
        </p>
        <span className="extension-status">CHROME EXTENSION · EARLY VERSION</span>
      </section>
      <section className="extension-features" aria-label="Extension features">
        <article><span>01 / LOOK IT UP</span><h2>Blockchain Dictionary</h2><p>Search simple explanations for wallets, validators, consensus, and tokenomics.</p></article>
        <article><span>02 / KEEP LEARNING</span><h2>Quick Knowledge</h2><p>Discover a rotating collection of short blockchain learning facts.</p></article>
        <article><span>03 / CONTINUE EXPLORING</span><h2>Visit ChainLab</h2><p>Open the ChainLab learning website directly from the extension popup.</p></article>
      </section>
      <section className="extension-install">
        <h2>Installation</h2>
        <p>The extension is not yet published on the Chrome Web Store. For local testing, open Chrome's Extensions page, enable Developer mode, and choose “Load unpacked.”</p>
        <p className="extension-note">Configure your deployed website address in the extension's <code>popup.js</code> file before using its Visit ChainLab button.</p>
        <Link href="/learn" className="primary-button">Explore ChainLab learning →</Link>
      </section>
    </main>
  );
}