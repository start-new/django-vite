/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,css}",
    "../.venv/**/crispy_tailwind/**/*.html",
    "../**/templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

