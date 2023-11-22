/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundColor: {
        main: "#FCFCFE",
        utility: "#160404",
      },
      // fontFamily: {
      //   custom: ["quicksand", "sans"],
      // },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      Red: {
        100: "#FFE1EA",
        200: "#FFB1C8",
        300: "#FF6390",
        400: "#FF1659",
        500: "#C70039",
        600: "#95002B",
        700: "#64001D",
        800: "#32000E",
        900: "#200009",
      },
      Purple: {
        100: "#F4EBF2",
        200: "#EFC4E2",
        300: "#DF89C6",
        400: "#CF4FA9",
        500: "#A62D82",
        600: "#7D2262",
        700: "#531741",
        800: "#411032",
        900: "#2A0B21",
      },
      Beige: {
        100: "#FAF1ED",
        200: "#F3E4DD",
        300: "#E8CABB",
        400: "#DCAF99",
        500: "#D19477",
        600: "#B8653E",
        700: "#7B4429",
        800: "#612F16",
        900: "#3D2215",
      },
      Gray: {
        100: "#F6F7FC",
        200: "#F1F2F6",
        300: "#E4E6ED",
        400: "#D6D9E4",
        500: "#C8CCDB",
        600: "#9AA1B9",
        700: "#646D89",
        800: "#424C6B",
        900: "#2A2E3F",
      },
      Yellow: {
        100: "#FFF6D4",
        500: "#393735",
      },
      Green: {
        100: "#E7FFE7",
        500: "#197418",
      },
    },
  },
};
