"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useT, useLang } from "../i18n/LangProvider";

/** TR | EN dil değiştirici — mono/teal nav diline uygun, mevcut yolu korur. */
function LangSwitch() {
  const lang = useLang();
  const pathname = usePathname();
  // /en... yolundaki kök segmenti çıkar; ana sayfa için "/" kalsın.
  const base =
    lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const trHref = base;
  const enHref = base === "/" ? "/en" : `/en${base}`;

  const item = (active: boolean): React.CSSProperties => ({
    padding: "3px 7px",
    borderRadius: 6,
    color: active ? "var(--accent-ink)" : "var(--faint)",
    background: active ? "oklch(0.7 0.11 214 / 0.12)" : "transparent",
    fontWeight: active ? 600 : 500,
    transition: "color 0.2s var(--ease)",
  });

  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        fontSize: 12,
        letterSpacing: "0.08em",
        border: "1px solid var(--border2)",
        borderRadius: 8,
        padding: 2,
      }}
    >
      <Link href={trHref} style={item(lang === "tr")} aria-current={lang === "tr"}>
        TR
      </Link>
      <span aria-hidden style={{ color: "var(--border2)" }}>
        |
      </span>
      <Link href={enHref} style={item(lang === "en")} aria-current={lang === "en"}>
        EN
      </Link>
    </span>
  );
}

export default function Nav() {
  const t = useT();
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const home = lang === "en" ? "/en" : "/";
  const LINKS = [
    { href: "#porsuk", label: t.nav.porsuk },
    { href: "#ciftcidogan", label: t.nav.ciftcidogan },
    { href: "#hizmetler", label: t.nav.hizmetler },
    { href: "#neden", label: t.nav.neden, secondary: true },
    { href: "#hakkimizda", label: t.nav.hakkimizda, secondary: true },
  ];

  // scroll-shrink: hero'yu geçince nav kompaktlaşır
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="nav-shell" data-scrolled={scrolled}>
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
          className="nav-logo"
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
          <LangSwitch />
        </span>
        <span className="nav-desktop-only">
          <ThemeToggle />
        </span>
        <a href="#iletisim" className="btn btn-pill nav-desktop-only">
          {t.nav.cta}
        </a>

        {/* Mobil: burger */}
        <button
          className="nav-burger"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
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
              gap: 12,
              marginTop: 14,
            }}
          >
            <LangSwitch />
            <ThemeToggle />
          </div>
          <a
            href="#iletisim"
            className="btn btn-pill"
            onClick={() => setOpen(false)}
            style={{ marginTop: 12, justifyContent: "center" }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
