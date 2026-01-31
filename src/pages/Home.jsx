import { useEffect, useState, useRef } from "react";

const isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined";

/* ===== Meta helper for SEO (client-side) ===== */
function MetaHome() {
  useEffect(() => {
    if (!isBrowser) return;
    document.title = "Awareness-Based Wellness for Emotional Calm & Body Connection";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Private, awareness-based wellness experiences supporting relaxation, body awareness, and emotional grounding.";
  }, []);

  return null;
}

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
          className="max-w-4xl"
          style={{
            transform: reduceMotion ? "none" : `translateY(${-progress * 40}px)`,
            opacity: reduceMotion ? 1 : 1 - progress * 0.75,
            transition: "transform 0.25s linear, opacity 0.25s linear",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-cyan-300 leading-tight">
            “This understands something I haven’t said out loud.”
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Calm, private, awareness-based sessions creating space for emotional
            permission, safety, and quiet inner listening. You remain in control
            at every moment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition text-center"
              aria-label="Explore services"
            >
              Explore Services
            </a>
          </div>

          {/* micro-trust strip */}
          <div className="mt-6 inline-flex items-center gap-4 text-xs text-gray-300 bg-black/40 px-4 py-2 rounded-full">
            <span className="px-2">No physical touch</span>
            <span className="h-2 w-px bg-gray-600 inline-block" />
            <span className="px-2">Non‑invasive</span>
            <span className="h-2 w-px bg-gray-600 inline-block" />
            <span className="px-2">You are always in control</span>
          </div>
        </div>
      </section>

      {/* Set SEO meta for home (client-side when rendered) */}
      {isBrowser ? (
        <MetaHome />
      ) : null}

      <PetalSection>
        <h2 className="text-4xl md:text-5xl text-cyan-300 font-semibold text-center mb-12">
          How the Experience Supports You
        </h2>

        {/* Recognition */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-lg leading-relaxed text-gray-300">
            Many people carry unspoken tension, emotional weight, and
            unexpressed sensation in their body — without words for it.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            This practice is built to notice and hold those subtle signals with
            curiosity and care.
          </p>
        </div>

        {/* What This Space Offers */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <h3 className="text-2xl text-cyan-300 font-semibold mb-6">What This Space Offers</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-2">
              <li className="leading-relaxed">Awareness — gently noticing sensation and presence</li>
              <li className="leading-relaxed">Inner listening — a moment to attend without explanation</li>
              <li className="leading-relaxed">Nervous system settling — slow, calming pacing</li>
              <li className="leading-relaxed">Body‑based knowing — nonverbal sense of self and safety</li>
            </ul>
          </div>

          {/* What This Is Not */}
          <div className="card">
            <h3 className="text-2xl text-cyan-300 font-semibold mb-6">What This Is Not</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-2">
              <li className="leading-relaxed">Not therapy or clinical treatment</li>
              <li className="leading-relaxed">Not medical care</li>
              <li className="leading-relaxed">No physical contact</li>
              <li className="leading-relaxed">Not interpretation, diagnosis, or advice</li>
            </ul>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="microcopy-reassurance">
            Begin with a private, anonymous self-reflection — experience-based, not outcome-based.
          </p>
        </div>
      </PetalSection>

      {/* ================= FOOTER GRADIENT ================= */}
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
