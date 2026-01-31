import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendlyModal from "./components/CalendlyModal";
import FloatingContact from "./components/FloatingContact";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import EthicsConsent from "./pages/EthicsConsent";
import PrivacyDisclaimer from "./pages/PrivacyDisclaimer";
import CodeOfConduct from "./pages/CodeOfConduct";
import TermsCancellation from "./pages/TermsCancellation";
import QuantumHealing from "./pages/QuantumHealing";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LearnMore from "./pages/LearnMore";
import SessionDetails from "./pages/SessionDetails";
import ReflectionResults from "./pages/ReflectionResults";
import Book from "./pages/Book";
import PillarEssay from "./pages/PillarEssay";
import WomensWellness from "./pages/WomensWellness";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const openBooking = () => setBookingOpen(true);
    window.addEventListener("open-booking", openBooking);
    const onBookingCompleted = () => {
      try {
        if (window.gtag) window.gtag("event", "booking_completed", {});
        console.info("[analytics] booking_completed");
      } catch (e) {}
    };
    window.addEventListener("booking-completed", onBookingCompleted);
    return () => window.removeEventListener("open-booking", openBooking);
  }, []);

  return (
    <ErrorBoundary>
      <div className="bg-black text-white font-serif min-h-screen relative">
        <Header onBookNow={() => setBookingOpen(true)} />

        <main className="pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/ethics-consent" element={<EthicsConsent />} />
            <Route path="/privacy-disclaimer" element={<PrivacyDisclaimer />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/terms-cancellation" element={<TermsCancellation />} />
            <Route path="/quantum-healing" element={<QuantumHealing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/self-reflection" element={<LearnMore />} />
            <Route path="/session-details" element={<SessionDetails />} />
            <Route path="/reflection-results" element={<ReflectionResults />} />
            <Route path="/book" element={<Book />} />
            <Route path="/essay/why-women-carry-sensation" element={<PillarEssay />} />
            <Route path="/WomensWellness" element={<WomensWellness />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContact />

        <CalendlyModal
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </ErrorBoundary>
  );
}
