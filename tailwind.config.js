/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient-home":
          "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)",
        "custom-gradient-details":
          "linear-gradient(180deg, #DEF628 5.09%, #121212 43.28%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
