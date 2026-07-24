import Reveal from "./Reveal";

const AGENTS = [
  {
    code: "AGT-01",
    num: "I",
    name: "Algı Agent'ı",
    desc: "Çoklu sensör ve kamera verisini birleştirir, gürültüyü temizler, anlamlı sinyale dönüştürür.",
  },
  {
    code: "AGT-02",
    num: "II",
    name: "Analiz Agent'ı",
    desc: "Toprak besin değerleri, nem ve verim modellerini çalıştırarak durum çıkarımı yapar.",
  },
  {
    code: "AGT-03",
    num: "III",
    name: "Karar Agent'ı",
    desc: "Ekim önerisi ve rota planını üretir; aracın bir sonraki hamlesini belirler.",
  },
  {
    code: "AGT-04",
    num: "IV",
    name: "Orkestratör",
    desc: "Agent'lar arası iş akışını yönetir, çelişkileri çözer, güvenli otonomiyi garanti eder.",
  },
];

export default function AgentBand() {
  return (
    <section
      className="section band"
      style={{
        borderBottom: "1px solid var(--hair)",
        padding: "clamp(56px,7vw,96px) clamp(20px,5vw,64px)",
      }}
    >
      <div className="container">
        <Reveal style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            // YAPAY ZEKÂ MİMARİSİ
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(28px,3.6vw,44px)",
              lineHeight: 1.08,
              margin: "0 0 18px",
              textWrap: "balance",
            }}
          >
            Sahadaki her karar, birlikte çalışan yapay zekâ agent&apos;larından
            geçer.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--muted)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Sensör verisi, görüntü ve konum akışını gerçek zamanlı işleyen
            agent&apos;lar; algılama, analiz ve karar adımlarını kendi
            aralarında koordine ederek sahada otonom hareketi ve doğru tarımsal
            öneriyi mümkün kılar.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: 18,
            marginTop: 44,
          }}
        >
          {AGENTS.map((a, i) => (
            <Reveal key={a.code} delay={i * 0.06}>
              <div
                className="card card-hover"
                style={{ padding: 26, height: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    className="mono"
                    style={{ color: "var(--accent-ink)", fontSize: 13 }}
                  >
                    {a.code}
                  </span>
                  <span
                    className="mono"
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: "1px solid oklch(0.74 0.11 214 / 0.4)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 11,
                      color: "var(--accent-ink)",
                    }}
                  >
                    {a.num}
                  </span>
                </div>
                <div
                  className="display"
                  style={{ fontWeight: 600, fontSize: 19, marginBottom: 8 }}
                >
                  {a.name}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  {a.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
