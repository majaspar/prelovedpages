/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customColor: "#f3f3f3",
      clrWhite: "rgb(255, 255, 255)",
      clrOffWhite: "rgb(245, 245, 245)",
      clrBlack: "rgb(0, 0, 0)",
      clrGreyDark: "rgb(66, 61, 61)",
      clrGreyLight: "rgb(108, 107, 117)",
      clrGreenPastel: "rgb(183, 235, 173)",
      clrPinkPastel: "rgb(237, 171, 183)",
      clrBluePastel: "rgb(158, 213, 245)",
      clrYellowPastel: "rgb(247, 219, 115)",
      clrPurpleDark: "rgb(73, 61, 153)"
    },
    extend: {},
  },
  plugins: [],
};
