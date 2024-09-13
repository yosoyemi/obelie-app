/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },},
  },
  plugins: [('@tailwindcss/aspect-ratio'),('@tailwindcss/forms'),],
};
