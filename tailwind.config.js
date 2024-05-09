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
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./pics/tlou1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
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
