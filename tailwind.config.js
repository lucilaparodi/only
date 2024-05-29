tailwind.config = {
  theme: {
    extend: {
      colors: {
        beige: "#DED5C8",
        white: "#FFFFFF",
        black: "#000000",
        red: "#FF0000",
        blue: "#2488C1",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xxl: "72px",
        ml: "52px",
        xm: "36px",
      },
      screens: {
        md: "1050px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 99.79%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".py-header": {
          paddingTop: "0.38rem",
          paddingBottom: "0.5rem",
        },
        ".w-custom": {
          width: "35%",
        },
        ".leading-custom": {
          lineHeight: "1.08",
        },
        ".top-custom": {
          top: "45%",
        },
        ".top-custom2": {
          top: "37%",
        },
        ".max-h-custom": {
          maxHeight: "100vh",
        },
        body: {
          background: "#ffff",
          color: "#000",
          fontFamily: '"Open Sans", sans-serif',
          margin: "0",
          padding: "0",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
