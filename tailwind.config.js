import winduum from 'winduum'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/winduum/src/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      winduum({

      })
  ],
}

