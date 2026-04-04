"use client";

import { CREAM, GREEN, TEXT_SECONDARY, TEXT_MUTED, BORDER } from "../constants/theme";
import Terminal from "./Terminal";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function TerminalSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as any}
      id="anti-fraud"
      className="terminal-grid"
      style={{
        maxWidth: 1120,
        width: "100%",
        margin: "0 auto",
        padding: "48px 24px 96px",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
      }}
    >
      {/* Text side */}
      <div>
        <div className="section-badge reveal" style={{ marginBottom: 24, width: "fit-content" }}>Tech moat</div>

        <h2 className="reveal" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(22px,3.5vw,34px)", letterSpacing: "-0.05em", lineHeight: "120%", color: CREAM, margin: "0 0 16px" }}>
          Your first question:
          <br />
          <span style={{ color: GREEN }}>&ldquo;What about bots?&rdquo;</span>
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.75, marginBottom: 24 }}>
          We built the anti-fraud engine before anything else. Every view is fingerprinted, scored, and accepted or blocked in real-time.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            "IP velocity analysis — catches view farms",
            "Engagement ratio scoring — bots don't pause or comment",
            "Watch duration fingerprinting — sub-3s auto-rejected",
            "Blocked payouts escrow'd back — zero loss guarantee",
          ].map((t) => (
            <div key={t} className="reveal" style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: TEXT_SECONDARY }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(122,255,120,0.06)", border: "1px solid rgba(122,255,120,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke={GREEN} strokeWidth="1.4" strokeLinecap="round" /></svg>
              </div>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal side — no wrapper card */}
      <div className="reveal-card">
        <Terminal />
      </div>
    </section>
  );
}
