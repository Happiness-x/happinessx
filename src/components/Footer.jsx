import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black border-t border-cyan-900 px-6 py-12 text-center text-sm text-gray-400">

      <p className="text-cyan-300 text-lg font-semibold mb-2">
        Happiness X
      </p>

      <p className="max-w-xl mx-auto leading-relaxed">
        Complementary, client-centered wellness services focused on awareness,
        relaxation, and personal wellbeing. Non-medical. Online sessions only.
      </p>

      {/* Navigation */}
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
        <Link to="/learning" className="hover:text-cyan-300">Learning</Link>
        <Link to="/quantum-therapeutic-touch" className="hover:text-cyan-300">Quantum Therapeutic Touch</Link>
        <Link to="/womens-wellness" className="hover:text-cyan-300">Women’s Wellness</Link>
        <Link to="/self-reflection" className="hover:text-cyan-300">Self-Reflection</Link>
        <Link to="/faq" className="hover:text-cyan-300">FAQ</Link>
        <Link to="/ethics-consent" className="hover:text-cyan-300">Ethics & Consent</Link>
        <Link to="/privacy-disclaimer" className="hover:text-cyan-300">Privacy & Disclaimer</Link>
        <Link to="/code-of-conduct" className="hover:text-cyan-300">Code of Conduct</Link>
        <Link to="/terms-cancellation" className="hover:text-cyan-300">Terms & Cancellation</Link>
      </div>

      <p className="mt-6 max-w-2xl mx-auto text-gray-500">
        Happiness X does not diagnose, treat, cure, or prevent any medical or
        psychological condition and is not a substitute for licensed healthcare.
        Individual experiences vary.
      </p>

      <p className="mt-4 text-gray-500">
        © {new Date().getFullYear()} Happiness X · All rights reserved
      </p>
    </footer>
  );
}
