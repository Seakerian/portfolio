/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/images/pattern.png')",
      },

      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },

      keyframes: {
        blink: {
          "0%,100": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        gradient: "gradient 12s ease infinite",
      },
    },
  },

  plugins: [],
};
