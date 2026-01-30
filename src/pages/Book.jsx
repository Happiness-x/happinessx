import { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Book() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Open booking modal via event
      window.dispatchEvent(new Event("open-booking"));
      try {
        if (window.gtag) window.gtag("event", "open_booking", {});
      } catch (e) {}
    }
  }, []);

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-6 text-center">
        <h1 className="text-3xl text-cyan-300 font-semibold">Booking</h1>
        <p className="text-gray-300">Opening booking modal — if it doesn't appear, use the button below.</p>
        <div className="pt-8">
          <button
            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new Event("open-booking"))}
            className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold"
          >
            Open Booking
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
