import Reveal from "./Reveal";

const TIMELINE = [
  {
    n: "01",
    accent: "var(--accent-ink)",
    title: "Başlangıç: sahada uçuş",
    desc: "İnsansız hava araçlarıyla tarımsal operasyonlar ve pilot eğitimi — sahayı ve çiftçiyi yakından tanıdık.",
  },
  {
    n: "02",
    accent: "var(--accent-ink)",
    title: "Dönüşüm: veriden karara",
    desc: "Uydu, hava ve toprak verisini yapay zekâ agent'larıyla işleyen karar sistemlerine yöneldik.",
  },
  {
    n: "03",
    accent: "var(--accent2-ink)",
    title: "Bugün: otonom sistemler",
    desc: "Porsuk sahada toprağı okuyor; Çiftçi Doğan her sabah parsel bazlı teşhis ve eylem üretiyor.",
  },
];

export default function Hakkimizda() {
  return (
    <section
      id="hakkimizda"
      className="section band"
      style={{
        borderBottom: "1px solid var(--hair)",
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container hakkimizda-grid">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            // HAKKIMIZDA
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
            Gökten toprağa: veriden karara köprü kuruyoruz.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: "0 0 16px",
              textWrap: "pretty",
            }}
          >
            Gökdoğan Teknoloji, sahada insansız hava operasyonlarıyla başladığı
            yolculuğunu bugün yapay zekâ destekli akıllı tarım sistemlerine
            taşıdı. Ham uydu pikseli ya da sensör istatistiği değil; çiftçinin o
            gün vereceği kararın kendisini üretiyoruz.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
              textWrap: "pretty",
            }}
          >
            Tüm yazılım ve yapay zekâ modellerimiz Türkiye&apos;de, kendi
            ekibimizce geliştiriliyor.
          </p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {TIMELINE.map((t, i) => (
            <Reveal
              key={t.n}
              delay={i * 0.08}
              className="card"
              style={{
                display: "flex",
                gap: 18,
                padding: 22,
                borderRadius: 16,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  color: t.accent,
                  flex: "none",
                  paddingTop: 2,
                }}
              >
                {t.n}
              </span>
              <div>
                <div
                  className="display"
                  style={{ fontWeight: 600, fontSize: 17, marginBottom: 5 }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {t.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
