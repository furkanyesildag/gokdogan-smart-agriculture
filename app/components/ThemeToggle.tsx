"use client";

import { useEffect, useState } from "react";

/**
 * Koyu/Aydınlık tema anahtarı. Durumu documentElement.dataset.theme üzerinden
 * yönetir ve localStorage'a yazar (layout'taki no-flash script ile eşleşir).
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as "dark" | "light") || "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("gd-theme", next);
      } catch {
        /* storage kapalıysa yok say */
      }
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      title="Tema değiştir"
      aria-label={theme === "dark" ? "Aydınlık temaya geç" : "Koyu temaya geç"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "9px 15px",
        borderRadius: 99,
        border: "1px solid var(--border2)",
        background: "transparent",
        color: "var(--text)",
        fontFamily: "var(--font-body), sans-serif",
        fontWeight: 600,
        fontSize: 13,
        cursor: "pointer",
        transition: "border-color 0.2s var(--ease)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border2)")
      }
    >
      <span
        aria-hidden="true"
        style={{
          width: 15,
          height: 15,
          borderRadius: "50%",
          border: "1.5px solid currentColor",
          background:
            "linear-gradient(90deg,currentColor 0 50%,transparent 50%)",
        }}
      />
      {theme === "dark" ? "Aydınlık" : "Koyu"}
    </button>
  );
}
