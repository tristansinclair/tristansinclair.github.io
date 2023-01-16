/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./components-tldr/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tldr-blue": {
          DEFAULT: "#31AFFF",
          50: "#E9F6FF",
          100: "#D4EEFF",
          200: "#ABDFFF",
          300: "#83CFFF",
          400: "#5ABFFF",
          500: "#31AFFF",
          600: "#0098F8",
          700: "#0075C0",
          800: "#005388",
          900: "#003150",
        },
        "tldr-yellow": "#E8BF60",
        "tldr-green": {
          DEFAULT: "#65C3AD",
          50: "#E9F6F3",
          100: "#DAF1EC",
          200: "#BDE5DC",
          300: "#A0DACC",
          400: "#82CEBD",
          500: "#65C3AD",
          600: "#43AD94",
          700: "#348471",
          800: "#245C4F",
          900: "#14342C",
        },

        "tldr-red": "#DC6B6B",
      },

      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
