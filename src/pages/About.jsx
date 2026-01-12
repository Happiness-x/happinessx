import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  /* -------------------------------------------
     1️⃣ Initialize AOS (unchanged)
  -------------------------------------------- */
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  /* -------------------------------------------
     2️⃣ Calendly Inline Embed (IMPROVED & SAFE)
  -------------------------------------------- */
  useEffect(() => {
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "";
    if (!calendlyUrl) return;

    const parent = document.getElementById("calendly-inline");
    if (!parent) return;

    // Prevent double injection on re-mount
    if (parent.children.length > 0) return;

    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: parent,
        });
      }
    };

    // Load script only once
    let script = document.getElementById("calendly-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      initCalendly();
    }

    // Cleanup (keep script, remove iframe)
    return () => {
      parent.innerHTML = "";
    };
  }, []);

  /* -------------------------------------------
     3️⃣ JSX LAYOUT
  -------------------------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif relative">

      {/* ---------------- NAV ---------------- */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-900 text-cyan-200 py-4 px-8 z-50">
        <a href="/" className="text-cyan-300 font-semibold text-lg hover:text-cyan-100">
          ← Home
        </a>
      </nav>

      {/* ---------------- HEADER ---------------- */}
      <header className="pt-24 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl text-cyan-300 font-semibold mb-4">
          About Happiness X
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
          Happiness X provides professional therapeutic sessions integrating
          somatic practices, breathwork, and energy-based approaches grounded
          in clinical observation. The focus is stress regulation, emotional
          balance, and functional wellbeing.
        </p>
      </header>

      {/* ---------------- CONTENT ---------------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        <div data-aos="fade-right" className="bg-black/60 border border-cyan-900 rounded-2xl p-6">
          <h2 className="text-2xl text-cyan-400 mb-3">Our Approach</h2>
          <p className="text-gray-300">
            We focus on observable symptom reduction through somatic awareness
            and guided regulatory practices. Sessions combine clinical listening
            with take-home exercises supporting improvements in mood, sleep,
            stress response, and daily performance.
          </p>

          <div className="mt-4 text-gray-300">
            <h3 className="text-cyan-300 font-semibold mb-2">
              Ayurvedic Framework (Clinical Summary)
            </h3>

            <ul className="list-disc list-inside mt-2">
              <li><strong>Sattva</strong> — clarity, balance, resilience</li>
              <li><strong>Rajas</strong> — agitation, reactivity, restlessness</li>
              <li><strong>Tamas</strong> — inertia, fatigue, withdrawal</li>
            </ul>

            <p className="mt-2">
              Sessions assess prevailing patterns and apply breath regulation,
              somatic techniques, and behavioral practices to restore functional
              balance and stability.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="bg-black/60 border border-cyan-900 rounded-2xl p-6">
          <h2 className="text-2xl text-cyan-400 mb-3">About the Practitioner</h2>
          <p className="text-gray-300">
            A clinician-trained practitioner specializing in somatic therapies
            and integrative energy approaches, working within ethical,
            trauma-informed, and consent-based frameworks.
          </p>
        </div>

      </section>

      {/* ---------------- CALENDLY ---------------- */}
      <section className="text-center py-10" data-aos="fade-up">
        <h3 className="text-2xl text-cyan-300 mb-4">Book a Session</h3>
        <p className="text-gray-300 mb-6">
          Choose a convenient time using the secure booking calendar below.
        </p>

        {/* Calendly Inline Container */}
        <div
          id="calendly-inline"
          className="max-w-3xl mx-auto"
          style={{ minHeight: "720px" }}
        />
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="text-center py-8 border-t border-cyan-900 text-gray-500 bg-black/70">
        © {new Date().getFullYear()} Happiness X
      </footer>

    </div>
  );
}
