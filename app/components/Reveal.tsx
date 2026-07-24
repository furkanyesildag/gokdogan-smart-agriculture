"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll'a girince opacity/translate reveal. Orijinaldeki IntersectionObserver
 * davranışının birebir portu; 3.2 sn güvenlik fallback'i ile.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "p" | "li";
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    const fallback = setTimeout(() => el.classList.add("is-visible"), 3200);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      id={id}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </Comp>
  );
}
