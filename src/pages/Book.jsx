import { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

export default function Book() {
  // Booking should never auto-open on page load; require explicit user action.
  // This route provides an explicit place where users can open the booking modal themselves.

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-6 text-center">
        <h1 className="text-3xl text-cyan-300 font-semibold">Booking</h1>
        <p className="text-gray-300">Booking is available when you choose to proceed — this page provides an explicit button to open the booking modal.</p>
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
