import PageWrapper from "../components/PageWrapper";

export default function SessionGuidelines() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl text-cyan-300 font-semibold">
          Session Guidelines
        </h1>

        <p className="text-gray-300 leading-relaxed">
          Happiness X sessions are awareness-based, client-centered wellness
          experiences designed to support relaxation, emotional grounding,
          and inner balance. This page outlines what to expect so you may
          engage with clarity and informed choice.
        </p>

        <section>
          <h2 className="text-2xl text-cyan-200 mb-3">What Sessions Include</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Online, one-to-one guided sessions</li>
            <li>Awareness-based guidance and breath support</li>
            <li>Non-invasive, non-directive facilitation</li>
            <li>Client-led pacing and voluntary participation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-cyan-200 mb-3">What Sessions Do Not Include</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>No physical contact</li>
            <li>No diagnosis or treatment</li>
            <li>No interpretation of sensations or emotions</li>
            <li>No medical or psychological advice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-cyan-200 mb-3">Your Autonomy</h2>
          <p className="text-gray-300">
            You remain in full control throughout the session. You may pause,
            adjust, or stop at any time. Participation is voluntary and
            informed consent is foundational to the practice.
          </p>
        </section>

        <section className="border-t border-cyan-900 pt-6">
          <p className="text-gray-400 text-sm">
            Happiness X provides complementary wellness services only.
            Sessions are not a substitute for licensed medical or mental
            healthcare.
          </p>
        </section>

      </div>
    </PageWrapper>
  );
}
