import winduum from "winduum"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/winduum/src/**/*.js", "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#16a34a",
      blue: "#0ea5e9",
      grey: "#f3f4f6",
      white: "#ffffff",
      "body-bg": "#fafaff",
      "primary-accent": "#3b82f6",
      "main-text-color": "#0D1718",
      "darker-text-color": "#171717",
      "lighter-text-color": "#737373",
      "border-color": "#dfe2e2"
    },
    borderWidth: {
      DEFAULT: "1px"
    }
  },
  plugins: [winduum({})]
}
