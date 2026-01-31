import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function HowItWorks() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const path = params.get("path");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const handler = () => setReduceMotion(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const motionProps = reduceMotion
    ? { initial: {}, whileInView: {}, transition: {} }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, viewport: { once: true } };

  // tone adjustments
  const toneAdjust = {
    quantum: "This perspective uses symbolic and metaphorical language to help some people make sense of subtle experience.",
    women: "This path adds reassurance, normalization, and explicit attention to safety and consent for women.",
    learning: "This section takes an educational tone focused on practice and gentle skills for awareness.",
    guided: "This path emphasizes practical structure, pacing, and what to expect in a guided session.",
  }[path];
  return (
    <PageWrapper>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-gray-200">

        {/* ================= PAGE INTRO ================= */}
        <motion.section
          {...motionProps}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold mb-8">
            How It Works
          </h1>

          <p className="max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            Sessions at Happiness X are designed to support awareness, relaxation,
            and self-regulation through a calm, non-directive, and client-led
            process. The approach emphasizes presence, attentiveness, and subtle
            non-verbal communication rather than force, instruction, or
            intervention.
          </p>

          <p className="max-w-3xl mx-auto mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
            Each session is structured to allow the nervous system to settle
            naturally and for inner awareness to emerge at the client’s own pace.
          </p>

          {toneAdjust && (
            <p className="mt-4 max-w-3xl mx-auto text-sm text-gray-300">{toneAdjust}</p>
          )}
        </motion.section>

        {/* ================= STEP 1 ================= */}
        <motion.section {...motionProps} className="mb-20">
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
            1. Settling & Orientation
          </h2>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            Clients begin by positioning themselves in a quiet, private space
            where they can be seen clearly. Attention is gently oriented to the
            present moment, supporting a natural sense of safety, pacing, and
            readiness.
          </p>
        </motion.section>

        {/* ================= STEP 2 ================= */}
        <motion.section
           {...motionProps}
           className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
            2. Awareness of Breath & Posture
          </h2>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            Natural breathing, posture, and stillness are observed without force.
            Simple yoga-inspired positions may be used to support comfort,
            grounding, and embodied awareness.
          </p>

          <p className="mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The practitioner observes overall posture, breath rhythm, and visible
            patterns of movement to support pacing and responsiveness.
          </p>
        </motion.section>

        {/* ================= STEP 3 ================= */}
        <motion.section
           {...motionProps}
           className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
            3. Non-Verbal Guidance
          </h2>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            Rather than continuous verbal instruction, sessions rely on attentive
            presence, eye-based attunement, pacing, pauses, and silence.
          </p>

          <p className="mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The practitioner remains visually engaged, using timing and subtle
            responsiveness to support a calm, client-led experience.
          </p>
        </motion.section>

        {/* ================= STEP 4 ================= */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
            4. Internal Regulation
          </h2>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            As awareness deepens, the body’s own capacity for settling and
            self-regulation may become more accessible.
          </p>

          <p className="mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Any responses, sensations, or emotional shifts are internally
            generated by the client’s own system. The practitioner does not
            impose interpretation or direction.
          </p>
        </motion.section>

        {/* ================= STEP 5 ================= */}
        <motion.section
           {...motionProps}
           className="mb-28"
        >
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4">
            5. Integration & Closure
          </h2>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg">
            Each session concludes with space for grounding, reflection, and
            reorientation before returning to daily activity.
          </p>

          <p className="mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
            This supports a smooth transition and allows the experience to be
            absorbed at a comfortable pace.
          </p>
        </motion.section>

        {/* ================= NON-VERBAL COMMUNICATION ================= */}
        <motion.section {...motionProps} className="border-t border-cyan-900 pt-20">
          <h2 className="text-3xl md:text-4xl text-cyan-300 font-semibold mb-8 text-center">
            How We Communicate Without Words
          </h2>

          <div className="space-y-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
            <p>
              Sessions emphasize natural, non-verbal signals such as eye contact,
              breath rhythm, posture, fingur movement and timing. This attentive presence supports
              a regulated environment without the need for constant explanation
              or interpretation.
            </p>

            <p>
              Intuition is used as a form of informed, moment-to-moment
              responsiveness — allowing the practitioner to adapt pacing,
              silence, and guidance based on what is visibly and experientially
              present.
            </p>

            <p>
              Clients are not required to describe or analyze what they feel.
              When it feels supportive, clients may be gently invited to share or
              reflect on their experience, always at their own comfort level.
            </p>

            <p>
              The practitioner does not assign meaning, but supports the client’s
              own awareness to emerge naturally.
            </p>
          </div>

          <p className="mt-16 text-center text-xs text-gray-500 italic">
            Complementary wellness support · Non-directive · Non-invasive · Client-led
          </p>
        </motion.section>

        {/* Is this the right kind of experience? */}
        <section className="mt-12 text-center border-t border-cyan-900 pt-10">
          <h3 className="text-2xl text-cyan-300 font-semibold mb-4">Is this the right kind of experience for you?</h3>
          <p className="text-gray-300 mb-6">If you're curious, consider a brief private self-reflection to see how this approach fits.</p>
          <a href="/self-reflection" className="inline-block px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition" style={{minHeight:44}}>Am I the Right Person for This?</a>
        </section>

      </div>
    </PageWrapper>
  );
}
