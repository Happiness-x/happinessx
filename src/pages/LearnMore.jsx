import React from "react";

export default function LearnMore() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "";

  return (
    <div className="min-h-screen bg-black text-white font-serif p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <header className="mb-8 text-center">
          <h1 className="text-5xl text-cyan-300 font-semibold">Discover Your Feminine Resonance</h1>
          <p className="text-gray-300 mt-4 text-lg">
            Professional empathic scanning and therapeutic guidance with the healer — evidence-informed
            somatic techniques, focused clinical listening, and clear practices to support daily life.
          </p>
          {/* Posters and handouts */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-center md:gap-6 items-center">
            <div className="max-w-xs text-center">
              <div className="img-protect-wrapper">
                <img src="/learn/poster-quantum-touch.jpg" alt="Poster Quantum Touch" className="rounded shadow-lg mb-2" />
                <div className="img-protect-overlay" />
                <div className="img-protect-badge">© Happiness X</div>
              </div>
              <a href="/learn/handouts/quantum-touch.html" className="text-sm text-cyan-300 underline">Download handout</a>
            </div>
            <div className="max-w-xs text-center mt-4 md:mt-0">
              <div className="img-protect-wrapper">
                <img src="/learn/poster-quantum-principles.jpg" alt="Poster Quantum Principles" className="rounded shadow-lg mb-2" />
                <div className="img-protect-overlay" />
                <div className="img-protect-badge">© Happiness X</div>
              </div>
              <a href="/learn/handouts/quantum-principles.html" className="text-sm text-cyan-300 underline">Download handout</a>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">What an "Empath Watcher" Session Is</h2>
          <p className="text-gray-300 leading-relaxed">
            The healer combines clinical awareness and somatic methods with focused intention and
            compassionate attention. The sessions are both empirical and experiential: breathwork,
            guided attention, and optional therapeutic touch (or non-contact techniques) are used to
            notice and support subtle bodily responses.
          </p>
          <p className="text-gray-300 mt-3">
            Many clients experience measurable relief from physical tension, reduced stress, and a clearer
            sense of bodily signals. Sessions are designed to reduce symptoms such as anxiety,
            depression, persistent sadness, irritability or fatigue by addressing held tension and
            habitual negative thoughts through somatic awareness and practical behavioral strategies.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-8">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">How the Scan & Alignment Work</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3">
            <li>
              <strong>Intake & Intention</strong> — a short conversation to set your intention and any boundaries.
            </li>
            <li>
              <strong>Empathic Scan</strong> — the healer listens with focused attention and maps somatic patterns,
              habitual stress responses, and areas of tension that contribute to negative thinking and low mood.
            </li>
            <li>
              <strong>Resonance Alignment</strong> — through guided breath, grounding exercises, and gentle, consented
              touch or non-contact techniques, the practitioner supports release of held tension and facilitates
              renewed regulatory balance.
            </li>
            <li>
              <strong>Integration & Guidance</strong> — time to ground, reflect, and receive practical steps to continue
              the work at home (daily practices, journaling prompts, and somatic exercises).
            </li>
          </ol>
        </section>

        {/* Quantum-Inspired Framing */}
        <section className="mb-8">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">Quantum-Inspired Framing</h2>
          <p className="text-gray-300 leading-relaxed">
            The healer frames some experiences using accessible metaphors (resonance, subtle field interactions)
            to help clients make sense of bodily shifts. This language supports collaboration and makes
            techniques easier to practice at home; the primary focus remains on observable symptom relief
            and functional improvements in daily life.
          </p>
          <p className="text-gray-300 mt-3">
            Important note: these descriptions are experiential and metaphorical. They are offered to
            help you understand the work and do not replace medical or psychiatric care.
          </p>
        </section>

        {/* Benefits and who it's for */}
        <section className="mb-8">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">Why People, Especially Women, Book</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>To reduce anxiety, stress, persistent sadness, anger, and fatigue by addressing somatic contributors.</li>
            <li>To transform habitual negative thinking patterns and support a more positive outlook.</li>
            <li>To increase bodily awareness and practical skills for regulating emotion and energy.</li>
            <li><strong>To release held tension and blocked energy</strong> — clients often report tangible relief
            and improved sleep, mood, and daily functioning.</li>
          </ul>
          <p className="text-gray-400 mt-3 italic">Common outcomes reported: reduced tension and anxiety, clearer thinking, improved mood, and practical tools for everyday life.</p>
        </section>

        {/* Practicalities */}
        <section className="mb-8">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">What to Expect & How to Prepare</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Wear comfortable clothing and have a quiet, private space for remote sessions.</li>
            <li>Be prepared to notice sensations in different parts of your body — warmth, tingling, subtle shifts, or gentle release.
            These are normal and will be approached slowly, with clear consent, and paced to your comfort.</li>
            <li>Expect guided practices aimed at releasing held tension, shifting negative thought patterns, and supporting mood regulation.
            All practices are accompanied by take-home exercises to integrate benefits into daily routines.</li>
            <li>Before the session, write a short description of the problem or pattern that is bothering you — this will help focus the intake and the scan.</li>
            <li>Plan 10–15 minutes after the session for reflection and gentle grounding.</li>
          </ul>
        </section>

        {/* Safety & Ethics */}
        <section className="mb-8 bg-black/60 p-6 rounded-lg border border-cyan-800">
          <h3 className="text-xl text-cyan-300 font-semibold mb-2">Safety, Consent & Limitations</h3>
          <p className="text-gray-300">
            Sessions are complementary and supportive practices — not a substitute for medical,
            psychiatric, or emergency care. If you are experiencing severe mental health symptoms
            or medical emergencies, please seek appropriate professional help.
          </p>
          <p className="text-gray-300 mt-2">
            The healer requests informed consent for remote work and will adapt any session to honor
            your comfort and autonomy. You may stop or pause at any time.
          </p>
        </section>

        {/* Ayurvedic note & offerings summary */}
        <section className="mb-8 bg-black/50 p-4 rounded">
          <h3 className="text-xl text-cyan-300 font-semibold mb-2">Ayurvedic note</h3>
          <p className="text-gray-300">
            Sessions may be tailored using Ayurvedic principles (Sattva, Rajas, Tamas) to address
            mental-energy imbalances with targeted somatic and lifestyle recommendations.
          </p>
          <h4 className="text-cyan-300 font-semibold mt-3">Selected offerings</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Women: work-life balance coaching, trauma-sensitive somatic therapy, therapeutic touch for tension release.</li>
            <li>Children: supportive sensory regulation and developmental collaboration (complementary to specialist care).</li>
            <li>All: soul-awakening practices and consciousness development to support daily functioning and awareness.</li>
          </ul>
        </section>

        {/* Booking (clinical flow): form posts to serverless API, optional Calendly inline embed */}
        <section id="booking" className="mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-4">Clinical Booking & Intake</h2>

          <p className="text-gray-300 mb-4">
            We offer two booking flows: a calendly-based scheduler (for automatic confirmations and calendar invites),
            or a clinical intake form that submits to our secure serverless endpoint which can send a confirmation
            email and forward to Formspree if configured.
          </p>

          <form id="booking-form" method="POST" action="/api/book" className="space-y-3 text-gray-300">
            <div>
              <label className="block text-sm">Full name (required)</label>
              <input name="name" required className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700" />
            </div>
            <div>
              <label className="block text-sm">Email (required)</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700" />
            </div>
            <div>
              <label className="block text-sm">Phone</label>
              <input name="phone" className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700" />
            </div>
            <div>
              <label className="block text-sm">Preferred date/time (optional)</label>
              <input type="datetime-local" name="preferred_date" className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700" />
            </div>
            <div>
              <label className="block text-sm">Brief note about intent (optional)</label>
              <textarea name="message" rows="3" className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700"></textarea>
            </div>

            {/* Honeypot - keep hidden */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label>Leave this field empty</label>
              <input name="hp" />
            </div>

            {/* Screening */}
            <div className="mt-2">
              <label className="block text-sm">Are you currently under psychiatric care?</label>
              <select name="screening_mental_health" className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="mt-2">
              <label className="block text-sm">Are you currently on psychiatric medication?</label>
              <select name="screening_medication" className="w-full px-3 py-2 rounded bg-black/40 border border-cyan-700">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            {/* Consent */}
            <div className="mt-2">
              <label className="inline-flex items-center text-gray-300">
                <input type="checkbox" name="consent" className="mr-2" />
                I consent to a supportive empathic session. I understand this is not medical treatment.
              </label>
            </div>

            {/* reCAPTCHA placeholder (client-side) */}
            {/** To enable, set RECAPTCHA_SITE_KEY in env and include the site key script in index.html */}

            <button type="submit" className="bg-cyan-600 text-black px-4 py-2 rounded">Send booking request</button>
            <div id="booking-message" className="text-sm text-green-400 mt-2 hidden">Booking sent — check your email for confirmation.</div>
          </form>

          <div className="mt-6">
            {calendlyUrl ? (
              <div>
                <p className="text-gray-300 mb-2">Or choose an available time (Calendly):</p>
                <div className="calendly-inline-widget" data-url={calendlyUrl} style={{ minWidth: '320px', height: '600px' }}></div>
              </div>
            ) : null}
          </div>
        </section>

        {/* Download & Resources */}
        <section className="mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-2">Takeaway Practices</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Daily grounding (5 minutes): slow inhales and long exhales, hands over the belly — notice shifts in tension.</li>
            <li>Thought-mapping: when a negative thought appears, note it briefly and write one reframe that reflects a practical action.
            (Example: “I feel stuck” → “I will try one 5-minute grounding practice and observe the result.”)</li>
            <li>Evening integration: list one practical change you noticed during the day (improved sleep, calmer reaction, clearer focus).</li>
          </ol>
          <p className="text-gray-400 mt-3">Downloadable handouts provide step-by-step practice instructions to use between sessions and support continued progress.</p>
        </section>

        {/* Footer CTA */}
        <footer className="text-center py-6 border-t border-cyan-900 text-gray-400">
          <p className="mb-3">Ready to explore your feminine potential? Book a session and receive a confirmation email with next steps.</p>
          <div className="flex justify-center gap-4">
            <a href="/" className="px-4 py-2 bg-transparent border border-cyan-700 rounded hover:bg-cyan-800">Return home</a>
            {calendlyUrl ? (
              <a href="#booking" className="px-4 py-2 bg-cyan-600 text-black rounded hover:bg-cyan-500">Book now</a>
            ) : (
              <a href="#booking" className="px-4 py-2 bg-cyan-600 text-black rounded hover:bg-cyan-500">Contact for booking</a>
            )}
          </div>
        </footer>
      </div>
      <script type="module" src="/src/scripts/booking-client.js"></script>
    </div>
  );
}
