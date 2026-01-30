/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal-dark": "#0f172a",
        "cyan-glow": "#06b6d4",
      },
      backgroundImage: {
        "happinessx-gradient":
          "linear-gradient(to bottom, #000000, #0f172a, #042f2e)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out both",
      },
    },
  },
  plugins: [],
};
