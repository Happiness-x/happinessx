import { useEffect, useRef } from "react";

export default function CalendlyEmbed({ url }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initCalendly = () => {
      if (!window.Calendly) return;

      window.Calendly.initInlineWidget({
        url,
        parentElement: document.getElementById("calendly-container"),
      });
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div
        id="calendly-container"
        className="w-full rounded-2xl border border-cyan-900 overflow-hidden"
        style={{
          height: "80vh",
          minHeight: "900px",
        }}
      />
    </div>
  );
}
