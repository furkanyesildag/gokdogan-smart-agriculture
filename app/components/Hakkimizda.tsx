"use client";

import Reveal from "./Reveal";
import { useT } from "../i18n/LangProvider";

// Zaman çizelgesi accent renkleri metinden bağımsız; sıraya göre atanır.
const TIMELINE_ACCENTS = ["var(--accent-ink)", "var(--accent-ink)", "var(--accent2-ink)"];

export default function Hakkimizda() {
  const t = useT();
  const TIMELINE = t.hakkimizda.timeline;
  return (
    <section
      id="hakkimizda"
      className="section band"
      style={{
        borderBottom: "1px solid var(--hair)",
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container hakkimizda-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            {t.hakkimizda.eyebrow}
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.08,
              margin: "0 0 20px",
              textWrap: "balance",
            }}
          >
            {t.hakkimizda.h2}
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: "0 0 16px",
              textWrap: "pretty",
            }}
          >
            {t.hakkimizda.p1}
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            {t.hakkimizda.p2}
          </p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {TIMELINE.map((item, i) => (
            <Reveal
              key={item.n}
              delay={i * 0.08}
              className="card"
              style={{
                display: "flex",
                gap: 18,
                padding: 22,
                borderRadius: 16,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: TIMELINE_ACCENTS[i],
                  flex: "none",
                  paddingTop: 2,
                }}
              >
                {item.n}
              </span>
              <div>
                <div
                  className="display"
                  style={{ fontWeight: 600, fontSize: 17, marginBottom: 5 }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
