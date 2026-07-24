"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Algıla",
    tag: "01 · ALGILA",
    numPad: "01",
    heading: "Tarlayı satır satır tarar",
    body: "Porsuk, sahaya girdiği andan itibaren otonom rota planına göre ilerler ve üzerindeki sensör dizisiyle toprağı sürekli ölçer.",
    points: [
      "Çoklu sensör + kamera füzyonu",
      "GPS/RTK ile hassas konumlama",
      "Engelden kaçınma ve güvenli otonomi",
    ],
    mono: "> sensör akışı aktif · 12 kanal · 40 Hz",
  },
  {
    title: "Analiz et",
    tag: "02 · ANALİZ ET",
    numPad: "02",
    heading: "Yapay zekâ toprağı yorumlar",
    body: "Toplanan ham veri, analiz agent'ında işlenir; toprağın besin değeri, nem ve verim potansiyeli gerçek zamanlı olarak modellenir.",
    points: [
      "pH, nem, N-P-K ve organik madde çıkarımı",
      "Verim ve uygunluk modelleri",
      "Anomali ve risk tespiti",
    ],
    mono: "> model: soil-suit-v3 · güven %94",
  },
  {
    title: "Öner",
    tag: "03 · ÖNER",
    numPad: "03",
    heading: "Ne ekileceğine karar verir",
    body: "Karar agent'ı, analiz sonuçlarını değerlendirerek parsel bazında ekim önerisi ve uygulama planı üretir.",
    points: [
      "Parsel bazlı ürün önerisi",
      "Girdi (gübre/su) optimizasyonu",
      "İndirilebilir rapor ve harita çıktısı",
    ],
    mono: "> öneri: Buğday %91 · Arpa %84",
  },
];

const SENSORS = [
  { code: "S·01", name: "Toprak Probu", desc: "pH, nem, sıcaklık ve iletkenlik ölçümü" },
  { code: "S·02", name: "Multispektral Kamera", desc: "Bitki ve toprak sağlığı için spektral görüntü" },
  { code: "S·03", name: "GPS / RTK", desc: "Santimetre hassasiyetinde konumlama" },
  { code: "S·04", name: "Çevre Sensörleri", desc: "Hava sıcaklığı, nem ve ortam koşulları" },
  { code: "S·05", name: "Batarya & Tahrik", desc: "Şarj edilebilir elektrikli otonom sürüş" },
  { code: "S·06", name: "Edge AI Ünitesi", desc: "Sahada gerçek zamanlı model çalıştırma" },
];

