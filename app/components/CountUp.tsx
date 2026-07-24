"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Görünür olunca 0'dan hedefe sayan istatistik. cubic ease-out, 1.3 sn.
 */
export default function CountUp({
  target,
  suffix = "",
  label,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) {
        setValue(target);
        return;
      }
      const dur = 1300;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
      run();
    }, 3200);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      className="reveal card"
      style={{
        transitionDelay: delay ? `${delay}s` : undefined,
        padding: 28,
      }}
    >
      <div
        className="display"
        style={{
          fontSize: "clamp(34px,4vw,52px)",
          color: "var(--accent-ink)",
          lineHeight: 1,
        }}
      >
        {value}
        {suffix}
      </div>
      <div
        style={{
          marginTop: 10,
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}
