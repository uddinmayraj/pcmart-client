/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        temtheme: {
          primary: '#F84248',
          secondary: '#232830',
          neutral: '#232323',
          ghost: '#969696'
        }
      }
    ],
  },
}