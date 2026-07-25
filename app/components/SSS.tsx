"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "../i18n/LangProvider";

export default function SSS() {
  const t = useT();
  const FAQS = t.sss.items;
  const [open, setOpen] = useState(-1);

  return (
    <section
      className="section"
      style={{
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <Reveal style={{ marginBottom: 36 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          {t.sss.eyebrow}
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(28px,3.4vw,42px)",
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          {t.sss.h2}
        </h2>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="card"
              style={{ borderRadius: 14, overflow: "hidden" }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  width: "100%",
                  padding: "20px 22px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: "var(--text)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                }}
              >
                {f.q}
                <span
                  className="mono"
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: "1px solid var(--border2)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 15,
                    color: "var(--accent-ink)",
                    transition: "transform 0.25s var(--ease)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div
                  style={{
                    padding: "0 22px 20px",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--muted)",
                    maxWidth: 820,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Reveal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          marginTop: 36,
          padding: "clamp(24px,3vw,34px)",
          borderRadius: 18,
          background: "oklch(0.7 0.11 214 / 0.09)",
          border: "1px solid oklch(0.7 0.11 214 / 0.3)",
        }}
      >
        <div>
          <div
            className="display"
            style={{
              fontSize: "clamp(19px,2vw,24px)",
              marginBottom: 6,
            }}
          >
            {t.sss.ctaTitle}
          </div>
          <div style={{ fontSize: 15, color: "var(--muted)" }}>
            {t.sss.ctaDesc}
          </div>
        </div>
        <a
          href="#iletisim"
          className="btn btn-primary"
          style={{ flex: "none" }}
        >
          {t.sss.ctaBtn}
        </a>
      </Reveal>
    </section>
  );
}
