import Reveal from "./Reveal";
import CountUp from "./CountUp";

const STATS = [
  { target: 70, suffix: "%", label: "2050'ye kadar gereken tarımsal üretim artışı" },
  { target: 30, suffix: "%", label: "Hassas uygulama ile hedeflenen su tasarrufu" },
  { target: 24, suffix: "/7", label: "Kesintisiz otonom saha operasyonu" },
  { target: 100, suffix: "%", label: "Yerli ve özgün yazılım & yapay zekâ" },
];

export default function Neden() {
  return (
    <section
      id="neden"
      className="section band"
      style={{
        borderBottom: "1px solid var(--hair)",
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container neden-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            // NEDEN
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.08,
              margin: "0 0 20px",
              textWrap: "balance",
            }}
          >
            Dünyanın 2050&apos;de daha az kaynakla çok daha fazla üretmesi
            gerekiyor.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Artan nüfusun beslenme sorununu önlemek için tarımsal üretimin ciddi
            biçimde artması gerekiyor. Biz bu dönüşümü; daha az su, daha az girdi
            ve daha yüksek verimle mümkün kılan dijital ve otonom sistemlerle
            sağlıyoruz.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {STATS.map((s, i) => (
            <CountUp
              key={s.label}
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
