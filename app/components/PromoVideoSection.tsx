"use client";

import { CREAM, ORANGE, TEXT_SECONDARY, BORDER } from "../constants/theme";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function PromoVideoSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="product-tour"
      className="landing-section-pad--promo"
      style={{ maxWidth: 1120, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div className="section-badge reveal" style={{ marginBottom: 24 }}>
          Product tour
        </div>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px,4vw,34px)",
            letterSpacing: "-0.05em",
            lineHeight: "120%",
            color: CREAM,
            margin: "0 0 12px",
          }}
        >
          See <span style={{ color: ORANGE }}>Clipr</span> in motion
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 15,
            color: TEXT_SECONDARY,
            lineHeight: 1.65,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          A quick walkthrough of onboarding, dashboards, and analytics
        </p>
      </div>

      <div
        className="antigrid-card reveal"
        style={{
          padding: 0,
          overflow: "hidden",
          border: `1px solid ${BORDER}`,
        }}
      >
        {/* Reserve 16:9 space so layout doesn’t collapse before the file loads */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            height: 0,
            background: "#000",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Clipr product tour video: creator and clipper experience"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "contain",
            }}
          >
            <source src="/CliprPromo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
