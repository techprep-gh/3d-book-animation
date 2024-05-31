/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "image-shadow": "5px 5px 20px #2e2e2e",
        "back-cover-shadow": "-10px 0 50px 10px #2e2e2e",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-900": {
          perspective: "900px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".transition-transform-075s": {
          transition: "transform 0.75s ease",
        },
        ".rotate-y-30": {
          transform: "rotateY(-30deg)",
        },
        ".content-empty": {
          content: '" "',
        },
        ".page-transform": {
          transform:
            "translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(25px)",
        },
        ".back-cover-transform": {
          transform: "translateZ(-50px)",
        },
      });
    },
  ],
};
