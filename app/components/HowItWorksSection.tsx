"use client";

import { CREAM, GREEN, ORANGE, BORDER, TEXT_SECONDARY, TEXT_MUTED } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

const BountyIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.6" /><circle cx="11" cy="11" r="5" stroke={color} strokeWidth="1.6" /><circle cx="11" cy="11" r="2" fill={color} />
  </svg>
);

const HeatmapIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    {[3, 7, 11, 16, 19, 14, 9, 17, 12, 6].map((h, i) => (
      <rect key={i} x={1 + i * 2} y={22 - h} width="1.5" height={h} rx="0.75" fill={color} opacity={0.4 + (h / 22) * 0.6} />
    ))}
  </svg>
);

const NetworkIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="4" r="2.5" fill={color} /><circle cx="4" cy="17" r="2.5" fill={color} /><circle cx="18" cy="17" r="2.5" fill={color} />
    <line x1="11" y1="6.5" x2="4" y2="14.5" stroke={color} strokeWidth="1.2" opacity="0.55" />
    <line x1="11" y1="6.5" x2="18" y2="14.5" stroke={color} strokeWidth="1.2" opacity="0.55" />
    <line x1="4" y1="17" x2="18" y2="17" stroke={color} strokeWidth="1.2" opacity="0.4" />
  </svg>
);

const PayoutIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="1.6" /><path d="M7 8h8M7 11h8M7 11c0 3 2 5 4 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HowItWorksSection() {
  const sectionRef = useScrollReveal();
  const steps = [
    {
      Icon: BountyIcon, accent: ORANGE, num: "01",
      title: "Creator sets bounty",
      desc: "Paste a YouTube URL, set a bounty pool, choose your niche and platform split. Your campaign goes live in minutes.",
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#171717", borderRadius: 8, padding: "8px 12px", fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, color: TEXT_MUTED, border: `1px solid ${BORDER}` }}>
            youtube.com/watch?v=<span style={{ color: ORANGE }}>xK2p9...</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 50, padding: "4px 14px", fontSize: 12, color: ORANGE, fontWeight: 600 }}>Bounty: ₹50,000</div>
            <div style={{ background: "#171717", border: `1px solid ${BORDER}`, borderRadius: 50, padding: "4px 14px", fontSize: 12, color: TEXT_SECONDARY }}>Gaming · Hindi</div>
          </div>
        </div>
      ),
    },
    {
      Icon: HeatmapIcon, accent: ORANGE, num: "02",
      title: "AI heatmap trims it",
      desc: "Our engine scans the full video and finds the highest-engagement 30-second windows. Clippers get the best moments instantly.",
      visual: (
        <div>
          <div style={{ height: 44, display: "flex", gap: 2, alignItems: "flex-end", marginBottom: 6 }}>
            {[18, 28, 44, 60, 80, 100, 92, 88, 65, 36, 44, 54, 82, 70, 30, 20].map((h, i) => (
              <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", height: `${h}%`, background: h > 80 ? ORANGE : `rgba(249,115,22,${h / 160})`, transition: "height .3s" }} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "var(--font-geist-mono), monospace" }}>
            <span style={{ color: TEXT_MUTED }}>0:00</span>
            <span style={{ color: ORANGE, fontWeight: 600 }}>▲ Best: 1:42–2:12 · score 97</span>
            <span style={{ color: TEXT_MUTED }}>24:00</span>
          </div>
        </div>
      ),
    },
    {
      Icon: NetworkIcon, accent: "#818cf8", num: "03",
      title: "Clippers post everywhere",
      desc: "Your network of clippers downloads, edits, and posts across Reels, Shorts, and Moj — all with tracking links.",
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
            {[["#e1306c", "Instagram Reels", "24 clips"], ["#ff0000", "YouTube Shorts", "18 clips"], [ORANGE, "Moj", "9 clips"]].map(([c, l, count]) => (
              <div key={l} style={{ background: "#171717", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c as string }} />
                <div>
                  <div style={{ fontSize: 12, color: CREAM, fontWeight: 500 }}>{l}</div>
                  <div style={{ fontSize: 10, color: TEXT_MUTED }}>{count}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "rgba(129,140,248,0.6)", fontFamily: "var(--font-geist-mono), monospace" }}>link.clipr.in/c/xK2p9 ✓ tracking active</div>
        </div>
      ),
    },
    {
      Icon: PayoutIcon, accent: GREEN, num: "04",
      title: "Views verified, paid out",
      desc: "Every view is fingerprinted and bot-filtered. Verified views trigger automatic UPI payouts to clippers within 7 days.",
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 6 }}>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: TEXT_MUTED }}>views verified</span>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", color: GREEN, fontWeight: 600 }}>4,82,310 / 5,00,000</span>
            </div>
            <div style={{ height: 6, background: "#171717", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: "96%", background: `linear-gradient(90deg,${GREEN},#059669)`, borderRadius: 3 }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[["₹3,378", "Clipper payouts", GREEN], ["₹845", "Platform fee", TEXT_MUTED], ["₹45,777", "Creator saved", ORANGE]].map(([v, l, c]) => (
              <div key={l} style={{ flex: 1, background: "#171717", borderRadius: 8, padding: "8px 6px", textAlign: "center" as const, border: `1px solid ${BORDER}` }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: c, fontFamily: "var(--font-syne), sans-serif" }}>{v}</div>
                <div style={{ fontSize: 9, color: TEXT_MUTED, marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: TEXT_MUTED, lineHeight: 1.5, margin: 0, textAlign: "center" as const }}>
            <span style={{ color: TEXT_SECONDARY }}>How Clipr earns:</span> a transparent platform fee on payouts (shown above). During early beta, 100% of bounty pools can go to clippers — no surprise deductions.
          </p>
        </div>
      ),
    },
  ];

  const accentRgb = (accent: string) => {
    if (accent === ORANGE) return "249,115,22";
    if (accent === GREEN) return "122,255,120";
    return "129,140,248";
  };

  return (
    <section ref={sectionRef as any} id="how-it-works" style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 24px 96px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="section-badge reveal" style={{ marginBottom: 24 }}>The lifecycle of a clip</div>
        <h2 className="reveal" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,34px)", letterSpacing: "-0.05em", lineHeight: "120%", color: CREAM, margin: "0" }}>
          From bounty to <span style={{ color: ORANGE }}>bank account</span>
        </h2>
      </div>

      {/* Stacked rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="antigrid-card hiw-row reveal-card"
            style={{
              gap: 0,
              padding: 0,
              overflow: "hidden",
            }}
          >
            {/* Step number + icon column */}
            <div
              style={{
                width: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "24px 0",
                borderRight: `1px solid ${BORDER}`,
                background: `rgba(${accentRgb(s.accent)},0.03)`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `rgba(${accentRgb(s.accent)},0.1)`,
                  border: `1px solid rgba(${accentRgb(s.accent)},0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <s.Icon color={s.accent} />
              </div>
              <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: TEXT_MUTED, fontWeight: 600 }}>{s.num}</span>
            </div>

            {/* Text column */}
            <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: `1px solid ${BORDER}` }}>
              <h3 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: CREAM, margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>

            {/* Visual column */}
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {s.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
