"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#porsuk", label: "Porsuk" },
  { href: "#ciftcidogan", label: "Çiftçi Doğan" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden", label: "Neden Akıllı Tarım", secondary: true },
  { href: "#hakkimizda", label: "Hakkımızda", secondary: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-shell">
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 13,
          color: "var(--text)",
        }}
        onClick={() => setOpen(false)}
      >
        <span
          style={{
            display: "grid",
            placeItems: "center",
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "#fff",
            boxShadow:
              "0 0 0 1px rgba(120,180,200,0.25),0 6px 20px oklch(0.7 0.11 214 / 0.3)",
            overflow: "hidden",
            flex: "none",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/gokdogan-eagle.jpg"
            alt="Gökdoğan"
            width={46}
            height={46}
            style={{ objectFit: "cover", display: "block" }}
          />
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.05,
          }}
        >
          <span
            className="display"
            style={{ fontSize: 16, letterSpacing: "0.04em" }}
          >
            GÖKDOĞAN
          </span>
          <span
            className="mono"
            style={{
              fontSize: 10.5,
              letterSpacing: "0.32em",
              color: "var(--accent-ink)",
            }}
          >
            TEKNOLOJİ
          </span>
        </span>
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(14px,1.6vw,24px)",
          fontSize: 14,
          fontWeight: 600,
          whiteSpace: "nowrap",
          minWidth: 0,
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            className={l.secondary ? "nav-secondary" : "nav-link"}
            href={l.href}
          >
            {l.label}
          </a>
        ))}
        <span className="nav-desktop-only">
          <ThemeToggle />
        </span>
        <a href="#iletisim" className="btn btn-pill nav-desktop-only">
          İletişime Geç
        </a>

        {/* Mobil: burger */}
        <button
          className="nav-burger"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            border: "1px solid var(--border2)",
            background: "transparent",
            color: "var(--text)",
            cursor: "pointer",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "relative",
              display: "block",
              width: 18,
              height: 2,
              background: "currentColor",
              borderRadius: 2,
              boxShadow: open
                ? "none"
                : "0 -6px 0 currentColor, 0 6px 0 currentColor",
              transform: open ? "rotate(45deg)" : "none",
              transition: "transform 0.2s var(--ease)",
            }}
          >
            {open && (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "currentColor",
                  borderRadius: 2,
                  transform: "rotate(90deg)",
                }}
              />
            )}
          </span>
        </button>
      </div>

      {/* Mobil açılır menü */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "12px var(--gutter) 20px",
            background: "var(--band)",
            borderBottom: "1px solid var(--hair)",
            backdropFilter: "blur(16px)",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "13px 4px",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--text)",
                borderBottom: "1px solid var(--hair)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              marginTop: 14,
            }}
          >
            <ThemeToggle />
            <a
              href="#iletisim"
              className="btn btn-pill"
              onClick={() => setOpen(false)}
            >
              İletişime Geç
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
