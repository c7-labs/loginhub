/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#eef2ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#312e81'
        }
      }
    },
  },
  plugins: [],
};
