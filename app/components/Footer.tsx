export default function Footer() {
  return (
    <footer
      className="section band"
      style={{ padding: "48px clamp(20px,5vw,64px) 32px" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <div style={{ maxWidth: 320 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#fff",
                overflow: "hidden",
                flex: "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/gokdogan-eagle.jpg"
                alt="Gökdoğan"
                width={40}
                height={40}
                style={{ objectFit: "cover", display: "block" }}
              />
            </span>
            <span className="display" style={{ fontSize: 16 }}>
              GÖKDOĞAN TEKNOLOJİ
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--faint)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Yapay zekâ destekli akıllı tarım ve otonom sistemler. Yerli ve özgün
            geliştirme.
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--faint2)", marginBottom: 4 }}
            >
              ÜRÜN
            </div>
            <a href="#porsuk" style={{ color: "var(--muted)" }}>
              Porsuk
            </a>
            <a href="#hizmetler" style={{ color: "var(--muted)" }}>
              Hizmetler
            </a>
            <a href="#neden" style={{ color: "var(--muted)" }}>
              Neden Akıllı Tarım
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 14,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--faint2)", marginBottom: 4 }}
            >
              KURUMSAL
            </div>
            <a href="#hakkimizda" style={{ color: "var(--muted)" }}>
              Hakkımızda
            </a>
            <a href="#iletisim" style={{ color: "var(--muted)" }}>
              İletişim
            </a>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid var(--hair)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: "var(--faint2)",
        }}
      >
        <span>© 2026 Gökdoğan Teknoloji. Tüm hakları saklıdır.</span>
        <span className="mono">Türkiye&apos;de tasarlandı ve geliştirildi.</span>
      </div>
    </footer>
  );
}
