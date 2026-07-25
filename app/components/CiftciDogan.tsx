"use client";

import Reveal from "./Reveal";
import OrbitCanvas from "./OrbitCanvas";
import { useT } from "../i18n/LangProvider";

// Kart accent renkleri metinden bağımsız; dizideki sıraya göre atanır.
const CARD_ACCENTS = ["var(--accent-ink)", "var(--accent-ink)", "var(--accent2-ink)"];

export default function CiftciDogan() {
  const t = useT();
  const c = t.ciftci;
  const CARDS = c.cards;
  const SOURCES = c.sources;
  return (
    <section
      id="ciftcidogan"
      className="section band"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container">
        <Reveal
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              width: 66,
              height: 66,
              borderRadius: 18,
              background: "#fff",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 10px 30px oklch(0.65 0.18 40 / 0.2)",
              flex: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/ciftci-dogan.svg"
              alt="Çiftçi Doğan"
              style={{ width: 46, height: 46, display: "block" }}
            />
          </span>
          <div>
            <div className="eyebrow eyebrow--2" style={{ marginBottom: 7 }}>
              {c.eyebrow}
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(30px,4.4vw,56px)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Çiftçi Doğan
            </h2>
          </div>
        </Reveal>

        <Reveal
          as="p"
          style={{
            fontSize: "clamp(17px,1.6vw,20px)",
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: 760,
            margin: "0 0 48px",
            textWrap: "pretty",
          }}
        >
          {c.introPre}
          <b style={{ color: "var(--text)" }}>{c.introBold}</b>
          {c.introPost}
        </Reveal>

        <div className="ciftci-compare">
          <Reveal
            className="card"
            style={{ padding: "clamp(24px,3vw,36px)", borderRadius: 20 }}
          >
            <div className="eyebrow eyebrow--2" style={{ marginBottom: 22 }}>
              {c.compareEyebrow}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 16,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: 18,
                  borderRadius: 14,
                  background: "var(--input)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "var(--faint)",
                    marginBottom: 14,
                  }}
                >
                  {c.rivalTitle}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 13,
                    lineHeight: 2,
                    color: "var(--faint2)",
                  }}
                >
                  {c.rivalLines.map((line) => (
                    <div key={line} style={{ whiteSpace: "nowrap" }}>
                      {line}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 14,
                    fontSize: 12,
                    color: "var(--faint)",
                    lineHeight: 1.5,
                  }}
                >
                  {c.rivalNote}
                </div>
              </div>
              <div
                className="display"
                style={{ fontSize: 26, color: "var(--accent2)" }}
              >
                →
              </div>
              <div
                style={{
                  padding: 18,
                  borderRadius: 14,
                  background: "oklch(0.7 0.11 214 / 0.08)",
                  border: "1px solid oklch(0.7 0.11 214 / 0.35)",
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "var(--accent-ink)",
                    marginBottom: 14,
                  }}
                >
                  {c.brand}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--accent-ink)",
                    marginBottom: 4,
                  }}
                >
                  {c.diagLabel}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--text)",
                    marginBottom: 14,
                  }}
                >
                  {c.diagText}
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--accent2-ink)",
                    marginBottom: 4,
                  }}
                >
                  {c.actionLabel}
                </div>
                <div
                  style={{ fontSize: 14, lineHeight: 1.5, color: "var(--text)" }}
                >
                  {c.actionText}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="card"
            style={{
              padding: "clamp(24px,3vw,32px)",
              borderRadius: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingBottom: 18,
                borderBottom: "1px solid var(--border)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "grid",
                  placeItems: "center",
                  flex: "none",
                  boxShadow: "0 0 0 1px var(--border)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/ciftci-dogan.svg"
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span
                    className="display"
                    style={{ fontWeight: 600, fontSize: 15 }}
                  >
                    {c.botName}
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      padding: "2px 6px",
                      borderRadius: 5,
                      background: "oklch(0.7 0.11 214 / 0.15)",
                      color: "var(--accent-ink)",
                    }}
                  >
                    {c.botTag}
                  </span>
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--faint)" }}
                >
                  {c.botTime}
                </div>
              </div>
            </div>
            <div
              style={{
                background: "oklch(0.7 0.11 214 / 0.08)",
                border: "1px solid oklch(0.7 0.11 214 / 0.22)",
                borderRadius: "4px 16px 16px 16px",
                padding: 18,
                fontSize: 14.5,
                lineHeight: 1.62,
                color: "var(--text)",
                textWrap: "pretty",
              }}
            >
              {c.msgPre}
              <b style={{ color: "var(--accent-ink)" }}>{c.msgBold1}</b>
              {c.msgMid}
              <b style={{ color: "var(--text)" }}>{c.msgBold2}</b>
              {c.msgPost}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 14,
                padding: "12px 14px",
                borderRadius: 12,
                background: "var(--input)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                className="mono"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  background: "var(--accent2)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 10,
                  fontWeight: 600,
                  flex: "none",
                }}
              >
                PDF
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>
                  {c.pdfFile}
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--faint)" }}
                >
                  {c.pdfMeta}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18,
            marginTop: 24,
          }}
        >
          {CARDS.map((card, i) => (
            <Reveal key={card.n} delay={i * 0.08} className="card" style={{ padding: 26, borderRadius: 16 }}>
              <div
                className="mono"
                style={{ fontSize: 12, color: CARD_ACCENTS[i], marginBottom: 12 }}
              >
                {card.n}
              </div>
              <div
                className="display"
                style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.55,
                }}
              >
                {card.desc}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: 56 }}>
          <div className="eyebrow" style={{ letterSpacing: "0.08em", marginBottom: 20 }}>
            {c.sourcesEyebrow}
          </div>
          <div className="sources-grid">
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--scene-bg2)",
                minHeight: 400,
              }}
            >
              <OrbitCanvas />
              <div
                className="mono"
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "#7d99a3",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#3ac6de",
                    animation: "blink 1.6s infinite",
                  }}
                />
                {c.orbitHud}
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                alignContent: "start",
              }}
            >
              {SOURCES.map((src) => (
                <div
                  key={src.name}
                  className="card card-hover"
                  style={{ padding: 22, borderRadius: 14 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      className="display"
                      style={{ fontWeight: 600, fontSize: 16 }}
                    >
                      {src.name}
                    </span>
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.06em",
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "oklch(0.7 0.11 214 / 0.12)",
                        color: "var(--accent-ink)",
                      }}
                    >
                      {src.tag}
                    </span>
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 12.5,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {src.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
