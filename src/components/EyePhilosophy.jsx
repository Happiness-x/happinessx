import { motion } from "framer-motion";

export default function EyePhilosophy() {
  return (
    <>
      {/* ================= THE EYE PHILOSOPHY ================= */}
      <motion.section
        id="eye-philosophy"
        className="
          relative w-full
          text-white font-serif
          px-6 py-32
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">

          {/* Section Title */}
          <motion.h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              text-cyan-300 font-semibold
              tracking-wide mb-6
            "
            initial={{ scale: 0.98, letterSpacing: "0.08em" }}
            whileInView={{ scale: 1, letterSpacing: "0.04em" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            The Eye Philosophy
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="
              italic text-cyan-200
              text-base sm:text-lg
              max-w-2xl mx-auto mb-12
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Awareness is not observation alone—it is recognition without resistance.
          </motion.p>

          {/* Body */}
          <div className="space-y-8 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Happiness X is guided by the philosophy of the Eye: the ability to see
              inward with clarity, presence, and neutrality. When attention turns
              toward inner experience without judgment, balance begins to restore
              itself naturally.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              This approach does not seek to fix or force change. Instead, it allows
              awareness to illuminate emotional patterns, stored tension, and
              unconscious responses. Through conscious recognition, the system
              reorganizes—bringing calm, clarity, and stability back into alignment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Eye represents inner intelligence: a quiet, observing state where
              transformation unfolds gently. Healing, in this philosophy, is not an
              act of control, but a return to coherence.
            </motion.p>
          </div>

          {/* Closing Line */}
          <motion.p
            className="
              mt-16 italic
              text-cyan-300
              text-base sm:text-lg
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            What is seen clearly no longer needs to be carried.
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}
