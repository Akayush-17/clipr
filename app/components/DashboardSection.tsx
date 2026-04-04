"use client";

import { CREAM, GREEN, ORANGE, BORDER, TEXT_SECONDARY, TEXT_MUTED, BG } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function DashboardSection() {
  const sectionRef = useScrollReveal();
  const clippers = [
    { name: "@reel_raj",    views: "142k", change: "+18%", platform: "Reels",  score: 96 },
    { name: "@clip_priya",  views: "88k",  change: "+7%",  platform: "Shorts", score: 91 },
    { name: "@shorts_aman", views: "61k",  change: "-4%",  platform: "Shorts", score: 78 },
    { name: "@moj_kavya",   views: "55k",  change: "+22%", platform: "Moj",    score: 94 },
    { name: "@ig_nikhil",   views: "31k",  change: "+2%",  platform: "Reels",  score: 82 },
    { name: "@yt_sanya",    views: "24k",  change: "+9%",  platform: "Shorts", score: 88 },
  ];

  return (
    <section ref={sectionRef as any} id="dashboard" style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-badge reveal" style={{ marginBottom: 24 }}>Sneak peek</div>
        <h2 className="reveal" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,34px)", letterSpacing: "-0.05em", lineHeight: "120%", color: CREAM, margin: "0 0 12px" }}>
          Here&apos;s what your <span style={{ color: ORANGE }}>dashboard</span> will look like
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.65, maxWidth: 520, margin: "0 auto" }}>
          Track every clipper, every platform, and every verified view — all in one place. Currently in development.
        </p>
      </div>

      {/* Dashboard mock — full-width card with fade overlay */}
      <div style={{ position: "relative" }}>
        <div className="antigrid-card" style={{ padding: 0, overflow: "hidden" }}>
          {/* Campaign header bar */}
          <div style={{ background: "#171717", padding: "14px 24px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 15, color: CREAM }}>
                Campaign #47
              </div>
              <span style={{ fontSize: 12, color: TEXT_MUTED }}>Tech Podcast Clips</span>
              <span style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "var(--font-geist-mono), monospace" }}>Updated 2 min ago</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 50, padding: "4px 12px", fontSize: 11, color: ORANGE, fontWeight: 600 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: ORANGE, animation: "pulse 1.8s ease infinite" }} />
              LIVE
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: `1px solid ${BORDER}` }}>
            {[
              ["4,82,310", "Verified Views", ORANGE],
              ["₹3,378", "Payouts This Week", GREEN],
              ["97.2%", "Bot-free Rate", CREAM],
              ["47", "Active Clips", "#6ccdfb"],
            ].map(([v, l, c], i) => (
              <div key={l} style={{ padding: "20px 24px", borderRight: i < 3 ? `1px solid ${BORDER}` : undefined }}>
                <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: 24, color: c, letterSpacing: -0.5, lineHeight: 1, marginBottom: 6 }}>{v}</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, letterSpacing: "0.02em" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Clipper table */}
          <div>
            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.6fr 0.5fr", padding: "12px 24px", fontSize: 10, color: TEXT_MUTED, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", borderBottom: `1px solid ${BORDER}` }}>
              <span>Clipper</span><span>Views Today</span><span>Platform</span><span>Score</span>
            </div>

            {/* Table rows */}
            {clippers.map((c, i) => (
              <div
                key={c.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 0.8fr 0.6fr 0.5fr",
                  padding: "14px 24px",
                  alignItems: "center",
                  borderBottom: `1px solid ${BORDER}`,
                  transition: "background .15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1a1a1a"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
              >
                <div style={{ fontSize: 14, fontWeight: 500, color: CREAM, fontFamily: "var(--font-geist-mono), monospace" }}>{c.name}</div>
                <div style={{ fontSize: 14, color: CREAM }}>
                  {c.views}
                  <span style={{ fontSize: 11, marginLeft: 6, fontWeight: 500, color: c.change.startsWith("+") ? GREEN : "#ff4758" }}>{c.change}</span>
                </div>
                <div style={{ fontSize: 12, background: "#171717", borderRadius: 50, padding: "3px 10px", width: "fit-content", color: TEXT_SECONDARY }}>{c.platform}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.score >= 90 ? GREEN : c.score >= 80 ? ORANGE : TEXT_SECONDARY }}>{c.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade-out gradient overlay at the bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 160,
            background: `linear-gradient(to top, ${BG} 0%, ${BG}cc 40%, transparent 100%)`,
            pointerEvents: "none",
            borderRadius: "0 0 16px 16px",
          }}
        />

        {/* CTA floating over the fade */}
        <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 2 }}>
          <a
            href="#waitlist"
            className="cta-pill"
            style={{ fontSize: 14, height: 42, padding: "0 24px", fontWeight: 600, textDecoration: "none" }}
          >
            Get access to your dashboard
            <span style={{ color: TEXT_MUTED }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
