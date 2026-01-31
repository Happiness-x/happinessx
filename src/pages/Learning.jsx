export default function Learning() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-gray-200">
      <h1 className="text-4xl text-cyan-300 font-semibold mb-16 text-center">
        Learning & Context
      </h1>

      {/* Somatic Awareness */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Somatic Awareness
        </h2>
        <p>
          Somatic awareness involves noticing internal sensations,
          posture, and breath without judgment. This noticing alone may
          support relaxation and clarity.
        </p>
      </section>

      {/* Feminine Energy */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Feminine Energy (Optional Lens)
        </h2>
        <p>
          When referenced, feminine energy is understood symbolically as
          receptivity, presence, and internal listening—not gender or
          identity.
        </p>
      </section>

      {/* Ayurvedic & Shamanic */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Ayurvedic & Shamanic Perspectives
        </h2>
        <p>
          These traditions are referenced as symbolic frameworks for
          balance and awareness, not as medical or therapeutic systems.
        </p>
      </section>

      {/* Symbolic Language */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Symbolic Language Explained
        </h2>
        <p>
          Terms like “quantum,” “energy,” or “intuition” describe
          subjective experience and internal perception—not scientific or
          clinical mechanisms.
        </p>
      </section>

      {/* Trauma-Informed */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Trauma-Informed & Client-Centered
        </h2>
        <p>
          Sessions prioritize safety, autonomy, and choice. Clients
          remain in control at all times.
        </p>
      </section>

      {/* Who This Is For */}
      <section className="mb-20">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Who This Is For
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Individuals seeking relaxation and awareness</li>
          <li>Those open to complementary wellness practices</li>
          <li>People valuing autonomy and informed consent</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/how-it-works?path=learning"
          className="px-10 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition inline-block"
        >
          Learn How Sessions Work
        </a>
        <div className="mt-4 text-sm">
          <a href="/essay/why-women-carry-sensation" className="text-cyan-300 underline">Read: When the Body Holds What the Mind Can’t Say</a>
        </div>
      </div>
    </div>
  );
}
