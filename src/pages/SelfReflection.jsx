import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function SelfReflection() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: "", email: "", agreed: false });

  const allRequired = formState.name.trim() && formState.email.trim() && formState.agreed;

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/myznnojw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      // Build a reflection object from form values
      const reflection = {
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        intent: formData.get("intent") || "",
        body_awareness: formData.get("body_awareness") || "",
        emotional_state: formData.get("emotional_state") || "",
        submittedAt: new Date().toISOString(),
      };

      // Persist so ReflectionResults can read it on direct load
      try { window.localStorage.setItem("hx_reflection", JSON.stringify(reflection)); } catch(e){}

      // Show submitted UI regardless of Formspree result
      setSubmitted(true);

      // Analytics: reflection_form_submit
      try {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "reflection_form_submit", { method: "formspree" });
        }
        if (process.env.NODE_ENV === "development") console.info("[analytics] reflection_form_submit");
      } catch (e) {}

      // Send reflection results email in background and log response
      const formEmail = formData.get("email");
      if (formEmail) {
        (async () => {
          try {
            const apiResp = await fetch("/api/send-reflection-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: formEmail }),
            });
            const text = await apiResp.text();
            console.info("/api/send-reflection-email status:", apiResp.status, text);
            try { if (typeof window !== "undefined" && window.gtag) window.gtag("event","reflection_email_send", { status: apiResp.status }); } catch(e){}
          } catch (err) {
            console.error("/api/send-reflection-email error:", err);
            try { if (typeof window !== "undefined" && window.gtag) window.gtag("event","reflection_email_send", { status: "error" }); } catch(e){}
          }
        })();
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
      setSubmitted(true);
    }

    // Navigate to reflection results immediately (do not wait for email send)
    navigate("/reflection-results", { state: reflection });
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-12">

        {/* ================= INTRO ================= */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl text-cyan-300 font-semibold">
            Learning & Understanding the Work
          </h1>

          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            This page clarifies the principles, language, and structure behind awareness-based wellness. Nothing here is intended to convince — only to clarify.
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
        <section className="section-divider space-y-6">
          {!submitted ? (
            <>
              <div className="text-center space-y-4">
                <h2 className="text-2xl text-cyan-300 font-semibold">
                  Pre-Session Reflection
                </h2>

                <p className="text-base text-gray-300 max-w-2xl mx-auto">
                  Nothing here is interpreted or stored beyond this session. Share only what feels appropriate.
                </p>

                <p className="text-xs text-gray-400">Step 2 of 4</p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
                
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">Your name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full"
                    onChange={(e)=>setFormState(s=>({...s, name:e.target.value}))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">Email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full"
                    onChange={(e)=>setFormState(s=>({...s, email:e.target.value}))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">What brings you to explore this session? <span className="text-gray-500">(optional)</span></label>
                  <textarea
                    name="intent"
                    rows="3"
                    className="w-full border-cyan-900/40"
                  />
                  <p className="microcopy-reassurance">You may skip this question.</p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">Any areas of bodily tension or fatigue you notice? <span className="text-gray-500">(optional)</span></label>
                  <textarea
                    name="body_awareness"
                    rows="2"
                    className="w-full border-cyan-900/40"
                  />
                  <p className="microcopy-reassurance">You may skip this question.</p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">Current emotional state <span className="text-gray-500">(optional)</span></label>
                  <select
                    name="emotional_state"
                    className="w-full"
                  >
                    <option>Select an option...</option>
                    <option>Calm</option>
                    <option>Stressed</option>
                    <option>Emotionally heavy</option>
                    <option>Neutral</option>
                  </select>
                </div>

                <div className="space-y-3 border-t border-cyan-900/20 pt-6">
                  <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                    <input type="checkbox" required className="mt-1" onChange={(e)=>setFormState(s=>({...s, agreed:e.target.checked}))} />
                    <span>I understand this is complementary, non-medical wellness support, not therapy or medical treatment.</span>
                  </label>
                  <p className="microcopy-reassurance text-xs">Your consent is required to proceed.</p>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!allRequired}
                  >
                    {allRequired ? 'Submit Reflection' : 'Complete form to continue'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl text-cyan-300 font-semibold">
                Your Reflection Has Been Received
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Thank you for taking time to reflect. A gentle email has been sent to acknowledge your reflection.
              </p>
              <p className="text-gray-400 text-sm italic">
                If you'd like to explore a guided awareness session further, you can view detailed information on the next page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a
                  href="/session-details"
                  className="btn-primary"
                >
                  View Session Details
                </a>
                <a
                  href="/"
                  className="btn-secondary"
                >
                  Return Home
                </a>
              </div>
            </div>
          )}
        </section>

      </div>
    </PageWrapper>
  );
}
