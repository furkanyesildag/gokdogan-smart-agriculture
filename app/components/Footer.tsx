"use client";

import { useT } from "../i18n/LangProvider";

export default function Footer() {
  const t = useT();
  return (
    <footer
      className="section band"
      style={{ padding: "48px clamp(20px,5vw,64px) 32px" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: 320 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#fff",
                overflow: "hidden",
                flex: "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/gokdogan-eagle.jpg"
                alt="Gökdoğan"
                width={40}
                height={40}
                style={{ objectFit: "cover", display: "block" }}
              />
            </span>
            <span className="display" style={{ fontSize: 16 }}>
              GÖKDOĞAN TEKNOLOJİ
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--faint)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {t.footer.tagline}
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--faint2)", marginBottom: 4 }}
            >
              {t.footer.colProduct}
            </div>
            <a href="#porsuk" style={{ color: "var(--muted)" }}>
              {t.footer.linkPorsuk}
            </a>
            <a href="#hizmetler" style={{ color: "var(--muted)" }}>
              {t.footer.linkHizmetler}
            </a>
            <a href="#neden" style={{ color: "var(--muted)" }}>
              {t.footer.linkNeden}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--faint2)", marginBottom: 4 }}
            >
              {t.footer.colCompany}
            </div>
            <a href="#hakkimizda" style={{ color: "var(--muted)" }}>
              {t.footer.linkHakkimizda}
            </a>
            <a href="#iletisim" style={{ color: "var(--muted)" }}>
              {t.footer.linkIletisim}
            </a>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid var(--hair)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: "var(--faint2)",
        }}
      >
        <span>{t.footer.copyright}</span>
        <span className="mono">{t.footer.madeIn}</span>
      </div>
    </footer>
  );
}
