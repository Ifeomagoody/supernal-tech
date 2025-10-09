/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        myAnimation: {
          "0%": { left: "0px", top: "0px" },
          "25%": { left: "200px", top: "0px" },
          "100%": { left: "0px", top: "0px" },
        },
      },
      animation: {
        myAnimation: "myAnimation 4s infinite",
      },
    },
  },
  plugins: [],
};
