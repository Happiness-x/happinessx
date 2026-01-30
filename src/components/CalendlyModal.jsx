import { useEffect, useRef } from "react";

const isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined";

export default function CalendlyModal({ open, onClose }) {
  const initialized = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBrowser || !open) return;

    document.body.style.overflow = "hidden";

    const intakeSummary = window.localStorage?.getItem("hx_intake_summary");

    const calendlyUrl = intakeSummary
      ? `https://calendly.com/happinessx?notes=${encodeURIComponent(intakeSummary)}`
      : "https://calendly.com/happinessx";

    const initCalendly = () => {
      if (!window.Calendly || !containerRef.current) return;

      containerRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: containerRef.current,
      });
    };

    if (!initialized.current) {
      initialized.current = true;

      if (window.Calendly) {
        initCalendly();
      } else {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = initCalendly;
        document.body.appendChild(script);
      }
    } else {
      initCalendly(); // instant re-open
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleClose() {
    if (isBrowser) {
      window.localStorage?.removeItem("hx_intake_summary");
    }
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-5xl bg-black rounded-2xl border border-cyan-900 shadow-2xl flex flex-col"
        style={{ height: "90vh" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-cyan-300 hover:text-white text-2xl"
          aria-label="Close booking"
        >
          ✕
        </button>

        <div ref={containerRef} className="flex-1 w-full overflow-y-auto" />
      </div>
    </div>
  );
}
