/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Main.jsx",
    "./src/style.css",
    "./src/App.js",
    "./src/App.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": {
    html: "html",
    javascript: "javascript",
    css: "css",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
};
