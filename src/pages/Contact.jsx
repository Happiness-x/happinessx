import FloatingContact from "../components/FloatingContact";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200">
      
      <h1 className="text-4xl text-cyan-300 font-semibold mb-6">
        Contact Us
      </h1>

      <p className="mb-6 text-gray-300 leading-relaxed">
        If you have questions, need clarification, or would like to understand
        whether these sessions may be appropriate for you, you’re welcome to
        reach out.
      </p>

      <div className="space-y-4 text-gray-300">
        <p>
          <span className="text-gray-400">Email:</span>{" "}
          <a
            href="mailto:contact@happinessx.in"
            className="text-cyan-300 underline hover:text-cyan-200"
          >
            contact@happinessx.in
          </a>
        </p>

        <p>
          <span className="text-gray-400">Mobile / WhatsApp:</span>{" "}
          <a
            href="https://wa.me/918777845559"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline hover:text-cyan-200"
          >
            +91 87778 45559
          </a>
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-400 leading-relaxed">
        Communication is optional and entirely client-initiated.  
        This page is for enquiries only — there is no obligation to book,
        continue, or proceed further.
      </p>

      <p className="mt-4 text-sm text-gray-500 italic">
        All sessions are non-medical, non-invasive, and offered within clear
        ethical and consent-based boundaries.
      </p>

      {/* Floating WhatsApp / Contact Button */}
      <FloatingContact />
    </div>
  );
}
