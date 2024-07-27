/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
