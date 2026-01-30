export default function StickyBookNow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        px-10 py-4 rounded-full
        bg-cyan-500 text-black font-semibold text-lg
        shadow-xl shadow-black/40
        hover:bg-cyan-400 hover:scale-105
        transition
      "
    >
      Book Now
    </button>
  );
}
