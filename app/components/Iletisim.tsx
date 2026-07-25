"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "sent" | "error";

export default function Iletisim() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
          kvkk: fd.get("kvkk") === "on",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

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
          {status === "sent" ? (
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
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div>
                <label
                  htmlFor="contact-name"
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
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Adınız"
                  className="field"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
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
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="ornek@firma.com"
                  className="field"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
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
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Nasıl yardımcı olabiliriz?"
                  className="field"
                  style={{ resize: "vertical" }}
                />
              </div>

              <label
                htmlFor="contact-kvkk"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "var(--muted)",
                  cursor: "pointer",
                }}
              >
                <input
                  id="contact-kvkk"
                  name="kvkk"
                  type="checkbox"
                  required
                  style={{ marginTop: 3, accentColor: "var(--accent)", flex: "none" }}
                />
                <span>
                  <a
                    href="/gizlilik"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent-ink)" }}
                  >
                    KVKK Aydınlatma Metni
                  </a>
                  ni okudum; kişisel verilerimin iletişim amacıyla işlenmesini
                  onaylıyorum.
                </span>
              </label>

              {status === "error" && (
                <div
                  role="alert"
                  style={{
                    fontSize: 14,
                    color: "var(--accent2-ink)",
                    background: "oklch(0.62 0.19 40 / 0.1)",
                    border: "1px solid oklch(0.62 0.19 40 / 0.3)",
                    borderRadius: 10,
                    padding: "10px 14px",
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary"
                style={{
                  justifyContent: "center",
                  padding: 15,
                  borderRadius: 11,
                  fontFamily: "var(--font-display), sans-serif",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "wait" : "pointer",
                }}
              >
                {status === "loading" ? "Gönderiliyor…" : "Gönder →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
