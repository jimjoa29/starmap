/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // El asterisco doble (**) permite que Tailwind entre en la carpeta 'pages', Joan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}