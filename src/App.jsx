import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Footer from "./components/Footer";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Reveal from "./components/Reveal";
import Artists from "./components/Artists";
import Editorial from "./components/Editorial";
import GifSet from "./components/GifSet";
import SignatureVeil from "./components/SignatureVeil";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("ginjay-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return (
      window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);

    localStorage.setItem(
      "ginjay-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <SignatureVeil />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <NewsSection />
        </Reveal>

        <Reveal>
          <Artists />
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>

        <Reveal>
          <GifSet />
        </Reveal>

        <Reveal>
          <Timeline />
        </Reveal>

        <Reveal>
          <Events />
        </Reveal>

        <Reveal>
          <Editorial />
        </Reveal>

        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}
