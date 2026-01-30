import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function QuantumHealing() {
  const [soften, setSoften] = useState(0);

   useEffect(() => {
     if (typeof window === "undefined") return;

     const onScroll = () => {
       const value = Math.min(window.scrollY / 800, 1);
       setSoften(value);
     };

     window.addEventListener("scroll", onScroll, { passive: true });
     return () => window.removeEventListener("scroll", onScroll);
   }, []);


  return (
    <PageWrapper>
      <div
        className="max-w-5xl mx-auto px-6 py-24 text-gray-200 transition-all duration-500"
        style={{
          lineHeight: `${1.6 + soften * 0.2}`,
          filter: `contrast(${1 - soften * 0.05})`,
        }}
      >
        {/* ================= TITLE ================= */}
        <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold mb-12 text-center">
          Quantum Therapeutic Touch
        </h1>

        {/* ================= INTRO ================= */}
        <section className="mb-20 space-y-6 text-sm sm:text-base md:text-lg">
          <p>
            Quantum Therapeutic Touch is a complementary wellness practice
            centered on awareness, presence, and internal signal clarity.
            Sessions are non-invasive, non-directive, and conducted exclusively online.
          </p>

          <p>
            The term <em>quantum</em> is used symbolically, referring not to
            physics or energy transmission, but to subtle shifts in perception
            that occur when attention becomes steady and unforced.
          </p>

          <p>
            Rather than attempting to change the body, sessions create conditions
            in which the body’s own regulatory intelligence may become more accessible.
          </p>
        </section>

        {/* ================= QUIET DIAGRAMS ================= */}
        <section className="mb-28">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-6 text-center">
            Symbolic Cognitive Models
          </h2>

          <p className="text-center text-gray-400 text-sm mb-12 max-w-3xl mx-auto">
            The following diagrams are illustrative representations of awareness-based
            regulation. They do not depict anatomy, energy fields, or medical mechanisms.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {[ 
              { src: "/quantum-touch-1.png", label: "Attention and Internal Coherence" },
              { src: "/quantum-touch-2.png", label: "Perception, Stillness, and Regulation" }
            ].map((img, i) => (
              <figure key={i} className="space-y-4">
                <div className="relative w-full aspect-[4/3] bg-black rounded-xl border border-cyan-900 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-contain p-6 opacity-90"
                  />
                </div>
                <figcaption className="text-xs text-gray-400 text-center">
                  {img.label} (symbolic model)
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ================= AWARENESS PRECEDES REGULATION ================= */}
        <section className="mb-28 border-l-2 border-cyan-900 pl-6">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6">
            Why Awareness Precedes Regulation
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-lg">
            <p>
              Across neuroscience, somatic psychology, and traditional wellness systems,
              a shared principle emerges: regulation is not imposed — it is accessed.
            </p>

            <p>
              When attention is directed inward without urgency or evaluation,
              the nervous system receives information rather than instruction.
              This informational clarity allows self-organising responses to emerge.
            </p>

            <p>
              In Ayurvedic traditions, this relationship is described as the
              restoration of balance through awareness, not correction.
              Modern science describes the same process through autonomic regulation.
            </p>

            <p className="italic text-cyan-300 text-center mt-12">
              Awareness does not act.  
              It allows.
            </p>
          </div>
        </section>

        {/* ================= SILENCE SECTION ================= */}
        <section className="mb-28 text-center">
          <p className="text-gray-400 italic text-lg md:text-xl max-w-2xl mx-auto">
            Some shifts occur not when something is added,  
            but when nothing interferes.
          </p>
        </section>

        {/* ================= HOW COMMUNICATION OCCURS ================= */}
        <section className="mb-28">
          <h2 className="text-3xl text-cyan-300 font-semibold mb-6 text-center">
            How Communication Occurs Without Words
          </h2>

          <div className="space-y-6 text-sm sm:text-base md:text-lg">
            <p>
              Sessions involve minimal verbal guidance. This is intentional.
              Many forms of awareness do not rely on language to function.
            </p>

            <p>
              Through pacing, silence, breath orientation, and presence,
              clients often report that their body “understands” what to do
              without being told.
            </p>

            <p>
              These responses are understood as internally generated
              physiological and perceptual adjustments associated with
              relaxation and attentional clarity.
            </p>
          </div>
        </section>

        
      </div>
    </PageWrapper>
  );
}
