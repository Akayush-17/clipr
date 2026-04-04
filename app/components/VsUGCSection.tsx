"use client";

import { CREAM, GREEN, ORANGE, BORDER, TEXT_SECONDARY, TEXT_MUTED } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Row = { feature: string; old: string; clipr: string };

const CREATOR_ROWS: Row[] = [
  { feature: "Distribution", old: "You hire one editor and share on your own page", clipr: "50–200 clippers post on their pages for you" },
  { feature: "Content feel", old: "Scripted and branded — feels like an ad", clipr: "Organic, in each clipper's own voice" },
  { feature: "What you pay for", old: "A flat fee upfront, regardless of results", clipr: "Only verified views — no views, no cost" },
  { feature: "Fraud protection", old: "None — you trust the view count", clipr: "Every view is bot-filtered before payout" },
  { feature: "Reach", old: "1 video on 1 account", clipr: "Hundreds of clips across every platform" },
  { feature: "Payouts", old: "USD invoices, international fees", clipr: "INR direct to UPI, every Friday" },
];

const CLIPPER_ROWS: Row[] = [
  {
    feature: "Finding hooks",
    old: "Manual scrubbing through 4-hour VODs.",
    clipr: "AI highlights viral moments instantly.",
  },
  {
    feature: "The feedback loop",
    old: "Endless client revision cycles.",
    clipr: "Zero approvals. Let algorithms decide.",
  },
  {
    feature: "Creative control",
    old: "Rigid guidelines that kill virality.",
    clipr: "100% freedom. Edit your way.",
  },
  {
    feature: "Payment risk",
    old: "Chasing invoices or getting scammed.",
    clipr: "Upfront escrow. Guaranteed automated payouts.",
  },
  {
    feature: "Scaling income",
    old: "Juggling multiple demanding clients.",
    clipr: "Zero clients. Scale via views.",
  },
  {
    feature: "Audience building",
    old: "Growing the creator's page instead.",
    clipr: "Grow your own theme pages.",
  },
];

type Props = { isCreator: boolean };

export default function VsUGCSection({ isCreator }: Props) {
  const sectionRef = useScrollReveal();
  const rows = isCreator ? CREATOR_ROWS : CLIPPER_ROWS;

  return (
    <section ref={sectionRef as any} style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-badge reveal" style={{ marginBottom: 24 }}>
          Why Clipr is different
        </div>

        <h2 className="reveal" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,34px)", letterSpacing: "-0.05em", lineHeight: "120%", color: CREAM, margin: "0 0 12px" }}>
          The old way vs <span style={{ color: ORANGE }}>the Clipr way</span>
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
          {isCreator ? (
            <>Most creators promote content alone or pay influencers a flat fee. Clipr flips the model — you only pay when it actually works.</>
          ) : (
            <>Freelance editing means scrubbing VODs, revision hell, and chasing invoices. Clipr replaces client chaos with bounties, autonomy, and payout when your clips actually deliver views.</>
          )}
        </p>
      </div>

      {/* Table inside an antigrid-card */}
      <div className="antigrid-card reveal-card" style={{ padding: 0, overflow: "hidden" }}>
        {/* Header row */}
        <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", background: "#171717", padding: "16px 28px", gap: 8, borderBottom: `2px solid ${BORDER}` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: TEXT_MUTED, letterSpacing: "0.06em", textTransform: "uppercase" }}></div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,71,88,0.7)", letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="rgba(255,71,88,0.6)" strokeWidth="1.2" /><path d="M4 4l4 4M8 4l-4 4" stroke="rgba(255,71,88,0.6)" strokeWidth="1.2" strokeLinecap="round" /></svg>
            The old way
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: ORANGE, letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke={ORANGE} strokeWidth="1.2" /><path d="M3 6l2 2 4-4" stroke={ORANGE} strokeWidth="1.2" strokeLinecap="round" /></svg>
            With Clipr
          </div>
        </div>

        {/* Rows */}
        {rows.map((r, i) => (
          <div
            key={r.feature}
            className="grid-3col"
            style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", padding: "16px 28px", gap: 8, borderTop: i > 0 ? `1px solid ${BORDER}` : undefined, transition: "background .15s", cursor: "default" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1a1a1a"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
          >
            <div style={{ fontSize: 14, color: CREAM, fontWeight: 600 }}>{r.feature}</div>
            <div style={{ fontSize: 14, color: TEXT_MUTED, display: "flex", alignItems: "center", gap: 7 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="6" fill="rgba(255,71,88,0.06)" stroke="rgba(255,71,88,0.2)" strokeWidth="1" />
                <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="rgba(255,71,88,0.55)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {r.old}
            </div>
            <div style={{ fontSize: 14, color: CREAM, display: "flex", alignItems: "center", gap: 7, fontWeight: 500 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="6" fill="rgba(122,255,120,0.06)" stroke="rgba(122,255,120,0.2)" strokeWidth="1" />
                <path d="M4 7l2 2 4-4" stroke={GREEN} strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {r.clipr}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
