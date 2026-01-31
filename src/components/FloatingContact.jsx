import { useEffect, useRef, useState } from "react";
import { isBrowser } from "../utils/isBrowser";

export default function FloatingContact() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isBrowser) return;

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const track = (label) => {
    if (!isBrowser || !window.gtag) return;

    window.gtag("event", "click", {
      event_category: "Floating Contact",
      event_label: label,
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/918777845559"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp"
        onClick={() => track("WhatsApp")}
        className="w-14 h-14 rounded-full bg-[#25D366]
                   flex items-center justify-center
                   shadow-lg hover:scale-110 transition
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <img src="/whatsapp-icon.svg" alt="" className="w-7 h-7" />
      </a>

      {/* Call */}
      <a
        href="tel:+918777845559"
        aria-label="Call us"
        title="Call"
        onClick={() => track("Call")}
        className="w-14 h-14 rounded-full bg-cyan-600
                   flex items-center justify-center
                   shadow-lg hover:scale-110 transition
                   text-black font-bold text-xl
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        📞
      </a>
    </div>
  );
}
