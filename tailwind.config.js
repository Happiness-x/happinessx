/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'teal-dark': '#0f172a',
        'cyan-glow': '#06b6d4',
      },
      backgroundImage: {
        'happinessx-gradient': 'linear-gradient(to bottom, #000000, #0f172a, #042f2e)',
      },
    },
  },
  plugins: [],
};
