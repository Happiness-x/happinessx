import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/happinessx",
          parentElement: document.getElementById("calendly-embed"),
        });
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🌌 HERO */}
      <section
        id="home"
        className="min-h-screen pt-32 flex flex-col items-center justify-center text-center p-8 bg-[url('/healing-bg1.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">
          <img
            src="/Golden-Eye-of-Ra-emblem.png"
            alt="Happiness X Sacred Symbol"
            className="w-64 md:w-80 lg:w-96 mx-auto mb-10 drop-shadow-[0_0_40px_rgba(255,200,120,0.6)]"
            draggable={false}
          />

          <h1 className="text-5xl md:text-6xl font-bold text-cyan-300">
            HAPPINESS X
          </h1>

          <p className="italic text-cyan-200 mt-4 text-lg">
            Awaken Your Dormant Instinct
          </p>

          <p className="max-w-xl mx-auto text-gray-300 mt-6">
            Healing for inner peace & balance — available online and in-person.
          </p>
        </div>
      </section>

      {/* 🗓️ BOOKING */}
      <section
        id="booking"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-black"
      >
        <h2 className="text-4xl font-semibold text-cyan-300 mb-4">
          Book Your Session
        </h2>

        <p className="text-gray-300 max-w-xl mb-10">
          Choose a time that feels right. Sessions are guided with care,
          consent, and professional integrity.
        </p>

        <div
          id="calendly-embed"
          className="w-full max-w-4xl rounded-2xl overflow-hidden border border-cyan-900 shadow-[0_0_40px_rgba(0,200,200,0.15)]"
          style={{ minHeight: "700px" }}
        />
      </section>
    </>
  );
}
