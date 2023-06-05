/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      opacity: {
        0: "0",
        100: "1",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: {
        500: "500ms",
      },
      colors: {
        primary: {
          DEFAULT: "#22c998",
        },
      },
    },
  },
  plugins: [],
};
