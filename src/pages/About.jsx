import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Inject Calendly widget script for inline embed if CALENDLY_URL is provided
  useEffect(() => {
    const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || '';
    if (!calendlyUrl) return;

    // Add calendly script
    const existing = document.getElementById('calendly-script');
    if (!existing) {
      const s = document.createElement('script');
      s.id = 'calendly-script';
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
      s.onload = () => {
        if (window.Calendly)
          window.Calendly.initInlineWidget({ url: calendlyUrl, parentElement: document.getElementById('calendly-inline') });
      };
    } else {
      if (window.Calendly)
        window.Calendly.initInlineWidget({ url: calendlyUrl, parentElement: document.getElementById('calendly-inline') });
    }

    return () => {
      // cleanup: remove widget contents but keep script for performance
      const parent = document.getElementById('calendly-inline');
      if (parent) parent.innerHTML = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif relative">
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-900 text-cyan-200 py-4 px-8 z-50">
        <a href="/" className="text-cyan-300 font-semibold text-lg hover:text-cyan-100">
          ← Home
        </a>
      </nav>

        <header className="pt-24 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl text-cyan-300 font-semibold mb-4">About Happiness X</h1>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
          Happiness X provides professional therapeutic sessions that integrate somatic practices,
          breathwork, and energy-based approaches grounded in clinical observation. Our aim is to
          reduce symptoms and provide practical tools for daily life.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right" className="bg-black/60 border border-cyan-900 rounded-2xl p-6">
          <h2 className="text-2xl text-cyan-400 mb-3">Our Approach</h2>
          <p className="text-gray-300">
            We focus on observable symptom reduction through somatic awareness and guided
            regulatory practices. Sessions combine clinical listening with take-home exercises
            that support functional improvements in mood, sleep, stress and daily performance.
          </p>
          <div className="mt-4 text-left text-gray-300">
            <h3 className="text-cyan-300 font-semibold mb-2">Ayurvedic framework (clinical summary)</h3>
            <p>
              Traditional Ayurvedic psychology describes three fundamental mind-states — <strong>Sattva</strong>,
              <strong> Rajas</strong>, and <strong>Tamas</strong>. Clinically we use these categories as heuristics
              to understand a client's prevailing mental-energy patterns:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Sattva</strong>: clarity, balance, and resilience — associated with calm attention and stability.</li>
              <li><strong>Rajas</strong>: agitation, restlessness, and high reactivity — often experienced as anxiety, impulsivity, or anger.</li>
              <li><strong>Tamas</strong>: inertia, heaviness, withdrawal — often linked to fatigue, low mood, or depressive states.</li>
            </ul>
            <p className="mt-2">
              Our therapeutic approach assesses which guna predominates and applies somatic regulation,
              breath protocols, and behavioral practices to restore greater Sattva (functional balance).
            </p>
            <div className="mt-4 flex justify-center">
              <div className="img-protect-wrapper max-w-sm">
                <img src="/Cultural-and-Spiritual-Significance-of-Astral-Projection_1750239971.webp" alt="Ayurvedic illustration" />
                <div className="img-protect-overlay" />
                <div className="img-protect-badge">© Happiness X</div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="bg-black/60 border border-cyan-900 rounded-2xl p-6">
          <h2 className="text-2xl text-cyan-400 mb-3">About the Healer</h2>
          <p className="text-gray-300">
            The healer is a clinician-trained practitioner specializing in somatic therapies and
            integrative energy approaches. He brings years of supervised practice, a focus on
            measurable outcomes, and commitment to trauma-informed care.
          </p>
        </div>
      </section>

      <section className="text-center py-10" data-aos="fade-up">
        <h3 className="text-2xl text-cyan-300 mb-4">Book a Session</h3>
        <p className="text-gray-300 mb-6">Choose a convenient time via Calendly.</p>

        {/* Calendly Inline Widget */}
        <div className="max-w-3xl mx-auto" id="calendly-inline" />
      </section>

      <footer className="text-center py-8 border-t border-cyan-900 text-gray-500 bg-black/70">
        © {new Date().getFullYear()} Happiness X
      </footer>

        {/* Calendly script (injected by effect) */}
    </div>
  );
}