export default function Porsuk() {
  const [step, setStep] = useState(0);
  const active = STEPS[step];

  return (
    <section
      id="porsuk"
      className="section"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(20px,5vw,64px)",
        maxWidth: 1440,
        margin: "0 auto",
        scrollMarginTop: 80,
      }}
    >
      <Reveal
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            // KAHRAMAN ÜRÜN
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(34px,5vw,64px)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Porsuk
          </h2>
        </div>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: 440,
            margin: 0,
            textWrap: "pretty",
          }}
        >
          Otonom insansız kara aracı. İnsan müdahalesi olmadan tarlayı gezer,
          toprağı satır satır tarar ve yapay zekâ ile ekim kararını üretir.
        </p>
      </Reveal>

      <Reveal
        className="card"
        style={{ borderRadius: 22, overflow: "hidden" }}
      >
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid var(--border)",
          }}
          role="tablist"
        >
          {STEPS.map((d, i) => (
            <button
              key={d.title}
              role="tab"
              aria-selected={i === step}
              onClick={() => setStep(i)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
                padding: "20px clamp(16px,2.5vw,28px)",
                background:
                  i === step ? "oklch(0.74 0.11 214 / 0.1)" : "transparent",
                border: "none",
                borderRight: "1px solid var(--border)",
                borderBottom:
                  i === step
                    ? "2px solid var(--accent)"
                    : "2px solid transparent",
                cursor: "pointer",
                textAlign: "left",
                color: i === step ? "var(--text)" : "var(--faint)",
                transition: "all 0.25s var(--ease)",
              }}
            >
              <span className="mono" style={{ fontSize: 12, opacity: 0.7 }}>
                0{i + 1}
              </span>
              <span
                className="display"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(15px,1.6vw,18px)",
                }}
              >
                {d.title}
              </span>
            </button>
          ))}
        </div>
        <div className="porsuk-panel">
          <div style={{ padding: "clamp(28px,4vw,52px)" }}>
            <div
              className="eyebrow"
              style={{ letterSpacing: "0.08em", marginBottom: 16 }}
            >
              {active.tag}
            </div>
            <h3
              className="display"
              style={{
                fontSize: "clamp(24px,3vw,34px)",
                lineHeight: 1.1,
                margin: "0 0 16px",
              }}
            >
              {active.heading}
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
              {active.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
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
          </div>
          <div
            style={{
              position: "relative",
              background:
                "radial-gradient(110% 80% at 60% 25%,#10222a,#080f13)",
              borderLeft: "1px solid var(--border)",
              minHeight: 340,
              display: "grid",
              placeItems: "center",
              padding: 32,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 220,
                height: 220,
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid oklch(0.74 0.11 214 / 0.25)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 34,
                  borderRadius: "50%",
                  border: "1px solid oklch(0.74 0.11 214 / 0.3)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 70,
                  borderRadius: "50%",
                  border: "1px solid oklch(0.74 0.11 214 / 0.4)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg,transparent 0deg,oklch(0.74 0.11 214 / 0.35) 40deg,transparent 80deg)",
                  animation: "radarSweep 4s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: "oklch(0.74 0.11 214 / 0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "oklch(0.74 0.11 214 / 0.2)",
                }}
              />
              <div
                className="display"
                style={{
                  fontSize: 64,
                  color: "#fff",
                  textShadow: "0 0 30px oklch(0.7 0.11 214 / 0.5)",
                }}
              >
                {active.numPad}
              </div>
            </div>
            <div
              className="mono"
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                right: 24,
                fontSize: 12,
                color: "#8b969d",
                lineHeight: 1.5,
              }}
            >
              {active.mono}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="porsuk-lower">
        <Reveal>
          <div
            className="eyebrow"
            style={{ letterSpacing: "0.08em", marginBottom: 18 }}
          >
            // SENSÖR &amp; DONANIM
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {SENSORS.map((sn) => (
              <div
                key={sn.code}
                className="card card-hover"
                style={{ padding: 20, borderRadius: 14 }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--accent-ink)",
                    marginBottom: 10,
                  }}
                >
                  {sn.code}
                </div>
                <div
                  className="display"
                  style={{ fontWeight: 600, fontSize: 16, marginBottom: 5 }}
                >
                  {sn.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {sn.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="eyebrow"
            style={{ letterSpacing: "0.08em", marginBottom: 18 }}
          >
            // ÖRNEK ÇIKTI · TOPRAK RAPORU
          </div>
          <div
            style={{
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "#0b1114",
              overflow: "hidden",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "#0f161a",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#d95c53",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#d9b34f",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "oklch(0.74 0.11 214)",
                }}
              />
              <span
                style={{ marginLeft: 8, fontSize: 12, color: "#8b969d" }}
              >
                porsuk_rapor.json — parsel #A14
              </span>
            </div>
            <div
              style={{
                padding: 20,
                fontSize: 13,
                lineHeight: 1.85,
                color: "#bcc7ce",
              }}
            >
              <div>
                <span style={{ color: "#6b767d" }}>konum</span> :{" "}
                <span style={{ color: "oklch(0.86 0.07 213)" }}>
                  39.78°N, 30.52°E
                </span>
              </div>
              <div>
                <span style={{ color: "#6b767d" }}>pH</span> : 6.8{" "}
                <span style={{ color: "oklch(0.82 0.1 213)" }}>◟ ideal</span>
              </div>
              <div>
                <span style={{ color: "#6b767d" }}>nem</span> : %38{" "}
                <span style={{ color: "oklch(0.82 0.09 200)" }}>◟ orta</span>
              </div>
              <div>
                <span style={{ color: "#6b767d" }}>azot (N)</span> : 42 ppm
              </div>
              <div>
                <span style={{ color: "#6b767d" }}>fosfor (P)</span> : 28 ppm
              </div>
              <div>
                <span style={{ color: "#6b767d" }}>organik_madde</span> : %2.4
              </div>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px dashed rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ color: "#6b767d" }}>ai_öneri</span> :
              </div>
              <div
                style={{
                  marginTop: 8,
                  padding: 12,
                  borderRadius: 10,
                  background: "oklch(0.74 0.11 214 / 0.14)",
                  border: "1px solid oklch(0.74 0.11 214 / 0.3)",
                  color: "oklch(0.9 0.07 213)",
                }}
              >
                → Buğday (uygunluk %91)
                <br />→ Alternatif: Arpa (%84)
                <br />→ Uygulama: 20 kg/da azot takviyesi
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
