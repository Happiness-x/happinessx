import React from "react";

export default function CalendlyButton() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/happinessx"
      });
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="mt-8 px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg transition"
    >
      Book a Session
    </button>
  );
}
