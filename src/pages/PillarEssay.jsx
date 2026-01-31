import PageWrapper from "../components/PageWrapper";

export default function PillarEssay() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-8">
        <h1 className="text-4xl text-cyan-300 font-semibold">When the Body Holds What the Mind Can’t Say</h1>

        <p className="leading-relaxed text-gray-300">
          Many women carry sensation and emotion without words. This essay explores why sensation can persist, how cultural and relational factors shape embodiment, and gentle practices that support noticing safely. It is intended as an educational, non-clinical resource.
        </p>

        <section className="prose text-gray-300">
          <h2>1. Sensation as Memory</h2>
          <p>Body sensations often reflect a history of states; paying attention without judgment can reveal patterns.</p>

          <h2>2. The Role of Safety</h2>
          <p>Safety — felt in the body — is a prerequisite for exploration. Small practices that cultivate safety matter more than quick techniques.</p>

          <h2>3. Practices to Begin</h2>
          <p>Simple micro-practices: soft attention, naming sensation, and returning to breath.</p>
        </section>
      </div>
    </PageWrapper>
  );
}
