import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif scroll-smooth">
      
      {/* 🌌 Soft Aura Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/10 via-transparent to-cyan-900/10 blur-3xl" />

      {/* 🌙 Global Header */}
      <Header />

      {/* 🏠 Home Page */}
      <Home />

    </div>
  );
}
