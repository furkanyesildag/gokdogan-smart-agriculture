"use client";

import { useEffect } from "react";
import { LangProvider } from "../i18n/LangProvider";
import type { Lang } from "../i18n/dict";
import Nav from "./Nav";
import Hero from "./Hero";
import Products from "./Products";
import AgentBand from "./AgentBand";
import Porsuk from "./Porsuk";
import CiftciDogan from "./CiftciDogan";
import Neden from "./Neden";
import Hizmetler from "./Hizmetler";
import Hakkimizda from "./Hakkimizda";
import SSS from "./SSS";
import Iletisim from "./Iletisim";
import Footer from "./Footer";

export default function SiteShell({ lang }: { lang: Lang }) {
  // Kök layout html lang="tr" ile render ediliyor; /en'de client'ta düzelt.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangProvider lang={lang}>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* sabit nokta ızgarası arka plan */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(oklch(0.74 0.11 214 / 0.08) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 90% 55% at 50% 0%,#000,transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 55% at 50% 0%,#000,transparent 72%)",
          }}
        />
        <Nav />
        <Hero />
        <Products />
        <AgentBand />
        <Porsuk />
        <CiftciDogan />
        <Neden />
        <Hizmetler />
        <Hakkimizda />
        <SSS />
        <Iletisim />
        <Footer />
      </div>
    </LangProvider>
  );
}
