import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import QuantumHealing from "./pages/QuantumHealing";
import LearnMore from "./pages/LearnMore";
import About from "./pages/About";
import PageWrapper from "./components/PageWrapper";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import FloatingNav from "./components/FloatingNav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Router>
  <ScrollToTop />
  <FloatingNav />
  <Routes>
  <Route path="/" element={<PageWrapper><App /></PageWrapper>} />
  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
  <Route path="/quantum-healing" element={<PageWrapper><QuantumHealing /></PageWrapper>} />
  <Route path="/learn" element={<PageWrapper><LearnMore /></PageWrapper>} />
  <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
  <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
  <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
