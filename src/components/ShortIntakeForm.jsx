import { useState } from "react";

export default function ShortIntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myznnojw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);

      // Gentle pause, then open Calendly
      setTimeout(() => {
        window.dispatchEvent(new Event("open-booking"));
      }, 1200);
    }
  }

  if (submitted) {
    return (
      <section className="mt-24 max-w-2xl mx-auto px-6 py-16 text-center border border-cyan-900 rounded-xl bg-black/40">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Thank you for sharing
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Your reflection has been received.  
          This helps orient the session with care, pacing, and respect.
        </p>
        <p className="text-xs text-gray-500 mt-6 italic">
          You’ll be guided to scheduling shortly.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-24 max-w-3xl mx-auto px-6 py-12 border border-cyan-900 rounded-xl bg-black/40">
      <h2 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
        Pre-Session Reflection & Intake
      </h2>

      <p className="text-sm text-gray-300 leading-relaxed mb-10 text-center">
        This short reflection supports session pacing and awareness.
        Share only what feels comfortable.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            Your name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Intent */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            What brings you to seek this session now?
          </label>
          <textarea
            name="intent"
            rows="3"
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Body awareness */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            Any areas of bodily tension you notice?
          </label>
          <textarea
            name="body_awareness"
            rows="2"
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Emotional state */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            Current emotional state
          </label>
          <select
            name="emotional_state"
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          >
            <option>Prefer not to say</option>
            <option>Calm but tired</option>
            <option>Stressed or overwhelmed</option>
            <option>Emotionally heavy</option>
            <option>Neutral / unsure</option>
            <option>Curious / open</option>
          </select>
        </div>

        {/* Professional care */}
        <div>
          <label className="block text-sm text-cyan-300 mb-2">
            Currently under professional medical or psychological care?
          </label>
          <select
            name="professional_care"
            className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-cyan-400"
          >
            <option>No</option>
            <option>Yes</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input type="checkbox" name="consent" required className="mt-1" />
          <p className="text-xs text-gray-400 leading-relaxed">
            I understand this is a complementary, non-medical wellness session.
            Participation is voluntary and client-led.
          </p>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Submit Reflection
          </button>

          <p className="text-xs text-gray-500 mt-4 italic">
            Information shared here is treated with care and confidentiality.
          </p>
        </div>
      </form>
    </section>
  );
}
