import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import QuantumHealing from "./pages/QuantumHealing";
import LearnMore from "./pages/LearnMore";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif scroll-smooth">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quantum-healing" element={<QuantumHealing />} />
        <Route path="/learn" element={<LearnMore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}
