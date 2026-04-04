"use client";

import { useEffect, useRef, useState } from "react";
import { GREEN, BORDER, TEXT_MUTED } from "../constants/theme";

const TERM_LINES = [
  { t: "cmd", s: "analyze_view --clip-id=xK2p9_42 --source=reels" },
  { t: "info", s: "Fetching viewer fingerprints (n=1,240)..." },
  { t: "dim", s: "[████████████████] 100%" },
  { t: "pass", s: "IP diversity check ..................... PASS (98.2%)" },
  { t: "pass", s: "Watch duration filter (>3s) ............ PASS (94.7%)" },
  { t: "pass", s: "Engagement ratio analysis .............. PASS (8.3:1)" },
  { t: "warn", s: "Suspicious cluster: subnet 103.x.x.x (14 views)" },
  { t: "fail", s: "Bot verdict: 14 views BLOCKED — payout adjusted" },
  { t: "dim", s: "─────────────────────────────────────────────" },
  { t: "pass", s: "Verified: 1,226  |  Blocked: 14  |  Accuracy: 98.9%" },
  { t: "pass", s: "Payout released → @clipper_raj: ₹4,285.50 via UPI" },
  { t: "info", s: "Bounty pool remaining: ₹34,210.00" },
  { t: "cmd", s: "monitor --live --flag-anomalies" },
  { t: "info", s: "Watching 47 active clips across 3 platforms..." },
  { t: "blink", s: "_" },
] as const;

const tColor: Record<string, string> = {
  cmd: "rgba(122,255,120,0.8)",
  pass: GREEN,
  fail: "#ff4758",
  warn: "#eab308",
  info: "rgba(240,240,240,0.25)",
  dim: "rgba(240,240,240,0.12)",
  blink: GREEN,
};

export default function Terminal() {
  const [lines, setLines] = useState<typeof TERM_LINES[number][]>([]);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let idx = 0;
    let timer: number | undefined;

    function next() {
      if (idx >= TERM_LINES.length) {
        idx = 0;
        setLines([]);
        timer = window.setTimeout(next, 1800);
        return;
      }
      const l = TERM_LINES[idx++];
      setLines((prev) => [...prev, l]);
      const delay = l.t === "cmd" ? 650 : l.t === "dim" ? 70 : 200;
      timer = window.setTimeout(next, delay);
    }

    timer = window.setTimeout(next, 500);
    return () => { if (timer) window.clearTimeout(timer); };
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  return (
    <div
      style={{
        background: "#050a05",
        border: `1.5px solid rgba(122,255,120,0.12)`,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 0 60px 10px rgba(122,255,120,0.04)",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
      }}
    >
      {/* Title bar */}
      <div style={{ background: "#081008", padding: "10px 12px", display: "flex", alignItems: "center", gap: 7, borderBottom: `1px solid rgba(122,255,120,0.08)`, minWidth: 0 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7, flexShrink: 0 }} />
        ))}
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            color: "rgba(122,255,120,0.3)",
            marginLeft: 6,
            minWidth: 0,
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          clipr-fraud@engine:~$
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        style={{
          position: "relative",
          padding: "16px 14px",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 12,
          lineHeight: 1.9,
          height: 320,
          width: "100%",
          minWidth: 0,
          maxWidth: "100%",
          boxSizing: "border-box",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {lines.map((l, i) => (
          <div key={`${l.s}-${i}`} style={{ display: "flex", gap: 9, minWidth: 0 }}>
            <span style={{ color: "rgba(122,255,120,0.25)", flexShrink: 0 }}>
              {l.t === "cmd" ? "$" : ">"}
            </span>
            <span
              style={{
                color: tColor[l.t] || "rgba(240,240,240,0.25)",
                fontWeight: l.t === "pass" || l.t === "fail" ? 500 : 400,
                animation: l.t === "blink" ? "blink .8s step-end infinite" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {l.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
