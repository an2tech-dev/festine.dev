/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // For Vite projects
    "./src//*.{vue,js,ts,jsx,tsx}", // Include all relevant file types
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
