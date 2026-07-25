"use client";

import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { useT } from "../i18n/LangProvider";

export default function Neden() {
  const t = useT();
  const STATS = t.neden.stats;
  return (
    <section
      id="neden"
      className="section band"
      style={{
        borderBottom: "1px solid var(--hair)",
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container neden-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            {t.neden.eyebrow}
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
            {t.neden.h2}
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            {t.neden.p}
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {STATS.map((s, i) => (
            <CountUp
              key={s.label}
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
