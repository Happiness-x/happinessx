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
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Quantum", "/quantum-healing"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
            ["Learning", "/learn"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-cyan-300 transition ${
                  isActive ? "text-cyan-300" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Book Now */}
        <button
          onClick={() => window.dispatchEvent(new Event("open-booking"))}
          className="
            ml-4 px-6 py-2 rounded-full
            bg-cyan-500 text-black font-semibold
            hover:bg-cyan-400 hover:scale-105
            transition
            shadow-lg
          "
        >
          Book Now
        </button>
      </div>
    </header>
  );
}
