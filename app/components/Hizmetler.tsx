"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "../i18n/LangProvider";

export default function Hizmetler() {
  const t = useT();
  const SERVICES = t.hizmetler.items;
  const [svc, setSvc] = useState(0);
  const active = SERVICES[svc];

  return (
    <section
      id="hizmetler"
      className="section"
      style={{
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        maxWidth: 1440,
        margin: "0 auto",
        scrollMarginTop: 80,
      }}
    >
      <Reveal style={{ marginBottom: 44, maxWidth: 640 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          {t.hizmetler.eyebrow}
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(28px,3.8vw,46px)",
            lineHeight: 1.08,
            margin: 0,
            textWrap: "balance",
          }}
        >
          {t.hizmetler.h2}
        </h2>
      </Reveal>

      <Reveal className="hizmet-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {SERVICES.map((sv, i) => (
            <button
              key={sv.code}
              onClick={() => setSvc(i)}
              aria-pressed={i === svc}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                width: "100%",
                padding: "16px 18px",
                borderRadius: 12,
                border:
                  i === svc
                    ? "1px solid oklch(0.7 0.11 214 / 0.55)"
                    : "1px solid var(--border)",
                background:
                  i === svc ? "oklch(0.7 0.11 214 / 0.08)" : "var(--surface)",
                cursor: "pointer",
                textAlign: "left",
                color: i === svc ? "var(--text)" : "var(--muted)",
                transition: "all 0.25s var(--ease)",
                fontFamily: "inherit",
              }}
            >
              <span
                className="mono"
                style={{ fontSize: 12, opacity: 0.75, flex: "none" }}
              >
                {sv.code}
              </span>
              <span
                className="display"
                style={{ fontWeight: 600, fontSize: 16.5, lineHeight: 1.25 }}
              >
                {sv.title}
              </span>
              <span
                style={{ marginLeft: "auto", fontSize: 16, flex: "none" }}
              >
                →
              </span>
            </button>
          ))}
        </div>
        <div
          className="card"
          style={{
            padding: "clamp(28px,3.4vw,44px)",
            borderRadius: 20,
            minHeight: 380,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="eyebrow" style={{ letterSpacing: "0.08em", marginBottom: 16 }}>
            {t.hizmetler.solutionLabel} {active.code}
          </div>
          <h3
            className="display"
            style={{
              fontSize: "clamp(23px,2.6vw,32px)",
              lineHeight: 1.12,
              margin: "0 0 14px",
              textWrap: "balance",
            }}
          >
            {active.title}
          </h3>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: "0 0 24px",
              textWrap: "pretty",
            }}
          >
            {active.desc}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 28px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {active.points.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontSize: 15,
                  color: "var(--soft)",
                }}
              >
                <span className="diamond" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#iletisim"
            style={{
              marginTop: "auto",
              alignSelf: "flex-start",
              fontWeight: 700,
              fontSize: 15,
              color: "var(--accent-ink)",
            }}
          >
            {t.hizmetler.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
