import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function QuantumHealing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-teal-950 to-black text-white font-serif relative min-h-screen scroll-smooth">
      {/* Top Bar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-900 text-cyan-200 py-4 px-8 flex justify-between items-center z-50">
        <a href="/" className="text-cyan-300 font-semibold text-xl hover:text-cyan-100 transition">
          ← Back to Home
        </a>
        <span className="italic text-cyan-400">Quantum Therapeutic Touch</span>
      </nav>

      {/* 🌌 Hero */}
      <section
        id="quantum"
        data-aos="fade-up"
        className="pt-24 px-6 py-16 text-center flex flex-col items-center justify-center bg-[url('/healing-bg5.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-5xl space-y-10">
          <h1 className="text-5xl font-bold text-cyan-300 mb-4">
            Understanding Quantum Therapeutic Touch
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            Quantum Therapeutic Touch bridges energy awareness with modern science.
            It’s a subtle practice that aligns vibrations across the energetic field,
            awakening balance, clarity, and peace.
          </p>
          <div className="max-w-3xl mx-auto mt-6 text-left bg-black/50 p-4 rounded">
            <h3 className="text-cyan-300 font-semibold mb-2">Ayurvedic clinical framing</h3>
            <p className="text-gray-300">
              We integrate a practical Ayurvedic lens — Sattva (clarity), Rajas (activity), and Tamas (inertia)
              — as a clinical model to describe mental-energy states. Interventions are selected to
              reduce excessive Rajas or Tamas and promote Sattvic balance using somatic regulation and
              behavioral exercises.
            </p>
          </div>
        </div>
      </section>

      {/* 💠 Education Blocks */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div
          data-aos="fade-right"
          className="bg-black/60 border border-cyan-900 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_#0891b2] transition"
        >
          <h2 className="text-2xl text-cyan-400 mb-4">Quantum Therapeutic Touch</h2>
          <p className="text-gray-300 mb-4">
            Practitioners work through awareness and intention to harmonize the
            client’s energy field. Sessions can be hands-on or remote, promoting
            deep relaxation, clarity, and healing.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Energy Awareness & Resonance</li>
            <li>Focused Intention and Visualization</li>
            <li>Balancing Energy Flow</li>
            <li>Stress Release & Emotional Calm</li>
          </ul>
        </div>

        <div
          data-aos="fade-left"
          className="bg-black/60 border border-cyan-900 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_#0891b2] transition"
        >
          <h2 className="text-2xl text-cyan-400 mb-4">Quantum Science Connection</h2>
          <p className="text-gray-300 mb-4">
            Drawing parallels with modern physics, this approach views healing
            as energy rebalancing within an interconnected field.
          </p>

          <p className="text-gray-300 mb-3 font-semibold">Who can receive this work</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
            <li>Adults seeking relief from stress, anxiety, depression, anger, or fatigue.</li>
            <li>Women seeking trauma-informed somatic therapy, work-life balance support, and regenerative touch.</li>
            <li>Parents of children with sensory or developmental differences interested in supportive somatic techniques (not a replacement for specialist care).</li>
            <li>Anyone seeking deeper self-awareness, soul-awakening practices, and clearer daily functioning.</li>
          </ul>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Energy at the Core of Matter</li>
            <li>Observer Effect & Conscious Intention</li>
            <li>Nonlocal Healing (Entanglement)</li>
          </ul>
          <p className="text-sm text-cyan-200 mt-4 italic">
            Note: Quantum Therapeutic Touch is complementary wellness, not a medical substitute.
          </p>
        </div>
      </section>

      {/* 🩺 How it works & Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-black/60 border border-cyan-900 rounded-2xl p-6">
          <h3 className="text-2xl text-cyan-300 mb-3">How it works (clinical overview)</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li><strong>Assessment</strong> — clinical intake and somatic mapping to identify predominant guna and symptom drivers.</li>
            <li><strong>Targeted Intervention</strong> — breath protocols, grounding, sensory modulation, and consented therapeutic touch as appropriate.</li>
            <li><strong>Integration</strong> — practical daily exercises, sleep and stress hygiene recommendations, and short practices to reinforce change.</li>
            <li><strong>Follow-up</strong> — outcome tracking and adjustments across 2–4 sessions to consolidate improvements.</li>
          </ol>

          <h3 className="text-2xl text-cyan-300 mt-6 mb-3">Therapy offerings</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="bg-black/50 p-4 rounded">
              <h4 className="text-cyan-200 font-semibold">For Women</h4>
              <p className="text-sm mt-2">Work-life balance coaching, trauma-informed somatic healing, therapeutic touch for tension release and emotional regulation.</p>
            </div>
            <div className="bg-black/50 p-4 rounded">
              <h4 className="text-cyan-200 font-semibold">For Children</h4>
              <p className="text-sm mt-2">Supportive sensory interventions for developmental support and regulation; collaborative work with caregivers and specialists.</p>
            </div>
            <div className="bg-black/50 p-4 rounded">
              <h4 className="text-cyan-200 font-semibold">For All</h4>
              <p className="text-sm mt-2">Soul-awakening practices, consciousness work, and somatic skills to improve daily functioning and self-awareness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌌 Images */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 pb-20">
        <div className="img-protect-wrapper w-full md:w-[45%]">
          <img src="/quantum-touch-1.png" alt="Quantum Energy Healing Diagram" className="rounded-2xl border border-cyan-900 shadow-lg" />
          <div className="img-protect-overlay" />
          <div className="img-protect-badge">© Happiness X</div>
        </div>
        <div className="img-protect-wrapper w-full md:w-[45%]">
          <img src="/quantum-touch-2.png" alt="Quantum Science Illustration" className="rounded-2xl border border-cyan-900 shadow-lg" />
          <div className="img-protect-overlay" />
          <div className="img-protect-badge">© Happiness X</div>
        </div>
      </div>

      {/* 🌠 CTA */}
      <section className="text-center pb-20">
        <a
          href="/#booking"
          className="bg-cyan-600 text-black px-8 py-4 rounded-lg shadow-lg hover:bg-cyan-500 hover:scale-105 transition text-lg font-semibold"
        >
          Book a Healing Session
        </a>
      </section>
    </div>
  );
}
