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
            Awaken Your Dormented Instinct
          </h2>

          <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed mx-auto">
            Healing for inner peace & balance. Gentle energy work that harmonizes
            mind and body — available online and in-person.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#booking"
              className="bg-cyan-600 text-black px-6 py-3 rounded-lg shadow hover:bg-cyan-500 hover:scale-105 transform transition"
            >
              Book a Session
            </a>

            <a
              href="https://wa.me/918777845559"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-200 px-6 py-3 rounded-lg hover:bg-cyan-700 hover:scale-105 transform transition"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 👉 Later paste About, Sessions, Booking, Contact here */}
    </>
  );
}
