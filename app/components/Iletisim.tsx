"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Iletisim() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="iletisim"
      className="section"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(20px,5vw,64px)",
        maxWidth: 1440,
        margin: "0 auto",
        scrollMarginTop: 80,
      }}
    >
      <div className="iletisim-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            // İLETİŞİM
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(30px,4vw,52px)",
              lineHeight: 1.05,
              margin: "0 0 20px",
              textWrap: "balance",
            }}
          >
            Sahayı birlikte geleceğe taşıyalım.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: "0 0 34px",
              maxWidth: 440,
              textWrap: "pretty",
            }}
          >
            Porsuk ve akıllı tarım çözümlerimiz hakkında bilgi almak, iş birliği
            ya da demo talebiniz için bize yazın.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              href="mailto:info@gokdoganlar.com"
              className="card"
              style={{ padding: "16px 18px", borderRadius: 12, display: "block", color: "var(--text)" }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--faint)",
                  marginBottom: 5,
                }}
              >
                E-POSTA
              </div>
              <div style={{ fontSize: 16 }}>info@gokdoganlar.com</div>
            </a>
            <div
              className="card"
              style={{ padding: "16px 18px", borderRadius: 12 }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--faint)",
                  marginBottom: 6,
                }}
              >
                MERKEZ
              </div>
              <div style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 2 }}>
                Gökdoğan Teknoloji San. ve Tic. A.Ş.
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.55,
                }}
              >
                Üniversiteler Mah., Şht. J. Astgm. Mustafa Tayyar Can Cd. No: 5,
                06800 Çankaya / Ankara
              </div>
            </div>

            {/* Harita + yol tarifi */}
            <div
              className="card"
              style={{ padding: 0, borderRadius: 14, overflow: "hidden" }}
            >
              <iframe
                title="Gökdoğan Teknoloji konumu"
                src="https://maps.google.com/maps?q=G%C3%B6kdo%C4%9Fan%20Teknoloji%2C%20%C5%9Eht.%20J.%20Astgm.%20Mustafa%20Tayyar%20Can%20Cd.%20No%3A5%2C%2006800%20%C3%87ankaya%20Ankara&z=15&output=embed"
                width="100%"
                height={200}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block", filter: "grayscale(0.2)" }}
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=G%C3%B6kdo%C4%9Fan%20Teknoloji%2C%20%C5%9Eht.%20J.%20Astgm.%20Mustafa%20Tayyar%20Can%20Cd.%20No%3A5%2C%2006800%20%C3%87ankaya%20Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "13px 16px",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  color: "var(--accent-ink)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span>▸ YOL TARİFİ AL</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="card"
          style={{ padding: "clamp(24px,3vw,38px)", borderRadius: 20 }}
        >
          {sent ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 340,
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "oklch(0.74 0.11 214 / 0.16)",
                  color: "var(--accent-ink)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 30,
                }}
              >
                ✓
              </div>
              <div
                className="display"
                style={{ fontSize: 22 }}
              >
                Mesajınız alındı
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  maxWidth: 280,
                }}
              >
                En kısa sürede size geri dönüş yapacağız. İlginiz için
                teşekkürler.
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div>
                <label
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--faint)",
                    marginBottom: 7,
                  }}
                >
                  AD SOYAD
                </label>
                <input required placeholder="Adınız" className="field" />
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--faint)",
                    marginBottom: 7,
                  }}
                >
                  E-POSTA
                </label>
                <input
                  required
                  type="email"
                  placeholder="ornek@firma.com"
                  className="field"
                />
              </div>
              <div>
                <label
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--faint)",
                    marginBottom: 7,
                  }}
                >
                  MESAJINIZ
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Nasıl yardımcı olabiliriz?"
                  className="field"
                  style={{ resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  justifyContent: "center",
                  padding: 15,
                  borderRadius: 11,
                  fontFamily: "var(--font-display), sans-serif",
                }}
              >
                Gönder →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
