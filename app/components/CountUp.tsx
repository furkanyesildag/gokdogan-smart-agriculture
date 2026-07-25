"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Odometer-tarzı "kayan" istatistik. Görünür olunca her rakam kendi
 * dikey slotunda hedefe kayar (CSS transform, GPU'da). Hafif stagger ile
 * mekanik sayaç hissi. Reduced-motion'da anında hedefe oturur.
 */
function Digit({ d, delay }: { d: number; delay: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "1em",
        overflow: "hidden",
        verticalAlign: "baseline",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: `translateY(-${d}em)`,
          transition: "transform 1.15s cubic-bezier(0.22,1,0.36,1)",
          transitionDelay: `${delay}s`,
        }}
      >
        {Array.from({ length: 10 }).map((_, n) => (
          <span
            key={n}
            style={{
              height: "1em",
              display: "grid",
              placeItems: "center",
              lineHeight: 1,
            }}
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function CountUp({
  target,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            setShow(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
      setShow(true);
    }, 3200);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const digits = String(target).split("").map(Number);

  return (
    <div
      ref={ref}
      className="reveal card"
      style={{ transitionDelay: delay ? `${delay}s` : undefined, padding: 28 }}
    >
      <div
        className="display"
        style={{
          fontSize: "clamp(34px,4vw,52px)",
          color: "var(--accent-ink)",
          lineHeight: 1,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {prefix && <span>{prefix}</span>}
        {digits.map((d, i) => (
          <Digit key={i} d={show ? d : 0} delay={0.06 * i} />
        ))}
        {suffix && <span>{suffix}</span>}
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
