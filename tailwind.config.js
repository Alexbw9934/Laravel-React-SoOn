/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/*.{js, jsx, ts, tsx}",
    "./resources/js/**/*.{js, jsx, ts, tsx}",
    "./resources/views/*.balde.php",
    "./resources/views/**/*.blade.php",
    "./storage/framework/views/*.php"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
