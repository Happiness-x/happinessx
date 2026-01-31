import { NavLink } from "react-router-dom";

export default function Header({ onBookNow }) {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-black/70 backdrop-blur-md
        border-b border-cyan-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left: Brand */}
        <div className="text-cyan-300 font-semibold text-xl">
          Happiness X
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-8 text-cyan-200">
          {/* Decision: route 'Learning' via How It Works to encourage funnel flow while preserving direct access to learning resources. */}
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Quantum", "/quantum-healing"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
            ["Learning", "/how-it-works?path=learning"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-cyan-300 transition ${isActive ? "text-cyan-300" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Book (optional) — demoted visual emphasis and micro-copy to reduce pressure */}
        <a
          href="/book"
          title="Booking is optional — available after you review session details"
          className="
            ml-4 px-4 py-1 rounded-full border border-cyan-600
            bg-black/20 text-cyan-300 font-semibold text-sm
            hover:bg-black/30 transition inline-flex items-center justify-center
          "
        >
          Book (optional)
        </a>
      </div>
    </header>
  );
}
