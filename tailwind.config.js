/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        redhat: ["RedHatText", "sans-serif"],
      },
    },
  },
  plugins: [],
};
