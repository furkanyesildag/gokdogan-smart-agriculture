import SoilCanvas from "./SoilCanvas";

export default function Hero() {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        background:
          "radial-gradient(130% 100% at 55% 0%,#0d1c24,#070c10 75%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <SoilCanvas />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(7,12,16,0.94) 0%,rgba(7,12,16,0.78) 32%,rgba(7,12,16,0.2) 62%,rgba(7,12,16,0) 82%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
          background: "linear-gradient(rgba(7,12,16,0),rgba(7,12,16,0.8))",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1440,
          margin: "0 auto",
          padding:
            "clamp(64px,9vw,120px) clamp(20px,5vw,64px) clamp(80px,9vw,120px)",
          minHeight: "clamp(540px,72vh,780px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 9,
            padding: "7px 14px",
            border: "1px solid rgba(90,200,220,0.4)",
            borderRadius: 99,
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "#5fd0e4",
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#3ac6de",
              animation: "blink 1.8s infinite",
            }}
          />
          YAPAY ZEKÂ DESTEKLİ AKILLI TARIM
        </div>
        <h1
          className="display"
          style={{
            fontSize: "clamp(42px,6.4vw,84px)",
            lineHeight: 1,
            margin: "0 0 24px",
            textWrap: "balance",
            color: "#f2f7f9",
            maxWidth: 820,
          }}
        >
          Toprağı <span style={{ color: "#3ac6de" }}>okuyan</span>, tarımı
          yeniden tasarlayan teknoloji.
        </h1>
        <p
          style={{
            fontSize: "clamp(16px,1.5vw,19px)",
            lineHeight: 1.6,
            color: "#a8b6bd",
            maxWidth: 560,
            margin: "0 0 36px",
            textWrap: "pretty",
          }}
        >
          Yerli ve özgün yapay zekâ sistemlerimizle üretiyoruz. Otonom kara
          aracımız <b style={{ color: "#f2f7f9" }}>Porsuk</b>, tarlayı tek
          başına gezer, toprağı sensörleriyle analiz eder ve neyin
          ekilebileceğine karar verir.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a href="#porsuk" className="btn btn-hero-primary">
            Porsuk&apos;u keşfet →
          </a>
          <a href="#iletisim" className="btn btn-hero-ghost">
            İletişime geç
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 38,
            marginTop: 52,
            flexWrap: "wrap",
          }}
        >
          {[
            ["%100", "YERLİ & ÖZGÜN"],
            ["7/24", "OTONOM SAHA"],
            ["AI", "AGENT MİMARİSİ"],
          ].map(([big, small]) => (
            <div key={small}>
              <div
                className="display"
                style={{ fontSize: 26, color: "#f2f7f9" }}
              >
                {big}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 12,
                  color: "#7d99a3",
                  letterSpacing: "0.03em",
                }}
              >
                {small}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: "clamp(20px,5vw,64px)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "#7d99a3",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#3ac6de",
            animation: "blink 1.6s infinite",
          }}
        />
        PORSUK · CANLI SAHA TARAMASI
      </div>
    </header>
  );
}
