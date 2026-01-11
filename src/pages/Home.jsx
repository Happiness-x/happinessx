import React from "react";

export default function Home() {
  return (
    <>
      {/* 🏠 Hero Section */}
      <section
        id="home"
        data-aos="fade-up"
        className="min-h-screen pt-24 flex flex-col items-center justify-center text-center p-8 space-y-8 bg-[url('/healing-bg1.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <div className="img-protect-wrapper mx-auto w-28 h-28 mb-2">
            <img
              src="/logo.png"
              alt="Happiness X Logo"
              className="w-28 h-28 drop-shadow-[0_0_20px_#06b6d4] animate-pulse mx-auto"
            />
            <div className="img-protect-overlay" />
            <div className="img-protect-badge">© Happiness X</div>
          </div>

          <h1 className="text-5xl font-bold text-cyan-300 tracking-wide">
            HAPPINESS X
          </h1>

          <h2 className="text-xl italic text-cyan-200 mb-6">
            Awaken Your Dormant Instinct
          </h2>

          <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed mx-auto">
            Healing for inner peace & balance. Gentle energy work that harmonizes
            mind and body — available online and in-person.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#booking"
              className="bg-cyan-600 text-black px-6 py-3 rounded-lg shadow hover:bg-cyan-500 hover:scale-105 transition"
            >
              Book a Session
            </a>

            <a
              href="https://wa.me/918777845559"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-200 px-6 py-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transition"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 🌿 About */}
      <section
        id="about"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg2.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-6">
            The Energy Within
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Every being carries an inner vibration — a quantum frequency that
            connects body, mind, and soul.
          </p>
        </div>
      </section>

      {/* 💫 Healing */}
      <section
        id="healing"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg3.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-6">
            Quantum Healing & Balance
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Healing is not about fixing; it’s about returning to resonance.
          </p>
        </div>
      </section>

      {/* 🌸 Sessions */}
      <section
        id="sessions"
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-[url('/healing-bg4.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-4xl font-semibold text-cyan-300 mb-10">
            Sessions & Offerings
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Energy Alignment", duration: "60 min" },
              { title: "Quantum Healing", duration: "90 min" },
              { title: "Sound & Light Therapy", duration: "75 min" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-black/60 border border-cyan-900 rounded-2xl p-6"
              >
                <h3 className="text-2xl text-cyan-400 mb-2">{s.title}</h3>
                <p className="text-cyan-200">{s.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧘 Booking */}
      <section
        id="booking"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-black/80"
      >
        <h2 className="text-3xl font-semibold text-cyan-300 mb-6">
          Book Your Session
        </h2>
      </section>

      {/* 💌 Contact */}
      <section
        id="contact"
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20 border-t border-cyan-900 bg-black/90"
      >
        <p className="text-cyan-400">
          WhatsApp: +91 877784 5559
        </p>
      </section>
    </>
  );
}
