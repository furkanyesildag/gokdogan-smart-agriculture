"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Porsuk nasıl çalışıyor, sürücü gerekiyor mu?",
    a: "Hayır. Porsuk tamamen otonomdur: rota planını kendisi çıkarır, engelden kaçınır, sensörleriyle toprağı satır satır ölçer ve sonuçları yapay zekâ ile parsel raporuna dönüştürür.",
  },
  {
    q: "Çiftçi Doğan için özel donanım almam gerekir mi?",
    a: "Gerekmez. Çiftçi Doğan uydu tabanlıdır; parselinizi tanımlamanız yeterli. Teşhis ve eylem önerileri Telegram botu ve otomatik PDF raporlarıyla size ulaşır.",
  },
  {
    q: "Teşhisler ne sıklıkla güncelleniyor?",
    a: "Her gün. Optik ve radar uydu geçişleri, güncel hava ve piyasa verisiyle birleştirilir; bulutlu günlerde radar ölçümleri devreye girer.",
  },
  {
    q: "Ham teknik değerleri yorumlamam gerekecek mi?",
    a: "Hayır — farkımız tam burada. Ham teknik verileri arka planda işler, size sade Türkçe bir teşhis ve somut bir eylem sunarız: \"48 saat içinde sulama yapın\" gibi.",
  },
  {
    q: "Nasıl başlarım?",
    a: "İletişim formundan bize ulaşın; parselinizi birlikte tanımlayıp aynı hafta içinde ilk raporunuzu üretelim.",
  },
];

export default function SSS() {
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
          // SIK SORULANLAR
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(28px,3.4vw,42px)",
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          Aklınızda kalanlar
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
            Sorunuz mu var?
          </div>
          <div style={{ fontSize: 15, color: "var(--muted)" }}>
            Ekibimiz canlı demo ve teknik detaylar için hazır.
          </div>
        </div>
        <a
          href="#iletisim"
          className="btn btn-primary"
          style={{ flex: "none" }}
        >
          Uzmanla görüşün →
        </a>
      </Reveal>
    </section>
  );
}
