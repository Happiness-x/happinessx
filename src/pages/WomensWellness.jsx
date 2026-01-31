import PageWrapper from "../components/PageWrapper";

export default function WomensWellness() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold">
            A Safe, Grounded Space for Women
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A one-to-one online wellness experience designed to support
            awareness, emotional grounding, and reconnection with your body’s
            natural rhythms—without force or expectation.
          </p>
          <a
            href="/how-it-works?path=women"
            className="mt-6 inline-block px-8 py-4 bg-cyan-500 text-black rounded-full font-semibold hover:bg-cyan-400 transition"
          >
            Check Eligibility
          </a>
          <p className="text-gray-400 text-sm mt-2">
            Confidential · Client-led · Non-medical
          </p>
        </section>

        {/* WHO IT'S FOR */}
        <section>
          <h2 className="text-2xl text-cyan-200 mb-4">
            This May Be Supportive If You Are
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Seeking deep relaxation and emotional grounding</li>
            <li>Experiencing stress, overwhelm, or internal tension</li>
            <li>Interested in somatic or awareness-based wellness</li>
            <li>Looking for a respectful, non-invasive approach</li>
          </ul>
        </section>

        {/* SAFETY */}
        <section className="border-t border-cyan-900 pt-8">
          <p className="text-gray-400 text-sm">
            All sessions are online, non-invasive, and guided within ethical,
            trauma-informed, consent-based frameworks. No physical contact.
            No diagnosis. No promises.
          </p>
        </section>

      </div>
    </PageWrapper>
  );
}
