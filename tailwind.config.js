/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "src/Components/**",
    "src/Components/Header/**"
  ],

  theme: {
    extend: {
      colors: {
        padrao: "#3c4858",
        padraoHover: "#000000",
        padrao1: "#8AA1BF",
        padrao2: "#7EB0F2",
        padrao3: "#529DFF",
        padrao4: "#7B838C",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".after-first-child > * + *": {
          /* Your styles for children after the first element go here */
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
