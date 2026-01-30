import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const track = (label) => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "Floating Contact",
        event_label: label,
      });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/918777845559?text=Hello%20I%20want%20to%20book%20a%20healing%20session"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        onClick={() => track("WhatsApp")}
        className="w-14 h-14 rounded-full bg-[#25D366]
                   flex items-center justify-center
                   shadow-lg hover:scale-110 transition"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-7 h-7" />
      </a>

      {/* Call */}
      <a
        href="tel:+918777845559"
        aria-label="Call now"
        title="Call now"
        onClick={() => track("Call")}
        className="w-14 h-14 rounded-full bg-cyan-600
                   flex items-center justify-center
                   shadow-lg hover:scale-110 transition
                   text-black font-bold text-xl"
      >
        📞
      </a>
    </div>
  );
}
