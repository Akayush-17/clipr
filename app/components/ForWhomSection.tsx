"use client";

import { useState } from "react";
import { CREAM, GREEN, ORANGE, BORDER, TEXT_SECONDARY, TEXT_MUTED } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Props = { isCreator: boolean };

/* ── SVG Icons ── */
const GamepadIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="11" x2="10" y2="11" /><line x1="8" y1="9" x2="8" y2="13" />
    <line x1="15" y1="12" x2="15.01" y2="12" /><line x1="18" y1="10" x2="18.01" y2="10" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);
const MicIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);
const MonitorPlayIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    <polygon points="10,8 10,13 14.5,10.5" fill={color} opacity="0.5" stroke="none" />
  </svg>
);
const PlayCircleIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polygon points="10,8 10,16 16,12" fill={color} opacity="0.4" stroke="none" />
  </svg>
);
const NewspaperIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" /><path d="M15 18h-5" /><rect x="10" y="6" width="8" height="5" rx="1" />
  </svg>
);
const MusicIcon = ({ color = "currentColor", size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
);

const nicheIcons = [GamepadIcon, MicIcon, MonitorPlayIcon, PlayCircleIcon, NewspaperIcon, MusicIcon];

/* ── Thumbnail component ── */
type Thumb = { title: string; channel: string; views: string; duration: string; gradient: string };

function Thumbnail({ thumb, color }: { thumb: Thumb; color: string }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", background: "#171717", border: `1px solid ${BORDER}`, transition: "border-color .15s", cursor: "pointer" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = BORDER; }}
    >
      {/* Thumbnail image area */}
      <div style={{ position: "relative", height: 90, background: thumb.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Play button */}
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polygon points="3,1 3,11 10,6" fill="#fff" /></svg>
        </div>
        {/* Duration badge */}
        <span style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(0,0,0,0.75)", borderRadius: 4, padding: "2px 5px", fontSize: 9, color: "#fff", fontFamily: "var(--font-geist-mono), monospace", fontWeight: 600 }}>
          {thumb.duration}
        </span>
        {/* Platform dot */}
        <span style={{ position: "absolute", top: 6, left: 6, background: "rgba(0,0,0,0.55)", borderRadius: 50, padding: "2px 7px", fontSize: 9, color, fontWeight: 600 }}>
          Reels
        </span>
      </div>
      {/* Info */}
      <div style={{ padding: "8px 10px" }}>
        <div style={{ fontSize: 11, color: CREAM, fontWeight: 500, lineHeight: 1.3, marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {thumb.title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: TEXT_MUTED }}>
          <span>{thumb.channel}</span>
          <span>{thumb.views}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Thumbnail data per niche ── */
const nicheThumbnails: Thumb[][] = [
  // Gamers
  [
    { title: "Clutch 1v4 Ace in Valorant Ranked", channel: "@ProGamerRaj", views: "1.2L views", duration: "0:28", gradient: "linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)" },
    { title: "BGMI Best Moments Compilation", channel: "@MobileFrenzy", views: "89k views", duration: "0:34", gradient: "linear-gradient(135deg, #0f172a 0%, #312e81 50%, #6366f1 100%)" },
    { title: "This GTA Heist Went Wrong...", channel: "@StreamKing", views: "2.4L views", duration: "0:22", gradient: "linear-gradient(135deg, #1e1b4b 0%, #5b21b6 50%, #a78bfa 100%)" },
  ],
  // Podcasters
  [
    { title: "\"Startup founders lie about ARR\"", channel: "@BizTalkDaily", views: "4.1L views", duration: "0:48", gradient: "linear-gradient(135deg, #431407 0%, #9a3412 50%, #f97316 100%)" },
    { title: "Why 90% of MBA grads fail", channel: "@RealTalkPod", views: "1.8L views", duration: "0:55", gradient: "linear-gradient(135deg, #451a03 0%, #b45309 50%, #fbbf24 100%)" },
    { title: "This investing hack is illegal?", channel: "@MoneyMinds", views: "67k views", duration: "0:42", gradient: "linear-gradient(135deg, #3b1106 0%, #c2410c 50%, #fb923c 100%)" },
  ],
  // Streamers
  [
    { title: "Rage quit after 6 hour stream", channel: "@LiveWithAman", views: "3.2L views", duration: "0:18", gradient: "linear-gradient(135deg, #042f2e 0%, #0e7490 50%, #06b6d4 100%)" },
    { title: "Subscriber goal reached LIVE", channel: "@NightOwlGG", views: "1.1L views", duration: "0:31", gradient: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #38bdf8 100%)" },
    { title: "Chat made me do this challenge", channel: "@VibeStream", views: "56k views", duration: "0:25", gradient: "linear-gradient(135deg, #083344 0%, #155e75 50%, #22d3ee 100%)" },
  ],
  // YouTubers
  [
    { title: "I tested every budget phone in India", channel: "@TechVerdict", views: "8.4L views", duration: "0:44", gradient: "linear-gradient(135deg, #450a0a 0%, #b91c1c 50%, #ef4444 100%)" },
    { title: "Cooking street food for 24 hours", channel: "@FoodieRoads", views: "2.1L views", duration: "0:38", gradient: "linear-gradient(135deg, #4c0519 0%, #be123c 50%, #fb7185 100%)" },
    { title: "What nobody tells you about IITs", channel: "@CampusReal", views: "5.6L views", duration: "0:52", gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #f87171 100%)" },
  ],
  // News
  [
    { title: "Budget 2025: Key highlights in 60s", channel: "@NewsFlash", views: "12L views", duration: "0:58", gradient: "linear-gradient(135deg, #022c22 0%, #047857 50%, #34d399 100%)" },
    { title: "RBI rate decision — what it means", channel: "@FinanceNow", views: "3.4L views", duration: "0:30", gradient: "linear-gradient(135deg, #052e16 0%, #15803d 50%, #4ade80 100%)" },
    { title: "Election results: State by state", channel: "@IndiaUpdate", views: "8.9L views", duration: "0:45", gradient: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #6ee7b7 100%)" },
  ],
  // Music
  [
    { title: "This hook is going viral on Reels", channel: "@BeatDrop", views: "6.2L views", duration: "0:15", gradient: "linear-gradient(135deg, #500724 0%, #be185d 50%, #ec4899 100%)" },
    { title: "Dance trend — new Punjabi track", channel: "@ViralBeats", views: "4.8L views", duration: "0:22", gradient: "linear-gradient(135deg, #4a044e 0%, #a21caf 50%, #e879f9 100%)" },
    { title: "Lip sync challenge — week 3", channel: "@MusicMoods", views: "1.9L views", duration: "0:18", gradient: "linear-gradient(135deg, #831843 0%, #db2777 50%, #f472b6 100%)" },
  ],
];

export default function ForWhomSection({ isCreator }: Props) {
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal();

  const creatorNiches = [
    { label: "Gamers", color: "#8b5cf6", pain: "Your best clutch moments never get seen beyond your stream.", fix: "Clippers cut your highlights into Reels & Shorts. Every kill, every win — on 50 channels overnight.", metric: "Avg +2.4L views per campaign", clips: ["Best kills compilation", "Tutorial clips", "Reaction shorts", "Stream highlights"] },
    { label: "Podcasters", color: ORANGE, pain: "Long-form episodes don't travel. You lose the 90% who won't watch 2 hours.", fix: "Clippers extract your sharpest 60-second takes and push them to the audiences who'll binge your full episodes.", metric: "Avg 3.1x listener growth", clips: ["Hot takes", "Controversial quotes", "Advice moments", "Funny exchanges"] },
    { label: "Streamers", color: "#06b6d4", pain: "Your stream VODs die in 24 hours. YouTube clips help but you don't have time to edit.", fix: "Clippers watch your VODs, find the moments, and post them. You just keep streaming.", metric: "Avg 18+ clips per stream", clips: ["Rage moments", "Big wins", "Viewer interactions", "Hype clips"] },
    { label: "YouTubers", color: "#ef4444", pain: "You spend 10 hours making a video. Instagram only sees it if you manually clip it.", fix: "Set a bounty on your video. Clippers handle Reels, Shorts, and Moj — you focus on making more content.", metric: "Avg 40k saved per video", clips: ["Highlights", "Chapters", "Quotes", "Behind-the-scenes"] },
    { label: "News", color: GREEN, pain: "Breaking news dies in the feed within hours. Mobile audiences are on Reels, not YouTube.", fix: "Set micro-bounties on breaking stories. Clippers distribute 30-second summaries to short-form audiences instantly.", metric: "Avg 4.8x faster reach", clips: ["Breaking summaries", "Expert bytes", "Live clips", "Explainers"] },
    { label: "Music", color: "#ec4899", pain: "New songs need viral moments. Music labels charge 2-5L for a single campaign.", fix: "Set a song clip bounty. Clippers make lip-sync clips, dance covers, and music moments — you pay per view.", metric: "Avg 8L streams per 15k", clips: ["Lyric moments", "Hook clips", "Dance trends", "Behind the studio"] },
  ];

  const clipperNiches = [
    { label: "Gaming", color: "#8b5cf6", pain: "Gaming clips are the easiest to make go viral — reaction hooks, clutch moments, rage edits.", fix: "Find gaming bounties, clip the best 30-second moments from VODs, and post on your Reels.", metric: "Avg 7/1k views", clips: ["Pick campaigns with 4hr+ VODs", "Look for clutch moments & big wins", "Short vertical cuts with hooks", "Post across Reels + Shorts"] },
    { label: "Podcasts", color: ORANGE, pain: "Podcast clips are underrated — a sharp 45-second opinion can blow up overnight.", fix: "Find the most opinionated or controversial moment. Clip it, add captions, post.", metric: "Avg 6/1k views", clips: ["Scan for strong opinions", "Add bold captions", "One hook in the first 3s", "Finance & tech pay highest"] },
    { label: "Streamers", color: "#06b6d4", pain: "Streamers go live for hours — most clippers ignore them. That's your edge.", fix: "Watch stream VODs, find the hype moments, and post fast. The first clipper to post a moment wins.", metric: "Avg 7/1k views", clips: ["Check VODs within 6 hours", "Hype & rage clips work best", "Keep it under 30s", "Use their catchphrases"] },
    { label: "YouTubers", color: "#ef4444", pain: "YouTubers have huge libraries. Most old videos have never been clipped.", fix: "Search back catalogues. A 2-year-old moment can still go viral if never clipped. Less competition, same payout.", metric: "Avg 6.5/1k views", clips: ["Mine old videos", "Pull quotable 20-40s windows", "Add text overlays", "Lifestyle & tech pay well"] },
    { label: "News", color: GREEN, pain: "News clips pay fast — short campaigns, quick turnaround, and breaking content always gets views.", fix: "News micro-bounties open and close within hours. These are small clips (15-30 sec) with fast payouts.", metric: "Avg 5/1k views", clips: ["Enable push alerts", "Keep edits minimal", "Post within 2 hours", "Subtitles essential"] },
    { label: "Music", color: "#ec4899", pain: "Music clips are fun, fast to make, and the algo loves them.", fix: "Clip the catchiest 15-30 seconds. Post as Reel using original audio. Trending audio = passive earning.", metric: "Avg 8/1k views", clips: ["Use original audio track", "Clip the hook/chorus", "Dance trends perform best", "Longest earning tail"] },
  ];

  const niches = isCreator ? creatorNiches : clipperNiches;
  const n = niches[active];
  const ActiveIcon = nicheIcons[active];
  const thumbs = nicheThumbnails[active];

  const colorRgb = (c: string) => {
    if (c === ORANGE) return "249,115,22";
    if (c === GREEN) return "122,255,120";
    if (c === "#8b5cf6") return "139,92,246";
    if (c === "#06b6d4") return "6,182,212";
    if (c === "#ef4444") return "239,68,68";
    return "236,72,153";
  };

  return (
    <section ref={sectionRef as any} id="for-whom" style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="section-badge reveal" style={{ marginBottom: 24 }}>
          {isCreator ? "Built for your niche" : "Pick your campaign niche"}
        </div>
        <h2 className="reveal" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,34px)", letterSpacing: "-0.05em", lineHeight: "120%", color: CREAM, margin: "0 0 12px" }}>
          {isCreator ? <>Who is Clipr <span style={{ color: ORANGE }}>made for?</span></> : <>Which niche <span style={{ color: GREEN }}>should you clip?</span></>}
        </h2>
        <p className="reveal" style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.65, maxWidth: 500, margin: "0 auto" }}>
          {isCreator ? "Every creator type has a different pain. Clipr has a specific fix for each." : "Different niches, different strategies, different earnings."}
        </p>
      </div>

      {/* Niche icon grid */}
      <div className="niche-grid reveal-card" style={{ marginBottom: 32 }}>
        {niches.map((ni, i) => {
          const Icon = nicheIcons[i];
          return (
            <button key={ni.label} onClick={() => setActive(i)} style={{ padding: "18px 8px", borderRadius: 14, border: `2px solid ${active === i ? ni.color : "#141414"}`, background: active === i ? `rgba(${colorRgb(ni.color)},0.08)` : "#141414", color: active === i ? ni.color : TEXT_MUTED, cursor: "pointer", transition: "all .15s cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
              <Icon color={active === i ? ni.color : TEXT_MUTED} size={28} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "-0.02em" }}>{ni.label}</span>
            </button>
          );
        })}
      </div>

      {/* Thumbnails row */}
      <div
        key={`thumbs-${active}`}
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}
        className="grid-3col"
      >
        {thumbs.map((t) => (
          <Thumbnail key={t.title} thumb={t} color={n.color} />
        ))}
      </div>

      {/* Content card */}
      <div
        key={active + (isCreator ? "-c" : "-k")}
        className="antigrid-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ height: 3, background: `linear-gradient(90deg, ${n.color}, transparent 80%)` }} />

        <div className="niche-content-grid">
          {/* Pain + Fix */}
          <div style={{ padding: "28px 28px", borderRight: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: TEXT_MUTED, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
              {isCreator ? "The pain" : "Why this niche"}
            </div>
            <p style={{ fontSize: 15, color: CREAM, lineHeight: 1.7, borderLeft: `2px solid rgba(${colorRgb(n.color)},0.4)`, paddingLeft: 14, margin: "0 0 24px" }}>
              &ldquo;{n.pain}&rdquo;
            </p>
            <div style={{ fontSize: 10, color: TEXT_MUTED, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
              {isCreator ? "The Clipr fix" : "Your strategy"}
            </div>
            <p style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.7, margin: 0 }}>{n.fix}</p>
          </div>

          {/* Clips / tips */}
          <div style={{ padding: "28px 24px", borderRight: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: TEXT_MUTED, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 16 }}>
              {isCreator ? "Clip types" : "Strategy tips"}
            </div>
            {n.clips.map((c, i) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: CREAM, padding: "8px 0", borderBottom: i < n.clips.length - 1 ? `1px solid ${BORDER}` : undefined }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: n.color, flexShrink: 0, opacity: 0.8 }} />
                {c}
              </div>
            ))}
          </div>

          {/* Metric panel */}
          <div style={{ padding: "28px 20px", background: `rgba(${colorRgb(n.color)},0.04)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 10 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: `rgba(${colorRgb(n.color)},0.1)`, border: `1px solid rgba(${colorRgb(n.color)},0.2)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ActiveIcon color={n.color} size={28} />
            </div>
            <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800, fontSize: 18, color: n.color, letterSpacing: -0.5, lineHeight: 1.3 }}>
              {n.metric}
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, lineHeight: 1.4 }}>
              {isCreator ? "across early beta campaigns" : "typical earning rate"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
