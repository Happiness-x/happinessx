import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function ReflectionResults() {
  const [mounted, setMounted] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendStatus, setResendStatus] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = mounted
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0";

  /**
   * Resend the reflection results email
   */
  async function handleResendEmail() {
    if (!userEmail) {
      setResendStatus({ type: "error", message: "Please enter your email address." });
      return;
    }

    setResending(true);
    setResendStatus(null);

    try {
      const response = await fetch("/api/send-reflection-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        setResendStatus({
          type: "success",
          message: "Email sent. Check your inbox.",
        });
        setUserEmail("");
      } else {
        setResendStatus({
          type: "error",
          message: "Unable to send email. Please try again.",
        });
      }
    } catch (error) {
      setResendStatus({
        type: "error",
        message: "Connection error. Please check your email and try again.",
      });
    } finally {
      setResending(false);
    }
  }

  return (
    <PageWrapper>
      <div
        className={`max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16 transition-all duration-700 ease-out ${reveal}`}
      >
        {/* ================= HEADER ================= */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl text-cyan-300 font-semibold">
            Your Reflection Has Been Received
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-300">
            Thank you for taking time to pause and listen to your own inner experience.
            That attention is itself a form of care.
          </p>
        </section>

        {/* ================= NEUTRAL SUMMARY ================= */}
        <section className="bg-black/50 border border-cyan-900 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl text-cyan-300 font-semibold">What Happens Next</h2>
          <div className="space-y-3 text-gray-300">
            <p>
              A gentle acknowledgement email has been sent to the address you provided.
              No response is needed — this is simply a quiet confirmation that your reflection
              was received.
            </p>
            <p>
              If you'd like to explore a guided awareness session further, you can view
              detailed information about what a session entails and how it unfolds.
            </p>
            <p className="text-sm text-gray-400 italic">
              All information remains confidential. You are under no obligation to proceed.
            </p>
          </div>
        </section>

        {/* ================= EXPLORATION PATH ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl text-cyan-300 font-semibold text-center">
            Your Next Steps (All Optional)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Session Details */}
            <div className="bg-black/40 border border-cyan-900 rounded-lg p-6 space-y-4 flex flex-col">
              <h3 className="text-lg text-cyan-300 font-semibold">
                Learn About Sessions
              </h3>
              <p className="text-sm text-gray-300 flex-grow">
                View detailed information about what a guided awareness session includes,
                how it unfolds, and what to expect before, during, and after.
              </p>
              <a
                href="/session-details"
                className="mt-4 px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition text-center"
              >
                View Session Details
              </a>
            </div>

            {/* Book a Session */}
            <div className="bg-black/40 border border-cyan-900 rounded-lg p-6 space-y-4 flex flex-col">
              <h3 className="text-lg text-cyan-300 font-semibold">
                Book a Session
              </h3>
              <p className="text-sm text-gray-300 flex-grow">
                If you'd like to schedule a guided awareness session, you can view
                availability and booking information.
              </p>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("open-booking"));
                  }
                }}
                className="mt-4 px-6 py-3 rounded-full border border-cyan-500 text-cyan-300 font-semibold hover:bg-cyan-900/30 transition text-center"
              >
                Open Booking
              </button>
            </div>
          </div>
        </section>

        {/* ================= EMAIL RESEND ================= */}
        <section className="border-t border-cyan-900 pt-8 space-y-6">
          <h2 className="text-2xl text-cyan-300 font-semibold text-center">
            Resend Acknowledgement Email
          </h2>

          <div className="max-w-2xl mx-auto bg-black/50 border border-cyan-900 rounded-lg p-6 space-y-4">
            <p className="text-gray-300 text-sm">
              If you didn't receive the acknowledgement email, you can request it again below.
            </p>

            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-black border border-cyan-800 rounded-lg p-3 text-gray-200 placeholder-gray-500"
            />

            <button
              onClick={handleResendEmail}
              disabled={resending}
              className="w-full px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resending ? "Sending..." : "Resend Email"}
            </button>

            {resendStatus && (
              <div
                className={`text-sm p-3 rounded-lg ${
                  resendStatus.type === "success"
                    ? "bg-green-900/30 border border-green-700 text-green-200"
                    : "bg-red-900/30 border border-red-700 text-red-200"
                }`}
              >
                {resendStatus.message}
              </div>
            )}
          </div>
        </section>

        {/* ================= FOOTER NOTE ================= */}
        <section className="space-y-4 pt-8 border-t border-gray-700 text-xs text-gray-500">
          <p>
            This service is not a substitute for medical treatment, psychotherapy, or
            emergency mental health care. If you are in crisis or experiencing a mental
            health emergency, please contact a healthcare provider or crisis line.
          </p>
        </section>

        {/* ================= RETURN HOME ================= */}
        <section className="text-center pt-8">
          <a
            href="/"
            className="text-gray-400 hover:text-gray-200 transition underline"
          >
            Return Home
          </a>
        </section>
      </div>
    </PageWrapper>
  );
}
