import { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Learning() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myznnojw", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);

      // Gentle transition → Calendly
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open-booking"));
        }
      }, 1400);
    }
  }

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-24 text-gray-200">

        {/* ================= INTRO ================= */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold mb-6">
            Learning & Understanding the Work
          </h1>

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            This page is offered for those who wish to understand the principles,
            language, and structure behind awareness-based wellness practices.
            Nothing here is intended to convince — only to clarify.
          </p>
        </section>

        {/* ================= AWARENESS PRECEDES REGULATION ================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            Why Awareness Precedes Regulation
          </h2>

          <p className="leading-relaxed mb-4">
            Across neuroscience, somatic psychology, and traditional wellness
            systems, regulation is understood not as something that can be forced,
            but as something that emerges when awareness is present.
          </p>

          <p className="leading-relaxed mb-4">
            When attention gently rests on breath, posture, and sensation, the
            nervous system receives signals of safety. This may allow shifts toward
            parasympathetic regulation — slower breathing, reduced muscular tension,
            and increased internal coherence.
          </p>

          <p className="leading-relaxed">
            The role of the practitioner is not to impose change, but to support
            conditions in which awareness can arise and self-regulation can unfold
            naturally.
          </p>
        </section>

        {/* ================= AYURVEDIC PERSPECTIVE ================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            Ayurvedic Perspective (Non-Clinical)
          </h2>

          <p className="leading-relaxed mb-4">
            Ayurveda describes imbalance as a disconnection between awareness,
            rhythm, and internal signals. When attention shifts, the experience of
            the body also shifts — influencing how discomfort, fatigue, or emotional
            heaviness is perceived.
          </p>

          <p className="leading-relaxed">
            Sessions may draw inspiration from Ayurvedic ideas of grounding,
            stillness, and balance — not as treatment, but as supportive context
            for embodied awareness.
          </p>
        </section>

        {/* ================= SHAMANIC & SYMBOLIC ================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            Shamanic & Symbolic Language (Explained Carefully)
          </h2>

          <p className="leading-relaxed mb-4">
            Traditional healing cultures often used symbolic language to describe
            internal states — not as literal mechanisms, but as experiential maps.
          </p>

          <p className="leading-relaxed">
            In this work, symbolic references are used only to support reflection
            and meaning-making. They are not claims of supernatural influence or
            external energy transfer.
          </p>
        </section>

        {/* ================= QUANTUM AS METAPHOR ================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            Quantum Language as Metaphor
          </h2>

          <p className="leading-relaxed mb-4">
            Terms such as “quantum” or “field” are sometimes used metaphorically to
            describe interconnectedness, attention, and perception.
          </p>

          <p className="leading-relaxed">
            These references are not scientific claims. They serve as symbolic
            language to help some individuals conceptualize subtle internal shifts
            in awareness and experience.
          </p>
        </section>

        {/* ================= HOW WE COMMUNICATE WITHOUT WORDS ================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            How We Communicate Without Words
          </h2>

          <p className="leading-relaxed mb-4">
            Sessions emphasize non-verbal cues such as eye contact, breath rhythm,
            posture, pacing, and silence. This attentive presence supports a
            regulated environment without constant verbal instruction.
          </p>

          <p className="leading-relaxed mb-4">
            The practitioner adapts timing and responsiveness based on what is
            visibly present — rather than interpreting or directing internal
            experiences.
          </p>

          <p className="leading-relaxed">
            Clients are never required to describe or analyze sensations. When
            sharing occurs, it is optional and client-led.
          </p>
        </section>

        {/* ================= INTAKE FORM ================= */}
        <section className="mt-24 border-t border-cyan-900 pt-20">
          {!submitted ? (
            <>
              <h2 className="text-3xl text-cyan-300 font-semibold mb-6 text-center">
                Pre-Session Reflection
              </h2>

              <p className="text-center text-gray-300 text-sm mb-12 max-w-2xl mx-auto">
                This short reflection supports pacing and understanding.
                Share only what feels appropriate.
              </p>

              <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto space-y-8"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-black border border-cyan-800 rounded-lg p-3"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full bg-black border border-cyan-800 rounded-lg p-3"
                />

                <textarea
                  name="intent"
                  rows="3"
                  placeholder="What brings you to explore this session?"
                  className="w-full bg-black border border-cyan-800 rounded-lg p-3"
                />

                <textarea
                  name="body_awareness"
                  rows="2"
                  placeholder="Any areas of bodily tension or fatigue you notice?"
                  className="w-full bg-black border border-cyan-800 rounded-lg p-3"
                />

                <select
                  name="emotional_state"
                  className="w-full bg-black border border-cyan-800 rounded-lg p-3"
                >
                  <option>Current emotional state (optional)</option>
                  <option>Calm</option>
                  <option>Stressed</option>
                  <option>Emotionally heavy</option>
                  <option>Neutral</option>
                </select>

                <label className="flex items-start gap-3 text-xs text-gray-400">
                  <input type="checkbox" required />
                  I understand this is complementary, non-medical wellness support.
                </label>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="px-10 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                  >
                    Submit Reflection
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-2xl text-cyan-300 mb-4">
                Thank you for sharing
              </h3>
              <p className="text-gray-300 text-sm">
                Your reflection has been received.  
                You’ll be guided to scheduling shortly.
              </p>
            </div>
          )}
        </section>

      </div>
    </PageWrapper>
  );
}
