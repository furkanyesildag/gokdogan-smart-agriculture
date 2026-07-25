"use client";

/**
 * Porsuk üç-aşama sinematik sahnesi (Algıla → Analiz et → Öner).
 * Statik "01/02/03" yerine bir zoom yolculuğu:
 *  - Algıla: sensör + kamera + LiDAR sahayı tarar
 *  - Analiz: içeri zoom, ana bilgisayara (edge AI) odaklan, veri işlenir
 *  - Öner: ekim kararı çıktısı
 * Mevcut teal/mono dilini kullanır. Reduced-motion'da animasyonlar durur.
 */

import { useT } from "../i18n/LangProvider";

const CY = "var(--sahne-cy)";
const CY2 = "var(--sahne-cy2)";
const FAINT = "var(--sahne-faint)";

function layerStyle(active: boolean, index: number, step: number) {
  return {
    opacity: active ? 1 : 0,
    transform: active
      ? "scale(1)"
      : index < step
        ? "scale(1.1)"
        : "scale(0.92)",
    transformOrigin: "center",
    pointerEvents: active ? ("auto" as const) : ("none" as const),
  };
}

/* ---- ortak sahne çerçevesi ---- */
function Frame({
  tag,
  hud,
  children,
}: {
  tag: string;
  hud: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="mono"
        style={{
          position: "absolute",
          top: 16,
          left: 18,
          fontSize: 11.5,
          letterSpacing: "0.14em",
          color: CY,
          zIndex: 3,
        }}
      >
        {tag}
      </div>
      {children}
      <div
        className="mono"
        style={{
          position: "absolute",
          bottom: 16,
          left: 18,
          right: 18,
          fontSize: 11,
          color: "#8fb0ba",
          zIndex: 3,
        }}
      >
        {hud}
      </div>
    </>
  );
}

/* ============ 01 · ALGILA ============ */
function SceneAlgila({ on }: { on: boolean }) {
  const t = useT();
  // çevredeki tespit noktaları
  const pts = [
    [70, 120], [110, 90], [360, 110], [330, 150], [92, 200],
    [372, 200], [60, 160], [388, 150], [130, 70], [300, 78],
    [200, 60], [250, 74], [155, 235], [285, 235],
  ];
  return (
    <Frame tag={t.porsuk.steps[0].tag} hud={t.sahne.algilaHud}>
      <svg viewBox="0 0 440 340" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden>
        <defs>
          <radialGradient id="sc-lidar">
            <stop offset="0" stopColor={CY} stopOpacity="0.34" />
            <stop offset="1" stopColor={CY} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sc-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={CY2} stopOpacity="0.55" />
            <stop offset="1" stopColor={CY2} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* tespit nokta bulutu */}
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r="2.4"
            fill={CY2}
            style={{
              animation: on ? `blink ${1.6 + (i % 5) * 0.3}s ${i * 0.12}s infinite` : "none",
              opacity: 0.7,
            }}
          />
        ))}

        {/* tarama diski + dönen yelpaze (LiDAR) */}
        <g transform="translate(220,182)">
          <circle r="120" fill="url(#sc-lidar)" />
          {/* genişleyen halkalar */}
          {[0, 1].map((k) => (
            <ellipse
              key={k}
              rx="120"
              ry="48"
              fill="none"
              stroke={CY}
              strokeWidth="1"
              style={{ animation: on ? `ringExpand 3s ${k * 1.5}s infinite ease-out` : "none", transformOrigin: "center" }}
            />
          ))}
          {/* dönen tarama kolu */}
          <g style={{ animation: on ? "radarSweep 3.4s linear infinite" : "none", transformOrigin: "center" }}>
            <path d="M0,0 L118,-20 A120,120 0 0 1 118,20 Z" fill="url(#sc-sweep)" />
            <line x1="0" y1="0" x2="120" y2="0" stroke={CY2} strokeWidth="1.2" />
          </g>
        </g>

        {/* Porsuk gövdesi (yandan, kompakt) */}
        <g transform="translate(220,196)" stroke={CY} strokeWidth="1.6" fill="#0c1a20">
          <rect x="-46" y="-20" width="92" height="34" rx="8" />
          {/* LiDAR dome */}
          <ellipse cx="0" cy="-20" rx="13" ry="6" fill="#0f2530" />
          <circle cx="0" cy="-26" r="4" fill={CY2} stroke="none">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
          {/* kamera */}
          <rect x="30" y="-14" width="12" height="10" rx="2" fill="#0f2530" />
          <circle cx="36" cy="-9" r="2.5" fill={CY} stroke="none" />
          {/* paletler */}
          <rect x="-46" y="14" width="92" height="16" rx="8" fill="#0a141a" />
          <circle cx="-30" cy="22" r="5" fill="none" />
          <circle cx="30" cy="22" r="5" fill="none" />
        </g>

        {/* sensör pin etiketleri */}
        {[
          [t.sahne.pinLidar, 220, 156, 220, 132, "middle"],
          [t.sahne.pinKamera, 262, 187, 330, 175, "start"],
          [t.sahne.pinToprak, 220, 226, 150, 262, "end"],
        ].map((l, i) => (
          <g key={i} className="mono">
            <line x1={l[1] as number} y1={l[2] as number} x2={l[3] as number} y2={l[4] as number} stroke={FAINT} strokeWidth="1" strokeDasharray="2 3" />
            <text x={l[3] as number} y={(l[4] as number) - 4} fill="#9fd8e6" fontSize="9.5" fontFamily="var(--font-mono),monospace" textAnchor={l[5] as string}>
              {l[0]}
            </text>
          </g>
        ))}
      </svg>
    </Frame>
  );
}

