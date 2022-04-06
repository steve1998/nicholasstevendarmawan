module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/content/**/*.{md}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        firacode: ["Fira Code", "monospace"],
        unicaone: ["Unica One", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
