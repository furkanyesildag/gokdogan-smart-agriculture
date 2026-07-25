"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./useTheme";
import { useLang } from "../i18n/LangProvider";
import { dict } from "../i18n/dict";

const OPAL = {
  dark: {
    star: "190,225,235",
    starMax: 0.48,
    planet: ["#0f3a47", "#0a2530", "#071318"],
    rim: "58,198,222",
    rimA1: 0.45,
    rimA2: 0.1,
    orbit: "120,180,200",
    orbitA: 0.14,
    beam: "58,198,222",
    pkt: "150,235,245",
    satHalo: "120,230,240",
    satDot: "235,248,250",
    satLabel: "150,205,218",
    fusCore: "#aef2fa",
    fusLabel: "180,235,245",
  },
  light: {
    star: "120,155,175",
    starMax: 0.14,
    planet: ["#c6e4eb", "#a4d0d9", "#7fb6c1"],
    rim: "0,120,145",
    rimA1: 0.5,
    rimA2: 0.12,
    orbit: "50,115,135",
    orbitA: 0.22,
    beam: "0,120,145",
    pkt: "0,110,132",
    satHalo: "0,150,178",
    satDot: "12,58,70",
    satLabel: "20,80,95",
    fusCore: "#0a7d92",
    fusLabel: "12,72,88",
  },
} as const;

/**
 * Çiftçi Doğan veri kaynakları paneli: gezegen + yörüngedeki uydular
 * (optik uydu, radar uydu, meteo ağı), yüzeye inen veri huzmeleri. Tema-duyarlı.
 */
export default function OrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useTheme();
  const lang = useLang();

  useEffect(() => {
    const pal = OPAL[theme];
    const L = dict[lang].canvas;
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
      { label: L.orbitOptik, rk: 1.16, speed: 0.052, ph: 0.15 },
      { label: L.orbitRadar, rk: 1.33, speed: 0.038, ph: 0.55 },
      { label: L.orbitMeteo, rk: 1.5, speed: 0.03, ph: 0.85 },
    ];

    let raf = 0;
    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      stars.forEach((s) => {
        const a = pal.starMax * (0.4 + 0.6 * ((Math.sin(t * 1.3 + s.p) + 1) / 2));
        ctx.fillStyle = `rgba(${pal.star},${a})`;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      const pcx = W / 2,
        pcy = H * 1.66,
        pr = H * 0.95;
      // veri füzyon noktası: gezegen yüzeyinin tepesi = tek parsel
      const surfX = pcx,
        surfY = pcy - pr;
      const pg = ctx.createRadialGradient(
        pcx,
        pcy - pr * 0.7,
        pr * 0.15,
        pcx,
        pcy,
        pr
      );
      pg.addColorStop(0, pal.planet[0]);
      pg.addColorStop(0.55, pal.planet[1]);
      pg.addColorStop(1, pal.planet[2]);
      ctx.fillStyle = pg;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(${pal.rim},${pal.rimA1})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = `rgba(${pal.rim},${pal.rimA2})`;
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.arc(pcx, pcy, pr + 5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.font = "10px var(--font-mono), monospace";
      sats.forEach((s) => {
        const R = pr * s.rk;
        ctx.strokeStyle = `rgba(${pal.orbit},${pal.orbitA})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pcx, pcy, R, 0, Math.PI * 2);
        ctx.stroke();
        const u = (t * s.speed + s.ph) % 1;
        const ang = Math.PI * 1.1 + u * Math.PI * 0.8;
        const x = pcx + R * Math.cos(ang),
          y = pcy + R * Math.sin(ang);
        const alpha = Math.min(1, u * 7, (1 - u) * 7);
        // veri huzmesi: uydudan tek parsele (füzyon)
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = `rgba(${pal.beam},${0.24 * alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(surfX, surfY);
        ctx.stroke();
        ctx.setLineDash([]);
        // huzme boyunca akan veri paketi
        const pk = (t * 0.6 + s.ph * 3) % 1;
        const bx = x + (surfX - x) * pk,
          by = y + (surfY - y) * pk;
        ctx.fillStyle = `rgba(${pal.pkt},${0.85 * alpha})`;
        ctx.beginPath();
        ctx.arc(bx, by, 1.8, 0, Math.PI * 2);
        ctx.fill();
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 12);
        halo.addColorStop(0, `rgba(${pal.satHalo},${0.85 * alpha})`);
        halo.addColorStop(1, `rgba(${pal.satHalo},0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${pal.satDot},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${pal.satLabel},${0.9 * alpha})`;
        ctx.textAlign = x > W / 2 ? "right" : "left";
        ctx.fillText(s.label, x + (x > W / 2 ? -12 : 12), y - 8);
      });

      // === veri füzyon noktası (tek parsel) ===
      const pulse = (Math.sin(t * 2) + 1) / 2;
      // toplanma halosu
      const fh = ctx.createRadialGradient(surfX, surfY, 0, surfX, surfY, 22);
      fh.addColorStop(0, `rgba(${pal.satHalo},0.5)`);
      fh.addColorStop(1, `rgba(${pal.satHalo},0)`);
      ctx.fillStyle = fh;
      ctx.beginPath();
      ctx.arc(surfX, surfY, 22, 0, Math.PI * 2);
      ctx.fill();
      // nabız halkası
      ctx.strokeStyle = `rgba(${pal.beam},${0.55 * (1 - pulse)})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(surfX, surfY, 5 + pulse * 15, 0, Math.PI * 2);
      ctx.stroke();
      // çekirdek
      ctx.fillStyle = pal.fusCore;
      ctx.beginPath();
      ctx.arc(surfX, surfY, 3.6, 0, Math.PI * 2);
      ctx.fill();
      // etiket
      ctx.font = "10px var(--font-mono), monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = `rgba(${pal.fusLabel},0.95)`;
      ctx.fillText(L.orbitFusion, surfX + 14, surfY + 4);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [theme, lang]);

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
