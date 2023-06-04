/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Helvetica", "Arial", "sans-seriff"],
    },
    extend: {
      colors: {
        primary: {
          DEFALUT: "#22c998",
        },
      },
    },
  },
  plugins: [],
};
