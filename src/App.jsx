import { useState } from "react";
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

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Reveal><Hero /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><NewsSection /></Reveal>
        <Reveal>
  <Artists />
</Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><Timeline /></Reveal>
        <Reveal><Events /></Reveal>
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}