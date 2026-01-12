import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="min-h-screen pt-24 flex flex-col items-center justify-center text-center p-8 bg-[url('/healing-bg1.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <img
  src="/Golden-Eye-of-Ra-emblem.png"
  alt="Happiness X Sacred Symbol"
  className="
    w-64 md:w-80 lg:w-96
    mb-8
    drop-shadow-[0_0_40px_rgba(255,200,120,0.6)]
    animate-pulse
  "
  draggable={false}
  onContextMenu={(e) => e.preventDefault()}
/>

          <h1 className="text-5xl font-bold text-cyan-300">HAPPINESS X</h1>
          <p className="italic text-cyan-200 mt-3">
            Awaken Your Dormant Instinct
          </p>

          <p className="max-w-xl mx-auto text-gray-300 mt-6">
            Healing for inner peace & balance — available online and in-person.
          </p>
        </div>
      </section>
    </>
  );
}
