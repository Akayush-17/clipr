"use client";

import { useState } from "react";
import { BG, CREAM, GREEN, ORANGE, BORDER, TEXT_SECONDARY, TEXT_MUTED } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ClipperPOVSection() {
  const [step, setStep] = useState(0);
  const sectionRef = useScrollReveal();

  const steps = [
    {
      id: "browse", label: "Browse", icon: "🔍",
      title: "Find campaigns that fit your niche",
      desc: "Filter by category, language, and payout rate. Only take campaigns where you already make content.",
      mock: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { title: "TechBurner Podcast — Hindi", cat: "Tech", rate: "₹7/1k", slots: "12 left", hot: true },
            { title: "GodSpeed Gaming — Clips", cat: "Gaming", rate: "₹6/1k", slots: "28 left", hot: false },
            { title: "Nikhil Kamath Show — Finance", cat: "Finance", rate: "₹8/1k", slots: "5 left", hot: true },
          ].map((c, i) => (
            <div key={c.title} style={{ background: "#171717", border: `1px solid ${i === 2 ? "rgba(249,115,22,0.25)" : BORDER}`, borderRadius: 10, padding: "11px 13px", display: "flex", alignItems: "center", gap: 10, transition: "background .15s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1a1a1a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#171717"; }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: CREAM, marginBottom: 3 }}>{c.title}</div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 10, color: TEXT_SECONDARY, background: "#262626", borderRadius: 50, padding: "2px 7px" }}>{c.cat}</span>
                  <span style={{ fontSize: 10, color: GREEN, fontWeight: 600 }}>{c.rate}</span>
                </div>
              </div>
              {c.hot && <span style={{ fontSize: 10, color: ORANGE, background: "rgba(249,115,22,0.08)", borderRadius: 50, padding: "2px 8px", fontWeight: 600, flexShrink: 0 }}>Hot</span>}
              <span style={{ fontSize: 10, color: TEXT_MUTED, flexShrink: 0 }}>{c.slots}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "clip", label: "Clip it", icon: "✂️",
      title: "Cut the best 30 seconds. Post on your handle.",
      desc: "Use our heatmap to find the highest-engagement window. Download, edit, post to your own account.",
      mock: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#171717", borderRadius: 10, padding: "12px 14px", border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: TEXT_MUTED, fontFamily: "var(--font-geist-mono), monospace", marginBottom: 8 }}>AI HEATMAP · TechBurner_Ep91.mp4</div>
            <div style={{ height: 32, display: "flex", gap: 2, alignItems: "flex-end", marginBottom: 8 }}>
              {[20, 35, 55, 70, 90, 100, 95, 60, 40, 30, 45, 80, 88, 72, 50].map((h, i) => (
                <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", height: `${h}%`, background: i >= 4 && i <= 8 ? (h > 80 ? ORANGE : "rgba(249,115,22,0.65)") : "rgba(255,255,255,0.05)" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: TEXT_MUTED, fontFamily: "var(--font-geist-mono), monospace" }}>
              <span>0:00</span><span style={{ color: ORANGE }}>▼ Best: 12:30–13:00</span><span>45:00</span>
            </div>
          </div>
          <div style={{ background: "rgba(122,255,120,0.04)", border: "1px solid rgba(122,255,120,0.14)", borderRadius: 10, padding: "10px 13px", fontSize: 12, color: CREAM }}>
            ✂️ <strong>Clip ready</strong> — 30s · 1080p · 9:16
          </div>
        </div>
      ),
    },
    {
      id: "submit", label: "Submit", icon: "📎",
      title: "Paste your post link. That's it.",
      desc: "Copy your post URL and paste it into Clipr. Our system starts tracking views immediately.",
      mock: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#171717", borderRadius: 10, padding: "12px 14px", border: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: TEXT_MUTED, marginBottom: 8 }}>Paste your post link</div>
            <div style={{ background: BG, border: "1px solid rgba(249,115,22,0.25)", borderRadius: 8, padding: "8px 12px", fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: ORANGE }}>
              instagram.com/reel/DxK2p_abc...
            </div>
          </div>
          <div style={{ background: "#171717", borderRadius: 10, padding: "12px 14px", border: `1px solid ${BORDER}`, display: "flex", flexDirection: "column" as const, gap: 7 }}>
            {[["Platform detected", "Instagram Reels ✓"], ["Campaign matched", "TechBurner Ep91 ✓"]].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
                <span style={{ color: TEXT_MUTED }}>{label}</span><span style={{ color: CREAM }}>{value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
              <span style={{ color: TEXT_MUTED }}>Tracking status</span><span style={{ color: GREEN, fontWeight: 600 }}>● LIVE</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "earn", label: "Earn", icon: "💸",
      title: "Watch views turn into UPI credits.",
      desc: "Your earnings update real-time. Hit a threshold and payout drops to UPI — every Friday.",
      mock: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#171717", borderRadius: 10, padding: "14px", border: `1px solid ${BORDER}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 11 }}>
              <span style={{ color: TEXT_MUTED, fontFamily: "var(--font-geist-mono), monospace" }}>views verified today</span>
              <span style={{ color: GREEN, fontFamily: "var(--font-geist-mono), monospace" }}>+18,240</span>
            </div>
            <div style={{ height: 5, background: BG, borderRadius: 3, overflow: "hidden", marginBottom: 4 }}>
              <div style={{ height: "100%", width: "72%", background: `linear-gradient(90deg,${GREEN},#059669)`, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 10, color: TEXT_MUTED }}>72% to next payout</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["₹1,276", "This week", GREEN], ["₹6,840", "This month", ORANGE]].map(([v, l, c]) => (
              <div key={l} style={{ background: "#171717", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px", textAlign: "center" as const }}>
                <div style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 800, fontSize: 18, color: c }}>{v}</div>
                <div style={{ fontSize: 10, color: TEXT_MUTED, marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(122,255,120,0.04)", border: "1px solid rgba(122,255,120,0.12)", borderRadius: 10, padding: "10px 13px", fontSize: 12, color: GREEN, fontWeight: 500, textAlign: "center" as const }}>
            Friday payout: ₹1,276 → UPI confirmed ✓
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef as any} style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
      <div className="section-badge reveal" style={{ marginBottom: 28 }}>Clipper&apos;s perspective</div>

      <h2 className="reveal" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,34px)", letterSpacing: "-0.05em", marginBottom: 10, lineHeight: "120%", color: CREAM, margin: "0 0 10px" }}>
        A day in the life of <span style={{ color: GREEN }}>a Clipper</span>
      </h2>
      <p style={{ fontSize: 15, color: TEXT_SECONDARY, marginBottom: 44, lineHeight: 1.65, maxWidth: 500 }}>
        You already spend time watching content. Now that time pays you.
      </p>

      {/* Step tabs — pill-shaped like Mastra section badges */}
      <div style={{ display: "flex", gap: 0, background: "#141414", borderRadius: 50, padding: 4, marginBottom: 28, width: "fit-content", border: `2px solid ${BORDER}` }}>
        {steps.map((s, i) => (
          <button key={s.id} onClick={() => setStep(i)} style={{ padding: "9px 20px", borderRadius: 50, border: "none", background: step === i ? GREEN : "transparent", color: step === i ? "#000" : TEXT_MUTED, fontFamily: "inherit", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .15s cubic-bezier(0.4,0,0.2,1)", display: "flex", alignItems: "center", gap: 5 }}>
            {s.icon} {s.label}
          </button>
        ))}
      </div>

      {/* Content — asymmetric 2-col grid */}
      <div key={steps[step].id} className="antigrid grid-2col" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Description card */}
        <div className="antigrid-card" style={{ padding: 28 }}>
          <div style={{ height: 2, background: `linear-gradient(90deg,${GREEN},transparent)`, marginBottom: 22, borderRadius: 2 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(122,255,120,0.06)", border: "1px solid rgba(122,255,120,0.16)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              {steps[step].icon}
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}>Step {step + 1} of 4</div>
          </div>
          <h3 style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", color: CREAM, lineHeight: 1.22, margin: "0 0 12px" }}>{steps[step].title}</h3>
          <p style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.75, margin: 0 }}>{steps[step].desc}</p>
        </div>

        {/* Mock card */}
        <div className="antigrid-card" style={{ padding: 22, borderColor: "rgba(122,255,120,0.12)" }}>
          <div style={{ fontSize: 10, color: TEXT_MUTED, fontFamily: "var(--font-geist-mono), monospace", marginBottom: 14, letterSpacing: "1px", textTransform: "uppercase" }}>
            Clipr App · {steps[step].label}
          </div>
          {steps[step].mock}
        </div>
      </div>
    </section>
  );
}
