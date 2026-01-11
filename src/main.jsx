import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import "aos/dist/aos.css";

import About from "./pages/About";
import QuantumHealing from "./pages/QuantumHealing";
import LearnMore from "./pages/LearnMore";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/quantum-healing" element={<QuantumHealing />} />
        <Route path="/learn" element={<LearnMore />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
