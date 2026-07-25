import { NextResponse } from "next/server";

/**
 * İletişim formu gönderimi.
 * Yapılandırma (Vercel → Project → Settings → Environment Variables):
 *   Telegram:  TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   E-posta:   RESEND_API_KEY + CONTACT_EMAIL
 * En az biri tanımlıysa mesaj o kanala iletilir (ikisi de tanımlıysa ikisine).
 */
export async function POST(req: Request) {
  let data: { name?: string; email?: string; message?: string; kvkk?: boolean };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Lütfen tüm alanları doldurun." }, { status: 400 });
  }
  if (!data.kvkk) {
    return NextResponse.json({ error: "Devam etmek için KVKK aydınlatma metnini onaylayın." }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Mesaj çok uzun." }, { status: 400 });
  }

  const text = `🌱 Gökdoğan Teknoloji — Yeni iletişim formu\n\n👤 Ad Soyad: ${name}\n✉️ E-posta: ${email}\n\n📝 Mesaj:\n${message}`;

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  let delivered = false;

  try {
    if (tgToken && tgChat) {
      const r = await fetch(
        `https://api.telegram.org/bot${tgToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: tgChat, text }),
        }
      );
      if (r.ok) delivered = true;
    }

    if (resendKey && toEmail) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Gökdoğan Web <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `Yeni iletişim: ${name}`,
          text,
        }),
      });
      if (r.ok) delivered = true;
    }
  } catch {
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen e-posta ile ulaşın." },
      { status: 502 }
    );
  }

  if (!delivered) {
    // Hiçbir kanal yapılandırılmamış (env eksik) ya da sağlayıcı reddetti.
    return NextResponse.json(
      { error: "Şu an mesaj alınamıyor. Lütfen info@gokdoganlar.com adresine yazın." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
