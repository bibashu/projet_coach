/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoutez les extensions de fichiers que vous utilisez
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
