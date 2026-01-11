import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        data-aos="fade-up"
        className="min-h-screen pt-24 flex flex-col justify-center items-center text-center bg-black"
      >
        <h1 className="text-5xl text-cyan-400 mb-4">HAPPINESS X</h1>
        <p className="text-gray-300 max-w-xl">
          Healing for inner peace & balance
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen p-20 bg-black">
        <h2 className="text-3xl text-cyan-400">The Energy Within</h2>
      </section>

      {/* SESSIONS */}
      <section id="sessions" className="min-h-screen p-20 bg-black">
        <h2 className="text-3xl text-cyan-400">Sessions & Offerings</h2>
      </section>

      {/* BOOKING */}
      <section id="booking" className="min-h-screen p-20 bg-black">
        <h2 className="text-3xl text-cyan-400">Book a Session</h2>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen p-20 bg-black">
        <h2 className="text-3xl text-cyan-400">Contact</h2>
        <p className="mt-4">WhatsApp: +91 8777845559</p>
      </section>
    </>
  );
}
