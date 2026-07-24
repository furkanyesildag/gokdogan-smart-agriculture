"use client";

import { useEffect, useState } from "react";

/**
 * Hero alt-sol canlı telemetri şeridi.
 * constellr dersi: hero'da canlı teknik veri → anında mühendislik güveni.
 * Mevcut mono/teal dilini kullanır; reduced-motion'da statik kalır.
 */
export default function HeroTelemetry() {
  const [ha, setHa] = useState(2.4);
  const [clock, setClock] = useState("04:12");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let h = 2.4;
    let mins = 4 * 60 + 12;
    const id = setInterval(() => {
      h = h + 0.1 > 9.9 ? 0.1 : +(h + 0.1).toFixed(1);
      mins = (mins + 1) % (24 * 60);
      setHa(h);
      setClock(
        `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(
          mins % 60
        ).padStart(2, "0")}`
      );
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const sep = (
    <span style={{ color: "var(--hero-sep)", padding: "0 2px" }} aria-hidden>
      ·
    </span>
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 18,
        left: "clamp(20px,5vw,64px)",
        right: "clamp(20px,5vw,64px)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-mono), monospace",
        fontSize: 11,
        letterSpacing: "0.05em",
        color: "var(--hero-dim)",
        pointerEvents: "none",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "var(--hero-accent)",
          boxShadow: "0 0 8px var(--hero-accent)",
          animation: "blink 1.6s infinite",
          flex: "none",
        }}
      />
      <span style={{ color: "var(--hero-pipe)", letterSpacing: "0.08em" }}>
        PORSUK · CANLI SAHA
      </span>
      {sep}
      <span>
        <span style={{ color: "var(--hero-eyebrow)" }}>39.78°N</span> 30.52°E
      </span>
      {sep}
      <span>
        otonom · <span style={{ color: "var(--hero-eyebrow)" }}>aktif</span>
      </span>
      {sep}
      <span>
        <span style={{ color: "var(--hero-eyebrow)" }}>{ha.toFixed(1)}</span> ha/gün
      </span>
      {sep}
      <span suppressHydrationWarning>{clock}</span>
    </div>
  );
}
