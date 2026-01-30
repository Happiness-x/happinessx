export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-gray-200">
      <h1 className="text-4xl text-cyan-300 font-semibold mb-16 text-center">
        Services
      </h1>

      {/* Quantum Therapeutic Touch */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Quantum Therapeutic Touch
        </h2>
        <p className="leading-relaxed">
          A complementary, awareness-based wellness experience focused on
          relaxation, internal observation, and emotional grounding.
          Sessions are guided through presence, breath awareness, and
          non-invasive facilitation rather than instruction or intervention.
        </p>
      </section>

      {/* Private Guided Session */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Private Guided Wellness Session
        </h2>
        <p className="leading-relaxed">
          One-to-one online sessions designed to support awareness of bodily
          signals, internal states, and natural self-regulation.
          Verbal guidance is minimal, allowing the session to unfold through
          attention to breath, posture, pacing, and stillness.
        </p>
      </section>

      {/* Women-Focused */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          Women’s-Focused Awareness Session{" "}
          <span className="text-sm text-gray-400">(optional)</span>
        </h2>
        <p className="leading-relaxed">
          A client-centered space for women seeking awareness-based wellness
          support. Sessions prioritise nervous system safety, autonomy, and
          respect for boundaries. No physical contact. No interpretation imposed.
        </p>
      </section>

      {/* General Somatic Support */}
      <section className="mb-16">
        <h2 className="text-2xl text-cyan-300 mb-4">
          General Somatic Awareness Support
        </h2>
        <p className="leading-relaxed">
          Sessions may support awareness of posture, breathing patterns,
          and internal sensations associated with relaxation and regulation.
          Responses are internally generated and vary between individuals.
        </p>
      </section>

      {/* Non-Verbal Communication Reference */}
      <section className="mb-16 border-l-2 border-cyan-900 pl-6">
        <h3 className="text-xl text-cyan-300 mb-3">
          How Sessions Are Guided
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          Sessions rely primarily on non-verbal awareness rather than detailed
          verbal instruction. Human nervous systems communicate continuously
          through breath rhythm, posture, responsiveness, and pacing.
          This approach allows clients to participate without needing to
          analyse, explain, or perform.
        </p>
      </section>

      {/* Professional Boundaries */}
      <section className="border-t border-cyan-900 pt-10">
        <h3 className="text-xl text-cyan-300 mb-4">
          Professional Boundaries
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Online sessions only</li>
          <li>No physical contact</li>
          <li>No diagnosis or treatment</li>
          <li>No interpretation of sensations or emotions</li>
          <li>Participation is voluntary and client-led</li>
        </ul>
      </section>

      <p className="mt-16 text-xs text-gray-500 text-center italic">
        Complementary wellness services · Non-medical · Awareness-based support
      </p>
    </div>
  );
}
