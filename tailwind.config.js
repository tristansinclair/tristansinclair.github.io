/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./components-tldr/**/*.{html,js,ts,jsx,tsx}",
    "./components-nil/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        none: "0 0 0",
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        "cardinal-red": { DEFAULT: "#8C1515", 300: "#B83A4B", 700: "#820000" },
        "pa-green": { DEFAULT: "#175E54", 300: "#2D716F", 700: "#014240" },
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
        "tldr-yellow": {
          DEFAULT: "#E8BF60",
          50: "#FFFFFF",
          100: "#FDF8EF",
          200: "#F7EACB",
          300: "#F2DCA7",
          400: "#EDCD84",
          500: "#E8BF60",
          600: "#E1AB2F",
          700: "#BD8C1B",
          800: "#8C6814",
          900: "#5B430D",
        },
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

        "tldr-red": {
          DEFAULT: "#DC6B6B",
          50: "#FFFFFF",
          100: "#FBEFEF",
          200: "#F3CECE",
          300: "#ECADAD",
          400: "#E48C8C",
          500: "#DC6B6B",
          600: "#D13E3E",
          700: "#AE2929",
          800: "#801E1E",
          900: "#531414",
        },
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
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
