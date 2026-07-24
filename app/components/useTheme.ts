"use client";

import { useEffect, useState } from "react";

/**
 * documentElement'teki data-theme'i canlı izler (ThemeToggle değiştirince günceller).
 * Canvas/SVG görselleştirmeleri light/dark palet seçmek için kullanır.
 */
export function useTheme(): "dark" | "light" {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const read = () =>
      setTheme(
        (document.documentElement.dataset.theme as "dark" | "light") || "dark"
      );
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => mo.disconnect();
  }, []);
  return theme;
}
