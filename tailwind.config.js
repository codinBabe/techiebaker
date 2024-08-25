/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #F67D1F, 0 0 20px #464646" },
          "50%": { boxShadow: "0 0 20px #F67D1F, 0 0 20px #131211" },
        },
      },
      animation: {
        glow: "glow 1.5s infinite linear",
      },
      colors: {
        primaryOrange: "#F67D1F",
        orange100: "#FFECDD",
        orange200: "#C2B3A8",
        orange300: "#F0D0B8",
        orange400: "#C0BCB8",
        primaryBlack: "#131211",
        black100: "#464646",
        black200: "#E4E4E4",
        blue100: "#E3E3E3",
        blue200: "#D9D9FA",
      },

      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        "helvetica-regular": ["HelveticaNeueRegular", "sans-serif"],
        "helvetica-medium": ["HelveticaNeueMedium", "sans-serif"],
        "helvetica-bold": ["HelveticaNeueBold", "sans-serif"],
      },
      fontWeight: {
        light: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
