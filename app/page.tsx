import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AgentBand from "./components/AgentBand";
import Porsuk from "./components/Porsuk";
import CiftciDogan from "./components/CiftciDogan";
import Neden from "./components/Neden";
import Hizmetler from "./components/Hizmetler";
import Hakkimizda from "./components/Hakkimizda";
import SSS from "./components/SSS";
import Iletisim from "./components/Iletisim";
import Footer from "./components/Footer";

export default function Home() {
  return (
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
  );
}
