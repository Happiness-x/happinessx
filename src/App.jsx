import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import QuantumHealing from "./pages/QuantumHealing";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LearnMore from "./pages/LearnMore";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-black text-white font-serif min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* MAIN CONTENT OFFSET */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quantum-healing" element={<QuantumHealing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/learn" element={<LearnMore />} />
        </Routes>
      </main>
    </div>
  );
}
