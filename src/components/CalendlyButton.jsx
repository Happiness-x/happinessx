import { useEffect } from "react";
import { isBrowser } from "../utils/isBrowser";

export default function CalendlyButton() {
  useEffect(() => {
    if (!isBrowser) return;

    const initCalendly = () => {
      const el = document.getElementById("calendly-embed");
      if (!el || !window.Calendly) return;

      el.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/happinessx",
        parentElement: el,
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
  }, []);

  return <div id="calendly-embed" className="w-full h-full" />;
}
