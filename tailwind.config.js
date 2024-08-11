/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoutez les extensions de fichiers que vous utilisez
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'hidden',
    'block',
    'flex', // Ajoutez les classes que vous souhaitez conserver
    'translate-x-0', // Exemple d'une classe pour la translation
    '-translate-x-full', // Exemple d'une classe pour la translation
  ],
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
