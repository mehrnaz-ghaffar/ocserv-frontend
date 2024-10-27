/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#FF7700", // Deep orange
          600: "#e56700", // Darker shade for hover
        },
        gray: {
          900: "#1F1F1F", // Primary dark background
          800: "#2A2A2A", // Dark gray for background elements
          700: "#4A4A4A", // Secondary dark gray
        },
      },
      fontFamily: {
        sans: ['"Rethink Sans"', "sans-serif"], // Use a thin, curvy font like Rethink Sans
      },
    },
  },
  plugins: [],
};
