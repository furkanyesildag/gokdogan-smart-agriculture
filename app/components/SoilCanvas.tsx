"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./useTheme";

// Tema paleti — light modda açık zemine göre koyu izler/HUD.
const PALETTES = {
  dark: {
    tileFill: "rgba(255,255,255,0.018)",
    tileStroke: "rgba(120,200,214,0.07)",
    low: [255, 128, 40],
    high: [23, 199, 224],
    revBase: 0.16,
    revMul: 0.5,
    roverTop: "#f2f7f9",
    roverBot: "#aebbc2",
    window: "rgba(20,40,48,0.85)",
    mast: "#7c878d",
    scan: "60,210,224",
    ring: "90,220,232",
    glow: "120,230,240",
    shadow: "rgba(0,0,0,0.4)",
    hud1: "rgba(140,200,210,0.9)",
    hud2: "rgba(200,214,220,0.95)",
    hudBar: "rgba(255,255,255,0.12)",
    hudFill: "rgba(90,220,232,0.95)",
  },
  light: {
    tileFill: "rgba(6,38,52,0.028)",
    tileStroke: "rgba(0,95,115,0.13)",
    low: [206, 96, 26],
    high: [0, 120, 144],
    revBase: 0.24,
    revMul: 0.6,
    roverTop: "#37484f",
    roverBot: "#5c6b73",
    window: "rgba(196,228,236,0.92)",
    mast: "#55646c",
    scan: "0,150,178",
    ring: "0,135,160",
    glow: "40,175,200",
    shadow: "rgba(0,35,50,0.16)",
    hud1: "rgba(18,72,88,0.9)",
    hud2: "rgba(8,46,60,0.95)",
    hudBar: "rgba(0,50,65,0.12)",
    hudFill: "rgba(0,145,170,0.9)",
  },
} as const;

/**
 * Hero arka planı: izometrik tarla, satır satır tarayan otonom rover (Porsuk),
 * canlı HUD (pH / nem / N / taranan %). Tema-duyarlı palet.
 */
