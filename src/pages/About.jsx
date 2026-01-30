import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import EyePhilosophy from "../components/EyePhilosophy";

export default function About() {
  return (
    <PageWrapper>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-gray-200">

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold mb-8 text-center">
            About the Practitioner
          </h1>

          <div className="space-y-6 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              Tapobroto Bhattacharya is a practitioner working with
              awareness-based and somatic-oriented wellness approaches,
              delivered exclusively through online sessions.
            </p>

            <p>
              His work focuses on helping individuals develop clearer awareness
              of internal states — including breath, sensation, and emotional
              response — within a structured, ethical, and consent-based
              framework.
            </p>

            <p>
              Sessions are guided, non-invasive, and non-directive. Rather than
              attempting to change or interpret experience, the work supports
              the nervous system’s inherent capacity for self-regulation when
              conditions of safety and attention are present.
            </p>

            <p>
              The practitioner’s role is facilitative, not diagnostic or
              prescriptive. Autonomy, discretion, and respect for boundaries are
              foundational to all interactions.
            </p>
          </div>
        </motion.section>

        {/* PHILOSOPHY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-cyan-300 font-semibold mb-8 text-center">
            Philosophy
          </h2>

          <div className="space-y-6 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              The guiding principle of this work is that awareness precedes
              regulation. When attention is directed inward in a stable,
              non-judgmental manner, physiological and emotional systems may
              reorganise naturally.
            </p>

            <p>
              No effort is made to correct, fix, or override experience.
              Awareness itself is treated as the primary stabilising influence.
            </p>
          </div>
        </motion.section>

        <EyePhilosophy />

        {/* SCOPE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl text-cyan-300 font-semibold text-center mb-6">
            Scope of Practice & Boundaries
          </h2>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
            <li>Online sessions only</li>
            <li>Non-invasive, no physical contact</li>
            <li>No diagnosis or treatment</li>
            <li>No interpretation imposed</li>
            <li>Participation is voluntary and client-led</li>
          </ul>
        </motion.section>
      </div>
    </PageWrapper>
  );
}