/* ============ 02 · ANALİZ ET ============ */
function SceneAnaliz({ on }: { on: boolean }) {
  const t = useT();
  const reads = [
    ["pH", "6.8"],
    [t.sahne.analizMoist, t.porsuk.report.moistureVal],
    ["N", "42 ppm"],
    ["org.", t.porsuk.report.organicVal],
  ];
  return (
    <Frame tag={t.porsuk.steps[1].tag} hud={t.sahne.analizHud}>
      <svg viewBox="0 0 440 340" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden>
        <defs>
          <radialGradient id="sc-chip">
            <stop offset="0" stopColor={CY} stopOpacity="0.4" />
            <stop offset="1" stopColor={CY} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* çipe akan veri hatları */}
        {[
          [40, 80], [40, 250], [70, 165], [400, 90], [400, 240],
        ].map((p, i) => {
          const toRight = p[0] > 220;
          return (
            <line
              key={i}
              x1={p[0]}
              y1={p[1]}
              x2={toRight ? 262 : 178}
              y2={165}
              stroke={CY}
              strokeWidth="1.2"
              strokeDasharray="4 6"
              style={{ animation: on ? `dataFlow ${1 + (i % 3) * 0.4}s linear infinite` : "none", opacity: 0.6 }}
            />
          );
        })}

        {/* merkez glow */}
        <circle cx="220" cy="165" r="90" fill="url(#sc-chip)" style={{ animation: on ? "chipPulse 2.4s ease-in-out infinite" : "none", transformOrigin: "220px 165px" }} />

        {/* edge AI çip */}
        <g transform="translate(220,165)">
          <rect x="-42" y="-42" width="84" height="84" rx="8" fill="#0c1c24" stroke={CY2} strokeWidth="1.8" />
          {/* pinler */}
          {[-28, -9, 9, 28].map((o) => (
            <g key={o} stroke={CY} strokeWidth="1.4">
              <line x1={o} y1="-42" x2={o} y2="-52" />
              <line x1={o} y1="42" x2={o} y2="52" />
              <line x1="-42" y1={o} x2="-52" y2={o} />
              <line x1="42" y1={o} x2="52" y2={o} />
            </g>
          ))}
          {/* iç devre */}
          <rect x="-22" y="-22" width="44" height="44" rx="4" fill="none" stroke={FAINT} strokeWidth="1" />
          <text x="0" y="5" fill={CY2} fontSize="15" fontFamily="var(--font-mono),monospace" fontWeight="600" textAnchor="middle">
            AI
          </text>
          <circle cx="-14" cy="-14" r="2" fill={CY} />
          <circle cx="14" cy="14" r="2" fill={CY} />
        </g>

        {/* işlenen değerler paneli */}
        <g className="mono" transform="translate(300,120)">
          {reads.map((r, i) => (
            <g key={i} transform={`translate(0,${i * 22})`}>
              <text x="0" y="0" fill="var(--muted)" fontSize="10.5" fontFamily="var(--font-mono),monospace">{r[0]}</text>
              <text x="78" y="0" fill="var(--sahne-cy2)" fontSize="10.5" fontFamily="var(--font-mono),monospace" textAnchor="end">{r[1]}</text>
              <line x1="0" y1="6" x2="78" y2="6" stroke="var(--sahne-faint)" strokeWidth="1" />
            </g>
          ))}
        </g>
      </svg>
    </Frame>
  );
}

/* ============ 03 · ÖNER ============ */
function SceneOner({ on }: { on: boolean }) {
  const t = useT();
  return (
    <Frame tag={t.porsuk.steps[2].tag} hud={t.sahne.onerHud}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          padding: "44px 26px 40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 320 }}>
          {/* ana öneri */}
          <div
            style={{
              border: "1px solid oklch(0.7 0.11 214 / 0.4)",
              background: "oklch(0.7 0.11 214 / 0.08)",
              borderRadius: 14,
              padding: "18px 20px",
              marginBottom: 12,
            }}
          >
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.1em", color: CY, marginBottom: 8 }}>
              {t.sahne.onerLabel}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
              <span className="display" style={{ fontSize: 30, color: "#f2f7f9" }}>{t.sahne.onerCrop}</span>
              <span className="display" style={{ fontSize: 26, color: CY2 }}>{t.sahne.onerScore}</span>
            </div>
            <div style={{ height: 6, borderRadius: 4, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: "91%",
                  background: `linear-gradient(90deg,var(--accent),${CY2})`,
                  transformOrigin: "left",
                  animation: on ? "barGrow 1s var(--ease) both" : "none",
                }}
              />
            </div>
          </div>

          {/* alternatif */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              border: "1px solid var(--border)",
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 14, color: "var(--soft)" }}>{t.sahne.onerAltLabel}</span>
            <span className="mono" style={{ fontSize: 13, color: "#9fd8e6" }}>{t.sahne.onerAltScore}</span>
          </div>

          {/* uygulama */}
          <div
            className="mono"
            style={{
              fontSize: 12,
              color: "#9fb6bd",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: CY2 }}>→</span> {t.sahne.onerAction}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default function PorsukSahne({ step }: { step: number }) {
  return (
    <div className="porsuk-scene" style={{ width: "100%", height: "100%" }}>
      {/* blueprint ızgara */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--sahne-grid) 1px,transparent 1px),linear-gradient(90deg,var(--sahne-grid) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      <div className="scene-layer" style={layerStyle(step === 0, 0, step)}>
        <SceneAlgila on={step === 0} />
      </div>
      <div className="scene-layer" style={layerStyle(step === 1, 1, step)}>
        <SceneAnaliz on={step === 1} />
      </div>
      <div className="scene-layer" style={layerStyle(step === 2, 2, step)}>
        <SceneOner on={step === 2} />
      </div>
    </div>
  );
}