export default function SoilCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const pal = PALETTES[theme];
    const cv = canvasRef.current;
    if (!cv) return;
    const wrap = cv.parentElement;
    if (!wrap) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      dpr = 1;
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
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

    const COLS = 15,
      ROWS = 15;
    const val: number[][] = [];
    for (let i = 0; i < COLS; i++) {
      val[i] = [];
      for (let j = 0; j < ROWS; j++) {
        const v =
          0.5 +
          0.32 * Math.sin(i * 0.55 + 0.6) * Math.cos(j * 0.5) +
          0.18 * Math.sin((i + j) * 0.4) +
          0.12 * Math.cos(i * 0.9 - j * 0.3);
        val[i][j] = Math.max(0.05, Math.min(1, v));
      }
    }
    const rev = val.map((col) => col.map(() => 0));
    const path: [number, number][] = [];
    for (let j = 0; j < ROWS; j++) {
      const cols =
        j % 2 === 0
          ? [...Array(COLS).keys()]
          : [...Array(COLS).keys()].reverse();
      cols.forEach((i) => path.push([i, j]));
    }
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const low = pal.low,
      high = pal.high;

    let t = 0;
    const speed = 3.4;
    let last = performance.now();
    let scannedIdx = 0;
    let raf = 0;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) t += speed * dt;
      if (t >= path.length) {
        t = 0;
        scannedIdx = 0;
        for (let i = 0; i < COLS; i++)
          for (let j = 0; j < ROWS; j++) rev[i][j] = 0;
      }
      const idx = Math.min(path.length - 1, Math.floor(t)),
        frac = t - idx;
      scannedIdx = Math.max(scannedIdx, idx);
      for (let k = 0; k <= Math.min(scannedIdx, path.length - 1); k++) {
        const [pi, pj] = path[k];
        rev[pi][pj] += (1 - rev[pi][pj]) * Math.min(1, dt * 6);
      }

      const tw = (W * 0.62) / (COLS + ROWS);
      const th = tw * 0.52;
      const cx = W * 0.62;
      const cy = H / 2 - ((COLS - 1) + (ROWS - 1)) * th / 2 + H * 0.04;
      const iso = (i: number, j: number) => ({
        x: cx + (i - j) * tw,
        y: cy + (i + j) * th,
      });

      ctx.clearRect(0, 0, W, H);

      for (let s = 0; s <= COLS - 1 + (ROWS - 1); s++) {
        for (let i = 0; i < COLS; i++) {
          const j = s - i;
          if (j < 0 || j >= ROWS) continue;
          const a = iso(i, j),
            b = iso(i + 1, j),
            c = iso(i + 1, j + 1),
            d = iso(i, j + 1);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.lineTo(c.x, c.y);
          ctx.lineTo(d.x, d.y);
          ctx.closePath();
          const rv = rev[i][j];
          ctx.fillStyle = pal.tileFill;
          ctx.fill();
          if (rv > 0.01) {
            const v = val[i][j];
            const r = Math.round(lerp(low[0], high[0], v)),
              g = Math.round(lerp(low[1], high[1], v)),
              bl = Math.round(lerp(low[2], high[2], v));
            ctx.fillStyle = `rgba(${r},${g},${bl},${
              pal.revBase + rv * pal.revMul * (0.4 + v * 0.6)
            })`;
            ctx.fill();
          }
          ctx.strokeStyle = pal.tileStroke;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      const cur = path[idx] || path[0];
      const nxt = path[Math.min(idx + 1, path.length - 1)] || cur;
      const ri = lerp(cur[0] + 0.5, nxt[0] + 0.5, frac),
        rj = lerp(cur[1] + 0.5, nxt[1] + 0.5, frac);
      const rp = iso(ri, rj);
      const pulse = (Math.sin(now / 260) + 1) / 2;

      const grd = ctx.createRadialGradient(
        rp.x,
        rp.y,
        2,
        rp.x,
        rp.y,
        tw * 2.4
      );
      grd.addColorStop(0, `rgba(${pal.scan},0.32)`);
      grd.addColorStop(1, `rgba(${pal.scan},0)`);
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, tw * 2.4, 0, Math.PI * 2);
      ctx.fill();
      const rr = tw * (0.6 + pulse * 1.8);
      ctx.strokeStyle = `rgba(${pal.ring},${0.5 * (1 - pulse)})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(rp.x, rp.y, rr, rr * 0.55, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = pal.shadow;
      ctx.beginPath();
      ctx.ellipse(rp.x, rp.y + th * 0.5, tw * 0.7, th * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      const bw = tw * 1.05,
        bh = th * 2.0;
      const bx = rp.x - bw / 2,
        by = rp.y - bh + th * 0.5;
      const bg2 = ctx.createLinearGradient(bx, by, bx, by + bh);
      bg2.addColorStop(0, pal.roverTop);
      bg2.addColorStop(1, pal.roverBot);
      ctx.fillStyle = bg2;
      const rad = Math.min(6, bw * 0.3);
      ctx.beginPath();
      ctx.moveTo(bx + rad, by);
      ctx.arcTo(bx + bw, by, bx + bw, by + bh, rad);
      ctx.arcTo(bx + bw, by + bh, bx, by + bh, rad);
      ctx.arcTo(bx, by + bh, bx, by, rad);
      ctx.arcTo(bx, by, bx + bw, by, rad);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = pal.window;
      ctx.fillRect(bx + bw * 0.18, by + bh * 0.22, bw * 0.64, bh * 0.22);
      ctx.fillStyle = pal.mast;
      ctx.fillRect(rp.x - 1.2, by - th * 0.7, 2.4, th * 0.7);
      const glow = ctx.createRadialGradient(
        rp.x,
        by - th * 0.7,
        0,
        rp.x,
        by - th * 0.7,
        9
      );
      glow.addColorStop(0, `rgba(${pal.glow},1)`);
      glow.addColorStop(1, `rgba(${pal.glow},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(rp.x, by - th * 0.7, 9, 0, Math.PI * 2);
      ctx.fill();

      const v =
        val[Math.max(0, Math.min(COLS - 1, cur[0]))][
          Math.max(0, Math.min(ROWS - 1, cur[1]))
        ];
      const pct = Math.round((t / path.length) * 100);
      ctx.font = "11px var(--font-mono), monospace";
      ctx.textAlign = "right";
      ctx.fillStyle = pal.hud1;
      ctx.fillText("pH " + (6.0 + v * 1.6).toFixed(1), W - 22, H - 120);
      ctx.fillText("NEM %" + Math.round(28 + v * 26), W - 22, H - 104);
      ctx.fillText("N " + Math.round(20 + v * 42) + " ppm", W - 22, H - 88);
      ctx.fillStyle = pal.hud2;
      ctx.fillText("TARANAN %" + pct, W - 22, H - 58);
      ctx.fillStyle = pal.hudBar;
      ctx.fillRect(W - 136, H - 50, 114, 3);
      ctx.fillStyle = pal.hudFill;
      ctx.fillRect(W - 136, H - 50, 114 * (pct / 100), 3);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hero-canvas"
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
