import PageWrapper from "../components/PageWrapper";

export default function WomensWellness() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl text-cyan-300 font-semibold">
            A Safe, Grounded Space for Women
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A one-to-one online wellness experience designed to support awareness, emotional grounding, and reconnection with your body's natural rhythms.
          </p>
          <a
            href="/how-it-works?path=women"
            className="btn-primary inline-block mt-4"
          >
            See if This Fits You
          </a>
          <p className="microcopy-reassurance">
            Confidential · Client-led · Non-medical
          </p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="space-y-4">
          <h2 className="text-2xl text-cyan-300 font-semibold">
            This May Be Supportive If You Are
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base">
            <li className="leading-relaxed">Seeking deep relaxation and emotional grounding</li>
            <li className="leading-relaxed">Experiencing stress, overwhelm, or internal tension</li>
            <li className="leading-relaxed">Interested in somatic or awareness-based wellness</li>
            <li className="leading-relaxed">Looking for a respectful, non-invasive approach</li>
          </ul>
        </section>

        {/* SAFETY */}
        <section className="section-divider space-y-4">
          <p className="text-base text-gray-300 leading-relaxed">
            All sessions are online, non-invasive, and guided within ethical,
            trauma-informed, consent-based frameworks. No physical contact.
            No diagnosis. No promises.
          </p>
        </section>

      </div>
    </PageWrapper>
  );
}
