import { useEffect, useState, useRef } from "react";

const isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined";

/* ================= PETAL SECTION ================= */
function PetalSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isBrowser) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 px-6 py-28 transition-all duration-[1200ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0)"
          : "scale(0.94) translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [awakeningMode, setAwakeningMode] = useState(false);

  /* ===== VISIT MODE ===== */
  useEffect(() => {
    if (!isBrowser) return;

    const visited = window.localStorage?.getItem("hx_visited");
    if (!visited) {
      setAwakeningMode(true);
      window.localStorage?.setItem("hx_visited", "true");
    }
  }, []);

  /* ===== ACCESSIBILITY ===== */
  useEffect(() => {
    if (!isBrowser) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);

    const handler = () => setReduceMotion(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  /* ===== SCROLL ===== */
  useEffect(() => {
    if (!isBrowser) return;

    setHeroHeight(window.innerHeight);
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = heroHeight ? Math.min(scrollY / heroHeight, 1) : 0;

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">

      {/* ================= EYE BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="eye-wrapper">
          <div
            className="eye-glow"
            style={{ animationDuration: awakeningMode ? "9s" : "14s" }}
          />
          <div
            className="eye-wave-container"
            style={{ animationDuration: awakeningMode ? "16s" : "24s" }}
          >
            <img
              src="/Golden_Eye_of_Ra_emblem.webp"
              alt="Golden Eye of Ra"
              className="eye-image"
            />
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 h-[100svh] flex items-center justify-center px-6 text-center">
        <div
          className="max-w-5xl"
          style={{
            transform: reduceMotion ? "none" : `translateY(${-progress * 60}px)`,
            opacity: reduceMotion ? 1 : 1 - progress * 0.85,
            transition: "transform 0.25s linear, opacity 0.25s linear",
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-300 leading-tight">
            Experience Subtle Connection
            <br />
            <span className="font-caveat text-cyan-200 font-normal">
              Deep Inner Balance & Awareness
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            A client-centered, one-to-one wellness experience designed to heighten
            body awareness through intuitive presence and traditional wisdom.
          </p>

          <p className="mt-8 italic text-cyan-200">
            Where ancient insight meets present-moment awareness.
          </p>
        </div>
      </section>

      <PetalSection>
        <h2 className="text-3xl md:text-4xl text-cyan-300 font-semibold text-center mb-16">
          How the Experience Supports You
        </h2>
      </PetalSection>

      <div className="relative z-10 h-40 bg-gradient-to-b from-transparent to-black" />

      <style>{`
        .eye-wrapper {
          position: relative;
          width: min(88vw, 88vh);
          max-width: 900px;
          aspect-ratio: 1 / 1;
        }
        .eye-glow {
          position: absolute;
          inset: -14%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255,215,140,0.18),
            rgba(255,215,140,0.08),
            transparent 70%
          );
          animation: glowBreath ease-in-out infinite;
          filter: blur(10px);
        }
        .eye-wave-container {
          width: 100%;
          height: 100%;
          animation: eyeWave ease-in-out infinite;
        }
        .eye-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 24px rgba(255,215,120,0.18));
        }
        @keyframes glowBreath {
          0% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.65; transform: scale(1.04); }
          100% { opacity: 0.35; transform: scale(0.96); }
        }
        @keyframes eyeWave {
          0% { transform: perspective(1200px) rotateX(0deg) rotateY(0deg); }
          50% { transform: perspective(1200px) rotateX(1deg) rotateY(-1deg); }
          100% { transform: perspective(1200px) rotateX(0deg) rotateY(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .eye-glow,
          .eye-wave-container {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
