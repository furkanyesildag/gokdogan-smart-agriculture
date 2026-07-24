"use client";

import { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";
import PorsukSahne from "./PorsukSahne";

const STEPS = [
  {
    title: "Algıla",
    tag: "01 · ALGILA",
    heading: "Tarlayı satır satır tarar",
    body: "Porsuk, sahaya girdiği andan itibaren otonom rota planına göre ilerler ve üzerindeki sensör dizisiyle toprağı sürekli ölçer.",
    points: [
      "Çoklu sensör + kamera füzyonu",
      "Uydu bazlı hassas konumlama",
      "Engelden kaçınma ve güvenli otonomi",
    ],
  },
  {
    title: "Analiz et",
    tag: "02 · ANALİZ ET",
    heading: "Yapay zekâ toprağı yorumlar",
    body: "Toplanan ham veri, analiz agent'ında işlenir; toprağın besin değeri, nem ve verim potansiyeli gerçek zamanlı olarak modellenir.",
    points: [
      "pH, nem, besin ve organik madde çıkarımı",
      "Verim ve uygunluk modelleri",
      "Anomali ve risk tespiti",
    ],
  },
  {
    title: "Öner",
    tag: "03 · ÖNER",
    heading: "Ne ekileceğine karar verir",
    body: "Karar agent'ı, analiz sonuçlarını değerlendirerek parsel bazında ekim önerisi ve uygulama planı üretir.",
    points: [
      "Parsel bazlı ürün önerisi",
      "Girdi (gübre/su) optimizasyonu",
      "İndirilebilir rapor ve harita çıktısı",
    ],
  },
];

export default function Porsuk() {
  const [step, setStep] = useState(0);
  const active = STEPS[step];
  const userTouched = useRef(false);

  // Sahneler otomatik ilerler (izleme hissi); kullanıcı bir sekmeye
  // dokununca otomatik akış durur, kontrol tamamen kullanıcıya geçer.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (userTouched.current) return;
      setStep((s) => (s + 1) % STEPS.length);
    }, 4800);
    return () => clearInterval(id);
  }, []);

  const selectStep = (i: number) => {
    userTouched.current = true;
    setStep(i);
  };

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
              onClick={() => selectStep(i)}
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
              background: "var(--scene-bg)",
              borderLeft: "1px solid var(--border)",
              minHeight: "clamp(340px,42vw,420px)",
              overflow: "hidden",
            }}
          >
            <PorsukSahne step={step} />
          </div>
        </div>
      </Reveal>

      <Reveal
        style={{
          marginTop: "clamp(40px,6vw,72px)",
          maxWidth: 720,
        }}
      >
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
              background: "var(--term-bg)",
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
                background: "var(--term-head)",
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
                style={{ marginLeft: 8, fontSize: 12, color: "var(--muted)" }}
              >
                porsuk_rapor.json — parsel #A14
              </span>
            </div>
            <div
              style={{
                padding: 20,
                fontSize: 13,
                lineHeight: 1.85,
                color: "var(--soft)",
              }}
            >
              <div>
                <span style={{ color: "var(--faint)" }}>konum</span> :{" "}
                <span style={{ color: "oklch(0.86 0.07 213)" }}>
                  39.78°N, 30.52°E
                </span>
              </div>
              <div>
                <span style={{ color: "var(--faint)" }}>pH</span> : 6.8{" "}
                <span style={{ color: "oklch(0.82 0.1 213)" }}>◟ ideal</span>
              </div>
              <div>
                <span style={{ color: "var(--faint)" }}>nem</span> : %38{" "}
                <span style={{ color: "oklch(0.82 0.09 200)" }}>◟ orta</span>
              </div>
              <div>
                <span style={{ color: "var(--faint)" }}>azot (N)</span> : 42 ppm
              </div>
              <div>
                <span style={{ color: "var(--faint)" }}>fosfor (P)</span> : 28 ppm
              </div>
              <div>
                <span style={{ color: "var(--faint)" }}>organik_madde</span> : %2.4
              </div>
              <div
                style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px dashed rgba(255,255,255,0.12)",
                }}
              >
                <span style={{ color: "var(--faint)" }}>ai_öneri</span> :
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
    </section>
  );
}
