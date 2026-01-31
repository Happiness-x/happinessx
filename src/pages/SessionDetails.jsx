import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function SessionDetails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = mounted
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0";

  return (
    <PageWrapper>
      <div className={`max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-12 transition-all duration-700 ease-out ${reveal}`}>
        {/* decorative abstract header */}
        <div aria-hidden className="pointer-events-none mb-4">
          <svg width="100%" height="48" viewBox="0 0 800 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#075985" />
                <stop offset="1" stopColor="#0ea5a4" />
              </linearGradient>
            </defs>
            <path d="M0 24c80-16 160-16 240 0s160 16 240 0 160-16 320 0v24H0V24z" fill="url(#g1)" />
          </svg>
        </div>
        {/* ================= SECTION 1: TITLE & FRAMING ================= */}
        <section className="space-y-6 text-center">
          <h1 className="text-5xl text-cyan-300 font-semibold">
            Guided Awareness Session — What to Expect
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            This page describes the structure and experience of a guided awareness session. 
            It's meant to answer questions and reduce uncertainty — not to persuade or promise outcomes. 
            A session is a calm, online experience focused on presence and internal listening, conducted entirely by you 
            and a practitioner in separate, private spaces.
          </p>
        </section>

        {/* ================= SECTION 2: WHO THIS SESSION IS FOR ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl text-cyan-300 font-semibold">Who This Session May Be Supportive For</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 ml-2">
            <li>People seeking relaxation and rest in a structured, guided setting</li>
            <li>People curious about body awareness and internal sensation</li>
            <li>People who appreciate being held in presence by another person</li>
            <li>People wanting support without direction, diagnosis, or interpretation</li>
            <li>People interested in exploring awareness practices in a safe, non-medical container</li>
          </ul>
        </section>

        {/* ================= SECTION 3: WHO THIS SESSION IS NOT FOR ================= */}
        <section className="space-y-6 border-l-2 border-cyan-900 pl-6">
          <h2 className="text-3xl text-cyan-300 font-semibold">What This Session Is Not</h2>
          <p className="text-gray-400 italic mb-4">
            Clarity about boundaries builds trust. Here is what a guided awareness session does not include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300 ml-2">
            <li>Medical treatment or clinical diagnosis</li>
            <li>Psychotherapy or mental health counseling</li>
            <li>Physical touch or sexual contact</li>
            <li>Analysis of your emotions, responses, or personal history</li>
            <li>Promises of symptom relief, healing, or transformation</li>
            <li>Advice or interpretation of what you experience</li>
          </ul>
        </section>

        {/* ================= SECTION 4: SESSION TIMELINE ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl text-cyan-300 font-semibold">How a Session Unfolds</h2>

          {/* Before */}
          <div className="space-y-3">
            <h3 className="text-2xl text-cyan-300 font-semibold">Before the Session</h3>
            <div className="bg-black/50 border border-cyan-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p>
                <span className="text-cyan-300 font-semibold">Find a quiet space</span> — A place where you won't be interrupted, 
                with a comfortable seat or lying position.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">Position your camera</span> — You can point it at your face, 
                chest, or body. The practitioner's view is limited to what you show.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">Wear comfortable clothing</span> — Anything that allows you to 
                feel your body and relax is fine.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">No preparation needed</span> — You don't need to prepare, 
                clear your mind, or arrive in a particular state.
              </p>
            </div>
          </div>

          {/* During */}
          <div className="space-y-3">
            <h3 className="text-2xl text-cyan-300 font-semibold">During the Session</h3>
            <div className="bg-black/50 border border-cyan-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p>
                <span className="text-cyan-300 font-semibold">Gentle pacing</span> — The session moves slowly, 
                with pauses and space for you to settle.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">Minimal verbal guidance</span> — You may receive simple 
                instructions about attention, breath, or sensation. Words are sparse.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">Silence is normal</span> — Long stretches of quiet 
                are common and intentional.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">You remain in control</span> — You can pause, move, 
                speak, or stop at any time without explanation.
              </p>
            </div>
          </div>

          {/* After */}
          <div className="space-y-3">
            <h3 className="text-2xl text-cyan-300 font-semibold">After the Session</h3>
            <div className="bg-black/50 border border-cyan-900 rounded-lg p-6 space-y-2 text-gray-300">
              <p>
                <span className="text-cyan-300 font-semibold">Gentle grounding</span> — A brief, calm closing 
                allows you to transition back to your day.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">No forced reflection</span> — You're not asked to 
                explain, analyze, or report what you felt.
              </p>
              <p>
                <span className="text-cyan-300 font-semibold">Integration is natural</span> — Any shifts or insights 
                unfold in your own time, not in conversation.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRACTITIONER ROLES ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl text-cyan-300 font-semibold">What the Practitioner Does & Does Not Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Does */}
            <div className="space-y-3">
              <h3 className="text-xl text-cyan-300 font-semibold">The Practitioner Does</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                <li>Observe and maintain calm, steady presence</li>
                <li>Support your pacing without rushing</li>
                <li>Respond to visible cues (pauses, movements, breathing)</li>
                <li>Hold safety and confidentiality</li>
                <li>Respect your autonomy and boundaries</li>
              </ul>
            </div>

            {/* Does Not */}
            <div className="space-y-3">
              <h3 className="text-xl text-cyan-300 font-semibold">The Practitioner Does Not</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                <li>Diagnose or interpret your responses</li>
                <li>Touch you or invade personal space</li>
                <li>Tell you what to feel or experience</li>
                <li>Make promises about outcomes</li>
                <li>Offer medical, psychological, or life advice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: COMMON EXPERIENCES ================= */}
        <section className="space-y-6">
          <h2 className="text-3xl text-cyan-300 font-semibold">What People Experience (All Are Valid)</h2>
          <p className="text-gray-400 mb-4">
            Sessions vary widely. Here are common experiences people report — and equally important, 
            <span className="text-cyan-300 font-semibold"> experiencing "nothing" is also completely normal and valid.</span>
          </p>
          <div className="space-y-3">
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">Calm, ease, or relaxation</p>
              <p className="text-gray-300 text-sm mt-1">A sense of settling or relief</p>
            </div>
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">Feeling nothing in particular</p>
              <p className="text-gray-300 text-sm mt-1">A neutral, present state — equally valid</p>
            </div>
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">Emotional release</p>
              <p className="text-gray-300 text-sm mt-1">Unexpected tears, sighs, or laughter</p>
            </div>
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">Increased body awareness</p>
              <p className="text-gray-300 text-sm mt-1">Noticing sensations you don't usually attend to</p>
            </div>
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">Unexpected sensations</p>
              <p className="text-gray-300 text-sm mt-1">Tingling, warmth, or unusual feelings with no explanation needed</p>
            </div>
            <div className="bg-black/50 border-l-2 border-cyan-300 pl-4">
              <p className="font-semibold text-cyan-300">A mix of the above, or something different</p>
              <p className="text-gray-300 text-sm mt-1">Each person's experience is unique, and that is expected</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: AUTONOMY & CONSENT ================= */}
        <section className="space-y-6 border-t border-cyan-900 pt-8">
          <h2 className="text-3xl text-cyan-300 font-semibold">Your Choice Matters</h2>
          <div className="bg-black/50 border border-cyan-900 rounded-lg p-8 space-y-4 text-gray-300">
            <p>
              Participation is entirely <span className="text-cyan-300 font-semibold">voluntary</span>. 
              There is no obligation to book, continue, or engage further.
            </p>
            <p>
              You may <span className="text-cyan-300 font-semibold">stop or pause</span> a session at any moment. 
              No explanation is needed.
            </p>
            <p>
              You may <span className="text-cyan-300 font-semibold">choose not to continue</span> after a first session. 
              That choice is completely respected.
            </p>
            <p>
              All sessions are <span className="text-cyan-300 font-semibold">confidential</span>. 
              What you share stays with the practitioner.
            </p>
          </div>
        </section>

        {/* ================= SECTION 8: SOFT CTA ================= */}
        <section className="space-y-6 pt-8 text-center">
          <p className="text-gray-400 italic">
            If you'd like to continue exploring, you may view booking information below. 
            There is no pressure — this page is meant for information only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-booking"));
                }
              }}
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Continue to Booking (Optional)
            </button>
            <a
              href="/self-reflection"
              className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-300 font-semibold hover:bg-cyan-900/30 transition text-center"
            >
              Return to Self-Reflection
            </a>
          </div>
        </section>

        {/* ================= FOOTER DISCLAIMER ================= */}
        <section className="space-y-4 pt-12 border-t border-gray-700 text-xs text-gray-500">
          <p>
            This service is not a substitute for medical treatment, psychotherapy, or emergency mental health care. 
            If you are in crisis or experiencing a mental health emergency, please contact a healthcare provider or crisis line.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
