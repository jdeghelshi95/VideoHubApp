/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,css,js}",
"./views/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss:{},
      autoprefixer:{},
    }
  ],
}
