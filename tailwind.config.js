/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: "#5349C3",
        light_main: "#F1F1F9",
        gray: "#7b8592",
        light_gray: "#DBDDE1"

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        segoe: ["Segoe UI", "sans-serif"],
        times: ["Times New Roman", "serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    },
  },
  variants: {
    display: ["responsive"],
  },
  plugins: [],
}

