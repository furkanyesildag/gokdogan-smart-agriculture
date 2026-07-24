"use client";

import { useEffect, useRef } from "react";

/**
 * Çiftçi Doğan veri kaynakları paneli: gezegen + yörüngedeki uydular
 * (Sentinel-2 optik, Sentinel-1 radar, meteo ağı), yüzeye inen veri huzmeleri.
 * Orijinal dc-runtime yörünge sahnesinin birebir portu.
 */
export default function OrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const wrap = cv.parentElement;
    if (!wrap) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const r = wrap.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = Math.max(1, W * dpr);
      cv.height = Math.max(1, H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.7,
      r: Math.random() * 1.1 + 0.3,
      p: Math.random() * Math.PI * 2,
    }));
    const sats = [
      { label: "SENTINEL-2 · OPTİK", rk: 1.16, speed: 0.052, ph: 0.15 },
      { label: "SENTINEL-1 · RADAR", rk: 1.33, speed: 0.038, ph: 0.55 },
      { label: "METEO AĞI", rk: 1.5, speed: 0.03, ph: 0.85 },
    ];

    let raf = 0;
    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      stars.forEach((s) => {
        const a = 0.18 + 0.3 * (Math.sin(t * 1.3 + s.p) + 1) / 2;
        ctx.fillStyle = `rgba(190,225,235,${a})`;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      const pcx = W / 2,
        pcy = H * 1.66,
        pr = H * 0.95;
      const pg = ctx.createRadialGradient(
        pcx,
        pcy - pr * 0.7,
        pr * 0.15,
        pcx,
        pcy,
        pr
      );
      pg.addColorStop(0, "#0f3a47");
      pg.addColorStop(0.55, "#0a2530");
      pg.addColorStop(1, "#071318");
      ctx.fillStyle = pg;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(58,198,222,0.45)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(58,198,222,0.1)";
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr + 5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.font = "10px var(--font-mono), monospace";
      sats.forEach((s) => {
        const R = pr * s.rk;
        ctx.strokeStyle = "rgba(120,180,200,0.14)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pcx, pcy, R, 0, Math.PI * 2);
        ctx.stroke();
        const u = (t * s.speed + s.ph) % 1;
        const ang = Math.PI * 1.1 + u * Math.PI * 0.8;
        const x = pcx + R * Math.cos(ang),
          y = pcy + R * Math.sin(ang);
        const alpha = Math.min(1, u * 7, (1 - u) * 7);
        const dx = pcx - x,
          dy = pcy - y,
          dl = Math.hypot(dx, dy);
        const gx = x + dx * (1 - pr / dl),
          gy = y + dy * (1 - pr / dl);
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = `rgba(58,198,222,${0.22 * alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(gx, gy);
        ctx.stroke();
        ctx.setLineDash([]);
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 12);
        halo.addColorStop(0, `rgba(120,230,240,${0.85 * alpha})`);
        halo.addColorStop(1, "rgba(120,230,240,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(235,248,250,${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(150,205,218,${0.9 * alpha})`;
        ctx.textAlign = x > W / 2 ? "right" : "left";
        ctx.fillText(s.label, x + (x > W / 2 ? -12 : 12), y - 8);
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
