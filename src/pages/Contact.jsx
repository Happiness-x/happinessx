import FloatingContact from "../components/FloatingContact";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200">
      <h1 className="text-4xl text-cyan-300 font-semibold mb-6">Contact Us</h1>

      <p className="mb-6 text-gray-300">
        For enquiries or to ask about sessions, please use the contact widget
        (the floating button) or email us at <a href="mailto:hello@happinessx.in" className="text-cyan-300 underline">hello@happinessx.in</a>.
      </p>

      <p className="text-gray-400">
        This page is informational — booking is available after reviewing
        session details and is always a user-initiated action.
      </p>

      <FloatingContact />
    </div>
  );
}
