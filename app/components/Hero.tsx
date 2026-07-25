"use client";

import SoilCanvas from "./SoilCanvas";
import { useT } from "../i18n/LangProvider";

export default function Hero() {
  const t = useT();
  return (
    <header
      id="top"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        background: "var(--hero-bg)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <div
        className="hero-veil-el"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--hero-veil)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-veil-el"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
          background: "var(--hero-veil-b)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          margin: "0 auto",
          padding:
            "clamp(64px,9vw,120px) clamp(20px,5vw,64px) clamp(80px,9vw,120px)",
          minHeight: "clamp(540px,72vh,780px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 9,
            padding: "7px 14px",
            border: "1px solid var(--hero-eyebrow-border)",
            borderRadius: 99,
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "var(--hero-eyebrow)",
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--hero-accent)",
              animation: "blink 1.8s infinite",
            }}
          />
          {t.hero.eyebrow}
        </div>
        <h1
          className="display"
          style={{
            fontSize: "clamp(42px,6.4vw,84px)",
            lineHeight: 1,
            margin: "0 0 24px",
            textWrap: "balance",
            color: "var(--hero-text)",
            maxWidth: 820,
          }}
        >
          {t.hero.h1Pre}
          <span style={{ color: "var(--hero-accent)" }}>{t.hero.h1Accent}</span>
          {t.hero.h1Post}
        </h1>
        <div
          className="mono"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
            fontSize: 12.5,
            letterSpacing: "0.12em",
            color: "var(--hero-pipe)",
            margin: "0 0 28px",
            textTransform: "uppercase",
          }}
        >
          <span>{t.hero.pipe1}</span>
          <span style={{ color: "var(--hero-sep)" }} aria-hidden>
            |
          </span>
          <span>{t.hero.pipe2}</span>
          <span style={{ color: "var(--hero-sep)" }} aria-hidden>
            |
          </span>
          <span style={{ color: "var(--hero-eyebrow)" }}>{t.hero.pipe3}</span>
        </div>
        <p
          style={{
            fontSize: "clamp(16px,1.5vw,19px)",
            lineHeight: 1.6,
            color: "var(--hero-muted)",
            maxWidth: 560,
            margin: "0 0 36px",
            textWrap: "pretty",
          }}
        >
          {t.hero.pPre}
          <b style={{ color: "var(--hero-text)" }}>{t.hero.pBrand}</b>
          {t.hero.pPost}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a href="#porsuk" className="btn btn-hero-primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#iletisim" className="btn btn-hero-ghost">
            {t.hero.ctaGhost}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 38,
            marginTop: 52,
            flexWrap: "wrap",
          }}
        >
          {t.hero.stats.map(({ big, small }) => (
            <div key={small}>
              <div
                className="display"
                style={{ fontSize: 26, color: "var(--hero-text)" }}
              >
                {big}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  color: "var(--hero-dim)",
                  letterSpacing: "0.03em",
                }}
              >
                {small}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-canvas-wrap">
        <SoilCanvas />
      </div>
    </header>
  );
}
