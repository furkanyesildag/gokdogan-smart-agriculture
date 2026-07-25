import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni & Gizlilik Politikası",
  description:
    "Gökdoğan Teknoloji San. ve Tic. A.Ş. kişisel verilerin işlenmesine ilişkin aydınlatma metni ve gizlilik politikası.",
  robots: { index: true, follow: true },
};

const P: React.CSSProperties = {
  fontSize: 15.5,
  lineHeight: 1.75,
  color: "var(--muted)",
  margin: "0 0 16px",
};
const H: React.CSSProperties = {
  fontSize: "clamp(18px,2vw,22px)",
  margin: "34px 0 12px",
};

export default function Gizlilik() {
  return (
    <main
      className="section"
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "clamp(40px,7vw,88px) clamp(20px,5vw,64px) clamp(64px,8vw,110px)",
      }}
    >
      <Link
        href="/"
        className="mono"
        style={{
          fontSize: 13,
          color: "var(--accent-ink)",
          letterSpacing: "0.04em",
        }}
      >
        ← Ana sayfaya dön
      </Link>

      <div className="eyebrow" style={{ margin: "28px 0 14px" }}>
        // YASAL
      </div>
      <h1
        className="display"
        style={{
          fontSize: "clamp(28px,4vw,44px)",
          lineHeight: 1.1,
          margin: "0 0 8px",
        }}
      >
        KVKK Aydınlatma Metni & Gizlilik Politikası
      </h1>
      <p className="mono" style={{ fontSize: 12.5, color: "var(--faint)", margin: "0 0 32px" }}>
        Son güncelleme: 2026
      </p>

      <h2 className="display" style={H}>1. Veri Sorumlusu</h2>
      <p style={P}>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        kapsamında kişisel verileriniz, veri sorumlusu sıfatıyla{" "}
        <b style={{ color: "var(--text)" }}>Gökdoğan Teknoloji San. ve Tic. A.Ş.</b>{" "}
        (&quot;Şirket&quot;) tarafından aşağıda açıklanan kapsamda işlenmektedir.
        Adres: Üniversiteler Mah., Şht. J. Astgm. Mustafa Tayyar Can Cd. No: 5,
        06800 Çankaya / Ankara. E-posta: info@gokdoganlar.com
      </p>

      <h2 className="display" style={H}>2. İşlenen Kişisel Veriler</h2>
      <p style={P}>
        İletişim formu aracılığıyla ilettiğiniz{" "}
        <b style={{ color: "var(--text)" }}>ad-soyad, e-posta adresi ve mesaj
        içeriği</b>{" "}
        işlenmektedir. Form dışında Şirket tarafından otomatik olarak toplanan
        başka bir kişisel veri bulunmamaktadır.
      </p>

      <h2 className="display" style={H}>3. İşleme Amacı ve Hukuki Sebep</h2>
      <p style={P}>
        Kişisel verileriniz; talep ve sorularınıza yanıt vermek, iş birliği ve
        demo taleplerini değerlendirmek ve sizinle iletişim kurmak amacıyla,
        KVKK md. 5/2-(f) kapsamında meşru menfaat ve açık rızanıza dayanılarak
        işlenir.
      </p>

      <h2 className="display" style={H}>4. Aktarım</h2>
      <p style={P}>
        Kişisel verileriniz yalnızca talebinizin karşılanması amacıyla, gerekli
        olduğu ölçüde yetkili Şirket çalışanlarıyla ve iletişim altyapısı
        sağlayıcılarımızla paylaşılabilir; bunun dışında üçüncü kişilerle
        paylaşılmaz, yurt dışına aktarılmaz.
      </p>

      <h2 className="display" style={H}>5. Saklama Süresi</h2>
      <p style={P}>
        Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta
        öngörülen zamanaşımı süreleri süresince saklanır; amaç ortadan kalktığında
        silinir, yok edilir veya anonim hale getirilir.
      </p>

      <h2 className="display" style={H}>6. Haklarınız (KVKK md. 11)</h2>
      <p style={P}>
        Kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse buna
        ilişkin bilgi talep etme; işlenme amacını öğrenme; eksik/yanlış işlenmişse
        düzeltilmesini isteme; silinmesini veya yok edilmesini isteme ve işlemenin
        hukuka aykırı olması hâlinde doğan zararın giderilmesini talep etme
        haklarına sahipsiniz. Taleplerinizi info@gokdoganlar.com adresine
        iletebilirsiniz.
      </p>

      <div
        style={{
          marginTop: 40,
          padding: "16px 18px",
          borderRadius: 12,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          fontSize: 13.5,
          color: "var(--faint)",
          lineHeight: 1.6,
        }}
      >
        Not: Bu metin genel bir bilgilendirme taslağıdır. Yayına almadan önce bir
        hukuk danışmanı tarafından şirketinizin fiili veri işleme süreçlerine göre
        gözden geçirilmesi önerilir.
      </div>
    </main>
  );
}
