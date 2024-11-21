/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        quattrocento: ["Quattrocento"], // Satisfy yazı tipi eklendi
      },
    },
  },
  plugins: [],
};
