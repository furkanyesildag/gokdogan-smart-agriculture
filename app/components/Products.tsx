export default function Products() {
  return (
    <section
      className="section"
      style={{
        padding: "0 clamp(20px,5vw,64px) clamp(56px,6vw,80px)",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div className="eyebrow" style={{ marginBottom: 20 }}>
        // ÜRÜNLERİMİZ
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20,
        }}
      >
        <a
          href="#porsuk"
          className="card card-hover"
          style={{
            display: "block",
            padding: "clamp(26px,3vw,38px)",
            color: "var(--text)",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                padding: "5px 10px",
                borderRadius: 7,
                background: "oklch(0.7 0.11 214 / 0.12)",
                color: "var(--accent-ink)",
              }}
            >
              DONANIM · OTONOM İKA
            </span>
            <span className="mono" style={{ fontSize: 12, color: "var(--faint)" }}>
              PRS-01
            </span>
          </div>
          <div
            className="display"
            style={{
              fontSize: "clamp(24px,2.6vw,32px)",
              marginBottom: 10,
            }}
          >
            Porsuk
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--muted)",
              margin: "0 0 20px",
              textWrap: "pretty",
            }}
          >
            Tarlayı otonom gezen, toprağı sensörleriyle tarayan ve yapay zekâ
            ile ekim kararı üreten insansız kara aracı.
          </p>
          <span
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "var(--accent-ink)",
            }}
          >
            İncele →
          </span>
        </a>

        <a
          href="#ciftcidogan"
          className="card card-hover card-hover--2"
          style={{
            display: "block",
            padding: "clamp(26px,3vw,38px)",
            color: "var(--text)",
            borderRadius: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                padding: "5px 10px",
                borderRadius: 7,
                background: "oklch(0.62 0.19 40 / 0.12)",
                color: "var(--accent2-ink)",
              }}
            >
              PLATFORM · ÇİFTÇİ ZEKÂSI
            </span>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#fff",
                display: "grid",
                placeItems: "center",
                flex: "none",
                boxShadow: "0 0 0 1px var(--border)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/ciftci-dogan.svg"
                alt=""
                style={{ width: 21, height: 21 }}
              />
            </span>
          </div>
          <div
            className="display"
            style={{
              fontSize: "clamp(24px,2.6vw,32px)",
              marginBottom: 10,
            }}
          >
            Çiftçi Doğan
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--muted)",
              margin: "0 0 20px",
              textWrap: "pretty",
            }}
          >
            Uydu, hava, toprak ve piyasa verisini parsel bazında birleştirip
            her gün sade Türkçe teşhis ve somut eylem üreten platform.
          </p>
          <span
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "var(--accent2-ink)",
            }}
          >
            İncele →
          </span>
        </a>
      </div>
    </section>
  );
}
